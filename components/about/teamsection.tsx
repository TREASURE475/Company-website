import React from 'react';

export default function TeamSection() {
  const team = [
    { name: "John Doe", role: "CEO & Founder" },
    { name: "Sarah Lee", role: "Head of Design" },
    { name: "Emily Rodriguez", role: "Project Manager" },
    { name: "Michael Chen", role: "Lead Developer" },
  ];

  return (
    <section className="py-16 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-3">Meet Our Team</h2>
        <p className="text-slate-600 max-w-xl mx-auto mb-12">
          Dedicated professionals bringing expertise, strategy, and technological innovation to your project.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-slate-200 rounded-full mb-4 flex items-center justify-center text-slate-400 font-semibold text-lg">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="font-semibold text-slate-900">{member.name}</h3>
              <p className="text-xs text-slate-500 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}