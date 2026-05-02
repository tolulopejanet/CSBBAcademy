export default function WhoWeAre() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Who We Are Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Who We Are</h3>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              CourtSide Foundation is a youth-centered development organization
              that leverages structured sport as a vehicle for empowerment,
              psychosocial resilience, leadership development, and community
              stabilization.
            </p>

            <p>
              We design and implement structured basketball-based programming
              that integrates mentorship, life-skills development, education
              pathways, and social cohesion initiatives — particularly within
              underserved and high-risk communities.
            </p>

            <p>
              Our work aligns with broader global development priorities,
              including youth empowerment, gender inclusion, violence prevention,
              mental health support, and post-conflict recovery.
            </p>

            <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 rounded-lg">
              <p className="text-lg font-semibold text-gray-800 italic">
                "Structured sport is not recreation — it is a powerful tool for
                youth development, resilience, and long-term community impact."
              </p>
            </div>
          </div>
        </div>

        {/* Director Message */}
        <div className="mb-20 bg-slate-50 rounded-3xl p-10">
          <p className="text-orange-500 uppercase tracking-[0.24em] font-semibold mb-4">
            A message from our director
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Leading with purpose, passion, and belief in every young athlete.
          </h2>
          <p className="text-gray-700 leading-8 mb-6">
            At CourtSide Academy, we believe every child can discover their voice,
            their confidence, and their path to success through sport. Our programs
            are designed to build more than athletes; they build leaders, problem-solvers,
            and members of stronger communities.
          </p>
          <p className="text-gray-700 leading-8 mb-6">
            "We invest in youth because the future deserves their energy, creativity,
            and resilience. Together, we turn courts into classrooms for life and
            transform ambition into opportunity."
          </p>
          <div className="border-t border-slate-200 pt-6">
            <p className="text-lg font-semibold text-slate-900">Bimbo</p>
            <p className="text-sm text-gray-500">Founder & Executive Director</p>
          </div>
        </div>
      </div>

      <div className="mb-12 w-full overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0">
          <div className="h-16 sm:h-20 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80')",
            }}
          />
          <div className="h-16 sm:h-20 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80')",
            }}
          />
          <div className="hidden sm:block h-16 sm:h-20 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80')",
            }}
          />
          <div className="hidden sm:block h-16 sm:h-20 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80')",
            }}
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6">

        {/* Mission & Vision Section */}
        <div className="mb-20">
          
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Vision
              </h3>
              <p className="text-gray-700 leading-8 text-justify">
                A Nigeria where every child, regardless of socioeconomic background, has access to transformative basketball programs that cultivate Olympic athletes, Ivy League scholars, and Fortune 500 CEOs. We envision CourtSide Academy as the catalyst that turns Lagos' streets into pathways of opportunity, creating a ripple effect of excellence that elevates entire communities and positions Nigeria as a global leader in youth sports development.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Mission
              </h3>
              <p className="text-gray-700 leading-8 text-justify">
                To transform underserved Nigerian youth through elite basketball training that builds champions on and off the court. We provide world-class coaching, mentorship, and life skills development that turns potential into purpose, creating the next generation of leaders, entrepreneurs, and community builders who will drive Nigeria's sustainable development.
              </p>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">Our Core Pillars</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 text-white font-bold text-lg">1</div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Youth Empowerment</h4>
                <p className="text-gray-700">
                  Building confidence, self-esteem, and leadership capabilities through structured athletic development and mentorship programs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 text-white font-bold text-lg">2</div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Life Skills Development</h4>
                <p className="text-gray-700">
                  Teaching resilience, teamwork, discipline, problem-solving, and emotional intelligence through sport-based learning.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 text-white font-bold text-lg">3</div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Community Stabilization</h4>
                <p className="text-gray-700">
                  Creating safe spaces that reduce violence, prevent crime, and foster social cohesion in underserved communities.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 text-white font-bold text-lg">4</div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Education & Pathways</h4>
                <p className="text-gray-700">
                  Supporting academic excellence and creating sustainable opportunities for further education and employment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}