import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MapPin, Calendar, User, Heart, Settings, ArrowLeft, Home } from "lucide-react";
import { convertUsdToInr, formatInrPrice } from "@/lib/currency";

interface HomeScreenProps {
  onBack?: () => void;
}

export const HomeScreen = ({ onBack }: HomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-ocean">
      {/* Header */}
      <div className="bg-card shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {onBack && (
              <Button variant="ghost" size="sm" onClick={onBack} className="mr-2">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            )}
            <Button variant="ghost" size="sm" className="mr-2">
              <Home className="h-4 w-4" />
            </Button>
            <div className="p-2 rounded-full bg-primary text-primary-foreground">
              <MapPin className="h-5 w-5" />
            </div>
            <h1 className="text-xl font-bold">TravelMate</h1>
          </div>
          
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
            Profile
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Welcome Section */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-2">Welcome back, Explorer! 🌍</h2>
          <p className="text-muted-foreground">Ready for your next adventure?</p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8 shadow-travel animate-scale-in">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Where would you like to go?"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Dates
                </Button>
                <Button variant="hero">
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-warm transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in" style={{animationDelay: '0.1s'}}>
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-full bg-primary/10 text-primary w-fit">
                <MapPin className="h-6 w-6" />
              </div>
              <CardTitle>Popular Destinations</CardTitle>
              <CardDescription>Explore trending travel spots</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-warm transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-full bg-secondary/10 text-secondary w-fit">
                <Heart className="h-6 w-6" />
              </div>
              <CardTitle>Best Deals</CardTitle>
              <CardDescription>Limited time offers</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-warm transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in" style={{animationDelay: '0.3s'}}>
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-full bg-accent/10 text-accent w-fit">
                <Settings className="h-6 w-6" />
              </div>
              <CardTitle>My Trips</CardTitle>
              <CardDescription>Manage your bookings</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Featured Destinations */}
        <Card className="shadow-travel animate-fade-in mb-8" style={{animationDelay: '0.4s'}}>
          <CardHeader>
            <CardTitle>Featured Destinations</CardTitle>
            <CardDescription>Discover amazing places around the world</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  name: "Santorini, Greece",
                  description: "Beautiful white buildings and stunning sunsets",
                  price: 450,
                  image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop&crop=center"
                },
                {
                  id: 2,
                  name: "Bali, Indonesia",
                  description: "Tropical paradise with rice terraces and beaches",
                  price: 250,
                  image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop&crop=center"
                },
                {
                  id: 3,
                  name: "Kyoto, Japan",
                  description: "Ancient temples and traditional Japanese culture",
                  price: 380,
                  image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop&crop=center"
                },
                {
                  id: 4,
                  name: "Maldives",
                  description: "Crystal clear waters and overwater bungalows",
                  price: 750,
                  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center"
                },
                {
                  id: 5,
                  name: "Swiss Alps",
                  description: "Majestic mountains and pristine alpine scenery",
                  price: 520,
                  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center"
                },
                {
                  id: 6,
                  name: "Dubai, UAE",
                  description: "Modern luxury and desert adventures",
                  price: 420,
                  image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop&crop=center"
                }
              ].map((destination) => (
                <div key={destination.id} className="group cursor-pointer">
                  <div className="aspect-video rounded-lg mb-3 overflow-hidden shadow-md">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-semibold mb-1">{destination.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{destination.description}</p>
                  <p className="text-sm font-medium text-primary">From {formatInrPrice(convertUsdToInr(destination.price))}/night</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommended for You */}
        <Card className="shadow-travel animate-fade-in" style={{animationDelay: '0.5s'}}>
          <CardHeader>
            <CardTitle>Recommended for You</CardTitle>
            <CardDescription>Based on your travel preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: "Goa Beach Resort",
                  description: "Perfect for beach lovers and relaxation",
                  price: 180,
                  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center"
                },
                {
                  name: "Himalayan Trek",
                  description: "Adventure seekers paradise",
                  price: 120,
                  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center"
                },
                {
                  name: "Rajasthan Palace",
                  description: "Experience royal luxury and heritage",
                  price: 320,
                  image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop&crop=center"
                }
              ].map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="aspect-video rounded-lg mb-3 overflow-hidden shadow-md">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-semibold mb-1">{item.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <p className="text-sm font-medium text-primary">From {formatInrPrice(convertUsdToInr(item.price))}/night</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};