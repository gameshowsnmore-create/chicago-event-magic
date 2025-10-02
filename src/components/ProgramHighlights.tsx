import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import gsnlImage from "@/assets/gsnl.png";
import badaImage from "@/assets/bada.png";
import { Music } from "lucide-react";

const programs = [
  {
    icon: "🎯",
    title: "Game Show Bingo",
    subtitle: "Chicago's Interactive Trivia Experience",
    description: "Perfect for bars, restaurants, and corporate events. Combines trivia, music, and prizes for maximum engagement.",
    image: gsnlImage,
    alt: "GSNL Game Show Night Live - Free, Fun, Fantastic Prizes"
  },
  {
    icon: "🥂",
    title: "Themed Brunches",
    subtitle: "Drag Bingo & Family Brunch Shows",
    description: "Weekend brunch entertainment featuring drag performances, family-friendly shows, and interactive dining experiences.",
    image: badaImage,
    alt: "Bada Brunch In-A-Box - Themed Events & Private Parties"
  },
  {
    icon: "🎵",
    title: "Music Theme Nights",
    subtitle: "Name That Tune & More",
    description: "Decade-themed music nights, karaoke competitions, and interactive music experiences that get crowds singing along.",
    customIcon: Music
  }
];

export const ProgramHighlights = () => {
  return (
    <section className="py-20 px-4 bg-card/30 backdrop-blur">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            TOP PROGRAM HIGHLIGHTS
          </h2>
          <p className="text-xl text-muted-foreground">
            Chicago's Most Popular Interactive Entertainment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const CustomIcon = program.customIcon;
            return (
              <Card 
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur border-2 border-border hover:border-accent hover:shadow-2xl hover:glow-purple overflow-hidden"
              >
                <CardHeader className="text-center pb-4">
                  {program.image ? (
                    <div className="flex justify-center mb-4">
                      <img 
                        src={program.image} 
                        alt={program.alt}
                        className="w-48 h-48 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform glow-cyan"
                      />
                    </div>
                  ) : CustomIcon ? (
                    <div className="flex justify-center mb-4">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-purple group-hover:scale-110 transition-transform">
                        <CustomIcon className="h-16 w-16 text-white" />
                      </div>
                    </div>
                  ) : (
                    <div className="text-6xl mb-4">{program.icon}</div>
                  )}
                  
                  <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                  <p className="text-sm font-semibold text-primary">
                    {program.subtitle}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
