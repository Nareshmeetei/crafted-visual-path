
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Art from "./pages/Art";
import Design from "./pages/Design";
import Thoughts from "./pages/Thoughts";
import Projects from "./pages/Projects";
import StuffILike from "./pages/StuffILike";
import About from "./pages/About";
import BlogDetail from "./pages/BlogDetail";
import DesignDetail from "./pages/DesignDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/art" element={<Layout><Art /></Layout>} />
          <Route path="/design" element={<Layout><Design /></Layout>} />
          <Route path="/design/:slug" element={<Layout><DesignDetail /></Layout>} />
          <Route path="/thoughts" element={<Layout><Thoughts /></Layout>} />
          <Route path="/thoughts/:slug" element={<Layout><BlogDetail /></Layout>} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/stuff-i-like" element={<Layout><StuffILike /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
