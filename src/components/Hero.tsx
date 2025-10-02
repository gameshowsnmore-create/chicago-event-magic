import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export const Hero = () => {
  const handleCall = () => {
    window.location.href = "tel:+16305509595";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/16305509595", "_blank");
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Retro grid background effect */}
      <div className="absolute inset-0 retro-grid opacity-30" />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: "linear-gradient(135deg, hsl(190 100% 50% / 0.2) 0%, hsl(270 80% 60% / 0.2) 100%)"
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <img 
            src={logo} 
            alt="IRL Interactive Events - Bring People Back to Reality" 
            className="w-64 md:w-96 h-auto drop-shadow-2xl glow-cyan"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Interactive Events Chicago
        </h1>
        
        <p className="text-xl md:text-3xl font-semibold gradient-text animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          Outside-the-Box Events In-A-Box
        </p>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
          150,000+ hours of IRL Interactive Entertainment delivered to venues, brands, and private events worldwide. 
          Chicago's premier Pop-Up Experiences specialists serving the greater Chicagoland area.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <Button 
            size="lg" 
            onClick={handleCall}
            className="group text-lg px-8 py-6 bg-primary hover:bg-primary-glow text-primary-foreground font-bold transition-all hover:scale-105 glow-cyan"
          >
            <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Call Now: (630) 550-9595
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={handleWhatsApp}
            className="text-lg px-8 py-6 border-2 border-primary text-foreground hover:bg-primary/10 font-bold transition-all hover:scale-105"
          >
            WhatsApp Us
          </Button>
        </div>

        {/* Service Area */}
        <div className="pt-8 text-sm md:text-base text-muted-foreground animate-in fade-in duration-1000 delay-600">
          <p className="font-semibold text-foreground mb-2">📍 Serving Chicago Metro Area</p>
          <p>Chicago, Naperville, Oak Park, Evanston, Schaumburg, Arlington Heights, Des Plaines, and all surrounding suburbs within 50 miles of downtown Chicago.</p>
        </div>
      </div>
    </section>
  );
};
