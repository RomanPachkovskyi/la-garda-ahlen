import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Impressum = () => {
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
          Impressum
        </h1>

        <div className="mt-12 space-y-8 text-muted-foreground">
          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              La Garda am Freibad<br />
              Am Freibad 1<br />
              59229 Ahlen<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">
              Kontakt
            </h2>
            <p>
              Telefon: +49 2382 123456<br />
              E-Mail: info@lagarda-ahlen.de
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">
              Vertreten durch
            </h2>
            <p>
              [Name des Geschäftsführers]
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE [Nummer einfügen]
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              [Name]<br />
              Am Freibad 1<br />
              59229 Ahlen
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">
              Haftungsausschluss
            </h2>
            <p className="leading-relaxed">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für 
              die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind 
              ausschließlich deren Betreiber verantwortlich.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Impressum;
