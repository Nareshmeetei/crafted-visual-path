
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    slug: "how-i-create-a-productive-diy-home-office",
    title: "How I create a productive DIY home office",
    excerpt: "When it comes to setting up a productive home office, the design of your workspace plays a crucial role. Here are some key considerations...",
    image: "/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png"
  },
  {
    id: 2,
    slug: "how-i-delegate-tasks-effectively",
    title: "How I delegate tasks effectively",
    excerpt: "When it comes to setting up a productive home office, the design of your workspace plays a crucial role. Here are some key considerations...",
    image: "/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png"
  },
  {
    id: 3,
    slug: "how-to-design-a-landing-page-that-actually-converts",
    title: "How to design a landing page that actually converts",
    excerpt: "When it comes to setting up a productive home office, the design of your workspace plays a crucial role. Here are some key considerations...",
    image: "/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png"
  }
];

const Thoughts = () => {
  return (
    <div>
      <h1 className="page-title">Thoughts</h1>
      
      <div className="space-y-1">
        {blogPosts.map((post, index) => (
          <div key={post.id}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
              <div className="md:col-span-2">
                <Link to={`/thoughts/${post.slug}`}>
                  <h2 className="text-2xl hover:underline mb-4">{post.title}</h2>
                </Link>
                <p className="text-gray-700">{post.excerpt}</p>
              </div>
              <div>
                <Link to={`/thoughts/${post.slug}`} className="block">
                  <div className="aspect-video w-full bg-gray-700 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
              </div>
            </div>
            {index < blogPosts.length - 1 && (
              <div className="dashed-divider"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thoughts;
