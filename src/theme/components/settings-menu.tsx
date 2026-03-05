"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Moon, Sun, Settings, ChevronLeft, Globe } from "lucide-react";
import "flag-icons/css/flag-icons.min.css";
import "flag-icons/css/flag-icons.min.css";
import { Button } from "./button";
import { Box } from "./box";
import { Typography } from "./typography";

type SubmenuState = "none" | "theme" | "language";

function LightThemeIcon() {
  return (
    <svg
      width="36"
      height="24"
      viewBox="0 0 48 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="border border-border/50 rounded-md bg-white shadow-sm overflow-hidden flex-shrink-0"
    >
      <rect x="0" y="0" width="48" height="6" fill="#f4f5f7" />
      <rect x="42" y="2" width="4" height="2" rx="1" fill="#0052cc" />
      <rect x="2" y="2" width="6" height="2" rx="1" fill="#dfe1e6" />
      <rect x="10" y="2" width="6" height="2" rx="1" fill="#dfe1e6" />
      <rect x="13" y="10" width="12" height="3" rx="1.5" fill="#8993a4" />
      <rect x="13" y="15" width="28" height="2" rx="1" fill="#dfe1e6" />
      <rect x="13" y="19" width="28" height="2" rx="1" fill="#dfe1e6" />
      <rect x="13" y="23" width="16" height="2" rx="1" fill="#dfe1e6" />
      <rect x="0" y="6" width="10" height="26" fill="#fafbfc" />
      <path d="M10 6V32" stroke="#dfe1e6" strokeWidth="0.5" />
    </svg>
  );
}

