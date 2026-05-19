"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Zap, RefreshCw, Copy, Check, Plus, Trash2, PenLine, Users2 } from "lucide-react";
import {
  generateHeadcanons,
  RELATIONSHIP_TONES,
  type RelationshipResult, type RelationshipSection,
} from "@/lib/engine/generator";
import { afterMs } from "@/lib/afterMs";
import { SelectChevron } from "@/components/SelectChevron";
import { loadFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } from "@/lib/localStorage";

// ─── Types ───────────────────────────────────────────────────────────────────────

interface ExamplePreset {
  title: string;
  characters: string[];
  fandom: string;
  type: string;
  tone: string;
  context: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────────

const PLATONIC_TYPES = [
  "Random Selection",
  "Friendship",
  "Mentor-Student",
  "Family",
  "Professional",
  "Siblings",
];

const TONES = RELATIONSHIP_TONES;
const LENGTHS = ["Short", "Medium", "Long"];
const STORAGE_KEY = "headcanon.friendship.lastResult";

const EXAMPLE_PRESETS: ExamplePreset[] = [
  { title: "Harry & Ron", characters: ["Harry Potter", "Ron Weasley"], fandom: "Harry Potter", type: "Friendship", tone: "Wholesome", context: "Hogwarts school days" },
  { title: "Luffy & Zoro", characters: ["Luffy", "Zoro"], fandom: "One Piece", type: "Friendship", tone: "Emotional", context: "Crew bond and loyalty" },
  { title: "Sherlock & Watson", characters: ["Sherlock Holmes", "John Watson"], fandom: "Sherlock Holmes", type: "Professional", tone: "Dramatic", context: "Solving mysteries at Baker Street" },
];

// ─── Sub-Components ──────────────────────────────────────────────────────────────

function SelectField({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs uppercase tracking-wider font-semibold text-[var(--color-ink-4)]">{label}</label>
      <div className="relative">
        <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full appearance-none rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 sm:py-2.5 text-sm text-[var(--color-text)] outline-none transition-all focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)] cursor-pointer">
          {options.map((opt) => (<option key={opt} value={opt} className="bg-[var(--color-bg)] text-[var(--color-text)]">{opt}</option>))}
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-ink-2)]">
          <SelectChevron className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

function SectionBlock({ section }: { section: RelationshipSection }) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 space-y-3 relative overflow-hidden group hover:border-[var(--color-border)] transition-colors">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600/30 group-hover:bg-indigo-600/60 transition-colors" />
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(79,70,229,0.8)]" />
        <span className="text-xs uppercase tracking-widest font-semibold text-[var(--color-primary)]">{section.label}</span>
      </div>
      <p className="text-[13px] sm:text-[15px] leading-relaxed text-[var(--color-text)]">{section.text}</p>
    </div>
  );
}

