
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="animate-fade-in">
      <div className="mt-10 mb-20">
        <Link 
          to="/art" 
          className="inline-block border border-gray-400 px-4 py-2 hover:bg-gray-100 transition-colors"
        >
          Show All Art <ArrowRight className="inline-block ml-2" size={16} />
        </Link>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="aspect-square max-w-[600px] mx-auto bg-gray-900 mb-6 relative overflow-hidden">
          <img 
            src="/lovable-uploads/e4a39794-c0a0-4bbd-92fa-5c985b9c5d83.png" 
            alt="Promise - Artwork" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <h2 className="text-2xl mb-2">Promise</h2>
        <p className="text-gray-700">Ink on paper then scanned and digitized it.</p>
      </div>
    </div>
  );
};

export default Home;
