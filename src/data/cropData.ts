import riceImg from '@/assets/crops/rice.jpg';
import wheatImg from '@/assets/crops/wheat.jpg';
import maizeImg from '@/assets/crops/maize.jpg';
import cottonImg from '@/assets/crops/cotton.jpg';
import sugarcaneImg from '@/assets/crops/sugarcane.jpg';
import tomatoImg from '@/assets/crops/tomato.jpg';
import potatoImg from '@/assets/crops/potato.jpg';
import onionImg from '@/assets/crops/onion.jpg';
import soybeanImg from '@/assets/crops/soybean.jpg';
import groundnutImg from '@/assets/crops/groundnut.jpg';
import mustardImg from '@/assets/crops/mustard.jpg';
import barleyImg from '@/assets/crops/barley.jpg';
import chickpeaImg from '@/assets/crops/chickpea.jpg';
import sunflowerImg from '@/assets/crops/sunflower.jpg';
import teaImg from '@/assets/crops/tea.jpg';
import bananaImg from '@/assets/crops/banana.jpg';
import mangoImg from '@/assets/crops/mango.jpg';
import chiliImg from '@/assets/crops/chili.jpg';
import gingerImg from '@/assets/crops/ginger.jpg';
import coconutImg from '@/assets/crops/coconut.jpg';
import peasImg from '@/assets/crops/peas.jpg';
import carrotImg from '@/assets/crops/carrot.jpg';
import brinjalImg from '@/assets/crops/brinjal.jpg';
import cauliflowerImg from '@/assets/crops/cauliflower.jpg';
import cabbageImg from '@/assets/crops/cabbage.jpg';
import okraImg from '@/assets/crops/okra.jpg';
import watermelonImg from '@/assets/crops/watermelon.jpg';
import pomegranateImg from '@/assets/crops/pomegranate.jpg';
import garlicImg from '@/assets/crops/garlic.jpg';
import papayaImg from '@/assets/crops/papaya.jpg';
import juteImg from '@/assets/crops/jute.jpg';
import coffeeImg from '@/assets/crops/coffee.jpg';
import guavaImg from '@/assets/crops/guava.jpg';
import moongImg from '@/assets/crops/moong.jpg';
import sesameImg from '@/assets/crops/sesame.jpg';
import pigeonpeaImg from '@/assets/crops/pigeonpea.jpg';
import lentilImg from '@/assets/crops/lentil.jpg';
import blackgramImg from '@/assets/crops/blackgram.jpg';
import rubberImg from '@/assets/crops/rubber.jpg';
import safflowerImg from '@/assets/crops/safflower.jpg';

export interface Crop {
  name: string;
  season: string;
  duration: string;
  soil: string;
  climate: string;
  water: string;
  category: string;
  image: string;
  steps: string[];
  products: string[];
  tips: string;
}

