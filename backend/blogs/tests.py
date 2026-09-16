from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status
from authentication.models import User
from blogs.models import Category, BlogPost


class BlogsAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()

        # Users
        self.admin_user = User.objects.create_superuser(
            email='admin@autofya.com',
            password='Password123!',
            full_name='Admin User'
        )
        self.normal_user = User.objects.create_user(
            email='user@autofya.com',
            password='Password123!',
            full_name='Normal User'
        )

        # Categories
        self.cat_dev = Category.objects.create(name='Software Engineering', slug='software-engineering')
        self.cat_ai = Category.objects.create(name='AI & Automation', slug='ai-automation')

        # Blog Posts
        self.post_1 = BlogPost.objects.create(
            title='Modern Software Architecture 2026',
            slug='modern-software-architecture-2026',
            category=self.cat_dev,
            author=self.admin_user,
            author_name='Autofya Team',
            excerpt='Insights into scalable microservices and serverless workflows.',
            content='<p>Full rich content about software engineering.</p>',
            reading_time_minutes=6,
            is_published=True
        )
        self.post_2 = BlogPost.objects.create(
            title='AI Automation in Healthcare',
            slug='ai-automation-healthcare',
            category=self.cat_ai,
            author=self.admin_user,
            author_name='Dr. AI',
            excerpt='How intelligent workflows are revolutionizing clinic automation.',
            content='<p>Full content on AI automation in clinics.</p>',
            reading_time_minutes=4,
            is_published=True
        )
        self.post_draft = BlogPost.objects.create(
            title='Unpublished Draft Article',
            slug='unpublished-draft-article',
            category=self.cat_dev,
            author=self.admin_user,
            excerpt='Draft excerpt.',
            content='<p>Draft content.</p>',
            is_published=False
        )

    def test_public_category_list(self):
        response = self.client.get('/blogs/categories/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.data['success'])
        self.assertEqual(len(response.data['categories']), 2)

    def test_public_blog_list(self):
        response = self.client.get('/blogs/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.data['success'])
        self.assertEqual(response.data['count'], 2)

    def test_public_blog_list_filter_category(self):
        response = self.client.get('/blogs/?category=ai-automation')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 1)
        self.assertEqual(response.data['posts'][0]['slug'], 'ai-automation-healthcare')

    def test_public_blog_detail(self):
        response = self.client.get(f'/blogs/{self.post_1.slug}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.data['success'])
        self.assertEqual(response.data['post']['title'], 'Modern Software Architecture 2026')
        # View count should increment
        self.post_1.refresh_from_db()
        self.assertEqual(self.post_1.views_count, 1)

    def test_admin_category_crud(self):
        # Unauthenticated access forbidden
        resp_unauth = self.client.get('/blogs/admin/categories/')
        self.assertEqual(resp_unauth.status_code, status.HTTP_401_UNAUTHORIZED)

        # Admin access
        self.client.force_authenticate(user=self.admin_user)
        resp_get = self.client.get('/blogs/admin/categories/')
        self.assertEqual(resp_get.status_code, status.HTTP_200_OK)

        resp_create = self.client.post('/blogs/admin/categories/', {
            'name': 'Cloud Computing',
            'description': 'Articles about cloud platforms'
        })
        self.assertEqual(resp_create.status_code, status.HTTP_201_CREATED)
        new_cat_id = resp_create.data['category']['id']

        resp_patch = self.client.patch(f'/blogs/admin/categories/{new_cat_id}/', {
            'name': 'Cloud & DevOps'
        })
        self.assertEqual(resp_patch.status_code, status.HTTP_200_OK)
        self.assertEqual(resp_patch.data['category']['name'], 'Cloud & DevOps')

        resp_del = self.client.delete(f'/blogs/admin/categories/{new_cat_id}/')
        self.assertEqual(resp_del.status_code, status.HTTP_200_OK)

    def test_admin_blog_post_crud(self):
        self.client.force_authenticate(user=self.admin_user)
        
        # Create post
        resp_create = self.client.post('/blogs/admin/posts/', {
            'title': 'New Breakthrough in AI Tech',
            'category_id': self.cat_ai.id,
            'author_name': 'Tech Editor',
            'excerpt': 'Brief summary of AI breakthrough',
            'content': '<h2>Heading</h2><p>Article body content...</p>',
            'reading_time_minutes': 3,
            'is_published': True
        })
        self.assertEqual(resp_create.status_code, status.HTTP_201_CREATED)
        new_post_id = resp_create.data['post']['id']

        # Update post
        resp_patch = self.client.patch(f'/blogs/admin/posts/{new_post_id}/', {
            'title': 'New Breakthrough in AI Technology'
        })
        self.assertEqual(resp_patch.status_code, status.HTTP_200_OK)
        self.assertEqual(resp_patch.data['post']['title'], 'New Breakthrough in AI Technology')

        # Delete post
        resp_del = self.client.delete(f'/blogs/admin/posts/{new_post_id}/')
        self.assertEqual(resp_del.status_code, status.HTTP_200_OK)
