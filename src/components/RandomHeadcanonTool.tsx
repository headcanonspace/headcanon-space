"use client";

import React, { useEffect, useState } from "react";
import { FlaskConical, RefreshCw, Copy, Check } from "lucide-react";
import { generateHeadcanons, type RandomResult } from "@/lib/engine/generator";
import { afterMs } from "@/lib/afterMs";
import { SelectChevron } from "@/components/SelectChevron";
import { loadFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } from "@/lib/localStorage";

type VibeCategory = "Any" | "Angst" | "Fluff" | "Quirks" | "Chaos";
const STORAGE_KEY = "headcanon.random.lastResults";

const RANDOM_TRY_PRESETS: { label: string; vibe: VibeCategory; quantity: string }[] = [
  { label: "Fluffy picks (3)", vibe: "Fluff", quantity: "3" },
  { label: "Angst picks (3)", vibe: "Angst", quantity: "3" },
  { label: "Chaos mix (5)", vibe: "Chaos", quantity: "5" },
];

export default function RandomHeadcanonTool() {
  const [vibe, setVibe] = useState<VibeCategory>("Any");
  const [quantity, setQuantity] = useState("3");

  const [results, setResults] = useState<RandomResult[]>([]);
  const [genKey, setGenKey] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleGenerate = () => {
    const generated = generateHeadcanons({
      type: "random",
      vibe,
      count: parseInt(quantity),
    });
    setResults(generated);
    setGenKey((k) => k + 1);
  };

  const applyTryExample = (preset: (typeof RANDOM_TRY_PRESETS)[number]) => {
    setVibe(preset.vibe);
    setQuantity(preset.quantity);
    const generated = generateHeadcanons({
      type: "random",
      vibe: preset.vibe,
      count: parseInt(preset.quantity, 10),
    });
    setResults(generated);
    setGenKey((k) => k + 1);
  };

  const handleCopy = async (id: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    await afterMs(2000);
    setCopiedId((c) => (c === id ? null : c));
  };

  useEffect(() => {
    const saved = loadFromLocalStorage<RandomResult[]>(STORAGE_KEY);
    if (saved && saved.length > 0) {
      setResults(saved);
      setGenKey((k) => k + 1);
    }
  }, []);

  const handleSave = () => {
    if (results.length === 0) return;
    saveToLocalStorage(STORAGE_KEY, results);
  };

  const handleClearHistory = () => {
    removeFromLocalStorage(STORAGE_KEY);
    setResults([]);
    setCopiedId(null);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto font-[family-name:var(--font-geist-sans)] tracking-tight">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch pt-4">

        {/* LEFT PANEL */}
        <div className="w-full lg:w-[35%] bg-white border border-[var(--color-border)] rounded-xl p-6 md:p-8 flex flex-col gap-6 shadow-xl">

          <div className="flex items-center gap-2 mb-2">
            <FlaskConical className="size-5 text-[var(--color-primary)]" strokeWidth={2} aria-hidden />
            <h2 className="text-[18px] font-semibold text-[var(--color-text)]">Randomizer Setup</h2>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-[var(--color-ink-3)]">Headcanon Vibe</label>
              <div className="relative">
                <select value={vibe} onChange={(e) => setVibe(e.target.value as VibeCategory)} className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg px-4 py-3.5 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] appearance-none cursor-pointer text-[14px] transition-all shadow-inner">
                  <option value="Any">Mixed (Pure Random)</option>
                  <option value="Angst">Angst & Sadness</option>
                  <option value="Fluff">Fluffy & Wholesome</option>
                  <option value="Quirks">Specific Quirks/Habits</option>
                  <option value="Chaos">Chaotic Energy</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[var(--color-ink-3)]">
                  <SelectChevron />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-[var(--color-ink-3)]">Quantity</label>
              <div className="relative">
                <select value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg px-4 py-3.5 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] appearance-none cursor-pointer text-[14px] transition-all shadow-inner">
                  <option value="1">1 Headcanon</option>
                  <option value="3">3 Headcanons</option>
                  <option value="5">5 Headcanons</option>
                  <option value="10">10 Headcanons</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[var(--color-ink-3)]">
                  <SelectChevron />
                </div>
              </div>
            </div>
          </div>

          <button onClick={handleGenerate} className="w-full mt-2 relative group overflow-hidden bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white border border-transparent font-medium py-3.5 px-4 rounded-lg transition-all duration-300 flex justify-center items-center gap-2 text-[14px] active:scale-[0.98] shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 z-10">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            Generate Random Ideas
          </button>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full lg:w-[65%] bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-6 md:p-8 flex flex-col min-h-[450px] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-lt)] blur-[120px] rounded-full pointer-events-none" />

          <div className="flex justify-between items-center mb-8 relative z-10">
            <h2 className="text-[17px] font-semibold text-[var(--color-text)]">Pulled Results</h2>
            {results.length > 0 && (
              <div className="flex items-center gap-2">
                <button onClick={handleSave} className="text-[13px] font-medium text-[var(--color-ink-3)] hover:text-[var(--color-text)] transition-colors">Save</button>
                <button onClick={handleClearHistory} className="text-[13px] font-medium text-rose-500 hover:text-rose-700 transition-colors">Clear history</button>
                <button onClick={handleGenerate} className="text-[13px] font-medium text-[var(--color-ink-3)] hover:text-[var(--color-text)] transition-colors flex items-center gap-1.5 active:scale-[0.96]">
                  <RefreshCw className="size-4" strokeWidth={2} aria-hidden />
                  Re-roll
                </button>
              </div>
            )}
          </div>

          <div key={genKey} className="flex-1 flex flex-col gap-4 relative z-10 motion-safe:animate-[fadeIn_0.35s_ease-out_both]">
            {results.length > 0 ? (
              results.map((item, idx) => (
                <div key={item.id} className="bg-white border border-[var(--color-border)] rounded-lg p-5 flex flex-col gap-3 group transition-all duration-300" style={{ animationFillMode: "both", animation: `fadeIn 0.3s ease-out ${idx * 0.1}s forwards` }}>
                  <div className="flex justify-between items-start mb-0.5">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-primary)] bg-[var(--color-primary-lt)] border border-[var(--color-border)] px-2 py-0.5 rounded shadow-sm">{item.category}</span>
                    <button onClick={() => handleCopy(item.id, item.text)} className="text-[var(--color-ink-4)] hover:text-[var(--color-primary)] transition-colors bg-transparent p-1.5 -mr-1.5 -mt-1.5 rounded-md hover:bg-[var(--color-primary-lt)] active:scale-95" title="Copy to clipboard">
                      {copiedId === item.id ? (
                        <Check className="size-[18px] text-green-500" strokeWidth={2.5} aria-hidden />
                      ) : (
                        <Copy className="size-[18px]" strokeWidth={1.5} aria-hidden />
                      )}
                    </button>
                  </div>
                  <p className="text-[var(--color-text)] font-medium text-[15px] leading-relaxed">{item.text}</p>
                </div>
              ))
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6 h-full min-h-[360px] rounded-xl border-2 border-dashed border-[var(--color-border)] bg-white/50">
                <div className="w-14 h-14 bg-white border border-[var(--color-border)] shadow-sm rounded-xl flex items-center justify-center mb-5 text-[var(--color-primary)]">
                  <FlaskConical className="size-7" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="text-[16px] font-semibold text-[var(--color-text)] mb-1.5">Try an Example</h3>
                <p className="text-[var(--color-ink-3)] text-[14px] max-w-[300px] leading-relaxed mb-6">
                  Pick a preset to set vibe and quantity and roll ideas, or choose your own on the left.
                </p>
                <div className="flex flex-wrap justify-center gap-2.5 max-w-lg">
                  {RANDOM_TRY_PRESETS.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => applyTryExample(preset)}
                      className="px-4 py-2.5 text-sm font-semibold rounded-lg bg-white text-[var(--color-ink-2)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary-hover)] hover:shadow-md transition-all active:scale-[0.98]"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
