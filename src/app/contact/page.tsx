import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | TP Health & Fitness Coaching',
  description: 'Get in touch with TP Health & Fitness Coaching for inquiries about memberships, personal training, or class schedules.',
};

export default function ContactPage() {
  return <ContactClient />;
}