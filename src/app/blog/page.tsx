import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaTag } from 'react-icons/fa';

export const metadata = {
  title: 'Fitness Blog | TP Health & Fitness Coaching',
  description: 'Explore our fitness blog for expert tips, workout guides, nutrition advice, and inspirational stories from our community.',
};

// Sample blog data - in a real app this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: 'Importance of Eating Fat',
    excerpt: 'Dietary fat is essential for burning fat, losing weight, boosting energy, and balancing hormones. Learn why incorporating healthy fats can improve overall well-being.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
    author: 'Emma Thompson',
    date: 'May 15, 2023',
    category: 'Nutrition',
    image: '/blog-nutrition.jpg',
    slug: 'importance-of-eating-fat',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Why You Must Train with Weights During Menopause',
    excerpt: 'Strength training during menopause can significantly reduce symptoms, with research showing up to a 78% decrease in vasomotor issues. Discover the benefits and how to get started.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
    author: 'Dr. Sarah Parker',
    date: 'April 28, 2023',
    category: 'Women\'s Health',
    image: '/blog-strength.jpg',
    slug: 'weight-training-during-menopause',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Protein! How Do I Eat More?',
    excerpt: 'Struggling to get enough protein in your diet? This article shares practical tips, including protein-packed recipes like oat flour pancakes with egg whites and protein powder.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
    author: 'Jake Simmons',
    date: 'April 10, 2023',
    category: 'Nutrition',
    image: '/blog-nutrition.jpg',
    slug: 'how-to-eat-more-protein',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Benefits of Training Over 50',
    excerpt: 'It\'s never too late to start lifting weights. Discover how strength training can improve mobility, energy levels, and overall quality of life as you age.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
    author: 'Robert Collins',
    date: 'March 22, 2023',
    category: 'Senior Fitness',
    image: '/blog-strength.jpg',
    slug: 'benefits-of-training-over-50',
    readTime: '7 min read'
  },
  {
    id: 5,
    title: 'Joint Health: Five Ways You Can Help Prevent and Live Well with Arthritis',
    excerpt: 'Osteoarthritis is the most common type of arthritis, but there are ways to prevent it and manage symptoms. Learn five key strategies for maintaining joint health.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.',
    author: 'Dr. Michelle Wong',
    date: 'March 5, 2023',
    category: 'Wellness',
    image: '/blog-wellness.jpg',
    slug: 'joint-health-arthritis-prevention',
    readTime: '9 min read'
  }
];

// All categories from blog posts
const categories = [...new Set(blogPosts.map(post => post.category))];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] flex items-center bg-white text-gray-800">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/blog-hero.jpg"
              alt="TP Health & Fitness Blog"
              fill
              priority
              className="object-cover opacity-10"
            />
          </div>
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#56b5bd]">Fitness Insights & Tips</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Expert advice and articles to support your fitness journey.
            </p>
          </div>
        </section>

        {/* Blog Content */}
        <section className="section-padding bg-gray-50 text-gray-800">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Latest Blog Posts</h2>
              <p className="text-gray-600">
                Stay informed with the latest fitness trends, training techniques, and wellness advice from our expert team at TP Health & Fitness Coaching.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post) => (
                    <article 
                      key={post.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
                    >
                      <div className="relative h-56 w-full">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-[#56b5bd] text-white text-xs font-medium px-2 py-1 rounded">
                          {post.category}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <h2 className="text-xl font-bold mb-3 text-gray-800">
                          <Link href={`/blog/${post.slug}`} className="hover:text-[#56b5bd] transition-colors">
                            {post.title}
                          </Link>
                        </h2>
                        
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">By {post.author}</span>
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="text-[#56b5bd] font-medium hover:underline inline-flex items-center"
                          >
                            Read more <span className="ml-1">→</span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                  <div className="flex space-x-2">
                    <a 
                      href="#" 
                      className="px-4 py-2 rounded-md bg-[#45a4ac] text-white font-medium hover:bg-[#56b5bd] transition-colors"
                    >
                      Previous
                    </a>
                    <a href="#" className="px-4 py-2 rounded-md bg-[#56b5bd] text-white font-medium hover:bg-[#45a4ac] transition-colors">
                      1
                    </a>
                    <a 
                      href="#" 
                      className="px-4 py-2 rounded-md bg-[#45a4ac] text-white font-medium hover:bg-[#56b5bd] transition-colors"
                    >
                      Next
                    </a>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Search Box */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-100">
                  <h3 className="text-lg font-bold mb-4 text-gray-800">Search Articles</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#56b5bd]"
                    />
                    <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-100">
                  <h3 className="text-lg font-bold mb-4 text-gray-800">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link 
                          href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center text-gray-600 hover:text-[#56b5bd] transition-colors"
                        >
                          <FaTag className="mr-2 text-xs text-[#56b5bd]" />
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-100">
                  <h3 className="text-lg font-bold mb-4 text-gray-800">Recent Posts</h3>
                  <ul className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <li key={post.id} className="flex items-start">
                        <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="font-medium text-gray-800 hover:text-[#56b5bd] transition-colors line-clamp-2"
                          >
                            {post.title}
                          </Link>
                          <span className="text-xs text-gray-500">{post.date}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-[#56b5bd] rounded-lg shadow-md p-6 text-white">
                  <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="mb-4 text-white/90">Get the latest fitness tips and articles delivered straight to your inbox.</p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-md focus:outline-none text-gray-800"
                    />
                    <button 
                      type="submit" 
                      className="w-full bg-white text-[#56b5bd] font-bold py-3 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 