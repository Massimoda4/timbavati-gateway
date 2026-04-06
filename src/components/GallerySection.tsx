import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-lodge.jpg";
import suiteImage from "@/assets/suite-interior.jpg";
import wildlifeImage from "@/assets/wildlife.jpg";
import diningImage from "@/assets/dining.jpg";
import poolImage from "@/assets/pool.jpg";

const images = [
  { src: heroImage, alt: "Lodge exterior at golden hour" },
  { src: suiteImage, alt: "Luxury suite interior" },
  { src: diningImage, alt: "Bush dining" },
  { src: wildlifeImage, alt: "Wildlife in the Timbavati" },
  { src: poolImage, alt: "Pool overlooking the bush" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" ref={ref} className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            Gallery
          </h2>
          <p className="text-accent text-xl md:text-2xl font-sub normal-case tracking-normal mt-4">
            Captured moments
          </p>
        </motion.div>
      </div>

      {/* Horizontal scrolling gallery strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex gap-4 px-6 md:px-12 overflow-x-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[280px] md:w-[360px] h-[220px] md:h-[280px] overflow-hidden group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default GallerySection;
