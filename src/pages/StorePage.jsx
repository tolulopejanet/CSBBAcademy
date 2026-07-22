import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { FaArrowLeft, FaBasketballBall, FaCartPlus, FaShieldAlt, FaTruck } from "react-icons/fa";
import jersey44Image from "../assets/NewImgs/jersey44.webp";
import jersey2Image from "../assets/NewImgs/jersey2.webp";
import jersey4Image from "../assets/NewImgs/jersey4.webp";
import jersey22Image from "../assets/NewImgs/Jersey22.webp";
import rim5Image from "../assets/NewImgs/rim5.webp";
import rim6Image from "../assets/NewImgs/rim6.webp";

// Basketball Imports
const ball1Image = "/optimized/Ball1.webp";
const ball2Image = "/optimized/Ball2.webp";
const ball3Image = "/optimized/Ball3.webp";
const ball4Image = "/optimized/Ball4.webp";
const ball5Image = "/optimized/Ball5.webp";

// Basketball Rim Imports
const rimImage = "/optimized/BasketballRim.webp";
const rim2Image = "/optimized/BasketballRim2.webp";
const rim3Image = rim5Image;
const rim4Image = rim6Image;

// Shoes/Snickers Imports
const snickers1Image = "/optimized/Snickers.webp";
const snickers2Image = "/optimized/Snickers2.webp";
const snickers3Image = "/optimized/Snickers3.webp";
const snickers4Image = "/optimized/Snickers4.webp";
const snickers5Image = "/optimized/Snickers5.webp";
const snickers6Image = "/optimized/Snickers6.webp";
const snickers7Image = "/optimized/Snickers7.webp";
const snickers8Image = "/optimized/Snickers8.webp";
const snickers9Image = "/optimized/Snickers9.webp";
const snickers10Image = "/optimized/Snickers10.webp";
const snickers11Image = "/optimized/Snickers11.webp";
const snickers12Image = "/optimized/Snickers12.webp";

// Socks Imports
const sock1Image = "/optimized/sock1.webp";
const sock2Image = "/optimized/sock2.webp";

// Shorts Imports
const short1Image = "/optimized/short1.webp";
const short2Image = "/optimized/short2.webp";
const short3Image = "/optimized/short3.webp";
const short4Image = "/optimized/short4.webp";
const short5Image = "/optimized/short5.webp";
const short6Image = "/optimized/short6.webp";

// Elbow Guard Imports
const elbowGuard1Image = "/optimized/elbowguard1.webp";
const elbowGuard2Image = "/optimized/elbowguard2.webp";
const elbowGuard3Image = "/optimized/elbowguard3.webp";
const elbowGuard4Image = "/optimized/elbowguard4.webp";

// Tops Imports
const top1Image = "/optimized/top1.webp";
const top2Image = "/optimized/top2.webp";

// Jerseys Imports
const jerseyImage1 = jersey44Image;
const jerseyImage2 = jersey2Image;
const jerseyImage3 = jersey4Image;
const jerseyImage4 = jersey22Image;

const galleryByCategory = {
  basketballs: [ball1Image, ball2Image, ball3Image, ball4Image, ball5Image],
  basketballrims: [rimImage, rim2Image],
  shoes: [
    snickers1Image,
    snickers2Image,
    snickers3Image,
    snickers4Image,
    snickers5Image,
    snickers6Image,
    snickers7Image,
    snickers8Image,
    snickers9Image,
    snickers10Image,
    snickers11Image,
    snickers12Image,
  ],
  socks: [sock1Image, sock2Image],
  shorts: [short1Image, short2Image, short3Image, short4Image, short5Image, short6Image],
  elbowguards: [elbowGuard1Image, elbowGuard2Image, elbowGuard3Image, elbowGuard4Image],
  tops: [top1Image, top2Image],
  jerseys: [jerseyImage1, jerseyImage2, jerseyImage3, jerseyImage4],
};

const productGalleryById = {
  
  "ball-2": [ball2Image, ball4Image],
  "ball-3": [ball3Image, ball1Image],
  
  "ball-5": [ball5Image, ball4Image],
  "rim-1": [rimImage, rim2Image],
  "rim-2": [rim3Image, rim4Image],
  "shoe-1": [snickers1Image, snickers4Image],
  "shoe-2": [snickers10Image, snickers2Image],
  "shoe-3": [snickers3Image, snickers6Image],
  "shoe-4": [snickers4Image, snickers1Image],
  "shoe-5": [snickers5Image, snickers8Image],
  "shoe-6": [snickers6Image, snickers3Image],
  "shoe-7": [snickers7Image, snickers11Image],
  "shoe-8": [snickers8Image, snickers5Image],
  "shoe-9": [snickers9Image, snickers2Image],
  "shoe-10": [snickers10Image, snickers10Image],
  "shoe-11": [snickers11Image, snickers7Image],
  "shoe-12": [snickers12Image],
  "sock-1": [sock1Image, sock2Image],
  "sock-2": [sock2Image, sock1Image],
  "short-1": [short1Image, short2Image, short3Image, short4Image, short5Image, short6Image],
  "elbowguard-1": [elbowGuard1Image, elbowGuard2Image],
  "elbowguard-2": [elbowGuard2Image, elbowGuard3Image],
  "elbowguard-3": [elbowGuard3Image, elbowGuard4Image],
  "elbowguard-4": [elbowGuard4Image, elbowGuard1Image],
  "top-1": [top1Image, top2Image],
  "top-2": [top2Image, top1Image],
  "jersey-1": [jerseyImage1, jerseyImage3],
  "jersey-2": [jerseyImage2, jerseyImage4],
  "jersey-3": [jerseyImage3, jerseyImage1],
  "jersey-4": [jerseyImage4, jerseyImage2],
};

