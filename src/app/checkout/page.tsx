"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [payment, setPayment] = useState("UPI");
  const [qty, setQty] = useState(1);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const [loading, setLoading] = useState(false);
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const router = useRouter();
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

   let screenshotUrl = "";

if (payment === "UPI") {
  if (!screenshot) {
    alert("Please upload payment screenshot");
    setLoading(false);
    return;
  }

   const formData = new FormData();
   formData.append("file", screenshot);
   formData.append("upload_preset", "srherbal");

    const uploadRes = await fetch(
    "https://api.cloudinary.com/v1_1/dkibxgkgi/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );

     const uploadData = await uploadRes.json();

     console.log("Cloudinary Response:", uploadData);

     screenshotUrl = uploadData.secure_url;

     console.log("Screenshot URL:", screenshotUrl);

     screenshotUrl = uploadData.secure_url;
}
//alert("URL = " + screenshotUrl);

console.log("Final URL:", screenshotUrl);
const data = {
  name,
  phone,
  address,
  city,
  pincode,
  qty,
  amount: qty * 350,
  payment,
  screenshot: screenshotUrl,
};
console.log("Sending Data:", data);
//alert(JSON.stringify(data, null, 2));
    try {
      await fetch(
  "https://script.google.com/macros/s/AKfycbyodC-u3dy3cesMBCq_HSnIw2cKIbPGLW6jpUS53hvrreEKxwGpoD2qvJY24Ye5u00w8w/exec",
  {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(data),
  }
);
        router.push("/order-success");
      setName("");
      setPhone("");
      setAddress("");
      setCity("");
      setPincode("");
      setQty(1);
      setPayment("UPI");
    } catch (err) {
      console.error(err);
      alert("❌ Error saving order");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Checkout
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />

        <textarea
          placeholder="Full Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          placeholder="Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />

        <div>
          <label className="block mb-2 font-semibold">
            Quantity
          </label>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="bg-gray-200 px-4 py-2 rounded-lg"
            >
              -
            </button>

            <span className="font-bold text-lg w-10 text-center">
              {qty}
            </span>

            <button
              type="button"
              onClick={() => setQty(qty + 1)}
              className="bg-gray-200 px-4 py-2 rounded-lg"
            >
              +
            </button>
          </div>
        </div>

        <div className="text-xl font-bold text-green-700">
          Total: ₹{qty * 350}
        </div>

        <select
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          className="w-full border p-3 rounded-lg"
        >
          <option value="UPI">UPI</option>
          <option value="Cash on Delivery">
            Cash on Delivery
          </option>
        </select>

        {payment === "UPI" && (
          <div className="bg-green-50 border rounded-xl p-4 text-center">

            <h3 className="font-bold text-lg mb-3">
              Scan & Pay
            </h3>

            <Image
              src="/payment-qr.png"
              alt="UPI QR"
              width={220}
              height={220}
              className="mx-auto mb-4"
            />

            <p className="text-sm text-gray-600">
              UPI ID
            </p>

            <p className="font-bold text-green-700 text-lg">
              7972318618@ybl
            </p>

            <div className="mt-4">
              <label className="block font-semibold mb-2">
                Payment Screenshot
              </label>

              <input
               type="file"
                accept="image/*"
               onChange={(e) =>
                setScreenshot(
                e.target.files ? e.target.files[0] : null
                 )
                 }
                  className="w-full border p-2 rounded-lg"
                 />
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-700 text-white p-4 rounded-lg font-bold"
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
}