import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import suiteImage from "@/assets/suite-interior.jpg";

const SuitesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="suites" ref={ref} className="relative">
      {/* Full-bleed image left, text right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative h-[50vh] lg:h-auto"
        >
          <img
            src={suiteImage}
            alt="Luxurious suite interior with panoramic bush views"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="bg-muted flex items-center px-8 md:px-16 lg:px-20 py-16 lg:py-0"
        >
          <div className="max-w-lg">
            <p className="text-gold text-xs tracking-safari uppercase font-body mb-4">
              Accommodation
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-8">
              Luxury Suites
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed mb-6 tracking-wide">
              Seven enormous suites and one sumptuous family suite blend seamlessly into their environment, offering the space and time to fully unwind.
            </p>
            <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed mb-10 tracking-wide">
              Relax on your suite's deck with panoramic views of the bush and bustling dam beyond, curl up before a roaring fire in the evening chill, or soak up the atmosphere in a glorious pedestal bath.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { num: "8", label: "Luxury Suites" },
                { num: "180°", label: "Bush Views" },
                { num: "24h", label: "Personalised Service" },
                { num: "★", label: "5-Star Experience" },
              ].map((item) => (
                <div key={item.label} className="border-t border-border pt-4">
                  <p className="font-display text-xl text-foreground">{item.num}</p>
                  <p className="text-muted-foreground text-xs tracking-widest uppercase font-body mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground text-xs tracking-safari uppercase font-body font-medium hover:bg-safari-light transition-colors duration-500"
            >
              View Suites
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuitesSection;
