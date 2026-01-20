import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, MapPin, DollarSign, Building, Sparkles } from "lucide-react";
import { formatInrRange } from "@/lib/currency";
import { usePersistentState } from "@/hooks/use-persistent-state";

interface PreferencesScreenProps {
  onBack: () => void;
  onContinue: () => void;
}

interface Preferences {
  destinations: string[];
  budget: string;
  accommodations: string[];
  travelStyle: string[];
}

export const PreferencesScreen = ({ onBack, onContinue }: PreferencesScreenProps) => {
  const [preferences, setPreferences] = usePersistentState<Preferences>("travelmate_preferences", {
    destinations: [],
    budget: "",
    accommodations: [],
    travelStyle: [],
  });

  const destinations = [
    "Beach & Islands", "Mountains & Nature", "City & Culture", 
    "Adventure & Sports", "Historical Sites", "Food & Wine"
  ];

  const budgetRanges = [
    formatInrRange(500, 1000),
    formatInrRange(1000, 2500), 
    formatInrRange(2500, 5000),
    "₹4,15,000+"
  ];

  const accommodationTypes = [
    "Hotels", "Resorts", "Hostels", "Vacation Rentals", "Boutique Hotels", "Luxury Villas"
  ];

  const travelStyles = [
    "Adventure", "Leisure", "Luxury", "Budget-friendly", "Family-friendly", "Solo Travel"
  ];

  const handleArrayToggle = (category: keyof Preferences, item: string) => {
    setPreferences(prev => ({
      ...prev,
      [category]: Array.isArray(prev[category])
        ? (prev[category] as string[]).includes(item)
          ? (prev[category] as string[]).filter(i => i !== item)
          : [...(prev[category] as string[]), item]
        : [item]
    }));
  };

  const handleBudgetSelect = (budget: string) => {
    setPreferences(prev => ({ ...prev, budget }));
  };

  const handleSubmit = () => {
    // Save preferences logic here
    onContinue();
  };

  const isComplete = preferences.destinations.length > 0 && 
                   preferences.budget && 
                   preferences.accommodations.length > 0 && 
                   preferences.travelStyle.length > 0;

  return (
    <div className="min-h-screen bg-gradient-ocean p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>

        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">Tell Us Your Preferences</h1>
          <p className="text-muted-foreground">Help us personalize your travel experience</p>
        </div>

        <div className="space-y-6">
          {/* Destinations */}
          <Card className="animate-scale-in shadow-travel">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Preferred Destinations
              </CardTitle>
              <CardDescription>What type of places interest you most?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {destinations.map((destination) => (
                  <div key={destination} className="flex items-center space-x-2">
                    <Checkbox
                      id={`dest-${destination}`}
                      checked={preferences.destinations.includes(destination)}
                      onCheckedChange={() => handleArrayToggle("destinations", destination)}
                    />
                    <Label htmlFor={`dest-${destination}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {destination}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Budget */}
          <Card className="animate-scale-in shadow-travel" style={{animationDelay: '0.1s'}}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Budget Range
              </CardTitle>
              <CardDescription>What's your typical travel budget per trip?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {budgetRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => handleBudgetSelect(range)}
                    className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                      preferences.budget === range
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Accommodations */}
          <Card className="animate-scale-in shadow-travel" style={{animationDelay: '0.2s'}}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                Accommodation Types
              </CardTitle>
              <CardDescription>Where do you prefer to stay?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {accommodationTypes.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={`acc-${type}`}
                      checked={preferences.accommodations.includes(type)}
                      onCheckedChange={() => handleArrayToggle("accommodations", type)}
                    />
                    <Label htmlFor={`acc-${type}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Travel Style */}
          <Card className="animate-scale-in shadow-travel" style={{animationDelay: '0.3s'}}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Travel Style
              </CardTitle>
              <CardDescription>How do you like to travel?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {travelStyles.map((style) => (
                  <div key={style} className="flex items-center space-x-2">
                    <Checkbox
                      id={`style-${style}`}
                      checked={preferences.travelStyle.includes(style)}
                      onCheckedChange={() => handleArrayToggle("travelStyle", style)}
                    />
                    <Label htmlFor={`style-${style}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {style}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Continue Button */}
          <div className="pt-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button
              variant="hero"
              size="lg"
              onClick={handleSubmit}
              disabled={!isComplete}
              className="w-full"
            >
              Save Preferences & Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};