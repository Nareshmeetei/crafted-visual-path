
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

const DesignDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-10 inline-flex items-center text-gray-700 hover:text-gray-900 rounded-full p-2 hover:bg-gray-100 transition-colors"
      >
        <ArrowLeft size={20} className="mr-1" />
      </button>
      
      <h1 className="text-4xl font-normal mb-10">Product design for Limespot</h1>
      
      <div className="aspect-video w-full bg-gray-800 mb-16">
        <img
          src="/lovable-uploads/7f0dcfb5-d002-4bac-bbda-c77c1ecd4ddc.png"
          alt="Limespot product design"
          className="w-full h-full object-cover"
        />
      </div>
      
      <h2 className="text-3xl font-normal mb-4">Brand Identity</h2>
      
      <p className="mb-10 text-lg leading-relaxed">
        Limespot is a product design agency that specializes in creating user-friendly and visually appealing products 
        for businesses of all sizes. We use a human-centered design approach to create products that are both 
        functional and engaging.
      </p>
      
      <div className="aspect-video w-full bg-gray-800 mb-10">
        <img
          src="/lovable-uploads/7f0dcfb5-d002-4bac-bbda-c77c1ecd4ddc.png"
          alt="Limespot brand identity"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default DesignDetail;
