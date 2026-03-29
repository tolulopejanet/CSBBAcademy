export default function Stats() {
  const stats = [
    { number: "5K+", label: "Youth Reached" },
    { number: "20+", label: "Communities" },
    { number: "100+", label: "Programs" },
    { number: "60%", label: "Female Inclusion" },
  ];

  return (
    <section id="impact" className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <h2 className="text-3xl font-bold text-orange-500">
              {s.number}
            </h2>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}