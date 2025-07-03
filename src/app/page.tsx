import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/components/shared/SectionTitle';
import PlaceholderCard from '@/components/shared/PlaceholderCard';
import WelcomeBanner from '@/components/shared/WelcomeBanner';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlayCircle, Newspaper, CalendarDays, Info, ExternalLink, Rss, Star, Clock, Users } from 'lucide-react';

export default function Home() {
  const publications = [
    { 
      title: "עדכון חקיקה מס הכנסה", 
      description: "סיכום השינויים האחרונים בחוקי מס הכנסה והשפעתם על יועצי המס.", 
      category: "מס הכנסה", 
      date: "15.07.2024",
      priority: "high" as const,
      memberOnly: false
    },
    { 
      title: "מדריך מע\"מ לעסקים קטנים", 
      description: "כל מה שצריך לדעת על התנהלות נכונה מול רשויות המע\"מ.", 
      category: "מע\"מ", 
      date: "10.07.2024",
      priority: "medium" as const,
      memberOnly: true
    },
    { 
      title: "פסיקה חדשה במיסוי מקרקעין", 
      description: "ניתוח פסק דין משמעותי והשלכותיו על עסקאות נדל\"ן.", 
      category: "מיסוי מקרקעין", 
      date: "05.07.2024",
      priority: "medium" as const,
      memberOnly: false
    },
  ];

  const events = [
    { title: "כנס שנתי ליועצי מס", description: "הכנס המרכזי של הלשכה עם מיטב המרצים והחידושים בתחום.", date: "20-22.08.2024", location: "מלון דן, אילת" },
    { title: "סדנת מיסוי בינלאומי", description: "העמקה בסוגיות מיסוי חוצה גבולות ואמנות מס.", date: "05.09.2024", location: "משרדי הלשכה, תל אביב" },
    { title: "יום עיון מס חברות", description: "דיונים ועדכונים בתחום מס החברות בישראל.", date: "18.09.2024", location: "זום (מקוון)" },
  ];

  return (
    <div className="space-y-12">
      {/* Welcome Banner for New Users */}
      <WelcomeBanner />

      {/* Optimized Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 rounded-2xl"></div>
        <div className="absolute inset-0" 
             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 gap-8 items-center py-12 md:py-16 px-6">
            <div className="text-center md:text-start">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary mb-6 leading-tight">
                ברוכים הבאים
                <span className="block text-accent mt-2">לאתר הלשכה</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground/80 mb-8 leading-relaxed">
                לשכת יועצי המס בישראל - המקום המרכזי לכל המידע המקצועי, האירועים וההטבות עבור יועצי המס המוסמכים בישראל
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary to-accent"
                  aria-label="הצטרף ללשכה - הרשמה לחברות"
                >
                  הצטרף ללשכה
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 rounded-xl border-2 border-accent/50 hover:border-accent hover:bg-accent/10 transition-all duration-300"
                >
                  למד עוד
                </Button>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                  <Users className="h-8 w-8 text-accent mb-2" />
                  <h3 className="font-semibold text-primary mb-1">2,500+ חברים</h3>
                  <p className="text-sm text-muted-foreground">יועצי מס מוסמכים בכל הארץ</p>
                </div>
                <div className="bg-card/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                  <Newspaper className="h-8 w-8 text-accent mb-2" />
                  <h3 className="font-semibold text-primary mb-1">פרסומים שבועיים</h3>
                  <p className="text-sm text-muted-foreground">עדכונים מקצועיים וחקיקה</p>
                </div>
                <div className="bg-card/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                  <CalendarDays className="h-8 w-8 text-accent mb-2" />
                  <h3 className="font-semibold text-primary mb-1">50+ אירועים</h3>
                  <p className="text-sm text-muted-foreground">כנסים, סדנאות וימי עיון</p>
                </div>
                <div className="bg-card/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                  <Star className="h-8 w-8 text-accent mb-2" />
                  <h3 className="font-semibold text-primary mb-1">הטבות בלעדיות</h3>
                  <p className="text-sm text-muted-foreground">שירותים וכלים מקצועיים</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle>
          <Newspaper className="inline-block me-3 w-7 h-7" />
          פרסומים אחרונים
        </SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <div key={index} className="relative">
              {index === 0 && (
                <Badge className="absolute -top-2 -right-2 z-10 bg-accent text-accent-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  חדש
                </Badge>
              )}
                             <PlaceholderCard 
                 title={pub.title} 
                 description={pub.description} 
                 linkUrl="#" 
                 category={pub.category}
                 date={pub.date}
                 imageUrl={`https://placehold.co/400x250.png?random=${index}`}
                 imageHint="document abstract"
                 priority={pub.priority}
                 memberOnly={pub.memberOnly}
               />
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button variant="outline" asChild>
            <Link href="/content-library">לכל הפרסומים <Rss className="ms-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <section>
        <SectionTitle>
          <CalendarDays className="inline-block me-3 w-7 h-7" />
          אירועים קרובים
        </SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-accent/30 bg-card/80 backdrop-blur-sm">
              <CardHeader className="relative">
                {index === 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    מומלץ
                  </Badge>
                )}
                <CardTitle className="font-headline text-xl text-primary hover:text-accent transition-colors">
                  {event.title}
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  <span>{event.date}</span>
                  <span>|</span>
                  <span>{event.location}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  asChild 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-sm focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                  <Link href={`/events/${index + 1}`}>פרטים והרשמה</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button variant="outline" asChild>
            <Link href="/events">לכל האירועים</Link>
          </Button>
        </div>
      </section>

      <section>
        <SectionTitle>
          <Info className="inline-block me-3 w-7 h-7" />
          על הלשכה
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-sm">
            <h3 className="text-xl font-semibold font-headline text-primary mb-4">
              הגוף המקצועי המוביל בישראל
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              לשכת יועצי המס בישראל היא הגוף המייצג הרשמי של יועצי המס בישראל. הלשכה פועלת לקידום מעמדם המקצועי של חבריה, להענקת ידע וכלים מקצועיים, ולייצוגם מול רשויות המס וגופים ציבוריים אחרים.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/about">קראו עוד</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/member-registration">הצטרפו אלינו</Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
              <div className="text-2xl font-bold text-accent mb-1">2,500+</div>
              <div className="text-sm text-muted-foreground">חברים פעילים</div>
            </div>
            <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div className="text-2xl font-bold text-primary mb-1">30+</div>
              <div className="text-sm text-muted-foreground">שנות פעילות</div>
            </div>
            <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
              <div className="text-2xl font-bold text-accent mb-1">100+</div>
              <div className="text-sm text-muted-foreground">פרסומים שנתיים</div>
            </div>
            <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div className="text-2xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">אירועים מקצועיים</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle>
          <ExternalLink className="inline-block me-3 w-7 h-7" />
          קישורים שימושיים
        </SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {name: "רשות המסים", href: "#", description: "אתר רשמי"},
            {name: "ביטוח לאומי", href: "#", description: "שירותים דיגיטליים"},
            {name: "משרד האוצר", href: "#", description: "חקיקה ותקנות"},
            {name: "הספר הירוק", href: "#", description: "מידע מקצועי"}
          ].map(link => (
            <Link 
              key={link.name} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 hover:border-accent/50 hover:bg-accent/5 shadow-sm hover:shadow-md transition-all duration-300 focus:ring-2 focus:ring-accent focus:ring-offset-2"
              aria-label={`פתח קישור ל${link.name} - ${link.description}`}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-primary group-hover:text-accent transition-colors">
                  {link.name}
                </p>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <p className="text-xs text-muted-foreground">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}