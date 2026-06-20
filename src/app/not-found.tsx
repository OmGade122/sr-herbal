import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#faf7f0] flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-md">
        <div className="text-[6rem] mb-4">🍃</div>
        <h1 className="font-display text-[3rem] font-bold text-[#0d2818] mb-3">404</h1>
        <h2 className="font-display text-[1.5rem] font-semibold text-[#2d7a4f] mb-4">
          Page Not Found
        </h2>
        <p className="text-[#5a7a65] text-base leading-relaxed mb-8">
          Looks like this page got lost in the tea garden. Let's bring you back to the right path.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="bg-[#0d2818] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#2d7a4f] transition-colors"
          >
            🏠 Go Home
          </Link>
          <Link
            href="/product"
            className="bg-[#c9a84c] text-[#0d2818] px-8 py-3.5 rounded-full font-semibold hover:bg-[#e8c97a] transition-colors"
          >
            🛒 Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
