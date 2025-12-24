import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/20 bg-background py-8">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-6 sm:flex-row sm:gap-8">
        <Link
          to="/impressum"
          className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
        >
          Impressum
        </Link>
        <span className="hidden text-muted-foreground/40 sm:inline">·</span>
        <Link
          to="/datenschutz"
          className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
        >
          Datenschutz
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
