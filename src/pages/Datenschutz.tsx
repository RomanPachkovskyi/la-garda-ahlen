import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => {
  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-6">
        <Link
          to="/"
          className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="font-serif text-4xl font-medium text-foreground md:text-5xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-12 space-y-8 text-muted-foreground">
          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="mb-2 font-medium text-foreground/80">Allgemeine Hinweise</h3>
            <p className="leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit 
              Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. 
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich 
              identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">
              2. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="mb-2 font-medium text-foreground/80">Verantwortliche Stelle</h3>
            <p className="leading-relaxed">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              La Garda am Freibad<br />
              Am Freibad 1<br />
              59229 Ahlen<br />
              Telefon: +49 2382 123456<br />
              E-Mail: info@lagarda-ahlen.de
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className="mb-2 font-medium text-foreground/80">Server-Log-Dateien</h3>
            <p className="leading-relaxed">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in 
              sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
              Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, 
              Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, 
              IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird 
              nicht vorgenommen.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">
              4. Ihre Rechte
            </h2>
            <p className="leading-relaxed">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, 
              Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. 
              Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten 
              zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können 
              Sie sich jederzeit an uns wenden.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">
              5. Cookies
            </h2>
            <p className="leading-relaxed">
              Diese Website verwendet technisch notwendige Cookies, um die Grundfunktionen 
              der Website zu gewährleisten. Diese Cookies werden nur gesetzt, wenn Sie 
              dem Cookie-Banner zustimmen. Die Cookies speichern keine personenbezogenen 
              Daten und dienen lediglich dazu, Ihre Präferenzen (z.B. Cookie-Zustimmung) 
              zu speichern.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">
              6. Externe Dienste
            </h2>
            <h3 className="mb-2 font-medium text-foreground/80">Google Maps</h3>
            <p className="leading-relaxed">
              Diese Website nutzt Links zu Google Maps. Beim Klicken auf diese Links 
              werden Sie zu einer externen Website weitergeleitet. Bitte beachten Sie 
              die Datenschutzerklärung von Google.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Datenschutz;
