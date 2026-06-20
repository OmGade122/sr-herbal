import Link from "next/link";
import Stars from "./Stars";

interface ProductCardProps {
  name: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  icon?: string;
  className?: string;
}

export default function ProductCard({
  name,
  subtitle,
  price,
  originalPrice,
  discount,
  rating,
  reviewCount,
  icon = "🫖",
  className = "",
}: ProductCardProps) {
  return (
    <div
      className={`bg-white border border-[#c8e6d4] rounded-3xl overflow-hidden hover:shadow-[0_12px_40px_rgba(13,40,24,0.12)] hover:-translate-y-1 transition-all duration-300 group ${className}`}
    >
      {/* Image area */}
      <div className="bg-[#e8f5ee] relative p-12 text-center overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: "linear-gradient(90deg, #2d7a4f, #c9a84c)" }}
        />
        <span
          className="text-[6rem] leading-none block group-hover:scale-105 transition-transform duration-300"
          style={{ filter: "drop-shadow(0 8px 16px rgba(201,168,76,0.2))" }}
        >
          {icon}
        </span>
        {/* Discount badge */}
        <div className="absolute top-4 right-4 bg-[#0d2818] text-[#e8c97a] text-[0.75rem] font-bold px-3 py-1 rounded-full">
          {discount}% OFF
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="inline-block bg-[#e8f5ee] text-[#2d7a4f] border border-[#c8e6d4] px-3 py-1 rounded-full text-[0.72rem] font-semibold tracking-widest uppercase mb-3">
          🌿 Herbal Wellness
        </div>
        <h3 className="font-display text-[1.4rem] font-bold text-[#0d2818] mb-1">{name}</h3>
        <p className="text-[0.85rem] text-[#5a7a65] mb-3">{subtitle}</p>

        <div className="flex items-center gap-2 mb-4">
          <Stars rating={rating} size="sm" />
          <span className="text-[0.8rem] text-[#5a7a65]">({reviewCount})</span>
        </div>

        <div className="flex items-baseline gap-2 mb-5">
          <span className="font-display text-[1.8rem] font-bold text-[#0d2818]">₹{price}</span>
          <span className="text-[0.95rem] text-[#5a7a65] line-through">₹{originalPrice}</span>
        </div>

        <Link
          href="/product"
          className="block w-full text-center bg-[#0d2818] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#2d7a4f] transition-colors"
        >
          View Product →
        </Link>
      </div>
    </div>
  );
}
