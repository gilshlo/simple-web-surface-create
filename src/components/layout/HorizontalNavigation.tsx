'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Info, 
  CalendarDays, 
  BookOpenCheck, 
  Users, 
  Award,
  Mail,
  HelpCircle 
} from 'lucide-react';

const navigationItems = [
  { href: '/', label: 'דף הבית', icon: Home },
  { href: '/about', label: 'אודות', icon: Info },
  { href: '/events', label: 'אירועים', icon: CalendarDays },
  { href: '/content-library', label: 'ספרייה', icon: BookOpenCheck },
  { href: '/member-directory', label: 'חברים', icon: Users },
  { href: '/member-benefits', label: 'הטבות', icon: Award },
  { href: '/faq', label: 'שאלות', icon: HelpCircle },
  { href: '/contact', label: 'צור קשר', icon: Mail },
];

export default function HorizontalNavigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-reverse space-x-6">
      {navigationItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center space-x-reverse space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              "hover:bg-accent/10 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
              isActive 
                ? "bg-accent/15 text-accent border border-accent/20" 
                : "text-muted-foreground hover:text-foreground"
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon className="h-4 w-4" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}