"use client";

import * as React from "react";
import { ThemeSwitcher } from "./theme-switcher";
import { LanguageSwitcher } from "./language-switcher";
import { Dropdown } from "./dropdown";
import { Factory, Landmark, Lock, PackageCheck, ShoppingCart, Users, Menu } from "lucide-react";

export function Navbar({ locale }: { locale: string }) {
  const apps = [
    { label: "Guardian", value: "guardian", icon: <Lock className="w-4 h-4 text-primary" /> },
    { label: "Factory", value: "factory", icon: <Factory className="w-4 h-4 text-info" /> },
    { label: "Finance", value: "finance", icon: <Landmark className="w-4 h-4 text-success" /> },
    { label: "Logistic", value: "logistic", icon: <PackageCheck className="w-4 h-4 text-warning" /> },
    { label: "Procurement", value: "procurement", icon: <ShoppingCart className="w-4 h-4 text-secondary-foreground" /> },
    { label: "Vendor", value: "vendor", icon: <Users className="w-4 h-4 text-muted-foreground" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-6">
          <span className="text-xl font-bold tracking-tighter text-foreground">
            NEXIN
          </span>

          {/* Apps Dropdown (for Desktop/Tablet) */}
          <div className="hidden md:flex">
            <Dropdown
              items={apps}
              value=""
              onChange={() => {}} // In a real app, this would route to the app's subdomain/page
              triggerLabel={<span className="font-semibold text-foreground">Aplicaciones</span>}
              className="w-48"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <LanguageSwitcher currentLocale={locale} />

          {/* Mobile Menu Icon */}
          <button className="md:hidden p-2 text-foreground focus:outline-none">
            <Menu className="w-5 h-5" />
          </button>
        </div>

      </div>
    </header>
  );
}
