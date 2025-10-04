import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Fitness Blog | TP Health & Fitness Coaching',
  description: 'Explore our fitness blog for expert tips, workout guides, nutrition advice, and inspirational stories from our community.',
};

export default function BlogPage() {
  return <BlogClient />;
}