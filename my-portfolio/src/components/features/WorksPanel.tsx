import React from "react";

interface WorksPanelProps {
    isOpen: boolean;
    onClose: () => void; 
}

export default function WorksPanel({ isOpen, onClose }: WorksPanelProps) {
  return (
    <>
      {/* Overlay Gelap */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Panel Putih Bergeser Works */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-1/2 lg:w-[50%] bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out p-8 md:p-12 overflow-y-auto flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase">
            Work Experience
          </h2>
          <button 
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition text-sm font-medium cursor-pointer"
          >
            Close
          </button>
        </div>

        {/* Daftar Pengalaman Kerja */}
        <div className="flex flex-col gap-10">
          <div className="group">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-gray-500 transition-colors">
                Mobile Apps Developer Intern
              </h3>
              <span className="text-sm font-medium text-gray-400 mt-1 md:mt-0">Present</span>
            </div>
            <h4 className="text-lg font-medium text-black mb-4">
              PT Global Service Indonesia (GSI)
            </h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              Developing and maintaining robust mobile applications. Implementing clean architecture patterns (like MVVM) and utilizing advanced state management solutions (BLoC/Provider) to ensure scalable, testable, and efficient codebases.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full">Flutter</span>
              <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full">Dart</span>
              <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full">Clean Architecture</span>
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="group">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-gray-500 transition-colors">
                Digital Skills Bootcamp
              </h3>
              <span className="text-sm font-medium text-gray-400 mt-1 md:mt-0">Dec 2025</span>
            </div>
            <h4 className="text-lg font-medium text-black mb-4">
              Sanbercode
            </h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              Participated in an intensive training program focused on modern software development practices, enhancing technical proficiency, and practical problem-solving capabilities.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full">Software Development</span>
              <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full">Problem Solving</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}