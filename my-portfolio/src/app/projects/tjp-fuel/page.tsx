"use client"; // 1. Tambahkan ini di baris paling atas

import React, { useState, useEffect } from 'react'; // 2. Tambahkan useState dan useEffect
import { useRouter } from 'next/navigation'; // 3. Tambahkan useRouter
import Image from 'next/image';
// Hapus import Link karena kita akan memakai <button> dengan useRouter

export default function TjpFuelProjectPage() {
  // --- 4. LOGIKA ANIMASI & ROUTING ---
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  // Memicu animasi slide-in saat komponen pertama kali dimuat
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Memicu animasi slide-out sebelum pindah halaman
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMounted(false); // Halaman digeser ke kanan
    
    // Tunggu 500ms (sesuai durasi transisi) sebelum pindah ke home
    setTimeout(() => {
      router.push('/');
    }, 500); 
  };
  // -----------------------------------

  const mockupImages = [
    "/images/tjp-fuel/tjp-login.png",
    "/images/tjp-fuel/tjp-choose-truck-tank.png",
    "/images/tjp-fuel/tjp-sync-load.png",
    "/images/tjp-fuel/tjp-scanqr-unit.png",
    "/images/tjp-fuel/tjp-info-unit.png",
    "/images/tjp-fuel/tjp-dispense-flowmeter-info.png",
    "/images/tjp-fuel/tjp-dispense-success.png",
    "/images/tjp-fuel/tjp-receive-success.png",
    "/images/tjp-fuel/tjp-recommendation.png",
    "/images/tjp-fuel/tjp-history.png"
  ];

  return (
    <div 
      // 5. UBAH PEMBUNGKUS UTAMA: Tambahkan class transform dan logika isMounted
      className={`min-h-screen bg-white text-black font-sans selection:bg-[#ccff00] selection:text-black transform transition-transform duration-500 ease-in-out ${
        isMounted ? "translate-x-0" : "translate-x-full"
      }`}
    >
      
      {/* NAVBAR SIMPLE */}
      <header className="p-6 md:p-12 border-b border-gray-200 flex justify-between items-center bg-white relative z-50">
        
        {/* 6. UBAH TOMBOL BACK: Ganti <Link> menjadi <button> dan panggil handleBack */}
        <button 
          onClick={handleBack}
          className="text-lg font-medium hover:text-gray-500 transition-colors flex items-center gap-2 group cursor-pointer"
        >
          <span className="group-hover:-translate-x-2 transition-transform">←</span> Back
        </button>

        <span className="font-bold tracking-widest text-xs uppercase text-gray-400">
          Project Review
        </span>
      </header>

      <main>
        {/* ========================================= */}
        {/* SECTION 1: OVERLAPPING PHONES & INFO CARD */}
        {/* ========================================= */}
        <section className="p-6 md:p-12 border-b border-gray-200 bg-gray-50 overflow-hidden py-16 md:py-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            {/* KOLOM KIRI: 3 Overlapping Phones */}
            <div className="relative h-[450px] md:h-[600px] w-full flex justify-center items-center">
              
              {/* Phone Tengah (Dashboard - Paling Belakang & Tinggi) */}
              <div className="absolute z-10 w-48 md:w-64 phone-frame aspect-[9/19] -translate-y-12 md:-translate-y-16 shadow-xl bg-black transition-transform hover:-translate-y-20 duration-500">
                <Image src="/images/tjp-fuel/tjp-homepage.png" alt="TJP Dashboard" fill className="object-cover" />
              </div>

              {/* Phone Kiri (Splash Screen - Paling Depan Kiri & Bawah) */}
              <div className="absolute z-20 w-40 md:w-56 phone-frame aspect-[9/19] -translate-x-24 md:-translate-x-36 translate-y-16 md:translate-y-24 shadow-2xl bg-black transition-transform hover:translate-y-12 duration-500">
                <Image src="/images/tjp-fuel/tjp-splash.png" alt="TJP Splash Screen" fill className="object-cover" />
              </div>

              {/* Phone Kanan (List View - Paling Depan Kanan & Tengah) */}
              <div className="absolute z-20 w-40 md:w-56 phone-frame aspect-[9/19] translate-x-24 md:translate-x-36 translate-y-4 md:translate-y-8 shadow-2xl bg-black transition-transform hover:-translate-y-2 duration-500">
                <Image src="/images/tjp-fuel/tjp-choose-truck-tank.png" alt="TJP List View" fill className="object-cover" />
              </div>

            </div>

            {/* KOLOM KANAN: Judul & Info Card */}
            <div className="flex flex-col gap-10 lg:pl-12 justify-center z-30">
              <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tighter uppercase text-gray-900 leading-[0.9]">
                TJP Fuel<br />Monitoring Apps.
              </h1>

              {/* Card Info */}
              <div className="border-2 border-gray-300 rounded-[32px] p-8 md:p-10 bg-white shadow-xl flex flex-col gap-6 max-w-md">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-black mb-1">Role</h4>
                  <p className="text-lg md:text-xl text-gray-700">Mobile Apps Developer</p>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-black mb-1">Platform</h4>
                  <p className="text-lg md:text-xl text-gray-700">Android</p>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-black mb-1">Tech Stack</h4>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Flutter, MVVM, Provider, SQLite
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================= */}
        {/* SECTION 2: GALLERY MOCKUP (REPLIKA SLIDE) */}
        {/* ========================================= */}
        <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden border-b border-gray-200">

          {/* Container Konten Utama */}
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* KOLOM KIRI (Logo TJP, 1 HP Besar, Logo Tech) */}
            <div className="lg:col-span-3 flex flex-col items-center gap-10">
              
              {/* Tempat Logo TJP */}
              <div className="w-32 h-32 relative flex items-center justify-center bg-white rounded-full shadow-md border border-gray-100 overflow-hidden">
                <Image src="/images/tjp-fuel/tjp-logo.png" alt="TJP Logo" fill className="object-contain p-4" />
              </div>

              {/* HP Utama (Besar) */}
              <div className="w-56 md:w-64 phone-frame aspect-[9/19] shadow-2xl bg-black relative">
                <Image src="/images/tjp-fuel/tjp-homepage.png" alt="TJP Main Interface" fill className="object-cover" />
              </div>

              {/* Tempat Logo Teknologi (Flutter & Android Studio) */}
              <div className="flex items-center gap-4 w-full justify-center">
                <div className="w-28 h-14 relative bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden hover:-translate-y-1 transition-transform cursor-default">
                  <Image src="/images/tech/flutter-logo.png" alt="Flutter" fill className="object-contain p-2" />
                </div>
                <div className="w-28 h-14 relative bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden hover:-translate-y-1 transition-transform cursor-default">
                  <Image src="/images/tech/android-studio-logo.webp" alt="Android Studio" fill className="object-contain p-2" />
                </div>
              </div>

            </div>

            {/* KOLOM KANAN (Grid 10 HP) */}
            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {mockupImages.map((imagePath, index) => (
                <div 
                  key={index} 
                  className="w-full phone-frame aspect-[9/19] shadow-lg bg-black relative transition-transform hover:-translate-y-2 duration-300"
                >
                  <Image 
                    src={imagePath} 
                    alt={`Screen ${index + 1}`} 
                    fill 
                    className="object-cover" 
                  />
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================= */}
        {/* SECTION 3: TECHNICAL APPROACH             */}
        {/* ========================================= */}
        <section className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-12 max-w-7xl mx-auto py-16 md:py-24">
          
          {/* Kolom Kiri: Judul Utama Section */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-2xl font-bold text-gray-900 sticky top-12">
              Technical<br />Approach.
            </h3>
          </div>

          {/* Kolom Kanan: Detail Bahasan */}
          <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-12">
            
            {/* Bahasan 1: Description */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 border-b border-black pb-2 inline-block">
                Description
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                TJP Fuel Monitoring Apps adalah aplikasi mobile tingkat enterprise yang dirancang khusus untuk memantau, mengelola, dan menganalisis data konsumsi bahan bakar secara akurat dan real-time. Fokus utama proyek ini adalah menyediakan visualisasi data operasional yang intuitif bagi pengguna, serta memastikan keandalan penyimpanan data pada kondisi jaringan yang tidak stabil di lapangan.
              </p>
            </div>

            {/* Bahasan 2: Job Description */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 border-b border-black pb-2 inline-block">
                Job Description
              </h4>
              <ul className="list-disc pl-5 space-y-3 text-lg text-gray-700 leading-relaxed">
                <li>Mengembangkan dan merancang antarmuka (UI) aplikasi pemantauan konsumsi bahan bakar yang responsif menggunakan framework Flutter.</li>
                <li>Menerapkan pola arsitektur MVVM (Model-View-ViewModel) dipadukan dengan state management Provider untuk memastikan struktur kode yang bersih, modular, dan mudah diuji.</li>
                <li>Mengintegrasikan database lokal menggunakan SQLite untuk mengakomodasi pencatatan data secara offline agar aplikasi tetap berfungsi optimal di area operasional terpencil.</li>
                <li>Menghubungkan aplikasi dengan REST API eksternal guna memproses sinkronisasi data transaksi pengisian bahan bakar ke server pusat secara real-time.</li>
                <li>Melakukan pemecahan masalah (debugging), optimalisasi performa rendering, dan penanganan error untuk memastikan stabilitas aplikasi pada perangkat Android.</li>
              </ul>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER SIMPLE */}
      <footer className="p-6 md:p-12 border-t border-gray-200 flex justify-between items-center text-sm font-medium text-gray-500">
        <span>© {new Date().getFullYear()} Habib Nur Sholeh.</span>
        <a href="https://github.com/HabibNS" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
          View on GitHub ↗
        </a>
      </footer>

    </div>
  );
}