function ExampleCard({ preset, onClick }: { preset: ExamplePreset; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="text-left rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 hover:bg-[var(--color-surface-hover)] hover:border-[var(--color-primary)] hover:shadow-[0_4px_20px_-4px_rgba(79,70,229,0.1)] transition-all duration-300 cursor-pointer group active:scale-[0.98] relative overflow-hidden">
      <div className="space-y-1">
        <p className="text-[14px] font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">{preset.title}</p>
        <p className="text-[11px] font-medium text-[var(--color-ink-4)] uppercase tracking-wider">{preset.fandom}</p>
        <div className="flex gap-2 pt-2">
          <span className="text-[10px] px-2 py-0.5 rounded-md bg-white text-[var(--color-text)] border border-[var(--color-border)]">{preset.type}</span>
          <span className="text-[10px] px-2 py-0.5 rounded-md bg-white text-[var(--color-text)] border border-[var(--color-border)]">{preset.tone}</span>
        </div>
      </div>
    </button>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────────

export default function FriendshipHeadcanonGenerator() {
  const [characters, setCharacters] = useState<string[]>([""]);
  const [fandom, setFandom] = useState("");
  const [relationshipType, setRelationshipType] = useState("Random Selection");
  const [tone, setTone] = useState("Random Selection");
  const [length, setLength] = useState("Medium");
  const [context, setContext] = useState("");

  const [result, setResult] = useState<RelationshipResult | null>(null);
  const [genKey, setGenKey] = useState(0);
  const [copied, setCopied] = useState(false);

  const resultRef = useRef<HTMLDivElement>(null);
  const canGenerate = characters.some((c) => c.trim() !== "");

  const updateCharacter = useCallback((index: number, value: string) => {
    setCharacters((prev) => { const next = [...prev]; next[index] = value; return next; });
  }, []);

  const addCharacter = useCallback(() => {
    if (characters.length < 5) setCharacters((prev) => [...prev, ""]);
  }, [characters.length]);

  const removeCharacter = useCallback((index: number) => {
    if (characters.length > 1) setCharacters((prev) => prev.filter((_, i) => i !== index));
  }, [characters.length]);

  const applyPreset = useCallback((preset: ExamplePreset) => {
    setCharacters(preset.characters);
    setFandom(preset.fandom);
    setRelationshipType(preset.type);
    setTone(preset.tone);
    setContext(preset.context);
  }, []);

  const resolvePlatonicType = useCallback((type: string) => {
    if (type === "Random Selection") {
      const list = PLATONIC_TYPES.filter((t) => t !== "Random Selection");
      return list[Math.floor(Math.random() * list.length)];
    }
    return type;
  }, []);

  const handleGenerate = useCallback(() => {
    if (!canGenerate) return;
    const resolvedType = resolvePlatonicType(relationshipType);
    const generated = generateHeadcanons({
      type: "relationship",
      characters: characters.filter((c) => c.trim() !== "").map((c) => c.trim()),
      fandom: fandom.trim(),
      relationshipType: resolvedType,
      tone,
      length,
      context: context.trim(),
    });
    setResult(generated);
    setGenKey((k) => k + 1);
  }, [canGenerate, characters, fandom, relationshipType, tone, length, context, resolvePlatonicType]);

  const handleCopy = useCallback(async () => {
    if (!result) return;
    const text = result.sections.map((s) => `[${s.label}]\n${s.text}`).join("\n\n");
    const header = `${result.characterNames} — ${result.relationshipType} (${result.tone})`;
    await navigator.clipboard.writeText(`${header}\n\n${text}`);
    setCopied(true);
    await afterMs(2000);
    setCopied(false);
  }, [result]);

  useEffect(() => {
    if (result && resultRef.current) resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [result]);

  useEffect(() => {
    const saved = loadFromLocalStorage<RelationshipResult>(STORAGE_KEY);
    if (saved) {
      setResult(saved);
      setGenKey((k) => k + 1);
    }
  }, []);

  const handleSave = useCallback(() => {
    if (!result) return;
    saveToLocalStorage(STORAGE_KEY, result);
  }, [result]);

  const handleClearHistory = useCallback(() => {
    removeFromLocalStorage(STORAGE_KEY);
    setResult(null);
    setCopied(false);
  }, []);

  const initials = characters.filter((c) => c.trim()).map((c) => c.trim()[0]?.toUpperCase() || "").join("").slice(0, 3) || "?";

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:gap-8 gap-6 md:px-4">

        {/* LEFT: Input Panel */}
        <div className="w-full lg:w-[420px] lg:shrink-0">
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5 sm:p-7 shadow-2xl space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-primary-lt)] flex items-center justify-center border border-[var(--color-border)]">
                <PenLine className="size-4 text-[var(--color-primary)]" strokeWidth={2} aria-hidden />
              </div>
              <h2 className="text-lg font-bold text-[var(--color-text)]">The Forge</h2>
            </div>

            <div className="space-y-3">
              <label className="block text-xs uppercase tracking-wider font-semibold text-[var(--color-ink-4)]">Characters <span className="text-[var(--color-ink-4)] font-normal normal-case">(Max 5)</span></label>
              {characters.map((char, i) => (
                <div key={i} className="flex gap-2">
                  <input type="text" value={char} onChange={(e) => updateCharacter(i, e.target.value)} placeholder={`Character ${i + 1} name`} className="flex-1 rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 sm:py-2.5 text-sm text-[var(--color-text)] placeholder-[var(--color-ink-4)] outline-none transition-all focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]" />
                  {characters.length > 1 && (
                    <button type="button" onClick={() => removeCharacter(i)} className="flex items-center justify-center w-11 h-11 sm:h-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-ink-4)] hover:text-rose-400 hover:border-rose-400/30 hover:bg-rose-400/10 transition-colors cursor-pointer"><Trash2 className="size-3.5" strokeWidth={2} aria-hidden /></button>
                  )}
                </div>
              ))}
              {characters.length < 5 && (
                <button type="button" onClick={addCharacter} className="w-full flex items-center justify-center gap-1.5 rounded-xl border border-dashed border-slate-300 text-[var(--color-ink-4)] py-2.5 text-sm font-medium hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors cursor-pointer active:scale-[0.99]"><Plus className="size-3.5" strokeWidth={2.5} aria-hidden />Add Character</button>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs uppercase tracking-wider font-semibold text-[var(--color-ink-4)]">Fandom <span className="text-[var(--color-ink-4)] font-normal normal-case">(Optional)</span></label>
              <input type="text" value={fandom} onChange={(e) => setFandom(e.target.value)} placeholder="e.g., Harry Potter, Anime, Marvel..." className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 sm:py-2.5 text-sm text-[var(--color-text)] placeholder-[var(--color-ink-4)] outline-none transition-all focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]" />
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent my-4"></div>

            <SelectField label="Platonic Dynamic" value={relationshipType} onChange={setRelationshipType} options={PLATONIC_TYPES} />
            <div className="grid grid-cols-2 gap-4">
              <SelectField label="Resonance" value={tone} onChange={setTone} options={TONES} />
              <SelectField label="Depth" value={length} onChange={setLength} options={LENGTHS} />
            </div>

            <div className="space-y-1.5 pt-2">
              <label className="block text-xs uppercase tracking-wider font-semibold text-[var(--color-ink-4)]">Conditioning Context <span className="text-[var(--color-ink-4)] font-normal normal-case">(Optional)</span></label>
              <textarea value={context} onChange={(e) => setContext(e.target.value)} placeholder="Set the scene, modern AU, found family setting..." rows={3} className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 sm:py-2.5 text-sm text-[var(--color-text)] placeholder-[var(--color-ink-4)] outline-none transition-all focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)] resize-none" />
            </div>

            <button type="button" onClick={handleGenerate} disabled={!canGenerate} className="mt-6 w-full group relative flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-4 text-sm font-bold text-white shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <div className="relative flex items-center gap-2"><Zap className="size-[18px]" strokeWidth={2} aria-hidden />Initialize Headcanon</div>
            </button>
          </div>
        </div>

        {/* RIGHT: Results Panel */}
        <div className="w-full lg:flex-1 min-w-0" ref={resultRef}>
          {!result && (
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 sm:p-10 shadow-2xl min-h-[500px] flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-lt)] blur-[120px] rounded-full pointer-events-none" />
              <div className="flex flex-col items-center text-center space-y-6 max-w-md mx-auto">
                <div className="w-20 h-20 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-primary)] shadow-inner">
                  <Users2 className="size-8" strokeWidth={1.5} aria-hidden />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[var(--color-text)]">Awaiting Companions</h3>
                  <p className="text-sm text-[var(--color-ink-4)] leading-relaxed">The forge remains dormant. Enter character parameters in the adjoining console to synthesize new platonic pathways.</p>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px flex-1 bg-[var(--color-bg)]" />
                  <span className="text-xs uppercase tracking-widest font-semibold text-[var(--color-ink-2)]">Platonic Presets</span>
                  <div className="h-px flex-1 bg-[var(--color-bg)]" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  {EXAMPLE_PRESETS.map((preset) => (<ExampleCard key={preset.title} preset={preset} onClick={() => applyPreset(preset)} />))}
                </div>
              </div>
            </div>
          )}

          {result && (
            <div key={genKey} className="rounded-2xl border border-[var(--color-border)] bg-white p-6 sm:p-8 shadow-2xl relative overflow-hidden motion-safe:animate-[relFade_0.35s_ease-out_both]">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary-lt)] blur-[120px] rounded-full pointer-events-none" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-border)] pb-6 mb-6 relative">
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-primary)] text-sm font-bold shadow-inner border border-[var(--color-border)]">{initials}</div>
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text)] truncate tracking-tight">{result.characterNames}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      {result.fandom && <span className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-ink-4)] bg-[var(--color-bg)] px-2 py-0.5 rounded border border-[var(--color-border)]">{result.fandom}</span>}
                      <span className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-primary)] bg-[var(--color-primary-lt)] px-2 py-0.5 rounded border border-[var(--color-border)]">{result.relationshipType}</span>
                      <span className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-ink-4)]">{result.tone}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={handleSave} className="px-3 h-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-xs font-semibold text-[var(--color-ink-2)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all cursor-pointer">Save</button>
                  <button type="button" onClick={handleClearHistory} className="px-3 h-10 rounded-xl border border-rose-200 bg-rose-50 text-xs font-semibold text-rose-600 hover:bg-rose-100 transition-all cursor-pointer">Clear history</button>
                  <button type="button" onClick={handleCopy} className="flex items-center justify-center w-10 h-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all active:scale-[0.95] cursor-pointer" title="Copy to Clipboard">{copied ? <Check className="size-[15px]" strokeWidth={2} aria-hidden /> : <Copy className="size-[15px]" strokeWidth={2} aria-hidden />}</button>
                  <button type="button" onClick={handleGenerate} className="flex items-center justify-center w-10 h-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all active:scale-[0.95] cursor-pointer" title="Regenerate"><RefreshCw className="size-[15px]" strokeWidth={2} aria-hidden /></button>
                </div>
              </div>
              <div className="space-y-4 relative">
                {result.sections.map((section, i) => (<SectionBlock key={i} section={section} />))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes relFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
