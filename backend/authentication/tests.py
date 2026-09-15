from django.test import TestCase
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient
from rest_framework import status

User = get_user_model()

class UserAuthTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(
            email="test@example.com",
            password="Password123!",
            full_name="Test User",
            is_active=True
        )

    def test_user_creation_and_str(self):
        self.assertEqual(str(self.user), "Test User test@example.com")
        self.assertFalse(hasattr(self.user, 'plan'))

    def test_login(self):
        response = self.client.post('/auth/login/', {
            'email': 'test@example.com',
            'password': 'Password123!'
        })
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.data['success'])
        self.assertNotIn('plan', response.data)

    def test_profile(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.get('/auth/profile/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['email'], 'test@example.com')
        self.assertNotIn('plan', response.data)
