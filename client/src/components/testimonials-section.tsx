import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  content: string;
  author: string;
  company: string;
  title: string;
  logo: string;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      content: "Elite Copilot is the best driver monitoring system we used so far. We especially like the easy to use cloud platform to identify unsafe driving behavior at a glance.",
      author: "Ronald",
      title: "General Manager",
      company: "Boke Tools Machinery Pte Ltd",
      logo: "/assets/boke-logo.png"
    },
    {
      content: "The driver behavior monitoring has significantly improved our safety record. Insurance premiums are down, and our team feels more accountable. Great investment!",
      author: "Tony",
      title: "Managing Director",
      company: "Tech Engineering & Construction Pte Ltd",
      logo: "/assets/tec-logo.png"
    }
  ];

  return (
    <section className="pb-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        
        <div className="relative">
          <div className="flex overflow-x-auto gap-x-4 pb-4 pr-4 md:grid md:grid-cols-2 md:gap-8 md:pb-0 md:pr-0 md:overflow-x-visible 
                          after:absolute after:top-0 after:right-0 after:bottom-0 after:w-16 after:bg-gradient-to-l after:from-white after:to-transparent after:pointer-events-none 
                          md:after:hidden">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 flex-shrink-0 w-full sm:w-4/5 md:w-auto">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="italic mb-4">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="mr-3">
                      <div className="w-10 h-10 bg-transparent rounded-full">
                        <img src={testimonial.logo} alt={testimonial.author} className="w-full h-full object-contain rounded-full" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
