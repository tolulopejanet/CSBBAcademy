import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { FaArrowLeft, FaBasketballBall, FaCartPlus, FaShieldAlt, FaTruck } from "react-icons/fa";
import ball2Image from "../assets/ball2.jpeg";
import ballsImage from "../assets/gip.avif";
import practiceImage from "../assets/shoes.jpg";
import skillImage from "../assets/img2.jpeg";

const products = [
  {
    id: "pro-1",
    name: "Pro Court Basketball",
    price: "₦18,000",
    description: "Premium grip, indoor/outdoor performance, size 7 professional ball.",
    image: ball2Image,
  },
  {
    id: "pro-2",
    name: "CourtSide Jersey Set",
    price: "₦12,500",
    description: "Breathable performance jersey and shorts with custom CourtSide branding.",
    image: skillImage,
  },
  {
    id: "pro-3",
    name: "Performance Basketball Shoes",
    price: "₦27,000",
    description: "Lightweight support with traction designed for courts and quick cuts.",
    image: practiceImage,
  },
  {
    id: "pro-4",
    name: "Grip Wristbands",
    price: "₦3,200",
    description: "Stay dry and focused with moisture-wicking wristbands in team colors.",
    image: ballsImage,
  },
];

function createWhatsAppLink(productName) {
  const message = `Hi CourtSide Academy, I would like to order the ${productName} from the store page.`;
  return `https://wa.me/2348100996930?text=${encodeURIComponent(message)}`;
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
        <section className="grid gap-10 lg:grid-cols-[1.4fr,0.8fr]">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="rounded-3xl bg-orange-500 p-4 text-white">
                <FaBasketballBall className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-orange-500 font-semibold">
                  Featured items
                </p>
                <h2 className="text-3xl font-bold text-slate-900">Basketball essentials for every player</h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {products.map((product) => (
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
                        <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
                        <p className="text-sm text-slate-500 mt-1">{product.price}</p>
                      </div>
                      <div className="rounded-2xl bg-orange-500 p-3 text-white">
                        <FaCartPlus />
                      </div>
                    </div>
                    <p className="text-slate-600 leading-7 mb-6">{product.description}</p>
                    <a
                      href={createWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-white font-semibold hover:bg-orange-600 transition"
                    >
                      Order on WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
