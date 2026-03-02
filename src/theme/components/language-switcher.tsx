"use client";

import * as React from "react";
import { Dropdown } from "./dropdown";
import { useRouter } from "next/navigation";
import "flag-icons/css/flag-icons.min.css"; // Ensure flags load

export function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const router = useRouter();

  const handleLocaleChange = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  const items = [
    { label: "Español", value: "es", icon: <span className="fi fi-mx text-lg rounded-sm" /> },
    { label: "English", value: "en", icon: <span className="fi fi-us text-lg rounded-sm" /> },
  ];

  return (
    <Dropdown
      items={items}
      value={currentLocale}
      onChange={handleLocaleChange}
    />
  );
}
