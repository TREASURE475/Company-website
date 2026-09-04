import React from 'react';

export default function TestimonialSection() {
  return (
    <section className="py-16 px-6 bg-slate-50 border-t border-slate-200 text-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-700 italic text-lg leading-relaxed mb-6">
            "Working with this team transformed our online presence. The layout is clean, lightning fast, and has made receiving client inquiries effortless."
          </p>
          <div>
            <p className="font-semibold text-emerald-600">Alex Morgan</p>
            <p className="text-xs text-slate-500">Director at TechCorp</p>
          </div>
        </div>
      </div>
    </section>
  );
}