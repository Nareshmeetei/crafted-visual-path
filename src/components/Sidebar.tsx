
import { useState } from "react";
import { NavLink } from "react-router-dom";
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
        <h1 className="text-3xl font-medium mb-10 mt-4">
          <NavLink to="/" className="font-bold tracking-wide">
            NARESH MEETEI
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
        
        <div className="mt-4 flex">
          <a href="#" className="social-icon" aria-label="Twitter">
            <span className="inline-block">𝕏</span>
          </a>
          <a href="#" className="social-icon" aria-label="LinkedIn">
            <span className="inline-block">in</span>
          </a>
          <a href="#" className="social-icon" aria-label="Instagram">
            <span className="inline-block">ig</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
