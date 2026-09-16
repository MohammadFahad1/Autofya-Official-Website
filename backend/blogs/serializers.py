from rest_framework import serializers
from blogs.models import Category, BlogPost


class CategorySerializer(serializers.ModelSerializer):
    posts_count = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'description', 'posts_count', 'created_at']
        read_only_fields = ['id', 'created_at']

    def get_posts_count(self, obj):
        return obj.posts.filter(is_published=True).count()


class BlogPostListSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), source='category', write_only=True
    )
    image = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = BlogPost
        fields = [
            'id', 'title', 'slug', 'category', 'category_id', 'author_name',
            'featured_image', 'featured_image_url', 'image', 'excerpt',
            'reading_time_minutes', 'views_count', 'is_published',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'slug', 'views_count', 'created_at', 'updated_at']

    def get_image(self, obj):
        request = self.context.get('request')
        if obj.featured_image:
            if request:
                return request.build_absolute_uri(obj.featured_image.url)
            return f"http://127.0.0.1:8000{obj.featured_image.url}"
        return obj.featured_image_url or "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"


class BlogPostDetailSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), source='category', write_only=True, required=False
    )
    image = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = BlogPost
        fields = [
            'id', 'title', 'slug', 'category', 'category_id', 'author_name',
            'featured_image', 'featured_image_url', 'image', 'excerpt',
            'content', 'reading_time_minutes', 'views_count', 'is_published',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'slug', 'views_count', 'created_at', 'updated_at']

    def get_image(self, obj):
        request = self.context.get('request')
        if obj.featured_image:
            if request:
                return request.build_absolute_uri(obj.featured_image.url)
            return f"http://127.0.0.1:8000{obj.featured_image.url}"
        return obj.featured_image_url or "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
