import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import backgroundImage from "@/assets/website-bg.png";
import gsnlImage from "@/assets/gsnl.png";
import badaImage from "@/assets/bada.png";
import watercoolerImage from "@/assets/watercooler.png";
import weddingImage from "@/assets/wedding.png";

const Programs = () => {
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

          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Our Programs</h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            Chicago's most popular interactive entertainment experiences
          </p>

          {/* Featured Programs */}
          <div className="space-y-12">
            {/* Game Show Bingo */}
            <Card className="bg-card/50 backdrop-blur border-2 hover:border-primary transition-all hover:glow-cyan overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                <img src={gsnlImage} alt="Game Show Bingo" className="w-full h-full object-cover" />
                <CardContent className="py-6">
                  <div className="text-4xl mb-4">🎯</div>
                  <CardTitle className="text-3xl mb-4">Game Show Bingo</CardTitle>
                  <p className="text-lg mb-4">Chicago's Interactive Trivia Experience</p>
                  <p className="text-muted-foreground mb-6">
                    Perfect for bars, restaurants, and corporate events. Combines trivia, music, and prizes for maximum engagement. Our signature program has entertained thousands across Chicago.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Interactive trivia and music rounds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Professional hosting and sound system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Custom prizes and giveaways</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Social media integration</span>
                    </li>
                  </ul>
                  <Button asChild className="bg-gradient-to-r from-primary to-secondary">
                    <Link to="/book">Book Game Show Bingo</Link>
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* BADA Brunch */}
            <Card className="bg-card/50 backdrop-blur border-2 hover:border-primary transition-all hover:glow-purple overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                <CardContent className="py-6 order-2 md:order-1">
                  <div className="text-4xl mb-4">🥂</div>
                  <CardTitle className="text-3xl mb-4">Themed Brunch Events</CardTitle>
                  <p className="text-lg mb-4">Drag Bingo & Family Brunch Shows</p>
                  <p className="text-muted-foreground mb-6">
                    Weekend brunch entertainment featuring drag performances, family-friendly shows, and interactive dining experiences that keep guests engaged and spending.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Drag bingo with professional performers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Family-friendly brunch shows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Themed decorations and ambiance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Increases dwell time and check averages</span>
                    </li>
                  </ul>
                  <Button asChild className="bg-gradient-to-r from-primary to-secondary">
                    <Link to="/book">Book Brunch Event</Link>
                  </Button>
                </CardContent>
                <img src={badaImage} alt="BADA Brunch" className="w-full h-full object-cover order-1 md:order-2" />
              </div>
            </Card>

            {/* Music Theme Nights */}
            <Card className="bg-card/50 backdrop-blur border-2 hover:border-primary transition-all hover:glow-cyan overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                <img src={watercoolerImage} alt="Music Theme Nights" className="w-full h-full object-cover" />
                <CardContent className="py-6">
                  <div className="text-4xl mb-4">🎵</div>
                  <CardTitle className="text-3xl mb-4">Music Theme Nights</CardTitle>
                  <p className="text-lg mb-4">Name That Tune & More</p>
                  <p className="text-muted-foreground mb-6">
                    Decade-themed music nights, karaoke competitions, and interactive music experiences that get crowds singing along and coming back week after week.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>80s, 90s, 2000s theme nights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Name That Tune competitions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Karaoke with professional setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Custom music libraries</span>
                    </li>
                  </ul>
                  <Button asChild className="bg-gradient-to-r from-primary to-secondary">
                    <Link to="/book">Book Music Night</Link>
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* Corporate Team Building */}
            <Card className="bg-card/50 backdrop-blur border-2 hover:border-primary transition-all hover:glow-purple overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                <CardContent className="py-6 order-2 md:order-1">
                  <div className="text-4xl mb-4">🏢</div>
                  <CardTitle className="text-3xl mb-4">Corporate Team Building</CardTitle>
                  <p className="text-lg mb-4">Strengthen Your Team</p>
                  <p className="text-muted-foreground mb-6">
                    Custom interactive programs designed to build stronger teams, improve communication, and boost morale in your organization.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Team building challenges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Communication workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Problem-solving activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Custom programs for healthcare, tech, and more</span>
                    </li>
                  </ul>
                  <Button asChild className="bg-gradient-to-r from-primary to-secondary">
                    <Link to="/book">Book Team Building</Link>
                  </Button>
                </CardContent>
                <img src={weddingImage} alt="Corporate Team Building" className="w-full h-full object-cover order-1 md:order-2" />
              </div>
            </Card>
          </div>

          {/* CTA */}
          <Card className="mt-16 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur border-2 border-primary">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Book Your Program?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Let's create an unforgettable experience for your venue, company, or special event.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary glow-cyan">
                  <Link to="/book">Book Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:6305509595">Call (630) 550-9595</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Programs;
