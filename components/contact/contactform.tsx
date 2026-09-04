import React from 'react';

export default function ContactForm() {
  return (
    <section className="py-16 px-6 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="text-3xl font-bold mt-2">Contact Our Team</h2>
          <p className="text-slate-600 mt-2">
            Have questions or want to start a project? Send us a message below.
          </p>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="space-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm"
        >
          {/* Required hidden input for Netlify form detection */}
          <input type="hidden" name="form-name" value="contact" />

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              required
              placeholder="Project Inquiry"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Message
            </label>
            <textarea
              rows={5}
              name="message"
              required
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}