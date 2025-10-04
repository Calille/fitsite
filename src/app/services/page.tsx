import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Our Services | TP Health & Fitness Coaching',
  description: 'Explore our comprehensive fitness services including personal training, group classes, fat loss programmes, and specialized workshops.',
};

export default function ServicesPage() {
  return <ServicesClient />;
} 