export const crops: Crop[] = [
  {
    name: 'Rice (Paddy)', season: 'Kharif', duration: '120-150 days', soil: 'Clayey loam, alluvial', climate: '20-37°C', water: 'High', category: 'Cereal', image: riceImg,
    steps: ['Prepare nursery bed and sow pre-germinated seeds', 'Transplant 25-30 day old seedlings to puddled field', 'Maintain 5cm standing water during vegetative stage', 'Apply NPK fertilizer in 3 split doses', 'Control weeds within first 30 days', 'Monitor for stem borer, leaf folder, blast disease', 'Drain water 15 days before harvest', 'Harvest when 80% grains turn golden yellow'],
    products: ['White Rice', 'Brown Rice', 'Rice Flour', 'Rice Bran Oil', 'Puffed Rice (Murmura)', 'Rice Vinegar', 'Rice Starch', 'Sake/Rice Wine'],
    tips: 'Use SRI method to reduce water use by 40% while increasing yield.',
  },
  {
    name: 'Wheat', season: 'Rabi', duration: '110-130 days', soil: 'Well-drained loamy', climate: '10-25°C', water: 'Moderate', category: 'Cereal', image: wheatImg,
    steps: ['Prepare fine tilth by 2-3 ploughings', 'Treat seeds with Thiram/Carbendazim', 'Sow seeds in rows 20-22.5 cm apart', 'First irrigation at 20-25 DAS', 'Top dress with urea at tillering and boot stage', 'Apply 5-6 irrigations at critical stages', 'Control Phalaris minor weed', 'Harvest at golden yellow stage'],
    products: ['Wheat Flour (Atta)', 'Maida (Refined Flour)', 'Suji/Rava (Semolina)', 'Bread', 'Pasta', 'Biscuits', 'Daliya (Broken Wheat)', 'Beer'],
    tips: 'Zero tillage sowing after rice saves cost and time.',
  },
  {
    name: 'Maize (Corn)', season: 'Kharif / Rabi', duration: '90-120 days', soil: 'Sandy loam', climate: '21-30°C', water: 'Moderate', category: 'Cereal', image: maizeImg,
    steps: ['Deep ploughing and add FYM (10 t/ha)', 'Sow seeds at 60×20 cm spacing', 'Apply basal NPK and zinc sulphate', 'Thin seedlings at 10-15 DAS', 'Top dress nitrogen at knee-high and tasseling', 'Irrigate at critical stages', 'Scout for fall armyworm and stem borer', 'Harvest when husks turn brown'],
    products: ['Cornmeal/Makki Atta', 'Corn Oil', 'Popcorn', 'Corn Starch', 'Corn Syrup', 'Corn Flakes', 'Ethanol/Biofuel', 'Animal Feed'],
    tips: 'Intercropping maize with legumes improves soil fertility and income.',
  },
  {
    name: 'Cotton', season: 'Kharif', duration: '150-180 days', soil: 'Black cotton soil', climate: '25-35°C', water: 'Moderate', category: 'Fiber', image: cottonImg,
    steps: ['Deep plough in summer; prepare ridges & furrows', 'Treat seeds with imidacloprid', 'Sow Bt cotton seeds at 90×60 cm', 'Apply NPK; 50% N basal, rest in splits', 'Install pheromone traps for bollworm', 'Spray neem-based pesticide', 'Pinch terminal bud after 90 days', 'Pick bolls in 3-4 pickings when opened'],
    products: ['Cotton Fabric', 'Cotton Seed Oil', 'Cotton Thread/Yarn', 'Cotton Seed Cake (Animal Feed)', 'Surgical Cotton', 'Denim', 'Cotton Wicks', 'Cellulose'],
    tips: 'Grow refuge crop (non-Bt) on 20% area to delay pest resistance.',
  },
  {
    name: 'Sugarcane', season: 'Spring / Autumn', duration: '10-12 months', soil: 'Deep rich loamy', climate: '20-35°C', water: 'High', category: 'Cash Crop', image: sugarcaneImg,
    steps: ['Prepare deep furrows 75-90 cm apart with FYM', 'Select disease-free setts with 2-3 buds', 'Treat setts in carbendazim solution', 'Place setts in furrows and cover', 'Irrigate every 7-10 days', 'Earthing up at 90 and 120 days', 'Apply nitrogen in 3 splits', 'Harvest when brix reading >18'],
    products: ['Sugar (White/Brown)', 'Jaggery (Gur)', 'Sugarcane Juice', 'Molasses', 'Ethanol/Biofuel', 'Rum', 'Bagasse (Fuel)', 'Paper/Cardboard'],
    tips: 'Trench planting with drip irrigation increases yield by 20-30%.',
  },
  {
    name: 'Tomato', season: 'Rabi / Year-round', duration: '90-120 days', soil: 'Sandy loam, pH 6-7', climate: '20-27°C', water: 'Regular', category: 'Vegetable', image: tomatoImg,
    steps: ['Raise seedlings in pro-trays', 'Transplant at 60×45 cm spacing', 'Apply FYM and NPK; mulch with straw', 'Install drip irrigation', 'Stake or trellis plants', 'Prune suckers below first flower cluster', 'Spray copper fungicide for blight', 'Harvest at breaker stage for markets'],
    products: ['Tomato Ketchup', 'Tomato Paste/Puree', 'Tomato Sauce', 'Sun-dried Tomatoes', 'Canned Tomatoes', 'Tomato Juice', 'Tomato Soup Powder', 'Pickled Tomatoes'],
    tips: 'Grafting onto disease-resistant rootstock eliminates soil-borne wilt.',
  },
  {
    name: 'Potato', season: 'Rabi', duration: '75-120 days', soil: 'Sandy loam', climate: '15-25°C', water: 'Moderate', category: 'Vegetable', image: potatoImg,
    steps: ['Use certified seed tubers (25-40g)', 'Treat tubers with mancozeb', 'Plant in ridges at 60×20 cm', 'Irrigate lightly; avoid waterlogging', 'Apply NPK basal; top dress N at earthing up', 'Earth up at 30 and 45 DAS', 'Monitor for late blight', 'Haulm cutting 10 days before harvest'],
    products: ['Potato Chips', 'French Fries', 'Potato Starch', 'Potato Flour', 'Vodka', 'Frozen Potato Products', 'Dehydrated Potato Flakes', 'Potato Papad'],
    tips: 'Cold storage at 2-4°C extends storage life to 6-8 months.',
  },
  {
    name: 'Onion', season: 'Rabi / Kharif', duration: '130-150 days', soil: 'Well-drained loamy', climate: '15-30°C', water: 'Moderate', category: 'Vegetable', image: onionImg,
    steps: ['Raise nursery; transplant at 45-50 days', 'Transplant at 15×10 cm spacing', 'Apply FYM and NPK at transplanting', 'Irrigate every 7-10 days', 'Weed manually or with pendimethalin', 'Spray mancozeb for purple blotch', 'Harvest when 50% tops fall over', 'Cure bulbs in shade for 7-10 days'],
    products: ['Onion Powder', 'Dehydrated Onion Flakes', 'Onion Paste', 'Onion Oil', 'Pickled Onions', 'Onion Rings', 'Onion Salt', 'Onion Juice'],
    tips: 'Store in ventilated bamboo structures to reduce losses to under 10%.',
  },
  {
    name: 'Soybean', season: 'Kharif', duration: '85-120 days', soil: 'Clay loam', climate: '25-30°C', water: 'Moderate', category: 'Oilseed', image: soybeanImg,
    steps: ['Inoculate seeds with Rhizobium culture', 'Sow at 45×5 cm after monsoon onset', 'Apply phosphorus and potash as basal', 'No nitrogen needed (biological fixation)', 'Pre-emergence herbicide + hand weeding', 'Monitor for girdle beetle and stem fly', 'Ensure proper drainage', 'Harvest when leaves yellow and pods brown'],
    products: ['Soybean Oil', 'Soy Milk', 'Tofu', 'Soy Sauce', 'Soy Flour', 'Soy Protein Isolate', 'Soy Lecithin', 'Animal Feed (Soy Meal)'],
    tips: 'Soybean-wheat is one of the most profitable crop rotations.',
  },
  {
    name: 'Groundnut (Peanut)', season: 'Kharif / Summer', duration: '100-130 days', soil: 'Sandy loam', climate: '25-35°C', water: 'Moderate', category: 'Oilseed', image: groundnutImg,
    steps: ['Select bold kernels; treat with Thiram + Rhizobium', 'Sow at 30×10 cm after pre-monsoon showers', 'Apply gypsum at 500 kg/ha at flowering', 'Apply SSP as phosphorus source', 'Earth up at 30-35 DAS', 'Maintain moisture during pegging & pod filling', 'Control tikka disease with chlorothalonil', 'Harvest when shell shows dark marks'],
    products: ['Peanut Butter', 'Groundnut Oil', 'Roasted Peanuts', 'Peanut Chikki', 'Peanut Flour', 'Peanut Milk', 'Animal Feed Cake', 'Peanut Brittle'],
    tips: 'Apply calcium (gypsum) at flowering to improve pod filling.',
  },
  {
    name: 'Mustard', season: 'Rabi', duration: '110-140 days', soil: 'Loamy to sandy loam', climate: '10-25°C', water: 'Low', category: 'Oilseed', image: mustardImg,
    steps: ['Prepare fine seedbed with 2 ploughings', 'Sow seeds at 30×10 cm spacing in October-November', 'Apply NPK basal dose; sulphur is essential', 'First irrigation at 25-30 DAS', 'Apply 2-3 irrigations at critical stages', 'Spray imidacloprid for aphid control', 'Harvest when 75% pods turn brown', 'Thresh after sun drying for 3-4 days'],
    products: ['Mustard Oil', 'Mustard Paste/Sauce', 'Mustard Seeds (Spice)', 'Mustard Cake (Animal Feed)', 'Mustard Greens (Sarson ka Saag)', 'Mustard Powder', 'Pickles'],
    tips: 'Bee-keeping alongside mustard fields increases yield by 20-30% through better pollination.',
  },
  {
    name: 'Barley', season: 'Rabi', duration: '100-120 days', soil: 'Loamy, saline-tolerant', climate: '12-25°C', water: 'Low', category: 'Cereal', image: barleyImg,
    steps: ['Prepare firm seedbed with 2-3 ploughings', 'Sow seeds at 22.5 cm row spacing', 'Apply NPK at sowing', 'Give 2-3 irrigations at critical stages', 'Control weeds with isoproturon', 'Monitor for stripe rust disease', 'Harvest when ears turn golden and straw brittle', 'Thresh after 2-3 days of sun drying'],
    products: ['Pearl Barley', 'Barley Flour', 'Barley Malt', 'Beer', 'Whiskey', 'Barley Water', 'Animal Feed', 'Barley Grass Powder'],
    tips: 'Most drought and salinity tolerant cereal — ideal for marginal lands.',
  },
  {
    name: 'Chickpea (Chana)', season: 'Rabi', duration: '90-120 days', soil: 'Well-drained sandy loam', climate: '15-30°C', water: 'Low', category: 'Pulse', image: chickpeaImg,
    steps: ['Treat seeds with Rhizobium + Trichoderma', 'Sow at 30×10 cm spacing in October', 'Apply phosphorus and potash; minimal nitrogen', 'Pre-emergence weed control with pendimethalin', 'Irrigate only at critical stages (flowering, pod filling)', 'Monitor for pod borer; use NPV spray', 'Harvest when leaves dry and pods turn brown', 'Sun dry plants; thresh carefully'],
    products: ['Chana Dal', 'Besan (Gram Flour)', 'Roasted Chana', 'Hummus', 'Canned Chickpeas', 'Chana Sattu', 'Falafel Mix', 'Chickpea Protein Powder'],
    tips: 'Chickpea fixes atmospheric nitrogen — enriches soil for next crop.',
  },
  {
    name: 'Pigeon Pea (Arhar/Tur)', season: 'Kharif', duration: '150-270 days', soil: 'Well-drained loamy', climate: '18-30°C', water: 'Low', category: 'Pulse', image: pigeonpeaImg,
    steps: ['Treat seeds with Rhizobium culture', 'Sow at 60-75×15-20 cm in June-July', 'Apply phosphorus-rich fertilizer', 'Weed at 30 and 60 DAS', 'Intercrop with short-duration crops', 'Monitor for pod borer; install pheromone traps', 'Harvest when 80% pods turn brown', 'Sun dry and thresh'],
    products: ['Tur/Arhar Dal', 'Canned Pigeon Peas', 'Dal Powder Mix', 'Animal Fodder', 'Green Vegetable (young pods)', 'Firewood (stalks)'],
    tips: 'Short-duration varieties (ICPL 87119) mature in 120 days for double cropping.',
  },
  {
    name: 'Green Gram (Moong)', season: 'Kharif / Summer', duration: '60-75 days', soil: 'Sandy loam', climate: '25-35°C', water: 'Low', category: 'Pulse', image: moongImg,
    steps: ['Treat seeds with Rhizobium inoculant', 'Sow at 30×10 cm spacing', 'Apply phosphorus as basal dose', 'One light irrigation at flowering if dry', 'Weed at 20-25 DAS', 'Monitor for yellow mosaic virus; spray imidacloprid', 'Harvest in 2-3 pickings as pods mature', 'Sun dry and thresh'],
    products: ['Moong Dal', 'Moong Sprouts', 'Moong Flour', 'Moong Papad', 'Bean Thread Noodles', 'Moong Halwa Premix', 'Green Gram Soup'],
    tips: 'Excellent short-duration catch crop between Rabi harvest and Kharif sowing.',
  },
  {
    name: 'Black Gram (Urad)', season: 'Kharif', duration: '70-90 days', soil: 'Loamy to clay loam', climate: '25-35°C', water: 'Low', category: 'Pulse', image: blackgramImg,
    steps: ['Treat seeds with Rhizobium + PSB', 'Sow at 30×10 cm in June-July', 'Apply recommended phosphorus dose', 'Weed at 20-25 DAS', 'No irrigation usually needed (rain-fed)', 'Monitor for yellow mosaic virus', 'Harvest when 80% pods turn black', 'Sun dry and thresh'],
    products: ['Urad Dal', 'Urad Flour', 'Papad', 'Idli/Dosa Batter', 'Medu Vada Mix', 'Manchurian Mix', 'Dal Makhani Premix'],
    tips: 'Essential for South Indian cuisine — growing demand ensures good prices.',
  },
  {
    name: 'Lentil (Masoor)', season: 'Rabi', duration: '100-120 days', soil: 'Loamy, well-drained', climate: '15-25°C', water: 'Low', category: 'Pulse', image: lentilImg,
    steps: ['Treat seeds with Rhizobium culture', 'Sow at 25×5 cm in October-November', 'Apply phosphorus and potash', 'Pre-emergence herbicide for weed control', 'One irrigation at pod filling if dry', 'Monitor for rust and wilt disease', 'Harvest when pods turn brown', 'Sun dry and thresh'],
    products: ['Red/Brown Lentils (Masoor Dal)', 'Lentil Soup', 'Lentil Flour', 'Canned Lentils', 'Lentil Chips/Snacks', 'Sprouted Lentils', 'Dal Premix'],
    tips: 'Lentils are among the most protein-rich pulses at 25% protein content.',
  },
  {
    name: 'Sesame (Til)', season: 'Kharif', duration: '80-95 days', soil: 'Sandy loam, well-drained', climate: '25-35°C', water: 'Low', category: 'Oilseed', image: sesameImg,
    steps: ['Prepare fine tilth seedbed', 'Sow at 30-45×15 cm in June-July', 'Apply NPK with sulphur at sowing', 'Thin seedlings at 15 DAS', 'Weed at 15 and 30 DAS', 'Irrigate once at flowering if dry', 'Harvest when lower capsules turn brown', 'Stack bundles vertically for drying'],
    products: ['Sesame Oil (Til Oil)', 'Tahini Paste', 'Til Ladoo/Chikki', 'Sesame Seeds (Whole)', 'Sesame Butter', 'Halvah', 'Gomashio (Sesame Salt)'],
    tips: 'Called "Queen of Oilseeds" — commands premium prices in export markets.',
  },
  {
    name: 'Sunflower', season: 'Kharif / Rabi', duration: '80-100 days', soil: 'Well-drained loamy', climate: '20-30°C', water: 'Moderate', category: 'Oilseed', image: sunflowerImg,
    steps: ['Sow at 60×30 cm spacing', 'Apply NPK + boron at sowing', 'Irrigate at star bud, flowering, and seed-filling stages', 'Bee colonies improve pollination significantly', 'Support heavy heads to prevent lodging', 'Monitor for head rot; spray mancozeb', 'Harvest when back of head turns brown', 'Dry heads in sun; thresh seeds'],
    products: ['Sunflower Oil', 'Sunflower Seeds (Snack)', 'Sunflower Butter', 'Sunflower Meal (Animal Feed)', 'Bird Feed', 'Sunflower Lecithin', 'Cosmetic Oil'],
    tips: 'Keep 2-3 bee hives per hectare for 30-40% higher seed setting.',
  },
  {
    name: 'Safflower', season: 'Rabi', duration: '120-150 days', soil: 'Deep black soil', climate: '15-30°C', water: 'Very Low', category: 'Oilseed', image: safflowerImg,
    steps: ['Prepare seedbed with deep ploughing', 'Sow at 45×20 cm in September-October', 'Apply phosphorus and potash at sowing', 'Extremely drought-tolerant; minimal irrigation', 'Weed at 30 DAS', 'Monitor for aphids', 'Harvest when plants dry completely', 'Thresh to separate seeds'],
    products: ['Safflower Oil', 'Natural Dye (from flowers)', 'Herbal Tea', 'Food Coloring', 'Animal Feed', 'Cosmetics Ingredient'],
    tips: 'Most drought-tolerant oilseed — grows well on residual moisture only.',
  },
  {
    name: 'Jute', season: 'Kharif', duration: '120-150 days', soil: 'Alluvial, loamy', climate: '24-37°C (high humidity)', water: 'High', category: 'Fiber', image: juteImg,
    steps: ['Broadcast or line sow in March-May', 'Apply NPK at sowing', 'Thin plants at 15-20 DAS', 'Weed 2-3 times in first 45 days', 'Irrigate regularly during dry spells', 'Harvest at small pod stage (120 days)', 'Ret (soak) stems for 10-15 days', 'Strip fibers and sun dry'],
    products: ['Jute Bags/Sacks', 'Jute Fabric', 'Jute Rope/Twine', 'Jute Carpet Backing', 'Geo-textiles', 'Jute Handicrafts', 'Jute Composites', 'Paper Pulp'],
    tips: '"Golden Fiber" — biodegradable alternative to plastic bags with growing demand.',
  },
  {
    name: 'Tea', season: 'Perennial', duration: '3 years to first harvest', soil: 'Acidic (pH 4.5-5.5), well-drained', climate: '13-30°C, high humidity', water: 'Regular rainfall', category: 'Plantation', image: teaImg,
    steps: ['Propagate from cuttings in nursery', 'Transplant at 1.2×0.6 m spacing', 'Apply shade trees for young plants', 'Mulch heavily with green leaves', 'Apply NPK + zinc + sulfur fertilizers', 'Prune to maintain table height (60-75 cm)', 'Pluck two leaves and a bud every 7-10 days', 'Process within 24 hours of plucking'],
    products: ['Black Tea', 'Green Tea', 'White Tea', 'Oolong Tea', 'Tea Powder', 'Instant Tea', 'Tea Extract', 'Kombucha'],
    tips: 'Small tea growers can earn premium by producing specialty/organic tea.',
  },
  {
    name: 'Coffee', season: 'Perennial', duration: '3-4 years to first harvest', soil: 'Rich volcanic/laterite, acidic', climate: '15-28°C, shade loving', water: 'Regular rainfall', category: 'Plantation', image: coffeeImg,
    steps: ['Raise seedlings in shaded nursery', 'Transplant at 2×2 m under shade trees', 'Apply organic mulch around base', 'Apply NPK fertilizer in 2 splits', 'Prune to maintain manageable height', 'Control coffee berry borer with traps', 'Harvest ripe red cherries by hand', 'Process: pulp, ferment, wash, dry'],
    products: ['Roasted Coffee Beans', 'Ground Coffee', 'Instant Coffee', 'Coffee Extract', 'Cold Brew Concentrate', 'Coffee Liqueur', 'Coffee Oil (Cosmetics)', 'Cascara Tea'],
    tips: 'Shade-grown coffee has superior flavor and fetches higher prices.',
  },
  {
    name: 'Rubber', season: 'Perennial', duration: '6-7 years to first tapping', soil: 'Deep laterite, well-drained', climate: '25-35°C, high rainfall', water: 'High rainfall areas', category: 'Plantation', image: rubberImg,
    steps: ['Plant budded stumps at 5×5 m spacing', 'Apply cover crops between rows', 'Apply fertilizers based on leaf analysis', 'Begin tapping at 50 cm girth (6-7 years)', 'Tap bark in spiral cuts every alternate day', 'Collect latex in cups attached to trunk', 'Process latex within 6 hours', 'Coagulate and sheet for drying'],
    products: ['Natural Rubber Sheets', 'Latex (Liquid)', 'Tires', 'Gloves', 'Balloons', 'Rubber Bands', 'Footwear', 'Mattresses/Foam'],
    tips: 'Intercrop with pineapple, banana, or cocoa during immature phase for income.',
  },
  {
    name: 'Coconut', season: 'Perennial', duration: '5-6 years to first harvest', soil: 'Sandy loam, coastal', climate: '27-32°C', water: 'Regular', category: 'Plantation', image: coconutImg,
    steps: ['Select quality seedlings from mother palms', 'Plant in pits (1×1×1 m) at 7.5×7.5 m', 'Apply organic manure and NPK annually', 'Irrigate regularly; basin or drip irrigation', 'Mulch basin with coconut husks', 'Intercrop with banana, cocoa, or pepper', 'Harvest every 45 days when nuts mature', 'Process within a week of harvest'],
    products: ['Coconut Oil', 'Coconut Water', 'Coconut Milk/Cream', 'Desiccated Coconut', 'Copra', 'Coir (Fiber)', 'Coconut Shell Charcoal', 'Virgin Coconut Oil'],
    tips: '"Tree of Life" — every part is commercially valuable.',
  },
  {
    name: 'Banana', season: 'Year-round planting', duration: '11-14 months', soil: 'Rich loamy, well-drained', climate: '25-35°C', water: 'High', category: 'Fruit', image: bananaImg,
    steps: ['Select disease-free tissue culture plants', 'Plant in pits at 1.8×1.8 m spacing', 'Apply FYM + NPK at planting', 'Irrigate every 3-4 days; drip preferred', 'Desuckering: retain one follower sucker', 'Prop plants to prevent toppling', 'Spray for sigatoka leaf spot', 'Harvest when fingers are plump and angular edges round off'],
    products: ['Fresh Banana', 'Banana Chips', 'Banana Powder/Flour', 'Banana Puree', 'Dried Banana', 'Banana Wine', 'Banana Fiber (Fabric)', 'Banana Stem Juice'],
    tips: 'Tissue culture plants give uniform crop and 20-30% higher yields.',
  },
  {
    name: 'Mango', season: 'Perennial (fruit: March-July)', duration: '5-8 years to first fruit', soil: 'Deep alluvial, well-drained', climate: '24-30°C', water: 'Low once established', category: 'Fruit', image: mangoImg,
    steps: ['Plant grafted saplings at 10×10 m spacing', 'Apply FYM and NPK annually', 'Irrigate regularly during first 3 years', 'Prune to shape and remove dead wood', 'Spray for mango hopper and powdery mildew', 'Apply paclobutrazol for regular bearing', 'Harvest when fruits develop color at shoulder', 'Grade, treat with hot water, and pack'],
    products: ['Mango Pulp', 'Mango Pickle (Achar)', 'Mango Juice', 'Aam Papad', 'Mango Jam', 'Dried Mango', 'Mango Chutney', 'Mango Ice Cream'],
    tips: 'High-density planting (5×5 m) can triple yield in early years.',
  },
  {
    name: 'Papaya', season: 'Year-round', duration: '9-12 months to first fruit', soil: 'Well-drained sandy loam', climate: '25-35°C', water: 'Regular', category: 'Fruit', image: papayaImg,
    steps: ['Raise seedlings in polybags', 'Transplant at 2×2 m spacing', 'Apply FYM and NPK in monthly doses', 'Irrigate every 4-5 days; avoid waterlogging', 'Remove side shoots regularly', 'Spray for papaya ring spot virus control', 'Harvest when skin shows yellow tinge', 'Handle carefully to avoid bruising'],
    products: ['Fresh Papaya', 'Papaya Pulp', 'Papaya Enzyme (Papain)', 'Dried Papaya', 'Papaya Juice', 'Papaya Face Pack', 'Papaya Jam', 'Green Papaya Salad'],
    tips: 'Papain extraction from raw fruit adds 40% extra income.',
  },
  {
    name: 'Guava', season: 'Perennial (2 seasons)', duration: '2-3 years to first fruit', soil: 'Well-drained, tolerates poor soil', climate: '23-28°C', water: 'Moderate', category: 'Fruit', image: guavaImg,
    steps: ['Plant air-layered or grafted saplings at 6×6 m', 'Apply FYM and NPK annually', 'Irrigate every 10-15 days', 'Prune after harvest to induce new growth', 'Thin flowers for larger fruit size', 'Bag fruits for premium quality', 'Spray for fruit fly with methyl eugenol traps', 'Harvest when color changes from green to light yellow'],
    products: ['Guava Juice', 'Guava Jam/Jelly', 'Guava Cheese', 'Dried Guava', 'Guava Nectar', 'Guava Pulp', 'Guava Toffee'],
    tips: 'Crop regulation by bahar treatment gives off-season crop at premium prices.',
  },
  {
    name: 'Pomegranate', season: 'Perennial', duration: '2-3 years to first fruit', soil: 'Well-drained loamy', climate: '25-35°C', water: 'Low once established', category: 'Fruit', image: pomegranateImg,
    steps: ['Plant air-layered cuttings at 5×5 m', 'Apply FYM + NPK + micronutrients', 'Irrigate via drip; stress for bahar treatment', 'Prune dead/diseased branches after harvest', 'Induce stress by withholding water for 45 days', 'Give rest breaking irrigation + fertilizer', 'Bag fruits to prevent fruit borer and sun scald', 'Harvest when fruit makes metallic sound on tapping'],
    products: ['Fresh Arils', 'Pomegranate Juice', 'Anardana (Dried Seeds)', 'Pomegranate Molasses', 'Pomegranate Wine', 'Pomegranate Extract', 'Cosmetics/Skincare'],
    tips: 'Maharashtra produces 70% of India\'s pomegranate — export demand is growing rapidly.',
  },
  {
    name: 'Watermelon', season: 'Summer', duration: '80-110 days', soil: 'Sandy loam', climate: '25-35°C', water: 'Moderate', category: 'Fruit', image: watermelonImg,
    steps: ['Prepare raised beds or mounds', 'Sow seeds at 2×1.5 m spacing', 'Apply FYM and NPK at sowing', 'Irrigate every 5-7 days via furrow/drip', 'Mulch with black plastic to control weeds', 'Place straw under developing fruits', 'Hand-pollinate if needed for better setting', 'Harvest when tendril near fruit dries & bottom turns yellow'],
    products: ['Fresh Watermelon', 'Watermelon Juice', 'Watermelon Seeds (Snack)', 'Watermelon Rind Pickle', 'Watermelon Seed Oil', 'Frozen Watermelon Bars'],
    tips: 'Riverbed farming along dry riverbeds gives excellent watermelon yields.',
  },
  {
    name: 'Chili Pepper', season: 'Kharif / Rabi', duration: '120-150 days', soil: 'Well-drained loamy', climate: '20-30°C', water: 'Moderate', category: 'Spice', image: chiliImg,
    steps: ['Raise seedlings in nursery beds', 'Transplant at 60×45 cm at 40-45 days', 'Apply NPK + micronutrients', 'Irrigate every 7-10 days', 'Mulch to conserve moisture', 'Spray neem oil for thrips and mites', 'Harvest red ripe chilies for drying', 'Sun dry on clean floor for 8-10 days'],
    products: ['Chili Powder', 'Red Chili Flakes', 'Chili Sauce/Hot Sauce', 'Pickled Chilies', 'Oleoresin (Color Extract)', 'Capsaicin Extract', 'Dried Whole Chilies', 'Paprika'],
    tips: 'Byadagi chili commands 2-3x premium for its deep red color and low pungency.',
  },
  {
    name: 'Ginger', season: 'Kharif', duration: '8-9 months', soil: 'Rich loamy, well-drained', climate: '20-30°C', water: 'Regular', category: 'Spice', image: gingerImg,
    steps: ['Select healthy seed rhizomes (20-25g)', 'Treat with mancozeb + streptocycline', 'Plant at 25×25 cm in raised beds', 'Mulch heavily at planting and 45 DAS', 'Apply FYM + NPK in splits', 'Irrigate every 7 days; good drainage essential', 'Monitor for rhizome rot; drench with copper', 'Harvest at 8-9 months when leaves yellow'],
    products: ['Fresh Ginger', 'Dry Ginger (Sonth)', 'Ginger Powder', 'Ginger Paste', 'Ginger Oil', 'Ginger Ale', 'Candied/Crystallized Ginger', 'Ginger Tea'],
    tips: 'Intercrop ginger under coconut or arecanut plantation for shade benefit.',
  },
  {
    name: 'Garlic', season: 'Rabi', duration: '130-150 days', soil: 'Well-drained loamy', climate: '12-24°C', water: 'Moderate', category: 'Spice', image: garlicImg,
    steps: ['Select large, healthy cloves for planting', 'Plant cloves at 15×10 cm, 3 cm deep', 'Apply FYM + NPK + sulphur at planting', 'Irrigate every 7-10 days', 'Apply first irrigation immediately after planting', 'Weed at 30 and 60 DAS', 'Stop irrigation 15 days before harvest', 'Harvest when tops dry; cure for 7-10 days'],
    products: ['Fresh Garlic', 'Garlic Powder', 'Garlic Paste', 'Garlic Oil', 'Black Garlic', 'Dehydrated Garlic Flakes', 'Garlic Salt', 'Garlic Pickle'],
    tips: 'Vernalization (cold treatment) of cloves before planting improves bulb size.',
  },
  {
    name: 'Brinjal (Eggplant)', season: 'Year-round', duration: '90-120 days', soil: 'Well-drained fertile loam', climate: '25-30°C', water: 'Regular', category: 'Vegetable', image: brinjalImg,
    steps: ['Raise seedlings in nursery', 'Transplant at 60×60 cm at 4-5 weeks', 'Apply FYM and NPK at transplanting', 'Irrigate every 5-7 days', 'Stake tall varieties', 'Spray neem oil for shoot/fruit borer', 'Install pheromone traps for borer management', 'Harvest when fruits are glossy and tender'],
    products: ['Bharta/Baingan ka Bharta', 'Pickled Brinjal', 'Stuffed Brinjal', 'Brinjal Chips', 'Dried Brinjal', 'Brinjal Raita Mix'],
    tips: 'IPM (Integrated Pest Management) can reduce pesticide use by 70% in brinjal.',
  },
  {
    name: 'Okra (Bhindi)', season: 'Kharif / Summer', duration: '90-100 days', soil: 'Well-drained sandy loam', climate: '25-35°C', water: 'Moderate', category: 'Vegetable', image: okraImg,
    steps: ['Soak seeds overnight before sowing', 'Sow at 45×30 cm spacing', 'Apply FYM + NPK at sowing', 'Irrigate every 4-5 days', 'Weed at 20 and 40 DAS', 'Spray for yellow vein mosaic virus (use resistant varieties)', 'Harvest tender fruits every 2-3 days', 'Avoid overmature fruits (become fibrous)'],
    products: ['Fresh Okra', 'Dried Okra', 'Frozen Okra', 'Okra Chips', 'Bhindi Masala Mix', 'Pickled Okra', 'Okra Seed Oil'],
    tips: 'Use virus-resistant varieties (Arka Anamika) to avoid complete crop loss.',
  },
  {
    name: 'Cauliflower', season: 'Rabi', duration: '90-120 days', soil: 'Rich loamy, pH 6-7', climate: '15-20°C', water: 'Regular', category: 'Vegetable', image: cauliflowerImg,
    steps: ['Raise seedlings in nursery beds', 'Transplant at 60×45 cm at 4-5 weeks', 'Apply heavy dose of FYM + NPK + Boron', 'Irrigate every 5-7 days', 'Tie leaves over curd for blanching (white color)', 'Monitor for diamond back moth', 'Harvest when curds are compact and white', 'Cut with a few wrapper leaves for protection'],
    products: ['Fresh Cauliflower', 'Frozen Cauliflower', 'Cauliflower Rice', 'Pickled Cauliflower (Gobi Achar)', 'Cauliflower Soup Mix', 'Dehydrated Cauliflower'],
    tips: 'Apply boron (borax 10 kg/ha) to prevent hollow stem and browning.',
  },
  {
    name: 'Cabbage', season: 'Rabi', duration: '90-120 days', soil: 'Well-drained loamy', climate: '15-20°C', water: 'Regular', category: 'Vegetable', image: cabbageImg,
    steps: ['Raise seedlings in nursery', 'Transplant at 45×45 cm at 4-5 weeks', 'Apply FYM and NPK at transplanting', 'Top dress with nitrogen at 30 DAS', 'Irrigate every 7-10 days', 'Monitor for diamond back moth and cabbage worm', 'Harvest when heads are firm and compact', 'Cut leaving 2-3 wrapper leaves'],
    products: ['Fresh Cabbage', 'Sauerkraut', 'Coleslaw', 'Kimchi', 'Dehydrated Cabbage', 'Cabbage Juice', 'Frozen Cut Cabbage'],
    tips: 'Can tolerate light frost — ideal crop for higher altitude areas.',
  },
  {
    name: 'Peas', season: 'Rabi', duration: '90-120 days', soil: 'Well-drained loamy', climate: '10-20°C', water: 'Moderate', category: 'Vegetable', image: peasImg,
    steps: ['Treat seeds with Rhizobium inoculant', 'Sow at 30×5-10 cm in October-November', 'Apply phosphorus-rich fertilizer', 'Irrigate at flowering and pod filling', 'Provide support/trellis for climbing varieties', 'Monitor for powdery mildew; spray sulphur', 'Harvest green pods at tender stage', 'Pick every 5-7 days for extended harvest'],
    products: ['Fresh Green Peas', 'Frozen Peas', 'Dried Peas', 'Pea Protein Powder', 'Matar Dal', 'Pea Soup', 'Canned Peas', 'Pea Flour'],
    tips: 'Early varieties fetch 3-4x market price when sold before peak season.',
  },
  {
    name: 'Carrot', season: 'Rabi', duration: '80-100 days', soil: 'Deep sandy loam, stone-free', climate: '15-20°C', water: 'Regular', category: 'Vegetable', image: carrotImg,
    steps: ['Mix seeds with fine sand for even distribution', 'Sow in raised beds at 15×5 cm', 'Apply well-decomposed FYM; avoid fresh manure', 'Irrigate every 5-7 days', 'Thin seedlings to 5 cm apart at 20 DAS', 'Weed carefully to avoid root damage', 'Harvest when roots reach full size', 'Wash, grade, and pack in perforated bags'],
    products: ['Fresh Carrots', 'Carrot Juice', 'Carrot Halwa (Gajar Halwa)', 'Carrot Pickle', 'Dehydrated Carrot', 'Carrot Powder', 'Frozen Carrot Sticks', 'Carrot Cake Mix'],
    tips: 'Asiatic (red/desi) carrots command premium in Indian markets during winter.',
  },
];

