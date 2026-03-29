export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1546519638-68e109498ffc')",
      }}
    >
      {/* Overlay */}
      <div className="bg-black/70 w-full h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <p className="text-orange-500 uppercase">
            Court Side Basketball Academy
          </p>

          <h1 className="text-4xl md:text-7xl font-bold mt-4">
           Empowerment and Development through Structured Sport.
          </h1>

          <p className="mt-6 text-gray-300 max-w-lg">
            Building Resilient Youth, Strengthening Communities, and Enabling Sustainable Futures.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-orange-500 px-6 py-3 rounded-lg cursor-pointer">
              Join Program
            </button>
            <button className="border px-6 py-3 rounded-lg cursor-pointer">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}