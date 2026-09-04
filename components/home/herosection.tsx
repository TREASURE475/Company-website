import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-slate-900 text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <span className="text-emerald-400 font-semibold tracking-wide uppercase text-sm">
          Welcome to Our Platform
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
          Modern Solutions for Growing Businesses
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
          We craft high-performance websites and digital tools designed to elevate your brand and scale your operations seamlessly.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/contact"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
          >
            Get Started
          </a>
          <a
            href="/about"
            className="border border-slate-600 hover:border-slate-400 text-slate-200 font-semibold py-3 px-8 rounded-lg transition duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}