export interface Herb {
  name: string;
  type: string;
  uses: string;
  climate: string;
  duration: string;
  steps: string[];
}

export const herbs: Herb[] = [
  { name: 'Tulsi (Holy Basil)', type: 'Medicinal', uses: 'Immunity booster, respiratory relief, religious ceremonies', climate: '20-35°C', duration: 'Perennial (harvest from 90 days)', steps: ['Propagate from seeds or stem cuttings', 'Transplant at 40×40 cm spacing', 'Apply organic manure; avoid chemicals', 'Water regularly; avoid waterlogging', 'First harvest at 90 days', 'Harvest by cutting 15 cm above ground', 'Dry leaves in shade for 3-5 days'] },
  { name: 'Turmeric (Haldi)', type: 'Spice & Medicinal', uses: 'Anti-inflammatory, cooking spice, natural dye, cosmetics', climate: '20-30°C', duration: '7-9 months', steps: ['Select healthy rhizomes with 2-3 buds', 'Treat with mancozeb solution', 'Plant in ridges at 45×25 cm', 'Mulch with green leaves', 'Irrigate every 7 days', 'Earth up at 60 and 120 days', 'Harvest when leaves yellow', 'Boil rhizomes 45-60 min, sun dry 10-15 days'] },
  { name: 'Ashwagandha', type: 'Medicinal', uses: 'Stress relief, energy booster, Ayurvedic medicine', climate: '20-38°C', duration: '150-180 days', steps: ['Sow seeds directly; broadcast/line sowing', 'Spacing: 30×10 cm on light soil', 'Minimal irrigation; rain-fed', 'Apply 10 t/ha FYM', 'Weed at 25 and 50 DAS', 'Harvest when leaves dry and berries red', 'Dig roots carefully', 'Cut roots 7-10 cm; dry in shade'] },
  { name: 'Aloe Vera', type: 'Medicinal & Cosmetic', uses: 'Skin care, digestive health, wound healing', climate: '20-35°C', duration: 'Perennial (first harvest 12 months)', steps: ['Propagate from root suckers', 'Plant at 60×45 cm on raised beds', 'Apply FYM at planting', 'Water sparingly; drought-tolerant', 'Mulch to suppress weeds', 'Harvest mature outer leaves at 12 months', 'Leave inner leaves; harvest every 45 days', 'Process gel within 3 hours'] },
  { name: 'Mint (Pudina)', type: 'Culinary & Medicinal', uses: 'Cooking, beverages, essential oil, digestive aid', climate: '15-30°C', duration: 'Perennial (first harvest 100-120 days)', steps: ['Propagate from stolons/runners', 'Plant at 60×15 cm in Feb-March', 'Apply nitrogen-rich fertilizer', 'Keep soil moist; irrigate every 5-7 days', 'Weed regularly in first 30 days', 'First harvest at 100-120 days', 'Take 3-4 harvests per year', 'Distill for menthol oil extraction'] },
  { name: 'Lemongrass', type: 'Aromatic', uses: 'Essential oil, tea, mosquito repellent', climate: '25-35°C', duration: 'Perennial (first harvest 90 days)', steps: ['Propagate by dividing clumps', 'Plant slips at 60×45 cm during monsoon', 'Apply FYM and NPK', 'Irrigate fortnightly in dry season', 'First harvest at 90 days', 'Cut leaves 10 cm above ground', 'Steam-distill for essential oil', '4-5 harvests per year possible'] },
  { name: 'Coriander (Dhania)', type: 'Culinary', uses: 'Fresh garnish, spice (seeds), essential oil', climate: '15-25°C', duration: '45-60 days (leaf), 90-120 days (seed)', steps: ['Split seeds gently; soak overnight', 'Sow in rows 20 cm apart', 'Light irrigation after sowing', 'Thin seedlings to 5 cm at 15 days', 'Apply nitrogen at 30 DAS for leaf crop', 'Harvest leaves at 45-60 days', 'For seed: let plants flower and mature', 'Thresh dried plants for seeds'] },
  { name: 'Brahmi', type: 'Medicinal', uses: 'Memory enhancement, anxiety relief, Ayurvedic medicine', climate: '25-40°C', duration: 'Perennial (first harvest 90 days)', steps: ['Propagate from stem cuttings', 'Plant in marshy areas at 20×20 cm', 'Requires abundant moisture', 'Apply organic manure', 'Harvest above-ground portion at 90 days', 'Leave 2-3 cm stem for regrowth', 'Take 3-4 harvests annually', 'Shade dry at 40°C'] },
];

