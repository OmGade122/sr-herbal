export default function Loading() {
  return (
    <div className="min-h-screen bg-[#faf7f0] flex items-center justify-center pt-20">
      <div className="text-center">
        <div
          className="text-[4rem] mb-4"
          style={{ animation: "floatLeaf 1.5s ease-in-out infinite" }}
        >
          🌿
        </div>
        <p className="text-[#5a7a65] text-sm tracking-widest uppercase">Loading...</p>
      </div>
    </div>
  );
}
