"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import { CONTACT_INFO } from "@/lib/data";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.name || !form.email) {
    setToast("⚠️ Please fill in your name and email.");
    setTimeout(() => setToast(""), 3000);
    return;
  }

  const whatsappNumber = "7972318618";

  const text = `
🌿 New Contact Message

👤 Name: ${form.name}
📧 Email: ${form.email}
📱 Phone: ${form.phone}
📌 Subject: ${form.subject}

💬 Message:
${form.message}
`;

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(whatsappUrl, "_blank");

  setSubmitted(true);
};

  const inputClass =
    "w-full px-4 py-3 border-[1.5px] border-[#c8e6d4] rounded-lg font-body text-[0.95rem] text-[#0d1a12] bg-[#faf7f0] focus:outline-none focus:border-[#2d7a4f] transition-colors";

  return (
    <>
      {/* Toast */}
      {toast && (
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="fixed top-24 right-6 z-50 bg-[#0d2818] text-white px-6 py-4 rounded-xl text-sm font-medium border-l-4 border-[#c9a84c] shadow-2xl"
        >
          {toast}
        </motion.div>
      )}

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d2818] via-[#1a4a2e] to-[#1e5c38] pt-28 pb-16 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10">
          <FadeIn>
            <span className="inline-block bg-[#e8f5ee] text-[#2d7a4f] border border-[#c8e6d4] px-[18px] py-[6px] rounded-full text-[0.78rem] font-semibold tracking-widest uppercase mb-5">
              📬 Get In Touch
            </span>
            <h1 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-bold text-white mb-3">
              Contact Us
            </h1>
            <p className="text-white/65 text-base max-w-lg mx-auto leading-relaxed">
              We'd love to hear from you. Reach out for orders, queries, or just to say hello!
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 px-6 bg-[#faf7f0]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

            {/* Info panel */}
            <FadeIn direction="left" className="lg:col-span-2">
              <div className="bg-[#0d2818] rounded-3xl p-10 text-white h-full">
                <h2 className="font-display text-[1.8rem] font-semibold text-white mb-2">
                  SR Herbal Products
                </h2>
                <p className="text-white/55 text-sm leading-relaxed mb-8">
                  Bringing nature's wellness to your doorstep. We're here to help you on your
                  herbal journey.
                </p>

                <div className="space-y-6">
                  {CONTACT_INFO.map((item) => (
                    <div key={item.label} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/15 border border-[#c9a84c]/25 flex items-center justify-center text-xl flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-[0.75rem] text-white/45 tracking-widest uppercase mb-1">
                          {item.label}
                        </div>
                        <div className="text-[0.95rem] text-white font-medium">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <div className="text-[0.75rem] text-white/40 tracking-widest uppercase mb-4">
                    Quick Connect
                  </div>
                  <a
                    href="https://wa.me/7972318618"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#25d366] text-white px-5 py-3 rounded-xl font-semibold text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all"
                  >
                    💬 Chat on WhatsApp
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn direction="right" delay={0.1} className="lg:col-span-3">
              <div className="bg-white border border-[#c8e6d4] rounded-3xl p-10">
                <h3 className="font-display text-[1.6rem] font-semibold text-[#0d2818] mb-7">
                  Send us a Message
                </h3>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-[4rem] mb-4">✅</div>
                    <h4 className="font-display text-[1.5rem] font-semibold text-[#0d2818] mb-3">
                      Message Sent!
                    </h4>
                    <p className="text-[#5a7a65] text-sm leading-relaxed mb-6">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                      className="bg-[#0d2818] text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-[#2d7a4f] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[0.8rem] font-semibold text-[#2a4a35] tracking-widest uppercase mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[0.8rem] font-semibold text-[#2a4a35] tracking-widest uppercase mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[0.8rem] font-semibold text-[#2a4a35] tracking-widest uppercase mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 00000 00000"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-[0.8rem] font-semibold text-[#2a4a35] tracking-widest uppercase mb-2">
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select a topic</option>
                          <option>Product Enquiry</option>
                          <option>Order Status</option>
                          <option>Bulk Order</option>
                          <option>Return / Refund</option>
                          <option>General Question</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[0.8rem] font-semibold text-[#2a4a35] tracking-widest uppercase mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us how we can help you..."
                        className={inputClass}
                        style={{ resize: "vertical" }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#0d2818] text-white py-4 rounded-xl font-semibold text-base hover:bg-[#2d7a4f] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(13,40,24,0.2)] transition-all"
                    >
                      Send Message ✉️
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Map / address strip */}
          <FadeIn delay={0.1}>
            <div className="mt-14 bg-[#e8f5ee] border border-[#c8e6d4] rounded-3xl p-10 text-center">
              <div className="text-[3rem] mb-4">📍</div>
              <h3 className="font-display text-[1.4rem] font-semibold text-[#0d2818] mb-2">
                We Ship Pan India
              </h3>
              <p className="text-[#5a7a65] text-sm leading-relaxed max-w-md mx-auto mb-6">
                Delivering SR Herbal's Guava Leaf Tea to every corner of India. Order today and
                receive your package in 3–7 business days.
              </p>
              <div className="flex flex-wrap gap-6 justify-center text-center">
                {[
                  { icon: "🚀", label: "Express Shipping", desc: "1–3 days" },
                  { icon: "📦", label: "Standard Delivery", desc: "3–7 days" },
                  { icon: "💰", label: "Free Shipping", desc: "Above ₹499" },
                  { icon: "🔄", label: "COD Available", desc: "Pan India" },
                ].map((s) => (
                  <div key={s.label} className="bg-white border border-[#c8e6d4] rounded-2xl px-6 py-4 min-w-[130px]">
                    <div className="text-[1.5rem] mb-1">{s.icon}</div>
                    <div className="font-semibold text-[#0d2818] text-sm">{s.label}</div>
                    <div className="text-[0.78rem] text-[#5a7a65]">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
