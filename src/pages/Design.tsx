
import { useNavigate } from "react-router-dom";

const designCategories = [
  { id: 1, title: "Product Design", image: "/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png", slug: "product-design" },
  { id: 2, title: "Brand Identity", image: "/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png", slug: "brand-identity" },
  { id: 3, title: "UI Design", image: "/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png", slug: "ui-design" },
  { id: 4, title: "UX Design", image: "/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png", slug: "ux-design" },
  { id: 5, title: "Product Design", image: "/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png", slug: "product-design-2" },
  { id: 6, title: "UI Design", image: "/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png", slug: "ui-design-2" },
];

const Design = () => {
  const navigate = useNavigate();

  const handleItemClick = (slug: string) => {
    navigate(`/design/${slug}`);
  };

  return (
    <div>
      <h1 className="page-title">Design</h1>
      
      <div className="image-grid">
        {designCategories.map((category) => (
          <div 
            key={category.id} 
            className="design-item mb-8 cursor-pointer"
            onClick={() => handleItemClick(category.slug)}
          >
            <div className="image-container">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-2 text-lg">{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Design;
