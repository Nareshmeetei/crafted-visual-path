
const designCategories = [
  { id: 1, title: "Product Design", image: "/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png" },
  { id: 2, title: "Brand Identity", image: "/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png" },
  { id: 3, title: "UI Design", image: "/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png" },
  { id: 4, title: "UX Design", image: "/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png" },
  { id: 5, title: "Product Design", image: "/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png" },
  { id: 6, title: "UI Design", image: "/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png" },
];

const Design = () => {
  return (
    <div>
      <h1 className="page-title">Design</h1>
      
      <div className="image-grid">
        {designCategories.map((category) => (
          <div key={category.id} className="design-item mb-8">
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
