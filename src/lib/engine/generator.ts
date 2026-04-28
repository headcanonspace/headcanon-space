import {
  pick, pickFresh, shuffle, uid,
  type GeneratorConfig, type GeneratorResultMap,
  type HomeConfig, type CharacterConfig, type RandomConfig,
  type RelationshipConfig, type ScenarioConfig,
  type HomeResult, type CharacterResult, type RandomResult,
  type RelationshipResult, type RelationshipSection, type ScenarioResult,
} from "./types";

import {
  HOME_TONE_MODIFIERS, HOME_FOCUS_TEMPLATES, HOME_SETTING_MODIFIERS,
  CHARACTER_TEMPLATES, CHARACTER_MEDIUM_EXTENSIONS, CHARACTER_DETAILED_EXTENSIONS, CHARACTER_TONE_REPLACEMENTS,
  RANDOM_HEADCANONS,
  RELATIONSHIP_DYNAMIC_TEMPLATES, RELATIONSHIP_RITUAL_TEMPLATES,
  RELATIONSHIP_TENSION_TEMPLATES, RELATIONSHIP_SCENE_TEMPLATES, RELATIONSHIP_SETTINGS,
  RELATIONSHIP_TYPES, RELATIONSHIP_TONES,
  SCENARIO_VERBS, SCENARIO_BODY_TEMPLATES,
} from "./templates/index";

// ═══════════════════════════════════════════════════════════════════════════════
// UNIFIED ENTRY POINT
// ═══════════════════════════════════════════════════════════════════════════════

