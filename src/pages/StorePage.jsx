import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { FaArrowLeft, FaBasketballBall, FaCartPlus, FaShieldAlt, FaTruck } from "react-icons/fa";

// Basketball Imports
import ball1Image from "../assets/NewImgs/Ball1.jpeg";
import ball2Image from "../assets/NewImgs/Ball2.jpeg";
import ball3Image from "../assets/NewImgs/Ball3.jpeg";
import ball4Image from "../assets/NewImgs/Ball4.jpeg";
import ball5Image from "../assets/NewImgs/Ball5.jpeg";

// Basketball Rim Imports
import rimImage from "../assets/NewImgs/BasketballRim.png";
import rim2Image from "../assets/NewImgs/BasketballRim2.png";

// Shoes/Snickers Imports
import snickers1Image from "../assets/NewImgs/Snickers.png";
import snickers2Image from "../assets/NewImgs/Snickers2.png";
import snickers3Image from "../assets/NewImgs/Snickers3.png";
import snickers4Image from "../assets/NewImgs/Snickers4.png";
import snickers5Image from "../assets/NewImgs/Snickers5.png";
import snickers6Image from "../assets/NewImgs/Snickers6.png";
import snickers7Image from "../assets/NewImgs/Snickers7.png";
import snickers8Image from "../assets/NewImgs/Snickers8.png";
import snickers9Image from "../assets/NewImgs/Snickers9.png";
import snickers10Image from "../assets/NewImgs/Snickers10.png";
import snickers11Image from "../assets/NewImgs/Snickers11.png";
import snickers12Image from "../assets/NewImgs/Snickers12.png";

// Socks Imports
import sock1Image from "../assets/NewImgs/sock1.png";
import sock2Image from "../assets/NewImgs/sock2.png";

// Tops Imports
import top1Image from "../assets/NewImgs/top1.png";
import top2Image from "../assets/NewImgs/top2.png";

const products = {
  basketballs: [
    {
      id: "ball-1",
      name: "Professional Basketball Pro",
      price: "₦50,000",
      category: "Basketballs",
      description: "Premium grip, indoor/outdoor performance, size 7 professional ball.",
      image: ball1Image,
    },
    {
      id: "ball-2",
      name: "Pro Court Basketball",
      price: "₦50,000",
      category: "Basketballs",
      description: "Premium grip, indoor/outdoor performance, size 7 professional ball.",
      image: ball2Image,
    },
    {
      id: "ball-3",
      name: "Training Basketball",
      price: "₦50,000",
      category: "Basketballs",
      description: "Durable training ball for practice sessions and drills.",
      image: ball3Image,
    },
    {
      id: "ball-4",
      name: "Tournament Basketball",
      price: "₦50,000",
      category: "Basketballs",
      description: "Official tournament-grade basketball with premium quality.",
      image: ball4Image,
    },
    {
      id: "ball-5",
      name: "Indoor Basketball",
      price: "₦50,000",
      category: "Basketballs",
      description: "High-quality indoor performance basketball.",
      image: ball5Image,
    },
  ],
  rims: [
    {
      id: "rim-1",
      name: "Basketball Rim Pro",
      price: "₦150,000",
      category: "Basketball Rims",
      description: "Regulation basketball rim with professional-grade steel construction.",
      image: rimImage,
    },
    {
      id: "rim-2",
      name: "Basketball Rim Standard",
      price: "₦150,000",
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
      id: "shoe-3",
      name: "Nike Kyrie’s",
      price: "₦80,000",
      category: "Shoes",
      description: "Premium basketball shoes with enhanced ankle support.",
      image: snickers3Image,
    },
    {
      id: "shoe-4",
      name: "Nike Greek Freak Immortality",
      price: "₦82,000",
      category: "Shoes",
      description: "Lightweight design perfect for quick movement and agility.",
      image: snickers4Image,
    },
    {
      id: "shoe-5",
      name: "Adidas Spider Michell",
      price: "₦80,000",
      category: "Shoes",
      description: "Professional-grade basketball shoes for competitive play.",
      image: snickers5Image,
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
      id: "shoe-7",
      name: "Nike GT Cut",
      price: "₦82,000",
      category: "Shoes",
      description: "Engineered for precision and control on the court.",
      image: snickers7Image,
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
      id: "shoe-9",
      name: "Nike Basketball Kicks",
      price: "₦80,000",
      category: "Shoes",
      description: "Maximum comfort and support for long practice sessions.",
      image: snickers9Image,
    },
    {
      id: "shoe-10",
      name: "Nike Basketball Kicks",
      price: "₦80,000",
      category: "Shoes",
      description: "Premium performance shoes for championship-level play.",
      image: snickers10Image,
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
      id: "sock-1",
      name: "Performance Basketball Socks",
      price: "₦10,000",
      category: "Socks",
      description: "High-performance socks with moisture-wicking technology.",
      image: sock1Image,
    },
    {
      id: "sock-2",
      name: "Cushioned Court Socks",
      price: "₦10,000",
      category: "Socks",
      description: "Extra cushioning for comfort during long games and practice.",
      image: sock2Image,
    },
  ],
  tops: [
    {
      id: "top-1",
      name: "CourtSide Performance Jersey",
      price: "₦90,000",
      category: "Tops",
      description: "Breathable performance jersey with custom CourtSide branding.",
      image: top1Image,
    },
    {
      id: "top-2",
      name: "Training Top",
      price: "₦90,000",
      category: "Tops",
      description: "Comfortable training top perfect for practice sessions.",
      image: top2Image,
    },
  ],
};

function createWhatsAppLink(productName) {
  const message = `Hi CourtSide Academy, I would like to order the ${productName} from the store page.`;
  return `https://wa.me/2348100996930?text=${encodeURIComponent(message)}`;
}

function ProductSection({ title, items }) {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">{title}</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((product) => (
          <article key={product.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="h-56 overflow-hidden bg-slate-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>
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
        ))}
      </div>
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
        <ProductSection title="👕 Tops & Jerseys" items={products.tops} />

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
