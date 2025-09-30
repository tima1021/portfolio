'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/types/navigation';

export const useNavigation = (items: NavItem[]) => {
  const [activeItem, setActiveItem] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for background
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active item based on current pathname
  useEffect(() => {
    const currentItem = items.find(item => item.href === pathname);
    if (currentItem) {
      setActiveItem(currentItem.id);
    } else if (pathname === '/') {
      setActiveItem('home');
    } else {
      setActiveItem('');
    }
  }, [pathname, items]);

  // Handle navigation click
  const handleNavClick = useCallback((item: NavItem) => {
    setActiveItem(item.id);
    setIsMobileMenuOpen(false);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Update items with active state
  const navItems = items.map(item => ({
    ...item,
    isActive: item.id === activeItem
  }));

  return {
    navItems,
    activeItem,
    isScrolled,
    isMobileMenuOpen,
    handleNavClick,
    toggleMobileMenu,
    closeMobileMenu
  };
};