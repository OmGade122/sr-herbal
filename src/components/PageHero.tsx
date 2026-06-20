interface PageHeroProps {
  title: string;
  subtitle?: string;
  tag?: string;
}

export default function PageHero({ title, subtitle, tag }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-[#0d2818] to-[#1a4a2e] pt-28 pb-16 px-6 text-center">
      {tag && (
        <span className="inline-block bg-[#e8f5ee] text-[#2d7a4f] border border-[#c8e6d4] px-[18px] py-[6px] rounded-full text-[0.78rem] font-semibold tracking-widest uppercase mb-4">
          {tag}
        </span>
      )}
      <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-white/65 text-base max-w-lg mx-auto leading-relaxed">{subtitle}</p>
      )}
    </section>
  );
}
