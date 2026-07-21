const img1 = "/optimized/img1.webp";
const img2 = "/optimized/img2.webp";
const img3 = "/optimized/img3.webp";
const img4 = "/optimized/img4.webp";

export default function Gallery() {
  const images = [img1, img2, img3, img4];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Our Impact in Action
      </h2>

      <p className="text-center text-gray-600 mb-10">
        At CourtSide Academy, every stat tells a story of confidence built, teams uplifted, and futures transformed. From court drills to leadership training, we’re shaping brighter pathways for young people and their communities — one program, one game, and one breakthrough moment at a time.
      </p>
      <p className="text-center text-gray-600 mb-10">
        Real moments from our programs, communities, and youth development initiatives.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl"
          >
            <img
              src={img}
              alt="basketball impact"
              loading="lazy"
              className="w-full h-64 object-cover hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}