import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  Code, 
  Layers, 
  ExternalLink,
  ChevronRight,
  Zap,
  FolderGit2
} from 'lucide-react';
import { WeeklyProject } from '../data/weeksData';

interface HeroProps {
  onOpenWeeklyMenu: () => void;
  completedCount: number;
  totalWeeks: number;
  latestProject: WeeklyProject;
  onSelectProject: (p: WeeklyProject) => void;
}

export default function Hero({
  onOpenWeeklyMenu,
  completedCount,
  totalWeeks,
  latestProject,
  onSelectProject
}: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-blue-900/40">
      {/* Background ambient lighting effects (Navy + Gold) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-700/15 via-amber-400/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top kicker */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-amber-400/40 text-amber-300 text-xs font-semibold shadow-inner"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Hüseyin Tatoğlu Kişisel Geliştirme Portalı</span>
              <span className="text-blue-400">·</span>
              <span className="text-white font-mono">{completedCount}/{totalWeeks} Hafta</span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-white tracking-[-0.03em] leading-[1.06] text-balance"
            >
              Her Hafta Yeni Bir Tasarım.{' '}
              <span className="text-gold-gradient font-black inline-block drop-shadow-[0_2px_15px_rgba(250,204,21,0.3)]">
                30 Haftalık
              </span>{' '}
              Web Uygulama Arşivi.
            </motion.h1>

            {/* Narrative description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-200/90 max-w-2xl leading-relaxed font-normal tracking-[-0.01em]"
            >
              Merhaba, ben <strong className="text-amber-400 font-bold tracking-normal">Hüseyin Tatoğlu</strong>. Bu platformda her hafta sıfırdan tasarlayıp geliştirdiğim 30 farklı web uygulamasının canlı bağlantılarını, mimarisini ve kaynak kodlarını derliyorum. Ekranınızı kaplamadan tek tıkla açılan menüden dilediğiniz haftayı hemen deneyimleyebilirsiniz.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              {/* Main 30-week dropdown trigger */}
              <button
                onClick={onOpenWeeklyMenu}
                className="px-6 py-3.5 text-sm sm:text-base font-black font-display text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-400/40 transition-all duration-200 flex items-center gap-2.5 active:scale-95 border border-amber-200"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>30 Haftalık Açılır Menüyü Aç</span>
              </button>

              <a
                href="#haftalik-arsiv"
                className="px-5 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-950/80 hover:bg-blue-900/90 rounded-xl border border-blue-800/80 transition-all flex items-center gap-2 hover:border-amber-400/50"
              >
                <span>Haftaları İncele</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </a>
            </motion.div>

            {/* Metrics Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="pt-6 border-t border-blue-900/60 grid grid-cols-3 gap-4 max-w-lg"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-400">
                  30
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Planlanan Hafta
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                  {completedCount}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Canlıda & Hazır
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-300">
                  %100
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Modern & Reaktif
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Frame & Latest Week Spotlight */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-3xl bg-gradient-to-b from-blue-900/40 to-[#081226] p-2 border-2 border-amber-400/30 shadow-2xl glow-navy"
            >
              {/* Visual Showcase Banner */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#060e20]">
                <img
                  src="/src/assets/images/hero_developer_workspace_1790237160452.jpg"
                  alt="Hüseyin Tatoğlu modern yazılım stüdyosu çalışma alanı"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-black/30 to-transparent" />

                {/* Overlaid Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#07132e]/90 backdrop-blur-md border border-amber-400/40 text-[11px] font-bold text-amber-300 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>Sarı & Lacivert Tasarım Sistemi</span>
                </div>
              </div>

              {/* Spotlight on Latest / Current Project */}
              <div className="p-4 sm:p-5 bg-[#091530] rounded-2xl mt-2 border border-blue-900/60">
                <div className="flex items-center justify-between text-xs text-blue-200/80 mb-1.5">
                  <span className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">
                    ÖNE ÇIKAN SON ÇALIŞMA
                  </span>
                  <span className="font-mono text-slate-400">
                    Hafta {latestProject.week}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white line-clamp-1">
                  {latestProject.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {latestProject.shortDesc}
                </p>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-blue-900/60">
                  <button
                    onClick={() => onSelectProject(latestProject)}
                    className="text-xs text-blue-200 hover:text-white font-medium flex items-center gap-1"
                  >
                    Detayları Oku
                    <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>

                  <a
                    href={latestProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold flex items-center gap-1 transition-colors shadow-sm"
                  >
                    Uygulamaya Git
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
