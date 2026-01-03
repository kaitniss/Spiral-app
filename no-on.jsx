import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Brain, Activity, Lock, 
  TrendingDown, ShieldAlert, 
  Terminal, Menu, X, Heart, Wind, 
  Smartphone, Loader2, Power, Eye, Ghost
} from 'lucide-react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

// --- CONFIG & THEME ---
const THEME = {
  bg: 'bg-[#050505]',
  surface: 'bg-[#111111]',
  border: 'border-[#333]',
  textMain: 'text-[#e0e0e0]',
  textDim: 'text-[#666]',
  
  // States based on module type
  panic: { color: 'text-[#ff2a2a]', border: 'border-[#ff2a2a]', bg: 'bg-[#ff2a2a]' }, // NO
  logic: { color: 'text-[#39ff14]', border: 'border-[#39ff14]', bg: 'bg-[#39ff14]' }, // ON
  loop:  { color: 'text-[#00f0ff]', border: 'border-[#00f0ff]', bg: 'bg-[#00f0ff]' }, // UNLOOP
  
  font: 'font-mono' // JetBrains Mono vibe
};

// --- DATA: SYSTEM BOOT LOGS ---
const BOOT_LOGS = [
  "> MOUNTING_PREFRONTAL_CORTEX...",
  "> BLOCKING_DOPAMINE_RECEPTORS...",
  "> LOADING_EX_ORCIST_MODULE...",
  "> SYSTEM_READY."
];

// --- COMPONENTS ---

