import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf7f0] p-6">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 text-center shadow-lg border">
        <div className="text-6xl mb-4">✅</div>

        <h1 className="text-3xl font-bold text-green-800 mb-3">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for ordering SR Herbal Guava Leaf Tea. We will contact you soon for confirmation.
        </p>

        <Link
          href="/"
          className="block bg-green-700 text-white py-3 rounded-xl font-bold"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}