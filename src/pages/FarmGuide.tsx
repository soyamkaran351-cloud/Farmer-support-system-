import { useState } from 'react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sprout, Leaf, Search, Droplets, Sun, Thermometer, Calendar, Bug } from 'lucide-react';
import { Input } from '@/components/ui/input';

const crops = [
  {
    name: 'Rice (Paddy)',
    season: 'Kharif',
    duration: '120-150 days',
    soil: 'Clayey loam, alluvial soil',
    climate: 'Hot & humid, 20-37°C',
    water: 'High (standing water needed)',
    steps: [
      'Prepare nursery bed and sow pre-germinated seeds',
      'Transplant 25-30 day old seedlings to puddled field',
      'Maintain 5cm standing water during vegetative stage',
      'Apply NPK fertilizer in 3 split doses (basal, tillering, panicle)',
      'Control weeds within first 30 days using herbicide or manual weeding',
      'Monitor for stem borer, leaf folder, and blast disease',
      'Drain water 15 days before harvest',
      'Harvest when 80% grains turn golden yellow',
    ],
    tips: 'Use SRI (System of Rice Intensification) method to reduce water use by 40% while increasing yield.',
  },
  {
    name: 'Wheat',
    season: 'Rabi',
    duration: '110-130 days',
    soil: 'Well-drained loamy soil',
    climate: 'Cool & dry, 10-25°C',
    water: 'Moderate (4-6 irrigations)',
    steps: [
      'Prepare fine tilth by 2-3 ploughings and planking',
      'Treat seeds with Thiram/Carbendazim before sowing',
      'Sow seeds in rows 20-22.5 cm apart at 4-5 cm depth',
      'Apply first irrigation (crown root initiation) at 20-25 DAS',
      'Top dress with urea at tillering and boot stage',
      'Apply 5-6 irrigations at critical stages (CRI, tillering, jointing, flowering, milking, dough)',
      'Control Phalaris minor weed with pre-emergence herbicide',
      'Harvest at golden yellow stage when grain moisture is 20%',
    ],
    tips: 'Zero tillage sowing after rice saves cost and time while maintaining yields.',
  },
  {
    name: 'Maize (Corn)',
    season: 'Kharif / Rabi',
    duration: '90-120 days',
    soil: 'Well-drained sandy loam',
    climate: 'Warm, 21-30°C',
    water: 'Moderate',
    steps: [
      'Prepare field with deep ploughing and add FYM (10 t/ha)',
      'Sow seeds at 60×20 cm spacing, 5 cm depth',
      'Apply basal dose of NPK and zinc sulphate at sowing',
      'Thin seedlings to one per hill at 10-15 DAS',
      'Top dress nitrogen at knee-high and tasseling stage',
      'Irrigate at critical stages: knee-high, flowering, grain filling',
      'Scout for fall armyworm and stem borer regularly',
      'Harvest when husks turn brown and kernels are hard',
    ],
    tips: 'Intercropping maize with legumes (soybean/groundnut) improves soil fertility and income.',
  },
  {
    name: 'Cotton',
    season: 'Kharif',
    duration: '150-180 days',
    soil: 'Black cotton soil (vertisol)',
    climate: 'Warm & sunny, 25-35°C',
    water: 'Moderate (6-8 irrigations)',
    steps: [
      'Deep plough in summer and prepare ridges & furrows',
      'Treat seeds with imidacloprid against sucking pests',
      'Sow Bt cotton seeds at 90×60 cm spacing',
      'Apply recommended NPK dose; 50% N as basal, rest in splits',
      'Install pheromone traps for bollworm monitoring',
      'Spray neem-based pesticide for early pest management',
      'Pinch terminal bud after 90 days to encourage boll formation',
      'Pick cotton bolls in 3-4 pickings when fully opened',
    ],
    tips: 'Grow refuge crop (non-Bt cotton) on 20% area to delay pest resistance development.',
  },
  {
    name: 'Sugarcane',
    season: 'Spring / Autumn',
    duration: '10-12 months',
    soil: 'Deep rich loamy soil',
    climate: 'Tropical, 20-35°C',
    water: 'High (frequent irrigation)',
    steps: [
      'Prepare deep furrows 75-90 cm apart with FYM application',
      'Select disease-free setts with 2-3 buds each',
      'Treat setts in carbendazim solution before planting',
      'Place setts in furrows and cover with 5 cm soil',
      'Irrigate immediately after planting, then every 7-10 days',
      'Earthing up at 90 and 120 days to support canes',
      'Apply nitrogen in 3 splits: planting, 45 DAS, 90 DAS',
      'Harvest at 10-12 months when brix reading is >18',
    ],
    tips: 'Trench planting method with drip irrigation can increase yield by 20-30%.',
  },
  {
    name: 'Tomato',
    season: 'Rabi / Year-round',
    duration: '90-120 days',
    soil: 'Well-drained sandy loam, pH 6-7',
    climate: '20-27°C',
    water: 'Regular, drip preferred',
    steps: [
      'Raise seedlings in pro-trays with cocopeat media',
      'Transplant 25-30 day old seedlings at 60×45 cm spacing',
      'Apply FYM and NPK as basal dose; mulch with straw',
      'Install drip irrigation with fertigation system',
      'Stake or trellis plants for better air circulation',
      'Prune suckers below first flower cluster for determinate types',
      'Spray copper fungicide preventively for blight',
      'Harvest at breaker stage (pink color) for distant markets',
    ],
    tips: 'Grafting onto disease-resistant rootstock eliminates soil-borne wilt problems.',
  },
  {
    name: 'Potato',
    season: 'Rabi',
    duration: '75-120 days',
    soil: 'Well-drained sandy loam',
    climate: 'Cool, 15-25°C',
    water: 'Moderate (6-8 irrigations)',
    steps: [
      'Use certified, disease-free seed tubers (25-40g each)',
      'Treat tubers with mancozeb solution before planting',
      'Plant in ridges at 60×20 cm spacing, 15 cm depth',
      'Irrigate lightly after planting; avoid waterlogging',
      'Apply NPK basal dose; top dress N at earthing up',
      'Earth up at 30 and 45 DAS to cover developing tubers',
      'Monitor for late blight; spray mancozeb preventively in fog',
      'Haulm cutting 10 days before harvest for skin hardening',
    ],
    tips: 'Cold storage at 2-4°C extends storage life to 6-8 months.',
  },
  {
    name: 'Onion',
    season: 'Rabi / Kharif',
    duration: '130-150 days',
    soil: 'Well-drained loamy soil',
    climate: '15-30°C',
    water: 'Moderate',
    steps: [
      'Raise nursery: sow seeds in raised beds, transplant at 45-50 days',
      'Transplant seedlings at 15×10 cm spacing on flat beds',
      'Apply well-decomposed FYM and NPK at transplanting',
      'Irrigate every 7-10 days; stop irrigation 10 days before harvest',
      'Weed manually or use pre-emergence herbicide (pendimethalin)',
      'Spray mancozeb for purple blotch and thrips management',
      'Harvest when 50% tops fall over and neck thins',
      'Cure bulbs in shade for 7-10 days before storage',
    ],
    tips: 'Store in well-ventilated bamboo structures (oniyan) to reduce post-harvest losses to under 10%.',
  },
  {
    name: 'Soybean',
    season: 'Kharif',
    duration: '85-120 days',
    soil: 'Well-drained clay loam',
    climate: 'Warm, 25-30°C',
    water: 'Moderate (rain-fed mostly)',
    steps: [
      'Inoculate seeds with Rhizobium culture before sowing',
      'Sow at 45×5 cm spacing after onset of monsoon rains',
      'Apply recommended dose of phosphorus and potash as basal',
      'No nitrogen needed due to biological fixation',
      'Control weeds with pre-emergence herbicide + one hand weeding',
      'Monitor for girdle beetle and stem fly; spray if needed',
      'Avoid waterlogging; ensure proper drainage',
      'Harvest when leaves turn yellow and pods are brown',
    ],
    tips: 'Soybean-wheat is one of the most profitable crop rotations in central India.',
  },
  {
    name: 'Groundnut (Peanut)',
    season: 'Kharif / Summer',
    duration: '100-130 days',
    soil: 'Well-drained sandy loam',
    climate: 'Warm, 25-35°C',
    water: 'Moderate',
    steps: [
      'Select bold, healthy kernels; treat with Thiram + Rhizobium',
      'Sow at 30×10 cm spacing after pre-monsoon showers',
      'Apply gypsum at 500 kg/ha at flowering for pod development',
      'Apply SSP as phosphorus source at sowing',
      'Earth up at 30-35 DAS to promote pegging',
      'Maintain soil moisture during pegging and pod filling',
      'Control tikka disease with chlorothalonil spray',
      'Harvest when inner shell shows dark marks and leaves yellow',
    ],
    tips: 'Apply calcium (gypsum) at flowering stage to significantly improve pod filling and reduce empty pods.',
  },
];

