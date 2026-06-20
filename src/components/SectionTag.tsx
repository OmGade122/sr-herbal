interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTag({ children, className = "" }: SectionTagProps) {
  return (
    <span
      className={`inline-block bg-[#e8f5ee] text-[#2d7a4f] border border-[#c8e6d4] px-[18px] py-[6px] rounded-full text-[0.78rem] font-semibold tracking-widest uppercase mb-4 ${className}`}
    >
      {children}
    </span>
  );
}