// ==================== HYDROPONICS / VERTICAL FARMING ====================

import hydroLettuceImg from '@/assets/crops/hydro-lettuce.jpg';
import hydroStrawberryImg from '@/assets/crops/hydro-strawberry.jpg';
import hydroBasilImg from '@/assets/crops/hydro-basil.jpg';
import hydroTomatoImg from '@/assets/crops/hydro-tomato.jpg';
import hydroCucumberImg from '@/assets/crops/hydro-cucumber.jpg';
import hydroSpinachImg from '@/assets/crops/hydro-spinach.jpg';
import hydroPepperImg from '@/assets/crops/hydro-pepper.jpg';
import hydroKaleImg from '@/assets/crops/hydro-kale.jpg';
import hydroMintImg from '@/assets/crops/hydro-mint.jpg';
import hydroMicrogreensImg from '@/assets/crops/hydro-microgreens.jpg';
import hydroCherryTomatoImg from '@/assets/crops/hydro-cherry-tomato.jpg';
import hydroBokchoyImg from '@/assets/crops/hydro-bokchoy.jpg';

export interface HydroponicCrop {
  name: string;
  image: string;
  system: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  growthTime: string;
  phRange: string;
  ecRange: string;
  lightHours: string;
  temperature: string;
  spacing: string;
  yieldPerPlant: string;
  nutrients: string;
  steps: string[];
  products: string[];
  tips: string;
  benefits: string[];
}

