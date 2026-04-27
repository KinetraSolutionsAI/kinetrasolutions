import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Delay slightly for visual effect
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pb-safe pointer-events-none">
      <div className="max-w-4xl mx-auto pointer-events-auto">
        <div className="bg-zinc-900/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between text-zinc-100">
          <div className="flex-1 space-y-3">
            <h3 className="text-xl font-semibold text-white">Utilizziamo i cookie</h3>
            <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl">
              Utilizziamo cookie tecnici essenziali e cookie di profilazione (incluso Meta Pixel) per migliorare la tua navigazione e offrirti contenuti personalizzati. 
              Scopri di più nella nostra{" "}
              <Link to="/cookie-policy" className="text-primary hover:text-primary-hover underline underline-offset-4 transition-colors">
                Cookie Policy
              </Link>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Button 
              variant="outline" 
              onClick={declineCookies}
              className="w-full sm:w-auto bg-white text-zinc-900 hover:bg-zinc-200 border-0"
            >
              Rifiuta
            </Button>
            <Button 
              onClick={acceptCookies}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Accetta tutto
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBar;
