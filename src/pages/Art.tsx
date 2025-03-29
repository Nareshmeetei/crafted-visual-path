import { useState } from "react"
import { NavigationArrows } from "../components/NavigationArrows"

const Art = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const artItems = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Art #${i + 1}`,
    image: "/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png"
  }));

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : artItems.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < artItems.length - 1 ? prev + 1 : 0))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="page-title">Art</h1>
        <NavigationArrows 
          onPrevious={handlePrevious}
          onNext={handleNext}
          className="ml-auto"
        />
      </div>
      
      <div className="image-grid">
        {artItems.map((item) => (
          <div key={item.id} className="art-item mb-8">
            <div className="image-container">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-2 text-lg">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Art;
