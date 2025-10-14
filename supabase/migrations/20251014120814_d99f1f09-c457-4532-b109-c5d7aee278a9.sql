-- Add more market prices for various crops and states
INSERT INTO public.market_prices (crop_name, price_per_quintal, market_name, state, date) VALUES
-- Maharashtra
('Onion', 1200.00, 'Lasalgaon Market', 'Maharashtra', CURRENT_DATE),
('Tomato', 2500.00, 'Pune Market', 'Maharashtra', CURRENT_DATE),
('Potato', 1850.00, 'Nashik Market', 'Maharashtra', CURRENT_DATE),
('Soybean', 4200.00, 'Latur Market', 'Maharashtra', CURRENT_DATE),
-- Punjab
('Wheat', 2200.00, 'Amritsar Mandi', 'Punjab', CURRENT_DATE),
('Paddy', 1950.00, 'Patiala Mandi', 'Punjab', CURRENT_DATE),
('Cotton', 5800.00, 'Bathinda Market', 'Punjab', CURRENT_DATE),
-- Uttar Pradesh
('Sugarcane', 3100.00, 'Meerut Market', 'Uttar Pradesh', CURRENT_DATE),
('Potato', 1650.00, 'Agra Mandi', 'Uttar Pradesh', CURRENT_DATE),
('Wheat', 2180.00, 'Lucknow Mandi', 'Uttar Pradesh', CURRENT_DATE),
-- Karnataka
('Coffee', 8500.00, 'Hassan Market', 'Karnataka', CURRENT_DATE),
('Arecanut', 12000.00, 'Shimoga Market', 'Karnataka', CURRENT_DATE),
('Ragi', 3200.00, 'Bangalore Market', 'Karnataka', CURRENT_DATE),
-- Gujarat
('Cotton', 6100.00, 'Rajkot Market', 'Gujarat', CURRENT_DATE),
('Groundnut', 5200.00, 'Junagadh Market', 'Gujarat', CURRENT_DATE),
('Cumin', 15000.00, 'Unjha Market', 'Gujarat', CURRENT_DATE),
-- Tamil Nadu
('Rice', 2050.00, 'Chennai Market', 'Tamil Nadu', CURRENT_DATE),
('Turmeric', 7800.00, 'Erode Market', 'Tamil Nadu', CURRENT_DATE),
('Banana', 1200.00, 'Trichy Market', 'Tamil Nadu', CURRENT_DATE),
-- Haryana
('Mustard', 5500.00, 'Narnaul Mandi', 'Haryana', CURRENT_DATE),
('Bajra', 2150.00, 'Hisar Mandi', 'Haryana', CURRENT_DATE),
('Barley', 1950.00, 'Karnal Mandi', 'Haryana', CURRENT_DATE),
-- Rajasthan
('Bajra', 2200.00, 'Jodhpur Mandi', 'Rajasthan', CURRENT_DATE),
('Guar', 5200.00, 'Bikaner Market', 'Rajasthan', CURRENT_DATE),
('Jeera', 18000.00, 'Merta Market', 'Rajasthan', CURRENT_DATE),
-- Madhya Pradesh
('Soybean', 4100.00, 'Indore Market', 'Madhya Pradesh', CURRENT_DATE),
('Wheat', 2100.00, 'Bhopal Market', 'Madhya Pradesh', CURRENT_DATE),
('Gram', 4800.00, 'Ujjain Market', 'Madhya Pradesh', CURRENT_DATE),
-- West Bengal
('Rice', 1900.00, 'Kolkata Market', 'West Bengal', CURRENT_DATE),
('Jute', 4200.00, 'Barrackpore Market', 'West Bengal', CURRENT_DATE),
('Potato', 1550.00, 'Hooghly Market', 'West Bengal', CURRENT_DATE);

