import BpWidgets from "./components/BpWidgets";
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import Solutions from './components/Services';
import Security from './components/Security';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import { FlippingCard } from './components/ui/flipping-card';

// Extended type to include all footer topics including 'kontakt'
export type ModalType = 'impressum' | 'agb' | 'datenschutz' | 'wissen' | 'produktion' | 'sensibel' | 'airgapped' | 'dsgvo' | 'integration' | 'kontakt' | null;

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const processSteps = [
    { 
      step: '01', 
      title: 'Analyse', 
      desc: 'Wir identifizieren Ihre wichtigsten Use-Cases und Ziele.',
      details: 'In der Analyse-Phase untersuchen wir Ihre bestehenden Support-Daten und Vertriebsprozesse, um die effektivsten Aufgaben für den ChatBot zu definieren.'
    },
    { 
      step: '02', 
      title: 'Konzeption', 
      desc: 'Erstellung der Wissensbasis und Verhaltensregeln.',
      details: 'Wir trainieren das Modell auf Ihren Inhalten, Dokumenten und Ihrer spezifischen Tonalität, um markengerechte Antworten sicherzustellen.'
    },
    { 
      step: '03', 
      title: 'Integration', 
      desc: 'Nahtlose Anbindung an Website und CRM-Systeme.',
      details: 'Die technische Implementierung erfolgt via API oder Plugin, inklusive Anbindung an Salesforce, HubSpot oder Ihre internen Datenbanken.'
    },
    { 
      step: '04', 
      title: 'Optimierung', 
      desc: 'Go-Live und kontinuierliche Feinjustierung.',
      details: 'Nach dem Launch überwachen wir die Performance und optimieren die Antwortqualität basierend auf echten Nutzerinteraktionen.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        
        {/* Section 2: The Problem */}
        <section className="py-24 bg-white px-6" id="mission">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-primary mb-6 text-xs font-bold uppercase tracking-wider">Status Quo</div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                Warum herkömmliche Webseiten heute scheitern.
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Besucher verlassen Ihre Seite oft frustriert, weil sie nicht sofort die Informationen finden, die sie suchen. In einer "Always-on"-Welt ist Warten ein Conversion-Killer.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Überlastete Support-Teams und lange Reaktionszeiten im Vertrieb führen dazu, dass wertvolle Leads zur Konkurrenz abwandern. Statische Formulare und starre Chat-Baukästen sind nicht mehr zeitgemäß.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Besucher-Absprung', desc: 'Interessenten gehen ohne Kontakt wieder weg.' },
                { label: 'Support-Stau', desc: 'Teams ersticken in repetitiven Standardanfragen.' },
                { label: 'Verpasste Leads', desc: 'Keine Qualifizierung außerhalb der Geschäftszeiten.' },
                { label: 'Hohe Kosten', desc: 'Skalierung durch Personal ist teuer und langsam.' }
              ].map((card, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                  <div className="size-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined !text-sm">warning</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{card.label}</h4>
                  <p className="text-xs text-slate-500 leading-normal">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Integrations />

        <Solutions />

        {/* Section 4: Messbare Vorteile */}
        <section className="py-24 bg-slate-900 text-white px-6" id="benefits">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">Messbare Business-Vorteile</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Effizienz, die man in Zahlen ausdrücken kann.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { val: '+45%', title: 'Conversion-Rate', desc: 'Höhere Lead-Generierung durch sofortige Interaktion.' },
                { val: '-60%', title: 'Support-Kosten', desc: 'Automatisierung von bis zu 80% aller Standardanfragen.' },
                { val: '24/7', title: 'Verfügbarkeit', desc: 'Vertrieb und Service sind niemals im Feierabend.' },
                { val: '100%', title: 'DSGVO-Konform', desc: 'Sichere Datenhaltung nach höchsten Standards.' }
              ].map((stat, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                  <div className="text-4xl font-black text-primary mb-2">{stat.val}</div>
                  <h3 className="text-xl font-bold mb-4 text-white">{stat.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Security />

        {/* Ablauf / Process Section */}
        <section className="py-24 bg-white px-6" id="process">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">In 4 Schritten zum Go-Live</h2>
              <p className="text-slate-500 text-lg">Unser bewährter Prozess für Ihre individuelle KI-Lösung.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((item, i) => (
                <FlippingCard
                  key={i}
                  height={220}
                  frontContent={
                    <div className="flex flex-col h-full w-full p-8 relative overflow-hidden">
                      <span className="text-6xl font-black text-primary/10 absolute top-4 right-6 select-none leading-none">
                        {item.step}
                      </span>
                      <h3 className="text-2xl font-bold mb-3 text-slate-900 relative z-10">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
                      <div className="mt-auto flex items-center gap-1.5 text-[10px] font-bold text-primary uppercase tracking-widest">
                        Details ansehen <span className="material-symbols-outlined !text-[12px]">flip</span>
                      </div>
                    </div>
                  }
                  backContent={
                    <div className="flex flex-col h-full w-full p-8 bg-primary justify-center">
                      <p className="text-sm font-medium leading-relaxed text-white text-center">
                        {item.details}
                      </p>
                      <div className="mt-6 flex justify-center">
                        <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                          Phase {item.step}
                        </div>
                      </div>
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer onOpenModal={setModalType} />
      
      <LegalModal 
        type={modalType} 
        onClose={() => setModalType(null)} 
      />
      <BpWidgets />
    </div>
  );
};

export default App;
