import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ServicesSelector } from "@/components/ServicesSelector";
import { ProgramHighlights } from "@/components/ProgramHighlights";
import { Testimonials } from "@/components/Testimonials";
import { SocialMedia } from "@/components/SocialMedia";
import { FinalCTA } from "@/components/FinalCTA";
import backgroundImage from "@/assets/website-bg.png";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      {/* Fixed background */}
      <div 
        className="fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <ServicesSelector />
        <ProgramHighlights />
        <Testimonials />
        <SocialMedia />
        <FinalCTA />
      </div>
    </main>
  );
};

export default Index;
