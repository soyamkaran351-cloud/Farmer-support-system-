-- Add image_url column to market_prices table
ALTER TABLE market_prices ADD COLUMN IF NOT EXISTS image_url TEXT;