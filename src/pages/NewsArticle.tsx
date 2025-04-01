import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Calendar, User, ArrowLeft } from "lucide-react";

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  image_url?: string;
  author_id: string;
  created_at: string;
}

const NewsArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [article, setArticle] = useState<NewsArticle | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase
        .from('news_articles')
        .select('*')
        .eq('id', id)
        .eq('status', 'published')
        .single();

      if (error) {
        toast({
          title: "Error",
          description: "Failed to fetch article",
          variant: "destructive",
        });
        navigate('/news');
        return;
      }

      // Transform image URL to public URL if it's a storage reference
      if (data.image_url && data.image_url.startsWith('news-images/')) {
        const { data: { publicUrl } } = supabase
          .storage
          .from('news-images')
          .getPublicUrl(data.image_url);
        data.image_url = publicUrl;
      }

      setArticle(data);
    };

    fetchArticle();
  }, [id, navigate, toast]);

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-6 pt-32">
          <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <Button
            variant="ghost"
            className="mb-8 flex items-center gap-2"
            onClick={() => navigate('/news')}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Button>

          {article.image_url && (
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
          )}

          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span>Whitehat</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{new Date(article.created_at).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default NewsArticle;