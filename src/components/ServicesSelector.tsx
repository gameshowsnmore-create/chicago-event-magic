import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Utensils, PartyPopper } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Corporate Healthcare Events",
    description: "Specialized team building and wellness programs designed for healthcare organizations.",
    benefits: [
      "Stress Relief Activities",
      "Team Bonding",
      "Morale Boosting",
      "Customized Programs"
    ],
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    icon: Utensils,
    title: "Restaurant & Bar Entertainment",
    description: "Turn slow nights into profit centers with our interactive entertainment solutions.",
    benefits: [
      "Increased Revenue",
      "Customer Retention",
      "Social Media Buzz",
      "Weekly Programming"
    ],
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: PartyPopper,
    title: "Private Event Experiences",
    description: "Luxury entertainment for private parties, celebrations, and special occasions.",
    benefits: [
      "Custom Themes",
      "Premium Service",
      "Professional Hosts",
      "Full Production"
    ],
    gradient: "from-purple-500 to-pink-600"
  }
];

export const ServicesSelector = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            WHO ARE YOU?
          </h2>
          <p className="text-xl gradient-text font-semibold">
            SELECT YOUR EXPERIENCE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur border-2 border-primary/30 hover:border-primary hover:shadow-xl hover:glow-cyan cursor-pointer"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform glow-cyan`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-primary mb-3">Key Benefits:</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <span className="mr-2 text-primary">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
