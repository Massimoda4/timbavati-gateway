import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-lodge.jpg";
import suiteImage from "@/assets/suite-interior.jpg";
import wildlifeImage from "@/assets/wildlife.jpg";
import diningImage from "@/assets/dining.jpg";
import poolImage from "@/assets/pool.jpg";
import wellnessImage from "@/assets/wellness.jpg";

const images = [
  { src: heroImage, alt: "Lodge exterior at golden hour", span: "col-span-2 row-span-2" },
  { src: wildlifeImage, alt: "Lion in golden grass", span: "col-span-1 row-span-1" },
  { src: diningImage, alt: "Bush dining under the stars", span: "col-span-1 row-span-1" },
  { src: suiteImage, alt: "Luxury suite interior", span: "col-span-1 row-span-1" },
  { src: poolImage, alt: "Infinity pool at sunset", span: "col-span-1 row-span-1" },
  { src: wellnessImage, alt: "Bush spa treatment", span: "col-span-2 row-span-1" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding bg-muted" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-xs tracking-safari uppercase font-body mb-4">
            Captured Moments
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            Gallery
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`${img.span} overflow-hidden group`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
