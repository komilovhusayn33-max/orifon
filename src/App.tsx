import { motion } from "motion/react";
import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import { 
  MapPin, Phone, Instagram, Youtube, Send, ChevronDown, 
  CheckCircle2, Building2, Users, Calendar, Map
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-[var(--color-gold)] selection:text-white relative">
      
      {/* Sky & Clouds Background */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-[#87CEEB] via-[#B0E0E6] to-[#F0F8FF] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-white/90 blur-[100px] rounded-full cloud-1"></div>
        <div className="absolute top-[20%] right-[-20%] w-[70vw] h-[70vw] bg-white/80 blur-[120px] rounded-full cloud-2"></div>
        <div className="absolute bottom-[-20%] left-[10%] w-[80vw] h-[80vw] bg-white/90 blur-[140px] rounded-full cloud-3"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-lg border-b border-white/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif font-bold text-2xl tracking-tight text-[#450000]">
            ELITE<span className="text-[var(--color-gold)]">BUILDING</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#450000]">
            <a href="#about" className="hover:text-[var(--color-gold)] transition-colors">Biz haqimizda</a>
            <a href="#project" className="hover:text-[var(--color-gold)] transition-colors">Loyiha</a>
            <a href="#advantages" className="hover:text-[var(--color-gold)] transition-colors">Afzalliklar</a>
            <a href="#faq" className="hover:text-[var(--color-gold)] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[var(--color-gold)] transition-colors">Kontaktlar</a>
            <a href="tel:+998781136117" className="bg-[#450000] text-white px-6 py-2.5 rounded-full hover:bg-[#5a0000] transition-all shadow-md">
              +998 78 113-61-17
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* 1. Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/50 text-[#450000] text-sm font-semibold mb-6 shadow-sm">
                ✨ Premium toifadagi xonadonlar
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 text-[#450000]">
                Orifon <br/><span className="text-[var(--color-gold)] italic">Turar Joy Majmuasi</span>
              </h1>
              <p className="text-lg md:text-xl text-[#450000]/80 mb-10 max-w-lg font-light">
                Zamonaviy hayot tarzi va qulayliklar uyg'unligi. O'zbekiston bo'ylab ishonchli qurilish.
              </p>
              
              <RegistrationForm title="Bepul konsultatsiya oling" />
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/40 backdrop-blur-sm">
                <img 
                  src="https://picsum.photos/seed/construction/1200/800" 
                  alt="Orifon TJM" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#450000] text-white p-8 rounded-3xl shadow-2xl border border-white/10">
                <p className="text-5xl font-serif font-bold text-[var(--color-gold)] mb-1">2028</p>
                <p className="text-sm font-medium opacity-90 uppercase tracking-wider">Topshirish muddati</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. About Us */}
        <section id="about" className="py-24 px-6 bg-white/30 backdrop-blur-lg border-y border-white/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4 text-[#450000]">Biz haqimizda</h2>
              <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <StatCard number="4" text="Muvaffaqiyatli topshirilgan majmualar" />
              <StatCard number="3" text="Qurilish jarayonidagi loyihalar" />
              <StatCard number="10+" text="Yillik qurilish sohasida tajriba" />
              <StatCard number="2,500+" text="Kadastr bilan topshirilgan xonadonlar" />
            </div>

            <div className="bg-white/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/60 shadow-sm">
              <h3 className="text-2xl font-serif font-bold mb-6 text-center text-[#450000]">O'zbekiston bo'ylab faoliyat</h3>
              <p className="text-center text-[#450000]/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Biz respublikamizning 4 ta viloyatida loyihalar qurib topshirmoqdamiz: Samarqand, Toshkent, Navoiy, Sirdaryo.
              </p>
              <div className="relative w-full max-w-4xl mx-auto mt-10 aspect-[4/3] md:aspect-[2/1] bg-transparent rounded-3xl overflow-hidden flex items-center justify-center">
                {/* Map Background */}
                <img 
                  src="https://cdn.vectorstock.com/i/500p/00/00/uzbekistan-political-map-of-administrative-vector-46110000.jpg" 
                  alt="Uzbekistan Map with Locations" 
                  className="w-full h-full object-contain p-4 drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. About Project (Dark Section with White Text) */}
        <section id="project" className="py-24 px-6 bg-[#450000] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6 text-white">Loyiha haqida</h2>
                <div className="w-20 h-1 bg-[var(--color-gold)] mb-10" />
                <p className="text-white/80 mb-10 text-lg font-light leading-relaxed">
                  Orifon - bu shunchaki turar joy emas, balki sizning yangi, qulay va xavfsiz hayotingiz boshlanishi.
                </p>
                
                <ul className="space-y-6">
                  <ProjectDetail icon={<Calendar />} title="Topshirish muddati" value="2028-yil, 4-choragi" />
                  <ProjectDetail icon={<Building2 />} title="Topshirish holati" value="Ta'mirsiz oq suvoq (White Box)" />
                  <ProjectDetail icon={<Users />} title="Jami xonadonlar" value="567 ta" />
                  <ProjectDetail icon={<Map />} title="Xonadonlar turi" value="2, 3, 4 xonalik (36 kv.m - 129 kv.m)" />
                </ul>
              </div>
              <div className="relative">
                <img src="https://cdn.yangiuylar.uz/uploads/2025/07/07/09/29/tg_image_3655390952-1751869784055-175571569_normal.webp" alt="Interior" className="rounded-3xl shadow-2xl border-4 border-white/10" referrerPolicy="no-referrer" />
                <div className="absolute -bottom-8 -left-8 bg-[var(--color-gold)] p-8 rounded-3xl text-[#450000] hidden md:block shadow-xl">
                  <p className="text-5xl font-serif font-bold mb-2">36-129</p>
                  <p className="font-medium uppercase tracking-wider text-sm">Kvadrat metr</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Advantages */}
        <section id="advantages" className="py-24 px-6 bg-white/20 backdrop-blur-md">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4 text-[#450000]">Loyiha Afzalliklari</h2>
              <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "1000 o'rinlik Xalqaro maktab",
                "Xususiy bog'cha",
                "Bolalar maydonchasi",
                "Elektron IT ga ixtisoslashgan kutubxona",
                "Kichik banketniy mehmonxona",
                "1-qavat oziq-ovqat va savdo do'konlari",
                "Erkaklar va ayollar uchun alohida katta liftlar (1.5t, 15 kishi)",
                "Quyosh panellari va generatorlar",
                "24/7 qo'riqlanadigan hudud",
                "Yer osti va yer usti avtoturargoh",
                "Xitoydan keltirilgan keramik pishiq g'ishtli fasad",
                "Panorama oynalar",
                "Kengligi 3 metrdan boshlanadigan balkonlar"
              ].map((adv, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm flex items-start gap-4 hover:bg-white/80 transition-colors group">
                  <div className="mt-1 bg-white p-2 rounded-full shadow-sm group-hover:bg-[var(--color-gold)] transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] group-hover:text-white" />
                  </div>
                  <p className="text-[#450000] font-medium leading-snug">{adv}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Location & 6. Construction & 7. Gallery */}
        <section className="py-24 px-6 bg-white/40 backdrop-blur-lg border-y border-white/50">
          <div className="max-w-7xl mx-auto space-y-32">
            
            {/* Location */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold mb-4 text-[#450000]">Lokatsiya va Gen Plan</h2>
                <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto" />
                <p className="mt-6 text-[#450000]/80 max-w-2xl mx-auto">301 gektarlik shaharcha gen plani va atrofdagi qulay infratuzilma.</p>
              </div>
              <div className="aspect-video bg-white/50 rounded-3xl overflow-hidden relative border-4 border-white/60 shadow-lg">
                <img src="https://cdn.yangiuylar.uz/uploads/2025/07/07/09/29/tg_image_4017487430-1751869787074-237723779_normal.webp" alt="Map" className="w-full h-full object-cover opacity-90" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center bg-[#450000]/20 backdrop-blur-[2px]">
                  <button className="bg-white text-[#450000] px-8 py-4 rounded-full font-semibold shadow-xl flex items-center gap-2 hover:bg-[var(--color-gold)] hover:text-white transition-all">
                    <MapPin /> Xaritada ko'rish
                  </button>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold mb-4 text-[#450000]">Galereya va Qurilish jarayoni</h2>
                <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjpwtTXiJGfVHIeYDvdW0ay7O--4vp3oQVQA&s",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrtACSEsAb7PBctBfKzAtoBkK-n2PoUaUj4w&s",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3veMmxroTu-sfXWQWF9I-t6Y5IPqOmTUtg&s",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBneVgw76d5IA9-Pq-c7QLleTYl5wGDlS_Xg&s",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDvcGZKditfKHlafQzEs0w97HKrk9s9LmtQ&s",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOgd101VAoxRNi69Zyy8khP2OWbZGLNNNkhQ&s"
                ].map((src, i) => (
                  <div key={i} className="aspect-square rounded-2xl overflow-hidden group relative border-2 border-white/50 shadow-sm">
                    <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-[#450000]/0 group-hover:bg-[#450000]/20 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 8. FAQ */}
        <section id="faq" className="py-24 px-6 bg-white/20 backdrop-blur-md">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4 text-[#450000]">Ko'p beriladigan savollar</h2>
              <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto" />
            </div>
            
            <div className="space-y-4">
              <FaqItem 
                question="Uylar pishiq g'ishtdanmi?" 
                answer="Majmua gazoblok va monolitdan quriladi. Bino tashqi fasadi Xitoydan maxsus buyurtma asosida keltirilgan qizil keramik pishiq g'isht bilan qoplanadi." 
              />
              <FaqItem 
                question="Uylar qachon foydalanishga topshiriladi?" 
                answer="Majmua 2028-yil, 4-choragida topshiriladi." 
              />
              <FaqItem 
                question="Gaz bo'ladimi?" 
                answer="2025-yildan boshlab quriladigan uylarga prezident qaroriga muvofiq gaz berilmaydi, xattoki iste'mol uchun ham. Uylar elektrlashgan bo'ladi. Isitish tizimi esa, markaziy qozonxona bo'ladi." 
              />
            </div>
          </div>
        </section>

        {/* 9. Contact (Dark Section with White Text) */}
        <section id="contact" className="py-24 px-6 bg-[#450000] text-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-white">Biz bilan bog'laning</h2>
              <div className="w-20 h-1 bg-[var(--color-gold)] mb-10" />
              <p className="text-white/80 mb-12 text-lg font-light">
                Savollaringiz bormi? Bizga qo'ng'iroq qiling yoki xabar qoldiring. Mutaxassislarimiz sizga tez orada aloqaga chiqishadi.
              </p>
              
              <div className="space-y-6">
                <a href="tel:+998781136117" className="flex items-center gap-5 text-xl hover:text-[var(--color-gold)] transition-colors">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20"><Phone className="text-[var(--color-gold)]" /></div>
                  +998 78 113-61-17
                </a>
                <a href="https://t.me/elite_buildings" target="_blank" rel="noreferrer" className="flex items-center gap-5 text-xl hover:text-[var(--color-gold)] transition-colors">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20"><Send className="text-[var(--color-gold)]" /></div>
                  Telegram Kanal
                </a>
                <a href="https://t.me/Orifon_admin" target="_blank" rel="noreferrer" className="flex items-center gap-5 text-xl hover:text-[var(--color-gold)] transition-colors">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20"><Send className="text-[var(--color-gold)]" /></div>
                  Telegram Admin
                </a>
                <a href="https://www.instagram.com/orifon.tjm/" target="_blank" rel="noreferrer" className="flex items-center gap-5 text-xl hover:text-[var(--color-gold)] transition-colors">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20"><Instagram className="text-[var(--color-gold)]" /></div>
                  Instagram
                </a>
                <a href="https://www.youtube.com/@Orifon_EliteBuilding" target="_blank" rel="noreferrer" className="flex items-center gap-5 text-xl hover:text-[var(--color-gold)] transition-colors">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20"><Youtube className="text-[var(--color-gold)]" /></div>
                  YouTube
                </a>
              </div>
            </div>
            
            <RegistrationForm title="Xabar qoldirish" showLabels={true} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2a0000] text-white/60 py-8 text-center border-t border-white/10">
        <p>© 2026 Elite Building. Barcha huquqlar himoyalangan.</p>
      </footer>
    </div>
  );
}

function StatCard({ number, text }: { number: string, text: string }) {
  return (
    <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm">
      <div className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-gold)] mb-3">{number}</div>
      <div className="text-sm text-[#450000] font-medium leading-snug">{text}</div>
    </div>
  );
}

function ProjectDetail({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) {
  return (
    <li className="flex items-start gap-5">
      <div className="mt-1 text-[var(--color-gold)] bg-white/10 p-2.5 rounded-xl border border-white/10">{icon}</div>
      <div>
        <p className="text-sm text-white/60 uppercase tracking-wider mb-1 font-medium">{title}</p>
        <p className="text-xl font-semibold text-white">{value}</p>
      </div>
    </li>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl overflow-hidden shadow-sm">
      <button 
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-serif font-bold text-lg text-[#450000] pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[var(--color-gold)] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-[#450000]/80 leading-relaxed border-t border-white/50 pt-4">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}
