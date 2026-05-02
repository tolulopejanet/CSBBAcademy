import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";
import { FaArrowLeft, FaTimes } from "react-icons/fa";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import ball2 from "../assets/ball2.jpeg";
import balls from "../assets/balls.jpeg";
import pitch from "../assets/pitch.jpeg";
import pitch2 from "../assets/pitch2.jpeg";
import practice from "../assets/practice.jpeg";
import practice2 from "../assets/practice2.jpeg";
import banner from "../assets/banner.jpeg";
import certificates from "../assets/certificates.jpeg";
import logo2 from "../assets/logo2.jpeg";
import registration from "../assets/registration.jpeg";
import setup from "../assets/setup.jpeg";
import setup2 from "../assets/setup2.jpeg";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const gallery = [
    {
      id: 1,
      image: img1,
      title: "Training Session",
      description: "Young athletes engaged in intensive basketball training",
    },
    {
      id: 2,
      image: img2,
      title: "Team Building",
      description: "Team practicing fundamental skills and formations",
    },
    {
      id: 3,
      image: img3,
      title: "Community Impact",
      description: "Making a positive difference in our community",
    },
    {
      id: 4,
      image: img4,
      title: "Championship Game",
      description: "Exciting moments from our championship tournaments",
    },
    {
      id: 5,
      image: img5,
      title: "Mentorship",
      description: "Coaches guiding the next generation of players",
    },
    {
      id: 6,
      image: ball2,
      title: "Basketball Focus",
      description: "A close-up of the ball ready for the next play",
    },
    {
      id: 7,
      image: pitch,
      title: "Court Action",
      description: "Players practicing hard on a quality basketball court",
    },
    {
      id: 8,
      image: practice,
      title: "Practice Drills",
      description: "Focused skill development in a structured practice session",
    },
    {
      id: 9,
      image: practice2,
      title: "Skills Training",
      description: "Coaches working with youth on ball handling and footwork",
    },
    {
      id: 10,
      image: balls,
      title: "Ready to Play",
      description: "Prepared equipment and energy for the next training",
    },
    {
      id: 11,
      image: pitch2,
      title: "Game Prep",
      description: "Preparing the court and team for a big moment",
    },
    {
      id: 12,
      image: banner,
      title: "Academy Banner",
      description: "Official CourtSide Academy branding and messaging",
    },
    {
      id: 13,
      image: certificates,
      title: "Achievements",
      description: "Recognizing excellence and dedication through certificates",
    },
    {
      id: 14,
      image: logo2,
      title: "Brand Identity",
      description: "CourtSide Academy logo and visual identity",
    },
    {
      id: 15,
      image: registration,
      title: "Registration",
      description: "New players joining the academy program",
    },
    {
      id: 16,
      image: setup,
      title: "Facility Setup",
      description: "Preparing the training environment for optimal performance",
    },
    {
      id: 17,
      image: setup2,
      title: "Equipment Ready",
      description: "All training equipment and facilities prepared for action",
    },
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Capturing moments of excellence, growth, and community impact
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => setSelectedImage(item)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}

      <Footer />
    </div>
  );
}

function GalleryCard({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-64"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
        <div className="p-6 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-bold mb-2">{item.title}</h3>
          <p className="text-gray-200 text-sm">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

function Lightbox({ image, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-3xl hover:text-orange-500 transition-colors"
        >
          <FaTimes />
        </button>

        {/* Image */}
        <img
          src={image.image}
          alt={image.title}
          className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
        />

        {/* Info */}
        <div className="mt-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-2">{image.title}</h2>
          <p className="text-gray-300 text-lg">{image.description}</p>
        </div>
      </div>
    </div>
  );
}
