import React from "react";

export default function MissionSection() {
  return (
    <section className="py-16 px-6 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">
            Who We Are
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4">
            Empowering Solutions for Your Business
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            We deliver innovative strategies and technical execution to drive sustained business growth and digital transformation.
          </p>
          <ul className="space-y-3">
            {[
              "Tailored strategic consulting",
              "End-to-end web & product development",
              "Continuous deployment & technical optimization",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3 text-slate-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 shadow-sm text-center">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-3xl font-bold text-emerald-600">500+</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Successful Projects</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-3xl font-bold text-emerald-600">100+</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Industry Experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}