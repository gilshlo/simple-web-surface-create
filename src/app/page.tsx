import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/components/shared/SectionTitle';
import PlaceholderCard from '@/components/shared/PlaceholderCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';

export default function Home() {
  const publications = [
    { title: "עדכון חקיקה מס הכנסה", description: "סיכום השינויים האחרונים בחוקי מס הכנסה והשפעתם על יועצי המס.", category: "מס הכנסה", date: "15.07.2024" },
    { title: "מדריך מע\"מ לעסקים קטנים", description: "כל מה שצריך לדעת על התנהלות נכונה מול רשויות המע\"מ.", category: "מע\"מ", date: "10.07.2024" },
    { title: "פסיקה חדשה במיסוי מקרקעין", description: "ניתוח פסק דין משמעותי והשלכותיו על עסקאות נדל\"ן.", category: "מיסוי מקרקעין", date: "05.07.2024" },
  ];

  const events = [
    { title: "כנס שנתי ליועצי מס", description: "הכנס המרכזי של הלשכה עם מיטב המרצים והחידושים בתחום.", date: "20-22.08.2024", location: "מלון דן, אילת" },
    { title: "סדנת מיסוי בינלאומי", description: "העמקה בסוגיות מיסוי חוצה גבולות ואמנות מס.", date: "05.09.2024", location: "משרדי הלשכה, תל אביב" },
    { title: "יום עיון מס חברות", description: "דיונים ועדכונים בתחום מס החברות בישראל.", date: "18.09.2024", location: "זום (מקוון)" },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 rounded-2xl"></div>
        <div className="absolute inset-0" 
             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}>
        </div>

        <div className="relative text-center py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold font-headline text-primary mb-8 leading-tight">
              ברוכים הבאים
              <span className="block text-accent mt-2">לאתר הלשכה</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              לשכת יועצי המס בישראל - המקום המרכזי לכל המידע המקצועי, האירועים וההטבות עבור יועצי המס המוסמכים בישראל
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary to-accent">
                הצטרף ללשכה
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-4 rounded-xl border-2 border-accent/50 hover:border-accent hover:bg-accent/10 transition-all duration-300">
                למד עוד
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle>
          <Icons.newspaper className="inline-block me-3 w-7 h-7" />
          פרסומים אחרונים
        </SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <PlaceholderCard 
              key={index} 
              title={pub.title} 
              description={pub.description} 
              linkUrl="#" 
              category={pub.category}
              date={pub.date}
              imageUrl={`https://placehold.co/400x250.png?random=${index}`}
              imageHint="document abstract"
            />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button variant="outline" asChild>
            <Link href="/content-library">לכל הפרסומים <Icons.rss className="ms-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <section>
        <SectionTitle>
          <Icons.calendar className="inline-block me-3 w-7 h-7" />
          אירועים קרובים
        </SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{event.date} | {event.location}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
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
          <Icons.info className="inline-block me-3 w-7 h-7" />
          על הלשכה
        </SectionTitle>
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <p className="mb-4">
            לשכת יועצי המס בישראל היא הגוף המייצג הרשמי של יועצי המס בישראל. הלשכה פועלת לקידום מעמדם המקצועי של חבריה, להענקת ידע וכלים מקצועיים, ולייצוגם מול רשויות המס וגופים ציבוריים אחרים. אנו מחויבים לסטנדרטים הגבוהים ביותר של מקצועיות ואתיקה.
          </p>
          <Button asChild>
            <Link href="/about">קראו עוד</Link>
          </Button>
        </div>
      </section>

      <section>
        <SectionTitle>
          <Icons.externalLink className="inline-block me-3 w-7 h-7" />
          קישורים שימושיים
        </SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            {name: "רשות המסים", href: "#"},
            {name: "ביטוח לאומי", href: "#"},
            {name: "משרד האוצר", href: "#"},
            {name: "הספר הירוק", href: "#"}
          ].map(link => (
            <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="block p-4 bg-card rounded-lg shadow-sm hover:bg-accent/10 hover:shadow-md transition-all">
              <p className="font-semibold text-primary">{link.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}