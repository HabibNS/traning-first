import React from 'react';
import Link from 'next/link';

export default function NeofyProjectPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#ccff00] selection:text-black">
      
      {/* NAVBAR SIMPLE */}
      <header className="p-6 md:p-12 border-b border-gray-200 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-lg font-medium hover:text-gray-500 transition-colors flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-2 transition-transform">←</span> Back
        </Link>
        <span className="font-bold tracking-widest text-xs uppercase text-gray-400">
          Project Review
        </span>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="p-6 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-gray-200">
          <div className="lg:col-span-8 flex flex-col justify-center">
            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tighter leading-none mb-6">
              NeoFy<br />Weather Station.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
              An IoT-based environmental monitoring system that bridges physical sensor data with mobile-accessible real-time dashboards.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6 lg:border-l border-gray-200 lg:pl-12 justify-center">
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Role</h4>
              <p className="text-lg font-medium text-gray-900">IoT & Mobile Developer</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Hardware</h4>
              <p className="text-lg font-medium text-gray-900">ESP32, BME280</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Tech Stack</h4>
              <p className="text-lg font-medium text-gray-900">Flutter, Firebase</p>
            </div>
          </div>
        </section>

        {/* HERO IMAGE */}
        <section className="w-full h-[50vh] md:h-[70vh] bg-gray-100 border-b border-gray-200 flex flex-col items-center justify-center">
          <span className="text-gray-400 font-medium tracking-widest">
            [ IMAGE: HARDWARE & MOBILE DASHBOARD MOCKUP ]
          </span>
        </section>

        {/* CONTENT SECTION */}
        <section className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-12 max-w-7xl mx-auto py-16 md:py-24">
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-2xl font-bold text-gray-900 sticky top-12">
              Hardware<br />Integration.
            </h3>
          </div>

          <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-12">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 border-b border-black pb-2 inline-block">
                Sensor Data Acquisition
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                NeoFy utilizes the ESP32 microcontroller to poll data from BME280 sensors. This setup captures precise ambient temperature, humidity, and atmospheric pressure. The firmware is optimized for low-latency transmission, ensuring data reaches the cloud almost instantaneously.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 border-b border-black pb-2 inline-block">
                Cloud Sync & Mobile Experience
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                Using Firebase as the real-time backend, the data is pushed and synchronized across the Flutter-based mobile application. The app features an auto-refreshing dashboard that visualizes environmental trends, allowing users to monitor micro-climates remotely with ease.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="p-6 md:p-12 border-t border-gray-200 flex justify-between items-center text-sm font-medium text-gray-500">
        <span>© {new Date().getFullYear()} Habib Nur Sholeh.</span>
        <a href="https://github.com/HabibNS" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
          View on GitHub ↗
        </a>
      </footer>
    </div>
  );
}