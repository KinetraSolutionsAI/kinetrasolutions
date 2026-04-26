import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Kinetra Solutions" className="h-10 w-auto" loading="lazy" width={40} height={40} />
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kinetra Solutions. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
