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
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/20 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] max-w-5xl"
        >
          Welcome to
          <br />
          <span className="italic font-normal">Makanyi</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-6 w-20 h-[1px] bg-accent"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-6 text-white/80 font-body text-sm md:text-base font-light max-w-lg leading-relaxed tracking-wider"
        >
          Situated in the Big 5 Timbavati Nature Reserve
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-10 px-10 py-3.5 bg-accent text-accent-foreground text-xs tracking-safari uppercase font-body font-semibold hover:bg-accent/90 transition-all duration-300"
        >
          Discover More
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-10 bg-white/30 animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
