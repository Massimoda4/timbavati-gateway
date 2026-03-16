import { motion } from "framer-motion";
import heroImage from "@/assets/hero-lodge.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Makanyi Private Game Lodge at golden hour overlooking the Timbavati bushveld"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-background/70 text-xs tracking-safari uppercase font-body mb-6"
        >
          Timbavati Nature Reserve · South Africa
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl text-background font-medium leading-tight max-w-4xl"
        >
          Where the Wild
          <br />
          <span className="italic">Meets Luxury</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-3 w-16 h-px bg-gold"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 text-background/80 font-body text-sm md:text-base font-light max-w-xl leading-relaxed tracking-wide"
        >
          An exclusive Big 5 safari experience in the heart of untouched African wilderness
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-10 px-10 py-3.5 border border-gold text-gold text-xs tracking-safari uppercase font-body font-medium hover:bg-gold hover:text-background transition-all duration-500"
        >
          Begin Your Journey
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-background/50 text-[10px] tracking-safari uppercase font-body">
          Scroll
        </span>
        <div className="w-px h-8 bg-background/30" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
