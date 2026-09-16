from django.test import TestCase
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient
from rest_framework import status
from analytics.models import PageViewLog

User = get_user_model()


class AnalyticsTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.admin_user = User.objects.create_user(
            email="analytics_admin@autofya.com",
            password="AdminPassword123!",
            full_name="Analytics Admin",
            is_staff=True,
            is_active=True
        )

    def test_track_page_view_creation_and_heartbeat(self):
        # 1. Initial Page View Tracking
        response = self.client.post(
            "/analytics/track/",
            {
                "session_id": "test_sess_123",
                "page_url": "/insurtech",
                "page_title": "InsurTech Solutions",
                "duration_seconds": 0
            },
            format="json"
        )

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(response.data["success"])
        page_view_id = response.data["page_view_id"]

        # 2. Heartbeat Duration Update
        update_response = self.client.post(
            "/analytics/track/",
            {
                "page_view_id": page_view_id,
                "duration_seconds": 45,
                "section_name": "hero-section"
            },
            format="json"
        )

        self.assertEqual(update_response.status_code, status.HTTP_200_OK)
        log = PageViewLog.objects.get(id=page_view_id)
        self.assertEqual(log.duration_seconds, 45)
        self.assertEqual(log.section_name, "hero-section")

    def test_admin_analytics_stats_and_logs(self):
        # Create sample logs
        PageViewLog.objects.create(
            session_id="sess_1",
            ip_address="192.168.1.1",
            page_url="/insurtech",
            duration_seconds=30
        )
        PageViewLog.objects.create(
            session_id="sess_2",
            ip_address="192.168.1.2",
            page_url="/insurtech",
            duration_seconds=60
        )
        PageViewLog.objects.create(
            session_id="sess_3",
            ip_address="192.168.1.1",
            page_url="/lms-development",
            duration_seconds=120
        )

        self.client.force_authenticate(user=self.admin_user)

        # Stats API
        stats_res = self.client.get("/analytics/admin/stats/")
        self.assertEqual(stats_res.status_code, status.HTTP_200_OK)
        self.assertEqual(stats_res.data["stats"]["total_pageviews"], 3)
        self.assertEqual(stats_res.data["stats"]["unique_visitors"], 2)

        # Top pages ranking
        top_pages = stats_res.data["stats"]["top_pages"]
        self.assertEqual(top_pages[0]["page_url"], "/insurtech")
        self.assertEqual(top_pages[0]["total_views"], 2)

        # Logs API
        logs_res = self.client.get("/analytics/admin/logs/?search=192.168.1.1")
        self.assertEqual(logs_res.status_code, status.HTTP_200_OK)
        self.assertEqual(logs_res.data["count"], 2)
