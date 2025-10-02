import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    description: "Daily event photos",
    url: "https://instagram.com/irleventsfun",
    color: "from-pink-500 to-purple-600"
  },
  {
    name: "TikTok",
    icon: Instagram, // Using Instagram icon as placeholder
    description: "Behind-the-scenes",
    url: "https://tiktok.com/@irleventsfun",
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "YouTube",
    icon: Youtube,
    description: "Event highlights",
    url: "https://youtube.com/@irleventsfun",
    color: "from-red-500 to-pink-600"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    description: "B2B content",
    url: "https://linkedin.com/company/irlevents",
    color: "from-blue-600 to-cyan-600"
  }
];

export const SocialMedia = () => {
  return (
    <section className="py-20 px-4 bg-card/20 backdrop-blur">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Follow @irleventsfun
          </h2>
          <p className="text-xl text-muted-foreground">
            Stay connected and see our latest events across all social platforms
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <Card 
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur border-2 border-border hover:border-primary hover:glow-cyan cursor-pointer"
                onClick={() => window.open(social.url, "_blank")}
              >
                <CardContent className="pt-6 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform glow-cyan`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-bold text-lg mb-1">{social.name}</p>
                  <p className="text-sm text-muted-foreground">{social.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-accent text-white font-bold px-8 py-6 text-lg transition-all hover:scale-105 glow-purple"
            onClick={() => window.open("https://linktr.ee/irleventsfun", "_blank")}
          >
            📱 Visit Our Social Hub
          </Button>
          <p className="mt-4 text-muted-foreground">
            Tag us @irleventsfun to be featured in our stories!
          </p>
        </div>
      </div>
    </section>
  );
};
