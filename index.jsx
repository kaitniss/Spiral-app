import React, { useState } from "react"; import { Activity, Zap, ArrowRight, ArrowLeft } from "lucide-react"; import StatesApp from "./states"; import Calibration from "./Emotional_Calibration"; /* Aggressive glitch landing / index page. - Big noisy glitch heading - Three neon buttons: Activities, States, Calibration - Clicking a button mounts the corresponding component (StatesApp or Calibration) - Back arrow returns to the landing - Uses inline {/* Header */}
SPIRAL.APP
setView("landing")} className="hover:text-white">Home  setView("activities")} className="hover:text-white">Activities  setView("states")} className="hover:text-white">States setView("calibration")} className="hover:text-white">Calibration
{/* Main */}
{view === "landing" && (
SPIRAL
Aggressive calibration & diagnostics for your emotional OS. Pick a lane — we'll get loud, weird and uncomfortably accurate.

setView("activities")} className="bg-gradient-to-r from-red-600 to-pink-600 shadow-[0_6px_30px_rgba(239,68,68,0.18)]" icon={} > Activities setView("states")} className="bg-gradient-to-r from-violet-600 to-blue-500 shadow-[0_6px_30px_rgba(99,102,241,0.14)]" icon={} > States setView("calibration")} className="bg-gradient-to-r from-emerald-500 to-green-400 shadow-[0_6px_30px_rgba(16,185,129,0.12)]" icon={} > Calibration
Tip: you can always switch modes in the top nav. This UI is intentionally loud.
System Mood

GLITCH_CORE
Experimental visualizer: aggressive color splitting, scanlines, and jitter. Perfect for nightly confessions.

Relapse risk
78%
Calm score
22%
)} {/* Activities & States reuse the StatesApp (states.jsx default export) */} {view === "activities" && (
setView("landing")} className="p-2 rounded-full bg-white/5 hover:bg-white/8" aria-label="Back" >
Activities

)} {view === "states" && (
setView("landing")} className="p-2 rounded-full bg-white/5 hover:bg-white/8" aria-label="Back" >
States

)} {view === "calibration" && (
setView("landing")} className="p-2 rounded-full bg-white/5 hover:bg-white/8" aria-label="Back" >
Calibration

)}
© 2025 SPIRAL INDUSTRIES — WARNING: MAY CAUSE SELF-AWARENESS
); }
