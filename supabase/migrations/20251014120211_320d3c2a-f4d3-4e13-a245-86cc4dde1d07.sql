-- Create storage bucket for disease detection images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('disease-images', 'disease-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for disease images
CREATE POLICY "Users can upload own disease images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (
  bucket_id = 'disease-images' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can view own disease images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'disease-images');

CREATE POLICY "Users can delete own disease images" 
ON storage.objects 
FOR DELETE 
USING (
  bucket_id = 'disease-images' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);