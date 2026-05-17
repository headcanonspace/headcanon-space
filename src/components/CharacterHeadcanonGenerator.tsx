"use client";

import React, { useEffect, useState } from "react";
import { Copy, RefreshCw, Wand2, Check, Dices, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { generateHeadcanons, CHARACTER_EXAMPLES, type CharacterResult } from "@/lib/engine/generator";
import { afterMs } from "@/lib/afterMs";
import { SelectChevron } from "@/components/SelectChevron";
import { loadFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } from "@/lib/localStorage";

const STORAGE_KEY = "headcanon.character.lastResults";

const CHARACTER_TRY_PRESETS: { label: string; concept: string }[] = [
  { label: "Grumpy barista", concept: "grumpy barista on the night shift" },
  { label: "Harry Potter", concept: "Harry Potter" },
  { label: "Chaotic pirate", concept: "chaotic space pirate with a heart of gold" },
];

export default function HeadcanonGenerator() {
  const [concept, setConcept] = useState("");
  const [category, setCategory] = useState("Personality");

  const [showAdvanced, setShowAdvanced] = useState(false);
  const [tone, setTone] = useState("Default");
  const [count, setCount] = useState(3);
  const [length, setLength] = useState("medium");

  const [results, setResults] = useState<CharacterResult[] | null>(null);
  const [genKey, setGenKey] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleRandomFill = () => {
    const random = CHARACTER_EXAMPLES[Math.floor(Math.random() * CHARACTER_EXAMPLES.length)];
    setConcept(random);
  };

  const handleGenerate = () => {
    const newResults = generateHeadcanons({
      type: "character",
      concept,
      tone,
      category,
      length,
      count,
    });
    setResults(newResults);
    setGenKey((k) => k + 1);
  };

  const applyTryExample = (presetConcept: string) => {
    setConcept(presetConcept);
    const newResults = generateHeadcanons({
      type: "character",
      concept: presetConcept,
      tone,
      category,
      length,
      count,
    });
    setResults(newResults);
    setGenKey((k) => k + 1);
  };

  const handleRegenerateSingle = (id: string) => {
    if (!results) return;
    const single = generateHeadcanons({
      type: "character",
      concept,
      tone,
      category,
      length,
      count: 1,
    });
    setResults((prev) => prev!.map((item) => (item.id === id ? single[0] : item)));
  };

  const handleCopy = async (id: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    await afterMs(2000);
    setCopiedId((c) => (c === id ? null : c));
  };

  useEffect(() => {
    const saved = loadFromLocalStorage<CharacterResult[]>(STORAGE_KEY);
    if (saved && saved.length > 0) {
      setResults(saved);
      setGenKey((k) => k + 1);
    }
  }, []);

  const handleSave = () => {
    if (!results || results.length === 0) return;
    saveToLocalStorage(STORAGE_KEY, results);
  };

  const handleClearHistory = () => {
    removeFromLocalStorage(STORAGE_KEY);
    setResults(null);
    setCopiedId(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 pb-24">
      {/* LEFT COLUMN */}
      <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-[var(--color-border)] p-6 sm:p-8 sticky top-6">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[var(--color-primary)]" />
          Generation Settings
        </h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-[var(--color-text)]">Character Name or Concept</label>
            <div className="relative flex items-center">
              <input
                type="text"
                value={concept}
                onChange={(e) => setConcept(e.target.value)}
                placeholder="e.g. Grumpy barista or Princess Aria"
                className="w-full p-3 pr-12 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all text-[var(--color-text)] placeholder:text-[var(--color-ink-4)]"
              />
              <button onClick={handleRandomFill} title="Random Character Concept" className="absolute right-2 p-2 text-[var(--color-ink-4)] hover:text-[var(--color-primary)] bg-white shadow-sm border border-[var(--color-border)] hover:bg-[var(--color-primary-lt)] rounded-lg transition-colors">
                <Dices className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--color-text)]">Headcanon Type</label>
            <div className="relative">
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-3 bg-white border border-[var(--color-border)] rounded-xl text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none appearance-none font-medium cursor-pointer">
                <option value="Personality">Personality</option>
                <option value="Backstory">Backstory</option>
                <option value="Quirk">Quirk & Habits</option>
                <option value="Daily Routine">Daily Routine</option>
                <option value="Relationship">Relationship Dynamics</option>
                <option value="AU Scenario">AU Scenario</option>
                <option value="Fun Fact">Fun Fact</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-ink-4)]">
                <SelectChevron />
              </div>
            </div>
          </div>

          <div className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-bg)]">
            <button onClick={() => setShowAdvanced(!showAdvanced)} className="w-full flex items-center justify-between p-4 text-sm font-semibold text-black hover:bg-[var(--color-surface-hover)] transition-colors">
              Advanced Options
              {showAdvanced ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {showAdvanced && (
              <div className="p-4 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[var(--color-border)]">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-black">Tone</label>
                  <select value={tone} onChange={(e) => setTone(e.target.value)} className="w-full p-2 bg-white border border-[var(--color-border)] rounded-lg text-sm focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-black font-medium">
                    <option value="Default">Default</option>
                    <option value="Humorous">Humorous</option>
                    <option value="Dark">Dark</option>
                    <option value="Wholesome">Wholesome</option>
                    <option value="Tragic">Tragic</option>
                    <option value="Romantic">Romantic</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-black">Length</label>
                  <select value={length} onChange={(e) => setLength(e.target.value)} className="w-full p-2 bg-white border border-[var(--color-border)] rounded-lg text-sm focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-black font-medium">
                    <option value="short">Short</option>
                    <option value="medium">Medium</option>
                    <option value="detailed">Detailed</option>
                  </select>
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-semibold text-black">Output Count</label>
                  <select value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-full p-2 bg-white border border-[var(--color-border)] rounded-lg text-sm focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-black font-medium">
                    <option value={1}>1 Idea</option>
                    <option value={3}>3 Ideas</option>
                    <option value={5}>5 Ideas</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          <button onClick={handleGenerate} disabled={!concept.trim()} className="w-full py-3.5 bg-[var(--color-primary)] text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[var(--color-primary-hover)] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-indigo-200 hover:shadow-lg active:scale-[0.98]">
            <Wand2 className="w-5 h-5" />Generate Headcanons
          </button>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="lg:col-span-7 flex flex-col min-h-[400px]">
        {!results && (
          <div className="flex-1 border-2 border-dashed border-[var(--color-border)] rounded-2xl flex flex-col items-center justify-center p-8 text-center bg-[var(--color-bg)] min-h-[420px]">
            <div className="w-16 h-16 bg-[var(--color-bg)] rounded-full flex items-center justify-center mb-4">
              <Wand2 className="w-8 h-8 text-[var(--color-text)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">Try an Example</h3>
            <p className="text-[var(--color-ink-2)] max-w-sm mb-6">
              Tap a preset to load a concept and generate ideas, or use the form on the left with your own character.
            </p>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-md">
              {CHARACTER_TRY_PRESETS.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => applyTryExample(p.concept)}
                  className="px-4 py-2.5 text-sm font-semibold rounded-xl bg-white text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary-hover)] hover:shadow-md transition-all active:scale-[0.98]"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {results && (
          <div key={genKey} className="space-y-4 motion-safe:animate-[charFade_0.35s_ease-out_both]">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-[var(--color-text)]">Generated Results</h3>
              <div className="flex items-center gap-3">
                <button onClick={handleSave} className="text-sm font-semibold text-[var(--color-ink-3)] hover:text-[var(--color-ink-2)] transition-colors">Save</button>
                <button onClick={handleClearHistory} className="text-sm font-semibold text-rose-600 hover:text-rose-700 transition-colors">Clear history</button>
                <button onClick={handleGenerate} className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] flex items-center gap-1.5 transition-colors">
                  <RefreshCw className="w-4 h-4" />Regenerate All
                </button>
              </div>
            </div>

            {results.map((result, index) => (
              <div key={result.id} className="group relative p-6 bg-white rounded-2xl border border-[var(--color-border)] shadow-sm transition-all space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-[var(--color-text)] mb-2">{concept.trim() || "Character"}</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[var(--color-primary-lt)] text-[var(--color-primary-hover)] border border-[var(--color-border)]">{result.category}</span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[var(--color-bg)] text-[var(--color-text)] border border-[var(--color-border)]">{result.tone === "Default" ? "Standard" : result.tone}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                    <button onClick={() => handleRegenerateSingle(result.id)} className="p-2 text-[var(--color-ink-4)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-lt)] rounded-lg transition-colors border border-transparent hover:border-[var(--color-border)]" title="Regenerate this idea">
                      <RefreshCw className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleCopy(result.id, result.text)} className="p-2 text-[var(--color-ink-4)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-lt)] rounded-lg transition-colors border border-transparent hover:border-[var(--color-border)]" title="Copy to clipboard">
                      {copiedId === result.id ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <p className="text-[var(--color-text)] leading-relaxed text-base pt-2">
                  <span className="text-[var(--color-ink-4)] mr-1 text-xl font-serif">&ldquo;</span>
                  {result.text}
                  <span className="text-[var(--color-ink-4)] ml-1 text-xl font-serif">&rdquo;</span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes charFade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
