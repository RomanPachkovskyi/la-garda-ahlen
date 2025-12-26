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
            <h2 className="mb-4 font-serif text-2xl text-foreground">
              Schutz Ihrer personenbezogenen Daten
            </h2>
            <p className="text-sm">
              <strong>Stand:</strong> 26. Dezember 2025
            </p>
          </section>

          <section>
            <h3 className="mb-3 font-serif text-xl text-foreground">
              1. Verantwortlicher
            </h3>
            <p className="leading-relaxed mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber
              (nachfolgend „wir/uns"):
            </p>
            <p className="leading-relaxed mb-4">
              <strong>La Garda Ahlen – Inh. Ramazan Firinci</strong><br />
              Bürgermeister-Corneli-Ring 48, 59227 Ahlen<br />
              Telefon: +49 2382 855 355<br />
              E-Mail: info@lagarda-ahlen.de
            </p>
            <p className="leading-relaxed">
              Verantwortlicher im Sinne von Art. 4 Nr. 7 DSGVO ist die natürliche oder
              juristische Person, die über Zwecke und Mittel der Verarbeitung von
              personenbezogenen Daten entscheidet.
            </p>
          </section>

          <section>
            <h3 className="mb-3 font-serif text-xl text-foreground">
              2. Grundsätze der Verarbeitung
            </h3>
            <p className="leading-relaxed mb-4">
              Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer
              funktionsfähigen, sicheren und wirtschaftlichen Website erforderlich ist.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Kategorien betroffener Personen:</strong><br />
              Besucher und Nutzer der Website, (potenzielle) Gäste und deren Ansprechpartner.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Datenkategorien (je nach Nutzung):</strong><br />
              Nutzungs- und Meta-/Kommunikationsdaten (z. B. IP-Adresse, Zeitstempel, Browser,
              Betriebssystem), Kontaktdaten (Name, E-Mail, Telefonnummer),
              Kommunikationsinhalte (z. B. Anfragen per Formular, E-Mail, Telefon).
            </p>
            <p className="leading-relaxed">
              <strong>Zwecke:</strong><br />
              Bereitstellung der Website, IT-Sicherheit, Beantwortung von Kontaktanfragen.
            </p>
          </section>

          <section>
            <h3 className="mb-3 font-serif text-xl text-foreground">
              3. Rechtsgrundlagen
            </h3>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>
                Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung und vorvertragliche Maßnahmen,
                z. B. bei Kontaktaufnahme)
              </li>
              <li>
                Art. 6 Abs. 1 lit. c DSGVO (Erfüllung rechtlicher Pflichten)
              </li>
              <li>
                Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen, z. B. sicherer,
                wirtschaftlicher Betrieb der Website, Geltendmachung/Abwehr von Rechtsansprüchen)
              </li>
              <li>
                Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, z. B. für nicht zwingend erforderliche
                Cookies/Tools). Eine Einwilligung kann jederzeit mit Wirkung für die Zukunft
                widerrufen werden.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="mb-3 font-serif text-xl text-foreground">
              4. Hosting und Auftragsverarbeitung
            </h3>
            <p className="leading-relaxed">
              Unsere Website wird auf Systemen eines Hosting-Dienstleisters betrieben. Hierbei
              werden insbesondere Meta- und Kommunikationsdaten (z. B. IP-Adressen, Zugriffszeiten,
              Protokolldaten) verarbeitet, die zum technischen Betrieb und zur Absicherung der
              Website notwendig sind.
            </p>
            <p className="leading-relaxed mt-4">
              Mit Dienstleistern, die in unserem Auftrag personenbezogene Daten verarbeiten,
              schließen wir Verträge zur Auftragsverarbeitung gemäß Art. 28 DSGVO.
            </p>
          </section>

          <section>
            <h3 className="mb-3 font-serif text-xl text-foreground">
              5. Server-Log-Dateien
            </h3>
            <p className="leading-relaxed mb-4">
              Bei jedem Aufruf unserer Website werden durch den Provider der Seiten automatisch
              Informationen in sogenannten Server-Log-Dateien erhoben und gespeichert. Dies sind
              insbesondere:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed mb-4">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Datum und Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="leading-relaxed mb-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen findet nicht statt.
            </p>
            <p className="leading-relaxed mb-2">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (technischer Betrieb,
              Sicherheit, Störungsanalyse).
            </p>
            <p className="leading-relaxed">
              <strong>Speicherdauer:</strong> bis zur Zweckerreichung (z. B. Störungsanalyse,
              Sicherheitsauswertung), anschließend Löschung oder Anonymisierung.
            </p>
          </section>

          <section>
            <h3 className="mb-3 font-serif text-xl text-foreground">
              6. Cookies & Consent-Management
            </h3>
            <p className="leading-relaxed mb-4">
              Unsere Website kann Cookies oder ähnliche Technologien einsetzen. Cookies sind
              kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die eine
              Wiedererkennung des Browsers ermöglichen.
            </p>
            <p className="leading-relaxed mb-4">
              Wir unterscheiden insbesondere zwischen:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed mb-4">
              <li>
                <strong>Technisch notwendigen Cookies</strong>, die für den Betrieb der Website
                erforderlich sind (z. B. zur Darstellung, Sicherheit, Sessionverwaltung).
              </li>
              <li>
                <strong>Optionalen Cookies/Tools</strong> (z. B. für Reichweitenmessung oder
                externe Inhalte), die nur mit Ihrer Einwilligung gesetzt werden.
              </li>
            </ul>
            <p className="leading-relaxed mb-4">
              Sofern wir ein Consent-Management-Tool (z. B. ein Cookie-Banner) einsetzen, werden
              Ihre Auswahl und ein entsprechender Einwilligungsstatus in einem Cookie gespeichert,
              um Ihre Entscheidung zu dokumentieren.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. f DSGVO (technisch
              notwendige Cookies), Art. 6 Abs. 1 lit. a DSGVO (Einwilligung für optionale
              Cookies/Tools).
            </p>
            <p className="leading-relaxed">
              Sie können Ihre Cookie-Einstellungen in Ihrem Browser oder – soweit vorgesehen –
              über unser Cookie- bzw. Consent-Banner anpassen.
            </p>
          </section>

          <section>
            <h3 className="mb-3 font-serif text-xl text-foreground">
              7. Kontaktaufnahme
            </h3>

            <h4 className="mb-2 font-medium text-foreground/80">
              7.1 Kontaktformulare & E-Mail
            </h4>
            <p className="leading-relaxed mb-4">
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre
              Angaben aus dem Formular bzw. aus der E-Mail inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              Kommunikation) und Art. 6 Abs. 1 lit. f DSGVO (allgemeine Kommunikation,
              effiziente Bearbeitung von Anfragen).
            </p>
            <p className="leading-relaxed mb-6">
              <strong>Speicherdauer:</strong> Anfragen werden gelöscht, sobald diese
              abschließend beantwortet sind und keine gesetzlichen Aufbewahrungspflichten
              entgegenstehen.
            </p>

            <h4 className="mb-2 font-medium text-foreground/80">
              7.2 Kontakt per Telefon
            </h4>
            <p className="leading-relaxed mb-4">
              Wir bieten die Kontaktaufnahme auch telefonisch an. Bei Kontaktaufnahme werden
              die von Ihnen übermittelten Daten (z. B. Name, Telefonnummer, Inhalte der
              Kommunikation) verarbeitet.
            </p>
            <p className="leading-relaxed">
              <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. b DSGVO
              (Anbahnung/Durchführung der vertraglichen Beziehung), Art. 6 Abs. 1 lit. f DSGVO
              (effiziente Kommunikation).
            </p>
          </section>

          <section>
            <h3 className="mb-3 font-serif text-xl text-foreground">
              8. Empfänger, Drittlandübermittlungen & Garantien
            </h3>
            <p className="leading-relaxed">
              Soweit Daten an externe Dienstleister übermittelt werden, geschieht dies im Rahmen
              von Auftragsverarbeitungsverträgen (Art. 28 DSGVO) oder auf Basis einer gemeinsamen
              oder eigenständigen Verantwortlichkeit. Werden Dienste eingesetzt, bei denen eine
              Verarbeitung in Drittländern (insbesondere außerhalb der EU/des EWR) stattfindet,
              sorgen wir – soweit möglich – für geeignete Garantien (z. B. Standardvertragsklauseln)
              oder holen Ihre ausdrückliche Einwilligung ein.
            </p>
          </section>

          <section>
            <h3 className="mb-3 font-serif text-xl text-foreground">
              9. Speicherdauer
            </h3>
            <p className="leading-relaxed">
              Sofern in dieser Datenschutzerklärung keine spezifischeren Speicherdauern genannt
              sind, verarbeiten und speichern wir personenbezogene Daten nur so lange, wie es für
              die jeweiligen Zwecke erforderlich ist und keine gesetzlichen Aufbewahrungspflichten
              entgegenstehen.
            </p>
          </section>

          <section>
            <h3 className="mb-3 font-serif text-xl text-foreground">
              10. Pflicht zur Bereitstellung von Daten
            </h3>
            <p className="leading-relaxed">
              Die Bereitstellung personenbezogener Daten ist in der Regel weder gesetzlich noch
              vertraglich vorgeschrieben. Für bestimmte Funktionen der Website (z. B.
              Kontaktformular) ist die Verarbeitung jedoch erforderlich; ohne Bereitstellung kann
              die entsprechende Funktion nicht genutzt werden.
            </p>
          </section>

          <section>
            <h3 className="mb-3 font-serif text-xl text-foreground">
              11. Keine automatisierte Entscheidungsfindung/Profiling
            </h3>
            <p className="leading-relaxed">
              Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von
              Art. 22 DSGVO findet nicht statt.
            </p>
          </section>

          <section>
            <h3 className="mb-3 font-serif text-xl text-foreground">
              12. Ihre Rechte
            </h3>
            <p className="leading-relaxed mb-4">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden
              personenbezogenen Daten:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed mb-4">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen bestimmte Verarbeitungen (Art. 21 DSGVO)</li>
              <li>
                Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO) mit Wirkung
                für die Zukunft
              </li>
            </ul>
            <p className="leading-relaxed mb-4">
              <strong>Beschwerderecht bei einer Aufsichtsbehörde:</strong><br />
              Sie haben zudem das Recht, sich bei einer Datenschutzaufsichtsbehörde über die
              Verarbeitung Ihrer personenbezogenen Daten zu beschweren, insbesondere in dem
              Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des
              Orts des mutmaßlichen Verstoßes (Art. 77 DSGVO).
            </p>
            <p className="leading-relaxed">
              <strong>Kontakt für Betroffenenrechte:</strong><br />
              Bitte richten Sie Anfragen zur Wahrnehmung Ihrer Rechte an die oben unter Ziff. 1
              genannten Kontaktdaten (Stichwort „Datenschutz").
            </p>
          </section>

          <section>
            <h3 className="mb-3 font-serif text-xl text-foreground">
              13. Technische und organisatorische Maßnahmen (Art. 32 DSGVO)
            </h3>
            <p className="leading-relaxed">
              Wir treffen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko
              angemessenes Schutzniveau zu gewährleisten. Dazu gehören insbesondere Zugriffs- und
              Zugangsberechtigungen, Verschlüsselung, Backup- und Wiederherstellungsprozesse,
              Rechte- und Rollenkonzepte sowie Protokollierungen.
            </p>
          </section>

          <section>
            <h3 className="mb-3 font-serif text-xl text-foreground">
              14. SSL-/TLS-Verschlüsselung
            </h3>
            <p className="leading-relaxed">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
              vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber
              senden, eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              an der Adresszeile des Browsers („https://") und am Schloss-Symbol.
            </p>
          </section>

          <section>
            <h3 className="mb-3 font-serif text-xl text-foreground">
              15. Widerspruch gegen Werbe-E-Mails
            </h3>
            <p className="leading-relaxed">
              Der Nutzung der im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
              Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien
              wird hiermit widersprochen. Wir behalten uns ausdrücklich rechtliche Schritte im
              Falle unverlangter Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </section>

          <section>
            <h3 className="mb-3 font-serif text-xl text-foreground">
              16. Änderungen dieser Datenschutzerklärung
            </h3>
            <p className="leading-relaxed">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte
              Rechtslagen, unsere Dienstleistungen oder technische Entwicklungen anzupassen. Es
              gilt stets die auf dieser Website veröffentlichte aktuelle Fassung.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Datenschutz;
