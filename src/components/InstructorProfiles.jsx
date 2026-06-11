import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const instructors = [
  {
    id: 1,
    name: "Coach Seun Adeyemi",
    initials: "SA",
    role: "Head Coach",
    specialty: "Basketball Strategy & Fundamentals",
    bio: "15+ years of coaching experience with multiple championship titles.",
    social: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 2,
    name: "Coach Tunde Olaitan",
    initials: "TO",
    role: "Skills Trainer",
    specialty: "Ball Handling & Shooting",
    bio: "Former professional player with expertise in developing young talents.",
    social: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 3,
    name: "Coach Folake Ibitoye",
    initials: "FI",
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
    name: "Coach Emeka Nwosu",
    initials: "EN",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Avatar Container */}
              <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 h-80 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-6xl font-bold text-white">
                      {instructor.initials}
                    </span>
                  </div>
                </div>
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
