import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MapPin, Calendar, User, Heart, Settings } from "lucide-react";

export const HomeScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-ocean">
      {/* Header */}
      <div className="bg-card shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
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

        {/* Recommendations */}
        <Card className="shadow-travel animate-fade-in" style={{animationDelay: '0.4s'}}>
          <CardHeader>
            <CardTitle>Recommended for You</CardTitle>
            <CardDescription>Based on your travel preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="aspect-video bg-muted rounded-lg mb-3 overflow-hidden">
                    <div className="w-full h-full bg-gradient-sunset opacity-20 group-hover:opacity-30 transition-opacity" />
                  </div>
                  <h4 className="font-semibold mb-1">Amazing Destination {item}</h4>
                  <p className="text-sm text-muted-foreground mb-2">Perfect for adventure seekers</p>
                  <p className="text-sm font-medium text-primary">From $299/night</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};