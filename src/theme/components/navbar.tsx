"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SettingsMenu } from "./settings-menu";
import { HoverDropdown } from "./hover-dropdown";
import { Box } from "./box";
import { Button } from "./button";
import { Typography } from "./typography";
import {
  Database,
  Factory,
  Landmark,
  Lock,
  PackageCheck,
  ShoppingCart,
  Users,
  Menu,
  X,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import "flag-icons/css/flag-icons.min.css";

export function Navbar({ locale }: { locale: string }) {
  const t = useTranslations("Navbar");
  const tSettings = useTranslations("Settings");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleLocaleChange = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  const apps = [
    {
      label: "Guardian",
      value: "guardian",
      icon: <Lock className="w-4 h-4 text-guardian" />,
      description: t("guardian_desc"),
      hoverColorClass: "group-hover:text-guardian",
    },
    {
      label: "Collector",
      value: "collector",
      icon: <Database className="w-4 h-4 text-collector" />,
      description: t("collector_desc"),
      hoverColorClass: "group-hover:text-collector",
    },
    {
      label: "Factory",
      value: "factory",
      icon: <Factory className="w-4 h-4 text-factory" />,
      description: t("factory_desc"),
      hoverColorClass: "group-hover:text-factory",
    },
    {
      label: "Finance",
      value: "finance",
      icon: <Landmark className="w-4 h-4 text-finance" />,
      description: t("finance_desc"),
      hoverColorClass: "group-hover:text-finance",
    },
    {
      label: "Logistic",
      value: "logistic",
      icon: <PackageCheck className="w-4 h-4 text-logistic" />,
      description: t("logistic_desc"),
      hoverColorClass: "group-hover:text-logistic",
    },
    {
      label: "Procurement",
      value: "procurement",
      icon: <ShoppingCart className="w-4 h-4 text-procurement" />,
      description: t("procurement_desc"),
      hoverColorClass: "group-hover:text-procurement",
    },
    {
      label: "Vendor",
      value: "vendor",
      icon: <Users className="w-4 h-4 text-vendor" />,
      description: t("vendor_desc"),
      hoverColorClass: "group-hover:text-vendor",
    },
  ];

  return (
    <Box
      as="header"
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-xl shadow-sm"
    >
      <Box className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Box className="flex items-center gap-6">
          <Link
            href="/"
            className="h-6 md:h-7 flex-shrink-0 flex items-center relative"
          >
            <Image
              src="/nexin-logos/svg/nexin-logo-icon.svg"
              alt="Nexin"
              width={28}
              height={28}
              className="h-full w-auto"
              priority
            />
            <span className="sr-only">Nexin</span>
          </Link>

          {/* Apps Menu and Links (for Desktop/Tablet) */}
          <Box className="hidden md:flex ml-4 gap-6 items-center">
            <HoverDropdown
              items={apps}
              triggerLabel={
                <Typography
                  variant="subtitle"
                  size="md"
                  className="font-medium text-inherit"
                >
                  {t("apps")}
                </Typography>
              }
            />
            {/* Additional Corporate Links */}
            <Link href="#docs">
              <Typography
                variant="subtitle"
                size="md"
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                {t("docs")}
              </Typography>
            </Link>
            <Link href="#pricing">
              <Typography
                variant="subtitle"
                size="md"
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                {t("pricing")}
              </Typography>
            </Link>
            <Link href="#company">
              <Typography
                variant="subtitle"
                size="md"
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                {t("company")}
              </Typography>
            </Link>
          </Box>
        </Box>

        {/* Actions */}
        <Box className="flex items-center gap-2">
          <Box className="hidden md:block">
            <SettingsMenu currentLocale={locale} />
          </Box>

          {/* Mobile Menu Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            icon={isMobileMenuOpen ? X : Menu}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </Box>
      </Box>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <Box
          ref={mobileMenuRef}
          className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl absolute top-full left-0 w-full shadow-lg"
        >
          <Box className="px-4 py-4 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <Typography
              variant="subtitle"
              size="md"
              className="block font-semibold text-foreground px-2"
            >
              {t("apps")}
            </Typography>
            <Box className="grid grid-cols-1 gap-1">
              {apps.map((app) => (
                <Link
                  key={app.value}
                  href="#"
                  className="flex items-center gap-3 p-3 text-left rounded-lg hover:bg-muted/50 transition-colors group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Box className="flex-shrink-0 w-8 h-8 rounded-md bg-background flex items-center justify-center border border-border/50 shadow-sm transition-transform group-hover:scale-105">
                    {app.icon}
                  </Box>
                  <Box className="flex flex-col">
                    <Typography
                      variant="subtitle"
                      size="md"
                      className={cn(
                        "font-medium transition-colors",
                        app.hoverColorClass ||
                          "text-foreground group-hover:text-primary",
                      )}
                    >
                      {app.label}
                    </Typography>
                    <Typography variant="subtitle" size="sm" color="muted">
                      {app.description}
                    </Typography>
                  </Box>
                </Link>
              ))}
            </Box>

            {/* Mobile Corporate Links */}
            <Box className="grid grid-cols-1 gap-1 border-t border-border/50 pt-2">
              <Link
                href="#docs"
                className="p-3 rounded-lg hover:bg-muted/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Typography
                  variant="subtitle"
                  size="md"
                  className="font-medium text-foreground"
                >
                  {t("docs")}
                </Typography>
              </Link>
              <Link
                href="#pricing"
                className="p-3 rounded-lg hover:bg-muted/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Typography
                  variant="subtitle"
                  size="md"
                  className="font-medium text-foreground"
                >
                  {t("pricing")}
                </Typography>
              </Link>
              <Link
                href="#company"
                className="p-3 rounded-lg hover:bg-muted/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Typography
                  variant="subtitle"
                  size="md"
                  className="font-medium text-foreground"
                >
                  {t("company")}
                </Typography>
              </Link>
            </Box>

            {/* Mobile Settings */}
            <Box className="border-t border-border/50 pt-5 space-y-5">
              <Box>
                <Typography
                  variant="subtitle"
                  size="md"
                  className="block font-semibold text-foreground px-2 mb-3"
                >
                  {tSettings("theme")}
                </Typography>
                <Box className="grid grid-cols-3 gap-2 px-2">
                  <Button
                    variant={
                      mounted && theme === "light" ? "filled" : "outlined"
                    }
                    size="md"
                    className={cn(
                      "w-full justify-center px-0 text-sm h-10",
                      mounted &&
                        theme !== "light" &&
                        "border-border text-muted-foreground hover:text-foreground",
                    )}
                    onClick={() => setTheme("light")}
                  >
                    <Sun className="w-4 h-4" />
                    {tSettings("theme_light")}
                  </Button>
                  <Button
                    variant={
                      mounted && theme === "dark" ? "filled" : "outlined"
                    }
                    size="md"
                    className={cn(
                      "w-full justify-center px-0 text-sm h-10",
                      mounted &&
                        theme !== "dark" &&
                        "border-border text-muted-foreground hover:text-foreground",
                    )}
                    onClick={() => setTheme("dark")}
                  >
                    <Moon className="w-4 h-4" />
                    {tSettings("theme_dark")}
                  </Button>
                  <Button
                    variant={
                      mounted && theme === "system" ? "filled" : "outlined"
                    }
                    size="md"
                    className={cn(
                      "w-full justify-center px-0 text-sm h-10",
                      mounted &&
                        theme !== "system" &&
                        "border-border text-muted-foreground hover:text-foreground",
                    )}
                    onClick={() => setTheme("system")}
                  >
                    <Monitor className="w-4 h-4" />
                    {tSettings("theme_system")}
                  </Button>
                </Box>
              </Box>

              <Box>
                <Typography
                  variant="subtitle"
                  size="md"
                  className="block font-semibold text-foreground px-2 mb-3"
                >
                  {tSettings("language")}
                </Typography>
                <Box className="grid grid-cols-2 gap-2 px-2 pb-4">
                  <Button
                    variant={locale === "es" ? "filled" : "outlined"}
                    size="md"
                    className={cn(
                      "w-full justify-center font-medium h-10",
                      locale !== "es" &&
                        "border-border text-muted-foreground hover:text-foreground",
                    )}
                    onClick={() => {
                      handleLocaleChange("es");
                    }}
                  >
                    <span className="fi fi-mx text-base rounded-sm" /> Español
                  </Button>
                  <Button
                    variant={locale === "en" ? "filled" : "outlined"}
                    size="md"
                    className={cn(
                      "w-full justify-center font-medium h-10",
                      locale !== "en" &&
                        "border-border text-muted-foreground hover:text-foreground",
                    )}
                    onClick={() => {
                      handleLocaleChange("en");
                    }}
                  >
                    <span className="fi fi-us text-base rounded-sm" /> English
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
