import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import coachAlicho2Image from "../assets/NewImgs/Coach Alicho 2.png";
import coachMonday2Image from "../assets/NewImgs/Coach Monday 2.png";

const instructors = [
  {
    id: 3,
    name: "Coach Christian Alicho Chigozie",
    initials: "FI",
    image: coachAlicho2Image,
    role: "Fitness Coach",
    specialty: "Conditioning & Strength Training",
    bio: "Certified fitness trainer focused on athletic performance enhancement.",
    social: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 4,
    name: "Coach Uujaide Monday Aluede",
    initials: "EN",
    image: coachMonday2Image,
    role: "Assistant Coach",
    specialty: "Defensive Techniques & Game Analysis",
    bio: "Specializes in player development and tactical game planning.",
    social: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
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
                  className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-300"
                />
                {/* Social Links Overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={instructor.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-orange-500 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
                    title="Twitter"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={instructor.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-orange-500 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
                    title="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={instructor.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-orange-500 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
                    title="LinkedIn"
                  >
                    <FaLinkedin />
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
                <p className="text-sm text-slate-600 leading-relaxed">
                  {instructor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
