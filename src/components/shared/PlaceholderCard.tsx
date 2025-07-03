import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Lock } from 'lucide-react'; // For RTL, ArrowRight would be "details"
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
  priority?: 'high' | 'medium' | 'low';
  memberOnly?: boolean;
}

export default function PlaceholderCard({ 
  title, 
  description, 
  imageUrl, 
  imageHint, 
  linkUrl, 
  linkText = "קרא עוד", 
  category, 
  date, 
  className,
  priority = 'medium',
  memberOnly = false 
}: PlaceholderCardProps) {
  
  const getCardStyles = () => {
    const baseStyles = "group overflow-hidden hover:shadow-xl transition-all duration-500 bg-card/80 backdrop-blur-sm";
    
    switch (priority) {
      case 'high':
        return cn(baseStyles, "border-2 border-accent/30 hover:border-accent/50 shadow-lg", className);
      case 'low':
        return cn(baseStyles, "border border-border/30 hover:border-border/50", className);
      default:
        return cn(baseStyles, "border border-border/50 hover:border-accent/30", className);
    }
  };

  return (
    <Card className={getCardStyles()}>
      <div className="relative h-48 overflow-hidden">
        {memberOnly && (
          <Badge className="absolute top-2 right-2 z-10 bg-primary/90 text-primary-foreground backdrop-blur-sm">
            <Lock className="h-3 w-3 mr-1" />
            חברים בלבד
          </Badge>
        )}
        <Image
          src={imageUrl}
          alt={title || "Placeholder Image"}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          data-ai-hint={imageHint || "abstract background"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <CardHeader className="relative">
        {category && (
          <Badge variant="secondary" className="text-xs mb-2 w-fit">
            {category}
          </Badge>
        )}
        <CardTitle className={cn(
          "font-headline text-primary group-hover:text-accent transition-colors duration-300",
          priority === 'high' ? "text-xl" : "text-lg"
        )}>
          {title}
        </CardTitle>
        {date && <p className="text-sm text-muted-foreground mb-2">{date}</p>}
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
        <div className="absolute bottom-4 left-6 w-0 h-0.5 bg-accent group-hover:w-12 transition-all duration-500"></div>
      </CardHeader>
      <CardContent className="flex-grow">
        
      </CardContent>
      {linkUrl && (
        <CardFooter>
          <Button 
            variant="link" 
            asChild 
            className="text-primary hover:text-accent p-0 focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            <a href={linkUrl} aria-label={`${linkText} - ${title}`}>
              {linkText}
              <ArrowLeft className="ms-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}