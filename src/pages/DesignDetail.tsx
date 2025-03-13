
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DesignDetail = () => {
  const navigate = useNavigate();
  
  return (
    <div className="max-w-3xl mx-auto">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 inline-flex items-center text-gray-700 hover:text-gray-900"
      >
        <ArrowLeft size={20} className="mr-2" />
        <span>Back</span>
      </button>
      
      <h1 className="text-3xl md:text-4xl mb-6">Product design for Limespot</h1>
      
      <div className="aspect-video w-full bg-gray-800 mb-10">
        <img
          src="/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png"
          alt="Limespot product design"
          className="w-full h-full object-cover"
        />
      </div>
      
      <h2 className="text-2xl mb-4">Brand Identity</h2>
      
      <p className="mb-8 text-lg">
        Limespot is a product design agency that specializes in creating user-friendly and visually appealing products for businesses of all sizes. We use a human-centered design approach to create products that are both functional and engaging.
      </p>
      
      <div className="aspect-video w-full bg-gray-800 mb-10">
        <img
          src="/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png"
          alt="Limespot brand identity"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default DesignDetail;
