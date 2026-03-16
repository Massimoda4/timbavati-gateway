const Footer = () => {
  return (
    <footer className="bg-foreground px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl text-background tracking-safari mb-2">
              MAKANYI
            </h3>
            <p className="text-background/40 text-[10px] tracking-safari uppercase font-body mb-4">
              Private Game Lodge
            </p>
            <p className="text-background/60 font-body text-sm leading-relaxed">
              An exclusive Big 5 safari experience in the Timbavati Nature Reserve, South Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-gold text-xs tracking-safari uppercase font-body mb-4">
              Explore
            </p>
            <div className="space-y-3">
              {["About", "Suites", "Experiences", "Gallery", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-background/60 font-body text-sm hover:text-gold transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-gold text-xs tracking-safari uppercase font-body mb-4">
              Contact
            </p>
            <div className="space-y-3 text-background/60 font-body text-sm">
              <p>reservations@makanyi.co.za</p>
              <p>+27 (0) 15 793 3466</p>
              <p>Timbavati Nature Reserve</p>
              <p>Limpopo, South Africa</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/30 font-body text-xs tracking-widest">
            © {new Date().getFullYear()} Makanyi Private Game Lodge. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/30 font-body text-xs hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/30 font-body text-xs hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