export function generateHeadcanons<T extends GeneratorConfig>(
  config: T
): GeneratorResultMap[T["type"]] {
  switch (config.type) {
    case "home":
      return generateHome(config) as GeneratorResultMap[T["type"]];
    case "character":
      return generateCharacter(config) as GeneratorResultMap[T["type"]];
    case "random":
      return generateRandom(config) as GeneratorResultMap[T["type"]];
    case "relationship":
      return generateRelationship(config) as GeneratorResultMap[T["type"]];
    case "scenario":
      return generateScenario(config) as GeneratorResultMap[T["type"]];
    default:
      throw new Error(`Unknown generator type`);
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// HOME GENERATOR
// ═══════════════════════════════════════════════════════════════════════════════

function generateHome(config: HomeConfig): HomeResult[] {
  const { name, tone, setting, focus } = config;

  const tData = HOME_TONE_MODIFIERS[tone as keyof typeof HOME_TONE_MODIFIERS] || HOME_TONE_MODIFIERS.soft;
  const sData = HOME_SETTING_MODIFIERS[setting as keyof typeof HOME_SETTING_MODIFIERS] || HOME_SETTING_MODIFIERS.none;

  const availableFocuses = focus && focus !== "none"
    ? [HOME_FOCUS_TEMPLATES[focus as keyof typeof HOME_FOCUS_TEMPLATES]]
    : [HOME_FOCUS_TEMPLATES.personality, HOME_FOCUS_TEMPLATES.habits, HOME_FOCUS_TEMPLATES.quirks];

  const results: HomeResult[] = [];
  const titlePrefixes = ["The Reality of", "Hidden Depth:", "Unspoken Rule:", "A Curious Truth:", "Core Instinct:"];

  for (let i = 0; i < 3; i++) {
    const focusArr = pick(availableFocuses);
    const template = pickFresh(focusArr, `home-focus-${focus || "mix"}`);
    const adj = pick(tData.adjectives);
    const reaction = pick(tData.reactions);
    const theme = pick(tData.themes);

    let text = template
      .replace(/\{name\}/g, name)
      .replace(/\{adj\}/g, adj)
      .replace(/\{reaction\}/g, reaction)
      .replace(/\{theme\}/g, theme);

    const env = pick(sData);
    if (Math.random() > 0.5) {
      text = `Especially ${env}, ${text.charAt(0).toLowerCase() + text.slice(1)}`;
    } else {
      text = `${text} You can see this most clearly ${env}.`;
    }

    results.push({
      id: uid(),
      title: `${pick(titlePrefixes)} ${name}`,
      text,
    });
  }

  return results;
}

// ═══════════════════════════════════════════════════════════════════════════════
// CHARACTER GENERATOR
// ═══════════════════════════════════════════════════════════════════════════════

function generateCharacter(config: CharacterConfig): CharacterResult[] {
  const { concept, tone, category, length, count } = config;
  const charName = concept.trim() || "The character";
  const results: CharacterResult[] = [];

  for (let i = 0; i < count; i++) {
    let text = pickFresh(CHARACTER_TEMPLATES, "char-base").replace(/\{c\}/g, charName);

    if (length === "medium" || length === "detailed") {
      text += pick(CHARACTER_MEDIUM_EXTENSIONS);
    }
    if (length === "detailed") {
      text += pick(CHARACTER_DETAILED_EXTENSIONS);
    }

    const replacements = CHARACTER_TONE_REPLACEMENTS[tone];
    if (replacements) {
      for (const [from, to] of replacements) {
        text = text.replace(from, to);
      }
    }

    const result: CharacterResult = {
      id: uid(),
      title: `${category} Headcanon`,
      category,
      tone,
      text,
    };

    if (!results.some((r) => r.text === result.text)) {
      results.push(result);
    } else {
      i--;
    }
  }

  return results;
}

// ═══════════════════════════════════════════════════════════════════════════════
// RANDOM GENERATOR
// ═══════════════════════════════════════════════════════════════════════════════

function generateRandom(config: RandomConfig): RandomResult[] {
  const { vibe, count } = config;

  let pool: { text: string; category: string }[] = [];
  if (vibe === "Any") {
    Object.entries(RANDOM_HEADCANONS).forEach(([cat, items]) => {
      items.forEach((text) => pool.push({ text, category: cat }));
    });
  } else {
    const items = RANDOM_HEADCANONS[vibe] || RANDOM_HEADCANONS["Quirks"];
    items.forEach((text) => pool.push({ text, category: vibe }));
  }

  const shuffled = shuffle(pool);
  const results: RandomResult[] = [];

  for (let i = 0; i < count && i < shuffled.length; i++) {
    results.push({
      id: uid(),
      category: shuffled[i].category,
      text: shuffled[i].text,
    });
  }

  return results;
}

// ═══════════════════════════════════════════════════════════════════════════════
// RELATIONSHIP GENERATOR
// ═══════════════════════════════════════════════════════════════════════════════

function resolveRandom(value: string, options: string[]): string {
  if (value === "Random Selection") {
    const filtered = options.filter((o) => o !== "Random Selection");
    return pick(filtered);
  }
  return value;
}

function fillRelationshipTemplate(template: string, chars: string[]): string {
  const names = shuffle([...chars]);
  let result = template.replace(/\{chars\}/g, names.join(" and "));
  result = result.replace(/\{A\}/g, names[0] || "A");
  result = result.replace(/\{B\}/g, names[1] || names[0] || "B");
  const settings = RELATIONSHIP_SETTINGS[""] || RELATIONSHIP_SETTINGS["default"];
  result = result.replace(/\{setting\}/g, pick(settings));
  return result;
}

function getTemplatePool(record: Record<string, string[]>, type: string): string[] {
  return record[type] || record["Friendship"] || [];
}

function generateRelationship(config: RelationshipConfig): RelationshipResult {
  const resolvedType = resolveRandom(config.relationshipType, RELATIONSHIP_TYPES);
  const resolvedTone = resolveRandom(config.tone, RELATIONSHIP_TONES);

  const dynamicPool = getTemplatePool(RELATIONSHIP_DYNAMIC_TEMPLATES, resolvedType);
  const ritualPool = getTemplatePool(RELATIONSHIP_RITUAL_TEMPLATES, resolvedType);
  const tensionPool = getTemplatePool(RELATIONSHIP_TENSION_TEMPLATES, resolvedType);
  const scenePool = getTemplatePool(RELATIONSHIP_SCENE_TEMPLATES, resolvedType);

  const chars = config.characters.filter((c) => c.trim() !== "").map((c) => c.trim());
  const sections: RelationshipSection[] = [];

  const dynamicText = fillRelationshipTemplate(pickFresh(dynamicPool, `rel-dyn-${resolvedType}`), chars);
  sections.push({ label: "Dynamic", color: "blue", text: dynamicText });

  if (config.length !== "Short") {
    const ritualText = fillRelationshipTemplate(pickFresh(ritualPool, `rel-rit-${resolvedType}`), chars);
    sections.push({ label: "Private Ritual", color: "purple", text: ritualText });
  }

  const tensionText = fillRelationshipTemplate(pickFresh(tensionPool, `rel-ten-${resolvedType}`), chars);
  sections.push({ label: "Unspoken Tension", color: "amber", text: tensionText });

  if (config.length === "Long") {
    const sceneText = fillRelationshipTemplate(pickFresh(scenePool, `rel-scn-${resolvedType}`), chars);
    sections.push({ label: "Scene", color: "green", text: sceneText });
  }

  if (config.context.trim() && sections.length > 0) {
    sections[0] = {
      ...sections[0],
      text: sections[0].text + ` Their story unfolds ${config.context.trim()}.`,
    };
  }

  return {
    id: uid(),
    characterNames: chars.join(" & "),
    fandom: config.fandom,
    relationshipType: resolvedType,
    tone: resolvedTone,
    sections,
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// SCENARIO GENERATOR
// ═══════════════════════════════════════════════════════════════════════════════

function getScenarioBody(length: string, tone: string): string {
  const lengthKey = length === "Short" ? "Short" : length === "Medium" ? "Medium" : "Long";
  const pool = SCENARIO_BODY_TEMPLATES[lengthKey]?.[tone]
    || SCENARIO_BODY_TEMPLATES[lengthKey]?.["Wholesome & Nostalgic"]
    || [""];
  return pickFresh(pool, `scn-body-${lengthKey}-${tone}`);
}

function generateScenarioSingle(config: ScenarioConfig): ScenarioResult {
  const charName = config.characters.trim() || "The character";
  const ctx = config.context.trim() || "their situation";
  const verb = pickFresh(
    SCENARIO_VERBS[config.tone] || SCENARIO_VERBS["Wholesome & Nostalgic"],
    `scn-verb-${config.tone}`,
  );

  const opener = `${charName} ${verb} ${ctx}.`;
  const body = getScenarioBody(config.length, config.tone);
  const headcanonText = `${opener} ${body}`;

  return {
    id: uid(),
    characters: config.characters || "Unknown Character",
    fandom: config.fandom || "Unknown Fandom",
    scenarioType: config.scenarioType,
    tone: config.tone,
    length: config.length,
    context: ctx,
    brainstormIdeas: [
      `How ${charName} handles the immediate pressure of ${ctx}.`,
      `The hidden emotional toll this situation takes on them behind closed doors.`,
      `A specific coping mechanism they developed to survive or thrive in this scenario.`,
    ],
    elaboration: `In this scenario regarding ${ctx}, ${charName} relies on their core instincts to navigate the situation. What begins as a minor obstacle quickly escalates, forcing them to confront deeper insecurities.\n\n${body}`,
    sceneDescription: `The atmosphere is dense with ${config.tone.split(" ")[0].toLowerCase()} energy. ${charName} stands near the edge of the space, hands tightly gripped. ${headcanonText}\n\nAs the realization sets in, a subtle shift in their posture reveals exactly how they plan to handle the fallout.`,
  };
}

function generateScenario(config: ScenarioConfig): ScenarioResult[] {
  const results: ScenarioResult[] = [];
  for (let i = 0; i < config.count; i++) {
    results.push(generateScenarioSingle(config));
  }
  return results;
}

// ═══════════════════════════════════════════════════════════════════════════════
// RE-EXPORTS for convenience
// ═══════════════════════════════════════════════════════════════════════════════

export { CHARACTER_EXAMPLES } from "./templates/index";
export { RANDOM_HEADCANONS } from "./templates/index";
export {
  RELATIONSHIP_TYPES, RELATIONSHIP_TONES,
  RELATIONSHIP_SETTINGS,
} from "./templates/index";
export { SCENARIO_TYPES, SCENARIO_TONES, SCENARIO_EXAMPLES } from "./templates/index";
export type {
  GeneratorConfig, HomeConfig, CharacterConfig, RandomConfig,
  RelationshipConfig, ScenarioConfig,
  HomeResult, CharacterResult, RandomResult,
  RelationshipResult, RelationshipSection, ScenarioResult,
} from "./types";
export { pick, pickFresh, uid } from "./types";
