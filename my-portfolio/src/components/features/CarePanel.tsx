import React from 'react';
import Image from 'next/image';

// ─── CARE BRAND TOKENS ───────────────────────────────────────────────────────
// Primary    : #615EFC  (Indigo — main brand, calm but confident)
// Primary Lt : #7E8EF1  (Periwinkle — secondary accent, hover states)
// Sage       : #D1D8C5  (Muted Sage — natural, therapeutic accent)
// Light bg   : #EEEEEE  (Neutral Light Gray — section backgrounds)
// Dark       : #2C2A8C  (Deep Indigo — footer, dark surfaces)
// Darkest    : #1B1A4D  (Near-black indigo — headline text on light)
// Ink        : #4A4A55  (Muted slate — body copy)
// ─────────────────────────────────────────────────────────────────────────────

interface CarePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CarePanel({ isOpen, onClose }: CarePanelProps) {
  const mockupImages = [
    "/images/care/care-onboarding1.png",
    "/images/care/care-loginscreen1.png",
    "/images/care/care-beranda1.png",
    "/images/care/care-deteksiemosi1.png",
    "/images/care/care-hasildeteksiemosi1.png",
    "/images/care/care-hasildeteksiemosi2.png",
    "/images/care/care-kalender1.png",
    "/images/care/care-doctor1.png",
    "/images/care/care-profilescreen1.png",
    "/images/care/care-aboutus1.png",
  ];

  const techStack = [
    { label: "Kotlin", src: "/images/tech/kotlin-logo.png", alt: "Kotlin" },
    { label: "Android Studio", src: "/images/tech/android-studio-logo.webp", alt: "Android Studio" },
  ];

