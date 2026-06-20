import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionTag from "@/components/SectionTag";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import { FAQS } from "@/lib/data";

export default function FAQPage() {
  return (
    <>
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
              ❓ Help Center
            </span>
            <h1 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-bold text-white mb-3">
              Frequently Asked Questions
            </h1>
            <p className="text-white/65 text-base max-w-xl mx-auto leading-relaxed">
              Everything you need to know about Guava Leaf Tea and SR Herbal Products.
              Can't find your answer?{" "}
              <Link href="/contact" className="text-[#e8c97a] underline underline-offset-2 hover:text-[#c9a84c]">
                Contact us
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 px-6 bg-[#faf7f0]">
        <div className="max-w-3xl mx-auto">

          {/* Quick category tabs */}
          <FadeIn className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {["All", "Health & Benefits", "Usage", "Ordering", "Safety"].map((cat) => (
                <button
                  key={cat}
                  className="bg-white border border-[#c8e6d4] text-[#2a4a35] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#e8f5ee] hover:border-[#2d7a4f] transition-all first:bg-[#0d2818] first:text-white first:border-[#0d2818]"
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Main FAQ accordion */}
          <FadeIn>
            <FAQAccordion faqs={FAQS} />
          </FadeIn>

          {/* Still have questions CTA */}
          <FadeIn delay={0.1}>
            <div className="mt-14 bg-[#0d2818] rounded-3xl p-12 text-center">
              <div className="text-[3rem] mb-4">🤔</div>
              <h3 className="font-display text-[1.8rem] font-semibold text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-7 max-w-sm mx-auto">
                Our friendly team is ready to help. We typically respond within 24 hours on
                business days.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-[#c9a84c] text-[#0d2818] px-8 py-3.5 rounded-full font-semibold hover:bg-[#e8c97a] hover:-translate-y-0.5 transition-all"
                >
                  📬 Send a Message
                </Link>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25d366] text-white px-8 py-3.5 rounded-full font-semibold hover:-translate-y-0.5 transition-all"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick facts strip */}
      <section className="bg-[#e8f5ee] py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: "🚚", title: "Free Delivery", desc: "On orders above ₹499" },
                { icon: "↩️", title: "7-Day Returns", desc: "Hassle-free returns" },
                { icon: "💳", title: "COD Available", desc: "Cash on delivery" },
                { icon: "🔒", title: "Secure Checkout", desc: "100% safe payments" },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-[#c8e6d4] rounded-2xl p-6">
                  <div className="text-[2rem] mb-2">{item.icon}</div>
                  <div className="font-semibold text-[#0d2818] text-sm mb-1">{item.title}</div>
                  <div className="text-[0.8rem] text-[#5a7a65]">{item.desc}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
