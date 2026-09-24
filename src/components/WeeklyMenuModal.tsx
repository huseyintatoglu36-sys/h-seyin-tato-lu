import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Search, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Layers, 
  ChevronRight,
  Filter,
  SlidersHorizontal,
  Bookmark
} from 'lucide-react';
import { WeeklyProject } from '../data/weeksData';

interface WeeklyMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  weeks: WeeklyProject[];
  onSelectWeek: (project: WeeklyProject) => void;
  onEditWeek: (project: WeeklyProject) => void;
}

export default function WeeklyMenuModal({
  isOpen,
  onClose,
  weeks,
  onSelectWeek,
  onEditWeek
}: WeeklyMenuModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBatch, setSelectedBatch] = useState<'all' | '1-10' | '11-20' | '21-30' | 'completed'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter weeks
  const filteredWeeks = useMemo(() => {
    return weeks.filter(item => {
      // Batch filter
      if (selectedBatch === '1-10' && (item.week < 1 || item.week > 10)) return false;
      if (selectedBatch === '11-20' && (item.week < 11 || item.week > 20)) return false;
      if (selectedBatch === '21-30' && (item.week < 21 || item.week > 30)) return false;
      if (selectedBatch === 'completed' && item.status !== 'completed') return false;

      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.shortDesc.toLowerCase().includes(query);
        const matchesTech = item.techStack.some(t => t.toLowerCase().includes(query));
        const matchesWeek = `hafta ${item.week}`.includes(query) || `${item.week}` === query;
        if (!matchesTitle && !matchesDesc && !matchesTech && !matchesWeek) return false;
      }

      return true;
    });
  }, [weeks, selectedBatch, selectedCategory, searchQuery]);

  const completedCount = useMemo(() => {
    return weeks.filter(w => w.status === 'completed').length;
  }, [weeks]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    weeks.forEach(w => set.add(w.category));
    return ['all', ...Array.from(set)];
  }, [weeks]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-4 sm:pt-10 px-3 sm:px-6 pb-6 overflow-y-auto">
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#030814]/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="relative w-full max-w-5xl rounded-2xl bg-[#081329] border-2 border-amber-400/30 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[88vh]"
        >
          {/* Top Yellow Ambient Stripe */}
          <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-amber-300 to-blue-600" />

          {/* Modal Header */}
          <div className="p-4 sm:p-6 border-b border-blue-900/60 bg-[#061024]/90 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-extrabold bg-amber-400 text-slate-950 font-display tracking-tight">
                  <Sparkles className="w-3.5 h-3.5" />
                  30 HAFTALIK UYGULAMA MENÜSÜ
                </span>
                <span className="text-xs text-blue-200/80 font-medium hidden sm:inline">
                  Hüseyin Tatoğlu Tasarım ve Yazılım Arşivi
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black font-display text-white tracking-[-0.03em] flex items-center gap-2.5">
                <span>Haftalık Uygulamalar Kataloğu</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-950 text-amber-300 border border-blue-800">
                  {completedCount}/30 Tamamlandı
                </span>
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-blue-900/40 border border-blue-900/40 transition-colors"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="p-4 bg-[#0a1733]/60 border-b border-blue-900/40 space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Uygulama adı, hafta numarası veya teknoloji ara (örn: Hafta 1, React, Kanban)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#060e20] border border-blue-800/80 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                  >
                    Temizle
                  </button>
                )}
              </div>

              {/* Batch Tabs (1-10, 11-20, 21-30) */}
              <div className="flex items-center gap-1 p-1 bg-[#050b18] rounded-xl border border-blue-900/60 overflow-x-auto shrink-0">
                <button
                  onClick={() => setSelectedBatch('all')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    selectedBatch === 'all'
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-blue-900/40'
                  }`}
                >
                  Tümü (30)
                </button>
                <button
                  onClick={() => setSelectedBatch('1-10')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    selectedBatch === '1-10'
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-blue-900/40'
                  }`}
                >
                  1-10. Hafta
                </button>
                <button
                  onClick={() => setSelectedBatch('11-20')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    selectedBatch === '11-20'
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-blue-900/40'
                  }`}
                >
                  11-20. Hafta
                </button>
                <button
                  onClick={() => setSelectedBatch('21-30')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    selectedBatch === '21-30'
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-blue-900/40'
                  }`}
                >
                  21-30. Hafta
                </button>
                <button
                  onClick={() => setSelectedBatch('completed')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    selectedBatch === 'completed'
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-blue-900/40'
                  }`}
                >
                  Tamamlananlar
                </button>
              </div>
            </div>

            {/* Category filter sub-bar */}
            <div className="flex items-center gap-2 overflow-x-auto text-xs py-0.5">
              <span className="text-slate-400 flex items-center gap-1 shrink-0 font-medium">
                <Filter className="w-3 h-3 text-amber-400" /> Kategori:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-md text-xs transition-colors shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-blue-800 text-amber-300 font-medium border border-amber-400/40'
                      : 'bg-blue-950/40 text-slate-300 hover:text-white hover:bg-blue-900/50'
                  }`}
                >
                  {cat === 'all' ? 'Tüm Kategoriler' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* 30 Weeks Scrollable Grid / List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 divide-y divide-blue-900/30">
            {filteredWeeks.length === 0 ? (
              <div className="text-center py-12 text-slate-400">
                <p className="text-base font-medium">Aradığınız kriterlere uygun hafta bulunamadı.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedBatch('all'); setSelectedCategory('all'); }}
                  className="mt-3 px-4 py-2 text-xs font-semibold bg-blue-900/60 hover:bg-blue-800 text-amber-300 rounded-lg transition-colors"
                >
                  Filtreleri Sıfırla
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                {filteredWeeks.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    whileHover={{ scale: 1.01 }}
                    className="group relative rounded-xl bg-[#0a1631]/90 hover:bg-[#0d1d40] border border-blue-900/70 hover:border-amber-400/60 p-4 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Week Number and Status */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-400 text-slate-950 font-black font-display text-sm shadow-md">
                            {item.week}
                          </span>
                          <span className="text-xs font-semibold text-blue-200">
                            Hafta {item.week}
                          </span>
                          <span className="text-blue-400/50">·</span>
                          <span className="text-xs text-slate-400">
                            {item.category}
                          </span>
                        </div>

                        {/* Status badge */}
                        <div className="text-[11px] font-medium flex items-center gap-1.5">
                          {item.status === 'completed' ? (
                            <span className="text-emerald-400 flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Tamamlandı
                            </span>
                          ) : item.status === 'in-progress' ? (
                            <span className="text-amber-400 flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" /> Geliştiriliyor
                            </span>
                          ) : (
                            <span className="text-slate-400 flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" /> Planlandı
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                        {item.shortDesc}
                      </p>

                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {item.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#060d1d] text-blue-200/90 border border-blue-900/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Buttons */}
                    <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-blue-900/50 text-xs">
                      <button
                        onClick={() => {
                          onSelectWeek(item);
                          onClose();
                        }}
                        className="text-slate-300 hover:text-white flex items-center gap-1 font-medium transition-colors"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                        Detayları Gör
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onEditWeek(item)}
                          className="px-2.5 py-1 text-[11px] font-medium text-blue-200 hover:text-amber-300 hover:bg-blue-900/50 rounded-lg transition-colors"
                          title="Hafta bağlantısını veya başlığını düzenle"
                        >
                          Düzenle
                        </button>
                        <a
                          href={item.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 text-[11px] font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg transition-colors flex items-center gap-1 shadow-sm"
                        >
                          Uygulamayı Aç
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-3.5 sm:p-4 bg-[#050c1c] border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>
                30 haftalık tasarım hedefi: Her hafta 1 yeni üretim ve canlı prototip.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg bg-blue-950 hover:bg-blue-900 text-slate-200 font-medium transition-colors"
              >
                Pencereyi Kapat (ESC)
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
