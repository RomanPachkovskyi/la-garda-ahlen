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
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              Rechtliche Hinweise & Anbieterinformationen
            </h2>
            <h3 className="mb-3 font-serif text-lg text-foreground">
              Angaben gemäß § 5 TMG:
            </h3>
            <p>
              La Garda Ahlen<br />
              Bürgermeister-Corneli-Ring 48<br />
              59227 Ahlen
            </p>
          </section>

          <section>
            <h3 className="mb-3 font-serif text-lg text-foreground">
              Inhaber
            </h3>
            <p>
              Ramazan Firinci
            </p>
          </section>

          <section>
            <h3 className="mb-3 font-serif text-lg text-foreground">
              Kontakt
            </h3>
            <p>
              Telefon: +49 2382 855 355<br />
              E-Mail: <a href="mailto:info@lagarda-ahlen.de" className="text-primary hover:underline">info@lagarda-ahlen.de</a>
            </p>
          </section>

          <section>
            <h3 className="mb-3 font-serif text-lg text-foreground">
              Steuernummer
            </h3>
            <p>
              St.-Nr.: 304/5048/2029
            </p>
          </section>

          <section>
            <h3 className="mb-3 font-serif text-lg text-foreground">
              Verantwortlich für den Inhalt gemäß §18 Abs. 2 MStV
            </h3>
            <p>
              Ramazan Firinci<br />
              Bürgermeister-Corneli-Ring 48, 59227 Ahlen
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              Haftungsausschluss (Disclaimer)
            </h2>

            <h3 className="mb-3 font-serif text-lg text-foreground">
              Haftung für Inhalte
            </h3>
            <p className="leading-relaxed mb-6">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind
              wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
              fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
              der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
              entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h3 className="mb-3 font-serif text-lg text-foreground">
              Haftung für Links
            </h3>
            <p className="leading-relaxed mb-6">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
              zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
              Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
              inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
              einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Links umgehend entfernen.
            </p>

            <h3 className="mb-3 font-serif text-lg text-foreground">
              Urheberrecht
            </h3>
            <p className="leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
              Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
              erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
              Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden
              Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
              umgehend entfernen.
            </p>

            <p className="text-sm mt-6">
              Quellen: eRecht24
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Impressum;
