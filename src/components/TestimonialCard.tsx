import React from "react";

interface StarsProps {
  rating: number;
  className?: string;
}

export function Stars({ rating, className = "" }: StarsProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          {/* ...existing path... */}
        </svg>
      ))}
    </div>
  );
}

interface TestimonialCardProps {
  text: string;
  name: string;
  location: string;
  initials: string;
  rating: number;
  className?: string;
}

export default function TestimonialCard({
  text,
  name,
  location,
  initials,
  rating,
  className = "",
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-white border border-[#c8e6d4] rounded-2xl p-8 hover:shadow-[0_8px_32px_rgba(13,40,24,0.10)] transition-all duration-300 flex flex-col h-full ${className}`}
    >
      <div className="font-display text-[4rem] text-[#c8e6d4] leading-[0.8] mb-4">"</div>
      <Stars rating={rating} className="mb-4" />
      <p className="text-[0.95rem] text-[#2a4a35] leading-[1.7] italic flex-1 mb-6">{text}</p>
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2d7a4f] to-[#0d2818] flex items-center justify-center text-white font-semibold text-base flex-shrink-0">
          {initials}
        </div>
        <div>
          <div className="font-semibold text-[#0d2818] text-[0.9rem]">{name}</div>
          <div className="text-[0.8rem] text-[#5a7a65]">{location}</div>
        </div>
      </div>
    </div>
  );
}
