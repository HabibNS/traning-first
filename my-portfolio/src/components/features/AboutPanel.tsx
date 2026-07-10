import React from 'react';

interface AboutPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutPanel({ isOpen, onClose }: AboutPanelProps) {
  return (
    <>
      {/* Overlay Gelap */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Panel Putih Bergeser */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-1/2 lg:w-[45%] bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out p-8 md:p-12 overflow-y-auto flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header Panel */}
        <div className="flex justify-between items-start mb-12">
          <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
            {/* Tempat tag img foto profil nantinya */}
          </div>
          <button 
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition text-sm font-medium cursor-pointer"
          >
            Close
          </button>
        </div>

        {/* Konten Utama About */}
        <div className="flex flex-col gap-8 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 leading-snug">
            An Electrical Engineering student at Universitas Diponegoro and Mobile Apps Developer Intern at PT Global Service Indonesia.
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            I specialize in building robust mobile and web applications using Flutter, React, and Next.js. I have a strong foundation in implementing structural best practices, including Clean Architecture and MVVM, to ensure scalable and maintainable code.
          </p>

          <div className="mt-4">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Bridging Hardware & Software</h3>
            <p className="text-base text-gray-500 leading-relaxed">
              Beyond software development, I have a deep passion for IoT integration. I frequently work with microcontrollers like ESP32 and various environmental sensors (like BME280), creating end-to-end solutions that connect the physical world to dynamic digital dashboards.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}