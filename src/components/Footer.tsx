import { Mail } from "lucide-react";
import logo from "@/assets/logo-light.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <img src={logo} alt="Kinetra Solutions" className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground max-w-sm">
              AI Solutions per il business del futuro. Sistemi su misura, automazioni e consulenza
              strategica.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Link rapidi</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#chi-siamo" className="hover:text-foreground transition-colors">Chi Siamo</a></li>
              <li><a href="#servizi" className="hover:text-foreground transition-colors">Servizi</a></li>
              <li><a href="#processo" className="hover:text-foreground transition-colors">Processo</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contatti</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a
                  href="mailto:info@kinetrasolutions.com"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" /> info@kinetrasolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/60 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Kinetra Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
