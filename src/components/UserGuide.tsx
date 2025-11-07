import { useState } from 'react';
import { HelpCircle, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const guideContent = [
  {
    title: "Dashboard",
    description: "Your central hub for quick access to all farming tools",
    tips: [
      "Check weather updates daily for better planning",
      "Monitor market prices for selling decisions",
      "Access disease detection for crop health"
    ]
  },
  {
    title: "Weather Forecast",
    description: "Get 5-day weather predictions for your location",
    tips: [
      "Plan irrigation based on rainfall forecasts",
      "Prepare for extreme weather conditions",
      "Optimize harvest timing with weather data"
    ]
  },
  {
    title: "Market Prices",
    description: "Real-time crop prices from various markets",
    tips: [
      "Compare prices across different markets",
      "Identify best time to sell your produce",
      "Track price trends for different crops",
      "Your local state prices are shown first"
    ]
  },
  {
    title: "Disease Detection",
    description: "AI-powered crop disease identification",
    tips: [
      "Take clear photos of affected plants",
      "Upload images in good lighting",
      "Get instant treatment recommendations",
      "Save detection history for reference"
    ]
  },
  {
    title: "Government Schemes",
    description: "Browse available agricultural subsidies and programs",
    tips: [
      "Filter schemes by your state",
      "Check eligibility requirements carefully",
      "Follow application process step-by-step",
      "Keep required documents ready"
    ]
  },
  {
    title: "Farming Techniques",
    description: "Learn modern and traditional farming methods",
    tips: [
      "Explore organic farming practices",
      "Learn water-saving irrigation techniques",
      "Improve soil health naturally",
      "Adopt sustainable farming methods"
    ]
  },
  {
    title: "AI Assistant",
    description: "Chat with AI for personalized farming advice",
    tips: [
      "Ask about crop-specific problems",
      "Get recommendations for pest control",
      "Learn about seasonal planting",
      "Receive guidance on soil management"
    ]
  }
];

export function UserGuide() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Help Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all z-50"
          size="icon"
        >
          <HelpCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Guide Dialog */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl z-50 flex flex-col animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-primary to-accent">
            <div className="flex items-center gap-3">
              <HelpCircle className="h-6 w-6 text-white" />
              <h3 className="font-semibold text-white">User Guide</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground mb-4">
                Welcome to the Farmer Support System! Here's how to make the most of each feature:
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {guideContent.map((section, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left">
                      <div>
                        <div className="font-semibold">{section.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {section.description}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 mt-2">
                        {section.tips.map((tip, tipIdx) => (
                          <li key={tipIdx} className="flex gap-2 text-sm">
                            <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Quick Tips</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Update your profile for personalized recommendations</li>
                  <li>• Check the app daily for fresh updates</li>
                  <li>• Use AI Assistant for any farming questions</li>
                  <li>• Enable notifications for weather alerts</li>
                </ul>
              </div>
            </div>
          </ScrollArea>
        </Card>
      )}
    </>
  );
}
