import { useState } from 'react';
import { Menu, Sparkles, Layers, Code2, Clock } from 'lucide-react';

interface HeaderProps {
  onOpenWeeklyMenu: () => void;
  completedCount: number;
}

export default function Header({ onOpenWeeklyMenu, completedCount }: HeaderProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-[#050b18]/85 backdrop-blur-md border-b border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element Brand Zone - Top-Left: "Hüseyin Tatoğlu" */}
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="group flex flex-col items-start leading-none select-none transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Hüseyin Tatoğlu Ana Sayfa"
          >
            <span className="font-display font-black text-xl sm:text-2xl tracking-[-0.03em] text-white flex items-center gap-2">
              <span className="group-hover:text-amber-300 transition-colors">
                HÜSEYİN TATOĞLU
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_#facc15]" />
            </span>
            <span className="text-[11px] font-sans font-semibold tracking-[0.14em] text-amber-400/90 uppercase mt-1">
              Web Sitesi & Yazılım Portfolyosu
            </span>
          </a>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#haftalik-arsiv"
            className="hover:text-amber-400 transition-colors"
          >
            30 Hafta Yolculuğu
          </a>
          <a
            href="#one-cikanlar"
            className="hover:text-amber-400 transition-colors"
          >
            Öne Çıkan Uygulamalar
          </a>
          <a
            href="#hakkimda"
            className="hover:text-amber-400 transition-colors"
          >
            Hakkımda
          </a>
          <a
            href="#vizyon"
            className="hover:text-amber-400 transition-colors"
          >
            Metodoloji
          </a>
        </nav>

        {/* Zone 3: Primary Action - 30 Weeks Dropdown Trigger (Compact, doesn't take extra space) */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenWeeklyMenu}
            className="group relative inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-400/30 transition-all duration-200 active:scale-95 whitespace-nowrap cursor-pointer border border-amber-300"
            title="30 haftalık uygulama açılır menüsünü göster"
          >
            <Sparkles className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
            <span>30 Haftalık Menü</span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-extrabold bg-[#060e20] text-amber-300 rounded-md border border-amber-400/40">
              {completedCount}/30
            </span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-blue-950/60 border border-blue-900/60 transition-colors"
            aria-label="Menüyü aç/kapat"
          >
            <Menu className="w-5 h-5 text-amber-400" />
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileNavOpen && (
        <div className="md:hidden px-4 py-3 bg-[#061026] border-b border-blue-900/60 space-y-2 text-sm font-medium">
          <a
            href="#haftalik-arsiv"
            onClick={() => setMobileNavOpen(false)}
            className="block py-1.5 text-slate-200 hover:text-amber-400"
          >
            30 Hafta Yolculuğu
          </a>
          <a
            href="#one-cikanlar"
            onClick={() => setMobileNavOpen(false)}
            className="block py-1.5 text-slate-200 hover:text-amber-400"
          >
            Öne Çıkan Uygulamalar
          </a>
          <a
            href="#hakkimda"
            onClick={() => setMobileNavOpen(false)}
            className="block py-1.5 text-slate-200 hover:text-amber-400"
          >
            Hakkımda & Beceriler
          </a>
          <button
            onClick={() => {
              setMobileNavOpen(false);
              onOpenWeeklyMenu();
            }}
            className="w-full mt-2 py-2 text-center text-xs font-bold bg-amber-400 text-slate-950 rounded-lg flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            30 Haftalık Açılır Menüyü Göster
          </button>
        </div>
      )}
    </header>
  );
}
