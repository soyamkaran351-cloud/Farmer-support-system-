-- Create agriculture books table
CREATE TABLE public.agriculture_books (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image TEXT,
  publication_year INTEGER,
  publisher TEXT NOT NULL,
  is_government_certified BOOLEAN NOT NULL DEFAULT true,
  pages INTEGER,
  language TEXT NOT NULL DEFAULT 'English',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.agriculture_books ENABLE ROW LEVEL SECURITY;

-- Create policy for anyone to view books
CREATE POLICY "Anyone can view agriculture books" 
ON public.agriculture_books 
FOR SELECT 
USING (true);

-- Create index for faster queries
CREATE INDEX idx_agriculture_books_category ON public.agriculture_books(category);
CREATE INDEX idx_agriculture_books_language ON public.agriculture_books(language);