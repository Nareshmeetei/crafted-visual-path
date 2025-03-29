import { ReactNode, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#EFEFEF]">
      <Sidebar />
      <main className="flex-1 md:ml-[300px] min-h-screen bg-[#EFEFEF]">
        <div className="content-container max-w-6xl mx-auto px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
