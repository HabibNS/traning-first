"use client";
import React, { useState } from 'react';
import AboutPanel from './AboutPanel';
import WorksPanel from './WorksPanel';
import ContactPanel from './ContactPanel';
import TjpFuelPanel from './TjpFuelPanel'; // 1. Import panel baru
import SafiraPanel from './SafiraPanel'; // Import panel Safira
import NeofyPanel from './NeofyPanel'; // Import panel Neofy

export default function HeroProfile() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isWorksOpen, setIsWorksOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  // 2. Tambahkan state untuk proyek
  const [isTjpOpen, setIsTjpOpen] = useState(false); 
  const [isSafiraOpen, setIsSafiraOpen] = useState(false); 
  const [isNeofyOpen, setIsNeofyOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-white text-black font-sans overflow-hidden">
      
      {/* NAVBAR */}
      <header className="flex justify-between items-center p-6 md:p-12">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden"></div>
          <span className="font-semibold text-lg">habibns.</span>
        </div>
        <nav className="flex gap-6 md:gap-10 text-sm md:text-base font-medium">
          <button onClick={() => setIsAboutOpen(true)} className="hover:text-gray-500 transition cursor-pointer">About</button>
          <button onClick={() => setIsWorksOpen(true)} className="hover:text-gray-500 transition cursor-pointer">Works</button>
          <button onClick={() => setIsContactOpen(true)} className="hover:text-gray-500 transition cursor-pointer">Contact</button>
        </nav>
      </header>

      {/* MAIN GRID */}
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 md:p-12 items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-6xl md:text-8xl lg:text-[100px] font-bold tracking-tighter leading-[0.9] mb-8">
            I'm Habib<br />Nur Sholeh.
          </h1>
          <p className="text-lg md:text-2xl text-gray-800 max-w-lg leading-relaxed font-medium">
            I develop mobile & web applications with clean architecture and meticulous attention to detail. Available for work.
          </p>
        </div>

        <div className="flex flex-col justify-center lg:pl-12">
          <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-6">Selected Projects</h3>
          <ul className="flex flex-col w-full max-w-md">
            
            <li className="border-b border-gray-200 group hover:border-black transition-colors">
              <button 
                onClick={() => setIsSafiraOpen(true)} 
                className="py-5 flex justify-between items-center w-full cursor-pointer text-left"
              >
                <span className="text-xl md:text-2xl font-medium text-gray-900 group-hover:translate-x-2 transition-transform">SAFIRA</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </button>
            </li>
            
            {/* 3. Ganti tag <Link> menjadi <button> dan buka panel TJP */}
            <li className="border-b border-gray-200 group hover:border-black transition-colors">
              <button 
                onClick={() => setIsTjpOpen(true)} 
                className="py-5 flex justify-between items-center w-full cursor-pointer text-left"
              >
                <span className="text-xl md:text-2xl font-medium text-gray-900 group-hover:translate-x-2 transition-transform">
                  TJP Fuel Monitoring Apps
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </button>
            </li>

            <li className="border-b border-gray-200 group hover:border-black transition-colors">
              <button 
                onClick={() => setIsNeofyOpen(true)} 
                className="py-5 flex justify-between items-center w-full cursor-pointer text-left"
              >
                <span className="text-xl md:text-2xl font-medium text-gray-900 group-hover:translate-x-2 transition-transform">NeoFy</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </button>
            </li>

          </ul>
        </div>
      </main>

      {/* BOTTOM BANNER */}
      <div className="bg-[#ccff00] text-black font-medium py-3 overflow-hidden whitespace-nowrap text-sm md:text-base border-t border-black">
        <div className="animate-pulse inline-block w-full text-center">
          <span>Open for internship & full-time roles • Mobile Apps Developer • Electrical Engineering • Fresh Graduate • Based in Indonesia</span>
        </div>
      </div>

      {/* --- SEMUA MODULAR PANELS --- */}
      <AboutPanel isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <WorksPanel isOpen={isWorksOpen} onClose={() => setIsWorksOpen(false)} />
      <ContactPanel isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      
      {/* 4. Render Panel Proyek TJP di sini */}
      <TjpFuelPanel isOpen={isTjpOpen} onClose={() => setIsTjpOpen(false)} />
      <SafiraPanel isOpen={isSafiraOpen} onClose={() => setIsSafiraOpen(false)} />
      <NeofyPanel isOpen={isNeofyOpen} onClose={() => setIsNeofyOpen(false)} />
    </div>
  );
}