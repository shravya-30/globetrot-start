import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ChevronLeft, ChevronRight, Search, MapPin, Smartphone } from "lucide-react";
import hotelsImage from "@/assets/hotels-illustration.jpg";
import mapImage from "@/assets/map-illustration.jpg";
import mobileImage from "@/assets/mobile-booking.jpg";

interface OnboardingCarouselProps {
  onBack: () => void;
  onContinue: () => void;
}

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Find the Best Deals",
    description: "Discover amazing hotels, resorts, and unique stays at unbeatable prices. We compare thousands of options to bring you the best value.",
    image: hotelsImage,
    icon: Search,
  },
  {
    id: 2,
    title: "Personalized Recommendations",
    description: "Get tailored suggestions based on your preferences, travel history, and budget. Explore destinations that match your perfect getaway.",
    image: mapImage,
    icon: MapPin,
  },
  {
    id: 3,
    title: "Easy Booking",
    description: "Book your entire trip with just a few taps. Secure payments, instant confirmations, and 24/7 customer support for peace of mind.",
    image: mobileImage,
    icon: Smartphone,
  },
];

export const OnboardingCarousel = ({ onBack, onContinue }: OnboardingCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onContinue();
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <div className="min-h-screen bg-gradient-ocean p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        
        <div className="text-sm text-muted-foreground">
          {currentSlide + 1} of {slides.length}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md">
          <Card className="animate-scale-in shadow-travel overflow-hidden">
            <CardContent className="p-0">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={currentSlideData.image}
                  alt={currentSlideData.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4">
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-center">
                  {currentSlideData.title}
                </h2>
                
                <p className="text-muted-foreground text-center leading-relaxed">
                  {currentSlideData.description}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-primary scale-110"
                    : "bg-muted hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="ghost"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            <Button
              variant="hero"
              onClick={nextSlide}
              className="flex items-center gap-2"
            >
              {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
              {currentSlide < slides.length - 1 && <ChevronRight className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Skip Button */}
      <div className="text-center mt-6">
        <button
          onClick={onContinue}
          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
          Skip tutorial
        </button>
      </div>
    </div>
  );
};