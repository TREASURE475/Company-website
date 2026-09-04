import React from 'react';

export default function FeatureSection() {
  const features = [
    {
      title: "Fast Performance",
      desc: "Optimized architecture ensuring high-speed load times and smooth user interaction.",
      icon: "⚡",
    },
    {
      title: "Responsive Design",
      desc: "Fully tailored layouts that look exceptional across desktop, tablet, and mobile displays.",
      icon: "📱",
    },
    {
      title: "Reliable Support",
      desc: "Dedicated ongoing technical assistance and strategic maintenance whenever needed.",
      icon: "🛠️",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3">Our Core Features</h2>
        <p className="text-slate-600 max-w-xl mx-auto mb-12">
          Everything you need to showcase your service and connect effectively with your clients.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm text-left"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}