-- Add more agricultural news
INSERT INTO public.farmer_news (title, content, category, published_at) VALUES
('Record Wheat Production Expected This Year', 'Favorable weather conditions and government support schemes are expected to lead to record wheat production across northern states. Farmers are advised to ensure proper storage facilities.', 'Market', NOW() - INTERVAL '1 day'),
('New Mobile App for Soil Testing Launched', 'The agriculture ministry has launched a mobile app that helps farmers get instant soil health reports and fertilizer recommendations using smartphone cameras.', 'Technology', NOW() - INTERVAL '2 days'),
('Minimum Support Price Increased for Kharif Crops', 'Government announces 5-7% increase in MSP for paddy, cotton, and pulses. This move is expected to benefit over 10 crore farmers across the country.', 'Schemes', NOW() - INTERVAL '3 days'),
('Drip Irrigation Subsidy Extended Till March 2025', 'Farmers can avail up to 55% subsidy on drip and sprinkler irrigation systems. The scheme has been extended due to high demand from water-scarce regions.', 'Schemes', NOW() - INTERVAL '4 days'),
('Organic Farming: Success Stories from Kerala', 'Kerala farmers share their journey of transitioning to organic farming, achieving 40% higher profits while improving soil health and reducing chemical usage.', 'Technology', NOW() - INTERVAL '5 days'),
('Weather Alert: Heavy Rainfall Expected in Western Ghats', 'IMD issues advisory for farmers in Maharashtra and Karnataka to take precautions for their standing crops. Proper drainage arrangements recommended.', 'Weather', NOW() - INTERVAL '6 days'),
('Export Opportunities for Indian Spices Grow', 'International demand for Indian spices increases by 25%. Government provides support for quality certification and export documentation.', 'Market', NOW() - INTERVAL '7 days'),
('New Pest Control Methods Using Drones', 'Agricultural universities demonstrate drone-based precision spraying that reduces pesticide use by 30% while improving effectiveness.', 'Technology', NOW() - INTERVAL '8 days'),
('PM-KISAN: Next Installment Release Date Announced', 'The government will release the next installment of PM-KISAN scheme on 15th of this month. Farmers advised to verify their bank account details.', 'Schemes', NOW() - INTERVAL '9 days'),
('Cotton Prices Surge Due to Global Demand', 'Indian cotton exports see 20% increase. Farmers growing cotton expected to get better prices in the coming months.', 'Market', NOW() - INTERVAL '10 days');

-- Add more government schemes
INSERT INTO public.government_schemes (title, description, eligibility, benefits, how_to_apply, state) VALUES
('Kisan Credit Card (KCC)', 'Provides farmers with timely credit support for agricultural operations', 'All farmers with land holdings. Also available for tenant farmers, oral lessees, and sharecroppers', 'Credit up to ₹3 lakh at 4% interest rate with 3% interest subvention. No collateral required for loans up to ₹1.6 lakh', 'Apply through any bank branch or cooperative society with land records and KYC documents', 'All India'),
('National Mission for Sustainable Agriculture', 'Promotes sustainable agriculture through soil health management and resource conservation', 'All farmers across the country', 'Financial assistance for soil testing, organic farming, and water conservation practices', 'Contact District Agriculture Office or apply through state agriculture portal', 'All India'),
('Paramparagat Krishi Vikas Yojana (PKVY)', 'Promotes organic farming through cluster approach', 'Groups of 50 or more farmers forming clusters', 'Financial assistance of ₹50,000 per hectare for 3 years including certification costs', 'Form farmer groups and apply through State Agriculture Department', 'All India'),
('National Agriculture Market (e-NAM)', 'Electronic trading portal for agricultural commodities', 'All farmers can sell their produce on e-NAM platform', 'Better price discovery, transparent auction system, online payment', 'Register on enam.gov.in portal with mobile number and Aadhaar', 'All India'),
('Agricultural Mechanization Sub-Mission', 'Promotes farm mechanization for small and marginal farmers', 'Individual farmers, FPOs, and Self Help Groups', 'Subsidy ranging from 40-80% on agricultural equipment', 'Apply through District Agriculture Machinery Officer', 'All India'),
('National Food Security Mission', 'Aims to increase production of rice, wheat, pulses and coarse cereals', 'All farmers growing targeted crops', 'Free distribution of quality seeds, financial assistance for inputs, and training', 'Contact District Agriculture Officer or Krishi Vigyan Kendra', 'All India'),
('Rashtriya Krishi Vikas Yojana (RKVY)', 'Provides flexibility to states for agriculture development', 'States prepare their agriculture development plans', 'Infrastructure development, seed production, market facilities', 'Implemented through State Agriculture Departments', 'All India'),
('Price Support Scheme (PSS)', 'Procurement of pulses, oilseeds at MSP when market prices fall', 'Farmers growing notified pulses and oilseeds', 'Guaranteed purchase at Minimum Support Price', 'Register with designated procurement agencies at time of harvest', 'All India'),
('Kisan Vikas Patra', 'Small savings scheme for farmers to double their investment', 'All farmers and citizens', 'Investment doubles in 115 months with guaranteed returns', 'Available at all post offices and banks', 'All India'),
('Mukhyamantri Kisan Sahay Yojana', 'Crop insurance for small farmers affected by natural calamities', 'Farmers with less than 4 hectares land in Gujarat', 'Compensation up to ₹20,000 per hectare for crop loss', 'Automatic coverage for eligible farmers', 'Gujarat');