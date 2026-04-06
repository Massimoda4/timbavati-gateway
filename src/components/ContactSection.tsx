import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            Contact Us
          </h2>
          <p className="text-accent text-sm tracking-widest uppercase font-body mt-4">
            Plan your safari escape
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-muted-foreground text-sm md:text-[15px] leading-[1.9] tracking-wide mb-10">
              Begin your journey to the Timbavati. Our dedicated reservations team is ready to craft your bespoke safari experience.
            </p>

            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase font-body text-muted-foreground mb-1">Email</p>
                  <p className="font-body text-foreground text-sm">info@makanyilodge.com</p>
                  <p className="font-body text-foreground text-sm">reservations@makanyilodge.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase font-body text-muted-foreground mb-1">Phone</p>
                  <p className="font-body text-foreground text-sm">+27 (0) 15 793 2663</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase font-body text-muted-foreground mb-1">Location</p>
                  <p className="font-body text-foreground text-sm">Timbavati Nature Reserve</p>
                  <p className="font-body text-foreground text-sm">Greater Kruger National Park · South Africa</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-background p-8 md:p-10"
          >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] tracking-widest uppercase font-body text-muted-foreground block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-border py-3 px-4 font-body text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-widest uppercase font-body text-muted-foreground block mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-border py-3 px-4 font-body text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] tracking-widest uppercase font-body text-muted-foreground block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border border-border py-3 px-4 font-body text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-widest uppercase font-body text-muted-foreground block mb-2">
                  Preferred Dates
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border border-border py-3 px-4 font-body text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="e.g. 15 - 18 March 2026"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-widest uppercase font-body text-muted-foreground block mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border border-border py-3 px-4 font-body text-sm text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your dream safari..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-accent text-accent-foreground text-xs tracking-safari uppercase font-body font-semibold hover:bg-accent/90 transition-colors duration-300"
              >
                Send Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
