import Link from "next/link";

const footerLinks = {
  Navigate: [
    { href: "/", label: "Home" },
    { href: "/product", label: "Product" },
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
  ],
  Support: [
    { href: "/contact", label: "Contact Us" },
    { href: "#", label: "Shipping Policy" },
    { href: "#", label: "Return Policy" },
    { href: "#", label: "Privacy Policy" },
  ],
  Contact: [
    { href: "tel:+91 7972318618", label: "📱 +91 7972318618" },
    { href: "mailto:srherbal007@gmail.com", label: "✉️ srherbal007@gmail.com" },
    { href: "#", label: "📍 India" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0d2818] text-white/75 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-display text-2xl font-bold text-[#e8c97a] mb-3">
              SR Herbal Products
            </div>
            <p className="text-sm leading-relaxed text-white/55 max-w-xs">
              India's trusted herbal wellness brand. We believe nature holds the answer to true
              health. Pure, potent, and proudly Indian.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <div className="text-xs font-semibold tracking-widest uppercase text-[#e8c97a] mb-5">
                {title}
              </div>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 hover:text-[#e8c97a] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-white/8 mb-7" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-white/35">
            © 2024 SR Herbal Products. All rights reserved.
          </span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
            <span className="text-xs text-white/35">Made with 🌿 in India</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
