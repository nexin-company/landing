"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Box } from "./box";
import { Button } from "./button";
import { Typography } from "./typography";

interface HoverDropdownItem {
  label: string | React.ReactNode;
  value: string;
  icon?: React.ReactNode;
  href?: string;
  description?: string;
  hoverColorClass?: string;
}

interface HoverDropdownProps {
  items: HoverDropdownItem[];
  triggerLabel: React.ReactNode;
  className?: string;
}

export function HoverDropdown({
  items,
  triggerLabel,
  className,
}: HoverDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // slight delay to make moving mouse to menu forgiving
  };

  return (
    <Box
      className={cn("relative inline-block text-left", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        variant="unstyled"
        size="none"
        type="button"
        className={cn(
          "inline-flex items-center gap-1.5 transition-colors focus:outline-none cursor-pointer group",
          isOpen ? "text-primary" : "text-foreground hover:text-primary",
        )}
        aria-expanded={isOpen}
      >
        {triggerLabel}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen
              ? "rotate-180 text-primary"
              : "text-muted-foreground group-hover:text-primary",
          )}
          aria-hidden="true"
        />
      </Button>

      {/* Invisible bridge to keep hover state active while moving mouse down */}
      {isOpen && (
        <Box className="absolute left-0 w-full h-4 bg-transparent top-full" />
      )}

      {/* Dropdown Menu */}
      <Box
        className={cn(
          "absolute left-0 z-50 mt-2 w-72 origin-top-left rounded-xl bg-background/95 backdrop-blur-xl shadow-lg border border-border/50 ring-1 ring-black/5 focus:outline-none overflow-hidden transition-all duration-200 ease-out",
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible",
        )}
      >
        <Box className="p-2 grid grid-cols-1 gap-1">
          {items.map((item) => (
            <Link
              key={item.value}
              href={item.href || "#"}
              className="flex items-start gap-3 p-3 text-left rounded-lg hover:bg-muted/50 transition-colors group cursor-pointer"
            >
              {item.icon && (
                <Box className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-md bg-background flex items-center justify-center border border-border/50 group-hover:scale-105 transition-transform shadow-sm">
                  {item.icon}
                </Box>
              )}
              <Box className="flex flex-col">
                <Typography
                  variant="subtitle"
                  size="md"
                  className={cn(
                    "font-medium transition-colors",
                    item.hoverColorClass ||
                      "text-foreground group-hover:text-primary",
                  )}
                >
                  {item.label}
                </Typography>
                {item.description && (
                  <Typography
                    variant="subtitle"
                    size="sm"
                    color="muted"
                    className="mt-0.5 leading-snug"
                  >
                    {item.description}
                  </Typography>
                )}
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
