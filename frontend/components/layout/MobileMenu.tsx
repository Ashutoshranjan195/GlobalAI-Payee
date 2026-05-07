import React from 'react';
import Link from 'next/link';

export function MobileMenu({ isOpen, onClose, navigation, isAuthenticated, user, onLogout }: any) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 p-4">
      <button onClick={onClose} className="absolute top-4 right-4 p-2 text-gray-500">Close</button>
      <div className="mt-10 flex flex-col space-y-4">
        {navigation.map((item: any) => (
          <Link key={item.name} href={item.href} onClick={onClose} className="text-lg font-medium">
            {item.name}
          </Link>
        ))}
        {isAuthenticated ? (
          <button onClick={onLogout} className="text-left text-lg font-medium text-red-600">Sign Out</button>
        ) : (
          <Link href="/auth/login" className="text-lg font-medium text-blue-600">Sign In</Link>
        )}
      </div>
    </div>
  );
}