const herbs = [
  {
    name: 'Tulsi (Holy Basil)',
    type: 'Medicinal',
    uses: 'Immunity booster, respiratory relief, religious ceremonies',
    climate: 'Tropical & subtropical, 20-35°C',
    duration: 'Perennial (harvest from 90 days)',
    steps: [
      'Propagate from seeds or stem cuttings in nursery',
      'Transplant at 40×40 cm spacing in well-prepared beds',
      'Apply organic manure; avoid chemical fertilizers',
      'Water regularly but avoid waterlogging',
      'First harvest at 90 days; subsequent harvests every 75 days',
      'Harvest by cutting 15 cm above ground level',
      'Dry leaves in shade for 3-5 days for storage',
    ],
  },
  {
    name: 'Turmeric (Haldi)',
    type: 'Spice & Medicinal',
    uses: 'Anti-inflammatory, cooking spice, natural dye, cosmetics',
    climate: 'Warm & humid, 20-30°C',
    duration: '7-9 months',
    steps: [
      'Select healthy mother rhizomes with 2-3 buds',
      'Treat with mancozeb solution to prevent rot',
      'Plant in ridges at 45×25 cm spacing, 5-7 cm deep',
      'Mulch with green leaves at planting, 45 and 90 days',
      'Irrigate every 7 days; avoid waterlogging',
      'Earth up at 60 and 120 days',
      'Harvest when leaves turn yellow and dry (7-9 months)',
      'Boil rhizomes for 45-60 min, sun dry for 10-15 days',
    ],
  },
  {
    name: 'Ashwagandha',
    type: 'Medicinal',
    uses: 'Stress relief, energy booster, immunity, Ayurvedic medicine',
    climate: 'Semi-arid, 20-38°C',
    duration: '150-180 days',
    steps: [
      'Sow seeds directly or raise nursery; broadcast/line sowing',
      'Spacing: 30×10 cm on light sandy soil',
      'Minimal irrigation; mostly rain-fed crop',
      'Apply 10 t/ha FYM; minimal chemical fertilizers',
      'Weed at 25 and 50 days after sowing',
      'Crop matures when leaves dry and berries turn red',
      'Dig roots carefully without breaking',
      'Cut roots into 7-10 cm pieces; dry in shade',
    ],
  },
  {
    name: 'Aloe Vera',
    type: 'Medicinal & Cosmetic',
    uses: 'Skin care, digestive health, wound healing, cosmetics',
    climate: 'Hot & dry, 20-35°C',
    duration: 'Perennial (first harvest 12 months)',
    steps: [
      'Propagate from root suckers (offshoots)',
      'Plant at 60×45 cm spacing on raised beds',
      'Apply well-decomposed FYM at planting',
      'Water sparingly; drought-tolerant once established',
      'Mulch to suppress weeds and retain moisture',
      'First leaf harvest at 12 months; then every 45 days',
      'Cut outer mature leaves at base; leave inner leaves',
      'Process gel within 3 hours of harvesting',
    ],
  },
  {
    name: 'Mint (Pudina)',
    type: 'Culinary & Medicinal',
    uses: 'Cooking, beverages, essential oil, digestive aid',
    climate: 'Subtropical, 15-30°C',
    duration: 'Perennial (first harvest 100-120 days)',
    steps: [
      'Propagate from stolons/runners (not seeds)',
      'Plant stolons at 60×15 cm spacing in February-March',
      'Apply nitrogen-rich fertilizer for lush growth',
      'Irrigate every 5-7 days; keep soil moist',
      'Weed regularly in first 30 days',
      'First harvest at 100-120 days; cut at ground level',
      'Take 3-4 harvests per year',
      'Distill leaves for menthol oil extraction',
    ],
  },
  {
    name: 'Lemongrass',
    type: 'Aromatic',
    uses: 'Essential oil, tea, mosquito repellent, aromatherapy',
    climate: 'Tropical, 25-35°C',
    duration: 'Perennial (first harvest 90 days)',
    steps: [
      'Propagate by dividing mature clumps (slips)',
      'Plant slips at 60×45 cm spacing during monsoon',
      'Apply FYM and NPK at planting',
      'Irrigate fortnightly in dry season',
      'First harvest at 90 days; cut leaves 10 cm above ground',
      'Subsequent harvests every 60-70 days',
      'Steam-distill fresh leaves for essential oil',
      '4-5 harvests per year possible',
    ],
  },
  {
    name: 'Coriander (Dhania)',
    type: 'Culinary',
    uses: 'Fresh garnish, spice (seeds), essential oil',
    climate: 'Cool, 15-25°C',
    duration: '45-60 days (leaf), 90-120 days (seed)',
    steps: [
      'Split seeds gently before soaking overnight',
      'Sow in rows 20 cm apart; cover lightly with soil',
      'Apply light irrigation immediately after sowing',
      'Thin seedlings to 5 cm apart at 15 days',
      'Apply nitrogen at 30 DAS for leaf crop',
      'Harvest leaves at 45-60 days by cutting at ground level',
      'For seed crop, let plants flower and mature fully',
      'Thresh dried plants to collect seeds',
    ],
  },
  {
    name: 'Brahmi',
    type: 'Medicinal',
    uses: 'Memory enhancement, anxiety relief, Ayurvedic medicine',
    climate: 'Tropical & marshy, 25-40°C',
    duration: 'Perennial (first harvest 90 days)',
    steps: [
      'Propagate from stem cuttings (5-10 cm)',
      'Plant in marshy or waterlogged areas at 20×20 cm',
      'Requires abundant moisture; grows near water bodies',
      'Apply organic manure; avoid heavy chemicals',
      'Harvest entire above-ground portion at 90 days',
      'Leave 2-3 cm stem for regrowth',
      'Take 3-4 harvests annually',
      'Shade dry at 40°C for quality retention',
    ],
  },
];

