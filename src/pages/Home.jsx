import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Gallery from "../components/Gallery";
import ProblemSolution from "../components/ProblemSolution";
import Programs from "../components/Programs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Empowering Youth Through Basketball
              </h3>
              <p className="text-slate-700 leading-7 mb-6">
               Through our comprehensive programs, we provide not only top-tier basketball training but also mentorship, leadership development, and community support. Join us in our mission to ensure that every young athlete has the opportunity to thrive on and off the court.
              </p>
              <a
                href="https://wa.me/2348189295556?text=Hi%2C%20my%20name%20is%20___.%20I%20would%20like%20to%20join%20CourtSide%20Academy.%20Can%20you%20provide%20more%20information%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-white font-semibold hover:bg-orange-600 transition"
              >
                Get involved
              </a>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Track our reach and local impact
              </h3>
              <p className="text-slate-700 leading-7 mb-6">
                Every dribble, every pass, every game played is a step towards a brighter future for our youth. Through our programs, we’ve seen countless stories of growth, resilience, and community transformation. Join us as we continue to make a difference, one player at a time.
              </p>
              <a
                href="#stats"
                className="inline-flex items-center justify-center rounded-full border border-orange-500 bg-white px-6 py-3 text-orange-500 font-semibold hover:bg-orange-50 transition"
              >
                View stats
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Stats />
      <Gallery />
      <ProblemSolution />
      <Programs />
      <CTA />
      <Footer />
    </>
  );
}
