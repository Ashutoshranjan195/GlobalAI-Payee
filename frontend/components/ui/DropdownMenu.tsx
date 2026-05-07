import React from 'react';

export const DropdownMenu = Object.assign(
  ({ children }: any) => <div className="relative inline-block text-left">{children}</div>,
  {
    Trigger: ({ children, asChild }: any) => <div>{children}</div>,
    Content: ({ children, className }: any) => <div className={`absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${className}`}>{children}</div>,
    Label: ({ children }: any) => <div className="px-4 py-2 text-sm font-semibold">{children}</div>,
    Item: ({ children, onClick, asChild, className }: any) => <div onClick={onClick} className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${className}`}>{children}</div>,
    Separator: () => <div className="border-t border-gray-100 my-1" />
  }
);
