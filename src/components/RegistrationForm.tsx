import React, { useState } from "react";

export default function RegistrationForm({ title, className, showLabels = false }: { title?: string, className?: string, showLabels?: boolean }) {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className={`bg-white/50 backdrop-blur-xl p-8 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${className}`}>
      {title && <h3 className="text-xl font-serif mb-6 text-[#450000] font-bold">{title}</h3>}
      {status === "success" ? (
        <div className="text-center py-8 text-[#450000]">
          <p className="font-bold text-lg">Rahmat! So'rovingiz qabul qilindi.</p>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            {showLabels && <label className="block text-sm font-semibold text-[#450000]/80 mb-2">Ismingiz</label>}
            <input 
              type="text" 
              placeholder="Ismingiz" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-white/70 border border-white/50 rounded-xl px-4 py-3.5 text-[#450000] placeholder:text-[#450000]/50 focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] transition-all shadow-sm" 
            />
          </div>
          <div>
            {showLabels && <label className="block text-sm font-semibold text-[#450000]/80 mb-2">Telefon raqamingiz</label>}
            <input 
              type="tel" 
              placeholder="Telefon raqamingiz" 
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-white/70 border border-white/50 rounded-xl px-4 py-3.5 text-[#450000] placeholder:text-[#450000]/50 focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] transition-all shadow-sm" 
            />
          </div>
          <button 
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-[#450000] text-white font-semibold py-3.5 rounded-xl hover:bg-[#5a0000] transition-colors shadow-md mt-2 disabled:opacity-50"
          >
            {status === "submitting" ? "Yuborilmoqda..." : "Yuborish"}
          </button>
          {status === "error" && <p className="text-red-500 text-sm text-center">Xatolik yuz berdi. Qayta urinib ko'ring.</p>}
        </form>
      )}
    </div>
  );
}
