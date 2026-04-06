import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import suiteImage from "@/assets/suite-interior.jpg";
import poolImage from "@/assets/pool.jpg";
import diningImage from "@/assets/dining.jpg";
import wellnessImage from "@/assets/wellness.jpg";

const suiteImages = [
  { src: suiteImage, alt: "Luxury suite interior with bush views" },
  { src: poolImage, alt: "Pool suite overlooking the dam" },
  { src: diningImage, alt: "Private dining area" },
  { src: wellnessImage, alt: "Spa and wellness deck" },
];

const SuitesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="suites" ref={ref} className="bg-secondary">
      {/* Header */}
      <div className="section-padding pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              Luxury Suites
            </h2>
            <p className="text-accent text-sm tracking-widest uppercase font-body mt-4">
              Your home away from home awaits
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-muted-foreground text-sm md:text-[15px] leading-[1.9] tracking-wide max-w-3xl mx-auto text-center mt-8"
          >
            Makanyi Lodge provides a graceful yet unobtrusive sanctuary of calm. Seven enormous suites and one sumptuous family suite blend seamlessly into their environment, offering the space and time to fully unwind — be that by relaxing on your suite's deck with panoramic views, curling up before a roaring fire, or soaking up the atmosphere in a glorious pedestal bath.
          </motion.p>
        </div>
      </div>

      {/* Image carousel strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex overflow-x-auto gap-4 px-6 md:px-12 pb-20 md:pb-28 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {suiteImages.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[320px] md:w-[420px] h-[280px] md:h-[350px] overflow-hidden group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default SuitesSection;
