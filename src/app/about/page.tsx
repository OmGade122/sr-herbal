import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionTag from "@/components/SectionTag";
import Footer from "@/components/Footer";
import { ABOUT_VALUES } from "@/lib/data";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d2818] via-[#1a4a2e] to-[#1e5c38] pt-28 pb-20 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <FadeIn>
            <span className="inline-block bg-[#e8f5ee] text-[#2d7a4f] border border-[#c8e6d4] px-[18px] py-[6px] rounded-full text-[0.78rem] font-semibold tracking-widest uppercase mb-5">
              🌿 Our Story
            </span>
            <h1 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-bold text-white leading-tight mb-4">
              About SR Herbal Products
            </h1>
            <p className="text-white/65 text-base leading-relaxed">
              Rooted in India's ancient herbal wisdom, grown with passion for your wellness.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission section */}
      <section className="py-20 px-6 bg-[#faf7f0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Text */}
            <FadeIn direction="left">
              <SectionTag>🌱 Our Mission</SectionTag>
              <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-bold text-[#0d2818] leading-tight mb-6">
                Bringing{" "}
                <span className="text-[#c9a84c]">Nature's Healing</span> to Every Home
              </h2>
              <p className="text-[#5a7a65] text-[1rem] leading-[1.8] mb-5">
                SR Herbal Products was founded with a simple but powerful belief: the best medicine
                grows in nature. We set out to make India's rich tradition of herbal wellness
                accessible, trustworthy, and effective for modern families.
              </p>
              <p className="text-[#5a7a65] text-[1rem] leading-[1.8] mb-5">
                Our flagship product — Guava Leaf Tea — is born from the ancient knowledge that
                guava leaves hold remarkable healing properties. We've dedicated ourselves to
                bringing this treasure to your cup in its purest, most potent form.
              </p>
              <p className="text-[#5a7a65] text-[1rem] leading-[1.8]">
                Every packet you receive represents our commitment: zero compromises on quality,
                zero chemicals, and zero shortcuts. Just pure, honest herbal goodness.
              </p>
            </FadeIn>

            {/* Visual */}
            <FadeIn direction="right" delay={0.1}>
              <div className="bg-[#e8f5ee] border-2 border-[#c8e6d4] rounded-3xl p-10 text-center">
                 <Image
                 src="/info.jpeg"
                  alt="Farm to Cup"
                  width={380}
                  height={300}
                   className="mx-auto mb-6 rounded-2xl object-cover"
                    />

                       <div className="font-display text-[1.4rem] font-semibold text-[#0d2818] mb-2">
                       Farm to Cup
                      </div>

                     <p className="text-[0.9rem] text-[#5a7a65]">
                       Pure · Natural · Trusted
                       </p>

                  <div className="mt-6 flex justify-center gap-4">
                        {["🌱", "☀️", "🫖", "💚"].map((icon, i) => (
                     <div
                      key={i}
                    className="w-12 h-12 bg-white border border-[#c8e6d4] rounded-full flex items-center justify-center text-xl shadow-sm"
                       >
                    {icon}
                   </div>
                   ))}
                 </div>
              </div>
            </FadeIn>
          </div>

          {/* Stats */}
          <FadeIn>
            <div className="bg-[#0d2818] rounded-3xl p-10 mb-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { num: "5,000+", label: "Happy Customers" },
                { num: "100%", label: "Natural Ingredients" },
                { num: "0", label: "Chemicals Used" },
                { num: "2+", label: "Years of Trust" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-[2.2rem] font-bold text-[#e8c97a] mb-1">
                    {s.num}
                  </div>
                  <div className="text-[0.8rem] text-white/55 tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Values */}
          <FadeIn className="text-center mb-12">
            <SectionTag>🏅 Our Values</SectionTag>
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-bold text-[#0d2818] leading-tight">
              What We <span className="text-[#c9a84c]">Stand For</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_VALUES.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="bg-white border border-[#c8e6d4] border-t-4 border-t-[#2d7a4f] rounded-2xl p-8 text-center hover:shadow-[0_8px_32px_rgba(13,40,24,0.10)] hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="text-[2rem] mb-3">{v.icon}</div>
                  <h3 className="font-display text-[1.15rem] font-semibold text-[#0d2818] mb-2">
                    {v.title}
                  </h3>
                  <p className="text-[0.875rem] text-[#5a7a65] leading-relaxed">{v.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team/CTA */}
      <section className="bg-[#e8f5ee] py-20 px-6 text-center">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <div className="text-[3.5rem] mb-4">🤝</div>
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-[#0d2818] mb-4">
              Join Our Wellness Community
            </h2>
            <p className="text-[#5a7a65] text-base leading-relaxed mb-8">
              Be part of thousands of Indians who've chosen natural wellness over synthetic
              alternatives. Your journey to better health starts with one cup.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/product"
                className="bg-[#0d2818] text-white px-9 py-4 rounded-full font-semibold hover:bg-[#2d7a4f] hover:-translate-y-0.5 transition-all"
              >
                🛒 Shop Now
              </Link>
              <Link
                href="/contact"
                className="bg-white text-[#0d2818] border border-[#c8e6d4] px-9 py-4 rounded-full font-medium hover:border-[#2d7a4f] hover:-translate-y-0.5 transition-all"
              >
                📬 Contact Us
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}
