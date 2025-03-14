
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

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
        <Carousel className="w-full max-w-[600px] mx-auto">
          <div className="absolute top-4 right-4 z-10 flex space-x-2">
            <button className="p-2 rounded-full border border-gray-300 bg-white/80 hover:bg-white">
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button className="p-2 rounded-full border border-gray-300 bg-white/80 hover:bg-white">
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
          
          <CarouselContent>
            <CarouselItem>
              <div className="aspect-square max-w-[600px] bg-gray-900 mb-6 relative overflow-hidden">
                <img 
                  src="/lovable-uploads/e4a39794-c0a0-4bbd-92fa-5c985b9c5d83.png" 
                  alt="Promise - Artwork" 
                  className="w-full h-full object-contain"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        
        <h2 className="text-2xl mb-2">Promise</h2>
        <p className="text-gray-700">Ink on paper then scanned and digitized it.</p>
      </div>
    </div>
  );
};

export default Home;
