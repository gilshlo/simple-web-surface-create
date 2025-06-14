import { cn } from "@/lib/utils";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <div className="relative inline-block">
        <h2 className="text-4xl font-bold font-headline text-primary mb-4 relative">
          {title}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-accent via-accent/80 to-accent rounded-full"></div>
        </h2>
      </div>
      {subtitle && (
        <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mt-6 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}