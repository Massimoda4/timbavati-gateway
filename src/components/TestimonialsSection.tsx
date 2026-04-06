import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    title: "One a scale of 1 to 10. We give it a 15.",
    quote: "We stayed here 3 nights at Makanyi. What a great experience. The rooms were outstanding, spacious, and clean. The chef makes great food and you feel full all day long. The entire staff starting with Lillian goes out of their way to welcome you and looking after you. You feel as part of their family. One a scale of 1 to 10, we gave them a 15.",
    author: "Tom M",
    source: "TripAdvisor",
  },
  {
    title: "Life changing stay",
    quote: "Had an absolutely amazing time at Makanyi! Huge shoutout to Sake and Casey for making the trip unforgettable and keeping us safe. Johannes was so attentive, the barman blew us away with surprise drinks and Cecilia's cheerfulness made every day brighter. Truly a life-changing experience – can't recommend it enough!",
    author: "Sarah C",
    source: "TripAdvisor",
  },
  {
    title: "Sooo good, book it now",
    quote: "This lodge has it all – amazing people, food, rooms, scenery. They think about the guest experience from the moment you arrive and the attention to detail is incredible. All the staff are utterly amazing including the chefs who create the most fabulous meals. This was a holiday of a lifetime for us.",
    author: "Sheila M",
    source: "TripAdvisor",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="section-padding bg-primary">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-sub text-3xl md:text-4xl text-primary-foreground mb-8">
                {testimonials[active].title}
              </h3>
              <p className="font-body text-primary-foreground/80 text-sm md:text-[15px] leading-[1.9] tracking-wide mb-8">
                "{testimonials[active].quote}"
              </p>
              <p className="text-accent text-sm font-body tracking-widest uppercase font-medium">
                {testimonials[active].author}
              </p>
              <p className="text-primary-foreground/40 text-xs font-body tracking-widest uppercase mt-1">
                {testimonials[active].source}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "bg-accent w-8" : "bg-primary-foreground/20 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
