from django.core.management.base import BaseCommand
from blogs.models import Category, BlogPost


class Command(BaseCommand):
    help = 'Seeds initial blog categories and posts for Autofya'

    def handle(self, *args, **kwargs):
        self.stdout.write('Seeding blogs categories & posts...')

        # Rename existing .NET category to Go if present
        Category.objects.filter(name='.NET').update(name='Go', slug='go', description='Golang microservices, concurrency, and high-performance backend systems.')

        categories_list = [
            ('Go', 'Golang microservices, concurrency, and high-performance backend systems.'),
            ('AI', 'Artificial intelligence algorithms and implementation.'),
            ('Analytics', 'Data analytics and telemetry processing.'),
            ('AR/VR', 'Augmented and virtual reality experiences.'),
            ('AWS', 'Amazon Web Services cloud architecture and DevOps.'),
            ('Block Chain', 'Distributed ledger and smart contract solutions.'),
            ('Business Intelligence', 'Enterprise data visualization and dashboards.'),
            ('Cloud', 'Cloud migration, serverless, and infrastructure.'),
            ('CMS', 'Content management systems and headless web platforms.'),
            ('Company News', 'Latest announcements and company updates from Autofya.'),
            ('Data Science', 'Big data engineering, data lakes, and predictive models.'),
            ('e-Commerce', 'Online retail, storefronts, and checkout automation.'),
            ('ERP', 'Enterprise resource planning integrations.'),
            ('Fintech', 'Digital banking, payment gateways, and security.'),
            ('Health', 'Healthcare software, HIPAA compliance, and LIMS modernization.'),
            ('Machine Learning & AI', 'Deep learning, neural networks, and LLMs.'),
            ('Mobile App', 'iOS and Android native & cross-platform apps.'),
            ('Outsourcing', 'Dedicated engineering pods and staff augmentation.'),
            ('Software Augmentation', 'Scaling engineering capacity with expert developers.'),
            ('SQA', 'Software quality assurance and automated testing.'),
            ('State of Art', 'Emerging software engineering trends and paradigms.'),
            ('Software', 'Core software engineering and architecture.'),
            ('Tech News', 'Global industry news and tech developments.'),
            ('Uncategorized', 'General articles and insights.'),
        ]

        categories_map = {}
        for name, desc in categories_list:
            cat, created = Category.objects.get_or_create(
                name=name,
                defaults={'description': desc}
            )
            categories_map[name] = cat
            if created:
                self.stdout.write(f"Created category: {name}")

        sample_posts = [
            {
                'title': 'Top 20 Java Development Companies in USA',
                'category': categories_map['Software'],
                'author_name': 'Autofya Tech Lead',
                'featured_image_url': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
                'excerpt': 'Discover how top Java engineering teams build scalable microservices and serverless architectures in 2026.',
                'content': '''<h2>Introduction</h2>
<p>Java continues to power massive enterprise infrastructure across the globe. With the introduction of Virtual Threads (Project Loom) and Spring Boot 3 native compilation, backend developer velocity has reached unprecedented speeds.</p>

<h3>Key Architectural Improvements in 2026</h3>
<ul>
  <li><strong>Virtual Threads:</strong> Handle millions of concurrent connections with minimal memory overhead.</li>
  <li><strong>GraalVM Native Image:</strong> Instant startup times under 50ms for containerized microservices.</li>
  <li><strong>Pattern Matching:</strong> Cleaner, robust domain models with reduced boilerplate code.</li>
</ul>

<blockquote>"Modern enterprise software requires lightweight concurrency paired with bulletproof reliability. Java's latest ecosystem delivers exactly that."</blockquote>

<p>At Autofya, we leverage modern Java microservices to build ultra-responsive automation platforms that scale seamlessly across enterprise environments.</p>''',
                'reading_time_minutes': 7,
                'is_published': True
            },
            {
                'title': 'Desktop LIMS Modernization Without a Rip and Replace',
                'category': categories_map['Health'],
                'author_name': 'Autofya Solutions Team',
                'featured_image_url': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
                'excerpt': 'Why modernizing laboratory information management systems (LIMS) is critical for clinical data compliance without risking operational downtime.',
                'content': '''<h2>The Challenge with Legacy LIMS</h2>
<p>Traditional LIMS platforms are often hindered by rigid monolithic structures, slow queries, and isolated database silos. Modern laboratories require real-time synchronization, automated quality control checks, and instant report distribution.</p>

<h3>Step-by-Step Modernization Strategy</h3>
<ol>
  <li><strong>API Layer Integration:</strong> Expose legacy database entities through secure REST and GraphQL endpoints.</li>
  <li><strong>Cloud Data Pipelines:</strong> Migrate continuous sample telemetry to scalable cloud storage.</li>
  <li><strong>Real-time Analytics Dashboard:</strong> Provide laboratory directors with live KPI metrics and automated sample tracking.</li>
</ol>

<p>By decoupling frontend interfaces from legacy database cores, lab teams achieve high throughput without disrupting daily operational compliance.</p>''',
                'reading_time_minutes': 6,
                'is_published': True
            },
            {
                'title': 'The One Internal Developer Problem - Lacks with One Person IT Team',
                'category': categories_map['Outsourcing'],
                'author_name': 'Autofya Engineering Lead',
                'featured_image_url': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
                'excerpt': 'Why relying on a single internal IT developer creates bottlenecks and how dedicated development pods solve retention and velocity issues.',
                'content': '''<h2>Scaling Engineering Capacity on Demand</h2>
<p>As digital transformation accelerates, companies face high demand for specialized engineering talent. Assembling dedicated development pods ensures team alignment, domain retention, and predictable sprint output.</p>

<h3>Key Evaluation Criteria</h3>
<ul>
  <li><strong>Technical Rigor:</strong> Assess architecture design skills alongside syntax proficiency.</li>
  <li><strong>Communication Protocol:</strong> Ensure asynchronous transparency and agile daily standup routines.</li>
  <li><strong>Security & Compliance:</strong> Implement zero-trust access controls and standardized CI/CD credentials.</li>
</ul>

<p>Autofya provides dedicated engineering teams tailored to complex cloud and AI automation projects.</p>''',
                'reading_time_minutes': 5,
                'is_published': True
            },
            {
                'title': 'Top 20 Mobile App Development Companies in Germany',
                'category': categories_map['Mobile App'],
                'author_name': 'Autofya Mobile Team',
                'featured_image_url': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
                'excerpt': 'Navigating GDPR compliance, accessibility standards, and modern cross-platform frameworks in the German tech market.',
                'content': '''<h2>Building Apps for European Markets</h2>
<p>Developing mobile applications for European users demands strict adherence to privacy legislation (GDPR) and rigorous UI accessibility specifications.</p>

<h3>Recommended Mobile Tech Stack</h3>
<ul>
  <li><strong>React Native & Expo:</strong> Single codebase deployment for iOS and Android with native performance.</li>
  <li><strong>Encrypted Local Storage:</strong> Secure storage of user authentication tokens and offline data.</li>
  <li><strong>Automated Testing Pipelines:</strong> End-to-end device testing before App Store release.</li>
</ul>

<p>Prioritizing data security and fluid UI responsiveness guarantees higher user retention across DACH enterprise markets.</p>''',
                'reading_time_minutes': 8,
                'is_published': True
            },
            {
                'title': 'Top 15 Software Development Companies in Ireland',
                'category': categories_map['Software'],
                'author_name': 'Autofya Research',
                'featured_image_url': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
                'excerpt': 'Exploring Dublin’s tech hub evolution, cloud infrastructure investments, and remote engineering hubs.',
                'content': '''<h2>Ireland’s Tech Expansion</h2>
<p>Dublin has established itself as one of Europe’s premier technological headquarters. Multinational cloud leaders and innovative software startups thrive in this vibrant ecosystem.</p>

<h3>Key Drivers of Growth</h3>
<ul>
  <li>High concentration of global software headquarters and R&D centers.</li>
  <li>Strong academic pipelines focused on distributed systems and machine learning.</li>
  <li>Robust cloud data center investment across Dublin and surrounding regions.</li>
</ul>

<p>Autofya continues to partner with European technology leaders to deliver modern software development and cloud integration services.</p>''',
                'reading_time_minutes': 5,
                'is_published': True
            },
            {
                'title': 'Top 20 JavaScript Development Companies in USA for 2026',
                'category': categories_map['Software'],
                'author_name': 'Autofya Web Team',
                'featured_image_url': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
                'excerpt': 'What web application developers need to know about Next.js 15+, React Server Components, and edge middleware.',
                'content': '''<h2>The Edge Computing Revolution</h2>
<p>Modern frontend web applications rely on edge runtimes to serve personalized HTML rendered within milliseconds of user interaction.</p>

<h3>Core Concepts</h3>
<ul>
  <li><strong>React Server Components (RSC):</strong> Zero bundle size for server-only dependencies.</li>
  <li><strong>Streaming SSR:</strong> Deliver critical UI elements instantly while async data loads smoothly.</li>
  <li><strong>Edge Middleware:</strong> Execute geolocation, A/B testing, and auth verification at the network edge.</li>
</ul>

<p>Combining these technologies provides web applications with blazing performance and optimal search engine visibility (SEO).</p>''',
                'reading_time_minutes': 6,
                'is_published': True
            }
        ]

        for post_data in sample_posts:
            post, created = BlogPost.objects.get_or_create(
                title=post_data['title'],
                defaults={
                    'category': post_data['category'],
                    'author_name': post_data['author_name'],
                    'featured_image_url': post_data['featured_image_url'],
                    'excerpt': post_data['excerpt'],
                    'content': post_data['content'],
                    'reading_time_minutes': post_data['reading_time_minutes'],
                    'is_published': post_data['is_published']
                }
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f"Created post: '{post.title}'"))

        self.stdout.write(self.style.SUCCESS('Successfully seeded all categories and posts!'))
