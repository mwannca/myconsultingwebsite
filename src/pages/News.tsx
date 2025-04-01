import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Calendar, User } from "lucide-react";

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  image_url?: string;
  author_id: string;
  created_at: string;
  status: 'draft' | 'published' | 'archived';
}

const News = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [session, setSession] = useState<any>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    const fetchArticles = async () => {
      try {
        console.log("Fetching articles...");
        const { data, error } = await supabase
          .from('news_articles')
          .select('*')
          .eq('status', 'published')
          .order('created_at', { ascending: false });

        if (error) {
          console.error("Error fetching articles:", error);
          toast({
            title: "Error",
            description: "Failed to fetch news articles",
            variant: "destructive",
          });
          return;
        }

        // Transform image URLs to public URLs if they're storage references
        const articlesWithPublicUrls = await Promise.all(
          (data || []).map(async (article) => {
            if (article.image_url && article.image_url.startsWith('news-images/')) {
              const { data: { publicUrl } } = supabase
                .storage
                .from('news-images')
                .getPublicUrl(article.image_url);
              return { ...article, image_url: publicUrl };
            }
            return article;
          })
        );

        console.log("Fetched articles:", articlesWithPublicUrls);
        setArticles(articlesWithPublicUrls);
      } catch (error) {
        console.error("Error in fetchArticles:", error);
        toast({
          title: "Error",
          description: "An unexpected error occurred",
          variant: "destructive",
        });
      }
    };

    fetchArticles();

    return () => {
      subscription.unsubscribe();
    };
  }, [toast]);

  const handleManageArticles = () => {
    if (session) {
      navigate("/news/manage");
    } else {
      toast({
        title: "Authentication Required",
        description: "Please log in to manage articles",
        variant: "destructive",
      });
      navigate("/auth");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold">Web Startup Solutions Journal</h1>
            {session && (
              <Button onClick={handleManageArticles} className="bg-primary text-white">
                Manage Articles
              </Button>
            )}
          </div>

          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No articles published yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  {article.image_url && (
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
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
                    <h2 className="text-xl font-semibold mb-3">{article.title}</h2>
                    <div 
                      className="text-gray-600 mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                    <Button
                      variant="outline"
                      className="w-full justify-center"
                      onClick={() => navigate(`/news/article/${article.id}`)}
                    >
                      Read More
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default News;