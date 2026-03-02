import * as React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "blockquote" | "muted";
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = "p", as, children, ...props }, ref) => {
    const Component = as || (variant.startsWith("h") ? variant : variant === "blockquote" ? "blockquote" : "p") as React.ElementType;

    const variantClasses = {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      muted: "text-sm text-muted-foreground",
    };

    return (
      <Component ref={ref} className={cn(variantClasses[variant], className)} {...props}>
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";

export { Typography };
