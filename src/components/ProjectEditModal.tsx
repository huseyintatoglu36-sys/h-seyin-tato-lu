import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Save, AlertCircle, Sparkles, Check } from 'lucide-react';
import { WeeklyProject } from '../data/weeksData';

interface ProjectEditModalProps {
  project: WeeklyProject | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updated: WeeklyProject) => void;
}

export default function ProjectEditModal({
  project,
  isOpen,
  onClose,
  onSave
}: ProjectEditModalProps) {
  if (!isOpen || !project) return null;

  const [title, setTitle] = useState(project.title);
  const [demoUrl, setDemoUrl] = useState(project.demoUrl);
  const [githubUrl, setGithubUrl] = useState(project.githubUrl);
  const [shortDesc, setShortDesc] = useState(project.shortDesc);
  const [status, setStatus] = useState<WeeklyProject['status']>(project.status);
  const [category, setCategory] = useState<WeeklyProject['category']>(project.category);
  const [techStackStr, setTechStackStr] = useState(project.techStack.join(', '));
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: WeeklyProject = {
      ...project,
      title: title.trim(),
      demoUrl: demoUrl.trim(),
      githubUrl: githubUrl.trim(),
      shortDesc: shortDesc.trim(),
      status,
      category,
      techStack: techStackStr.split(',').map(s => s.trim()).filter(Boolean)
    };

    onSave(updated);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 600);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#020611]/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-lg rounded-2xl bg-[#091530] border-2 border-amber-400/50 shadow-2xl overflow-hidden z-10 my-8"
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 to-blue-600" />

          <div className="p-5 border-b border-blue-900/60 bg-[#061026] flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-amber-400">
                HAFTA {project.week} DÜZENLE
              </span>
              <h2 className="text-lg font-bold text-white">
                Uygulama Bilgilerini Güncelle
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs">
            {/* Title */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Uygulama Başlığı
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-xl bg-[#050c1c] border border-blue-900 text-white text-xs focus:border-amber-400 focus:outline-none"
              />
            </div>

            {/* Demo URL */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Canlı Bağlantı (URL)
              </label>
              <input
                type="url"
                value={demoUrl}
                onChange={(e) => setDemoUrl(e.target.value)}
                placeholder="https://..."
                required
                className="w-full px-3 py-2 rounded-xl bg-[#050c1c] border border-blue-900 font-mono text-amber-300 text-xs focus:border-amber-400 focus:outline-none"
              />
              <p className="text-[10px] text-slate-400 mt-1">
                Kendi tasarladığınız canlı web uygulamasının adresini buraya ekleyebilirsiniz.
              </p>
            </div>

            {/* GitHub URL */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                GitHub Repo URL
              </label>
              <input
                type="url"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/..."
                className="w-full px-3 py-2 rounded-xl bg-[#050c1c] border border-blue-900 font-mono text-slate-200 text-xs focus:border-amber-400 focus:outline-none"
              />
            </div>

            {/* Status & Category */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Durum
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-[#050c1c] border border-blue-900 text-white text-xs focus:border-amber-400 focus:outline-none"
                >
                  <option value="completed">Tamamlandı</option>
                  <option value="in-progress">Geliştiriliyor</option>
                  <option value="planned">Planlandı</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Kategori
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-[#050c1c] border border-blue-900 text-white text-xs focus:border-amber-400 focus:outline-none"
                >
                  <option value="Frontend & UI">Frontend & UI</option>
                  <option value="Full-Stack">Full-Stack</option>
                  <option value="Dashboard & Veri">Dashboard & Veri</option>
                  <option value="Mobil Web">Mobil Web</option>
                  <option value="Yapay Zeka">Yapay Zeka</option>
                  <option value="Araçlar & Utility">Araçlar & Utility</option>
                </select>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Teknolojiler (Virgülle ayırın)
              </label>
              <input
                type="text"
                value={techStackStr}
                onChange={(e) => setTechStackStr(e.target.value)}
                placeholder="React, TypeScript, Tailwind..."
                className="w-full px-3 py-2 rounded-xl bg-[#050c1c] border border-blue-900 text-white text-xs focus:border-amber-400 focus:outline-none"
              />
            </div>

            {/* Short Desc */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Kısa Açıklama
              </label>
              <textarea
                value={shortDesc}
                onChange={(e) => setShortDesc(e.target.value)}
                rows={2}
                className="w-full px-3 py-2 rounded-xl bg-[#050c1c] border border-blue-900 text-white text-xs focus:border-amber-400 focus:outline-none resize-none"
              />
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-blue-900/60 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
              >
                İptal
              </button>
              <button
                type="submit"
                className="px-4 py-2 font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl flex items-center gap-1.5 transition-all shadow-md"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-900" />
                    <span>Kaydedildi!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Değişiklikleri Kaydet</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
