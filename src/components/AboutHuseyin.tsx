import { motion } from 'motion/react';
import { 
  Code, 
  Palette, 
  Terminal, 
  Rocket, 
  Mail, 
  Github, 
  Linkedin, 
  Heart,
  Cpu,
  Check
} from 'lucide-react';

export default function AboutHuseyin() {
  const principles = [
    {
      title: "Haftalık Sürat & Disiplin",
      desc: "Her hafta yeni bir problem seçip prototipten çalışan canlı ürüne dönüştürme felsefesi."
    },
    {
      title: "Piksellerde Sarı & Lacivert Tutkusu",
      desc: "Karakterli, modern tipografi ve asil renk kontrastlarıyla sıradanlıktan uzak arayüz mimarisi."
    },
    {
      title: "Temiz ve Modüler Kod",
      desc: "React 19, TypeScript ve Tailwind CSS ile endüstri standartlarında ölçeklenebilir kod tabanı."
    }
  ];

  return (
    <section id="hakkimda" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-3xl bg-[#07132a] border-2 border-amber-400/40 p-6 sm:p-8 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-900 to-amber-400 p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#050c1c] rounded-2xl flex items-center justify-center font-display font-black text-2xl text-amber-400">
                  HT
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold font-display text-white">
                  Hüseyin Tatoğlu
                </h3>
                <p className="text-xs text-amber-300 font-mono mt-0.5">
                  Web & Yazılım Geliştiricisi
                </p>
                <div className="flex items-center gap-1.5 mt-1 text-[11px] text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Yeni projelere açık</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Teknolojiye ve modern web geliştirmeye tutkuyla bağlı bir yazılım mühendisi adayıyım. 30 haftalık bu maratonda, her hafta farklı bir ihtiyaca yanıt veren çalışan web uygulamaları üretiyorum.
            </p>

            <div className="mt-6 pt-5 border-t border-blue-900/60 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">İletişim:</span>
              <a
                href="mailto:huseyintatoglu36@gmail.com"
                className="text-amber-400 hover:underline font-mono"
              >
                huseyintatoglu36@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Terminal className="w-4 h-4 text-amber-400" />
              <span>Geliştirme Metodolojisi</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              30 Haftalık Maraton Nasıl Doğdu?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Teorik bilginin ötesine geçmenin en iyi yolu sürekli üretmektir. Bu platform, Hüseyin Tatoğlu'nun 30 haftada geliştirdiği 30 farklı mimariyi (Kanban panolarından yapay zeka araçlarına, borsa analiz panellerinden gerçek zamanlı sohbet odalarına kadar) şeffaf bir şekilde sergilemektedir.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {principles.map((pr, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-[#061024] border border-blue-900/60"
              >
                <div className="p-1 rounded-lg bg-amber-400/10 text-amber-400 shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {pr.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    {pr.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
