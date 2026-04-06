import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import poolImage from "@/assets/pool.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            Welcome to Makanyi Private Game Lodge
          </h2>
          <p className="text-accent text-sm tracking-widest uppercase font-body mt-4">
            Situated in the Big 5 Timbavati Nature Reserve
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-muted-foreground text-sm md:text-[15px] leading-[1.9] tracking-wide mb-6">
              There is magic in the air when you enter your home from home in the bush, Makanyi Lodge. It is not only the astonishing setting or the wondrous wildlife, it is also the unwavering passion and dedication that everyone involved in all aspects of the lodge share with those who join us.
            </p>
            <p className="font-body text-muted-foreground text-sm md:text-[15px] leading-[1.9] tracking-wide mb-8">
              Located on the western edge of the Kruger National Park, an area that spans over 2.4 million hectares, the Timbavati Nature Reserve is incomparable — wild and unspoilt with fewer lodges than can be counted on one hand. This unique situation allows our guests the ultimate luxury of exploring uninhibited.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="font-display text-3xl text-foreground">10+</p>
                <p className="text-muted-foreground text-[10px] tracking-widest uppercase font-body mt-1">Years</p>
              </div>
              <div className="w-[1px] h-10 bg-border" />
              <div className="text-center">
                <p className="font-display text-3xl text-foreground">8</p>
                <p className="text-muted-foreground text-[10px] tracking-widest uppercase font-body mt-1">Suites</p>
              </div>
              <div className="w-[1px] h-10 bg-border" />
              <div className="text-center">
                <p className="font-display text-3xl text-foreground">Big 5</p>
                <p className="text-muted-foreground text-[10px] tracking-widest uppercase font-body mt-1">Reserve</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={poolImage}
              alt="Infinity pool overlooking the Timbavati bushveld at sunset"
              className="w-full h-[450px] object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
