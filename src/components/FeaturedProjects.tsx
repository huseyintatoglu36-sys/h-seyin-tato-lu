import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ExternalLink, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  ChevronRight,
  Code2
} from 'lucide-react';
import { WeeklyProject } from '../data/weeksData';

interface FeaturedProjectsProps {
  weeks: WeeklyProject[];
  onSelectProject: (p: WeeklyProject) => void;
  onOpenMenu: () => void;
}

export default function FeaturedProjects({
  weeks,
  onSelectProject,
  onOpenMenu
}: FeaturedProjectsProps) {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  // Pick prominent or filtered projects
  const filteredList = weeks.filter(item => {
    if (filterCategory === 'all') return true;
    return item.category === filterCategory;
  });

  const categories = [
    { id: 'all', label: 'Tüm Projeler (30)' },
    { id: 'Frontend & UI', label: 'Frontend & UI' },
    { id: 'Full-Stack', label: 'Full-Stack' },
    { id: 'Dashboard & Veri', label: 'Dashboard & Veri' },
    { id: 'Yapay Zeka', label: 'Yapay Zeka' },
    { id: 'Araçlar & Utility', label: 'Araçlar' }
  ];

  return (
    <section id="one-cikanlar" className="py-16 sm:py-24 bg-[#040916] border-y border-blue-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Kategori Bazlı Seçki</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Öne Çıkan Haftalık Uygulamalar
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              Hüseyin Tatoğlu'nun geliştirdiği 30 haftalık portföyden seçilen özel uygulamaları filtreleyip canlı bağlantılarına ulaşabilirsiniz.
            </p>
          </div>

          <button
            onClick={onOpenMenu}
            className="self-start md:self-end text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
          >
            <span>30 Haftalık Açılır Menüyü Aç</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl font-semibold transition-all shrink-0 ${
                filterCategory === cat.id
                  ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                  : 'bg-blue-950/60 hover:bg-blue-900/60 text-slate-300 hover:text-white border border-blue-900/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredList.slice(0, 9).map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group rounded-2xl bg-[#07132a] border border-blue-900/70 hover:border-amber-400/60 p-5 shadow-xl flex flex-col justify-between transition-all duration-200"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-400 text-slate-950 font-bold font-display text-xs">
                      {project.week}
                    </span>
                    <span className="text-xs font-semibold text-blue-200">
                      Hafta {project.week}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#040814] text-blue-200 border border-blue-950"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between gap-2 mt-5 pt-3.5 border-t border-blue-900/60 text-xs">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-slate-300 hover:text-white font-medium flex items-center gap-1"
                >
                  Detayları Gör
                </button>

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-blue-950 group-hover:bg-amber-400 text-slate-200 group-hover:text-slate-950 font-bold text-[11px] flex items-center gap-1 transition-all border border-blue-800 group-hover:border-amber-400 shadow-sm"
                >
                  <span>Aç</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredList.length > 9 && (
          <div className="mt-8 text-center">
            <button
              onClick={onOpenMenu}
              className="px-6 py-2.5 rounded-xl bg-blue-950 hover:bg-blue-900 text-amber-300 text-xs font-bold border border-blue-800 inline-flex items-center gap-2 transition-colors"
            >
              <span>Diğer Tüm {filteredList.length - 9} Uygulamayı 30 Haftalık Menüde Gör</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
