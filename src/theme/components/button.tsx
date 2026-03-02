import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined" | "glass";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  icon: LucideIcon; // Mandatory icon prop
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "filled", size = "md", icon: Icon, children, ...props }, ref) => {
    
    // Define classes based on variant
    const variantClasses = {
      filled: "bg-primary text-primary-foreground hover:opacity-90 active:scale-95 shadow-sm",
      outlined: "border border-primary text-primary hover:bg-primary/5 active:scale-95",
      glass: "bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-foreground hover:bg-white/20 dark:hover:bg-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] active:scale-95",
    };

    // Define classes based on T-shirt sizing
    const sizeClasses = {
      xs: "text-xs px-2.5 py-1.5 gap-1.5 rounded-md",
      sm: "text-sm px-3 py-2 gap-2 rounded-md",
      md: "text-base px-4 py-2.5 gap-2 rounded-md",
      lg: "text-lg px-6 py-3 gap-2.5 rounded-lg",
      xl: "text-xl px-8 py-4 gap-3 font-medium rounded-xl",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <Icon className={cn(
          size === "xs" ? "w-3.5 h-3.5" : 
          size === "sm" ? "w-4 h-4" : 
          size === "md" ? "w-5 h-5" : 
          size === "lg" ? "w-6 h-6" : "w-7 h-7"
        )} />
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
