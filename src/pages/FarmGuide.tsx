import { useState } from 'react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sprout, Leaf, Search, Droplets, Sun, Thermometer, Calendar, Package, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { crops, herbs, type Crop } from '@/data/cropData';

const categories = ['All', 'Cereal', 'Pulse', 'Oilseed', 'Cash Crop', 'Fiber', 'Plantation', 'Fruit', 'Vegetable', 'Spice'];

export default function FarmGuide() {
  const { t } = useLanguage();
  const [cropSearch, setCropSearch] = useState('');
  const [herbSearch, setHerbSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedCrop, setExpandedCrop] = useState<string | null>(null);

  const filteredCrops = crops.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(cropSearch.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredHerbs = herbs.filter(h =>
    h.name.toLowerCase().includes(herbSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-emerald-600">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white space-y-3 p-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3">
              <Sprout className="h-10 w-10" />
              Farm Guide
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Complete cultivation guide for 40 crops & 8 herbs — from sowing to harvest and value-added products
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Badge variant="secondary" className="text-sm px-3 py-1">{crops.length} Crops</Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">{herbs.length} Herbs</Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">{categories.length - 1} Categories</Badge>
            </div>
          </div>
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

          {/* CROPS TAB */}
          <TabsContent value="crops">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search crops..." value={cropSearch} onChange={e => setCropSearch(e.target.value)} className="pl-10" />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Crop Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCrops.map((crop, idx) => (
                <CropCard key={crop.name} crop={crop} index={idx} expanded={expandedCrop === crop.name} onToggle={() => setExpandedCrop(expandedCrop === crop.name ? null : crop.name)} />
              ))}
            </div>
            {filteredCrops.length === 0 && (
              <div className="text-center py-16">
                <Sprout className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground text-lg">No crops found matching your search</p>
              </div>
            )}
          </TabsContent>

          {/* HERBS TAB */}
          <TabsContent value="herbs">
            <div className="max-w-lg mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search herbs..." value={herbSearch} onChange={e => setHerbSearch(e.target.value)} className="pl-10" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredHerbs.map((herb, idx) => (
                <Card key={herb.name} className="overflow-hidden animate-scale-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 pb-3">
                    <div className="flex items-center justify-between gap-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Leaf className="h-5 w-5 text-teal-600 flex-shrink-0" />
                        {herb.name}
                      </CardTitle>
                      <Badge variant="outline" className="flex-shrink-0">{herb.type}</Badge>
                    </div>
                    <CardDescription>{herb.uses}</CardDescription>
                    <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Thermometer className="h-3 w-3" />{herb.climate}</span>
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{herb.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-3">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="steps" className="border-none">
                        <AccordionTrigger className="text-sm font-semibold py-2">Cultivation Process</AccordionTrigger>
                        <AccordionContent>
                          <ol className="space-y-2 ml-1">
                            {herb.steps.map((step, i) => (
                              <li key={i} className="flex gap-3 text-sm">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400 flex items-center justify-center text-xs font-bold">{i + 1}</span>
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
            </div>
            {filteredHerbs.length === 0 && (
              <div className="text-center py-16">
                <Leaf className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground text-lg">No herbs found matching your search</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function CropCard({ crop, index, expanded, onToggle }: { crop: Crop; index: number; expanded: boolean; onToggle: () => void }) {
  return (
    <Card className="overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.03}s` }}>
      {/* Image + Title Header */}
      <div className="relative h-48 overflow-hidden">
        <img src={crop.image} alt={crop.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-bold text-lg">{crop.name}</h3>
            <div className="flex gap-1.5">
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs">{crop.season}</Badge>
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs">{crop.category}</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info */}
      <div className="grid grid-cols-2 gap-2 p-4 bg-muted/30 text-xs">
        <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3 text-green-600" />{crop.duration}</span>
        <span className="flex items-center gap-1.5"><Thermometer className="h-3 w-3 text-orange-500" />{crop.climate}</span>
        <span className="flex items-center gap-1.5"><Droplets className="h-3 w-3 text-blue-500" />{crop.water}</span>
        <span className="flex items-center gap-1.5"><Sun className="h-3 w-3 text-amber-500" />{crop.soil}</span>
      </div>

      {/* Expandable Sections */}
      <CardContent className="pt-2 pb-4">
        <Accordion type="multiple">
          <AccordionItem value="steps" className="border-b">
            <AccordionTrigger className="text-sm font-semibold py-2">
              📋 Growing Process ({crop.steps.length} steps)
            </AccordionTrigger>
            <AccordionContent>
              <ol className="space-y-2 ml-1">
                {crop.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 flex items-center justify-center text-xs font-bold">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              {crop.tips && (
                <div className="mt-3 p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                  <p className="text-sm"><strong>💡 Pro Tip:</strong> {crop.tips}</p>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="products" className="border-none">
            <AccordionTrigger className="text-sm font-semibold py-2">
              <span className="flex items-center gap-2">
                <Package className="h-4 w-4 text-purple-500" />
                Products ({crop.products.length})
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2">
                {crop.products.map((product, i) => (
                  <Badge key={i} variant="secondary" className="text-xs font-normal">
                    {product}
                  </Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
