import * as React from "react";
import { cn } from "@/lib/utils";
import { Box } from "./box";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "solid" | "glass";
  as?: React.ElementType;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "solid", as, ...props }, ref) => {
    return (
      <Box
        as={as}
        ref={ref}
        className={cn(
          "rounded-xl overflow-hidden",
          variant === "solid"
            ? "bg-surface text-foreground border border-border shadow-sm"
            : "bg-white/5 dark:bg-black/20 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-foreground",
          className,
        )}
        {...props}
      />
    );
  },
);
Card.displayName = "Card";

export { Card };
