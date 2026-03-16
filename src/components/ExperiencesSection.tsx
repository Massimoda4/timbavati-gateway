import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import gameDriveImage from "@/assets/game-drive.jpg";
import diningImage from "@/assets/dining.jpg";
import wellnessImage from "@/assets/wellness.jpg";
import wildlifeImage from "@/assets/wildlife.jpg";

const experiences = [
  {
    title: "Game Drives",
    subtitle: "Twice Daily Safaris",
    description: "Expert-guided morning and evening game drives through the Big 5 territory of the Timbavati.",
    image: gameDriveImage,
  },
  {
    title: "Bush Dining",
    subtitle: "Culinary Excellence",
    description: "Exquisite meals prepared by our talented chefs, served under the African stars.",
    image: diningImage,
  },
  {
    title: "Wellness",
    subtitle: "On-Site Spa",
    description: "Rejuvenate with bespoke treatments on our open-air deck overlooking the bushveld.",
    image: wellnessImage,
  },
  {
    title: "Wildlife",
    subtitle: "Big 5 Encounters",
    description: "Intimate encounters with Africa's most iconic wildlife in their natural habitat.",
    image: wildlifeImage,
  },
];

const ExperiencesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiences" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-gold text-xs tracking-safari uppercase font-body mb-4">
            Unforgettable Moments
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            Experiences
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group relative h-[400px] md:h-[500px] overflow-hidden cursor-pointer"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/50 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <p className="text-gold text-[10px] tracking-safari uppercase font-body mb-2">
                  {exp.subtitle}
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-background mb-3">
                  {exp.title}
                </h3>
                <p className="text-background/70 font-body text-sm leading-relaxed max-w-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {exp.description}
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
