import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import backgroundImage from "@/assets/website-bg.png";
import gsnlImage from "@/assets/gsnl.png";
import badaImage from "@/assets/bada.png";
import b2bImage from "@/assets/b2b.png";
import watercoolerImage from "@/assets/watercooler.png";
import hybridImage from "@/assets/hybrid-events.png";
import weddingImage from "@/assets/wedding.png";

const Gallery = () => {
  const images = [
    { src: gsnlImage, alt: "Game Show Bingo Event", title: "Game Show Bingo" },
    { src: badaImage, alt: "BADA Brunch Event", title: "Themed Brunch" },
    { src: b2bImage, alt: "B2B Networking Event", title: "Corporate Networking" },
    { src: watercoolerImage, alt: "Music Theme Night", title: "Music Theme Night" },
    { src: hybridImage, alt: "Hybrid Event", title: "Hybrid Event" },
    { src: weddingImage, alt: "Private Event", title: "Private Celebration" },
  ];

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

          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Event Gallery</h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            See our interactive events in action across Chicago
          </p>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {images.map((image, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-2 hover:border-primary transition-all hover:scale-105 hover:glow-cyan overflow-hidden group">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <CardContent className="py-4">
                  <h3 className="font-bold text-lg">{image.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Media Links */}
          <Card className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur border-2 border-primary mb-16">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold mb-4">See More on Social Media</h2>
              <p className="text-lg mb-8">
                Follow @irleventsfun for daily event photos, videos, and behind-the-scenes content
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary glow-cyan">
                  <a href="https://instagram.com/irleventsfun" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5" />
                    Instagram
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://youtube.com/@irleventsfun" target="_blank" rel="noopener noreferrer">
                    <Youtube className="mr-2 h-5 w-5" />
                    YouTube
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-card/50 backdrop-blur border-2 border-border">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Want to Be Featured?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Book your event with IRL Interactive Events and share your experience with #irleventsfun
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary glow-cyan">
                <Link to="/book">Book Your Event</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Gallery;
