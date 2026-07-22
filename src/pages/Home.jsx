import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Gallery from "../components/Gallery";
import ProblemSolution from "../components/ProblemSolution";
import Programs from "../components/Programs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { ProgramRegistrationSection } from "../pages/FormPage";

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
              <Link
                to="/form"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-white font-semibold hover:bg-orange-600 transition"
              >
                Get involved
              </Link>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Track our reach and local impact
              </h3>
              <p className="text-slate-700 leading-7 mb-6">
                Every dribble, every pass, every game played is a step towards a brighter future for our youth. Through our programs, we’ve seen countless stories of growth, resilience, and community transformation. Join us as we continue to make a difference, one player at a time.
              </p>
              <Link
                to="/form"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-white font-semibold hover:bg-orange-600 transition"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Stats />
      <Gallery />
      <ProblemSolution />
      <Programs />
      <ProgramRegistrationSection />
      <CTA />
      <Footer />
    </>
  );
}
