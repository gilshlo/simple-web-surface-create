import Link from 'next/link';
import { Facebook, Linkedin, Twitter, Youtube, Rss } from 'lucide-react'; // XIcon might not exist, using Twitter
import { Phone, Mail, MapPin } from 'lucide-react';

export default function AppFooter() {
  return (
    <footer className="relative bg-gradient-to-r from-primary/5 via-muted to-primary/5 text-muted-foreground border-t border-border/50">
      {/* Decorative top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold text-foreground mb-6 relative">
              לשכת יועצי המס בישראל
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent rounded-full"></div>
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground/90">
              הלשכה המייצגת את יועצי המס המוסמכים בישראל, המספקת שירותים מקצועיים ותמיכה לחבריה.
            </p>
            <div className="pt-4">
              <div className="flex gap-4">
                <Link href="#" className="group">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 group-hover:scale-110">
                    <Facebook className="h-5 w-5" />
                  </div>
                </Link>
                <Link href="#" className="group">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 group-hover:scale-110">
                    <Linkedin className="h-5 w-5" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold text-foreground mb-6 relative">
              קישורים מהירים
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "אודות הלשכה" },
                { href: "/member-directory", label: "אינדקס חברים" },
                { href: "/events", label: "אירועים וכנסים" },
                { href: "/contact", label: "צור קשר" }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground/90 hover:text-accent transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold text-foreground mb-6 relative">
              יצירת קשר
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent rounded-full"></div>
            </h3>
            <div className="space-y-4">
              {[
                { icon: Phone, text: "03-5167731" },
                { icon: Mail, text: "info@ymas.org.il" },
                { icon: MapPin, text: "תל אביב, ישראל" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground/90 hover:text-accent transition-colors duration-300 group">
                  <div className="p-1.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-12 pt-8">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground/70">
              &copy; 2024 לשכת יועצי המס בישראל. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}