import { FaEnvelope } from "react-icons/fa";
const coachAlicho2Image = "/optimized/Coach Alicho 2.webp";
const coachMonday2Image = "/optimized/Coach Monday 2.webp";

const instructors = [
  {
    id: 3,
    name: "Coach Christian Alicho Chigozie",
    initials: "FI",
    image: coachAlicho2Image,
    role: "Fitness Coach",
    specialty: "Conditioning & Strength Training",
    bio: "Coach Christian brings a performance-first mindset to every session, combining strength work, mobility, and basketball-specific conditioning to help athletes train with purpose and recover well.",
    approach: "He focuses on building durable bodies, faster movement, and better habits that carry into games and daily life.",
    highlights: ["Speed and agility development", "Strength and injury prevention", "Athletic recovery routines"],
    social: {
      email: "mailto:alicho@courtsideacademy.ng",
    },
  },
  {
    id: 4,
    name: "Coach Uujaide Monday Aluede",
    initials: "EN",
    image: coachMonday2Image,
    role: "Assistant Coach",
    specialty: "Defensive Techniques & Game Analysis",
    bio: "Coach Monday is known for his sharp eye for detail, helping players sharpen footwork, reading the game, and making smarter decisions under pressure.",
    approach: "He blends tactical awareness with practical drills so young athletes grow into confident, disciplined basketball players.",
    highlights: ["Defensive footwork and positioning", "Game IQ and decision-making", "Team communication and leadership"],
    social: {
      email: "mailto:monday@courtsideacademy.ng",
    },
  },
];

export default function InstructorProfiles() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-500 font-semibold mb-3">
            Our Team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Meet Our Instructors
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Expert coaches dedicated to developing the next generation of basketball champions.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Avatar Container */}
              <div className="relative bg-gradient-to-br from-slate-200 to-slate-300 h-80 flex items-center justify-center overflow-hidden">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  loading="lazy"
                  className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={instructor.social.email}
                    className="bg-white text-orange-500 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
                    title="Email"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>

              {/* Info Section */}
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {instructor.name}
                </h3>
                <p className="text-sm text-orange-500 font-semibold mb-3">
                  {instructor.role}
                </p>
                <p className="text-sm text-slate-600 font-medium mb-3">
                  {instructor.specialty}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {instructor.bio}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {instructor.approach}
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {instructor.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
