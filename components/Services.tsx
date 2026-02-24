import React from 'react';
import HighlightCard from './ui/highlight-card';
import { UserPlus, Info, HelpCircle, Calendar } from 'lucide-react';

const Solutions: React.FC = () => {
  const items = [
    {
      icon: <UserPlus className="w-8 h-8 text-white" />,
      title: 'Lead-Qualifizierung',
      description: [
        'Automatische Erstansprache,',
        'Abfrage von Requirements,',
        'Direkte CRM-Übergabe'
      ],
      link: '#contact'
    },
    {
      icon: <Info className="w-8 h-8 text-white" />,
      title: 'Produktberatung',
      description: [
        'Individuelle Kaufhilfe,',
        'Wissensbasierte Antworten,',
        'Unterstützung des Vertriebs'
      ],
      link: '#contact'
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-white" />,
      title: 'Support & FAQ',
      description: [
        'Sofort-Hilfe rund um die Uhr,',
        'Lösung repetitiver Tickets,',
        'Entlastung des Service-Teams'
      ],
      link: '#contact'
    },
    {
      icon: <Calendar className="w-8 h-8 text-white" />,
      title: 'Terminvereinbarung',
      description: [
        'Direkte Buchung im Chat,',
        'Sync mit Outlook/Google,',
        'Kein Hin- und Her-Mailen'
      ],
      link: '#contact'
    },
  ];

  return (
    <section className="py-24 bg-white px-6 border-y border-slate-100" id="solutions">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-primary mb-6 text-xs font-bold uppercase tracking-wider">Individuelle KI-ChatBots</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Vielseitige Einsatzbereiche</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Vom Sales-Assistenten bis zum 24/7-Support – wir bauen Ihren Experten-Bot.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <HighlightCard 
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
            Beratungsgespräch buchen
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;