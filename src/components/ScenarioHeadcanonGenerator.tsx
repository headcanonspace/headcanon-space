"use client";

import { useState, useCallback, useEffect } from "react";
import { Copy, Check, RefreshCw, Sparkles } from "lucide-react";
import {
  generateHeadcanons,
  SCENARIO_TYPES, SCENARIO_TONES, SCENARIO_EXAMPLES,
  type ScenarioResult,
} from "@/lib/engine/generator";
import { afterMs } from "@/lib/afterMs";
import { SelectChevron } from "@/components/SelectChevron";
import { loadFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } from "@/lib/localStorage";

const LENGTHS = ["Short", "Medium", "Long"];
const COUNTS = [1, 3, 5, 7];
const STORAGE_KEY = "headcanon.scenario.lastResults";

// ─── Styled Select ───────────────────────────────────────────────────────────────

function SelectDropdown({ label, value, onChange, options }: { label: string; value: string; onChange: (val: string) => void; options: { value: string; label: string }[] }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[var(--color-ink-2)] mb-1.5">{label}</label>
      <div className="relative">
        <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full appearance-none rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 pr-10 text-sm text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all cursor-pointer hover:border-[var(--color-border-med)] shadow-sm">
          {options.map((opt) => (<option key={opt.value} value={opt.value}>{opt.label}</option>))}
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-ink-4)]"><SelectChevron className="h-4 w-4" /></div>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────────

