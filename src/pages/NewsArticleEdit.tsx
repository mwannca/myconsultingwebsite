import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Image as ImageIcon, 
  Heading1,
  Heading2,
  Quote,
  Undo,
  Redo
} from 'lucide-react';
import Navbar from "@/components/Navbar";

const NewsArticleEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const contentImageInputRef = useRef<HTMLInputElement>(null);
  
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full rounded-lg',
        },
      }),
      Placeholder.configure({
        placeholder: 'Start writing your article here...'
      })
    ],
    content: "",
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-[500px] w-full p-6 border rounded-lg',
      },
    },
  });

  const handleImageUpload = async (file: File) => {
    try {
      setUploadingImage(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `news-images/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('news-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('news-images')
        .getPublicUrl(filePath);

      setImageUrl(publicUrl);
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: "Error",
        description: "Failed to upload image",
        variant: "destructive",
      });
    } finally {
      setUploadingImage(false);
    }
  };

  const handleContentImageUpload = async (file: File) => {
    try {
      setUploadingImage(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `news-content-images/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('news-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('news-images')
        .getPublicUrl(filePath);

      editor?.chain().focus().setImage({ src: publicUrl }).run();

      toast({
        title: "Success",
        description: "Image inserted successfully",
      });
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: "Error",
        description: "Failed to upload image",
        variant: "destructive",
      });
    } finally {
      setUploadingImage(false);
    }
  };

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) return;

      const { data: article, error } = await supabase
        .from('news_articles')
        .select('*')
        .eq('id', id)
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

      if (!article) {
        toast({
          title: "Error",
          description: "Article not found",
          variant: "destructive",
        });
        navigate('/news');
        return;
      }

      setTitle(article.title);
      setImageUrl(article.image_url || '');
      editor?.commands.setContent(article.content);
      setLoading(false);
    };

    fetchArticle();
  }, [id, navigate, editor]);

  const handleSave = async () => {
    if (!id || !editor || !captchaToken) {
      toast({
        title: "Error",
        description: "Please complete the captcha verification",
        variant: "destructive",
      });
      return;
    }

    setSaving(true);
    const { error } = await supabase
      .from('news_articles')
      .update({
        title: title,
        content: editor.getHTML(),
        image_url: imageUrl,
      })
      .eq('id', id);

    setSaving(false);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to save article",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Article saved successfully",
    });
  };

  const handlePublish = async () => {
    if (!id || !editor || !captchaToken) {
      toast({
        title: "Error",
        description: "Please complete the captcha verification",
        variant: "destructive",
      });
      return;
    }

    setSaving(true);
    const { error } = await supabase
      .from('news_articles')
      .update({
        title: title,
        content: editor.getHTML(),
        image_url: imageUrl,
        status: 'published',
      })
      .eq('id', id);

    setSaving(false);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to publish article",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Article published successfully",
    });
    navigate('/news/manage');
  };

  if (loading) {
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
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex flex-col gap-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-4xl font-bold w-full bg-transparent border-b border-gray-200 focus:outline-none focus:border-primary px-2 py-1"
              placeholder="Article Title"
            />
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  onClick={handleSave}
                  disabled={saving || uploadingImage || !captchaToken}
                >
                  Save Draft
                </Button>
                <Button 
                  onClick={handlePublish}
                  disabled={saving || uploadingImage || !captchaToken}
                >
                  Publish
                </Button>
              </div>
              <HCaptcha
                sitekey="782a83e4-74b0-4212-a450-7952123673b6"
                onVerify={(token) => setCaptchaToken(token)}
                ref={captchaRef}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Featured Image
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="flex-1 p-2 border rounded-md"
                placeholder="Enter image URL or upload an image"
                disabled={uploadingImage}
              />
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleImageUpload(file);
                }}
              />
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploadingImage}
              >
                {uploadingImage ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  <ImageIcon className="h-4 w-4" />
                )}
              </Button>
            </div>
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Featured"
                className="mt-4 max-h-[200px] object-cover rounded-lg"
              />
            )}
          </div>
          
          <div className="bg-white rounded-lg shadow-sm mb-6">
            <div className="border-b p-3 flex items-center gap-2 flex-wrap">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor?.chain().focus().toggleBold().run()}
                className={editor?.isActive('bold') ? 'bg-secondary' : ''}
              >
                <Bold className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor?.chain().focus().toggleItalic().run()}
                className={editor?.isActive('italic') ? 'bg-secondary' : ''}
              >
                <Italic className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor?.isActive('heading', { level: 1 }) ? 'bg-secondary' : ''}
              >
                <Heading1 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor?.isActive('heading', { level: 2 }) ? 'bg-secondary' : ''}
              >
                <Heading2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor?.chain().focus().toggleBulletList().run()}
                className={editor?.isActive('bulletList') ? 'bg-secondary' : ''}
              >
                <List className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor?.chain().focus().toggleOrderedList().run()}
                className={editor?.isActive('orderedList') ? 'bg-secondary' : ''}
              >
                <ListOrdered className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor?.chain().focus().toggleBlockquote().run()}
                className={editor?.isActive('blockquote') ? 'bg-secondary' : ''}
              >
                <Quote className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor?.chain().focus().undo().run()}
              >
                <Undo className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => editor?.chain().focus().redo().run()}
              >
                <Redo className="h-4 w-4" />
              </Button>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={contentImageInputRef}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleContentImageUpload(file);
                }}
                id="content-image-upload"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => contentImageInputRef.current?.click()}
                disabled={uploadingImage}
              >
                {uploadingImage ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  <ImageIcon className="h-4 w-4" />
                )}
              </Button>
            </div>
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticleEdit;