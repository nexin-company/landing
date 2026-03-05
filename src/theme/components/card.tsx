import * as React from "react";
import { cn } from "@/lib/utils";
import { Box } from "./box";

const variantColorStyles = {
  filled: {
    default: "bg-surface/10 text-foreground border-1 border-border shadow-sm",
    primary:
      "bg-primary/10 text-primary-foreground border-1 border-primary shadow-sm",
    secondary:
      "bg-secondary/10 text-secondary-foreground border-1 border-secondary shadow-sm",
    success: "bg-success/10 text-white border-1 border-success shadow-sm",
    danger: "bg-error/10 text-white border-1 border-error shadow-sm",
    warning:
      "bg-warning/10 text-primary-foreground border-1 border-warning shadow-sm",
    info: "bg-info/10 text-white border-1 border-info shadow-sm",
    muted:
      "bg-muted/10 text-muted-foreground border-1 border-border-1 shadow-sm",
  },
  outlined: {
    default: "bg-transparent text-foreground border-1 border-border",
    primary: "bg-transparent text-primary border-1 border-primary",
    secondary: "bg-transparent text-secondary border-1 border-secondary",
    success: "bg-transparent text-success border-1 border-success",
    danger: "bg-transparent text-error border-1 border-error",
    warning: "bg-transparent text-warning border-1 border-warning",
    info: "bg-transparent text-info border-1 border-info",
    muted: "bg-transparent text-muted-foreground border-1 border-muted",
  },
  glass: {
    default:
      "bg-white/5 dark:bg-black/20 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-foreground",
    primary:
      "bg-primary/5 dark:bg-primary/20 backdrop-blur-xl border border-primary/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-primary",
    secondary:
      "bg-secondary/5 dark:bg-secondary/20 backdrop-blur-xl border border-secondary/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-secondary",
    success:
      "bg-success/5 dark:bg-success/20 backdrop-blur-xl border border-success/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-success",
    danger:
      "bg-error/5 dark:bg-error/20 backdrop-blur-xl border border-error/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-error",
    warning:
      "bg-warning/5 dark:bg-warning/20 backdrop-blur-xl border border-warning/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-warning",
    info: "bg-info/5 dark:bg-info/20 backdrop-blur-xl border border-info/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-info",
    muted:
      "bg-muted/10 backdrop-blur-xl border border-muted/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-muted-foreground",
  },
};

export type CardVariant = keyof typeof variantColorStyles;
export type CardColor = keyof typeof variantColorStyles.filled;

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  color?: CardColor;
  as?: React.ElementType;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "filled", color = "default", as, ...props }, ref) => {
    return (
      <Box
        as={as}
        ref={ref}
        className={cn(
          "rounded-xl overflow-hidden",
          variantColorStyles[variant][color],
          className,
        )}
        {...props}
      />
    );
  },
);
Card.displayName = "Card";

export { Card };
