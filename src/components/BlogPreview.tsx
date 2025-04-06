'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: 'The Science Behind Effective Strength Training',
    excerpt: 'Discover the physiological principles that make strength training so effective and how to apply them to your routine.',
    author: 'Dr. Michelle Wong',
    date: 'March 15, 2023',
    category: 'Strength Training',
    image: '/blog-strength.jpg',
    slug: 'science-behind-strength-training'
  },
  {
    id: 2,
    title: 'Nutrition Strategies for Optimal Recovery',
    excerpt: 'Learn how to fuel your body properly before and after workouts to maximize recovery and performance.',
    author: 'Jake Simmons',
    date: 'February 28, 2023',
    category: 'Nutrition',
    image: '/blog-nutrition.jpg',
    slug: 'nutrition-strategies-recovery'
  },
  {
    id: 3,
    title: 'Building Community Through Fitness',
    excerpt: 'How group training can improve not just your physical health but also create meaningful social connections.',
    author: 'Sarah Parker',
    date: 'January 10, 2023',
    category: 'Community',
    image: '/blog-community.jpg',
    slug: 'building-community-fitness'
  }
];

const BlogPreview = () => {
  return (
    <section className="section-padding bg-[#56b5bd] text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Latest from Our <span className="text-white font-extrabold">Blog</span>
          </h2>
          <p className="text-white max-w-3xl mx-auto">
            Expert tips, workout guides, nutrition advice, and inspiring community stories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#45a4ac] rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-60 w-full">
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
                <div className="flex items-center text-sm text-white mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">
                  <Link href={`/blog/${post.slug}`} className="text-white hover:text-gray-100 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-white mb-4">{post.excerpt}</p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-white font-medium hover:underline inline-flex items-center"
                >
                  Read more <span className="ml-1">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Link 
            href="/blog" 
            className="bg-white text-[#56b5bd] hover:bg-gray-100 font-medium py-2 px-6 rounded-full transition duration-300"
          >
            See All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview; 