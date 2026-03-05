import { useTranslations } from "next-intl";
import { Button } from "@/theme/components/button";
import { Card } from "@/theme/components/card";
import { Typography } from "@/theme/components/typography";
import { ThemeLogo } from "@/theme/components/theme-logo";
import { Box } from "@/theme/components/box";
import {
  ArrowRight,
  Box as BoxIcon,
  Database,
  ShieldCheck,
  Zap,
  Factory,
  Landmark,
  Lock,
  PackageCheck,
  ShoppingCart,
  Users,
} from "lucide-react";
// import { motion } from 'framer-motion';
// Note: Framer Motion requires "use client" so we will skip it for the main server component or create a client wrapper.
// For now, we will build a responsive Tailwind CSS grid that doesn't strictly depend on motion.

export default function LandingPage() {
  const t = useTranslations();

  return (
    <Box
      as="main"
      className="min-h-screen bg-background flex flex-col items-center overflow-x-hidden"
    >
      {/* Hero Section */}
      <Box
        as="section"
        className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center"
      >
        <Typography
          variant="title"
          size="xl"
          className="max-w-4xl text-foreground mb-6 text-balance"
        >
          {t("Index.title")}
        </Typography>

        <Typography
          variant="paragraph"
          size="lg"
          color="muted"
          className="max-w-2xl text-lg md:text-xl mb-10 text-balance"
        >
          {t("Index.subtitle")}
        </Typography>

        <Box className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button
            variant="filled"
            size="lg"
            icon={Zap}
            color="primary"
            className="w-full sm:w-auto"
          >
            {t("Index.cta_primary")}
          </Button>
          <Button
            variant="outlined"
            size="lg"
            icon={ArrowRight}
            color="secondary"
            className="w-full sm:w-auto"
          >
            {t("Index.cta_secondary")}
          </Button>
        </Box>
      </Box>

      {/* Features Section (Pilares) */}
      <Box
        as="section"
        className="w-full bg-surface py-24 border-t border-border"
      >
        <Box className="max-w-7xl mx-auto px-6">
          <Typography
            variant="title"
            size="lg"
            className="text-center mb-16 text-foreground"
          >
            {t("Features.title")}
          </Typography>

          <Box className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              variant="outlined"
              color="info"
              className="p-8 hover:border-info/50 transition-colors"
            >
              <BoxIcon className="w-10 h-10 text-info mb-6" />
              <Typography
                variant="title"
                size="sm"
                className="mb-3 text-foreground"
              >
                {t("Features.feature1_title")}
              </Typography>
              <Typography variant="subtitle" color="muted" className="m-0">
                {t("Features.feature1_desc")}
              </Typography>
            </Card>

            <Card
              variant="outlined"
              color="success"
              className="p-8 hover:border-success/50 transition-colors"
            >
              <ShieldCheck className="w-10 h-10 text-success mb-6" />
              <Typography
                variant="title"
                size="sm"
                className="mb-3 text-foreground"
              >
                {t("Features.feature2_title")}
              </Typography>
              <Typography variant="subtitle" color="muted" className="m-0">
                {t("Features.feature2_desc")}
              </Typography>
            </Card>

            <Card
              variant="outlined"
              color="warning"
              className="p-8 hover:border-warning/50 transition-colors"
            >
              <Zap className="w-10 h-10 text-warning mb-6" />
              <Typography
                variant="title"
                size="sm"
                className="mb-3 text-foreground"
              >
                {t("Features.feature3_title")}
              </Typography>
              <Typography variant="subtitle" color="muted" className="m-0">
                {t("Features.feature3_desc")}
              </Typography>
            </Card>
          </Box>
        </Box>
      </Box>

      {/* Modules - Bento Grid */}
      <Box as="section" className="w-full max-w-7xl mx-auto px-6 py-24">
        <Typography
          variant="title"
          size="lg"
          className="text-center mb-16 text-foreground"
        >
          {t("Modules.title")}
        </Typography>

        <Box className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Guardian - Highlighted */}
          <Card
            variant="filled"
            className="p-6 md:col-span-2 md:row-span-2 flex flex-col justify-end relative overflow-hidden group transition-colors bg-guardian/10 border-guardian"
          >
            <Box className="absolute top-6 left-6">
              <Lock className="w-12 h-12 text-guardian" />
            </Box>
            <Typography
              variant="title"
              size="md"
              className="mb-2 text-foreground relative z-10"
            >
              Guardian
            </Typography>
            <Typography
              variant="subtitle"
              color="muted"
              className="m-0 relative z-10"
            >
              {t("Modules.guardian")}
            </Typography>
          </Card>

          <Card
            variant="filled"
            className="p-6 md:col-span-2 flex flex-col justify-end group transition-colors bg-collector/10 border-collector"
          >
            <Database className="w-8 h-8 text-collector mb-auto" />
            <Typography
              variant="title"
              size="sm"
              className="mb-2 text-foreground"
            >
              Collector
            </Typography>
            <Typography variant="subtitle" color="muted" className="m-0">
              {t("Modules.collector")}
            </Typography>
          </Card>

          <Card
            variant="filled"
            className="p-6 md:col-span-2 flex flex-col justify-end group transition-colors bg-factory/10 border-factory"
          >
            <Factory className="w-8 h-8 text-factory mb-auto" />
            <Typography
              variant="title"
              size="sm"
              className="mb-2 text-foreground"
            >
              Factory
            </Typography>
            <Typography variant="subtitle" color="muted" className="m-0">
              {t("Modules.factory")}
            </Typography>
          </Card>

          <Card
            variant="filled"
            className="p-6 flex flex-col justify-end group transition-colors bg-finance/10 border-finance"
          >
            <Landmark className="w-8 h-8 text-finance mb-auto" />
            <Typography
              variant="title"
              size="sm"
              className="mb-2 text-foreground"
            >
              Finance
            </Typography>
            <Typography variant="subtitle" color="muted" className="m-0">
              {t("Modules.finance")}
            </Typography>
          </Card>

          <Card
            variant="filled"
            className="p-6 flex flex-col justify-end group transition-colors bg-logistic/10 border-logistic"
          >
            <PackageCheck className="w-8 h-8 text-logistic mb-auto" />
            <Typography
              variant="title"
              size="sm"
              className="mb-2 text-foreground"
            >
              Logistic
            </Typography>
            <Typography variant="subtitle" color="muted" className="m-0">
              {t("Modules.logistic")}
            </Typography>
          </Card>

          <Card
            variant="filled"
            className="p-6 flex flex-col justify-end group transition-colors bg-procurement/10 border-procurement"
          >
            <ShoppingCart className="w-8 h-8 text-procurement mb-auto" />
            <Typography
              variant="title"
              size="sm"
              className="mb-2 text-foreground"
            >
              Procurement
            </Typography>
            <Typography variant="subtitle" color="muted" className="m-0">
              {t("Modules.procurement")}
            </Typography>
          </Card>

          <Card
            variant="filled"
            className="p-6 flex flex-col justify-end group transition-colors bg-vendor/10 border-vendor"
          >
            <Users className="w-8 h-8 text-vendor mb-auto" />
            <Typography
              variant="title"
              size="sm"
              className="mb-2 text-foreground"
            >
              Vendor
            </Typography>
            <Typography variant="subtitle" color="muted" className="m-0">
              {t("Modules.vendor")}
            </Typography>
          </Card>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        as="footer"
        className="w-full bg-surface border-t border-border mt-auto"
      >
        <Box className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <Box className="h-8 flex items-center justify-center">
            <ThemeLogo
              lightSrc="/nexin-logos/svg/nexin-text-coloured-b.svg"
              darkSrc="/nexin-logos/svg/nexin-text-coloured-w.svg"
              alt="Nexin"
              className="h-full w-auto"
            />
          </Box>
          <Typography
            variant="subtitle"
            color="muted"
            className="m-0 text-center"
          >
            {t("Footer.rights")}
          </Typography>
          <Button variant="outlined" size="sm" icon={ArrowRight}>
            {t("Footer.contact")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
