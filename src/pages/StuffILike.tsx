
const StuffILike = () => {
  const stuffItems = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Art #${i + 1}`,
    image: "/lovable-uploads/a46ce561-51b2-40af-bfbf-34b566c075de.png"
  }));

  return (
    <div>
      <h1 className="page-title">Some stuff i like</h1>
      
      <div className="image-grid">
        {stuffItems.map((item) => (
          <div key={item.id} className="stuff-item mb-8">
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

export default StuffILike;
