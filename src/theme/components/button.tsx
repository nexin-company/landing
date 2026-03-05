import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

const variantColorStyles = {
  filled: {
    default: "bg-foreground text-background",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    success: "bg-success text-white",
    danger: "bg-error text-white",
    warning: "bg-warning text-primary-foreground",
    info: "bg-info text-white",
    muted: "bg-muted text-muted-foreground",
  },
  outlined: {
    default: "border border-foreground text-foreground hover:bg-foreground/5",
    primary: "border border-primary text-primary hover:bg-primary/5",
    secondary: "border border-secondary text-secondary hover:bg-secondary/5",
    success: "border border-success text-success hover:bg-success/5",
    danger: "border border-error text-error hover:bg-error/5",
    warning: "border border-warning text-warning hover:bg-warning/5",
    info: "border border-info text-info hover:bg-info/5",
    muted: "border border-muted text-muted-foreground hover:bg-muted/5",
  },
  glass: {
    default:
      "bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/10 text-foreground hover:bg-white/20 dark:hover:bg-white/10",
    primary:
      "bg-primary/10 dark:bg-primary/20 border-primary/20 text-primary hover:bg-primary/20 dark:hover:bg-primary/30",
    secondary:
      "bg-secondary/10 dark:bg-secondary/20 border-secondary/20 text-secondary hover:bg-secondary/20 dark:hover:bg-secondary/30",
    success:
      "bg-success/10 dark:bg-success/20 border-success/20 text-success hover:bg-success/20 dark:hover:bg-success/30",
    danger:
      "bg-error/10 dark:bg-error/20 border-error/20 text-error hover:bg-error/20 dark:hover:bg-error/30",
    warning:
      "bg-warning/10 dark:bg-warning/20 border-warning/20 text-warning hover:bg-warning/20 dark:hover:bg-warning/30",
    info: "bg-info/10 dark:bg-info/20 border-info/20 text-info hover:bg-info/20 dark:hover:bg-info/30",
    muted:
      "bg-muted/10 border-muted/20 text-muted-foreground hover:bg-muted/20 dark:hover:bg-muted/30",
  },
  ghost: {
    default: "hover:bg-muted/50 text-foreground transition-colors",
    primary: "hover:bg-primary/10 text-primary transition-colors",
    secondary: "hover:bg-secondary/10 text-secondary transition-colors",
    success: "hover:bg-success/10 text-success transition-colors",
    danger: "hover:bg-error/10 text-error transition-colors",
    warning: "hover:bg-warning/10 text-warning transition-colors",
    info: "hover:bg-info/10 text-info transition-colors",
    muted: "hover:bg-muted/80 text-muted-foreground transition-colors",
  },
  unstyled: {
    default: "",
    primary: "text-primary",
    secondary: "text-secondary",
    success: "text-success",
    danger: "text-error",
    warning: "text-warning",
    info: "text-info",
    muted: "text-muted-foreground",
  },
};

const baseVariantStyles = {
  filled: "hover:opacity-90 active:scale-95 shadow-sm",
  outlined: "active:scale-95",
  glass:
    "backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] active:scale-95 border",
  ghost: "",
  unstyled: "",
};

const sizeStyles = {
  none: "",
  xs: "text-xs px-2.5 py-1.5 gap-1.5 rounded-md",
  sm: "text-sm px-3 py-2 gap-2 rounded-md",
  md: "text-base px-4 py-2.5 gap-2 rounded-md",
  lg: "text-lg px-6 py-3 gap-2.5 rounded-lg",
  xl: "text-xl px-8 py-4 gap-3 font-medium rounded-xl",
  icon: "p-2 rounded-md flex-shrink-0",
};

export type ButtonVariant = keyof typeof baseVariantStyles;
export type ButtonColor = keyof typeof variantColorStyles.filled;
export type ButtonSize = keyof typeof sizeStyles;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  icon?: LucideIcon | React.ElementType;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "filled",
      color,
      size = "md",
      icon: Icon,
      children,
      ...props
    },
    ref,
  ) => {
    // Si no se le pasa color explícitamente, determinamos el más lógico por el variant para mantener compatibilidad:
    const defaultColor: ButtonColor =
      variant === "outlined"
        ? "secondary"
        : variant === "glass" || variant === "ghost"
          ? "default"
          : "primary";
    const actualColor = color || defaultColor;

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed",
          variantColorStyles[variant][actualColor],
          baseVariantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {Icon && (
          <Icon
            className={cn(
              size === "xs"
                ? "w-3.5 h-3.5"
                : size === "sm"
                  ? "w-4 h-4"
                  : size === "md" || size === "icon"
                    ? "w-5 h-5"
                    : size === "lg"
                      ? "w-6 h-6"
                      : size === "none"
                        ? ""
                        : "w-7 h-7",
            )}
          />
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
