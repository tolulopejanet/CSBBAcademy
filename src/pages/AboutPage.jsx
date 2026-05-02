import { Link } from "react-router-dom";
import WhoWeAre from "../components/WhoWeAre";
import Footer from "../components/Footer";
import { FaArrowLeft } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 hover:text-orange-500 mb-4 w-fit transition-colors"
          >
            <FaArrowLeft /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Learn more about our mission, vision, and values
          </p>
        </div>
      </div>

      {/* About Content */}
      <WhoWeAre />

      <Footer />
    </div>
  );
}