export default function ScenarioHeadcanonGenerator() {
  const [characters, setCharacters] = useState("");
  const [fandom, setFandom] = useState("");
  const [type, setType] = useState(SCENARIO_TYPES[0]);
  const [tone, setTone] = useState(SCENARIO_TONES[0]);
  const [length, setLength] = useState(LENGTHS[1]);
  const [context, setContext] = useState("");
  const [count, setCount] = useState<number>(3);

  const [results, setResults] = useState<ScenarioResult[]>([]);
  const [genKey, setGenKey] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const doGenerate = useCallback((chars: string, f: string, t: string, tn: string, l: string, ctx: string, c: number) => {
    const generated = generateHeadcanons({
      type: "scenario",
      characters: chars,
      fandom: f,
      scenarioType: t,
      tone: tn,
      length: l,
      context: ctx,
      count: c,
    });
    setResults(generated);
    setGenKey((k) => k + 1);
  }, []);

  const handleGenerate = useCallback(() => {
    doGenerate(characters, fandom, type, tone, length, context, count);
  }, [characters, fandom, type, tone, length, context, count, doGenerate]);

  const handleAddOne = useCallback(() => {
    const single = generateHeadcanons({
      type: "scenario",
      characters, fandom, scenarioType: type, tone, length, context, count: 1,
    });
    setResults((prev) => [...prev, ...single]);
  }, [characters, fandom, type, tone, length, context]);

  const handleRegenerateSingle = useCallback((id: string) => {
    const single = generateHeadcanons({
      type: "scenario",
      characters, fandom, scenarioType: type, tone, length, context, count: 1,
    });
    setResults((prev) => prev.map((r) => (r.id === id ? single[0] : r)));
  }, [characters, fandom, type, tone, length, context]);

  const handleCopy = useCallback(async (id: string, result: ScenarioResult) => {
    const text = `Scenario Headcanon: ${result.characters} (${result.fandom})\nContext: ${result.context}\n\nBrainstorm Ideas:\n${result.brainstormIdeas.map((i) => `- ${i}`).join("\n")}\n\nElaboration:\n${result.elaboration}\n\nScene Description:\n${result.sceneDescription}`;
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    await afterMs(2000);
    setCopiedId((c) => (c === id ? null : c));
  }, []);

  const applyPreset = (preset: typeof SCENARIO_EXAMPLES[0]) => {
    setCharacters(preset.characters);
    setFandom(preset.fandom);
    setType(preset.type);
    setTone(preset.tone);
    setLength(preset.length);
    setContext(preset.context);
    setCount(3);
    doGenerate(preset.characters, preset.fandom, preset.type, preset.tone, preset.length, preset.context, 3);
  };

  useEffect(() => {
    const saved = loadFromLocalStorage<ScenarioResult[]>(STORAGE_KEY);
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
    <div className="w-full max-w-7xl mx-auto font-sans px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left Panel */}
        <div className="lg:col-span-4 lg:sticky lg:top-6">
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[var(--color-ink-2)] mb-1.5">Characters</label>
              <input type="text" value={characters} onChange={(e) => setCharacters(e.target.value)} placeholder="e.g. Harry Potter" className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text)] placeholder-[var(--color-ink-4)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all hover:border-[var(--color-border-med)] shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[var(--color-ink-2)] mb-1.5">Fandom</label>
              <input type="text" value={fandom} onChange={(e) => setFandom(e.target.value)} placeholder="e.g. Harry Potter Universe" className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text)] placeholder-[var(--color-ink-4)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all hover:border-[var(--color-border-med)] shadow-sm" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SelectDropdown label="Scenario Type" value={type} onChange={setType} options={SCENARIO_TYPES.map((t) => ({ value: t, label: t }))} />
              <SelectDropdown label="Tone" value={tone} onChange={setTone} options={SCENARIO_TONES.map((t) => ({ value: t, label: t }))} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[var(--color-ink-2)] mb-1.5">Scenario Context</label>
              <textarea value={context} onChange={(e) => setContext(e.target.value)} placeholder="e.g. Hogwarts daily life and classes" rows={3} className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text)] placeholder-[var(--color-ink-4)] resize-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all hover:border-[var(--color-border-med)] shadow-sm" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SelectDropdown label="Length" value={length} onChange={setLength} options={LENGTHS.map((l) => ({ value: l, label: l }))} />
              <div>
                <label className="block text-sm font-semibold text-[var(--color-ink-2)] mb-1.5">Results</label>
                <div className="flex gap-2">
                  {COUNTS.map((c) => (
                    <button key={c} type="button" onClick={() => setCount(c)} className={`flex-1 px-2 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 cursor-pointer ${count === c ? "bg-[var(--color-primary-lt)] text-[var(--color-primary)] border-[var(--color-primary)]" : "bg-white text-[var(--color-ink-3)] border-[var(--color-border)] hover:border-[var(--color-border-med)] hover:bg-[var(--color-surface-hover)]"}`}>{c}</button>
                  ))}
                </div>
              </div>
            </div>
            <button type="button" onClick={handleGenerate} className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 mt-2 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-hover)] transition-all duration-200 shadow-sm shadow-blue-200 cursor-pointer">
              <Sparkles className="size-[18px]" strokeWidth={2} aria-hidden />Generate Scenario Headcanon
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {results.length === 0 && (
            <div className="h-full min-h-[500px] flex flex-col items-center justify-center p-8 bg-white rounded-3xl border-2 border-dashed border-[var(--color-border)]">
              <div className="mb-6 bg-white p-4 rounded-full shadow-sm border border-[var(--color-border)]"><Sparkles className="size-8 text-[var(--color-ink-4)]" strokeWidth={2} aria-hidden /></div>
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">Try an Example</h3>
              <p className="text-sm text-[var(--color-ink-3)] mb-6 text-center max-w-xs">Click one of these presets to instantly generate a scenario and see how it works.</p>
              <div className="flex flex-wrap justify-center gap-3">
                {SCENARIO_EXAMPLES.map((ex) => (
                  <button key={ex.label} onClick={() => applyPreset(ex)} className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-white text-[var(--color-ink-2)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:shadow-md transition-all cursor-pointer">{ex.label}</button>
                ))}
              </div>
            </div>
          )}

          {results.length > 0 && (
            <div key={genKey} className="space-y-6 motion-safe:animate-[scnFade_0.35s_ease-out_both]">
              {results.map((result, index) => (
                <div key={result.id} className="rounded-2xl border border-[var(--color-border)] bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="bg-white px-6 py-4 border-b border-[var(--color-border)] flex flex-wrap gap-3 items-center justify-between">
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-[var(--color-primary-lt)] text-[var(--color-primary)]">{result.characters}</span>
                      <span className="text-[var(--color-ink-4)] text-xs">•</span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-[var(--color-primary-lt)] text-[var(--color-primary)]">{result.fandom}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium text-[var(--color-ink-3)] bg-white border border-[var(--color-border)] shadow-sm">{result.scenarioType}</span>
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium text-[var(--color-ink-3)] bg-white border border-[var(--color-border)] shadow-sm">{result.tone}</span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 space-y-8">
                    <div className="border-l-4 border-purple-500 pl-5 relative">
                      <h4 className="inline-flex items-center text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md mb-4 uppercase tracking-wider">Brainstorm Ideas</h4>
                      <ul className="space-y-3">{result.brainstormIdeas.map((idea, idx) => (<li key={idx} className="flex gap-3 text-[15px] text-[var(--color-text)] leading-relaxed"><span className="text-purple-400 font-bold">•</span><p>{idea}</p></li>))}</ul>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-5 relative">
                      <h4 className="inline-flex items-center text-xs font-bold text-[var(--color-primary)] bg-[var(--color-primary-lt)] px-2.5 py-1 rounded-md mb-4 uppercase tracking-wider">Elaboration</h4>
                      <p className="text-[15px] text-[var(--color-text)] leading-relaxed whitespace-pre-line">{result.elaboration}</p>
                    </div>
                    <div className="border-l-4 border-emerald-500 pl-5 relative">
                      <h4 className="inline-flex items-center text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md mb-4 uppercase tracking-wider">Scene Description</h4>
                      <p className="text-[15px] text-[var(--color-text)] leading-relaxed font-serif italic whitespace-pre-line">&ldquo;{result.sceneDescription}&rdquo;</p>
                    </div>
                  </div>
                  <div className="bg-white px-6 py-4 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
                    <button type="button" onClick={() => handleCopy(result.id, result)} className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-white text-[var(--color-ink-2)] border border-[var(--color-border)] hover:bg-[var(--color-surface-hover)] transition-all shadow-sm cursor-pointer">
                      {copiedId === result.id ? <><Check className="size-3.5" strokeWidth={2} aria-hidden /> Copied!</> : <><Copy className="size-3.5" strokeWidth={2} aria-hidden /> Copy</>}
                    </button>
                    <button type="button" onClick={() => handleRegenerateSingle(result.id)} className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-white text-[var(--color-ink-2)] border border-[var(--color-border)] hover:bg-[var(--color-surface-hover)] transition-all shadow-sm cursor-pointer">
                      <RefreshCw className="size-3.5" strokeWidth={2} aria-hidden />Regenerate
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button type="button" onClick={handleSave} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[var(--color-ink-2)] border border-[var(--color-border)] text-sm font-semibold hover:bg-[var(--color-surface-hover)] transition-all shadow-sm cursor-pointer">Save</button>
                <button type="button" onClick={handleClearHistory} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-rose-600 border border-rose-200 text-sm font-semibold hover:bg-rose-50 transition-all shadow-sm cursor-pointer">Clear history</button>
                <button type="button" onClick={handleAddOne} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[var(--color-ink-2)] border border-[var(--color-border)] text-sm font-semibold hover:bg-[var(--color-surface-hover)] transition-all shadow-sm cursor-pointer"><Sparkles className="size-3.5" strokeWidth={2} aria-hidden />Add 1 More</button>
                <button type="button" onClick={handleGenerate} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-hover)] transition-all shadow-sm cursor-pointer"><RefreshCw className="size-4" strokeWidth={2} aria-hidden />Regenerate All Results</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scnFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