const products = {
  basketballs: [
    {
      id: "ball-2",
      name: "Training Basketball",
      price: "₦50,000",
      category: "Basketballs",
      description: "Premium grip, indoor/outdoor performance, size 7 professional ball.",
      image: ball2Image,
    },
    {
      id: "ball-3",
      name: "Pro Training Basketball",
      price: "₦70,000",
      category: "Basketballs",
      description: "Durable training ball for practice sessions and drills.",
      image: ball3Image,
    }
  ],
  rims: [
    {
      id: "rim-1",
      name: "Basketball Rim Standard",
      price: "₦150,000",
      category: "Basketball Rims",
      description: "Regulation basketball rim with professional-grade steel construction.",
      image: rimImage,
    },
    {
      id: "rim-2",
      name: "Basketball Rim Pro",
      price: "₦200,000",
      category: "Basketball Rims",
      description: "Standard basketball rim suitable for practice and training.",
      image: rim2Image,
    },
  ],
  shoes: [
    {
      id: "shoe-1",
      name: "Nike Greek Freak Immortality",
      price: "₦82,000",
      category: "Shoes",
      description: "Lightweight support with traction designed for courts and quick cuts.",
      image: snickers1Image,
    },
    {
      id: "shoe-2",
      name: "Nike Basketball Kicks",
      price: "₦80,000",
      category: "Shoes",
      description: "Advanced cushioning and stability for high-performance play.",
      image: snickers2Image,
    },
    {
      id: "shoe-6",
      name: "Nike Kyrie’s",
      price: "₦80,000",
      category: "Shoes",
      description: "Durable training shoes designed for intensive workouts.",
      image: snickers6Image,
    },
    {
      id: "shoe-8",
      name: "Adidas Spider Michell",
      price: "₦80,000",
      category: "Shoes",
      description: "Designed for professional athletes and competitive players.",
      image: snickers8Image,
    },
    {
      id: "shoe-11",
      name: "Nike GT Cut",
      price: "₦26,000",
      category: "Shoes",
      description: "Lightweight and responsive shoes for quick footwork.",
      image: snickers11Image,
    },
    {
      id: "shoe-12",
      name: "Jordan Kicks",
      price: "₦85,000",
      category: "Shoes",
      description: "Top-tier basketball shoes with cutting-edge technology.",
      image: snickers12Image,
    },
  ],
  socks: [
    {
      id: "sock-2",
      name: "Cushioned Court Socks",
      price: "₦10,000",
      category: "Socks",
      description: "Extra cushioning for comfort during long games and practice.",
      image: sock2Image,
    },
  ],
  shorts: [
    {
      id: "short-1",
      name: "Training Shorts",
      price: "₦18,000",
      category: "Shorts",
      description: "Lightweight and breathable shorts for practice and game-day comfort.",
      image: short1Image,
    },
  ],
  elbowguards: [
    {
      id: "elbowguard-1",
      name: "Protective Elbow Guard",
      price: "₦10,000",
      category: "Elbow Guards",
      description: "Comfortable protection for training, scrimmages, and high-impact play.",
      image: elbowGuard1Image,
    },
    
    {
      id: "elbowguard-3",
      name: "Protective Elbow Guard",
      price: "₦10,000",
      category: "Elbow Guards",
      description: "A lighter option that still offers solid protection and comfort.",
      image: elbowGuard3Image,
    },
  ],
  tops: [
    {
      id: "top-1",
      name: "Academy Branded T-shirt",
      price: "₦20,000",
      category: "Tops",
      description: "Breathable performance jersey with custom CourtSide branding.",
      image: top1Image,
    },
    
  ],
  jerseys: [
    
    {
      id: "jersey-3",
      name: "Courtside Academy Jersey",
      price: "₦90,000",
      category: "Jerseys",
      description: "Modern academy-inspired jersey for training sessions and match day.",
      image: jerseyImage3,
    },
    {
      id: "jersey-4",
      name: "Jersey",
      price: "₦90,000",
      category: "Jerseys",
      description: "Stylish and durable jersey with a clean academy look.",
      image: jerseyImage4,
    },
  ],
};

