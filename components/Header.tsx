import React, { useState, useRef, useEffect } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [lang, setLang] = useState('DE');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'DE', name: 'Deutsch' },
    { code: 'EN', name: 'English' },
    { code: 'FR', name: 'Français' },
    { code: 'ES', name: 'Español' },
    { code: 'IT', name: 'Italiano' }
  ];

  const navItems = [
    { name: 'Problem', id: 'mission' },
    { name: 'Lösung', id: 'solutions' },
    { name: 'Sicherheit', id: 'security' },
    { name: 'Ablauf', id: 'process' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className={`material-symbols-outlined !text-3xl text-primary`}>smart_toy</span>
          <h2 className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            Blue ChatBot
          </h2>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-semibold transition-colors ${
                isScrolled 
                  ? 'text-slate-600 hover:text-primary' 
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-6">
          {/* Language Selector */}
          <div className="relative" ref={langRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all text-xs font-bold uppercase tracking-widest ${
                isScrolled 
                  ? 'text-slate-600 hover:bg-slate-100' 
                  : 'text-white/90 hover:bg-white/10'
              }`}
            >
              <span className="material-symbols-outlined !text-lg">language</span>
              {lang}
              <span className={`material-symbols-outlined !text-sm transition-transform ${isLangOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 animate-in fade-in zoom-in duration-200 origin-top-right">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm font-semibold hover:bg-slate-50 transition-colors flex items-center justify-between ${
                      lang === l.code ? 'text-primary' : 'text-slate-600'
                    }`}
                  >
                    {l.name}
                    {lang === l.code && <span className="material-symbols-outlined !text-sm">check</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a 
            href="#contact" 
            className={`hidden sm:block bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-blue-600 transition-all shadow-lg ${
              isScrolled ? 'shadow-primary/20' : 'shadow-none'
            }`}
          >
            Beratungsgespräch buchen
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;