interface BenefitCardProps {
  icon: string;
  title: string;
  desc: string;
  className?: string;
}

export default function BenefitCard({ icon, title, desc, className = "" }: BenefitCardProps) {
  return (
    <div
      className={`group bg-[#faf7f0] border border-[#c8e6d4] rounded-2xl p-8 text-center relative overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(13,40,24,0.12)] hover:border-[#2d7a4f] transition-all duration-300 h-full ${className}`}
    >
      <span className="text-[2.8rem] mb-4 block">{icon}</span>
      <h3 className="font-display text-[1.25rem] font-semibold text-[#0d2818] mb-2">{title}</h3>
      <p className="text-[0.875rem] text-[#5a7a65] leading-relaxed">{desc}</p>
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
        style={{ background: "linear-gradient(90deg, #2d7a4f, #c9a84c)" }}
      />
    </div>
  );
}
