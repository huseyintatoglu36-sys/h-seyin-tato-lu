import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ExternalLink, 
  Github, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  Calendar,
  Layers,
  Edit3,
  Search,
  RotateCcw
} from 'lucide-react';
import { WeeklyProject } from '../data/weeksData';

interface WeeklyTimelineProps {
  weeks: WeeklyProject[];
  onSelectProject: (p: WeeklyProject) => void;
  onEditProject: (p: WeeklyProject) => void;
  onOpenMenu: () => void;
  onResetData: () => void;
}

export default function WeeklyTimeline({
  weeks,
  onSelectProject,
  onEditProject,
  onOpenMenu,
  onResetData
}: WeeklyTimelineProps) {
  const [selectedWeekNumber, setSelectedWeekNumber] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'all' | '1-10' | '11-20' | '21-30'>('all');

  const currentProject = weeks.find(w => w.week === selectedWeekNumber) || weeks[0];

  const handlePrev = () => {
    setSelectedWeekNumber(prev => (prev > 1 ? prev - 1 : 30));
  };

  const handleNext = () => {
    setSelectedWeekNumber(prev => (prev < 30 ? prev + 1 : 1));
  };

  return (
    <section id="haftalik-arsiv" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-blue-900/50">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#facc15]" />
            <span>30 Haftalık Tasarım Serüveni</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-display text-white tracking-[-0.03em]">
            Haftalık Proje Gezgini & Seçici
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
            Aşağıdaki 30 haftalık hızlı gezinme çubuğundan dilediğiniz haftaya tıklayabilir veya yer kaplamayan açılır menüden tüm projeleri tek bakışta filtreleyebilirsiniz.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMenu}
            className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-md active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>30 Haftalık Açılır Menüyü Aç</span>
          </button>
        </div>
      </div>

      {/* Week Selector Ribbon (1 to 30) */}
      <div className="mb-8 p-3 rounded-2xl bg-[#07132a] border border-blue-900/70 shadow-xl">
        <div className="flex items-center justify-between gap-2 mb-2 px-2 text-xs text-slate-400">
          <span className="font-semibold text-blue-200">
            Hızlı Hafta Seçimi (1 - 30):
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              className="p-1 rounded bg-blue-950 hover:bg-blue-900 text-slate-300 hover:text-white"
              aria-label="Önceki Hafta"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-amber-400 px-2 font-bold">
              {selectedWeekNumber} / 30
            </span>
            <button
              onClick={handleNext}
              className="p-1 rounded bg-blue-950 hover:bg-blue-900 text-slate-300 hover:text-white"
              aria-label="Sonraki Hafta"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 30 Week Buttons Grid / Scroller */}
        <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-15 gap-1.5 sm:gap-2 pt-1">
          {weeks.map((item) => {
            const isSelected = item.week === selectedWeekNumber;
            const isCompleted = item.status === 'completed';

            return (
              <button
                key={item.week}
                onClick={() => setSelectedWeekNumber(item.week)}
                title={`Hafta ${item.week}: ${item.title}`}
                className={`relative py-2 sm:py-2.5 rounded-lg text-xs font-mono font-bold transition-all duration-150 flex flex-col items-center justify-center ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/30 scale-105 z-10 font-black'
                    : isCompleted
                    ? 'bg-blue-950/80 text-blue-100 hover:bg-blue-900 hover:text-white border border-blue-800/60'
                    : 'bg-[#040915] text-slate-500 hover:text-slate-300 border border-blue-950'
                }`}
              >
                <span>H{item.week}</span>
                {isCompleted && !isSelected && (
                  <span className="w-1 h-1 rounded-full bg-amber-400 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Week Showcase Card */}
      <motion.div
        key={currentProject.week}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl bg-gradient-to-br from-[#091633] via-[#07132c] to-[#040b18] border-2 border-amber-400/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden"
      >
        {/* Glow corners */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-lg bg-amber-400 text-slate-950 font-black font-display text-sm shadow-md">
                HAFTA {currentProject.week}
              </span>
              <span className="text-xs font-semibold text-blue-200">
                {currentProject.category}
              </span>
              <span className="text-blue-500/40">·</span>
              <span className="text-xs text-slate-400">
                {currentProject.date}
              </span>

              {/* Status */}
              <div className="ml-auto text-xs">
                {currentProject.status === 'completed' ? (
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Tamamlandı & Canlıda
                  </span>
                ) : currentProject.status === 'in-progress' ? (
                  <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> Geliştirme Aşamasında
                  </span>
                ) : (
                  <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" /> Planlandı
                  </span>
                )}
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              {currentProject.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {currentProject.fullDesc}
            </p>

            {/* Features */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                Bu Haftaki Temel Çözümler & Özellikler:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentProject.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-xl bg-blue-950/40 border border-blue-900/50 text-xs text-slate-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="pt-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
                Teknoloji Yığını:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-[#040916] text-amber-300 border border-amber-400/25"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Action Panel */}
          <div className="lg:col-span-4 bg-[#050e22] rounded-2xl border border-blue-900/80 p-5 space-y-4">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Uygulama Bağlantısı
              </span>
              <div className="p-2.5 rounded-xl bg-[#030712] border border-blue-900 font-mono text-xs text-amber-300 truncate">
                {currentProject.demoUrl}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2.5 pt-2">
              <a
                href={currentProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all"
              >
                <span>Hafta {currentProject.week} Uygulamasını Başlat</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-blue-950 hover:bg-blue-900 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 border border-blue-800 transition-colors"
              >
                <Github className="w-4 h-4 text-amber-400" />
                <span>GitHub Deposunu İncele</span>
              </a>

              <button
                onClick={() => onEditProject(currentProject)}
                className="w-full py-2 px-4 rounded-xl bg-transparent hover:bg-blue-900/40 text-blue-300 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors border border-blue-900/60"
              >
                <Edit3 className="w-3.5 h-3.5 text-amber-400" />
                <span>Bu Haftanın Bilgilerini / Linkini Düzenle</span>
              </button>
            </div>

            <div className="pt-3 border-t border-blue-900/60 flex items-center justify-between text-[11px] text-slate-400">
              <span>Zorluk: <strong className="text-white">{currentProject.difficulty}</strong></span>
              <button
                onClick={() => onSelectProject(currentProject)}
                className="text-amber-400 hover:underline"
              >
                Tam Detay Kartı →
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
