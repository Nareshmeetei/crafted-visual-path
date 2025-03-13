
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // In a real app, you would fetch the blog post based on the slug
  const isBlogAboutOffice = slug === "how-i-create-a-productive-diy-home-office";
  
  return (
    <div className="max-w-3xl mx-auto">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 inline-flex items-center text-gray-700 hover:text-gray-900"
      >
        <ArrowLeft size={20} className="mr-2" />
        <span>Back</span>
      </button>
      
      <h1 className="text-3xl md:text-4xl mb-6">
        {isBlogAboutOffice ? "How I create a productive home office" : "Blog Post"}
      </h1>
      
      <div className="aspect-video w-full bg-gray-800 mb-10">
        <img
          src="/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png"
          alt="Blog header image"
          className="w-full h-full object-cover"
        />
      </div>
      
      {isBlogAboutOffice ? (
        <div className="prose max-w-none">
          <h2 className="text-2xl mb-4 mt-8">Designing the Perfect Workspace</h2>
          
          <p className="mb-4">
            When it comes to setting up a productive home office, the design of your workspace plays a crucial role. Here are some key considerations:
          </p>
          
          <p className="mb-4">
            When it comes to setting up a productive home office, the design of your workspace plays a crucial role. Here are some key considerations:
          </p>
          
          <h3 className="text-xl mb-3 mt-6">Find Your Dedicated Space</h3>
          
          <p className="mb-4">
            Designate a specific area in your home solely for work purposes. Whether it's a spare room, corner of your living room, or even a closet-turned-office, having a dedicated space helps create boundaries and minimizes distractions.
          </p>
          
          <h3 className="text-xl mb-3 mt-6">Let There Be Light</h3>
          
          <p className="mb-4">
            Natural light is essential for boosting productivity and overall well-being. Position your desk near windows if possible, allowing ample sunlight to flood in. If natural light is limited, invest in good-quality artificial lighting that mimics daylight.
          </p>
          
          <h3 className="text-xl mb-3 mt-6">Ergonomics Matter</h3>
          
          <p className="mb-4">
            Prioritize comfort by investing in an ergonomic chair and adjustable desk setup. Ensure that your chair provides proper back support and that the height of your desk allows for comfortable typing and viewing angles.
          </p>
          
          <h3 className="text-xl mb-3 mt-6">Organize Like A Pro</h3>
          
          <p className="mb-4">
            An organized workspace sets the stage for efficiency and focus. Consider these tips to keep things tidy:
          </p>
          
          <h4 className="text-lg mb-2 mt-4">Declutter Regularly</h4>
          
          <p className="mb-4">
            Clear out unnecessary items from your workspace regularly — less clutter means fewer distractions! Keep only essential items within reach while storing others neatly out of sight.
          </p>
          
          <h4 className="text-lg mb-2 mt-4">Optimize Storage Solutions</h4>
          
          <p className="mb-4">
            Invest in smart storage solutions like shelves, drawers, or bins to help keep everything organized. Categorize items based on their frequency of use and designate specific spaces for each category.
          </p>
          
          <h4 className="text-lg mb-2 mt-4">Digital Organization Matters Too!</h4>
          
          <p className="mb-4">
            Extend organization efforts beyond physical objects by organizing digital files using folders or cloud-based storage systems. Create clear naming conventions and adopt effective file management practices to save time searching for documents later on.
          </p>
          
          <div className="aspect-video w-full bg-gray-800 my-10">
            <img
              src="/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png"
              alt="Organized workspace"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="text-2xl mb-4 mt-8">Boost Focus & Productivity</h2>
          
          <p className="mb-4">
            An organized workspace sets the stage for efficiency and focus. Consider these tips to keep things tidy:
          </p>
        </div>
      ) : (
        <div className="prose max-w-none">
          <p>Content for {slug}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