function createWhatsAppLink(productName) {
  const message = `Hi CourtSide Academy, I would like to order the ${productName} from the store page.`;
  return `https://wa.me/2348100996930?text=${encodeURIComponent(message)}`;
}

function ProductSection({ title, items }) {
  const [activeImageIndex, setActiveImageIndex] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const selectImage = (productId, index) => {
    setActiveImageIndex((currentIndexes) => ({ ...currentIndexes, [productId]: index }));
  };

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">{title}</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((product) => {
          const categoryKey = product.category.toLowerCase().replace(/\s+/g, "").replace(/&/g, "");
          const galleryImages = productGalleryById[product.id]
            ? productGalleryById[product.id]
            : (galleryByCategory[categoryKey] ?? [product.image]);
          const currentImageIndex = activeImageIndex[product.id] ?? 0;
          const currentImage = galleryImages[currentImageIndex] ?? product.image;

          return (
            <article key={product.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="group relative h-56 overflow-hidden bg-slate-100">
                <button
                  type="button"
                  onClick={() => setSelectedImage({ src: currentImage, alt: product.name })}
                  className="h-full w-full"
                  aria-label={`View full image for ${product.name}`}
                >
                  <img
                    src={currentImage}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
                {galleryImages.length > 1 && (
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-end bg-gradient-to-t from-slate-950/80 to-transparent px-4 py-3 text-sm text-white">
                    <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium backdrop-blur-sm">
                      {currentImageIndex + 1}/{galleryImages.length}
                    </span>
                  </div>
                )}
              </div>

              {galleryImages.length > 1 && (
                <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {galleryImages.map((image, index) => (
                      <button
                        key={`${product.id}-${index}`}
                        type="button"
                        onClick={() => selectImage(product.id, index)}
                        className={`h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl border-2 ${
                          currentImageIndex === index ? "border-orange-500" : "border-slate-200"
                        } bg-slate-100`}
                      >
                        <img src={image} alt={`${product.name} view ${index + 1}`} loading="lazy" className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">{product.name}</h4>
                    <p className="text-sm text-slate-500 mt-1">{product.price}</p>
                  </div>
                  <div className="rounded-2xl bg-orange-500 p-3 text-white">
                    <FaCartPlus />
                  </div>
                </div>
                <p className="text-slate-600 leading-7 mb-6 text-sm">{product.description}</p>

                <a
                  href={createWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-white font-semibold hover:bg-orange-600 transition w-full text-center"
                >
                  Order on WhatsApp
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 px-4 py-6 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl rounded-3xl bg-white p-3 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-slate-950/80 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-950"
            >
              Close
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function StorePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-black text-white pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 hover:text-orange-500 mb-4 w-fit transition-colors"
          >
            <FaArrowLeft /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CourtSide Store</h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl">
            Shop premium basketball gear, apparel, and accessories built for performance and style. Order directly through WhatsApp and get your items delivered fast.
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="rounded-3xl bg-orange-500 p-4 text-white">
              <FaBasketballBall className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-orange-500 font-semibold">
                Complete Collection
              </p>
              <h2 className="text-3xl font-bold text-slate-900">Basketball essentials for every player</h2>
            </div>
          </div>
        </div>

        <ProductSection title="🏀 Basketballs" items={products.basketballs} />
        <ProductSection title="🥅 Basketball Rims" items={products.rims} />
        <ProductSection title="👟 Basketball Shoes" items={products.shoes} />
        <ProductSection title="🧦 Socks" items={products.socks} />
        <ProductSection title="🩳 Shorts" items={products.shorts} />
        <ProductSection title="🛡️ Elbow Guards" items={products.elbowguards} />
        <ProductSection title="👕 Tops & Jerseys" items={[...products.tops, ...products.jerseys]} />

        <aside className="space-y-6 rounded-3xl bg-white p-8 shadow-lg border border-slate-200 mt-16">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500 font-semibold">Why shop here</p>
            <h3 className="text-2xl font-bold text-slate-900">Fast, secure, and tailored for basketball players</h3>
            <p className="text-slate-600 leading-7">
              Choose quality equipment that supports every practice, game, and training session. We handle your order personally and ship items right to you.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-slate-100 p-3 text-orange-500">
                <FaShieldAlt />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Trusted quality</h4>
                <p className="text-slate-600">Gear selected for durability, fit, and performance on the court.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-slate-100 p-3 text-orange-500">
                <FaTruck />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Local delivery</h4>
                <p className="text-slate-600">Fast pickup and delivery options available within Lagos state.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-6 border border-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 mb-3">Ready to buy?</p>
            <a
              href="https://wa.me/2348100996930?text=Hi%20CourtSide%20Academy%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20store%20items.%20Can%20you%20help%20me%20place%20an%20order%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full rounded-full bg-black px-5 py-3 text-center text-white font-semibold hover:bg-slate-800 transition"
            >
              Chat with us
            </a>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
