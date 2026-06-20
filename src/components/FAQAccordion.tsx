"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`border rounded-lg overflow-hidden transition-all duration-200 ${
              isOpen
                ? "border-[#2d7a4f]"
                : "border-[#c8e6d4] hover:border-[#2d7a4f]/50"
            }`}
          >
            <button
              className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors ${
                isOpen
                  ? "bg-[#e8f5ee] text-[#2d7a4f]"
                  : "bg-white text-[#0d1a12] hover:bg-[#e8f5ee]"
              }`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-medium text-[0.95rem] pr-4">{faq.q}</span>
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-base flex-shrink-0 transition-all duration-300 ${
                  isOpen
                    ? "bg-[#2d7a4f] text-white rotate-45"
                    : "bg-[#e8f5ee] text-[#2d7a4f]"
                }`}
              >
                +
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden bg-white"
                >
                  <p className="px-6 pb-5 pt-1 text-sm text-[#5a7a65] leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
