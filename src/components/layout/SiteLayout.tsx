
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sidebar, SidebarInset, SidebarRail } from '@/components/ui/sidebar';
import { SidebarTrigger } from '@/components/ui/sidebar';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import AppFooter from './AppFooter';
import HorizontalNavigation from './HorizontalNavigation';
import MobileNavigation from './MobileNavigation';

type SiteLayoutProps = {
  children: React.ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      
      {/* Enhanced Navigation Section */}
      <div className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <Link href="/" aria-label="Institute of Tax Consultants in Israel Home" className="group">
              <div className="relative overflow-hidden rounded-lg transition-all duration-300 group-hover:scale-105">
                <Image
                  src="http://www.ymas.org.il/App_Themes/default/Images/logo2.jpg"
                  alt="Institute of Tax Consultants in Israel Logo"
                  width={200} 
                  height={60}
                  priority
                  className="object-contain transition-all duration-300"
                  data-ai-hint="organization logo"
                />
              </div>
            </Link>
            
            <HorizontalNavigation />
            
            <div className="flex items-center gap-2 md:hidden">
              <SidebarTrigger className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-1 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}>
        </div>
        
        <Sidebar collapsible="icon" variant="sidebar" side="right" className="border-s border-border/50 bg-sidebar/95 backdrop-blur-sm">
          <AppSidebar />
          <SidebarRail />
        </Sidebar>
        
        <SidebarInset className="flex-1 overflow-y-auto">
          <main className="relative pb-16 md:pb-0">
            {/* Content wrapper with professional spacing */}
            <div className="container mx-auto p-4 md:p-6 lg:p-8 max-w-7xl">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm p-4 md:p-6 lg:p-8">
                {children}
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNavigation />
      
      <AppFooter />
    </div>
  );
}
