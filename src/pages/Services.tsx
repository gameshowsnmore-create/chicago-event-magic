import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Target, Rocket, DollarSign, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import backgroundImage from "@/assets/website-bg.png";

const Services = () => {
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

          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Our Services</h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            Professional interactive entertainment solutions for every occasion
          </p>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-card/50 backdrop-blur border-2 hover:border-primary transition-all hover:scale-105 hover:glow-cyan">
              <CardHeader>
                <div className="text-5xl mb-4">🏥</div>
                <CardTitle className="text-2xl">Corporate Healthcare Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Specialized team building and wellness programs designed for healthcare organizations.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">What We Offer:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Stress Relief Activities</li>
                    <li>Team Bonding Experiences</li>
                    <li>Morale Boosting Programs</li>
                    <li>Customized Wellness Events</li>
                    <li>Department Integration Activities</li>
                    <li>Professional Development Fun</li>
                  </ul>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-2 hover:border-primary transition-all hover:scale-105 hover:glow-purple">
              <CardHeader>
                <div className="text-5xl mb-4">🍽️</div>
                <CardTitle className="text-2xl">Restaurant & Bar Entertainment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Turn slow nights into profit centers with our interactive entertainment solutions.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">What We Offer:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Game Show Bingo Nights</li>
                    <li>Themed Brunch Events</li>
                    <li>Music Theme Nights</li>
                    <li>Weekly Programming</li>
                    <li>Social Media Activation</li>
                    <li>Customer Retention Programs</li>
                  </ul>
                </div>
                <Button asChild className="w-full bg-gradient-to-r from-primary to-secondary">
                  <Link to="/programs">Popular Programs</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-2 hover:border-primary transition-all hover:scale-105 hover:glow-cyan">
              <CardHeader>
                <div className="text-5xl mb-4">🎉</div>
                <CardTitle className="text-2xl">Private Event Experiences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Luxury entertainment for private parties, celebrations, and special occasions.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">What We Offer:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Custom Theme Development</li>
                    <li>Premium Service Experience</li>
                    <li>Professional Host Services</li>
                    <li>Full Production Management</li>
                    <li>Birthday & Anniversary Celebrations</li>
                    <li>Wedding Reception Entertainment</li>
                  </ul>
                </div>
                <Button asChild className="w-full bg-gradient-to-r from-primary to-secondary">
                  <Link to="/book">Get Custom Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Why Choose Our Services</h2>
            <p className="text-center text-xl mb-12">150,000+ Hours of Proven Experience</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-card/50 backdrop-blur text-center hover:scale-105 transition-all">
                <CardContent className="pt-6">
                  <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold text-lg mb-2">Proven Results</h3>
                  <p className="text-sm text-muted-foreground">Extensive experience ensures your event's success with measurable engagement</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur text-center hover:scale-105 transition-all">
                <CardContent className="pt-6">
                  <Rocket className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold text-lg mb-2">Turnkey Solutions</h3>
                  <p className="text-sm text-muted-foreground">Complete event management from planning to cleanup. Zero stress for you</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur text-center hover:scale-105 transition-all">
                <CardContent className="pt-6">
                  <DollarSign className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold text-lg mb-2">ROI Focused</h3>
                  <p className="text-sm text-muted-foreground">Events typically increase venue revenue by 30-50% with detailed analytics</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur text-center hover:scale-105 transition-all">
                <CardContent className="pt-6">
                  <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold text-lg mb-2">Custom Experiences</h3>
                  <p className="text-sm text-muted-foreground">Every event is tailored to your audience, venue, and specific goals</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Service Process */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Our Service Process</h2>
            <p className="text-center text-xl mb-12">How We Bring Your Vision to Life</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/50 backdrop-blur hover:scale-105 transition-all">
                <CardHeader>
                  <div className="text-4xl font-bold text-primary mb-2">1</div>
                  <CardTitle>Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We discuss your goals, audience, venue, and budget to create the perfect entertainment solution.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur hover:scale-105 transition-all">
                <CardHeader>
                  <div className="text-4xl font-bold text-primary mb-2">2</div>
                  <CardTitle>Customization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We design and customize the program to match your brand, theme, and specific requirements.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur hover:scale-105 transition-all">
                <CardHeader>
                  <div className="text-4xl font-bold text-primary mb-2">3</div>
                  <CardTitle>Execution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Professional setup, hosting, and management. We handle everything so you can enjoy the event.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur border-2 border-primary">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Event?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Whether you need corporate team building, restaurant entertainment, or private event experiences, we have the expertise and programs to make your event unforgettable.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary glow-cyan">
                  <Link to="/book">Book Our Services</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/programs">Browse Programs</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Services;
