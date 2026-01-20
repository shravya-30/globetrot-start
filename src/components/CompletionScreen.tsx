import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft } from "lucide-react";
import celebrationImage from "@/assets/celebration-travel.jpg";

interface CompletionScreenProps {
  onBack?: () => void;
  onStartExploring: () => void;
}

export const CompletionScreen = ({ onBack, onStartExploring }: CompletionScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-ocean p-6 flex items-center justify-center">
      <div className="w-full max-w-md text-center animate-fade-in relative">
        {/* Back Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onBack?.()}
          disabled={!onBack}
          className="absolute left-0 top-0 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>

        {/* Success Icon */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-travel animate-scale-in">
              <img
                src={celebrationImage}
                alt="Celebration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 bg-primary rounded-full p-2 shadow-warm animate-bounce">
              <CheckCircle className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold text-foreground animate-fade-in" style={{animationDelay: '0.2s'}}>
            You're All Set! 🎉
          </h1>
          
          <div className="space-y-2 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <p className="text-xl text-muted-foreground">
              Welcome to TravelMate!
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
              Your personalized travel companion is ready. Let's find your next amazing adventure!
            </p>
          </div>
        </div>

        {/* Features Preview */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-travel animate-fade-in" style={{animationDelay: '0.6s'}}>
          <h3 className="font-semibold mb-4 text-card-foreground">What's next?</h3>
          <div className="space-y-3 text-sm text-muted-foreground text-left">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Browse personalized destination recommendations</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Compare the best deals on hotels and flights</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Book your perfect trip with confidence</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{animationDelay: '0.8s'}}>
          <Button
            variant="explore"
            size="lg"
            onClick={onStartExploring}
            className="text-lg px-12 py-4 h-auto font-semibold w-full"
          >
            Start Exploring
          </Button>
          
          <p className="text-muted-foreground text-sm mt-4">
            Ready to discover amazing places?
          </p>
        </div>
      </div>
    </div>
  );
};