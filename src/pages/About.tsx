
const About = () => {
  return (
    <div className="animate-fade-in max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="text-4xl font-normal mb-5">Hello, I'm Naresh Meetei.</h1>
          <div className="space-y-6 text-lg">
            <p>I find my happiness in simplifying.</p>
            
            <p>
              Love flirting with art, design, tech and entrepreneurship to draw
              inspiration from each and fuel my journey.
            </p>
            
            <p>
              I'm the founder of <a href="#" className="underline hover:text-gray-600">Hayoom</a> and <a href="#" className="underline hover:text-gray-600">EfHive</a>.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-lg">
            <img 
              src="/lovable-uploads/47c283d8-b21a-494c-b302-6882997d7429.png" 
              alt="Naresh Meetei" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
