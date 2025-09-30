'use client';

import { useState, useEffect } from 'react';
import { NavigationProps } from '@/types/navigation';
import { useNavigation } from '@/hooks/useNavigation';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/utils/cn';

export const Navigation: React.FC<NavigationProps> = ({ 
  items, 
  className 
}) => {
  const {
    navItems,
    isScrolled,
    isMobileMenuOpen,
    handleNavClick,
    toggleMobileMenu,
    closeMobileMenu
  } = useNavigation(items);

  const [currentTime, setCurrentTime] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Bjornflow-style scroll hide/show animation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out',
          isVisible ? 'translate-y-0' : '-translate-y-full',
          isScrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/20' : 'bg-transparent',
          className
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand with enhanced animation */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handleNavClick({ id: 'home', label: 'Home', href: '/home' })}
                className="text-xl font-light text-white hover:text-gray-300 transition-all duration-500 tracking-wide group relative overflow-hidden"
              >
                <div className="relative">
                  <span className="group-hover:hidden transition-all duration-300">Tima</span>
                  <span className="hidden group-hover:inline transition-all duration-300">Togtokhjargal.CH</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></div>
                </div>
              </button>
            </div>

            {/* Desktop Navigation with bjornflow-style animation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-12">
                {navItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="relative group"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <NavLink
                      item={item}
                      onClick={handleNavClick}
                      className="relative"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section - Sound & Time */}
            <div className="hidden lg:flex items-center space-x-4 text-sm text-white/80">
              <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                TURN ON SOUND
              </span>
              <span className="text-white/40">•</span>
              <span className="font-mono text-sm">
                {currentTime}
              </span>
            </div>

            {/* Mobile menu button with 1 line */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-white hover:text-gray-300 transition-all duration-300 relative group"
                aria-label="Toggle mobile menu"
              >
                <div className="w-8 h-8 flex justify-center items-center">
                  <span
                    className={cn(
                      'block w-6 h-0.5 bg-white transition-all duration-500 ease-out',
                      isMobileMenuOpen && 'rotate-45'
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        items={navItems}
      />
    </>
  );
};