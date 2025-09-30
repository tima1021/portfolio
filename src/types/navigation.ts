export interface NavItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export interface NavigationProps {
  items: NavItem[];
  className?: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export interface NavLinkProps {
  item: NavItem;
  onClick: (item: NavItem) => void;
  className?: string;
}