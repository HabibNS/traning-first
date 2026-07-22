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
//
// ⚠️ IMAGE NOTE — READ BEFORE EDITING THE MOCKUP ARRAY:
// All Safira mockups are exported from a Figma device-mockup template that
// bakes its OWN outer margin, fake status bar, and fake camera notch into
// every PNG. Measured directly from safira-previewscreen.png (1712×3632px):
//   - outer lavender margin:  ~1.9% left/right, ~0.9% top/bottom
//   - fake status bar + notch: 0% → 5.7% from top
//   - home-indicator + margin: last ~2.8% at the bottom
// FigmaMockup crops this out precisely via background-size/background-position
// (asymmetric crop — object-fit/scale alone isn't precise enough here) and
// renders inside the SAME `.phone-frame` used by every other project (black
// bezel + CSS notch + volume/power buttons — see globals.css, untouched).
//
// ⚠️ POSITIONING CONTRACT for <FigmaMockup>:
// FigmaMockup does NOT set its own `position` (relative/absolute) — the
// CALLER must always include one in `className`, because:
//   - the hero cluster needs `absolute` (for the translate-x/y overlap)
//   - the grid/gallery items need `relative` (normal flow, but still a
//     positioned ancestor so the CSS-drawn notch/buttons render correctly)
// If you add a new <FigmaMockup> and forget a position class, the
// notch/button pseudo-elements will still render but won't be positioned
// correctly relative to the frame.

const FIGMA_CROP = {
  // computed from safira-previewscreen.png — shared by all Safira mockups
  backgroundSize: "103.95% 102.27%",
  backgroundPosition: "44.23% 64.21%",
};

function FigmaMockup({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    // No `relative`/`absolute` here — the caller supplies positioning via className.
    // No `overflow-hidden` here either — that would clip the ::before (notch)
    // and ::after (volume/power buttons), which intentionally poke outside
    // the frame's box via negative offsets.
    <div className={`phone-frame ${className}`}>
      {/* Inner wrapper: THIS is what clips the cropped background image
          to the rounded corner — isolated from the outer frame so the
          notch/buttons above are never clipped. */}
      <div className="relative w-full h-full overflow-hidden rounded-[22px]">
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: FIGMA_CROP.backgroundSize,
            backgroundPosition: FIGMA_CROP.backgroundPosition,
          }}
        />
      </div>
    </div>
  );
}

interface SafiraPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SafiraPanel({ isOpen, onClose }: SafiraPanelProps) {
  const mockupImages = [
    "/images/safira/safira-onboarding.png",
    "/images/safira/safira-mainscreen.png",
    "/images/safira/safira-camera.png",
    "/images/safira/safira-addhazardscreen.png",
    "/images/safira/safira-previewscreen.png",
    "/images/safira/safira-historyhazardscreen.png",
    "/images/safira/safira-safetyinformationscreen.png",
    "/images/safira/safira-profilescreen.png",
    "/images/safira/safira-informasipribadiscreen.png",
    "/images/safira/safira-notificationscreen.png",
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
              Each phone below explicitly carries `absolute` in its className —
              required now that FigmaMockup no longer sets position itself.
          ══════════════════════════════════════════════════════════════════ */}
          <section
            className="overflow-hidden py-20 md:py-28 px-6 md:px-12"
            style={{
              background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 55%, #3B82F6 100%)",
            }}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Phone cluster — relative anchor for the 3 absolutely-positioned phones */}
              <div className="relative h-[460px] md:h-[600px] w-full flex justify-center items-center">
                {/* Back phone */}
                <FigmaMockup
                  src="/images/safira/safira-camera.png"
                  alt="SAFIRA Dashboard"
                  className="absolute z-10 w-44 md:w-60 aspect-[9/19]
                    -translate-y-12 md:-translate-y-16
                    transition-transform hover:-translate-y-20 duration-500
                    ring-2 ring-white/20"
                />

                {/* Front-left phone */}
                <FigmaMockup
                  src="/images/safira/safira-splash.png"
                  alt="SAFIRA Splash Screen"
                  className="absolute z-20 w-36 md:w-52 aspect-[9/19]
                    -translate-x-24 md:-translate-x-36 translate-y-16 md:translate-y-24
                    transition-transform hover:translate-y-10 duration-500
                    ring-2 ring-[#06B6D4]/50"
                />

                {/* Front-right phone */}
                <FigmaMockup
                  src="/images/safira/safira-previewscreen.png"
                  alt="SAFIRA List View"
                  className="absolute z-20 w-36 md:w-52 aspect-[9/19]
                    translate-x-24 md:translate-x-36 translate-y-4 md:translate-y-8
                    transition-transform hover:-translate-y-2 duration-500
                    ring-2 ring-white/20"
                />
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
              Every FigmaMockup here now explicitly carries `relative`.
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
                <FigmaMockup
                  src="/images/safira/safira-camera.png"
                  alt="SAFIRA Main Interface"
                  className="relative w-48 md:w-56 aspect-[9/19] shadow-xl ring-1 ring-blue-200"
                />

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
                  <FigmaMockup
                    key={index}
                    src={imagePath}
                    alt={`Screen ${index + 1}`}
                    className="relative w-full aspect-[9/19] shadow-lg
                      transition-transform hover:-translate-y-2 duration-300
                      ring-1 ring-blue-100"
                  />
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