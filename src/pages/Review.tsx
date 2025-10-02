import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Star, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import backgroundImage from "@/assets/website-bg.png";

const Review = () => {
  const reviewPlatforms = [
    {
      name: "Google Reviews",
      icon: "🔍",
      description: "Share your experience on Google",
      url: "#",
      color: "from-blue-500 to-green-500"
    },
    {
      name: "Facebook",
      icon: "👍",
      description: "Leave a review on our Facebook page",
      url: "#",
      color: "from-blue-600 to-blue-400"
    },
    {
      name: "Yelp",
      icon: "⭐",
      description: "Rate us on Yelp",
      url: "#",
      color: "from-red-600 to-red-400"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      description: "Recommend us on LinkedIn",
      url: "#",
      color: "from-blue-700 to-blue-500"
    }
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

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Leave a Review</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your feedback helps us improve and helps others discover our services
              </p>
              <div className="flex gap-1 justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-12 w-12 fill-primary text-primary" />
                ))}
              </div>
            </div>

            {/* Review Platforms */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {reviewPlatforms.map((platform, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 backdrop-blur border-2 hover:border-primary transition-all hover:scale-105 hover:glow-cyan"
                >
                  <CardHeader>
                    <div className="text-5xl mb-2">{platform.icon}</div>
                    <CardTitle className="text-2xl">{platform.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{platform.description}</p>
                    <Button 
                      asChild 
                      className={`w-full bg-gradient-to-r ${platform.color}`}
                    >
                      <a href={platform.url} target="_blank" rel="noopener noreferrer">
                        Leave Review
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Thank You Message */}
            <Card className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur border-2 border-primary">
              <CardContent className="py-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  We truly appreciate you taking the time to share your experience with IRL Interactive Events. 
                  Your feedback helps us continue delivering exceptional entertainment experiences across Chicago.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary glow-cyan">
                    <Link to="/book">Book Another Event</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/">Back to Home</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* What to Include */}
            <Card className="mt-8 bg-card/50 backdrop-blur border-2">
              <CardHeader>
                <CardTitle>What to Include in Your Review</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Which program or service you experienced</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>How the event met or exceeded your expectations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>The professionalism of our team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>How guests/attendees responded to the entertainment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Any specific highlights or memorable moments</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Review;
