import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { en: 'Home', hi: 'होम' },
  weather: { en: 'Weather', hi: 'मौसम' },
  market: { en: 'Market', hi: 'बाज़ार' },
  disease: { en: 'Disease Detection', hi: 'रोग पहचान' },
  news: { en: 'News', hi: 'समाचार' },
  schemes: { en: 'Schemes', hi: 'योजनाएं' },
  techniques: { en: 'Techniques', hi: 'तकनीक' },
  chatbot: { en: 'AI Assistant', hi: 'एआई सहायक' },
  logout: { en: 'Logout', hi: 'लॉग आउट' },
  
  // Auth
  login: { en: 'Login', hi: 'लॉग इन करें' },
  signup: { en: 'Sign Up', hi: 'साइन अप करें' },
  email: { en: 'Email', hi: 'ईमेल' },
  password: { en: 'Password', hi: 'पासवर्ड' },
  fullName: { en: 'Full Name', hi: 'पूरा नाम' },
  phone: { en: 'Phone Number', hi: 'फ़ोन नंबर' },
  
  // Common
  loading: { en: 'Loading...', hi: 'लोड हो रहा है...' },
  search: { en: 'Search', hi: 'खोजें' },
  submit: { en: 'Submit', hi: 'जमा करें' },
  cancel: { en: 'Cancel', hi: 'रद्द करें' },
  save: { en: 'Save', hi: 'सहेजें' },
  
  // Dashboard
  welcome: { en: 'Welcome, Farmer!', hi: 'स्वागत है, किसान!' },
  quickAccess: { en: 'Quick Access', hi: 'त्वरित पहुंच' },
  
  // Weather
  weatherForecast: { en: '7-Day Weather Forecast', hi: '7 दिन का मौसम पूर्वानुमान' },
  temperature: { en: 'Temperature', hi: 'तापमान' },
  humidity: { en: 'Humidity', hi: 'आर्द्रता' },
  rainfall: { en: 'Rainfall', hi: 'वर्षा' },
  
  // Market
  marketPrices: { en: 'Market Prices', hi: 'बाज़ार मूल्य' },
  crop: { en: 'Crop', hi: 'फसल' },
  price: { en: 'Price', hi: 'मूल्य' },
  perQuintal: { en: 'per Quintal', hi: 'प्रति क्विंटल' },
  
  // Disease
  uploadImage: { en: 'Upload Crop Image', hi: 'फसल की तस्वीर अपलोड करें' },
  detectDisease: { en: 'Detect Disease', hi: 'रोग पहचानें' },
  diseaseResults: { en: 'Detection Results', hi: 'पहचान परिणाम' },
  
  // News
  latestNews: { en: 'Latest Agricultural News', hi: 'नवीनतम कृषि समाचार' },
  
  // Schemes
  govSchemes: { en: 'Government Schemes', hi: 'सरकारी योजनाएं' },
  eligibility: { en: 'Eligibility', hi: 'पात्रता' },
  benefits: { en: 'Benefits', hi: 'लाभ' },
  howToApply: { en: 'How to Apply', hi: 'कैसे आवेदन करें' },
  
  // Techniques
  farmingTips: { en: 'Farming Techniques & Tips', hi: 'खेती की तकनीक और सुझाव' },
  
  // Chatbot
  askQuestion: { en: 'Ask your farming question...', hi: 'अपना खेती का सवाल पूछें...' },
  sendMessage: { en: 'Send', hi: 'भेजें' }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
