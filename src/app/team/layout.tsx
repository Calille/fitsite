import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team | TP Health & Fitness Coaching',
  description: 'Meet our dedicated team of fitness professionals at TP Health & Fitness Coaching - experts in personal training, nutrition, and wellness.',
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 