export const hydroponicCrops: HydroponicCrop[] = [
  {
    name: 'Lettuce', image: hydroLettuceImg, system: 'NFT / DWC / Raft', difficulty: 'Beginner',
    growthTime: '30-45 days', phRange: '5.5-6.5', ecRange: '0.8-1.2 mS/cm', lightHours: '12-16 hrs',
    temperature: '15-22°C', spacing: '15-20 cm', yieldPerPlant: '150-300g', nutrients: 'Low N-P-K, Calcium rich',
    steps: ['Germinate seeds in rockwool cubes or coco plugs for 7-10 days', 'Transfer seedlings to NFT channels or DWC rafts when 3-4 true leaves appear', 'Maintain nutrient solution at EC 0.8-1.2 and pH 5.5-6.5', 'Ensure water temperature stays below 22°C to prevent tip burn', 'Provide 12-16 hours of light (LED grow lights or natural)', 'Monitor for aphids and powdery mildew; use neem oil if needed', 'Harvest outer leaves first for continuous production (cut-and-come-again)', 'Full harvest at 30-45 days when heads are firm and full'],
    products: ['Fresh Salad Greens', 'Sandwich Wraps', 'Smoothie Ingredient', 'Garnish'],
    tips: 'Lettuce is the #1 recommended crop for hydroponic beginners. Use butterhead varieties for best results in DWC systems.',
    benefits: ['Fastest growing hydroponic crop', '90% less water than soil farming', 'Year-round production possible', 'No soil-borne diseases']
  },
  {
    name: 'Strawberry', image: hydroStrawberryImg, system: 'Vertical Tower / Dutch Bucket', difficulty: 'Intermediate',
    growthTime: '60-90 days to first fruit', phRange: '5.5-6.2', ecRange: '1.0-1.5 mS/cm', lightHours: '14-16 hrs',
    temperature: '18-24°C', spacing: '20-30 cm', yieldPerPlant: '300-500g/season', nutrients: 'High K during fruiting',
    steps: ['Start with certified disease-free runners or transplants', 'Plant in vertical towers or Dutch buckets with perlite/coco coir mix', 'Maintain pH 5.5-6.2 and EC 1.0-1.5; increase K during flowering', 'Provide 14-16 hrs light with red/blue LED spectrum', 'Hand-pollinate flowers using a small paintbrush or fan', 'Remove runners to focus energy on fruit production', 'Monitor for spider mites and botrytis; maintain good air circulation', 'Harvest when fruits are 90%+ red; pick every 2-3 days'],
    products: ['Fresh Berries', 'Strawberry Jam', 'Dried Strawberries', 'Strawberry Smoothies', 'Flavored Water'],
    tips: 'Day-neutral varieties like Albion and San Andreas perform best in hydroponics as they fruit continuously.',
    benefits: ['Premium pricing for off-season production', 'No soil-borne pathogens', 'Vertical systems maximize space', 'Cleaner fruit with less pest pressure']
  },
  {
    name: 'Basil', image: hydroBasilImg, system: 'DWC / NFT / Kratky', difficulty: 'Beginner',
    growthTime: '28-35 days', phRange: '5.5-6.5', ecRange: '1.0-1.6 mS/cm', lightHours: '14-18 hrs',
    temperature: '20-28°C', spacing: '15-20 cm', yieldPerPlant: '50-100g per harvest', nutrients: 'Balanced NPK, extra Mg',
    steps: ['Sow seeds in rockwool or rapid rooter plugs', 'Transplant to system at 2-3 true leaf stage (10-14 days)', 'Maintain nutrient solution EC 1.0-1.6 and pH 5.5-6.5', 'Provide strong light (14-18 hrs) to prevent leggy growth', 'Pinch flower buds immediately to encourage leaf production', 'Harvest top 1/3 of plant regularly to promote bushy growth', 'Replace plants every 2-3 months as they become woody', 'Keep temperature above 20°C; basil is cold-sensitive'],
    products: ['Fresh Herb', 'Pesto Sauce', 'Dried Basil', 'Basil Essential Oil', 'Infused Olive Oil'],
    tips: 'Genovese basil is the most popular variety. Thai basil and Purple basil also grow excellently in hydroponics.',
    benefits: ['Extremely fast growth cycle', 'High market value herb', 'Multiple harvests per plant', 'Strong aroma in hydroponic systems']
  },
  {
    name: 'Tomato', image: hydroTomatoImg, system: 'Dutch Bucket / Drip System', difficulty: 'Intermediate',
    growthTime: '60-85 days to first harvest', phRange: '5.8-6.3', ecRange: '2.0-3.5 mS/cm', lightHours: '14-18 hrs',
    temperature: '20-28°C', spacing: '40-60 cm', yieldPerPlant: '3-8 kg/season', nutrients: 'High Ca & K during fruiting',
    steps: ['Start seeds in rockwool cubes; germinate at 25°C', 'Transplant to Dutch buckets with perlite at 4-6 true leaf stage', 'Install trellis support system for indeterminate varieties', 'Maintain EC 2.0-3.5 progressively; increase during fruiting', 'Prune suckers weekly; train single or double leader', 'Pollinate by vibrating flower clusters daily (electric toothbrush works!)', 'Monitor for blossom end rot (calcium deficiency) and adjust nutrients', 'Harvest when fruit is fully colored; pick every 2-3 days'],
    products: ['Fresh Tomatoes', 'Tomato Sauce', 'Sun-dried Tomatoes', 'Tomato Paste', 'Ketchup', 'Tomato Juice'],
    tips: 'Indeterminate cherry tomato varieties produce the highest yields in hydroponic systems. Use silicon supplements for stronger stems.',
    benefits: ['Year-round production', '3-5x higher yield than field growing', 'No soil-borne wilts or nematodes', 'Superior flavor control via nutrients']
  },
  {
    name: 'Cucumber', image: hydroCucumberImg, system: 'Dutch Bucket / Drip', difficulty: 'Intermediate',
    growthTime: '50-70 days', phRange: '5.5-6.0', ecRange: '1.7-2.5 mS/cm', lightHours: '14-16 hrs',
    temperature: '22-28°C', spacing: '30-45 cm', yieldPerPlant: '2-5 kg/season', nutrients: 'High K, moderate N',
    steps: ['Sow seeds in coco plugs; germinate at 25-28°C', 'Transplant when first true leaf is fully expanded', 'Provide vertical trellis training; clip to string daily', 'Maintain EC 1.7-2.5 and pH 5.5-6.0', 'Use parthenocarpic varieties (no pollination needed indoors)', 'Remove lateral shoots below 60cm for better airflow', 'Harvest daily once fruiting begins; pick at 15-20cm length', 'Watch for powdery mildew; maintain humidity below 80%'],
    products: ['Fresh Cucumbers', 'Pickles', 'Cucumber Juice', 'Salad Ingredient'],
    tips: 'Seedless/parthenocarpic varieties like Beit Alpha and Mini Munch are ideal — they don\'t need pollination indoors.',
    benefits: ['Very fast production cycle', 'Vertical growing saves space', 'No bitter fruits with proper nutrients', 'Premium pricing for seedless varieties']
  },
  {
    name: 'Spinach', image: hydroSpinachImg, system: 'NFT / Vertical Racks / DWC', difficulty: 'Beginner',
    growthTime: '25-40 days', phRange: '6.0-7.0', ecRange: '1.8-2.3 mS/cm', lightHours: '10-14 hrs',
    temperature: '15-20°C', spacing: '10-15 cm', yieldPerPlant: '80-150g', nutrients: 'High N, Fe, Ca',
    steps: ['Soak seeds for 24 hours in cool water before sowing', 'Sow in rockwool or peat plugs; keep cool (15-20°C)', 'Transfer to NFT or vertical racks at 3-4 leaf stage', 'Maintain cooler temperatures; spinach bolts in heat above 25°C', 'Provide moderate light 10-14 hrs; too much causes bolting', 'Ensure adequate iron in nutrient solution to prevent chlorosis', 'Harvest outer leaves or cut whole plant at base', 'Successive sowings every 2 weeks for continuous supply'],
    products: ['Fresh Salad Greens', 'Smoothie Ingredient', 'Palak Paneer', 'Spinach Pasta', 'Baby Spinach'],
    tips: 'Choose slow-bolt varieties like Bloomsdale or Space. Keep solution temperature below 20°C for best results.',
    benefits: ['High nutritional value crop', 'Compact growth ideal for vertical farms', 'Quick turnaround time', 'Year-round cool-weather crop production']
  },
  {
    name: 'Bell Pepper', image: hydroPepperImg, system: 'Dutch Bucket / Drip System', difficulty: 'Advanced',
    growthTime: '70-90 days to first harvest', phRange: '5.5-6.5', ecRange: '2.0-2.8 mS/cm', lightHours: '14-18 hrs',
    temperature: '21-27°C', spacing: '35-45 cm', yieldPerPlant: '1.5-3 kg/season', nutrients: 'High Ca, K, Mg',
    steps: ['Start seeds in heated propagation tray at 25-28°C', 'Grow seedlings for 6-8 weeks before transplanting', 'Use Dutch buckets with perlite/vermiculite mix', 'Maintain EC 2.0-2.8 progressively; high calcium essential', 'Support plants with string training system', 'Remove first flower (king bloom) for better plant structure', 'Monitor closely for blossom end rot and calcium deficiency', 'Harvest when peppers are fully colored for maximum sweetness'],
    products: ['Fresh Bell Peppers', 'Stuffed Peppers', 'Roasted Peppers', 'Pepper Powder', 'Pickled Peppers'],
    tips: 'Red and yellow varieties command the highest market price. Takes patience — peppers have a long growing cycle but high profitability.',
    benefits: ['Very high market value', 'Premium quality with controlled environment', 'No pesticide residues', 'Consistent color and size']
  },
  {
    name: 'Kale', image: hydroKaleImg, system: 'NFT / DWC / Vertical Tower', difficulty: 'Beginner',
    growthTime: '35-50 days', phRange: '5.5-6.5', ecRange: '1.2-1.8 mS/cm', lightHours: '12-16 hrs',
    temperature: '15-24°C', spacing: '20-25 cm', yieldPerPlant: '200-400g', nutrients: 'Moderate NPK, extra Ca',
    steps: ['Sow seeds in starter plugs; germinate at 18-22°C', 'Transplant at 3-4 true leaf stage to NFT or DWC', 'Maintain pH 5.5-6.5 and EC 1.2-1.8', 'Provide 12-16 hours of light', 'Cooler temperatures produce sweeter, less bitter leaves', 'Harvest lower leaves first; leave top growing point intact', 'Continue harvesting for 3-4 months per plant', 'Watch for aphids and caterpillars; use biological control'],
    products: ['Fresh Kale Salad', 'Kale Chips', 'Smoothie Greens', 'Kale Pesto', 'Dehydrated Kale Powder'],
    tips: 'Curly kale and Lacinato (dinosaur kale) both perform well. Slightly cooler temperatures produce the best flavor.',
    benefits: ['Superfood with high demand', 'Continuous harvest over months', 'Cold-tolerant crop', 'Excellent for vertical farming']
  },
  {
    name: 'Mint', image: hydroMintImg, system: 'DWC / NFT / Kratky', difficulty: 'Beginner',
    growthTime: '20-30 days to first harvest', phRange: '5.5-6.5', ecRange: '1.2-1.6 mS/cm', lightHours: '12-16 hrs',
    temperature: '18-25°C', spacing: '15-20 cm', yieldPerPlant: '50-100g per harvest', nutrients: 'Moderate N, balanced micro',
    steps: ['Propagate from stem cuttings (roots in 7-10 days in water)', 'Transfer rooted cuttings to DWC or NFT system', 'Maintain EC 1.2-1.6 and pH 5.5-6.5', 'Provide 12-16 hours of light', 'Harvest regularly by cutting stems above leaf nodes', 'Pinch flower buds to maintain vegetative growth', 'Replace plants every 4-6 months as they become root-bound', 'Control spreading by keeping each plant in individual net pots'],
    products: ['Fresh Herb', 'Mint Tea', 'Mojito Ingredient', 'Chutney', 'Essential Oil', 'Dried Mint'],
    tips: 'Spearmint and peppermint both thrive. Mint grows aggressively — isolated net pots prevent root tangling.',
    benefits: ['Extremely easy to grow', 'Very fast propagation', 'High demand in restaurants/bars', 'Multiple harvests continuously']
  },
  {
    name: 'Microgreens', image: hydroMicrogreensImg, system: 'Tray / Shallow Flood', difficulty: 'Beginner',
    growthTime: '7-14 days', phRange: '5.5-6.5', ecRange: '0.5-1.0 mS/cm', lightHours: '12-16 hrs',
    temperature: '18-24°C', spacing: 'Dense sowing (broadcast)', yieldPerPlant: '200-400g per tray', nutrients: 'Very light or water only',
    steps: ['Soak seeds for 8-12 hours (larger seeds like sunflower, peas)', 'Spread seeds densely on moistened growing medium (coco coir/hemp mat)', 'Cover trays with blackout dome for 3-4 days (blackout phase)', 'Remove dome and expose to light when shoots are 2-3 cm tall', 'Mist or bottom-water daily; keep medium moist not waterlogged', 'Harvest at 7-14 days when first true leaves appear', 'Cut just above the growing medium with sharp scissors', 'Clean and sanitize trays between cycles'],
    products: ['Salad Topping', 'Smoothie Boost', 'Sandwich Garnish', 'Chef Plating', 'Nutrition Supplement'],
    tips: 'Radish, sunflower, pea shoots, and broccoli microgreens are the most popular and profitable varieties.',
    benefits: ['Fastest turnaround crop (7-14 days)', '40x more nutrients than mature plants', 'Minimal space required', 'Premium pricing per kg']
  },
  {
    name: 'Cherry Tomato', image: hydroCherryTomatoImg, system: 'Dutch Bucket / Tower Garden', difficulty: 'Intermediate',
    growthTime: '55-75 days to first fruit', phRange: '5.5-6.5', ecRange: '2.0-3.0 mS/cm', lightHours: '14-18 hrs',
    temperature: '20-28°C', spacing: '30-45 cm', yieldPerPlant: '2-4 kg/season', nutrients: 'High K & Ca during fruiting',
    steps: ['Start seeds in rockwool cubes at 25°C', 'Transplant to Dutch buckets at 5-6 leaf stage', 'Train up vertical strings; clip stems weekly', 'Increase EC gradually from 2.0 to 3.0 as plants mature', 'Vibrate flower clusters daily for pollination', 'Remove lower leaves as fruits ripen for airflow', 'Harvest when fruits are fully red and slightly soft', 'Prune suckers to maintain 1-2 main stems'],
    products: ['Fresh Snacking', 'Salads', 'Bruschetta', 'Roasted Cherry Tomatoes', 'Tomato Confit'],
    tips: 'Varieties like Sungold, Sweet Million, and Sakura are top performers in hydroponic systems.',
    benefits: ['Continuous production for 6+ months', 'Higher sugar content than field-grown', 'Very popular with restaurants', 'Compact plants suit vertical systems']
  },
  {
    name: 'Bok Choy', image: hydroBokchoyImg, system: 'NFT / DWC / Raft', difficulty: 'Beginner',
    growthTime: '30-45 days', phRange: '6.0-7.0', ecRange: '1.5-2.0 mS/cm', lightHours: '10-14 hrs',
    temperature: '15-22°C', spacing: '15-20 cm', yieldPerPlant: '150-250g', nutrients: 'Moderate N, high Ca',
    steps: ['Sow seeds in starter plugs; germinate at 18-22°C', 'Transplant at 2-3 true leaf stage to NFT or DWC', 'Maintain cooler nutrient solution (below 22°C)', 'pH 6.0-7.0 slightly higher than most hydroponic crops', 'Provide moderate light; avoid excessive heat', 'Ensure calcium availability to prevent tip burn', 'Harvest whole plant at 30-45 days or pick outer leaves', 'Stagger sowings every 2 weeks for continuous harvest'],
    products: ['Stir-fry', 'Asian Soups', 'Salad Greens', 'Kimchi', 'Steamed Vegetable'],
    tips: 'Baby bok choy varieties mature faster (25-30 days) and command premium pricing in Asian grocery markets.',
    benefits: ['Fast growing Asian green', 'High demand in urban markets', 'Compact growth suits vertical farms', 'Cool-weather crop grows year-round indoors']
  },
];
