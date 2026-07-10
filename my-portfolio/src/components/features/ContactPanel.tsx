import React from 'react';

interface ContactPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPanel({ isOpen, onClose }: ContactPanelProps) {
  return (
    <>
      {/* Overlay Gelap Contact */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Panel Putih Bergeser Contact */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-1/2 lg:w-[45%] bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out p-8 md:p-12 overflow-y-auto flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Header Panel Contact */}
          <div className="flex justify-between items-start mb-12">
            <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase">
              Get in Touch
            </h2>
            <button 
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition text-sm font-medium cursor-pointer"
            >
              Close
            </button>
          </div>

          {/* Konten Utama Contact */}
          <div className="flex flex-col gap-8 mt-12">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Let's build something <br />
              <span className="text-gray-400">extraordinary together.</span>
            </h3>
            
            <p className="text-lg text-gray-600 mt-4 max-w-md">
              I'm always open to discussing product design work, IoT integrations, or internship/full-time opportunities.
            </p>
          </div>
        </div>

        {/* Tautan Kontak Ukuran Besar di Bawah */}
        <div className="flex flex-col gap-6 mt-12 mb-8">
          <a 
            href="mailto:habibns87.hs@gmail.com" 
            className="text-2xl md:text-4xl font-medium text-black hover:text-gray-500 transition-colors border-b border-black pb-2 inline-block w-fit"
          >
            habibns87.hs@gmail.com
          </a>
          
          <div className="flex flex-col gap-4 mt-8">
            <a 
              href="https://github.com/HabibNS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl font-medium text-gray-600 hover:text-black transition flex items-center gap-2 group cursor-pointer"
            >
              <span className="group-hover:translate-x-2 transition-transform">GitHub</span> ↗
            </a>
            <a 
              href="https://linkedin.com/in/habibnursholeh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl font-medium text-gray-600 hover:text-black transition flex items-center gap-2 group cursor-pointer"
            >
              <span className="group-hover:translate-x-2 transition-transform">LinkedIn</span> ↗
            </a>
            <a 
              href="https://instagram.com/habib.hns" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl font-medium text-gray-600 hover:text-black transition flex items-center gap-2 group cursor-pointer"
            >
              <span className="group-hover:translate-x-2 transition-transform">Instagram</span> ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}