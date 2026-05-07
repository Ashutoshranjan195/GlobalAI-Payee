import React from 'react';

export function Avatar({ src, alt, size = 'md', className = '' }: any) {
  return (
    <div className={`rounded-full overflow-hidden bg-gray-200 flex items-center justify-center ${className}`}>
      {src ? <img src={src} alt={alt} className="w-full h-full object-cover" /> : <span className="text-gray-500">{alt?.charAt(0)}</span>}
    </div>
  );
}
