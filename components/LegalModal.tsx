import React from 'react';
import { ModalType } from '../App';

interface LegalModalProps {
  type: ModalType;
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const content = {
    impressum: (
      <div className="space-y-6">
        <h2 className="text-3xl font-black text-slate-900">Impressum</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p className="text-sm font-bold uppercase tracking-wider text-slate-400">nach § 5 TMG</p>
          <div className="pt-2">
            <p className="font-bold text-slate-900 text-lg">Amin Rafai | Blue Process</p>
            <p>Annenstraße 29, 31134 Hildesheim, Deutschland</p>
          </div>
          <div className="pt-2">
            <h4 className="font-bold text-slate-900">Kontakt:</h4>
            <p>Telefon: +49 176 4334 7838</p>
            <p>E-Mail: <a href="mailto:herr.rafai@gmail.com" className="text-primary hover:underline">herr.rafai@gmail.com</a></p>
          </div>
          <div className="pt-2">
            <p><span className="font-bold text-slate-900">Steuernummer:</span> 43196274049</p>
          </div>
          <div className="pt-2">
            <p><span className="font-bold text-slate-900">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</span><br />Amin Rafai (Anschrift s.o.)</p>
          </div>
          <p className="text-xs text-slate-400 pt-6 border-t border-slate-100 italic">Quelle Impressum: e-recht24.de</p>
        </div>
      </div>
    ),
    agb: (
      <div className="space-y-6">
        <h2 className="text-3xl font-black text-slate-900">Allgemeine Geschäftsbedingungen (AGB)</h2>
        <p className="font-bold text-slate-500 -mt-4 text-lg">Amin Rafai | Blue Process</p>
        <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
          <section>
            <h4 className="font-bold text-slate-900 mb-2">§ 1 Geltungsbereich</h4>
            <p>Diese AGB gelten für alle Verträge über KI-Dienstleistungen, Prozessautomatisierung und Beratung zwischen Amin Rafai | Blue Process (nachfolgend „Auftragnehmer“) und seinen Kunden. Abweichende Bedingungen des Kunden werden nicht anerkannt.</p>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 mb-2">§ 2 Leistungsumfang und Abnahme</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot.</li>
              <li>Der Auftragnehmer schuldet die Einrichtung der Automatisierung nach bestem Wissen und Gewissen. Ein bestimmter wirtschaftlicher Erfolg wird nicht garantiert.</li>
              <li>Nach Fertigstellung der im Angebot beschriebenen Workflows ist der Kunde zur Abnahme verpflichtet. Die Abnahme gilt als erfolgt, wenn der Kunde nicht innerhalb von 7 Werktagen schriftlich Mängel rügt.</li>
            </ul>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 mb-2">§ 3 Besondere Bedingungen für KI-Leistungen</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Der Kunde ist sich bewusst, dass KI-Modelle (wie z.B. Large Language Models) statistische Ergebnisse liefern. Der Auftragnehmer übernimmt keine Gewähr für die inhaltliche Richtigkeit, Vollständigkeit oder Logik der durch die KI generierten Texte, Daten oder Entscheidungen.</li>
              <li>Der Kunde ist verpflichtet, die durch die Automatisierung erzeugten Ergebnisse vor einer weiteren Verwendung (insbesondere bei Veröffentlichung oder Kundenkontakt) auf Richtigkeit zu prüfen.</li>
              <li>Der Auftragnehmer haftet nicht für Schäden, die durch Fehlentscheidungen einer KI oder durch „Halluzinationen“ des Modells entstehen.</li>
            </ul>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 mb-2">§ 4 Zahlungsbedingungen</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Sofern im Angebot nicht anders vereinbart, sind Rechnungen sofort nach Erhalt ohne Abzug zahlbar.</li>
              <li>Der Auftragnehmer ist berechtigt, bei Projektstart eine Anzahlung in Höhe von 50 % der Angebotssumme zu verlangen. Die Arbeit beginnt erst nach Eingang der Anzahlung.</li>
            </ul>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 mb-2">§ 5 Haftungsbeschränkung</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Der Auftragnehmer haftet nur für Schäden, die auf vorsätzlicher oder grob fahrlässiger Pflichtverletzung beruhen.</li>
              <li>Für leichte Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten. In diesem Fall ist die Haftung auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt.</li>
              <li>Die Haftung für entgangenen Gewinn oder indirekte Folgeschäden ist ausgeschlossen.</li>
            </ul>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 mb-2">§ 6 Urheberrecht und Nutzungsrechte</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>An den erstellten KI-Agenten, Automatisierungs-Workflows und Skripten räumt der Auftragnehmer dem Kunden ein einfaches, zeitlich und räumlich unbegrenztes Nutzungsrecht für den eigenen Betrieb ein.</li>
              <li>Die Weitergabe, der Weiterverkauf oder die Unterlizenzierung der Workflows an Dritte ist ohne schriftliche Zustimmung des Auftragnehmers untersagt.</li>
            </ul>
          </section>
        </div>
      </div>
    ),
    datenschutz: (
      <div className="space-y-6">
        <h2 className="text-3xl font-black text-slate-900">Datenschutzerklärung</h2>
        <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
          <section>
            <h4 className="font-bold text-slate-900 text-base mb-2">1. Datenschutz auf einen Blick</h4>
            <p className="mb-2"><span className="font-bold">Allgemeine Hinweise:</span> Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen oder unsere Dienstleistungen im Bereich der KI-Automatisierung in Anspruch nehmen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            <p className="font-bold text-slate-900 mb-1">Datenerfassung auf dieser Website</p>
            <p>Wer ist verantwortlich für die Datenerfassung? Die Datenverarbeitung auf dieser Website und im Rahmen der angebotenen Dienstleistungen erfolgt durch den Websitebetreiber:</p>
            <p className="mt-2 font-medium">Amin Rafai | Blue Process<br />Annenstraße 29, 31134 Hildesheim, Deutschland<br />E-Mail: herr.rafai@gmail.com<br />Telefon: +49 176 4334 7838</p>
            <p className="mt-2">Wie erfassen wir Ihre Daten? Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. per E-Mail oder Kontaktformular). Andere Daten werden automatisch durch unsere IT-Systeme erfasst (technische Daten wie IP-Adresse, Browser, Uhrzeit).</p>
          </section>

          <section>
            <h4 className="font-bold text-slate-900 text-base mb-2">2. Hosting und Infrastruktur</h4>
            <p>Wir hosten unsere Website, unsere Automatisierungs-Workflows sowie die dazugehörigen Datenbanken und Kundendaten bei folgendem Anbieter:</p>
            <p className="font-bold mt-1">Hetzner Online GmbH<br />Industriestr. 25, 91710 Gunzenhausen, Deutschland.</p>
            <p className="mt-2">Serverstandort: Deutschland. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer sicheren und stabilen Bereitstellung unserer Dienste. Wir haben mit der Hetzner Online GmbH einen Vertrag über Auftragsverarbeitung (AVV) geschlossen, der garantiert, dass Ihre Daten streng weisungsgebunden und nach deutschem Datenschutzstandard verarbeitet werden.</p>
          </section>

          <section>
            <h4 className="font-bold text-slate-900 text-base mb-2">3. Besonderheiten bei KI-Dienstleistungen</h4>
            <p className="mb-2">Im Rahmen unserer Automatisierungsprozesse setzen wir Künstliche Intelligenz ein. Die Verarbeitung erfolgt je nach individueller Vereinbarung (AVV) auf zwei Arten:</p>
            <div className="space-y-3 pl-4">
              <div>
                <p className="font-bold text-slate-900">A. Lokale KI-Modelle</p>
                <p>Auf Wunsch werden Daten ausschließlich über lokale KI-Modelle verarbeitet, die auf unseren eigenen, in Deutschland gehosteten Servern (Hetzner) betrieben werden.</p>
                <p><span className="font-bold">Vorteil:</span> 100% Datensouveränität. Kein Byte verlässt den deutschen Rechtsraum.</p>
                <p><span className="font-bold">Einschränkung:</span> Diese Modelle sind in ihrer Rechenleistung und Komplexität im Vergleich zu großen KI-Anbietern begrenzt.</p>
              </div>
              <div>
                <p className="font-bold text-slate-900">B. Ausländische KI-Modelle</p>
                <p>Sofern für die Aufgabe eine höhere Intelligenzleistung erforderlich ist und dies im AVV vereinbart wurde, werden spezialisierte ausländische KI-Modelle genutzt.</p>
                <p><span className="font-bold">Datentransfer:</span> Hierbei werden Daten an Server außerhalb der EU (meist USA) übertragen. Schutzmaßnahmen: Die Übertragung erfolgt auf Grundlage von Standardvertragsklauseln der EU-Kommission bzw. des Data Privacy Frameworks. Wir konfigurieren diese Schnittstellen so „Zero Retention Policy“, dass Ihre Daten in der Regel nicht zum Training der Modelle verwendet werden.</p>
                <p><span className="font-bold">Umfang:</span> Es werden nur die Daten übertragen, die für die spezifische Anfrage (Prompt) zwingend erforderlich sind.</p>
              </div>
            </div>
          </section>

          <section>
            <h4 className="font-bold text-slate-900 text-base mb-2">4. Pflichtinformationen und Rechte der Betroffenen</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-bold text-slate-900">Widerruf Ihrer Einwilligung:</span> Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.</li>
              <li><span className="font-bold text-slate-900">Recht auf Auskunft, Löschung und Berichtigung:</span> Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.</li>
              <li><span className="font-bold text-slate-900">Recht auf Einschränkung der Verarbeitung:</span> Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              <li><span className="font-bold text-slate-900">Beschwerderecht bei der Aufsichtsbehörde:</span> Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu.</li>
            </ul>
          </section>

          <section>
            <h4 className="font-bold text-slate-900 text-base mb-2">5. Automatisierungs-Workflows</h4>
            <p>Bei der Nutzung unserer Automatisierungslösungen werden Daten zwischen verschiedenen Anwendungen übertragen.</p>
            <p><span className="font-bold">Zweck:</span> Erfüllung des mit Ihnen geschlossenen Vertrages (Art. 6 Abs. 1 lit. b DSGVO).</p>
            <p><span className="font-bold">Speicherung:</span> Daten in Workflows werden nur so lange zwischengespeichert, wie es für die Ausführung der Automatisierung technisch notwendig ist.</p>
          </section>

          <section>
            <h4 className="font-bold text-slate-900 text-base mb-2">6. Terminbuchung</h4>
            <p>Für die Online-Terminbuchung nutzen wir den Dienst Cal.eu (Cal.com, Inc.). Wenn Sie einen Termin über unsere Website buchen, werden die von Ihnen eingegebenen Daten (z. B. Name, E-Mail-Adresse, Grund des Termins) an Cal.eu übertragen. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO oder Art. 6 Abs. 1 lit. b DSGVO. Durch die Nutzung der europäischen Instanz Cal.eu wird ein besonders hohes Datenschutzniveau sichergestellt.</p>
          </section>
        </div>
      </div>
    ),
    wissen: (
      <div className="space-y-6">
        <div className="size-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-4">
          <span className="material-symbols-outlined !text-4xl">database</span>
        </div>
        <h2 className="text-3xl font-black text-slate-900">KI-Wissensdatenbanken</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>Wir verwandeln Ihre PDF-Handbücher, Produktkataloge und internen Dokumente in eine durchsuchbare KI-Intelligenz (RAG - Retrieval Augmented Generation).</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Automatisches Indizieren von Firmenwissen.</li>
            <li>Präzise Antworten basierend auf Ihren Fakten.</li>
            <li>Minimierung von "Halluzinationen" der KI.</li>
          </ul>
        </div>
      </div>
    ),
    produktion: (
      <div className="space-y-6">
        <div className="size-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-4">
          <span className="material-symbols-outlined !text-4xl">factory</span>
        </div>
        <h2 className="text-3xl font-black text-slate-900">Produktions-Assistenz</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>Optimieren Sie Abläufe in der Fertigung. Unsere KI-Agenten unterstützen Techniker direkt an der Maschine via Voice oder Tablet.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Schnellabfrage von Wartungsprotokollen.</li>
            <li>Fehlercode-Analyse in Echtzeit.</li>
            <li>Einarbeitung neuer Mitarbeiter durch geführte Dialoge.</li>
          </ul>
        </div>
      </div>
    ),
    sensibel: (
      <div className="space-y-6">
        <div className="size-16 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-4">
          <span className="material-symbols-outlined !text-4xl">lock_open</span>
        </div>
        <h2 className="text-3xl font-black text-slate-900">Umgang mit sensiblen Daten</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>Datenschutz ist kein Hindernis, sondern die Basis. Wir implementieren Filter für PII (Personally Identifiable Information).</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Automatische Anonymisierung von Namen und Nummern.</li>
            <li>Verschlüsselung "at rest" und "in transit".</li>
            <li>Keine Speicherung für Werbezwecke.</li>
          </ul>
        </div>
      </div>
    ),
    airgapped: (
      <div className="space-y-6">
        <div className="size-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-4">
          <span className="material-symbols-outlined !text-4xl">cloud_off</span>
        </div>
        <h2 className="text-3xl font-black text-slate-900">Air-Gapped Betrieb</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>Für Branchen mit extremen Sicherheitsanforderungen bieten wir Lösungen, die komplett ohne Internetverbindung in Ihrem eigenen Rechenzentrum laufen.</p>
          <p>Dabei nutzen wir lokale Large Language Models (LLMs), die physisch auf Ihrer Hardware installiert sind. Ein Datenabfluss in die Cloud ist somit technisch unmöglich.</p>
        </div>
      </div>
    ),
    dsgvo: (
      <div className="space-y-6">
        <div className="size-16 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-4">
          <span className="material-symbols-outlined !text-4xl">gavel</span>
        </div>
        <h2 className="text-3xl font-black text-slate-900">DSGVO-Compliance</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>Blue ChatBot erfüllt alle Anforderungen der europäischen Datenschutz-Grundverordnung.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Hosting ausschließlich in zertifizierten deutschen Rechenzentren.</li>
            <li>Auftragsverarbeitungsvertrag (AVV) inklusive.</li>
            <li>Rechtssichere Cookie-Banner-Einbindung.</li>
          </ul>
        </div>
      </div>
    ),
    integration: (
      <div className="space-y-6">
        <div className="size-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-4">
          <span className="material-symbols-outlined !text-4xl">settings_ethernet</span>
        </div>
        <h2 className="text-3xl font-black text-slate-900">Lokale Integration</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>Ein ChatBot ist nur so gut wie seine Anbindung. Wir verbinden die KI direkt mit Ihren lokalen Systemen.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Schnittstellen zu SAP, Microsoft Dynamics und Salesforce.</li>
            <li>Anbindung an SQL-Datenbanken und Sharepoint.</li>
            <li>Webhooks für automatisierte Workflows.</li>
          </ul>
        </div>
      </div>
    ),
    kontakt: (
      <div className="space-y-8">
        <div className="size-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center">
          <span className="material-symbols-outlined !text-4xl">contact_support</span>
        </div>
        <h2 className="text-3xl font-black text-slate-900">Kontakt aufnehmen</h2>
        <div className="grid gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined !text-lg">person</span>
              Ansprechpartner
            </h4>
            <p className="text-slate-600">Amin Rafai</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined !text-lg">mail</span>
              E-Mail
            </h4>
            <a href="mailto:herr.rafai@gmail.com" className="text-primary font-medium hover:underline">herr.rafai@gmail.com</a>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined !text-lg">call</span>
              Telefon
            </h4>
            <p className="text-slate-600">+49 176 4334 7838</p>
          </div>
        </div>
        <p className="text-sm text-slate-400">Wir freuen uns darauf, von Ihnen zu hören und gemeinsam an Ihrer KI-Strategie zu arbeiten.</p>
      </div>
    )
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-2xl max-h-[90vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end p-6 border-b border-slate-50">
          <button 
            onClick={onClose}
            className="size-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
            title="Schließen"
          >
            <span className="material-symbols-outlined text-slate-600">close</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-8 md:p-12 scroll-smooth">
          {content[type as keyof typeof content]}
        </div>
        <div className="p-6 md:px-12 md:pb-10 border-t border-slate-100 bg-white/50 backdrop-blur-md">
          <button 
            onClick={onClose}
            className="w-full bg-primary text-white py-4 px-8 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group"
          >
            <span>Schließen</span>
            <span className="material-symbols-outlined !text-lg group-hover:translate-x-1 transition-transform">close</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;