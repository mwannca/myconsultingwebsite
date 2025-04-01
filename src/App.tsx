import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Services from "@/pages/Services";
import NotFound from "@/pages/NotFound";
import Auth from "@/pages/Auth";
import News from "@/pages/News";
import NewsArticle from "@/pages/NewsArticle";
import NewsManage from "@/pages/NewsManage";
import NewsArticleEdit from "@/pages/NewsArticleEdit";
import Analytics from "@/pages/Analytics";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import { Analytics as AnalyticsTracker } from "@/components/Analytics";
import AdminRoute from "@/components/AdminRoute";

function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/article/:id" element={<NewsArticle />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route 
          path="/news/manage" 
          element={
            <AdminRoute>
              <NewsManage />
            </AdminRoute>
          } 
        />
        <Route 
          path="/news/edit/:id" 
          element={
            <AdminRoute>
              <NewsArticleEdit />
            </AdminRoute>
          } 
        />
        <Route 
          path="/analytics" 
          element={
            <AdminRoute>
              <Analytics />
            </AdminRoute>
          } 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;