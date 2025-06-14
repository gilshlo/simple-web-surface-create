import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react'; // For RTL, ArrowRight would be "details"
import { cn } from "@/lib/utils";

interface PlaceholderCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageHint?: string;
  linkUrl?: string;
  linkText?: string;
  category?: string;
  date?: string;
  className?: string;
}

export default function PlaceholderCard({ title, description, imageUrl, imageHint, linkUrl, linkText = "קרא עוד", category, date, className }: PlaceholderCardProps) {
  return (
    <Card className={cn("group overflow-hidden hover:shadow-xl transition-all duration-500 border-border/50 bg-card/80 backdrop-blur-sm", className)}>
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title || "Placeholder Image"}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={imageHint || "abstract background"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <CardHeader className="relative">
        {category && <p className="text-xs text-accent font-semibold mb-1 tracking-wide uppercase">{category}</p>}
        <CardTitle className="font-headline text-xl text-primary group-hover:text-accent transition-colors duration-300">
          {title}
        </CardTitle>
        {date && <p className="text-sm text-muted-foreground">{date}</p>}
        <CardDescription className="text-muted-foreground/80 leading-relaxed">
          {description}
        </CardDescription>
        <div className="absolute bottom-4 left-6 w-0 h-0.5 bg-accent group-hover:w-12 transition-all duration-500"></div>
      </CardHeader>
      <CardContent className="flex-grow">
        
      </CardContent>
      {linkUrl && (
        <CardFooter>
          <Button variant="link" asChild className="text-primary hover:text-accent p-0">
            <a href={linkUrl}>
              {linkText}
              <ArrowLeft className="ms-2 h-4 w-4" /> {/* ArrowLeft for RTL "Read more ->" */}
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}