import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary px-6 md:px-12 lg:px-24 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl text-primary-foreground tracking-mega mb-1">
              MAKANYI
            </h3>
            <p className="text-primary-foreground/40 text-[9px] tracking-safari uppercase font-body">
              Private Game Lodge
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <p className="text-primary-foreground/80 font-body text-sm">Timbavati Nature Reserve</p>
            <p className="text-primary-foreground/80 font-body text-sm">Greater Kruger National Park | South Africa</p>
            <p className="text-primary-foreground/80 font-body text-sm mt-2">+27 (0) 15 793 2663</p>
            <p className="text-primary-foreground/80 font-body text-sm">info@makanyilodge.com</p>
            <p className="text-primary-foreground/80 font-body text-sm">reservations@makanyilodge.com</p>

            {/* Social icons */}
            <div className="flex justify-center gap-4 mt-5">
              <a href="#" className="w-9 h-9 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:border-accent transition-colors">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-9 h-9 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:border-accent transition-colors">
                <Instagram size={14} />
              </a>
            </div>
          </div>

          {/* Right placeholder for awards/badge */}
          <div className="flex justify-end">
            <div className="text-right">
              <p className="text-primary-foreground/40 font-body text-[10px] tracking-widest uppercase">
                Award Winning Lodge
              </p>
              <p className="text-accent font-display text-lg mt-1 italic">
                Condé Nast Traveler
              </p>
              <p className="text-primary-foreground/50 font-body text-xs mt-0.5">
                Readers' Choice Awards
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-primary-foreground/30 font-body text-[10px] tracking-widest">
            © Copyright {new Date().getFullYear()} Makanyi Private Game Lodge. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
