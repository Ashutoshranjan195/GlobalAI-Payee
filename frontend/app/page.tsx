import { Metadata } from 'next';
import { Hero } from '@/components/landing/Hero';
import { Header } from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'GlobalAi Payee - Universal AI + Blockchain Wallet',
  description: 'A universal AI + Blockchain-powered wallet that works globally with location-based detection, automatic currency conversion, and seamless offline + online transactions.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}