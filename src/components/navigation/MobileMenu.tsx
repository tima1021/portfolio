'use client';

import { MobileMenuProps } from '@/types/navigation';
import { NavLink } from './NavLink';
import { cn } from '@/utils/cn';

export const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onClose, 
  items 
}) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black',
          'border-l border-white/10 z-50 transform transition-transform duration-500 ease-out',
          'lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-lg font-light text-white uppercase tracking-wide">
              Menu
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-white/80 hover:text-white transition-colors duration-300"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          
          {/* Navigation Items */}
          <nav className="flex-1 p-6">
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id}>
                  <NavLink
                    item={item}
                    onClick={() => {
                      // Handle navigation
                      const element = document.getElementById(item.id);
                      if (element) {
                        element.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                      onClose();
                    }}
                    className="w-full text-left justify-start py-2 text-lg"
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};