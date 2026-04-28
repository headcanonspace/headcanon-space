// ─── Shared Utilities ────────────────────────────────────────────────────────

export function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function uid(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

const recentMap = new Map<string, number[]>();

export function pickFresh<T>(arr: T[], key: string, window = 5): T {
  const recent = recentMap.get(key) || [];
  const candidates = arr.map((_, i) => i).filter((i) => !recent.includes(i));
  const idx =
    candidates.length > 0
      ? candidates[Math.floor(Math.random() * candidates.length)]
      : Math.floor(Math.random() * arr.length);
  recent.push(idx);
  if (recent.length > window) recent.shift();
  recentMap.set(key, recent);
  return arr[idx];
}

// ─── Config Types (Discriminated Union) ──────────────────────────────────────

export interface HomeConfig {
  type: "home";
  name: string;
  fandom: string;
  tone: string;
  setting: string;
  focus: string;
}

export interface CharacterConfig {
  type: "character";
  concept: string;
  tone: string;
  category: string;
  length: string;
  count: number;
}

export interface RandomConfig {
  type: "random";
  vibe: string;
  count: number;
}

export interface RelationshipConfig {
  type: "relationship";
  characters: string[];
  fandom: string;
  relationshipType: string;
  tone: string;
  length: string;
  context: string;
}

export interface ScenarioConfig {
  type: "scenario";
  characters: string;
  fandom: string;
  scenarioType: string;
  tone: string;
  length: string;
  context: string;
  count: number;
}

export type GeneratorConfig =
  | HomeConfig
  | CharacterConfig
  | RandomConfig
  | RelationshipConfig
  | ScenarioConfig;

// ─── Result Types ────────────────────────────────────────────────────────────

export interface HomeResult {
  id: string;
  title: string;
  text: string;
}

export interface CharacterResult {
  id: string;
  title: string;
  category: string;
  tone: string;
  text: string;
}

export interface RandomResult {
  id: string;
  category: string;
  text: string;
}

export interface RelationshipSection {
  label: string;
  color: "blue" | "green" | "amber" | "purple";
  text: string;
}

export interface RelationshipResult {
  id: string;
  characterNames: string;
  fandom: string;
  relationshipType: string;
  tone: string;
  sections: RelationshipSection[];
}

export interface ScenarioResult {
  id: string;
  characters: string;
  fandom: string;
  scenarioType: string;
  tone: string;
  length: string;
  context: string;
  brainstormIdeas: string[];
  elaboration: string;
  sceneDescription: string;
}

// ─── Result Map (links config type to result type) ───────────────────────────

export type GeneratorResultMap = {
  home: HomeResult[];
  character: CharacterResult[];
  random: RandomResult[];
  relationship: RelationshipResult;
  scenario: ScenarioResult[];
};
