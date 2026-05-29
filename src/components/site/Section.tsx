import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", className)}>
      <div className="container mx-auto px-4 sm:px-6">
        {(eyebrow || title || description) && (
          <div className="max-w-2xl mb-12 sm:mb-16">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-[Space_Grotesk] text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-muted-foreground text-base sm:text-lg">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}