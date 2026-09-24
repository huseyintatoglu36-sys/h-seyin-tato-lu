import { ArrowUp, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onOpenMenu: () => void;
}

export default function Footer({ onOpenMenu }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#030713] border-t border-blue-900/60 pt-12 pb-24 sm:pb-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-blue-900/40">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-display font-black text-lg text-white tracking-tight">
                HÜSEYİN TATOĞLU
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-amber-400 font-bold">Sarı & Lacivert</span>
            </div>
            <p className="text-xs text-slate-400">
              30 Haftalık Web Uygulamaları Portfolyosu & Kişisel Web Sitesi
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <button
              onClick={onOpenMenu}
              className="text-amber-400 hover:underline flex items-center gap-1 font-bold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              30 Haftalık Açılır Menü
            </button>
            <span>·</span>
            <a href="#haftalik-arsiv" className="hover:text-white transition-colors">
              Haftalık Arşiv
            </a>
            <span>·</span>
            <a href="#one-cikanlar" className="hover:text-white transition-colors">
              Öne Çıkanlar
            </a>
            <span>·</span>
            <a href="#hakkimda" className="hover:text-white transition-colors">
              Hakkımda
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-blue-950/80 hover:bg-blue-900 text-slate-300 hover:text-white border border-blue-900 transition-colors flex items-center gap-1.5"
            aria-label="Yukarı Çık"
          >
            <span className="text-[11px] font-semibold">Yukarı Çık</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Hüseyin Tatoğlu. Tüm hakları saklıdır.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Sarı Lacivert renkleriyle tasarlandı & kodlandı.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