  const meta = [
    { title: "Role", value: "Mobile Apps Developer" },
    { title: "Platform", value: "Android" },
    { title: "Tech Stack", value: "Kotlin · Jetpack Compose · MVVM · Retrofit" },
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
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* ── PANEL ───────────────────────────────────────────────────────────── */}
      <div
        className={`fixed top-0 right-0 h-full w-full shadow-2xl z-50
          transform transition-transform duration-500 ease-in-out overflow-y-auto
          selection:bg-[#615EFC] selection:text-white
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ backgroundColor: "#EEEEEE" }}
      >

        {/* ── STICKY HEADER ───────────────────────────────────────────────────── */}
        <header
          className="px-6 md:px-12 py-5 flex justify-between items-center sticky top-0 z-[60]"
          style={{ backgroundColor: "#615EFC" }}
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
            style={{ backgroundColor: "#D1D8C5", color: "#1B1A4D" }}
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
              background: "linear-gradient(160deg, #1B1A4D 0%, #2C2A8C 45%, #615EFC 100%)",
            }}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Phone cluster */}
              <div className="relative h-[460px] md:h-[600px] w-full flex justify-center items-center">
                {/* Back-center phone */}
                <div
                  className="absolute z-10 w-44 md:w-60 phone-frame aspect-[9/19]
                    -translate-y-12 md:-translate-y-16 shadow-2xl bg-black
                    transition-transform hover:-translate-y-20 duration-500"
                  style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.45), 0 0 0 2px rgba(238,238,238,0.15)" }}
                >
                  <Image src="/images/care/care-beranda1.png" alt="Care Dashboard" fill className="object-cover" />
                </div>

                {/* Front-left phone */}
                <div
                  className="absolute z-20 w-36 md:w-52 phone-frame aspect-[9/19]
                    -translate-x-24 md:-translate-x-36 translate-y-16 md:translate-y-24
                    shadow-2xl bg-black transition-transform hover:translate-y-10 duration-500"
                  style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.45), 0 0 0 2px rgba(209,216,197,0.5)" }}
                >
                  <Image src="/images/care/care-splashscreen.png" alt="Care Splash Screen" fill className="object-cover" />
                </div>

                {/* Front-right phone */}
                <div
                  className="absolute z-20 w-36 md:w-52 phone-frame aspect-[9/19]
                    translate-x-24 md:translate-x-36 translate-y-4 md:translate-y-8
                    shadow-2xl bg-black transition-transform hover:-translate-y-2 duration-500"
                  style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.45), 0 0 0 2px rgba(238,238,238,0.15)" }}
                >
                  <Image src="/images/care/care-deteksiemosi1.png" alt="Care List View" fill className="object-cover" />
                </div>
              </div>

              {/* Title + meta card */}
              <div className="flex flex-col gap-8 lg:pl-8 z-30">
                <div>
                  <p
                    className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
                    style={{ color: "#D1D8C5" }}
                  >
                    My Capstone Project
                  </p>
                  <h1
                    className="text-6xl md:text-7xl lg:text-[84px] font-extrabold tracking-tight leading-[0.88] text-white"
                  >
                    Care<span style={{ color: "#D1D8C5" }}>.</span>
                  </h1>
                </div>

                {/* Meta card — glass on indigo */}
                <div
                  className="rounded-2xl p-7 flex flex-col gap-5 max-w-sm"
                  style={{
                    backgroundColor: "rgba(238,238,238,0.10)",
                    border: "1px solid rgba(209,216,197,0.30)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {meta.map(({ title, value }) => (
                    <div key={title} className="flex flex-col gap-0.5">
                      <span
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: "#D1D8C5" }}
                      >
                        {title}
                      </span>
                      <span className="text-white text-base font-semibold">{value}</span>
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
            className="py-16 md:py-24 px-6 md:px-12 border-b"
            style={{ backgroundColor: "#F5F5F0", borderColor: "#D1D8C5" }}
          >
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Left column */}
              <div className="lg:col-span-3 flex flex-col items-center gap-8">

                {/* Logo bubble */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center relative overflow-hidden shadow-lg"
                  style={{ backgroundColor: "#EEEEEE" }}
                >
                  <Image src="/images/care/care-logo.png" alt="Care Logo" fill className="object-contain p-3" />
                </div>

                {/* Hero phone */}
                <div
                  className="w-48 md:w-56 phone-frame aspect-[9/19] bg-black relative"
                  style={{ boxShadow: "0 20px 50px rgba(97,94,252,0.20)", outline: "1px solid #7E8EF1" }}
                >
                  <Image src="/images/care/care-hasildeteksiemosi2.png" alt="Care Main Interface" fill className="object-cover" />
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-3 justify-center w-full">
                  {techStack.map(({ label, src, alt }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl shadow-sm
                        hover:-translate-y-0.5 transition-transform cursor-default"
                      style={{
                        backgroundColor: "#fff",
                        border: "1px solid #7E8EF1",
                      }}
                    >
                      <div className="w-6 h-6 relative flex-shrink-0">
                        <Image src={src} alt={alt} fill className="object-contain" />
                      </div>
                      <span className="text-xs font-semibold" style={{ color: "#2C2A8C" }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Screen grid */}
              <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                {mockupImages.map((imagePath, index) => (
                  <div
                    key={index}
                    className="w-full phone-frame aspect-[9/19] bg-black relative
                      transition-transform hover:-translate-y-2 duration-300 rounded-[16px] overflow-hidden"
                    style={{ boxShadow: "0 8px 24px rgba(97,94,252,0.15)", outline: "1px solid #D1D8C5" }}
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
          <section
            className="py-16 md:py-24 px-6 md:px-12"
            style={{ backgroundColor: "#EEEEEE" }}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

              {/* Sticky label */}
              <div className="md:col-span-4 lg:col-span-3">
                <h3
                  className="text-3xl font-extrabold uppercase leading-tight md:sticky md:top-24"
                  style={{ color: "#615EFC" }}
                >
                  Technical<br />Approach.
                </h3>
              </div>

              {/* Content — white card */}
              <div className="md:col-span-8 lg:col-span-7">
                <div
                  className="rounded-2xl p-8 md:p-10 flex flex-col gap-10"
                  style={{ backgroundColor: "#fff", border: "1px solid #D1D8C5" }}
                >

                  {/* Description */}
                  <div>
                    <h4
                      className="text-xs font-bold tracking-widest uppercase mb-4 pb-2 border-b-2 inline-block"
                      style={{ color: "#2C2A8C", borderColor: "#615EFC" }}
                    >
                      Description
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed" style={{ color: "#4A4A55" }}>
                      Care adalah aplikasi mobile tingkat enterprise yang dirancang khusus
                      untuk memantau, mengelola, dan menganalisis data konsumsi bahan bakar secara akurat dan
                      real-time. Fokus utama proyek ini adalah menyediakan visualisasi data operasional yang
                      intuitif bagi pengguna, serta memastikan keandalan penyimpanan data pada kondisi jaringan
                      yang tidak stabil di lapangan.
                    </p>
                  </div>

                  {/* Job description */}
                  <div>
                    <h4
                      className="text-xs font-bold tracking-widest uppercase mb-6 pb-2 border-b-2 inline-block"
                      style={{ color: "#2C2A8C", borderColor: "#615EFC" }}
                    >
                      Job Description
                    </h4>
                    <ul className="flex flex-col gap-5">
                      {jobDesc.map((item, i) => (
                        <li key={i} className="flex gap-4 items-start">
                          {/* Numbered bullet */}
                          <span
                            className="flex-shrink-0 w-7 h-7 rounded-full text-xs font-bold
                              flex items-center justify-center mt-0.5"
                            style={{ backgroundColor: "#615EFC", color: "#fff" }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <p className="text-base md:text-lg leading-relaxed" style={{ color: "#4A4A55" }}>
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* ── FOOTER ────────────────────────────────────────────────────────── */}
        <footer
          className="px-6 md:px-12 py-6 flex justify-between items-center text-sm font-medium"
          style={{ backgroundColor: "#1B1A4D" }}
        >
          <span style={{ color: "rgba(238,238,238,0.55)" }}>
            © {new Date().getFullYear()} Habib Nur Sholeh.
          </span>
          <a
            href="https://github.com/Children-s-Autism-Resource-Education/CARE-Mobile-Development"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:opacity-80 transition-opacity"
            style={{ color: "#D1D8C5" }}
          >
            View on GitHub ↗
          </a>
        </footer>

      </div>
    </>
  );
}