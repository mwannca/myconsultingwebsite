import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Plus } from "lucide-react";

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  image_url?: string;
  author_id: string;
  created_at: string;
  status: 'draft' | 'published' | 'archived';
}

const NewsManage = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [session, setSession] = useState<any>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/auth');
        return;
      }
      setSession(session);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/auth');
        return;
      }
      setSession(session);
    });

    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('news_articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        toast({
          title: "Error",
          description: "Failed to fetch news articles",
          variant: "destructive",
        });
        return;
      }

      setArticles(data || []);
    };

    fetchArticles();

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const handleCreateArticle = async () => {
    if (!session?.user?.id) {
      toast({
        title: "Error",
        description: "You must be logged in to create an article",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase
        .from('news_articles')
        .insert({
          title: 'Untitled Article',
          content: '',
          author_id: session.user.id,
          status: 'draft'
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Success",
        description: "Article created successfully",
      });

      navigate(`/news/edit/${data.id}`);
    } catch (error) {
      console.error('Error creating article:', error);
      toast({
        title: "Error",
        description: "Failed to create article",
        variant: "destructive",
      });
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
            <h1 className="text-4xl font-bold">Manage Articles</h1>
            <Button onClick={handleCreateArticle} className="bg-primary text-white">
              <Plus className="w-4 h-4 mr-2" />
              Create Article
            </Button>
          </div>

          <div className="grid gap-6">
            {articles.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">{article.content}</p>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        article.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : article.status === 'draft' 
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {article.status.charAt(0).toUpperCase() + article.status.slice(1)}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(article.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => navigate(`/news/edit/${article.id}`)}
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsManage;