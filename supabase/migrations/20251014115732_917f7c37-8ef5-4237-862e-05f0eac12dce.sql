-- Create profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  phone TEXT,
  language TEXT DEFAULT 'en',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create market prices table
CREATE TABLE public.market_prices (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  crop_name TEXT NOT NULL,
  price_per_quintal DECIMAL(10,2) NOT NULL,
  market_name TEXT NOT NULL,
  state TEXT NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.market_prices ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view market prices" ON public.market_prices
  FOR SELECT USING (true);

-- Create disease detection history table
CREATE TABLE public.disease_detections (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  disease_name TEXT,
  confidence DECIMAL(5,2),
  recommendations TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.disease_detections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own detections" ON public.disease_detections
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert detections" ON public.disease_detections
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create news table
CREATE TABLE public.farmer_news (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  published_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.farmer_news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view news" ON public.farmer_news
  FOR SELECT USING (true);

-- Create schemes table
CREATE TABLE public.government_schemes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  eligibility TEXT NOT NULL,
  benefits TEXT NOT NULL,
  how_to_apply TEXT NOT NULL,
  state TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.government_schemes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view schemes" ON public.government_schemes
  FOR SELECT USING (true);

-- Create trigger for profile updates
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name)
  VALUES (new.id, new.raw_user_meta_data->>'full_name');
  RETURN new;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample market prices
INSERT INTO public.market_prices (crop_name, price_per_quintal, market_name, state) VALUES
('Wheat', 2150.00, 'Azadpur Mandi', 'Delhi'),
('Rice', 1890.00, 'Azadpur Mandi', 'Delhi'),
('Cotton', 5650.00, 'Akola Market', 'Maharashtra'),
('Sugarcane', 3200.00, 'Kolhapur Market', 'Maharashtra'),
('Maize', 1750.00, 'Ludhiana Mandi', 'Punjab'),
('Bajra', 2100.00, 'Jaipur Mandi', 'Rajasthan');

-- Insert sample news
INSERT INTO public.farmer_news (title, content, category) VALUES
('New Subsidy Scheme for Organic Farming', 'Government announces 50% subsidy on organic farming equipment and certification...', 'Schemes'),
('Monsoon Forecast 2024: Above Normal Rainfall Expected', 'IMD predicts above-normal monsoon this year, benefiting Kharif crops...', 'Weather'),
('Digital Agriculture: New Mobile App Launched', 'Ministry launches comprehensive app for farmers with AI-powered disease detection...', 'Technology');

-- Insert sample schemes
INSERT INTO public.government_schemes (title, description, eligibility, benefits, how_to_apply, state) VALUES
('PM-KISAN', 'Direct income support of ₹6,000 per year to farmer families', 'All landholding farmers', 'Financial assistance of ₹2,000 per installment, three times a year', 'Register through nearest Common Service Centre or online portal', 'All India'),
('Soil Health Card Scheme', 'Provides soil health cards to farmers for appropriate nutrient management', 'All farmers', 'Free soil testing and nutrient recommendations', 'Contact District Agriculture Office', 'All India'),
('Pradhan Mantri Fasal Bima Yojana', 'Crop insurance scheme for farmers', 'All farmers growing notified crops', 'Insurance coverage for crop loss', 'Through banks or insurance companies', 'All India');