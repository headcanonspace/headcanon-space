"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, RefreshCw, Copy, Check } from "lucide-react";
import { generateHeadcanons, type HomeResult } from "@/lib/engine/generator";
import { afterMs } from "@/lib/afterMs";
import { SelectChevron } from "@/components/SelectChevron";
import { loadFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } from "@/lib/localStorage";

const STORAGE_KEY = "headcanon.home.lastResults";

type HomeTryPreset = {
  label: string;
  name: string;
  fandom: string;
  tone: string;
  setting: string;
  focus: string;
};

const HOME_TRY_PRESETS: HomeTryPreset[] = [
  {
    label: "Quiet fantasy hero",
    name: "Kael",
    fandom: "Fantasy",
    tone: "soft",
    setting: "fantasy",
    focus: "personality",
  },
  {
    label: "Anime prodigy",
    name: "Mira",
    fandom: "Anime",
    tone: "emotional",
    setting: "school",
    focus: "relationships",
  },
  {
    label: "Marvel inventor",
    name: "Tony Stark",
    fandom: "Marvel",
    tone: "funny",
    setting: "modern",
    focus: "quirks",
  },
];

export default function HomeHeadcanonTool() {
  const [name, setName] = useState("");
  const [fandom, setFandom] = useState("Original Work");
  const [tone, setTone] = useState("soft");
  const [setting, setSetting] = useState("none");
  const [focus, setFocus] = useState("none");

  const [results, setResults] = useState<HomeResult[]>([]);
  const [genKey, setGenKey] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!name.trim()) return;
    const generated = generateHeadcanons({
      type: "home",
      name,
      fandom,
      tone,
      setting,
      focus,
    });
    setResults(generated);
    setGenKey((k) => k + 1);
  };

  const applyTryExample = (preset: HomeTryPreset) => {
    setName(preset.name);
    setFandom(preset.fandom);
    setTone(preset.tone);
    setSetting(preset.setting);
    setFocus(preset.focus);
    const generated = generateHeadcanons({
      type: "home",
      name: preset.name,
      fandom: preset.fandom,
      tone: preset.tone,
      setting: preset.setting,
      focus: preset.focus,
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
    const saved = loadFromLocalStorage<HomeResult[]>(STORAGE_KEY);
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
    <div className="w-full max-w-[1200px] mx-auto p-4 md:p-8 font-[family-name:var(--font-geist-sans)] tracking-tight">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">

        {/* LEFT PANEL */}
        <div className="w-full lg:w-[35%] bg-white border border-[var(--color-border)] rounded-xl p-6 md:p-8 flex flex-col gap-6 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[var(--color-bg)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="size-5 text-[var(--color-text)]" strokeWidth={2} aria-hidden />
            <h2 className="text-[18px] font-semibold text-[var(--color-text)]">Character Details</h2>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-[var(--color-text-muted)]">
                Character Name <span className="text-[var(--color-primary)]">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={50}
                  placeholder="e.g. Harry Potter"
                  className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg px-4 py-3.5 text-[var(--color-text)] font-semibold placeholder-[var(--color-ink-4)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all text-[14px] shadow-inner"
                />
                <span className="absolute right-4 top-3.5 text-[11.5px] font-medium text-[var(--color-ink-4)]">
                  {name.length}/50
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-[var(--color-text-muted)]">Fandom</label>
              <div className="relative">
                <select value={fandom} onChange={(e) => setFandom(e.target.value)} className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg px-4 py-3.5 text-[var(--color-text)] font-semibold focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] appearance-none cursor-pointer text-[14px] transition-all shadow-inner">
                  <option value="Original Work">Original Work</option>
                  <option value="Anime">Anime</option>
                  <option value="Marvel">Marvel</option>
                  <option value="DC">DC</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Custom">Custom</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[var(--color-ink-3)]">
                  <SelectChevron />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-[var(--color-text-muted)]">Tone / Vibe</label>
              <div className="relative">
                <select value={tone} onChange={(e) => setTone(e.target.value)} className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg px-4 py-3.5 text-[var(--color-text)] font-semibold focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] appearance-none cursor-pointer text-[14px] transition-all shadow-inner">
                  <option value="soft">Soft</option>
                  <option value="dark">Dark</option>
                  <option value="chaotic">Chaotic</option>
                  <option value="emotional">Emotional</option>
                  <option value="funny">Funny</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[var(--color-ink-3)]">
                  <SelectChevron />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-[var(--color-text-muted)]">Setting / Context</label>
              <div className="relative">
                <select value={setting} onChange={(e) => setSetting(e.target.value)} className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg px-4 py-3.5 text-[var(--color-text)] font-semibold focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] appearance-none cursor-pointer text-[14px] transition-all shadow-inner">
                  <option value="none">None</option>
                  <option value="modern">Modern</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="school">School</option>
                  <option value="workplace">Workplace</option>
                  <option value="war">War</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[var(--color-ink-3)]">
                  <SelectChevron />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-[var(--color-text-muted)]">Output Focus</label>
              <div className="relative">
                <select value={focus} onChange={(e) => setFocus(e.target.value)} className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg px-4 py-3.5 text-[var(--color-text)] font-semibold focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] appearance-none cursor-pointer text-[14px] transition-all shadow-inner">
                  <option value="none">None</option>
                  <option value="personality">Personality</option>
                  <option value="habits">Habits</option>
                  <option value="relationships">Relationships</option>
                  <option value="fears">Fears</option>
                  <option value="quirks">Quirks</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[var(--color-ink-3)]">
                  <SelectChevron />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={!name.trim()}
            className="w-full mt-2 relative group overflow-hidden bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white border border-transparent font-medium py-3.5 px-4 rounded-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-2 text-[14px] active:scale-[0.98] shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 z-10"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            Generate Headcanon
          </button>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full lg:w-[65%] bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-6 md:p-8 flex flex-col min-h-[450px] shadow-2xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[17px] font-semibold text-[var(--color-text)]">Generated Text</h2>
            {results.length > 0 && (
              <div className="flex items-center gap-2">
                <button onClick={handleSave} className="text-[13px] font-medium text-[var(--color-ink-3)] hover:text-[var(--color-text)] transition-colors">Save</button>
                <button onClick={handleClearHistory} className="text-[13px] font-medium text-rose-500 hover:text-rose-700 transition-colors">Clear history</button>
                <button onClick={handleGenerate} className="text-[13px] font-medium text-[var(--color-ink-3)] hover:text-[var(--color-text)] transition-colors flex items-center gap-1.5 active:scale-[0.96]">
                  <RefreshCw className="size-4" strokeWidth={2} aria-hidden />
                  Regenerate
                </button>
              </div>
            )}
          </div>

          <div key={genKey} className="flex-1 flex flex-col gap-4 motion-safe:animate-[fadeIn_0.35s_ease-out_both]">
            {results.length > 0 ? (
              results.map((item, idx) => (
                <div key={item.id} className="bg-white border border-[var(--color-border)] rounded-lg p-5 md:p-6 flex flex-col gap-3 group transition-all duration-300 hover:border-[var(--color-border-med)] hover:bg-[var(--color-surface-hover)]" style={{ animationFillMode: "both", animation: `fadeIn 0.3s ease-out ${idx * 0.1}s forwards` }}>
                  <div className="flex justify-between items-start mb-0.5">
                    <h3 className="text-[var(--color-text)] font-semibold text-[15px] flex items-center gap-2">{item.title}</h3>
                    <button onClick={() => handleCopy(item.id, item.text)} className="text-[var(--color-ink-3)] hover:text-white transition-colors bg-transparent p-1.5 -mr-1.5 -mt-1.5 rounded-md hover:bg-[var(--color-surface-hover)] active:scale-95" title="Copy to clipboard">
                      {copiedId === item.id ? (
                        <Check className="size-[18px] text-green-500" strokeWidth={2.5} aria-hidden />
                      ) : (
                        <Copy className="size-[18px]" strokeWidth={1.5} aria-hidden />
                      )}
                    </button>
                  </div>
                  <p className="text-[var(--color-text-muted)] font-medium text-[14.5px] leading-[1.65]">{item.text}</p>
                </div>
              ))
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6 min-h-[360px] rounded-xl border-2 border-dashed border-[var(--color-border)] bg-white/60">
                <div className="w-14 h-14 bg-white border border-[var(--color-border)] shadow-inner rounded-xl flex items-center justify-center mb-5 text-[var(--color-ink-4)]">
                  <Sparkles className="size-7" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="text-[16px] font-semibold text-[var(--color-text)] mb-1.5">
                  Try an Example
                </h3>
                <p className="text-[var(--color-ink-3)] text-[14px] max-w-[320px] leading-relaxed mb-6">
                  Pick a preset to fill the form and generate headcanons
                  instantly, or enter your own details on the left.
                </p>
                <div className="flex flex-wrap justify-center gap-2.5 max-w-lg">
                  {HOME_TRY_PRESETS.map((preset) => (
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
