import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <p className="text-gold text-xs tracking-safari uppercase font-body mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-8">
            Plan Your
            <br />
            <span className="italic">Safari Escape</span>
          </h2>
          <div className="w-12 h-px bg-gold mb-8" />
          <p className="font-body text-muted-foreground text-sm leading-relaxed mb-10 tracking-wide">
            Begin your journey to the Timbavati. Our dedicated reservations team is ready to craft your bespoke safari experience.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail size={18} className="text-gold mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs tracking-widest uppercase font-body text-muted-foreground mb-1">Email</p>
                <p className="font-body text-foreground text-sm">reservations@makanyi.co.za</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={18} className="text-gold mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs tracking-widest uppercase font-body text-muted-foreground mb-1">Phone</p>
                <p className="font-body text-foreground text-sm">+27 (0) 15 793 3466</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs tracking-widest uppercase font-body text-muted-foreground mb-1">Location</p>
                <p className="font-body text-foreground text-sm">Timbavati Nature Reserve, Limpopo, South Africa</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="bg-muted p-8 md:p-12"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs tracking-widest uppercase font-body text-muted-foreground block mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors placeholder:text-muted-foreground/50"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase font-body text-muted-foreground block mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors placeholder:text-muted-foreground/50"
                  placeholder="Enter your surname"
                />
              </div>
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase font-body text-muted-foreground block mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors placeholder:text-muted-foreground/50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase font-body text-muted-foreground block mb-2">
                Preferred Dates
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors placeholder:text-muted-foreground/50"
                placeholder="e.g. 15 - 18 March 2026"
              />
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase font-body text-muted-foreground block mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-muted-foreground/50"
                placeholder="Tell us about your dream safari..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-primary text-primary-foreground text-xs tracking-safari uppercase font-body font-medium hover:bg-safari-light transition-colors duration-500"
            >
              Send Enquiry
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
