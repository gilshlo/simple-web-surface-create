
import React from 'react';
import Image from 'next/image'; // Added Image import
import Link from 'next/link';   // Added Link import
import { Sidebar, SidebarInset, SidebarRail } from '@/components/ui/sidebar';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import AppFooter from './AppFooter';

type SiteLayoutProps = {
  children: React.ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      {/* Professional Logo Section with Enhanced Styling */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5"></div>
        <div className="relative flex justify-center py-8 border-b border-border/50 bg-card/80 backdrop-blur-sm">
          <Link href="/" aria-label="Institute of Tax Consultants in Israel Home" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
              <Image
                src="http://www.ymas.org.il/App_Themes/default/Images/logo2.jpg"
                alt="Institute of Tax Consultants in Israel Logo"
                width={365} 
                height={108}
                priority
                className="object-contain transition-all duration-300"
                data-ai-hint="organization logo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>
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
          <main className="relative">
            {/* Content wrapper with professional spacing */}
            <div className="container mx-auto p-6 md:p-8 lg:p-12 max-w-7xl">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm p-6 md:p-8">
                {children}
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
      <AppFooter />
    </div>
  );
}
