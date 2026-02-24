import React from 'react';
import { Youtube, Linkedin } from 'lucide-react';
import { ModalType } from '../App';

interface FooterProps {
  onOpenModal: (type: ModalType) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-primary !text-3xl">smart_toy</span>
            <h2 className="text-2xl font-bold tracking-tight text-white">Blue ChatBot</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Maßgeschneiderte KI-Lösungen für den B2B-Mittelstand. Wir verwandeln statische Webseiten in interaktive Vertriebs- und Servicekanäle.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-white uppercase tracking-wider text-xs">Lösungen</h4>
          <button onClick={() => onOpenModal('wissen')} className="text-left text-sm text-slate-400 hover:text-white transition-colors">Wissensdatenbanken</button>
          <button onClick={() => onOpenModal('produktion')} className="text-left text-sm text-slate-400 hover:text-white transition-colors">Produktions-Assistenz</button>
          <button onClick={() => onOpenModal('sensibel')} className="text-left text-sm text-slate-400 hover:text-white transition-colors">Sensible Daten</button>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-white uppercase tracking-wider text-xs">Sicherheit</h4>
          <button onClick={() => onOpenModal('airgapped')} className="text-left text-sm text-slate-400 hover:text-white transition-colors">Air-Gapped Betrieb</button>
          <button onClick={() => onOpenModal('dsgvo')} className="text-left text-sm text-slate-400 hover:text-white transition-colors">DSGVO-Compliance</button>
          <button onClick={() => onOpenModal('integration')} className="text-left text-sm text-slate-400 hover:text-white transition-colors">Lokale Integration</button>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-white uppercase tracking-wider text-xs">Rechtliches</h4>
          <button onClick={() => onOpenModal('impressum')} className="text-left text-sm text-slate-400 hover:text-white transition-colors">Impressum</button>
          <button onClick={() => onOpenModal('agb')} className="text-left text-sm text-slate-400 hover:text-white transition-colors">AGB</button>
          <button onClick={() => onOpenModal('datenschutz')} className="text-left text-sm text-slate-400 hover:text-white transition-colors">Datenschutz</button>
          <button onClick={() => onOpenModal('kontakt')} className="text-left text-sm text-slate-400 hover:text-white transition-colors">Kontakt</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-xs text-slate-500">
          © 2026 Blue ChatBot
        </p>
        
        {/* Social Media Links */}
        <div className="flex items-center gap-6">
          <a 
            href="https://x.com/aminrafaiai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-500 hover:text-white transition-colors"
            title="X (Twitter)"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </a>
          <a 
            href="https://m.youtube.com/@BlueProcess-i8f#bottom-sheet" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-500 hover:text-white transition-colors"
            title="YouTube"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/company/blueprocess/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-500 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;