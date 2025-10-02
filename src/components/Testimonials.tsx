import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import hybridEventsLogo from "@/assets/hybrid-events-logo.png";

const testimonials = [
  {
    quote: "IRL Events transformed our corporate retreat into an unforgettable experience. The GSNL game show had everyone engaged and laughing!",
    author: "Sarah Johnson",
    company: "TechCorp Industries",
    rating: 5
  },
  {
    quote: "The B2B Speed Dating event was perfectly organized. We made 12 new business connections in just one evening.",
    author: "Michael Chen",
    company: "Innovation Partners",
    rating: 5
  },
  {
    quote: "Our hybrid event reached over 500 participants globally. The technical execution was flawless.",
    author: "Lisa Rodriguez",
    company: "Global Marketing Solutions",
    rating: 5,
    logo: hybridEventsLogo
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Real Reviews from Real Events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:glow-cyan"
            >
              <CardContent className="pt-6">
                {/* Logo if available */}
                {testimonial.logo && (
                  <div className="flex justify-center mb-4">
                    <img 
                      src={testimonial.logo} 
                      alt={`${testimonial.company} logo`}
                      className="h-20 w-auto object-contain drop-shadow-lg"
                    />
                  </div>
                )}
                
                {/* Star Rating */}
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-center mb-6 text-foreground/90 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="text-center border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#reviews" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-semibold"
          >
            <Star className="h-5 w-5" />
            See All Reviews & Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
};
