import { useTranslations } from 'next-intl';
import { Button } from '@/theme/components/button';
import { Card } from '@/theme/components/card';
import { Typography } from '@/theme/components/typography';
import { ArrowRight, Box, ShieldCheck, Zap, Factory, Landmark, Lock, PackageCheck, ShoppingCart, Users } from 'lucide-react';
// import { motion } from 'framer-motion'; 
// Note: Framer Motion requires "use client" so we will skip it for the main server component or create a client wrapper.
// For now, we will build a responsive Tailwind CSS grid that doesn't strictly depend on motion.

export default function LandingPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-background flex flex-col items-center overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
        
        <Typography variant="h1" className="max-w-4xl text-foreground mb-6 text-balance">
          {t('Index.title')}
        </Typography>
        
        <Typography variant="p" className="max-w-2xl text-muted-foreground text-lg md:text-xl mb-10 text-balance">
          {t('Index.subtitle')}
        </Typography>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button variant="filled" size="lg" icon={Zap} className="w-full sm:w-auto">
            {t('Index.cta_primary')}
          </Button>
          <Button variant="glass" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
            {t('Index.cta_secondary')}
          </Button>
        </div>
      </section>

      {/* Features Section (Pilares) */}
      <section className="w-full bg-surface py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <Typography variant="h2" className="text-center mb-16 text-foreground">
            {t('Features.title')}
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="solid" className="p-8 hover:border-primary/50 transition-colors">
              <Box className="w-10 h-10 text-primary mb-6" />
              <Typography variant="h4" className="mb-3 text-foreground">{t('Features.feature1_title')}</Typography>
              <Typography variant="muted" className="m-0">{t('Features.feature1_desc')}</Typography>
            </Card>

            <Card variant="solid" className="p-8 hover:border-primary/50 transition-colors">
              <ShieldCheck className="w-10 h-10 text-success mb-6" />
              <Typography variant="h4" className="mb-3 text-foreground">{t('Features.feature2_title')}</Typography>
              <Typography variant="muted" className="m-0">{t('Features.feature2_desc')}</Typography>
            </Card>

            <Card variant="solid" className="p-8 hover:border-primary/50 transition-colors">
              <Zap className="w-10 h-10 text-warning mb-6" />
              <Typography variant="h4" className="mb-3 text-foreground">{t('Features.feature3_title')}</Typography>
              <Typography variant="muted" className="m-0">{t('Features.feature3_desc')}</Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* Modules - Bento Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24">
        <Typography variant="h2" className="text-center mb-16 text-foreground">
          {t('Modules.title')}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Guardian - Highlighted */}
          <Card variant="glass" className="p-6 md:col-span-2 md:row-span-2 flex flex-col justify-end relative overflow-hidden group hover:border-primary/50 transition-colors">
            {/* Background Blob/Gradient Fix */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-primary/10 pointer-events-none" />

            <div className="absolute top-6 right-6 p-4 bg-white/5 rounded-2xl backdrop-blur-xl border border-white/10 group-hover:scale-105 transition-transform z-10">
              <Lock className="w-12 h-12 text-primary" />
            </div>
            <Typography variant="h3" className="mb-2 text-foreground relative z-10">Guardian</Typography>
            <Typography variant="muted" className="m-0 relative z-10">{t('Modules.guardian')}</Typography>
          </Card>

          <Card variant="solid" className="p-6 flex flex-col justify-end group hover:border-primary/30 transition-colors">
            <Factory className="w-8 h-8 text-info mb-auto" />
            <Typography variant="h4" className="mb-2 text-foreground">Factory</Typography>
            <Typography variant="muted" className="text-xs m-0">{t('Modules.factory')}</Typography>
          </Card>

          <Card variant="solid" className="p-6 flex flex-col justify-end group hover:border-primary/30 transition-colors">
            <Landmark className="w-8 h-8 text-success mb-auto" />
            <Typography variant="h4" className="mb-2 text-foreground">Finance</Typography>
            <Typography variant="muted" className="text-xs m-0">{t('Modules.finance')}</Typography>
          </Card>

          <Card variant="solid" className="p-6 md:col-span-2 flex flex-col justify-end group hover:border-primary/30 transition-colors">
            <PackageCheck className="w-8 h-8 text-warning mb-auto" />
            <Typography variant="h4" className="mb-2 text-foreground">Logistic</Typography>
            <Typography variant="muted" className="text-xs m-0">{t('Modules.logistic')}</Typography>
          </Card>

          <Card variant="solid" className="p-6 flex flex-col justify-end group hover:border-primary/30 transition-colors">
            <ShoppingCart className="w-8 h-8 text-secondary-foreground mb-auto" />
            <Typography variant="h4" className="mb-2 text-foreground">Procurement</Typography>
            <Typography variant="muted" className="text-xs m-0">{t('Modules.procurement')}</Typography>
          </Card>

          <Card variant="solid" className="p-6 flex flex-col justify-end group hover:border-primary/30 transition-colors">
            <Users className="w-8 h-8 text-muted-foreground mb-auto" />
            <Typography variant="h4" className="mb-2 text-foreground">Vendor</Typography>
            <Typography variant="muted" className="text-xs m-0">{t('Modules.vendor')}</Typography>
          </Card>

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-surface border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <Typography variant="h3" className="text-foreground m-0 tracking-tighter">NEXIN</Typography>
          <Typography variant="muted" className="m-0 text-center">{t('Footer.rights')}</Typography>
          <Button variant="outlined" size="sm" icon={ArrowRight}>
            {t('Footer.contact')}
          </Button>
        </div>
      </footer>

    </main>
  );
}
