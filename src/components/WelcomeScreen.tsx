import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

// High-quality hero image from Unsplash
const heroImage = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop&crop=center&auto=format&q=80";

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export const WelcomeScreen = ({ onGetStarted }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen p-6 text-center">
        {/* Logo */}
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-fade-in">
            <div className="mb-8 flex items-center justify-center">
              <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                <Plane className="h-12 w-12 text-white animate-float" />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-4 animate-scale-in">
              TravelMate
            </h1>
            
            <div className="space-y-4 max-w-sm mx-auto">
              <h2 className="text-2xl font-semibold text-white/95 animate-fade-in" style={{animationDelay: '0.2s'}}>
                Discover Your Next Adventure
              </h2>
              
              <p className="text-lg text-white/80 leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
                Find amazing destinations, book the perfect stay, and create unforgettable memories
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Button 
            variant="hero" 
            size="lg" 
            onClick={onGetStarted}
            className="text-lg px-12 py-4 h-auto font-semibold"
          >
            Get Started
          </Button>
          
          <p className="text-white/70 text-sm mt-4">
            Join thousands of happy travelers
          </p>
        </div>
      </div>
    </div>
  );
};