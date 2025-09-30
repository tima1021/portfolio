'use client';

import Link from 'next/link';
import { NavLinkProps } from '@/types/navigation';
import { cn } from '@/utils/cn';

export const NavLink: React.FC<NavLinkProps> = ({ 
  item, 
  onClick, 
  className 
}) => {
  return (
    <Link
      href={item.href}
      onClick={() => onClick(item)}
      className={cn(
        'relative text-sm font-light text-white/60 hover:text-white transition-all duration-500 ease-out',
        'uppercase tracking-widest',
        'focus:outline-none focus:text-white',
        'group hover:scale-105',
        item.isActive && 'text-white',
        className
      )}
    >
      <span className="relative block">
        {item.label}
        <span 
          className={cn(
            'absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-500 ease-out',
            'group-hover:w-full',
            item.isActive && 'w-full'
          )}
        />
      </span>
    </Link>
  );
};