export default function WhoWeAre() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Who We Are
        </h2>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

          <p>
            Court Side Foundation is a youth-centered development organization
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

          <div className="mt-10 p-6 bg-white shadow-md border-l-4 border-orange-500 rounded-lg">
  <p className="text-lg font-medium text-gray-800">
    Structured sport is not recreation — it is a powerful tool for
    youth development, resilience, and long-term community impact.
  </p>
</div>

        </div>
      </div>
    </section>
  );
}