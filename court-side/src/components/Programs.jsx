import { FaUsers, FaBasketballBall, FaChartLine } from "react-icons/fa";
export default function Programs() {
  const inputs = [
    "Funding",
    "Facilities & Equipment",
    "Coaches & Mentors",
  ];

  const activities = [
    "Training Programs",
    "Mentorship",
    "Team Development",
    "Community Engagement",
  ];

  const impact = [
    "Empowered Individuals",
    "Stronger Communities",
    "Reduced Crime Risk",
    "Post-Conflict Recovery",
    "Sustainable Development",
  ];

  return (
    <section id="programs" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How Our Model Works
        </h2>

        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          We use structured sport as a system — transforming resources into
          measurable, long-term impact for youth and communities.
        </p>

        {/* Flow Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Inputs */}
          <div className="bg-white p-6 rounded-xl shadow-md w-full md:w-1/3">
            <div className="flex justify-center mb-3 text-orange-500 text-2xl">
  <FaUsers />
</div>

<h3 className="font-bold text-orange-500 mb-4 text-center">
  Inputs
</h3>

            <ul className="space-y-2 text-gray-700 text-center">
              {inputs.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Arrow */}
          <div className="text-3xl text-gray-400 hidden md:block">
            →
          </div>

          {/* Activities */}
          <div className="bg-white p-6 rounded-xl shadow-md w-full md:w-1/3">
            <div className="flex justify-center mb-3 text-orange-500 text-2xl">
  <FaBasketballBall />
</div>

<h3 className="font-bold text-orange-500 mb-4 text-center">
  Activities
</h3>

            <ul className="space-y-2 text-gray-700 text-center">
              {activities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Arrow */}
          <div className="text-3xl text-gray-400 hidden md:block">
            →
          </div>

          {/* Impact */}
          <div className="bg-white p-6 rounded-xl shadow-md w-full md:w-1/3">
            <div className="flex justify-center mb-3 text-orange-500 text-2xl">
  <FaChartLine />
</div>

<h3 className="font-bold text-orange-500 mb-4 text-center">
  Impact
</h3>

            <ul className="space-y-2 text-gray-700 text-center">
              {impact.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Mobile arrows */}
        <div className="md:hidden flex flex-col items-center text-gray-400 text-2xl mt-6">
          ↓
          ↓
        </div>

      </div>
    </section>
  );
}