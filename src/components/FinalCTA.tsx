import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export const FinalCTA = () => {
  const handleEmail = () => {
    window.location.href = "mailto:jason@irlevents.fun";
  };

  const handleCall = () => {
    window.location.href = "tel:+16305509595";
  };

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute inset-0 retro-grid opacity-20" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Create Something Amazing?
        </h2>
        
        <p className="text-xl md:text-2xl gradient-text font-semibold mb-8">
          Join hundreds of Chicago venues and organizations that trust IRL Interactive Events
        </p>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          From intimate private gatherings to large corporate events, we bring the excitement and engagement 
          that transforms ordinary occasions into unforgettable experiences. Contact us today to discover 
          how we can elevate your next event.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg"
            onClick={handleCall}
            className="group text-lg px-10 py-7 bg-primary hover:bg-primary-glow text-primary-foreground font-bold transition-all hover:scale-105 glow-cyan"
          >
            <Phone className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
            Call (630) 550-9595
          </Button>

          <Button 
            size="lg"
            onClick={handleEmail}
            className="text-lg px-10 py-7 bg-secondary hover:bg-accent text-secondary-foreground font-bold transition-all hover:scale-105 glow-purple"
          >
            <Mail className="mr-2 h-6 w-6" />
            Email jason@irlevents.fun
          </Button>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            📞 Call or WhatsApp: <span className="text-foreground font-semibold">(630) 550-9595</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            ✉️ Email: <span className="text-foreground font-semibold">jason@irlevents.fun</span>
          </p>
        </div>
      </div>
    </section>
  );
};