function DarkThemeIcon() {
  return (
    <svg
      width="36"
      height="24"
      viewBox="0 0 48 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="border border-border/20 rounded-md bg-[#09090b] shadow-sm overflow-hidden flex-shrink-0"
    >
      <rect x="0" y="0" width="48" height="6" fill="#101214" />
      <rect x="42" y="2" width="4" height="2" rx="1" fill="#00b8d9" />
      <rect x="2" y="2" width="6" height="2" rx="1" fill="#22272b" />
      <rect x="10" y="2" width="6" height="2" rx="1" fill="#22272b" />
      <rect x="13" y="10" width="12" height="3" rx="1.5" fill="#9fadbc" />
      <rect x="13" y="15" width="28" height="2" rx="1" fill="#22272b" />
      <rect x="13" y="19" width="28" height="2" rx="1" fill="#22272b" />
      <rect x="13" y="23" width="16" height="2" rx="1" fill="#22272b" />
      <rect x="0" y="6" width="10" height="26" fill="#101214" />
      <path d="M10 6V32" stroke="#22272b" strokeWidth="0.5" />
    </svg>
  );
}

function SystemThemeIcon() {
  return (
    <Box className="relative w-9 h-6 border border-border/50 rounded-md overflow-hidden flex-shrink-0 shadow-sm flex">
      <Box className="w-1/2 h-full bg-white relative">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-[#f4f5f7]"></div>
        <div className="absolute top-[1.5px] right-[2px] w-1 h-[1.5px] rounded-full bg-[#dfe1e6]"></div>
        <div className="absolute top-[6px] left-[2px] w-3 h-[2px] rounded-full bg-[#8993a4]"></div>
        <div className="absolute top-[10px] left-[2px] w-5 h-[1.5px] rounded-full bg-[#dfe1e6]"></div>
        <div className="absolute top-[14px] left-[2px] w-4 h-[1.5px] rounded-full bg-[#dfe1e6]"></div>
      </Box>
      <Box className="w-1/2 h-full bg-[#09090b] relative border-l border-border/20">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-[#101214]"></div>
        <div className="absolute top-[1.5px] right-[2px] w-1 h-[1.5px] rounded-full bg-[#00b8d9]"></div>
        <div className="absolute top-[6px] left-[2px] w-3 h-[2px] rounded-full bg-[#9fadbc]"></div>
        <div className="absolute top-[10px] left-[2px] w-5 h-[1.5px] rounded-full bg-[#22272b]"></div>
        <div className="absolute top-[14px] left-[2px] w-4 h-[1.5px] rounded-full bg-[#22272b]"></div>
      </Box>
    </Box>
  );
}

export function SettingsMenu({ currentLocale }: { currentLocale: string }) {
  const t = useTranslations("Settings");
  const { theme, setTheme, resolvedTheme } = useTheme();
  const router = useRouter();

  const [isOpen, setIsOpen] = React.useState(false);
  // view now tracks which submenu is open, "none" means just the main menu
  const [activeSubmenu, setActiveSubmenu] =
    React.useState<SubmenuState>("none");
  const menuRef = React.useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setActiveSubmenu("none");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    // eslint-disable-next-line
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  if (!mounted) {
    return <Box className="w-24 h-9 animate-pulse bg-white/10 rounded-full" />;
  }

  return (
    <Box className="relative inline-block text-left" ref={menuRef}>
      <Button
        variant="outlined"
        size="sm"
        onClick={() => {
          setIsOpen(!isOpen);
          if (isOpen) setActiveSubmenu("none");
        }}
        icon={Settings}
        className={cn(
          isOpen
            ? "text-primary border-primary ring-1 ring-primary/50 bg-primary/5"
            : "text-foreground border-border hover:bg-white/5 hover:border-foreground/30",
        )}
      />

      {/* Main Dropdown */}
      {isOpen && (
        <Box className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl bg-background/95 backdrop-blur-xl shadow-lg border border-border/50 ring-1 ring-black/5 focus:outline-none overflow-visible">
          <Box className="p-2">
            <Typography
              variant="subtitle"
              size="sm"
              className="block px-3 pb-2 pt-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
            >
              {t("title")}
            </Typography>
            <Box className="space-y-1 relative">
              <Button
                variant="unstyled"
                size="none"
                onClick={() =>
                  setActiveSubmenu(activeSubmenu === "theme" ? "none" : "theme")
                }
                className={cn(
                  "flex w-full items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors text-foreground",
                  activeSubmenu === "theme"
                    ? "bg-muted/80"
                    : "hover:bg-muted/50",
                )}
              >
                <Box className="flex items-center gap-2.5">
                  <ChevronLeft className="w-4 h-4 text-muted-foreground" />
                  {resolvedTheme === "dark" ? (
                    <Moon className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <Sun className="w-4 h-4 text-muted-foreground" />
                  )}
                  {t("theme")}
                </Box>
              </Button>

              {/* Theme Submenu Popover */}
              {activeSubmenu === "theme" && (
                <Box className="md:absolute md:right-[103%] md:top-0 relative mt-2 mb-2 z-50 w-full md:w-56 rounded-xl bg-background/95 md:backdrop-blur-xl shadow-inner md:shadow-lg border border-border/50 md:ring-1 md:ring-black/5 focus:outline-none overflow-hidden animate-in fade-in slide-in-from-right-2 duration-200">
                  <Typography
                    variant="subtitle"
                    size="xs"
                    className="block px-3 pb-2 pt-3 font-semibold text-muted-foreground uppercase tracking-wider border-b border-border/50"
                  >
                    {t("theme")}
                  </Typography>
                  <Box className="p-2 space-y-1">
                    {[
                      {
                        value: "light",
                        label: t("theme_light"),
                        icon: <LightThemeIcon />,
                      },
                      {
                        value: "dark",
                        label: t("theme_dark"),
                        icon: <DarkThemeIcon />,
                      },
                      {
                        value: "system",
                        label: t("theme_system"),
                        icon: <SystemThemeIcon />,
                      },
                    ].map((item) => {
                      const isActive = theme === item.value;
                      return (
                        <Button
                          variant="unstyled"
                          size="none"
                          key={item.value}
                          onClick={() => {
                            setTheme(item.value);
                          }}
                          className={cn(
                            "flex w-full items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors text-left group",
                            isActive
                              ? "bg-primary/10 text-primary font-medium"
                              : "hover:bg-muted/50 text-foreground",
                          )}
                        >
                          <Box className="flex items-center justify-center w-4 h-4 flex-shrink-0">
                            {isActive ? (
                              <div className="w-3 h-3 rounded-full border-[3px] border-primary"></div>
                            ) : (
                              <div className="w-3 h-3 rounded-full border border-muted-foreground/50 group-hover:border-foreground/50"></div>
                            )}
                          </Box>
                          {item.icon}
                          <Typography
                            variant="subtitle"
                            size="md"
                            className="flex-1"
                          >
                            {item.label}
                          </Typography>
                        </Button>
                      );
                    })}
                  </Box>
                </Box>
              )}

              <Button
                variant="unstyled"
                size="none"
                onClick={() =>
                  setActiveSubmenu(
                    activeSubmenu === "language" ? "none" : "language",
                  )
                }
                className={cn(
                  "flex w-full items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors text-foreground",
                  activeSubmenu === "language"
                    ? "bg-muted/80"
                    : "hover:bg-muted/50",
                )}
              >
                <Box className="flex items-center gap-2.5">
                  <ChevronLeft className="w-4 h-4 text-muted-foreground" />
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  {t("language")}
                </Box>
              </Button>

              {/* Language Submenu Popover */}
              {activeSubmenu === "language" && (
                <Box className="md:absolute md:right-[103%] md:top-8 relative mt-2 mb-2 z-50 w-full md:w-52 rounded-xl bg-background/95 md:backdrop-blur-xl shadow-inner md:shadow-lg border border-border/50 md:ring-1 md:ring-black/5 focus:outline-none overflow-hidden animate-in fade-in slide-in-from-right-2 duration-200">
                  <Typography
                    variant="subtitle"
                    size="xs"
                    className="block px-3 pb-2 pt-3 font-semibold text-muted-foreground uppercase tracking-wider border-b border-border/50"
                  >
                    {t("language")}
                  </Typography>
                  <Box className="p-2 space-y-1">
                    {[
                      {
                        value: "es",
                        label: "Español",
                        icon: <span className="fi fi-mx text-lg rounded-sm" />,
                      },
                      {
                        value: "en",
                        label: "English",
                        icon: <span className="fi fi-us text-lg rounded-sm" />,
                      },
                    ].map((item) => {
                      const isActive = currentLocale === item.value;
                      return (
                        <Button
                          variant="unstyled"
                          size="none"
                          key={item.value}
                          onClick={() => {
                            handleLocaleChange(item.value);
                          }}
                          className={cn(
                            "flex w-full items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors text-left group",
                            isActive
                              ? "bg-primary/10 text-primary font-medium"
                              : "hover:bg-muted/50 text-foreground",
                          )}
                        >
                          <Box className="flex items-center justify-center w-4 h-4 flex-shrink-0">
                            {isActive ? (
                              <div className="w-3 h-3 rounded-full border-[3px] border-primary"></div>
                            ) : (
                              <div className="w-3 h-3 rounded-full border border-muted-foreground/50 group-hover:border-foreground/50"></div>
                            )}
                          </Box>
                          {item.icon}
                          <Typography
                            variant="subtitle"
                            size="md"
                            className="flex-1"
                          >
                            {item.label}
                          </Typography>
                        </Button>
                      );
                    })}
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
