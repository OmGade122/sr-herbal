"use client";

import FadeIn from "@/components/FadeIn";
import FAQAccordion from "@/components/FAQAccordion";
import Stars from "@/components/Stars";
import SectionTag from "@/components/SectionTag";
import Footer from "@/components/Footer";
import { BENEFITS, WHY_US, TESTIMONIALS, FAQS } from "@/lib/data";
import Link from "next/link";
import React from "react";
import Image from "next/image";



 
  export default function HomePage() {
  const previewFaqs = FAQS.slice(0, 4);

  return (
    <>
      {/* ── HERO ── */}
      <section className="min-h-screen bg-gradient-to-br from-[#0d2818] via-[#1a4a2e] to-[#1e5c38] relative overflow-hidden flex items-center">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating leaves */}
        <div className="absolute inset-0 pointer-events-none select-none">
          {([
            { top: "15%", left: "5%", delay: "0s", size: "3rem" },
            { top: "60%", left: "8%", delay: "2s", size: "2rem" },
            { top: "25%", right: "6%", delay: "4s", size: "4rem" },
            { bottom: "20%", right: "10%", delay: "1s", size: "2.5rem" },
            { top: "45%", left: "50%", delay: "3s", size: "1.5rem" },
          ]).map((leaf, i) => (
            <span
              key={i}
              className="absolute opacity-[0.06] animate-float-leaf"
              style={{
                top: leaf.top,
                left: leaf.left,
                right: leaf.right,
                bottom: leaf.bottom,
                fontSize: leaf.size,
                animationDelay: leaf.delay,
              }}
            >
              {i % 2 === 0 ? "🍃" : "🌿"}
            </span>
          ))}
        </div>

        {/* Radial glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10">
          {/* Left: Copy */}
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/15 border border-[#c9a84c]/30 text-[#e8c97a] px-[18px] py-2 rounded-full text-[0.8rem] font-medium tracking-widest uppercase mb-6">
              🌿 India's Premium Herbal Brand
            </div>
            <h1 className="font-display text-[clamp(2.8rem,5vw,4.5rem)] font-bold text-white leading-[1.1] mb-5">
              100% Natural<br />
              <span className="text-[#e8c97a] italic">Guava Leaf Tea</span>
            </h1>
            <p className="text-white/72 text-lg leading-relaxed mb-9 max-w-xl">
              Discover the ancient healing power of Guava leaves — crafted into a premium herbal
              tea that supports your wellness journey, naturally and gently.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
  href="/Product"
  className="bg-[#c9a84c] text-[#0d2818] px-9 py-4 rounded-full font-semibold text-base hover:bg-[#e8c97a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,168,76,0.35)] transition-all"
>
  🛒 Buy Now
</Link>
              <Link
                href="/about"
                className="bg-transparent text-white border border-white/35 px-9 py-4 rounded-full font-medium text-base hover:border-white/70 hover:bg-white/7 transition-all"
              >
                Learn More
              </Link>
            </div>
            <div className="flex flex-wrap gap-8 pt-9 border-t border-white/12">
              {([
                { num: "5K+", label: "Happy Customers" },
                { num: "100%", label: "Natural" },
                { num: "0", label: "Chemicals" },
              ]).map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-[2rem] font-bold text-[#e8c97a]">{s.num}</div>
                  <div className="text-[0.75rem] text-white/55 tracking-widest uppercase mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: Product card */}
          <FadeIn delay={0.15} direction="right">
            <div className="relative max-w-[420px] mx-auto">
              {/* Glow */}
              <div
                className="absolute top-1/2 left-1/2 w-[340px] h-[340px] rounded-full pointer-events-none animate-pulse-glow"
                style={{
                  background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)",
                }}
              />
              {/* Card */}
              <div className="relative bg-white/[0.06] border border-[#c9a84c]/20 rounded-3xl p-10 text-center backdrop-blur-md overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
                  }}
                />
<div className="mb-5 flex justify-center">
  <Image
  src="/product.jpeg"
  alt="Guava Leaf Tea"
  width={250}
  height={250}
  className="mx-auto object-contain"
/>
</div>                <div className="font-display text-[1.6rem] font-semibold text-white mb-2">
                  Guava Leaf Tea
                </div>
                <div className="inline-block bg-[#c9a84c]/20 border border-[#c9a84c]/40 text-[#e8c97a] px-4 py-1 rounded-full text-[0.78rem] tracking-widest uppercase mb-5">
                  Peru Leaf Tea · 50g
                </div>
                <div className="font-display text-[2.4rem] font-bold text-[#e8c97a]">
                  ₹350{" "}
                  <span className="text-base font-normal text-white/50 font-body line-through">₹449</span>
                </div>
                <div className="mt-3 text-[0.8rem] text-[#e8c97a] bg-[#c9a84c]/10 rounded-full px-3 py-1 inline-block">
                  🏷️ 33% OFF · Limited Time
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <SectionTag>✨ Product Benefits</SectionTag>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-[#0d2818] leading-tight mb-4">
              Why{" "}
              <span className="text-[#c9a84c]">Guava Leaf Tea?</span>
            </h2>
            <p className="text-[#5a7a65] text-base leading-relaxed max-w-xl mx-auto">
              Packed with nature's finest compounds — every cup brings you one step closer to
              holistic wellness.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {BENEFITS.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.08}>
                <div className="benefit-card group bg-[#faf7f0] border border-[#c8e6d4] rounded-2xl p-8 text-center relative overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(13,40,24,0.12)] hover:border-[#2d7a4f] transition-all duration-300 h-full">
                  <span className="text-[2.8rem] mb-4 block">{b.icon}</span>
                  <h3 className="font-display text-[1.25rem] font-semibold text-[#0d2818] mb-2">
                    {b.title}
                  </h3>
                  <p className="text-[0.875rem] text-[#5a7a65] leading-relaxed">{b.desc}</p>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                    style={{
                      background: "linear-gradient(90deg, #2d7a4f, #c9a84c)",
                    }}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-[#faf7f0] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <SectionTag>🏆 Why Choose Us</SectionTag>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-[#0d2818] leading-tight mb-4">
              The <span className="text-[#c9a84c]">SR Herbal</span> Difference
            </h2>
            <p className="text-[#5a7a65] text-base leading-relaxed max-w-xl mx-auto">
              We don't just make tea — we craft a wellness experience built on trust, quality,
              and nature's wisdom.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY_US.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white border border-[#c8e6d4] rounded-2xl p-9 relative overflow-hidden hover:shadow-[0_8px_32px_rgba(13,40,24,0.12)] hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="font-display text-[4rem] font-bold text-[#e8f5ee] absolute top-4 right-5 leading-none select-none">
                    {item.num}
                  </div>
                  <div className="text-[2rem] mb-4">{item.icon}</div>
                  <h3 className="font-display text-[1.3rem] font-semibold text-[#0d2818] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[0.9rem] text-[#5a7a65] leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#e8f5ee] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <SectionTag>💬 Customer Stories</SectionTag>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-[#0d2818] leading-tight">
              What Our <span className="text-[#c9a84c]">Customers Say</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="bg-white border border-[#c8e6d4] rounded-2xl p-8 hover:shadow-[0_8px_32px_rgba(13,40,24,0.10)] transition-all duration-300 h-full flex flex-col">
                  <div className="font-display text-[4rem] text-[#c8e6d4] leading-[0.8] mb-4">"</div>
                  <Stars rating={t.rating} className="mb-4" />
                  <p className="text-[0.95rem] text-[#2a4a35] leading-[1.7] mb-6 italic flex-1">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2d7a4f] to-[#0d2818] flex items-center justify-center text-white font-semibold text-base flex-shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-[#0d2818] text-[0.9rem]">{t.name}</div>
                      <div className="text-[0.8rem] text-[#5a7a65]">{t.location}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ PREVIEW ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-12">
            <SectionTag>❓ Quick Answers</SectionTag>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-[#0d2818] leading-tight">
              Frequently Asked <span className="text-[#c9a84c]">Questions</span>
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="max-w-[760px] mx-auto">
              <FAQAccordion faqs={previewFaqs} />
            </div>
          </FadeIn>

          <div className="text-center mt-9">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#0d2818] px-9 py-4 rounded-full font-semibold text-base hover:bg-[#e8c97a] hover:-translate-y-0.5 transition-all"
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-gradient-to-br from-[#0d2818] to-[#1a4a2e] py-20 px-6 text-center">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <div className="text-[4rem] mb-4">🫖</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-4">
              Start Your <span className="text-[#e8c97a] italic">Wellness Journey</span> Today
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-8">
              Join thousands of happy customers who've transformed their health with SR Herbal's
              premium Guava Leaf Tea.
            </p>
            <Link
              href="/product"
              className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#0d2818] px-10 py-4 rounded-full font-bold text-base hover:bg-[#e8c97a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,168,76,0.4)] transition-all"
            >
              🛒 Buy Now — ₹350
            </Link>
          </div>
        </FadeIn>
      </section>

           <Footer />
    </>
  );
}

