import React from 'react';

export default function ServiceSection() {
  const services = [
    {
      title: "Web Development",
      description: "Custom, responsive, and high-performance websites built using Next.js and Tailwind CSS.",
      icon: "💻",
    },
    {
      title: "UI/UX Design",
      description: "Clean, modern, and user-friendly interface designs tailored for maximum user engagement.",
      icon: "🎨",
    },
    {
      title: "Digital Marketing",
      description: "Strategic campaigns and search engine optimization (SEO) to increase your online presence.",
      icon: "📈",
    },
    {
      title: "Consulting & Support",
      description: "Ongoing technical maintenance, performance optimization, and IT consultation for your business.",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">
          What We Offer
        </span>
        <h2 className="text-3xl font-bold mt-2 mb-4">Our Professional Services</h2>
        <p className="text-slate-600 max-w-xl mx-auto mb-12">
          We provide end-to-end digital solutions designed to help your business scale efficiently.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm text-left hover:border-emerald-500 transition duration-200"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}