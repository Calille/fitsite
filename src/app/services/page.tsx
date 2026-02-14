import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Personal Training | TP Health & Fitness Coaching',
  description: 'Explore our personal training packages including one-to-one sessions, small group PT, and dual fit options at TP Health & Fitness Coaching.',
};

export default function ServicesPage() {
  return <ServicesClient />;
}
