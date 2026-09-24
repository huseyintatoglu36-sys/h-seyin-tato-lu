import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Edit3, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { WeeklyProject } from '../data/weeksData';

interface ProjectDetailModalProps {
  project: WeeklyProject | null;
  onClose: () => void;
  onEdit: (project: WeeklyProject) => void;
}

export default function ProjectDetailModal({
  project,
  onClose,
  onEdit
}: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#020611]/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="relative w-full max-w-2xl rounded-2xl bg-[#091530] border-2 border-amber-400/40 shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Top Yellow Ribbon */}
          <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-amber-300 to-blue-600" />

          {/* Modal Header */}
          <div className="p-6 border-b border-blue-900/50 bg-[#061026] flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-black bg-amber-400 text-slate-950 font-display">
                  HAFTA {project.week}
                </span>
                <span className="text-xs text-blue-200/80">
                  {project.category}
                </span>
                <span className="text-blue-500/50">·</span>
                <span className="text-xs text-slate-400">
                  {project.date}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-blue-900/40 border border-blue-900/40 transition-colors"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6 text-sm">
            {/* Status & Difficulty Banner */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-[#050c1c] border border-blue-900/60">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Durum:</span>
                {project.status === 'completed' ? (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/50">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Canlıda & Tamamlandı
                  </span>
                ) : project.status === 'in-progress' ? (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/50">
                    <Clock className="w-3.5 h-3.5" /> Aktif Geliştirme Sürecinde
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
                    <Calendar className="w-3.5 h-3.5" /> Yol Haritasında Planlandı
                  </span>
                )}
              </div>

              <div className="text-xs text-slate-300">
                <span className="text-slate-400">Zorluk Seviyesi:</span>{' '}
                <span className="font-semibold text-amber-300">{project.difficulty}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Proje Açıklaması ve Amacı
              </h3>
              <p className="text-slate-200 leading-relaxed text-sm">
                {project.fullDesc}
              </p>
            </div>

            {/* Features Highlight */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Öne Çıkan Fonksiyonlar & Çözümler
              </h3>
              <ul className="space-y-1.5">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Kullanılan Teknolojiler
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#040814] text-amber-300 border border-amber-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct URL Preview */}
            <div className="p-3 rounded-xl bg-[#040916] border border-blue-900/60 flex items-center justify-between gap-3 text-xs">
              <div className="min-w-0 flex-1">
                <span className="text-[11px] text-slate-400 block mb-0.5">Uygulama Bağlantısı (URL):</span>
                <span className="font-mono text-amber-300 truncate block">
                  {project.demoUrl}
                </span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onEdit(project);
                }}
                className="px-2.5 py-1 text-xs text-blue-200 hover:text-white bg-blue-950 hover:bg-blue-900 rounded-lg flex items-center gap-1 border border-blue-800 shrink-0"
              >
                <Edit3 className="w-3.5 h-3.5 text-amber-400" />
                URL'yi Güncelle
              </button>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-5 bg-[#050c1c] border-t border-blue-900/60 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-blue-950/80 hover:bg-blue-900 rounded-xl border border-blue-800 flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-4 h-4 text-amber-400" />
                Kaynak Kodları
              </a>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Kapat
              </button>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all font-display"
              >
                <span>Uygulamaya Git</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
