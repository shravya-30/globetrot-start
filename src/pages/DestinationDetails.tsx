import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Calendar, Globe, DollarSign, Languages, Heart } from "lucide-react";
import { getDestinationById } from "@/data/destinations";
import { convertUsdToInr, formatInrPrice } from "@/lib/currency";

const DestinationDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const destination = id ? getDestinationById(id) : undefined;

  if (!destination) {
    return (
      <div className="min-h-screen bg-gradient-ocean flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center p-8">
          <CardHeader>
            <CardTitle>Destination Not Found</CardTitle>
            <CardDescription>The destination you're looking for doesn't exist.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate("/")} variant="hero">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-ocean">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Navigation */}
        <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Button 
            variant="ghost" 
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-5 w-5" />
              <span className="text-lg opacity-90">{destination.country}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{destination.name}</h1>
            <p className="text-xl opacity-90">{destination.description}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto p-6 -mt-10 relative z-10">
        {/* Quick Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center shadow-travel">
            <CardContent className="p-4">
              <DollarSign className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-sm text-muted-foreground">Starting from</p>
              <p className="font-bold text-primary">{formatInrPrice(convertUsdToInr(destination.price))}/night</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-travel">
            <CardContent className="p-4">
              <Calendar className="h-6 w-6 mx-auto mb-2 text-secondary" />
              <p className="text-sm text-muted-foreground">Best Time</p>
              <p className="font-semibold text-sm">{destination.bestTimeToVisit}</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-travel">
            <CardContent className="p-4">
              <Globe className="h-6 w-6 mx-auto mb-2 text-accent" />
              <p className="text-sm text-muted-foreground">Currency</p>
              <p className="font-semibold text-sm">{destination.currency}</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-travel">
            <CardContent className="p-4">
              <Languages className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-sm text-muted-foreground">Language</p>
              <p className="font-semibold text-sm">{destination.language}</p>
            </CardContent>
          </Card>
        </div>

        {/* About Section */}
        <Card className="shadow-travel mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle>About {destination.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{destination.longDescription}</p>
          </CardContent>
        </Card>

        {/* Things to Explore */}
        <Card className="shadow-travel mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <CardHeader>
            <CardTitle>Things to Explore</CardTitle>
            <CardDescription>Must-visit attractions and experiences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destination.attractions.map((attraction, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer bg-muted/30 rounded-lg overflow-hidden hover:shadow-warm transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={attraction.image} 
                      alt={attraction.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-2">{attraction.name}</h4>
                    <p className="text-sm text-muted-foreground">{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Book Now Section */}
        <Card className="shadow-travel animate-fade-in bg-gradient-to-r from-primary/10 to-secondary/10" style={{ animationDelay: '0.2s' }}>
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Ready to Explore {destination.name}?</h3>
            <p className="text-muted-foreground mb-6">Book your dream vacation today and create unforgettable memories</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Book Now
              </Button>
              <Button variant="outline" size="lg">
                Contact Travel Expert
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DestinationDetails;
