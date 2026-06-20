"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import Stars from "@/components/Stars";
import Footer from "@/components/Footer";
import { PRODUCT, REVIEWS } from "@/lib/data";
import { useRouter } from "next/navigation";
import Image from "next/image";

const galleryItems = [
  { image: "/front.jpeg", label: "Front View" },
  { image: "/leaves.jpeg", label: "Leaves" },
  { image: "/brewed.jpeg", label: "Brewed" },
];
export default function ProductPage() {
  const router = useRouter(); // 👈 YE LINE ADD KARO

  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [cartMsg, setCartMsg] = useState("");

  const notify = (msg: string) => {
    setCartMsg(msg);
    setTimeout(() => setCartMsg(""), 3000);
  };

  return (
    <>
      {/* Toast */}
      {cartMsg && (
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 200, opacity: 0 }}
          className="fixed top-24 right-6 z-50 bg-[#0d2818] text-white px-6 py-4 rounded-xl text-sm font-medium border-l-4 border-[#c9a84c] shadow-2xl"
        >
          {cartMsg}
        </motion.div>
      )}

      {/* Page hero */}
      <section className="bg-gradient-to-br from-[#0d2818] to-[#1a4a2e] pt-28 pb-12 px-6 text-center">
        <div className="inline-block bg-[#e8f5ee] text-[#2d7a4f] border border-[#c8e6d4] px-[18px] py-[6px] rounded-full text-[0.78rem] font-semibold tracking-widest uppercase mb-4">
          🌿 Herbal Wellness
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
          Guava Leaf Tea
        </h1>
        <p className="text-white/65 text-base">Peru Leaf Tea · Premium Herbal Wellness · 50g Pack</p>
      </section>

      {/* Main content */}
      <section className="py-16 px-6 bg-[#faf7f0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* ── Gallery ── */}
            <FadeIn direction="left">
              <div>
                {/* Main image */}
                <div className="relative bg-[#e8f5ee] border-2 border-[#c8e6d4] rounded-3xl p-16 text-center mb-4 overflow-hidden">
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: "linear-gradient(90deg, #2d7a4f, #c9a84c)" }}
                  />
                  <Image
                  src={galleryItems[activeImg].image}
                 alt={galleryItems[activeImg].label}
                 width={300}
                  height={300}
                  className="mx-auto rounded-xl object-contain"
/>
                  <p className="text-[0.8rem] text-[#5a7a65] tracking-wide mt-4">{galleryItems[activeImg].label}</p>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {galleryItems.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`bg-[#e8f5ee] rounded-xl p-5 text-center text-[2.8rem] transition-all border-[1.5px] ${
                        activeImg === i
                          ? "border-[#2d7a4f] bg-[#c8e6d4]"
                          : "border-[#c8e6d4] hover:border-[#2d7a4f]"
                      }`}
                    >
                      <Image
                      src={item.image}
                      alt={item.label}
                      width={70}
                      height={70}
                      className="mx-auto rounded-lg object-contain"
