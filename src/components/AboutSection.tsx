import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import poolImage from "@/assets/pool.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <p className="text-gold text-xs tracking-safari uppercase font-body mb-4">
            Welcome to Makanyi
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-8">
            Your Home in
            <br />
            <span className="italic">the Bush</span>
          </h2>
          <div className="w-12 h-px bg-gold mb-8" />
          <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed mb-6 tracking-wide">
            There is magic in the air when you enter your home from home in the bush. It is not only the astonishing setting or the wondrous wildlife — it is also the unwavering passion and dedication that everyone involved in all aspects of the lodge share with those who join us.
          </p>
          <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed tracking-wide">
            Located on the western edge of the Kruger National Park, the Timbavati Nature Reserve spans over 2.4 million hectares of wild, unspoilt bushveld. This unique situation allows our guests the ultimate luxury of exploring this arresting habitat uninhibited — a rare and authentic safari experience.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <img
            src={poolImage}
            alt="Infinity pool overlooking the Timbavati bushveld at sunset"
            className="w-full h-[500px] object-cover"
            loading="lazy"
          />
          <div className="absolute -bottom-6 -left-6 bg-primary px-8 py-6 hidden md:block">
            <p className="text-primary-foreground font-display text-2xl">10+</p>
            <p className="text-primary-foreground/70 text-xs tracking-widest uppercase font-body mt-1">
              Years of Excellence
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
