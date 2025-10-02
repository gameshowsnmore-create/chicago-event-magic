import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Phone, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import backgroundImage from "@/assets/website-bg.png";

const BookEvent = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guests: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Received!",
      description: "We'll contact you within 24 hours to discuss your event.",
    });
  };

  return (
    <main className="relative min-h-screen">
      <div 
        className="fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      />
      
      <div className="relative z-10">
        <Navigation />
        
        <div className="container mx-auto px-4 pt-32 pb-20">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Book Your Event</h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            Let's create an unforgettable experience together
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <Card className="lg:col-span-2 bg-card/50 backdrop-blur border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Event Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input 
                        id="name" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        required 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventType">Event Type *</Label>
                      <Select onValueChange={(value) => setFormData({...formData, eventType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="game-show">Game Show Bingo</SelectItem>
                          <SelectItem value="brunch">Themed Brunch</SelectItem>
                          <SelectItem value="music">Music Theme Night</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="private">Private Party</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input 
                        id="date" 
                        type="date" 
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">Expected Guests</Label>
                      <Input 
                        id="guests" 
                        type="number" 
                        placeholder="50"
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your event</Label>
                    <Textarea 
                      id="message" 
                      rows={5}
                      placeholder="Describe your event, venue, audience, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary glow-cyan">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur border-2 hover:scale-105 transition-all">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Call or WhatsApp</h3>
                      <a href="tel:6305509595" className="text-primary hover:underline">
                        (630) 550-9595
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <a href="mailto:jason@irlevents.fun" className="text-primary hover:underline">
                        jason@irlevents.fun
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">WhatsApp</h3>
                      <p className="text-sm text-muted-foreground">
                        Quick responses via WhatsApp
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur border-2 border-primary">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">📍 Service Area</h3>
                  <p className="text-sm">
                    Chicago, Naperville, Oak Park, Evanston, Schaumburg, Arlington Heights, Des Plaines, and all surrounding suburbs within 50 miles of downtown Chicago.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-2">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">⚡ Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to booking requests within 24 hours. For urgent requests, please call us directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookEvent;
