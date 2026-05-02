import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { FaArrowLeft, FaCalendar, FaUser, FaTimes } from "react-icons/fa";

export default function BlogPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: "The Importance of Ball Handling in Modern Basketball",
      author: "Coach Alex",
      date: "May 1, 2026",
      category: "Skills",
      excerpt:
        "Ball handling is the foundation of basketball. Learn how to develop elite-level dribbling skills that will set you apart on the court.",
      image:
        "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=800&q=80",
      content: `In today's fast-paced basketball game, ball handling has become more critical than ever...

The key to developing exceptional ball-handling skills is consistent daily practice...

Remember that ball handling isn't just about fancy moves—it's about control, consistency, and making smart decisions under pressure.`,
    },
    {
      id: 2,
      title: "Defensive Principles Every Player Should Know",
      author: "Coach Marcus",
      date: "April 28, 2026",
      category: "Defense",
      excerpt:
        "Great defense wins championships. Discover the fundamental principles that transform good defenders into exceptional ones.",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
      content: `Defense is the most neglected aspect of basketball training...

The foundation of good defense starts with footwork and positioning...

Individual defense is important, but team defense is what wins games.`,
    },
    {
      id: 3,
      title: "Nutrition and Recovery: Keys to Performance",
      author: "Sports Nutritionist Sarah",
      date: "April 25, 2026",
      category: "Health",
      excerpt:
        "What you do off the court matters as much as your on-court work.",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
      content: `Basketball is a demanding sport that requires optimal nutrition...

Focus on a balanced diet rich in lean proteins...

Sleep is when your body repairs and grows stronger.`,
    },
    {
      id: 4,
      title: "The Mental Game: Building Confidence and Resilience",
      author: "Sports Psychologist Dr. James",
      date: "April 22, 2026",
      category: "Mental",
      excerpt:
        "Basketball is as much a mental game as it is physical.",
      image:
        "https://th-thumbnailer.cdn-si-edu.com/O969n-3CvCTievCSwQa-rYBo2Fo=/1000x750/filters:no_upscale():focal(800x602:801x603)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/3c/1c/3c1cf8e9-0694-438d-89ef-6ea678a8239e/sports-psychology-1600x1200_web.jpg",
      content: `The difference between good players and great players...

Develop a pre-game routine that helps you get into the zone...

Build resilience by viewing failures as learning opportunities.`,
    },
    {
      id: 5,
      title: "3-Point Shooting: Essential in Today's Game",
      author: "Coach David",
      date: "April 19, 2026",
      category: "Skills",
      excerpt:
        "The three-point line has changed basketball forever.",
      image:
        "https://on3static.com/uploads/dev/assets/cms/2025/10/04193551/130A0140-luka-bogavic.jpg",
      content: `The modern game demands that all players can shoot...

Start with proper footwork and mechanics...

Practice with purpose and track your shooting percentages.`,
    },
    {
      id: 6,
      title: "Team Chemistry: Building a Winning Culture",
      author: "Coach Thompson",
      date: "April 16, 2026",
      category: "Team",
      excerpt:
        "Individual talent wins games, but team chemistry wins championships.",
      image:
        "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80",
      content: `The most successful basketball teams aren't always the most talented...

Start by establishing clear team goals...

Communication is fundamental in building trust.`,
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Basketball Insights
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Expert tips, strategies, and inspiration for every level of player
          </p>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-40 w-full object-cover"
              />

              <div className="p-6">
                <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {article.category}
                </span>

                <h3 className="text-xl font-bold mt-3 mb-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {article.excerpt}
                </p>

                <div className="flex gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <FaUser className="text-orange-500" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCalendar className="text-orange-500" />
                    {article.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            
            {/* Top */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">
                {selectedArticle.title}
              </h2>
              <button onClick={() => setSelectedArticle(null)}>
                <FaTimes />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-64 object-cover rounded mb-4"
              />

              <div className="flex gap-4 text-sm text-gray-500 mb-4">
                <span>{selectedArticle.author}</span>
                <span>{selectedArticle.date}</span>
              </div>

              {selectedArticle.content
                .split("\n\n")
                .map((p, i) => (
                  <p key={i} className="mb-4 text-gray-700">
                    {p}
                  </p>
                ))}

              <button
                onClick={() => setSelectedArticle(null)}
                className="mt-6 w-full border py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}