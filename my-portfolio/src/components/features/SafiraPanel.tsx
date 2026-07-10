import React from 'react';
import Image from 'next/image';

// ─── SAFIRA BRAND TOKENS ──────────────────────────────────────────────────────
// Primary  : #2563EB  (Blue — vibrant primary)
// Accent   : #06B6D4  (Cyan / Info — tech accent)
// Dark     : #1E3A8A  (Deep blue for dark surfaces)
// Light    : #EFF6FF  (Blue-tinted off-white for backgrounds)
// Success  : #22C55E  (Green — for status badges)
// Warning  : #F59E0B  (Amber — for warnings)
// ─────────────────────────────────────────────────────────────────────────────

interface SafiraPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SafiraPanel({ isOpen, onClose }: SafiraPanelProps) {
  const mockupImages = [
    "/images/safira/safira-login.png",
    "/images/safira/safira-choose-truck-tank.png",
    "/images/safira/safira-sync-load.png",
    "/images/safira/safira-scanqr-unit.png",
    "/images/safira/safira-info-unit.png",
    "/images/safira/safira-dispense-flowmeter-info.png",
    "/images/safira/safira-dispense-success.png",
    "/images/safira/safira-receive-success.png",
    "/images/safira/safira-recommendation.png",
    "/images/tjp-fuel/tjp-history.png",
  ];

  const techStack = [
    { label: "Flutter", src: "/images/tech/flutter-logo.png", alt: "Flutter" },
    { label: "Android Studio", src: "/images/tech/android-studio-logo.webp", alt: "Android Studio" },
  ];

  const meta = [
    { title: "Role", value: "Mobile Apps Developer" },
    { title: "Platform", value: "Android" },
    { title: "Tech Stack", value: "Flutter · MVVM · Provider" },
  ];

  const jobDesc = [
    "Mengembangkan dan merancang antarmuka (UI) aplikasi pemantauan konsumsi bahan bakar yang responsif menggunakan framework Flutter.",
    "Menerapkan pola arsitektur MVVM (Model-View-ViewModel) dipadukan dengan state management Provider untuk memastikan struktur kode yang bersih, modular, dan mudah diuji.",
    "Mengintegrasikan database lokal menggunakan SQLite untuk mengakomodasi pencatatan data secara offline agar aplikasi tetap berfungsi optimal di area operasional terpencil.",
    "Menghubungkan aplikasi dengan REST API eksternal guna memproses sinkronisasi data transaksi pengisian bahan bakar ke server pusat secara real-time.",
    "Melakukan pemecahan masalah (debugging), optimalisasi performa rendering, dan penanganan error untuk memastikan stabilitas aplikasi pada perangkat Android.",
  ];

  return (
    <>
      {/* ── OVERLAY ─────────────────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* ── PANEL ───────────────────────────────────────────────────────────── */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-2xl z-50
          transform transition-transform duration-500 ease-in-out overflow-y-auto
          selection:bg-[#2563EB] selection:text-white
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* ── STICKY HEADER ─────────────────────────────────────────────────── */}
        <header
          className="px-6 md:px-12 py-5 flex justify-between items-center sticky top-0 z-[60]"
          style={{ backgroundColor: "#2563EB" }}
        >
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-white font-semibold text-sm uppercase tracking-widest
              group cursor-pointer hover:opacity-80 transition-opacity"
          >
            <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
            Back
          </button>

          <span
            className="text-xs font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
            style={{ backgroundColor: "#06B6D4", color: "#fff" }}
          >
            Project Review
          </span>
        </header>

        <main>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 1 — HERO: overlapping phones + meta card
          ══════════════════════════════════════════════════════════════════ */}
          <section
            className="overflow-hidden py-20 md:py-28 px-6 md:px-12"
            style={{
              background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 55%, #3B82F6 100%)",
            }}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Phone cluster */}
              <div className="relative h-[460px] md:h-[600px] w-full flex justify-center items-center">
                {/* Back phone */}
                <div
                  className="absolute z-10 w-44 md:w-60 phone-frame aspect-[9/19]
                    -translate-y-12 md:-translate-y-16 shadow-2xl bg-black
                    transition-transform hover:-translate-y-20 duration-500
                    ring-2 ring-white/20"
                >
                  <Image src="/images/tjp-fuel/tjp-homepage.png" alt="SAFIRA Dashboard" fill className="object-cover" />
                </div>

