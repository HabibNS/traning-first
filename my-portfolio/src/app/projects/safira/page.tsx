import React from 'react';
import Link from 'next/link';

export default function SafiraProjectPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* NAVBAR */}
      <header className="p-6 md:p-12 border-b border-gray-200 flex justify-between items-center">
        <Link href="/" className="text-lg font-medium hover:text-gray-500 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-2 transition-transform">←</span> Back
        </Link>
        <span className="font-bold tracking-widest text-xs uppercase text-gray-400">Project Review</span>
      </header>

      {/* SECTION 1: Hero, Info, & 3 Mockups */}
      <section className="p-6 md:p-12 border-b border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-8">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">SAFIRA.</h1>
            <p className="text-xl text-gray-600 max-w-2xl">A robust mobile solution for streamlined operations, built with scalability and maintainability in mind.</p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4 border-l border-gray-200 pl-8">
            <div><h4 className="text-xs font-bold text-gray-400 uppercase">Role</h4><p>Mobile Apps Developer</p></div>
            <div><h4 className="text-xs font-bold text-gray-400 uppercase">Platform</h4><p>Android & iOS</p></div>
            <div><h4 className="text-xs font-bold text-gray-400 uppercase">Stack</h4><p>Flutter, BLoC, Provider</p></div>
          </div>
        </div>
        
        {/* Mockup 3 Halaman */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-[9/16] bg-gray-100 flex items-center justify-center border border-gray-200">
              <span className="text-gray-400">Mockup {i}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Galeri Mockup 8-10 Halaman */}
      <section className="p-6 md:p-12 bg-gray-50 border-b border-gray-200">
        <h3 className="text-2xl font-bold mb-10">Application Interface</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="aspect-[9/16] bg-gray-200 flex items-center justify-center border border-gray-300">
              <span className="text-gray-500 text-sm">Screen {i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Technical Approach & Jobdesk */}
      <section className="p-6 md:p-12 max-w-4xl mx-auto py-16">
        <h3 className="text-2xl font-bold mb-8">Technical Approach & Jobdesk</h3>
        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <div>
            <h4 className="font-bold text-black mb-2">Architectural Pattern</h4>
            <p>Mengimplementasikan Clean Architecture untuk memisahkan logika bisnis dari UI. Dengan menggunakan BLoC dan Provider, alur data menjadi lebih terprediksi dan mudah diuji (unit testing).</p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">State Management</h4>
            <p>Mengelola state aplikasi yang kompleks dengan BLoC agar setiap perubahan data tersinkronisasi secara real-time ke UI tanpa menyebabkan re-render yang tidak perlu.</p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">Key Job Responsibilities</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Membangun fitur-fitur inti aplikasi menggunakan Flutter.</li>
              <li>Melakukan integrasi REST API dengan keamanan yang terstandarisasi.</li>
              <li>Optimasi performa aplikasi untuk perangkat dengan spesifikasi rendah.</li>
              <li>Troubleshooting bug dan peningkatan stabilitas sistem secara berkala.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}