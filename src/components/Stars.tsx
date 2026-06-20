interface StarsProps {
  rating: number;
  size?: "sm" | "md";
  className?: string;
}

export default function Stars({
  rating,
  size = "md",
  className = "",
}: StarsProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`${
            size === "sm" ? "text-sm" : "text-lg"
          } ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}