export default function FarmGuide() {
  const { t } = useLanguage();
  const [cropSearch, setCropSearch] = useState('');
  const [herbSearch, setHerbSearch] = useState('');

  const filteredCrops = crops.filter(c =>
    c.name.toLowerCase().includes(cropSearch.toLowerCase())
  );
  const filteredHerbs = herbs.filter(h =>
    h.name.toLowerCase().includes(herbSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="relative h-48 overflow-hidden bg-gradient-to-r from-green-700 to-emerald-600 flex items-center justify-center">
        <div className="text-center text-white space-y-2 p-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3">
            <Sprout className="h-10 w-10" />
            Farm Guide
          </h1>
          <p className="text-lg opacity-90">Complete crop & herb cultivation guide for Indian farmers</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="crops" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="crops" className="gap-2">
              <Sprout className="h-4 w-4" />
              Crops ({filteredCrops.length})
            </TabsTrigger>
            <TabsTrigger value="herbs" className="gap-2">
              <Leaf className="h-4 w-4" />
              Herbs ({filteredHerbs.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="crops">
            <div className="max-w-lg mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search crops..."
                  value={cropSearch}
                  onChange={e => setCropSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid gap-6">
              {filteredCrops.map(crop => (
                <Card key={crop.name} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Sprout className="h-5 w-5 text-green-600" />
                        {crop.name}
                      </CardTitle>
                      <Badge variant="secondary">{crop.season}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{crop.duration}</span>
                      <span className="flex items-center gap-1"><Thermometer className="h-3.5 w-3.5" />{crop.climate}</span>
                      <span className="flex items-center gap-1"><Droplets className="h-3.5 w-3.5" />{crop.water}</span>
                      <span className="flex items-center gap-1"><Sun className="h-3.5 w-3.5" />{crop.soil}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="steps" className="border-none">
                        <AccordionTrigger className="text-sm font-semibold py-2">
                          Step-by-Step Growing Process
                        </AccordionTrigger>
                        <AccordionContent>
                          <ol className="space-y-2 ml-1">
                            {crop.steps.map((step, i) => (
                              <li key={i} className="flex gap-3 text-sm">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 flex items-center justify-center text-xs font-bold">
                                  {i + 1}
                                </span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                          {crop.tips && (
                            <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                              <p className="text-sm"><strong>💡 Pro Tip:</strong> {crop.tips}</p>
                            </div>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
              {filteredCrops.length === 0 && (
                <p className="text-center text-muted-foreground py-12">No crops found matching "{cropSearch}"</p>
              )}
            </div>
          </TabsContent>

          <TabsContent value="herbs">
            <div className="max-w-lg mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search herbs..."
                  value={herbSearch}
                  onChange={e => setHerbSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid gap-6">
              {filteredHerbs.map(herb => (
                <Card key={herb.name} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Leaf className="h-5 w-5 text-teal-600" />
                        {herb.name}
                      </CardTitle>
                      <Badge variant="outline">{herb.type}</Badge>
                    </div>
                    <CardDescription className="mt-1">{herb.uses}</CardDescription>
                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Thermometer className="h-3.5 w-3.5" />{herb.climate}</span>
                      <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{herb.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="steps" className="border-none">
                        <AccordionTrigger className="text-sm font-semibold py-2">
                          Cultivation Process
                        </AccordionTrigger>
                        <AccordionContent>
                          <ol className="space-y-2 ml-1">
                            {herb.steps.map((step, i) => (
                              <li key={i} className="flex gap-3 text-sm">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400 flex items-center justify-center text-xs font-bold">
                                  {i + 1}
                                </span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
              {filteredHerbs.length === 0 && (
                <p className="text-center text-muted-foreground py-12">No herbs found matching "{herbSearch}"</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
