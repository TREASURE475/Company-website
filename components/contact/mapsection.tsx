import React from 'react';

export default function MapSection() {
  return (
    <section className="py-16 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-emerald-600 font-bold text-lg mb-2">📍 Address</div>
          <p className="text-slate-600 text-sm">123 Business Street, Tech Suite 400</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-emerald-600 font-bold text-lg mb-2">📞 Phone</div>
          <a href="tel:674460464" className="text-slate-600 text-sm hover:text-emerald-600">
            674460464
          </a>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-emerald-600 font-bold text-lg mb-2">✉️ Email</div>
          <a href="mailto:tenugeddy8@gmail.com" className="text-slate-600 text-sm hover:text-emerald-600">
            tenugeddy8@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}