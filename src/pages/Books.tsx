import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BookOpen, ArrowLeft, Shield, Calendar, User, FileText } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  content: string;
  cover_image: string | null;
  publication_year: number | null;
  publisher: string;
  is_government_certified: boolean;
  pages: number | null;
  language: string;
}

export default function Books() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const { data, error } = await supabase
        .from('agriculture_books')
        .select('*')
        .order('publication_year', { ascending: false });

      if (error) throw error;
      setBooks(data || []);
    } catch (error) {
      console.error('Error fetching books:', error);
      toast.error('Failed to load books');
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Farming Techniques': 'from-green-500 to-emerald-500',
      'Organic Farming': 'from-lime-500 to-green-500',
      'Crop Protection': 'from-orange-500 to-red-500',
      'Water Management': 'from-blue-500 to-cyan-500',
      'Soil Management': 'from-amber-500 to-yellow-500',
      'Market & Economics': 'from-purple-500 to-pink-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  const openBook = (book: Book) => {
    setSelectedBook(book);
    setIsReading(true);
  };

  const closeBook = () => {
    setIsReading(false);
    setSelectedBook(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Agriculture Books
            </h1>
            <p className="text-muted-foreground">Government-certified agricultural knowledge resources</p>
          </div>
          <BookOpen className="h-12 w-12 text-accent" />
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4">Loading books...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, idx) => (
              <Card 
                key={book.id} 
                className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-scale-in cursor-pointer overflow-hidden"
                style={{ animationDelay: `${idx * 0.05}s` }}
                onClick={() => openBook(book)}
              >
                <div className={`h-32 w-full bg-gradient-to-br ${getCategoryColor(book.category)} flex items-center justify-center`}>
                  <BookOpen className="h-16 w-16 text-white" />
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {book.category}
                    </Badge>
                    {book.is_government_certified && (
                      <Badge className="bg-green-500 text-white text-xs">
                        <Shield className="h-3 w-3 mr-1" />
                        Certified
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{book.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {book.description}
                  </p>
                  
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-3 w-3" />
                      <span>{book.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      <span>{book.publication_year}</span>
                    </div>
                    {book.pages && (
                      <div className="flex items-center gap-2">
                        <FileText className="h-3 w-3" />
                        <span>{book.pages} pages</span>
                      </div>
                    )}
                  </div>

                  <Button className="w-full mt-4" size="sm">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Book
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Book Reader Dialog */}
        <Dialog open={isReading} onOpenChange={closeBook}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0">
            <DialogHeader className="p-6 pb-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <DialogTitle className="text-2xl mb-2">
                    {selectedBook?.title}
                  </DialogTitle>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {selectedBook?.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {selectedBook?.publication_year}
                    </span>
                    {selectedBook?.is_government_certified && (
                      <Badge className="bg-green-500 text-white text-xs">
                        <Shield className="h-3 w-3 mr-1" />
                        Government Certified
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </DialogHeader>

            <ScrollArea className="h-[calc(90vh-200px)] px-6 pb-6">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <ReactMarkdown>
                  {selectedBook?.content || ''}
                </ReactMarkdown>
              </div>
            </ScrollArea>

            <div className="p-4 border-t bg-muted/50">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Publisher: {selectedBook?.publisher}</span>
                <span>Language: {selectedBook?.language}</span>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
