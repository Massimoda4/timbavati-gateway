import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import gameDriveImage from "@/assets/game-drive.jpg";
import diningImage from "@/assets/dining.jpg";
import wellnessImage from "@/assets/wellness.jpg";
import wildlifeImage from "@/assets/wildlife.jpg";

const experiences = [
  {
    title: "Game Drives",
    subtitle: "2 Daily Game Drives",
    image: gameDriveImage,
  },
  {
    title: "Spa",
    subtitle: "On-Site Spa Facilities",
    image: wellnessImage,
  },
  {
    title: "Bush Dining",
    subtitle: "Under the Stars",
    image: diningImage,
  },
  {
    title: "Star Gazing",
    subtitle: "Southern Hemisphere",
    image: wildlifeImage,
  },
];

const ExperiencesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experiences" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            Adventure Awaits
          </h2>
          <p className="text-accent text-xl md:text-2xl font-sub normal-case tracking-normal mt-4">
            Unforgettable moments in the heart of the wild
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-body text-muted-foreground text-sm md:text-[15px] leading-[1.9] tracking-wide max-w-3xl mx-auto text-center mb-14"
        >
          At Makanyi, every day brings a new adventure waiting to unfold. Whether you're seeking thrilling wildlife encounters, peaceful moments in nature, or simply time to relax and soak it all in, there's something for everyone.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              className="group relative h-[380px] overflow-hidden cursor-pointer"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl text-white mb-1">
                  {exp.title}
                </h3>
                <p className="text-white/70 font-body text-xs tracking-widest uppercase">
                  {exp.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