const GlitchHeader = ({ title, subtitle }) => (
  <div className="mb-8 relative overflow-hidden group">
    <h1 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter ${THEME.textMain} relative z-10`}>
      {title}
    </h1>
    <div className={`text-xs md:text-sm ${THEME.textDim} font-mono mt-2 uppercase tracking-widest`}>
      > {subtitle}
    </div>
    {/* Glitch Effect */}
    <div className="absolute top-0 left-0 text-[#ff2a2a] opacity-0 group-hover:opacity-50 translate-x-[2px] pointer-events-none transition-opacity duration-75">
      {title}
    </div>
  </div>
);

// --- MODULES (VIEWS) ---

// 1. DASHBOARD (HOME) - The Operating System Hub
const Dashboard = ({ setView }) => {
  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block border border-[#ff2a2a] bg-[#ff2a2a]/10 text-[#ff2a2a] px-3 py-1 text-xs font-mono mb-6 animate-pulse">
          ⚠️ CORTISOL LEVELS: CRITICAL
        </div>
        <GlitchHeader 
          title="NO:ON SYSTEM" 
          subtitle="Operating System for your Broken Heart" 
        />
        <p className={`max-w-xl mx-auto ${THEME.textDim} text-sm md:text-base leading-relaxed`}>
          Мы не лечим. Мы — внешняя префронтальная кора, когда твоя отключилась.
          Выбери протокол вмешательства.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* NO:CONTACT - PANIC BUTTON */}
        <button 
          onClick={() => setView('panic')}
          className="group relative p-8 border border-[#333] hover:border-[#ff2a2a] bg-[#0a0a0a] overflow-hidden transition-all text-left"
        >
          <div className="absolute top-0 right-0 p-2 opacity-50">
            <ShieldAlert className="text-[#ff2a2a]" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ff2a2a] transition-colors">NO:CONTACT</h3>
          <p className="text-xs text-gray-500 font-mono">
            > EMERGENCY BRAKE<br/>
            > PANIC BUTTON<br/>
            > PREVENT_CRINGE.exe
          </p>
          <div className="mt-6 w-full h-1 bg-[#222]">
            <div className="h-full bg-[#ff2a2a] w-[80%] animate-pulse"></div>
          </div>
        </button>

        {/* ON:LOGIC - AI ANALYSIS */}
        <button 
          onClick={() => setView('logic')}
          className="group relative p-8 border border-[#333] hover:border-[#39ff14] bg-[#0a0a0a] overflow-hidden transition-all text-left"
        >
          <div className="absolute top-0 right-0 p-2 opacity-50">
            <Brain className="text-[#39ff14]" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#39ff14] transition-colors">ON:LOGIC</h3>
          <p className="text-xs text-gray-500 font-mono">
            > THE EX-ORCIST<br/>
            > TEXT ANALYSIS<br/>
            > REALITY_CHECK.sh
          </p>
          <div className="mt-6 w-full h-1 bg-[#222]">
            <div className="h-full bg-[#39ff14] w-[40%]"></div>
          </div>
        </button>

        {/* UN:LOOP - BREATHING & RUMINATION */}
        <button 
          onClick={() => setView('loop')}
          className="group relative p-8 border border-[#333] hover:border-[#00f0ff] bg-[#0a0a0a] overflow-hidden transition-all text-left"
        >
          <div className="absolute top-0 right-0 p-2 opacity-50">
            <Activity className="text-[#00f0ff]" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors">UN:LOOP</h3>
          <p className="text-xs text-gray-500 font-mono">
            > RUMINATION BREAKER<br/>
            > DOPAMINE DETOX<br/>
            > BREATH_WORK.py
          </p>
        </button>

        {/* DELUSION METER - STATS */}
        <button 
          onClick={() => setView('stats')}
          className="group relative p-8 border border-[#333] hover:border-white bg-[#0a0a0a] overflow-hidden transition-all text-left"
        >
          <div className="absolute top-0 right-0 p-2 opacity-50">
            <TrendingDown className="text-white" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">DELUSION METER</h3>
          <p className="text-xs text-gray-500 font-mono">
            > STATISTICS<br/>
            > STALKING TRACKER<br/>
            > PAIN_LOGS.csv
          </p>
        </button>
      </div>
      
      {/* Support / Patreon Link */}
      <div className="mt-12 text-center border-t border-[#222] pt-6">
        <p className="text-[#666] text-xs font-mono mb-2">PROJECT FUNDING: <span className="text-[#ff2a2a]">$0 MRR</span></p>
        <a href="#" className="inline-block text-[#39ff14] text-xs font-bold uppercase border border-[#39ff14] px-4 py-2 hover:bg-[#39ff14] hover:text-black transition-colors">
          Support the chaos (Patreon)
        </a>
      </div>
    </div>
  );
};

// 2. NO:CONTACT (Panic Protocol) - Logic from 'dontext_terminal'
const PanicModule = ({ onBack }) => {
  const [timer, setTimer] = useState(10);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (locked && timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [locked, timer]);

  return (
    <div className="pt-20 px-4 min-h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Red Pulse Bg */}
      <div className="absolute inset-0 bg-[#ff2a2a]/5 animate-pulse pointer-events-none"></div>
      
      <div className="max-w-md w-full relative z-10">
        {!locked ? (
          <>
            <ShieldAlert size={64} className="text-[#ff2a2a] mx-auto mb-6" />
            <h1 className="text-4xl font-black text-white mb-2 uppercase">Panic Protocol</h1>
            <p className="text-gray-500 font-mono text-sm mb-12">
              Ты хочешь написать ему. Твой мозг отключен. <br/>
              Жми кнопку, чтобы передать управление системе.
            </p>
            
            <button 
              onClick={() => setLocked(true)}
              className="w-48 h-48 rounded-full bg-[#ff2a2a] border-4 border-[#ff0000] shadow-[0_0_50px_rgba(255,42,42,0.5)] flex items-center justify-center mx-auto hover:scale-105 active:scale-95 transition-transform group"
            >
              <span className="text-black font-black text-2xl uppercase group-hover:scale-110 transition-transform">INITIATE<br/>LOCKDOWN</span>
            </button>
            <p className="mt-8 text-xs text-[#ff2a2a] font-mono animate-bounce">
              DON'T DO IT. HE DOESN'T CARE.
            </p>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="border border-[#ff2a2a] bg-[#1a0505] p-8 rounded-xl"
          >
            <Lock className="text-[#ff2a2a] mx-auto mb-4" size={48} />
            <h2 className="text-2xl font-bold text-white mb-2">INTERFACE LOCKED</h2>
            <p className="text-gray-400 text-xs font-mono mb-6">
              Мы заблокировали твои "гениальные" идеи на 10 секунд. Дыши.
            </p>
            <div className="text-6xl font-mono text-[#ff2a2a] mb-6">
              00:{timer < 10 ? `0${timer}` : timer}
            </div>
            {timer === 0 ? (
              <button onClick={onBack} className="text-white underline text-sm hover:text-[#ff2a2a]">
                Вернуться в систему (Импульс подавлен)
              </button>
            ) : (
              <div className="text-xs text-gray-500 animate-pulse">
                WAIT FOR THE URGE TO PASS...
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

// 3. ON:LOGIC (AI Exorcist) - Logic based on 'Spiral' landing concept
const LogicModule = ({ onBack }) => {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const runAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResult({
        verdict: "BREADCRUMBING DETECTED",
        score: 98,
        translation: "Он пишет 'Привет', чтобы проверить, сидишь ли ты еще на крючке. Ему скучно. Это не любовь, это проверка власти."
      });
    }, 2500); // Fake delay
  };

  return (
    <div className="pt-20 px-4 min-h-screen bg-black font-mono">
      <div className="max-w-2xl mx-auto border border-[#39ff14] bg-[#051a05] p-1 min-h-[600px] flex flex-col">
        {/* Terminal Header */}
        <div className="bg-[#39ff14] text-black p-2 flex justify-between items-center font-bold text-sm">
          <span>THE_EX_ORCIST_V1.0</span>
          <X size={16} className="cursor-pointer" onClick={onBack} />
        </div>

        <div className="p-6 flex-1 flex flex-col">
          {!result && !analyzing && (
            <div className="text-center my-auto">
              <Brain size={48} className="text-[#39ff14] mx-auto mb-4" />
              <h2 className="text-[#39ff14] text-xl font-bold mb-4">UPLOAD EVIDENCE</h2>
              <p className="text-[#39ff14]/70 text-sm mb-8">
                Загрузи скриншот его "сухого" сообщения. <br/>
                Мы переведем с мудацкого на человеческий.
              </p>
              
              <div className="space-y-3">
                <button onClick={runAnalysis} className="w-full border border-[#39ff14] text-[#39ff14] p-4 hover:bg-[#39ff14] hover:text-black transition-colors text-sm font-bold text-left">
                  > CASE_01: Он ответил "Ок" на мое эссе.
                </button>
                <button onClick={runAnalysis} className="w-full border border-[#39ff14] text-[#39ff14] p-4 hover:bg-[#39ff14] hover:text-black transition-colors text-sm font-bold text-left">
                  > CASE_02: Лайкнул сторис в 2 ночи.
                </button>
              </div>
            </div>
          )}

          {analyzing && (
            <div className="my-auto text-center">
              <Loader2 className="animate-spin text-[#39ff14] mx-auto mb-4" size={32} />
              <div className="text-[#39ff14] text-xs space-y-2">
                <div>> SCANNING_TOXICITY...</div>
                <div>> CALCULATING_AUDACITY...</div>
                <div>> REMOVING_HOPE...</div>
              </div>
            </div>
          )}

          {result && (
            <div className="animate-in fade-in zoom-in duration-300">
              <div className="border border-[#39ff14] p-4 mb-6 relative">
                <div className="absolute -top-3 left-4 bg-black px-2 text-[#39ff14] text-xs font-bold">VERDICT</div>
                <h1 className="text-3xl font-black text-white mb-2">{result.verdict}</h1>
                <div className="w-full bg-[#111] h-2">
                  <div className="h-full bg-[#39ff14]" style={{ width: `${result.score}%` }}></div>
                </div>
                <div className="flex justify-between text-xs text-[#39ff14] mt-1">
                  <span>NARCISSISM LEVEL</span>
                  <span>{result.score}%</span>
                </div>
              </div>

              <div className="text-sm text-gray-300 leading-relaxed border-l-2 border-[#39ff14] pl-4 mb-6">
                <span className="text-[#39ff14] font-bold block mb-2">> AI TRANSLATION:</span>
                "{result.translation}"
              </div>

              <button 
                onClick={() => setResult(null)}
                className="mt-8 w-full bg-[#39ff14] text-black font-bold py-3 hover:opacity-90"
              >
                ANALYZE NEW CRINGE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 4. UN:LOOP (Breathing) - Logic based on 'SOS' index.html
const LoopModule = ({ onBack }) => {
  const [phase, setPhase] = useState('inhale'); // inhale, hold, exhale
  const [count, setCount] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => {
        if (c === 1) {
          if (phase === 'inhale') { setPhase('hold'); return 7; }
          if (phase === 'hold') { setPhase('exhale'); return 8; }
          if (phase === 'exhale') { setPhase('inhale'); return 4; }
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [phase]);

  return (
    <div className="pt-20 px-4 min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      <button onClick={onBack} className="absolute top-4 right-4 text-[#00f0ff] hover:text-white z-50">
        <X size={32} />
      </button>

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00f0ff]/10 to-black pointer-events-none"></div>

      <div className="z-10 text-center">
        <h2 className="text-[#00f0ff] font-mono text-xl mb-12 tracking-widest uppercase">
          > SYSTEM_REBOOT // BREATH_WORK
        </h2>

        <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
          <motion.div 
            className="absolute inset-0 border-2 border-[#00f0ff] rounded-full opacity-30"
            animate={{ scale: phase === 'inhale' ? 1.5 : phase === 'exhale' ? 1 : 1.5 }}
            transition={{ duration: phase === 'inhale' ? 4 : phase === 'exhale' ? 8 : 0, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute inset-0 bg-[#00f0ff]/10 rounded-full blur-xl"
            animate={{ scale: phase === 'inhale' ? 1.2 : 0.8, opacity: phase === 'hold' ? 0.5 : 0.2 }}
            transition={{ duration: 4 }}
          />
          <div className="text-8xl font-black text-white font-mono relative z-20">
            {count}
          </div>
        </div>

        <div className="mt-12 text-2xl font-bold text-white uppercase tracking-widest">
          {phase === 'inhale' && "ВДОХ (Вбираем кислород)"}
          {phase === 'hold' && "ЗАДЕРЖКА (Стоп мысли)"}
          {phase === 'exhale' && "ВЫДОХ (Вымываем кортизол)"}
        </div>
        
        <p className="mt-4 text-gray-500 font-mono text-xs max-w-xs mx-auto">
          Продолжай, пока пульс не упадет ниже 80. <br/>
          Твоя боль — это просто химия. Мы ее хакнем.
        </p>
      </div>
    </div>
  );
};

// 5. STATS (Delusion Meter) - Logic from 'exstate.js' and 'terminal'
const StatsModule = ({ onBack }) => {
  const radarData = [
    { subject: 'Stalking', A: 120, fullMark: 150 },
    { subject: 'Delusion', A: 98, fullMark: 150 },
    { subject: 'Panic', A: 86, fullMark: 150 },
    { subject: 'Hope', A: 20, fullMark: 150 },
    { subject: 'Rage', A: 65, fullMark: 150 },
  ];

  return (
    <div className="pt-20 px-4 min-h-screen bg-[#050505] font-mono">
       <button onClick={onBack} className="absolute top-4 right-4 text-white z-20">
        <X size={32} />
      </button>
      <div className="max-w-4xl mx-auto">
        <GlitchHeader title="DELUSION METER" subtitle="Quantifying your Madness" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#111] border border-[#333] p-4 h-80 relative">
             <div className="absolute top-2 left-2 text-xs text-gray-500">CURRENT_BRAIN_STATE</div>
             <ResponsiveContainer width="100%" height="100%">
               <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                 <PolarGrid stroke="#333" />
                 <PolarAngleAxis dataKey="subject" tick={{ fill: '#666', fontSize: 10 }} />
                 <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                 <Radar name="State" dataKey="A" stroke="#fff" strokeWidth={2} fill="#fff" fillOpacity={0.1} />
               </RadarChart>
             </ResponsiveContainer>
          </div>

          <div className="space-y-4">
             <div className="bg-[#111] border border-[#333] p-6">
                <div className="text-gray-500 text-xs mb-1">DAYS SINCE LAST TEXT</div>
                <div className="text-4xl font-black text-white">00 <span className="text-red-500">DAYS</span></div>
                <div className="text-xs text-red-500 mt-2">> RESET DETECTED YESTERDAY</div>
             </div>
             
             <div className="bg-[#111] border border-[#333] p-6">
                <div className="text-gray-500 text-xs mb-1">STALKING TIME (TODAY)</div>
                <div className="text-4xl font-black text-white">42 <span className="text-[#39ff14]">MIN</span></div>
                <div className="w-full bg-[#222] h-1 mt-4">
                  <div className="w-[40%] bg-[#39ff14] h-full"></div>
                </div>
                <div className="text-xs text-[#39ff14] mt-2">> BETTER THAN YESTERDAY (-12%)</div>
             </div>
          </div>
        </div>

        <div className="mt-8 p-4 border border-dashed border-[#444] text-gray-500 text-xs text-center">
          > AI INSIGHT: Вы тратите 20% жизни на человека, которому на вас плевать. 
          Рекомендуется увеличить дозу "UN:LOOP".
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP SHELL ---

const App = () => {
  const [view, setView] = useState('home');
  const [loading, setLoading] = useState(true);

  // Fake Boot Sequence
  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  if (loading) {
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center font-mono text-[#00ff9d] text-xs p-8">
        <div className="w-full max-w-md space-y-2">
          {BOOT_LOGS.map((log, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.5 }}
            >
              {log}
            </motion.div>
          ))}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 1, duration: 1.5 }}
            className="h-1 bg-[#00ff9d] mt-4"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${THEME.bg} ${THEME.textMain} ${THEME.font} selection:bg-[#ff2a2a] selection:text-white`}>
      {/* Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#333] h-16 flex items-center px-4 justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
          <Power className="text-[#39ff14]" size={16} />
          <span className="font-bold tracking-tighter text-lg">NO:ON</span>
        </div>
        <div className="text-[10px] text-gray-500 font-mono hidden md:block">
          STATUS: {view === 'home' ? 'IDLE' : 'PROTOCOL_ACTIVE'}
        </div>
      </nav>

      {/* View Switcher */}
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {view === 'home' && <Dashboard setView={setView} />}
          {view === 'panic' && <PanicModule onBack={() => setView('home')} />}
          {view === 'logic' && <LogicModule onBack={() => setView('home')} />}
          {view === 'loop' && <LoopModule onBack={() => setView('home')} />}
          {view === 'stats' && <StatsModule onBack={() => setView('home')} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
