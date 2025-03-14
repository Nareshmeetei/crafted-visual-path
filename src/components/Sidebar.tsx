
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import Newsletter from "./Newsletter";

const Sidebar = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would normally connect to an email service like Mailchimp
    console.log("Subscribing email:", email);
    alert(`Thanks for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <aside className="bg-sidebar-bg min-h-screen w-full md:w-[300px] md:fixed md:top-0 md:left-0 md:bottom-0 p-8 flex flex-col">
      <div className="flex-grow">
        <h1 className="mb-10 mt-4">
          <NavLink to="/" className="block">
            <img 
              src="/lovable-uploads/c8d6f52d-c143-4f41-bd28-adaf79bc8091.png" 
              alt="NARESH MEETEI" 
              className="h-16 w-auto"
            />
          </NavLink>
        </h1>
        
        <nav className="mb-10">
          <ul className="space-y-4">
            <li>
              <NavLink 
                to="/art" 
                className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}
              >
                Art
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/design" 
                className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}
              >
                Design
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/thoughts" 
                className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}
              >
                Thoughts
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/stuff-i-like" 
                className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}
              >
                Stuff I Like
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className="mt-auto">
        <Newsletter 
          email={email} 
          setEmail={setEmail} 
          handleSubscribe={handleSubscribe} 
        />
        
        <div className="mt-4 flex space-x-4">
          <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="Instagram">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
