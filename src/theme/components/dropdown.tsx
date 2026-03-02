"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  label: string | React.ReactNode;
  value: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  items: DropdownItem[];
  value: string;
  onChange: (value: string) => void;
  triggerIcon?: React.ReactNode;
  triggerLabel?: React.ReactNode;
  className?: string;
}

export function Dropdown({
  items,
  value,
  onChange,
  triggerIcon,
  triggerLabel,
  className,
}: DropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedItem = items.find((item) => item.value === value) || items[0];

  return (
    <div className={cn("relative inline-block text-left", className)} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between items-center w-full h-10 rounded-md border border-border bg-surface px-3 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-white/5 focus:outline-none cursor-pointer disabled:cursor-not-allowed"
      >
        <div className="flex items-center gap-2">
          {triggerIcon || selectedItem?.icon}
          {triggerLabel || selectedItem?.label}
        </div>
        <ChevronDown className="ml-2 -mr-1 h-4 w-4 text-muted-foreground" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-surface shadow-lg border border-border ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
          <div className="py-1">
            {items.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onChange(item.value);
                  setIsOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-2 px-4 py-2 text-sm text-left hover:bg-white/10 transition-colors cursor-pointer",
                  value === item.value ? "bg-white/5 font-semibold text-primary" : "text-foreground"
                )}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
