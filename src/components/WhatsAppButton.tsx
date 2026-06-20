"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-7 right-7 z-50 w-[60px] h-[60px] rounded-full flex items-center justify-center text-2xl text-white no-underline hover:scale-110 transition-transform"
      style={{
        background: "#25d366",
        animation: "waPulse 2.5s ease-in-out infinite",
      }}
    >
      💬
    </a>
  );
}