                {/* Front-left phone */}
                <div
                  className="absolute z-20 w-36 md:w-52 phone-frame aspect-[9/19]
                    -translate-x-24 md:-translate-x-36 translate-y-16 md:translate-y-24
                    shadow-2xl bg-black transition-transform hover:translate-y-10 duration-500
                    ring-2 ring-[#06B6D4]/50"
                >
                  <Image src="/images/care/care-splash.png" alt="SAFIRA Splash Screen" fill className="object-cover" />
                </div>

                {/* Front-right phone */}
                <div
                  className="absolute z-20 w-36 md:w-52 phone-frame aspect-[9/19]
                    translate-x-24 md:translate-x-36 translate-y-4 md:translate-y-8
                    shadow-2xl bg-black transition-transform hover:-translate-y-2 duration-500
                    ring-2 ring-white/20"
                >
                  <Image src="/images/tjp-fuel/tjp-choose-truck-tank.png" alt="SAFIRA List View" fill className="object-cover" />
                </div>
              </div>

              {/* Title + meta card */}
              <div className="flex flex-col gap-8 lg:pl-8 z-30">
                <div>
                  <p
                    className="text-xs font-bold tracking-[0.25em] uppercase mb-3"
                    style={{ color: "#06B6D4" }}
                  >
                    Enterprise Mobile App
                  </p>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase text-white leading-[0.9]">
                    SAFIRA.
                  </h1>
                </div>

                {/* Meta card — glassmorphism on blue */}
                <div
                  className="rounded-2xl p-7 flex flex-col gap-5 max-w-sm"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.20)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {meta.map(({ title, value }) => (
                    <div key={title} className="flex flex-col gap-0.5">
                      <span
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: "#06B6D4" }}
                      >
                        {title}
                      </span>
                      <span className="text-white text-base font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 2 — GALLERY + LOGO + TECH BADGES
          ══════════════════════════════════════════════════════════════════ */}
          <section
            className="py-16 md:py-24 px-6 md:px-12 border-b border-blue-100"
            style={{ backgroundColor: "#EFF6FF" }}
          >
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Left column */}
              <div className="lg:col-span-3 flex flex-col items-center gap-8">
                {/* Logo bubble */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center relative overflow-hidden shadow-md"
                  style={{ backgroundColor: "#2563EB" }}
                >
                  <Image src="/images/safira/safira-logo.png" alt="SAFIRA Logo" fill className="object-contain p-3" />
                </div>

                {/* Hero phone */}
                <div className="w-48 md:w-56 phone-frame aspect-[9/19] shadow-xl bg-black relative ring-1 ring-blue-200">
                  <Image src="/images/safira/neofy-homepage.jpeg" alt="SAFIRA Main Interface" fill className="object-cover" />
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-3 justify-center w-full">
                  {techStack.map(({ label, src, alt }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border shadow-sm
                        hover:-translate-y-0.5 transition-transform cursor-default"
                      style={{ borderColor: "#2563EB" }}
                    >
                      <div className="w-6 h-6 relative flex-shrink-0">
                        <Image src={src} alt={alt} fill className="object-contain" />
                      </div>
                      <span className="text-xs font-semibold" style={{ color: "#1E3A8A" }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column: screen grid */}
              <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                {mockupImages.map((imagePath, index) => (
                  <div
                    key={index}
                    className="w-full phone-frame aspect-[9/19] shadow-lg bg-black relative
                      transition-transform hover:-translate-y-2 duration-300
                      ring-1 ring-blue-100 rounded-[16px] overflow-hidden"
                  >
                    <Image src={imagePath} alt={`Screen ${index + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 3 — TECHNICAL APPROACH
          ══════════════════════════════════════════════════════════════════ */}
          <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

              {/* Sticky label */}
              <div className="md:col-span-4 lg:col-span-3">
                <h3
                  className="text-3xl font-extrabold uppercase leading-tight md:sticky md:top-24"
                  style={{ color: "#2563EB" }}
                >
                  Technical<br />Approach.
                </h3>
              </div>

              {/* Content */}
              <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-12">

                {/* Description */}
                <div>
                  <h4
                    className="text-sm font-bold tracking-widest uppercase mb-4 pb-2 border-b-2 inline-block"
                    style={{ color: "#06B6D4", borderColor: "#06B6D4" }}
                  >
                    Description
                  </h4>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    TJP Fuel Monitoring Apps adalah aplikasi mobile tingkat enterprise yang dirancang khusus
                    untuk memantau, mengelola, dan menganalisis data konsumsi bahan bakar secara akurat dan
                    real-time. Fokus utama proyek ini adalah menyediakan visualisasi data operasional yang
                    intuitif bagi pengguna, serta memastikan keandalan penyimpanan data pada kondisi jaringan
                    yang tidak stabil di lapangan.
                  </p>
                </div>

                {/* Job description */}
                <div>
                  <h4
                    className="text-sm font-bold tracking-widest uppercase mb-4 pb-2 border-b-2 inline-block"
                    style={{ color: "#06B6D4", borderColor: "#06B6D4" }}
                  >
                    Job Description
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {jobDesc.map((item, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <span
                          className="flex-shrink-0 w-7 h-7 rounded-full text-white text-xs font-bold
                            flex items-center justify-center mt-0.5"
                          style={{ backgroundColor: "#2563EB" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* ── FOOTER ────────────────────────────────────────────────────────── */}
        <footer
          className="px-6 md:px-12 py-6 flex justify-between items-center text-sm font-medium"
          style={{ backgroundColor: "#1E3A8A" }}
        >
          <span className="text-white/60">
            © {new Date().getFullYear()} Habib Nur Sholeh.
          </span>
          <a
            href="https://github.com/HabibNS"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:opacity-80 transition-opacity"
            style={{ color: "#06B6D4" }}
          >
            View on GitHub ↗
          </a>
        </footer>

      </div>
    </>
  );
}