import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { FloatingChatbot } from "./components/FloatingChatbot";

const ChatbotWrapper = () => {
  const location = useLocation();
  const shouldShowChatbot = location.pathname !== '/auth';
  
  return shouldShowChatbot ? <FloatingChatbot /> : null;
};
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Weather from "./pages/Weather";
import Market from "./pages/Market";
import Disease from "./pages/Disease";
import DiseaseGallery from "./pages/DiseaseGallery";
import News from "./pages/News";
import Schemes from "./pages/Schemes";
import Techniques from "./pages/Techniques";
import CropGuide from "./pages/CropGuide";
import Chatbot from "./pages/Chatbot";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  return user ? <>{children}</> : <Navigate to="/auth" />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <AuthProvider>
            <ChatbotWrapper />
            <Routes>
              <Route path="/auth" element={<Auth />} />
              <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/weather" element={<ProtectedRoute><Weather /></ProtectedRoute>} />
              <Route path="/market" element={<ProtectedRoute><Market /></ProtectedRoute>} />
              <Route path="/disease" element={<ProtectedRoute><Disease /></ProtectedRoute>} />
              <Route path="/news" element={<ProtectedRoute><News /></ProtectedRoute>} />
              <Route path="/schemes" element={<ProtectedRoute><Schemes /></ProtectedRoute>} />
              <Route path="/techniques" element={<ProtectedRoute><Techniques /></ProtectedRoute>} />
              <Route path="/crop-guide" element={<ProtectedRoute><CropGuide /></ProtectedRoute>} />
              <Route path="/chatbot" element={<ProtectedRoute><Chatbot /></ProtectedRoute>} />
              <Route path="/disease-gallery" element={<ProtectedRoute><DiseaseGallery /></ProtectedRoute>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
