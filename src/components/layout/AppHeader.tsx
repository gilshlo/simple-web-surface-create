import Link from 'next/link';
// Image import no longer needed here
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { UserCircle, Globe, Phone } from 'lucide-react';

export default function AppHeader() {
  return (
    <header className="relative bg-gradient-to-r from-primary via-primary/95 to-accent text-primary-foreground shadow-lg">
      {/* Decorative top bar */}
      <div className="h-1 bg-gradient-to-r from-accent via-primary to-accent"></div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold font-headline tracking-wide">לשכת יועצי המס בישראל</h1>
            <p className="text-sm opacity-90 font-body tracking-wider">Institute of Tax Consultants in Israel</p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/15 transition-all duration-300 rounded-lg backdrop-blur-sm border border-primary-foreground/20">
              <Globe className="h-4 w-4 me-2" />
              <span className="font-medium">עברית</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/15 transition-all duration-300 rounded-lg backdrop-blur-sm border border-primary-foreground/20">
              <Phone className="h-4 w-4 me-2" />
              <span className="font-medium">03-5167731</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle bottom shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent"></div>
    </header>
  );
}