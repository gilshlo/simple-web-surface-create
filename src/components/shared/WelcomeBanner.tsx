'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Info, ArrowLeft, X } from 'lucide-react';
import { useState } from 'react';

interface WelcomeBannerProps {
  onDismiss?: () => void;
  className?: string;
}

export default function WelcomeBanner({ onDismiss, className }: WelcomeBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  return (
    <Card className={`relative bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 border-accent/20 shadow-sm ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-reverse space-x-4 flex-1">
            <div className="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
              <Info className="h-5 w-5 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold font-headline text-primary mb-2">
                חדשים כאן? ברוכים הבאים!
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                גלו את ההטבות והשירותים הייחודיים לחברי הלשכה - ספרייה מקצועית, אירועים בלעדיים, 
                ייעוץ משפטי וכלים דיגיטליים מתקדמים למקצוע יועץ המס.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  size="sm" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-sm"
                >
                  למד עוד על החברות
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-accent/30 text-accent hover:bg-accent/10"
                >
                  צפה בהטבות חברים
                </Button>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDismiss}
            className="flex-shrink-0 h-8 w-8 p-0 hover:bg-accent/10 text-muted-foreground hover:text-foreground"
            aria-label="סגור הודעת ברכה"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}