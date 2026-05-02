import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">CourtSide Academy</h3>
            <p className="text-gray-300 text-sm">
              Empowerment and development through structured sport. Building resilient youth and strengthening communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <Link to="/" className="block hover:text-orange-500 transition-colors">
                Home
              </Link>
              <Link to="/about" className="block hover:text-orange-500 transition-colors">
                About
              </Link>
              
              <Link to="/gallery" className="block hover:text-orange-500 transition-colors">
                Gallery
              </Link>
              <Link to="/blog" className="block hover:text-orange-500 transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-300 text-sm mb-2">
              <span className="font-semibold">Address:</span> 23, Admiralty Way, Lekki, Phase One, Lagos
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <span className="font-semibold">Email:</span> courtsideacademy1@gmail.com
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <span className="font-semibold">Phone:</span> +234 818 929 5556
            </p>
            <p className="text-gray-300 text-sm">
              <span className="font-semibold">Phone:</span> +234 911 444 8021
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="mailto:courtsideacademy1@gmail.com"
                className="bg-gray-800 text-white p-3 rounded-full hover:bg-orange-500 transition-colors"
                title="Email us"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://instagram.com/Court_sideacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-3 rounded-full hover:bg-orange-500 transition-colors"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://tiktok.com/@courtside.academy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-3 rounded-full hover:bg-orange-500 transition-colors"
                title="Follow us on TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} CourtSide Basketball Academy. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}