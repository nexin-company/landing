import * as React from "react";
import { cn } from "@/lib/utils";

const variantStyles = {
  title: "font-bold tracking-tight",
  paragraph: "leading-relaxed",
  subtitle: "font-medium",
};

const colorStyles = {
  default: "text-foreground",
  primary: "text-primary",
  secondary: "text-secondary",
  success: "text-success",
  danger: "text-destructive",
  warning: "text-warning",
  info: "text-info",
  muted: "text-muted-foreground",
};

const weightStyles = {
  light: "font-light",
  regular: "font-normal",
  bold: "font-bold",
  black: "font-black",
};

const sizeStyles = {
  title: {
    xs: "text-xl md:text-2xl",
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl lg:text-7xl",
  },
  paragraph: {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg md:text-xl",
    xl: "text-xl md:text-2xl",
  },
  subtitle: {
    xs: "text-[10px]",
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
  },
};

type TypographyVariant = keyof typeof variantStyles;
type TypographySize = "xs" | "sm" | "md" | "lg" | "xl";
type TypographyColor = keyof typeof colorStyles;
type TypographyWeight = keyof typeof weightStyles;

export interface TypographyProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  "color"
> {
  variant?: TypographyVariant;
  size?: TypographySize;
  color?: TypographyColor;
  weight?: TypographyWeight;
  as?: React.ElementType;
}

export function typographyVariants({
  variant = "paragraph",
  size = "md",
  color = "default",
  weight = "regular",
  className,
}: TypographyProps): string {
  return cn(
    "m-0",
    variantStyles[variant],
    sizeStyles[variant][size],
    colorStyles[color],
    weightStyles[weight],
    className,
  );
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      className,
      variant = "paragraph",
      size = "md",
      color = "default",
      weight = "regular",
      as,
      children,
      ...props
    },
    ref,
  ) => {
    // Determine the default semantic tag if `as` is not explicitly provided.
    const defaultTagMap: Record<TypographyVariant, React.ElementType> = {
      title: "h2",
      paragraph: "p",
      subtitle: "span",
    };

    const Component = as || defaultTagMap[variant];

    return (
      <Component
        ref={ref}
        className={typographyVariants({
          variant,
          size,
          color,
          weight,
          className,
        })}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Typography.displayName = "Typography";

export { Typography };
