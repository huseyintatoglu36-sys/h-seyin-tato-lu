import { useState, useEffect } from 'react';
import { Clock, Calendar, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function LiveClock() {
  const [time, setTime] = useState<Date>(new Date());
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time strings in Turkish locale
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  // Turkish date formatting: e.g., "24 Eylül 2026, Perşembe"
  const dateFormatted = time.toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  });

  return (
    <aside 
      aria-label="Canlı Saat ve Tarih"
      className="fixed bottom-4 right-4 z-40 select-none font-sans"
    >
      <motion.div
        layout
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-2xl bg-[#07132e]/90 backdrop-blur-xl border border-amber-400/40 shadow-2xl glow-yellow-sm text-slate-100 p-3.5 sm:p-4 min-w-[240px] sm:min-w-[280px]"
      >
        {/* Subtle yellow ambient accent glow */}
        <div className="absolute -top-12 -right-12 w-28 h-28 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-600/15 rounded-full blur-xl pointer-events-none" />

        {/* Header row */}
        <div className="flex items-center justify-between gap-3 pb-2 border-b border-blue-900/60 text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span className="font-semibold tracking-wider text-amber-400 uppercase text-[11px]">
              CANLI SAAT
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-blue-200/70 font-mono flex items-center gap-1">
              <Globe className="w-3 h-3 text-amber-400/80" />
              GMT+3 · TR
            </span>
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 rounded-md text-slate-400 hover:text-amber-400 hover:bg-blue-900/40 transition-colors"
              title={isMinimized ? "Genişlet" : "Küçült"}
              aria-label={isMinimized ? "Saati genişlet" : "Saati küçült"}
            >
              {isMinimized ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Digital Clock Display */}
        <div className="pt-2">
          <div className="flex items-baseline justify-between">
            <div className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center">
              <span className="text-white drop-shadow-[0_2px_10px_rgba(251,191,36,0.2)]">
                {hours}
              </span>
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="text-amber-400 mx-0.5"
              >
                :
              </motion.span>
              <span className="text-white drop-shadow-[0_2px_10px_rgba(251,191,36,0.2)]">
                {minutes}
              </span>
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="text-amber-400 mx-0.5"
              >
                :
              </motion.span>
              <span className="text-amber-400 text-2xl sm:text-3xl font-bold ml-0.5">
                {seconds}
              </span>
            </div>

            <div className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-950/80 text-amber-300 border border-amber-400/30">
              {time.getHours() >= 12 ? 'ÖS' : 'ÖÖ'}
            </div>
          </div>

          {/* Date row (collapsible if minimized) */}
          <AnimatePresence>
            {!isMinimized && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 pt-2 border-t border-blue-900/40 text-xs text-slate-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate capitalize font-medium">
                    {dateFormatted}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </aside>
  );
}
