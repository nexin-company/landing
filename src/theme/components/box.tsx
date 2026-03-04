import * as React from "react";
import { cn } from "@/lib/utils";

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

const Box = React.forwardRef<HTMLElement, BoxProps>(
  ({ className, as, children, ...props }, ref) => {
    // Default to 'div' if no 'as' prop is provided
    const Component = as || "div";

    return (
      <Component ref={ref} className={cn(className)} {...props}>
        {children}
      </Component>
    );
  },
);

Box.displayName = "Box";

export { Box };
