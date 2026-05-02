export default function Hero() {
  const whatsappNumber = "2348189295556";
  const joinMessage = "Hi, my name is ___. I would like to join CourtSide Academy. Can you provide more information?";
  const partnerMessage = "Hi, my name is ___. I would like to partner with CourtSide Academy. Can you provide more information?";

  const joinUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(joinMessage)}`;
  const partnerUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(partnerMessage)}`;

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
            <a
              href={joinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 px-6 py-3 rounded-lg cursor-pointer hover:bg-orange-600 transition-colors font-semibold"
            >
              Join Program
            </a>
            <a
              href={partnerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border px-6 py-3 rounded-lg cursor-pointer hover:bg-white/10 transition-colors font-semibold"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}