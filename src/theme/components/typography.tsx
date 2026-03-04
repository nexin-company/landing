import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("m-0", {
  variants: {
    variant: {
      title: "font-bold tracking-tight",
      paragraph: "leading-relaxed",
      subtitle: "font-medium",
    },
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
    color: {
      default: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      success: "text-success",
      danger: "text-destructive",
      warning: "text-warning",
      info: "text-info",
      muted: "text-muted-foreground",
    },
    weight: {
      light: "font-light",
      regular: "font-normal",
      bold: "font-bold",
      black: "font-black",
    },
  },
  compoundVariants: [
    // --- TITLE SIZES ---
    { variant: "title", size: "xs", className: "text-xl md:text-2xl" }, // Example: Section headers
    { variant: "title", size: "sm", className: "text-2xl md:text-3xl" }, // Example: Page sub-headers
    { variant: "title", size: "md", className: "text-3xl md:text-4xl" }, // Example: Default Page headers
    { variant: "title", size: "lg", className: "text-4xl md:text-5xl" }, // Example: Hero section titles
    {
      variant: "title",
      size: "xl",
      className: "text-5xl md:text-6xl lg:text-7xl",
    }, // Example: Massive landing titles

    // --- PARAGRAPH SIZES ---
    { variant: "paragraph", size: "xs", className: "text-xs" },
    { variant: "paragraph", size: "sm", className: "text-sm" },
    { variant: "paragraph", size: "md", className: "text-base" }, // Default paragraph
    { variant: "paragraph", size: "lg", className: "text-lg md:text-xl" },
    { variant: "paragraph", size: "xl", className: "text-xl md:text-2xl" }, // Lead paragraphs

    // --- SUBTITLE & TOOLTIP SIZES ---
    { variant: "subtitle", size: "xs", className: "text-[10px]" },
    { variant: "subtitle", size: "sm", className: "text-xs" },
    { variant: "subtitle", size: "md", className: "text-sm" }, // Default subtitle
    { variant: "subtitle", size: "lg", className: "text-base" },
    { variant: "subtitle", size: "xl", className: "text-lg" },
  ],
  defaultVariants: {
    variant: "paragraph",
    size: "md",
    color: "default",
    weight: "regular",
  },
});

export interface TypographyProps
  extends
    Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    { className, variant, size, color, weight, as, children, ...props },
    ref,
  ) => {
    // Determine the default semantic tag if `as` is not explicitly provided.
    const defaultTagMap: Record<
      NonNullable<typeof variant>,
      React.ElementType
    > = {
      title: "h2",
      paragraph: "p",
      subtitle: "span",
    };

    const currentVariant = variant || "paragraph";
    const Component = as || defaultTagMap[currentVariant];

    return (
      <Component
        ref={ref}
        className={cn(
          typographyVariants({ variant, size, color, weight, className }),
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