/>
                    </button>
                  ))}
                </div>

                {/* Brewing instructions */}
                <div className="bg-[#e8f5ee] border-[1.5px] border-[#c8e6d4] rounded-2xl p-7">
                  <h3 className="font-display text-lg font-semibold text-[#0d2818] mb-5">
                    🌡️ Brewing Instructions
                  </h3>
                  <div className="space-y-3">
                    {PRODUCT.brewingSteps.map((step, i) => (
                      <div key={i} className="flex items-center gap-4 text-[0.9rem] text-[#2a4a35]">
                        <span className="w-7 h-7 rounded-full bg-[#c9a84c] text-[#0d2818] flex items-center justify-center font-bold text-[0.8rem] flex-shrink-0">
                          {i + 1}
                        </span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ── Info panel ── */}
            <FadeIn direction="right">
              <div>
                <div className="inline-block bg-[#e8f5ee] text-[#2d7a4f] border border-[#c8e6d4] px-4 py-1 rounded-full text-[0.78rem] font-semibold tracking-widest uppercase mb-4">
                  🌿 Herbal Wellness
                </div>

                <h1 className="font-display text-[2.4rem] font-bold text-[#0d2818] leading-tight mb-3">
                  {PRODUCT.name}
                  <br />
                  <span className="text-[1.4rem] font-normal text-[#5a7a65]">{PRODUCT.subtitle}</span>
                </h1>

                <div className="flex items-center gap-3 mb-5">
                  <Stars rating={PRODUCT.rating} />
                  <span className="text-[0.88rem] text-[#5a7a65]">
                    {PRODUCT.rating} ({PRODUCT.reviewCount} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display text-[2.8rem] font-bold text-[#0d2818]">
                    ₹{PRODUCT.price}
                  </span>
                  <span className="text-[1.1rem] text-[#5a7a65] line-through">
                    ₹{PRODUCT.originalPrice}
                  </span>
                  <span className="bg-[#2d7a4f]/10 text-[#2d7a4f] border border-[#c8e6d4] px-3 py-1 rounded-full text-[0.82rem] font-semibold">
                    {PRODUCT.discount}% OFF
                  </span>
                </div>
                <p className="text-[0.82rem] text-[#5a7a65] mb-6">
                  Inclusive of all taxes · Free delivery above ₹499
                </p>

                <hr className="border-[#c8e6d4] mb-6" />

                {/* Description */}
                <p className="text-[0.88rem] uppercase font-semibold text-[#5a7a65] tracking-widest mb-3">
                  Description
                </p>
                <p className="text-[0.95rem] text-[#2a4a35] leading-[1.7] mb-5">
                  {PRODUCT.description}
                </p>

                <hr className="border-[#c8e6d4] mb-5" />

                {/* Ingredients */}
                <p className="text-[0.88rem] uppercase font-semibold text-[#5a7a65] tracking-widest mb-3">
                  Key Ingredients
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {PRODUCT.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="bg-[#e8f5ee] text-[#0d2818] border border-[#c8e6d4] px-4 py-1.5 rounded-full text-[0.82rem] font-medium"
                    >
                      {ing}
                    </span>
                  ))}
                </div>

                <hr className="border-[#c8e6d4] mb-5" />

                {/* Benefits */}
                <p className="text-[0.88rem] uppercase font-semibold text-[#5a7a65] tracking-widest mb-3">
                  Key Benefits
                </p>
                <div className="space-y-3 mb-6">
                  {PRODUCT.benefits.map((b) => (
                    <div key={b.title} className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-[#2d7a4f] flex-shrink-0 mt-2" />
                      <p className="text-[0.95rem] text-[#2a4a35] leading-relaxed">
                        <strong className="text-[#0d2818] font-medium">{b.title}</strong>{" "}
                        — {b.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Qty */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-[0.82rem] font-semibold text-[#5a7a65] tracking-widest uppercase">
                    Qty:
                  </span>
                  <div className="flex items-center border-[1.5px] border-[#c8e6d4] rounded-lg overflow-hidden">
                    <button
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="w-10 h-10 bg-[#e8f5ee] text-[#0d2818] text-xl hover:bg-[#c8e6d4] transition-colors font-medium"
                    >
                      −
                    </button>
                    <span className="w-12 text-center font-semibold text-[#0d2818] border-x-[1.5px] border-[#c8e6d4] h-10 flex items-center justify-center">
                      {qty}
                    </span>
                    <button
                      onClick={() => setQty(qty + 1)}
                      className="w-10 h-10 bg-[#e8f5ee] text-[#0d2818] text-xl hover:bg-[#c8e6d4] transition-colors font-medium"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* CTA buttons */}
                <button
                  onClick={() => notify(`🛒 Added to cart! ₹${PRODUCT.price * qty}`)}
                  className="w-full bg-[#0d2818] text-white py-4 rounded-xl font-semibold text-base hover:bg-[#2d7a4f] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(13,40,24,0.2)] transition-all mb-3"
                >
                  🛒 Add to Cart
                </button>
                <button
                 onClick={() => router.push("/checkout")}  className="w-full bg-[#c9a84c] text-[#0d2818] py-4 rounded-xl font-bold text-base hover:bg-[#e8c97a] hover:-translate-y-0.5 transition-all mb-5"
                >
                  ⚡ Buy Now — ₹{PRODUCT.price * qty}
                </button>

                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: "🚚", label: "Free Delivery" },
                    { icon: "↩️", label: "7-Day Return" },
                    { icon: "🔒", label: "Secure Pay" },
                  ].map((b) => (
                    <div
                      key={b.label}
                      className="bg-[#faf7f0] border border-[#c8e6d4] rounded-lg p-3 text-center"
                    >
                      <span className="text-[1.3rem] block mb-1">{b.icon}</span>
                      <span className="text-[0.78rem] text-[#5a7a65]">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ── Reviews ── */}
          <div className="mt-20">
            <h2 className="font-display text-[2rem] font-bold text-[#0d2818] mb-8">
              Customer <span className="text-[#c9a84c]">Reviews</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {REVIEWS.map((r, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="bg-white border border-[#c8e6d4] rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-[#0d2818] text-[0.9rem]">{r.name}</span>
                      <div className="flex items-center gap-2">
                        <Stars rating={r.rating} size="sm" />
                        <span className="text-[0.8rem] text-[#5a7a65]">{r.date}</span>
                      </div>
                    </div>
                    <p className="text-[0.9rem] text-[#2a4a35] leading-[1.65] italic">"{r.text}"</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
