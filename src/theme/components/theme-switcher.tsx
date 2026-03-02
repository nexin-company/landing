"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Dropdown } from "./dropdown";
import { Moon, Sun, Settings } from "lucide-react";
import { useTranslations } from "next-intl";

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  // Safe mounting to avoid hydration mismatch
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 animate-pulse bg-white/10 rounded-md"></div>
    );
  }

  const items = [
    { label: "Light", value: "light", icon: <Sun className="w-4 h-4" /> },
    { label: "Dark", value: "dark", icon: <Moon className="w-4 h-4" /> },
    { label: "System", value: "system", icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <Dropdown
      items={items}
      value={theme || "system"}
      onChange={(newTheme) => setTheme(newTheme)}
      triggerLabel=""
      triggerIcon={resolvedTheme === "light" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    />
  );
}
