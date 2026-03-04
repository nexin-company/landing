"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Box } from "./box";

export function ThemeLogo({
  lightSrc,
  darkSrc,
  alt,
  className,
}: {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  className?: string;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Renderea un placeholder transparente o el logo por defecto para evitar layout shift drástico
    return <Box className={className} style={{ opacity: 0 }} />;
  }

  const src = resolvedTheme === "dark" ? darkSrc : lightSrc;

  return <img src={src} alt={alt} className={className} />;
}
