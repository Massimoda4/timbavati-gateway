import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    quote: "This lodge has it all – amazing people, food, rooms, scenery. They think about the guest experience from the moment you arrive and the attention to detail is incredible. This was a holiday of a lifetime.",
    author: "Sheila M",
    source: "TripAdvisor",
  },
  {
    quote: "We stayed 3 nights at Makanyi. What a great experience. The rooms were outstanding, spacious, and clean. The entire staff goes out of their way to welcome you. On a scale of 1 to 10, we gave them a 15.",
    author: "Tom M",
    source: "TripAdvisor",
  },
  {
    quote: "Had an absolutely amazing time at Makanyi! Truly a life-changing experience. The guides were exceptional, the staff attentive, and every detail was thoughtfully curated. Can't recommend it enough!",
    author: "Sarah C",
    source: "TripAdvisor",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} className="bg-primary section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <p className="text-gold text-xs tracking-safari uppercase font-body mb-4">
            Guest Stories
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground leading-tight mb-12">
            What Our Guests Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="min-h-[200px]"
        >
          <p className="font-display text-lg md:text-xl text-primary-foreground/90 italic leading-relaxed mb-8">
            "{testimonials[active].quote}"
          </p>
          <div className="w-12 h-px bg-gold mx-auto mb-4" />
          <p className="text-gold text-sm font-body tracking-widest uppercase">
            {testimonials[active].author}
          </p>
          <p className="text-primary-foreground/50 text-xs font-body tracking-widest uppercase mt-1">
            {testimonials[active].source}
          </p>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === active ? "bg-gold w-6" : "bg-primary-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
