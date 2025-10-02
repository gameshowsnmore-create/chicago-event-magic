import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Programs", path: "/programs" },
  { name: "Gallery", path: "/gallery" },
  { name: "⭐ Leave a Review", path: "/review" },
  { name: "Book IRL Events", path: "/book" },
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
            <img src={logo} alt="IRL Interactive Events" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-110 ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground glow-cyan"
                    : "hover:bg-accent hover:text-accent-foreground hover:glow-purple"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Call Button - Desktop */}
          <Button
            asChild
            size="lg"
            className="hidden lg:flex bg-gradient-to-r from-primary to-secondary hover:scale-110 transition-all glow-cyan"
          >
            <a href="tel:6305509595">
              <Phone className="mr-2 h-4 w-4" />
              CALL NOW!
            </a>
          </Button>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-primary to-secondary"
            >
              <a href="tel:6305509595">
                <Phone className="h-4 w-4" />
              </a>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background/98 backdrop-blur-xl">
                <div className="flex flex-col gap-4 mt-8">
                  <img src={logo} alt="IRL Interactive Events" className="h-16 w-auto mb-4" />
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={`px-4 py-3 rounded-md text-base font-medium transition-all duration-300 ${
                        isActive(link.path)
                          ? "bg-primary text-primary-foreground glow-cyan"
                          : "hover:bg-accent hover:text-accent-foreground hover:glow-purple"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button
                    asChild
                    size="lg"
                    className="mt-4 bg-gradient-to-r from-primary to-secondary glow-cyan"
                  >
                    <a href="tel:6305509595">
                      <Phone className="mr-2 h-4 w-4" />
                      CALL NOW!
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
