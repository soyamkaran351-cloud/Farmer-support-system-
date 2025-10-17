import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sprout } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CropGuide() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const modernTechniques = [
    {
      title: 'Hydroponics',
      hindi: 'जलकृषि',
      description: 'Soil-less farming method growing plants in nutrient-rich water solutions. Ideal for urban farming and areas with poor soil quality. Uses 90% less water than traditional farming, grows crops 30-50% faster, and provides year-round production. Perfect for lettuce, tomatoes, cucumbers, and herbs. Requires initial investment in systems (NFT, DWC, or Ebb-Flow), pH/EC monitoring equipment, and grow lights for indoor setups. ROI typically achieved within 2-3 years.',
      benefits: 'Space-efficient, pesticide-free, consistent quality, weather-independent',
      investment: '₹50,000 - ₹5 lakhs depending on scale',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Mushroom Farming',
      hindi: 'मशरूम की खेती',
      description: 'Cultivation of edible mushrooms (Oyster, Button, Shiitake) in controlled environments. Highly profitable with 4-6 harvests per year. Requires minimal space (100 sq ft can yield 400-500 kg annually), dark rooms with 80-90% humidity, and temperatures between 20-28°C. Uses agricultural waste (straw, sawdust) as growing medium. Button mushrooms fetch ₹200-300/kg, Oyster ₹150-200/kg. Government subsidies available under MIDH scheme (up to 50%).',
      benefits: 'High returns, quick harvest cycles (45-60 days), low space requirement',
      investment: '₹25,000 - ₹2 lakhs for small to medium scale',
      color: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Saffron Farming',
      hindi: 'केसर की खेती',
      description: 'Most expensive spice cultivation, suitable for cold climates (Kashmir, Himachal Pradesh, Uttarakhand). Requires well-drained soil, temperature 15-20°C, and moderate rainfall. Plant corms in June-July, harvest flowers in October-November. Each hectare needs 60-75 kg corms. Yields 4-6 kg saffron/hectare worth ₹2-3 lakhs/kg. Investment recovered in 3-4 years with production continuing for 7-12 years from same corms.',
      benefits: 'Extremely high value crop, low maintenance after establishment',
      investment: '₹4-6 lakhs per hectare initial setup',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Vertical Farming',
      hindi: 'लंबवत खेती',
      description: 'Multi-layer indoor farming using LED lights and climate control. Maximizes production per square foot (10-20 times traditional farming). Ideal for leafy greens, strawberries, and microgreens. Controlled environment eliminates seasonal limitations, reduces water usage by 95%, and prevents pest attacks. Requires significant initial investment but offers premium pricing for pesticide-free produce. Smart systems automate irrigation, lighting, and nutrient delivery.',
      benefits: 'Maximum space utilization, year-round production, no weather dependency',
      investment: '₹10-50 lakhs depending on automation level',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Aquaponics',
      hindi: 'जलजीवन कृषि',
      description: 'Combined system of aquaculture (fish farming) and hydroponics. Fish waste provides organic nutrients for plants, plants filter water for fish - creating a closed-loop ecosystem. Produces both vegetables and protein (fish). Tilapia, catfish, or carp commonly used. Grows herbs, leafy greens, and tomatoes. Uses 90% less water than soil farming. Requires careful monitoring of pH (6.8-7.2), ammonia, nitrites, and temperature. Government training programs available.',
      benefits: 'Dual income from fish and crops, organic production, water-efficient',
      investment: '₹1-3 lakhs for small commercial unit',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Precision Agriculture',
      hindi: 'सटीक खेती',
      description: 'Technology-driven farming using GPS, IoT sensors, drones, and AI for optimized resource management. Soil sensors monitor moisture, NPK levels, and pH in real-time. Drones map field health using multispectral imaging, identify pest infestations early, and enable targeted pesticide application. Variable rate technology (VRT) applies inputs precisely where needed, reducing costs by 15-25%. Weather stations provide micro-climate data. Satellite imagery tracks crop growth. Increases yields by 10-30% while reducing input costs.',
      benefits: 'Data-driven decisions, resource optimization, increased productivity',
      investment: '₹50,000 - ₹10 lakhs depending on technology adoption',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Greenhouse Farming',
      hindi: 'ग्रीनहाउस खेती',
      description: 'Controlled environment agriculture using polyhouse or glass structures. Protects crops from extreme weather, pests, and diseases. Extends growing seasons and enables off-season production for premium prices. Suitable for high-value crops like capsicum (₹40-80/kg), colored peppers (₹100-150/kg), cherry tomatoes (₹60-100/kg), and exotic flowers. Different types: Naturally ventilated (₹600-800/sq m), Fan-pad cooled (₹1000-1500/sq m), Fully automated (₹2000-3000/sq m). Drip irrigation and fertigation systems mandatory.',
      benefits: 'Higher yields (3-4 times), better quality, reduced pesticide use',
      investment: '₹6-30 lakhs per 1000 sq m depending on type',
      color: 'from-lime-500 to-green-500'
    },
    {
      title: 'Aeroponics',
      hindi: 'वायुजीवन कृषि',
      description: 'Advanced soil-less technique where plant roots hang in air and receive fine mist of nutrient solution. Most efficient growing method using 95% less water than traditional farming and 40% less than hydroponics. Faster growth rates (25-30% quicker), higher yields, and superior nutrient absorption. Ideal for potatoes, leafy greens, and herbs. Requires sophisticated misting systems, backup power, and precise nutrient management. Used by NASA for space farming research. Emerging in Indian metros for premium leafy greens production.',
      benefits: 'Fastest growth, maximum yield, minimal resource use, disease-free',
      investment: '₹5-15 lakhs for commercial setup',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" onClick={() => navigate('/techniques')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Techniques
          </Button>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Modern Crop Guide
            </h1>
            <p className="text-muted-foreground">Advanced farming technologies for higher profits</p>
          </div>
          <Sprout className="h-12 w-12 text-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modernTechniques.map((technique, idx) => (
            <Card key={idx} className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${idx * 0.05}s` }}>
              <CardHeader>
                <div className={`h-14 w-14 rounded-lg bg-gradient-to-br ${technique.color} flex items-center justify-center mb-3`}>
                  <Sprout className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{technique.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{technique.hindi}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">{technique.description}</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-sm">Benefits:</span>
                    <span className="text-sm text-muted-foreground">{technique.benefits}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-sm">Investment:</span>
                    <span className="text-sm text-muted-foreground">{technique.investment}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
