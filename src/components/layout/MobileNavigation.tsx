'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  Home, 
  CalendarDays, 
  BookOpenCheck, 
  Users, 
  Mail 
} from 'lucide-react';

const mobileNavItems = [
  { href: '/', label: 'הבית', icon: Home },
  { href: '/events', label: 'אירועים', icon: CalendarDays },
  { href: '/content-library', label: 'ספרייה', icon: BookOpenCheck },
  { href: '/member-directory', label: 'חברים', icon: Users },
  { href: '/contact', label: 'קשר', icon: Mail },
];

export default function MobileNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border md:hidden">
      <div className="flex items-center justify-around py-2">
        {mobileNavItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center px-3 py-2 min-w-0 flex-1 text-xs font-medium transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-lg",
                isActive 
                  ? "text-accent" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className={cn(
                "h-5 w-5 mb-1 transition-transform duration-200",
                isActive && "scale-110"
              )} />
              <span className="truncate">{item.label}</span>
              {isActive && (
                <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}