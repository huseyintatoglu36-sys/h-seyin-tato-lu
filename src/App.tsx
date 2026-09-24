/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WeeklyTimeline from './components/WeeklyTimeline';
import FeaturedProjects from './components/FeaturedProjects';
import AboutHuseyin from './components/AboutHuseyin';
import Footer from './components/Footer';
import LiveClock from './components/LiveClock';
import WeeklyMenuModal from './components/WeeklyMenuModal';
import ProjectDetailModal from './components/ProjectDetailModal';
import ProjectEditModal from './components/ProjectEditModal';
import { 
  WeeklyProject, 
  loadWeeksData, 
  saveWeeksData, 
  resetWeeksData 
} from './data/weeksData';
import { Sparkles, Layers, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [weeks, setWeeks] = useState<WeeklyProject[]>([]);
  const [isWeeklyMenuOpen, setIsWeeklyMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<WeeklyProject | null>(null);
  const [editingProject, setEditingProject] = useState<WeeklyProject | null>(null);

  // Initialize data from LocalStorage
  useEffect(() => {
    const data = loadWeeksData();
    setWeeks(data);
  }, []);

  // Save handler
  const handleSaveProject = (updated: WeeklyProject) => {
    const nextWeeks = weeks.map(item => item.id === updated.id ? updated : item);
    setWeeks(nextWeeks);
    saveWeeksData(nextWeeks);
  };

  // Reset handler
  const handleResetData = () => {
    if (window.confirm('Tüm haftalık projeleri varsayılan 30 haftalık listeye sıfırlamak istediğinize emin misiniz?')) {
      const reset = resetWeeksData();
      setWeeks(reset);
    }
  };

  // Keyboard shortcut: ESC closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsWeeklyMenuOpen(false);
        setSelectedProject(null);
        setEditingProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const completedCount = useMemo(() => {
    return weeks.filter(w => w.status === 'completed').length;
  }, [weeks]);

  const latestProject = useMemo(() => {
    // Find the latest completed or first project
    return weeks.find(w => w.week === 24) || weeks[0];
  }, [weeks]);

  if (weeks.length === 0) {
    return (
      <div className="min-h-screen bg-[#050b18] flex items-center justify-center text-amber-400 font-bold">
        Yükleniyor...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050b18] text-slate-100 flex flex-col relative selection:bg-amber-400 selection:text-slate-950 font-sans">
      {/* Top Header - Top-left branding for Hüseyin Tatoğlu + 30-week button */}
      <Header
        onOpenWeeklyMenu={() => setIsWeeklyMenuOpen(true)}
        completedCount={completedCount}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenWeeklyMenu={() => setIsWeeklyMenuOpen(true)}
          completedCount={completedCount}
          totalWeeks={weeks.length}
          latestProject={latestProject}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 30 Weeks Interactive Scrubber & Selected Week Card */}
        <WeeklyTimeline
          weeks={weeks}
          onSelectProject={(project) => setSelectedProject(project)}
          onEditProject={(project) => setEditingProject(project)}
          onOpenMenu={() => setIsWeeklyMenuOpen(true)}
          onResetData={handleResetData}
        />

        {/* Featured Weekly Applications */}
        <FeaturedProjects
          weeks={weeks}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenMenu={() => setIsWeeklyMenuOpen(true)}
        />

        {/* About Hüseyin Tatoğlu & Methodology */}
        <AboutHuseyin />
      </main>

      {/* Footer */}
      <Footer onOpenMenu={() => setIsWeeklyMenuOpen(true)} />

      {/* Bottom-Right Live Clock - "sağ alta saat olsun" */}
      <LiveClock />

      {/* 30-Week Dropdown / Modal Menu - "30 haftalık tıklanma menüsü olsunyer kaplamasın fazla tıklandığında açılır menü olsun" */}
      <WeeklyMenuModal
        isOpen={isWeeklyMenuOpen}
        onClose={() => setIsWeeklyMenuOpen(false)}
        weeks={weeks}
        onSelectWeek={(project) => setSelectedProject(project)}
        onEditWeek={(project) => setEditingProject(project)}
      />

      {/* Project Detail Dialog */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onEdit={(project) => setEditingProject(project)}
      />

      {/* Project Edit Dialog */}
      <ProjectEditModal
        project={editingProject}
        isOpen={!!editingProject}
        onClose={() => setEditingProject(null)}
        onSave={handleSaveProject}
      />
    </div>
  );
}
