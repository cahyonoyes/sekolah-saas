"use client";

import Link from "next/link";

export default function LandingPage() {
  // =========================================================================
  // 🎯 KOTAK PUSAT KENDALI "SEKALI KLIK" - CUKUP EDIT DI SINI SAJA, PAK!
  // =========================================================================
  // Gantilah teks di bawah ini sesuai target sekolah yang ingin Anda tawarkan:
  const config = {
    namaSekolah: "GLOBAL RELIGIOUS SCHOOL", // Contoh Swasta/Agama: "GLOBAL RELIGIOUS SCHOOL" | Contoh Negeri: "SDN UTAMA TERINTEGRASI"
    tagline: "Sekolah Modern, Religius & Membahagiakan Orang Tua Murid",
    subTagline: "Platform SaaS Ekosistem Pendidikan Terintegrasi. Menghubungkan Admin, Kepala Sekolah, Guru, Tata Usaha, Orang Tua, dan Murid dalam satu sistem pintar bertaraf nasional dan global.",
    badgeAtas: "✨ The Future of Character & Modern Education",
    karakterUnggulan: "Jurnal Adab & Karakter", // Untuk umum/negeri bisa diganti: "Jurnal Karakter & Profil Pancasila"
  };
  // =========================================================================

  const features = [
    { title: "Kurikulum Terintegrasi", desc: "Integrasi metode belajar modern nasional dengan penanaman karakter budi pekerti yang kokoh.", icon: "🌍" },
    { title: config.karakterUnggulan, desc: "Orang tua bisa memantau perkembangan adab, ibadah harian, dan akhlak mulia anak secara real-time langsung dari HP.", icon: "🕌" },
    { title: "Transparansi Dana & BOS", desc: "Sistem pelaporan keuangan sekolah yang terbuka, akurat, dan tepercaya untuk komite, yayasan & wali murid.", icon: "💼" },
    { title: "AI Parenting Consultant", desc: "Konsultasi pola asuh anak 24 jam berbasis kecerdasan buatan untuk membahagiakan keluarga.", icon: "🤖" },
  ];

  const packages = [
    { name: "Paket Perintis", price: "Rp 500", desc: "Cocok untuk digitalisasi dasar", features: ["Jurnal Adab/Karakter Manual", "Tabungan Siswa Manual", "Kuitansi Dana BOS"] },
    { name: "Paket Hebat", price: "Rp 1.500", desc: "Terpopuler untuk sekolah modern", features: ["Import Data Dapodik Massal", "Grafik Tren Adab Modern", "Cetak Rapor PTS PDF Otomatis"] },
    { name: "Paket Premium", price: "Rp 2.500", desc: "Fasilitas lengkap kasta tertinggi", features: ["AI Parenting Consultant 24 Jam", "Perpustakaan Scan Barcode Kamera", "Folder Adiwiyata Cloud System"] },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto rounded-b-2xl">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🕌</span>
          <span className="font-black text-lg tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent uppercase">{config.namaSekolah}</span>
        </div>
        <a href="https://vercel.app" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-emerald-100 transition-all">
          Portal Aplikasi →
        </a>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="max-w-7xl mx-auto px-6 pt-16 pb-20 text-center bg-gradient-to-b from-emerald-50/40 via-white to-white rounded-3xl mt-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200/60 rounded-full text-xs text-emerald-700 font-bold uppercase tracking-wider mb-6">
          {config.badgeAtas}
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
          {config.tagline.split("&")[0]} & <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">{config.tagline.split("&")[1] || "Membahagiakan Orang Tua"}</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
          {config.subTagline}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://vercel.app" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl text-base font-bold shadow-lg shadow-slate-200 transition-all">
            Masuk Portal Akses (7 Role)
          </a>
          <a href="#harga" className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl text-base font-bold transition-all">
            Lihat Harga Paket SaaS
          </a>
        </div>
      </header>

      {/* 3. VISI & FITUR UNGGULAN */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-100">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Modul Ekosistem Terintegrasi</h2>
          <p className="text-sm text-slate-400 mt-2 font-medium">Dirancang khusus untuk memenuhi standar digitalisasi sekolah masa kini.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100/80 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all group">
              <span className="text-3xl bg-white p-3 rounded-xl shadow-sm inline-block group-hover:scale-110 transition-transform">{feat.icon}</span>
              <h3 className="font-bold text-slate-900 mt-5 text-base">{feat.title}</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DAFTAR HARGA LISENSI SAAS */}
      <section id="harga" className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-100 bg-slate-50/40 rounded-3xl mb-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Investasi Lisensi Sekolah</h2>
          <p className="text-sm text-slate-400 mt-2 font-medium">Skema biaya flat langganan bulanan dihitung per siswa, sangat fleksibel bagi anggaran BOS.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, idx) => (
            <div key={idx} className={`bg-white p-8 rounded-2xl border shadow-sm flex flex-col justify-between transition-all ${
              pkg.name === "Paket Hebat" ? "border-emerald-500 ring-4 ring-emerald-500/10 scale-105 z-10" : "border-slate-200"
            }`}>
              <div>
                <h3 className="font-black text-lg text-slate-900">{pkg.name}</h3>
                <p className="text-xs text-slate-400 font-medium mt-1">{pkg.desc}</p>
                <div className="mt-5 mb-6">
                  <span className="text-3xl font-black text-slate-900">{pkg.price}</span>
                  <span className="text-xs text-slate-400 font-bold"> / siswa / bulan</span>
                </div>
                <ul className="space-y-3 border-t border-slate-100 pt-5">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="text-xs text-slate-600 font-medium flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="https://vercel.app" className={`w-full text-center py-3 rounded-xl text-xs font-bold mt-8 transition-all ${
                pkg.name === "Paket Hebat" ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-100" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}>
                Pilih Akses Paket
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-xs font-bold text-slate-400 border-t border-slate-100 max-w-7xl mx-auto">
        © {new Date().getFullYear()} {config.namaSekolah} System. All Rights Reserved. Powered by Next.js & Vercel.
      </footer>
    </div>
  );
}
