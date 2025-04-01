import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Russell R",
      date: "01/31/2025",
      rating: 5,
      text: "Exceptional service and outstanding results - highly recommend!"
    },
    {
      name: "Holly F",
      date: "01/31/2025",
      rating: 5,
      text: "Professional, creative, and delivered beyond expectations"
    },
    {
      name: "James W",
      date: "01/30/2025",
      rating: 5,
      text: "Incredible attention to detail and amazing customer service"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-500 text-sm mb-4">{testimonial.date}</p>
                <p className="text-center text-gray-700">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;