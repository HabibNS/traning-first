import React from 'react';

interface WarehousePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WarehousePanel({ isOpen, onClose }: WarehousePanelProps) {
  return (
    <>
      {/* ── OVERLAY ── */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* ── PANEL SLIDE-OVER ── */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-2xl z-50
          transform transition-transform duration-500 ease-in-out overflow-y-auto flex flex-col
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* STICKY HEADER */}
        <header className="px-6 md:px-12 py-5 flex justify-between items-center sticky top-0 z-[60] bg-[#008037]">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-white font-semibold text-sm uppercase tracking-widest group cursor-pointer hover:opacity-80 transition-opacity"
          >
            <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
            Back
          </button>
          <span className="text-xs font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full text-white bg-[#FF8000]">
            Warehouse RFID
          </span>
        </header>

        {/* ── COMING SOON CONTENT ── */}
        <main 
          className="flex-grow flex flex-col items-center justify-center px-6 text-center"
          style={{ background: "linear-gradient(135deg, #005224 0%, #008037 60%, #00a347 100%)" }}
        >
          <div className="flex flex-col items-center p-8 md:p-12">
            {/* Ikon Dekoratif */}
            <div className="w-20 h-20 md:w-24 md:h-24 mb-8 rounded-full border-2 border-[#FF8000] flex items-center justify-center bg-white/10 backdrop-blur-md shadow-lg animate-pulse">
              <span className="text-4xl md:text-5xl">🚧</span>
            </div>
            
            {/* Teks Utama */}
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-extrabold uppercase text-white leading-[0.9] tracking-tighter mb-6">
              Coming <br />
              <span className="text-[#FF8000]">Soon.</span>
            </h1>
            
            {/* Deskripsi */}
            <p className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed font-medium">
              Studi kasus dan detail teknis untuk proyek <span className="font-bold text-white">Warehouse RFID System</span> sedang dalam tahap penyusunan. 
            </p>
            
            {/* Tombol Kembali Ekstra */}
            <button 
              onClick={onClose}
              className="mt-10 px-8 py-3 rounded-full border-2 border-white text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#005224] transition-colors"
            >
              Kembali ke Beranda
            </button>
          </div>
        </main>
      </div>
    </>
  );
}