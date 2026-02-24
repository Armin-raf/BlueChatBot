import React, { useState, useEffect } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    anliegen: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Der spezifische Webhook-Link für die Schnellanfrage
  const WEBHOOK_URL = 'https://hypobranchial-inez-nonmonogamous.ngrok-free.dev/webhook/a02a2d3c-7327-4845-a0ec-f649db17a272';

  useEffect(() => {
    // Cal.com embed snippet
    (function (C, A, L) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      (C as any).Cal = (C as any).Cal || function () {
        let cal = (C as any).Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window as any, "https://app.cal.eu/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    if (Cal) {
      Cal("init", "30min", { origin: "https://app.cal.eu" });

      Cal.ns["30min"]("inline", {
        elementOrSelector: "#my-cal-inline-30min",
        config: { 
          "layout": "month_view",
          "useSlotsViewOnSmallScreen": "true",
          "theme": "light"
        },
        calLink: "amin-rafai-rmrhre/30min",
      });

      Cal.ns["30min"]("ui", { 
        "theme": "light",
        "hideEventTypeDetails": false, 
        "layout": "month_view" 
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    
    setStatus('loading');
    
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        },
        mode: 'cors',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.anliegen,
          timestamp: new Date().toISOString(),
          metadata: {
            url: window.location.href,
            userAgent: navigator.userAgent,
            source: 'Blue ChatBot Website'
          }
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', anliegen: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-100" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-slate-500 text-sm max-w-3xl mx-auto mb-12">
            Wählen Sie direkt einen passenden Termin für eine 30-minütige Potenzialanalyse oder senden Sie uns eine Nachricht über das Kontaktformular.
          </p>
        </div>

        {/* 1. Terminbuchung - Full Width Card (Horizontaler Kalender) */}
        <div className="mb-20">
          <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden ring-1 ring-primary/5">
            <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-white relative z-10">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Terminbuchung</h3>
                <p className="text-xs text-slate-400 font-medium">Amin Rafai • 30 Min. Erstberatung</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-100 shadow-sm">
                <div className="size-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">Live-Kalender aktiv</span>
              </div>
            </div>
            
            <div className="w-full bg-slate-50/10 min-h-[600px] relative">
              {/* Das Ziel-Element für Cal.eu */}
              <div 
                id="my-cal-inline-30min" 
                style={{ width: '100%', height: 'auto', minHeight: '650px' }}
                className="overflow-hidden"
              >
                {/* Fallback / Loading State */}
                <div className="absolute inset-0 flex flex-col items-center justify-center py-20 pointer-events-none opacity-50">
                  <div className="size-12 border-4 border-primary/10 border-t-primary rounded-full animate-spin mb-4"></div>
                  <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">Kalender wird geladen...</p>
                </div>
              </div>
            </div>
            <div className="px-8 py-4 bg-slate-50/50 border-t border-slate-100 flex justify-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                DSGVO-konforme Terminbuchung via Cal.eu
              </p>
            </div>
          </div>
        </div>

        {/* 2. Kontakt & Formular Sektion (Nebeneinander) */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Linke Seite: Weitere Kontaktmöglichkeiten */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900">Weitere Kontaktmöglichkeiten</h3>
            
            <div className="space-y-4">
              {/* E-Mail Card */}
              <div className="flex items-center gap-5 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm group hover:border-primary/20 hover:shadow-md transition-all">
                <div className="size-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined !text-2xl">mail</span>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-0.5">E-Mail</p>
                  <a href="mailto:herr.rafai@gmail.com" className="text-base font-bold text-slate-900 hover:text-primary transition-colors">herr.rafai@gmail.com</a>
                </div>
              </div>

              {/* Telefon Card */}
              <div className="flex items-center gap-5 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm group hover:border-primary/20 hover:shadow-md transition-all">
                <div className="size-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined !text-2xl">call</span>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-0.5">Telefon</p>
                  <p className="text-base font-bold text-slate-900">+49 176 4334 7838</p>
                </div>
              </div>

              {/* Anschrift Card */}
              <div className="flex items-center gap-5 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm group hover:border-primary/20 hover:shadow-md transition-all">
                <div className="size-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined !text-2xl">location_on</span>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-0.5">Anschrift</p>
                  <p className="text-base font-bold text-slate-900">Annenstraße 29, 31134 Hildesheim</p>
                </div>
              </div>
            </div>

            {/* Dark Marketing Card - Bereit für die Zukunft */}
            <div className="p-10 bg-slate-950 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl group ring-1 ring-white/5 mt-10">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-[80px] -mr-24 -mt-24 group-hover:bg-primary/30 transition-all duration-700"></div>
              <h4 className="text-2xl font-bold mb-4 relative z-10">Bereit für die Zukunft?</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 relative z-10">
                Wir analysieren Ihre Prozesse und zeigen Ihnen, wo KI-Agenten den größten Hebel für Ihre Effizienz haben.
              </p>
              <div className="flex flex-wrap gap-4 relative z-10">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <span className="material-symbols-outlined !text-sm text-blue-400">check_circle</span>
                  Kostenlos
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <span className="material-symbols-outlined !text-sm text-blue-400">check_circle</span>
                  Unverbindlich
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Seite: "Schreiben Sie uns" Formular */}
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden h-fit">
            <h3 className="text-2xl font-bold text-slate-900 mb-10 tracking-tight">Schreiben Sie uns</h3>
            
            {status === 'success' && (
              <div className="absolute inset-0 bg-white/98 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8 rounded-[2.5rem] animate-in fade-in duration-300">
                <div className="size-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <span className="material-symbols-outlined !text-4xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Nachricht gesendet!</h3>
                <p className="text-slate-500">Vielen Dank für Ihre Anfrage. Wir melden uns zeitnah.</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-primary font-bold hover:underline flex items-center gap-2">
                  <span className="material-symbols-outlined !text-lg">add</span>
                  Neue Nachricht schreiben
                </button>
              </div>
            )}

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Name</label>
                  <input 
                    required type="text" disabled={status === 'loading'} value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-sm placeholder:text-slate-300"
                    placeholder="Max Mustermann"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">E-Mail</label>
                  <input 
                    required type="email" disabled={status === 'loading'} value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-sm placeholder:text-slate-300"
                    placeholder="name@firma.de"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Anliegen</label>
                <textarea 
                  required rows={5} disabled={status === 'loading'} value={formData.anliegen}
                  onChange={(e) => setFormData({...formData, anliegen: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-sm resize-none placeholder:text-slate-300"
                  placeholder="Wie können wir Ihnen helfen?"
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button 
                  type="submit" disabled={status === 'loading'}
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-base shadow-xl shadow-primary/30 hover:bg-blue-600 hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-3 group"
                >
                  {status === 'loading' ? (
                    <div className="size-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Anfrage absenden</span>
                      <span className="material-symbols-outlined !text-xl group-hover:translate-x-1 transition-transform">send</span>
                    </>
                  )}
                </button>
                <p className="mt-6 text-[10px] text-center text-slate-400 font-black uppercase tracking-[0.2em]">
                  DSGVO KONFORM • 100% SICHER
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;