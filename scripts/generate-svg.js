const fs = require('fs');
const path = require('path');

// Arguments
const args = process.argv.slice(2);
let title = "Generated Image";
let outputFilename = "generated-image.svg";
let template = "writer"; 

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--title' && args[i + 1]) title = args[i + 1];
  if (args[i] === '--out' && args[i + 1]) outputFilename = args[i + 1];
  if (args[i] === '--template' && args[i + 1]) template = args[i + 1];
}

const width = 1200;
const height = 630;

// Theme Colors (Indigo, Slate, Rose)
const PRIMARY = "#4f46e5"; // Indigo 600
const PRIMARY_LT = "#c7d2fe"; // Indigo 200
const DARK = "#0f172a"; // Slate 900
const DARK_MUTED = "#334155"; // Slate 700
const BG_LIGHT = "#f8fafc"; // Slate 50
const WHITE = "#ffffff";
const ACCENT = "#e11d48"; // Rose 600

// Helper to draw a sparkle/star icon
function drawSparkle(x, y, scale = 1, color = PRIMARY) {
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <path d="M0 -20 Q0 0 20 0 Q0 0 0 20 Q0 0 -20 0 Q0 0 0 -20" fill="${color}" />
    </g>
  `;
}

// Helper to draw a document/page
function drawDocument(x, y, rotation = 0) {
  return `
    <g transform="translate(${x}, ${y}) rotate(${rotation})">
      <!-- Shadow -->
      <rect x="12" y="12" width="340" height="420" fill="${DARK}" rx="8" />
      <!-- Paper -->
      <rect x="0" y="0" width="340" height="420" fill="${WHITE}" stroke="${DARK}" stroke-width="4" rx="8" />
      
      <!-- Lines of text -->
      <rect x="40" y="60" width="260" height="16" fill="${DARK}" rx="4" />
      <rect x="40" y="100" width="220" height="12" fill="${DARK_MUTED}" rx="4" />
      <rect x="40" y="130" width="240" height="12" fill="${DARK_MUTED}" rx="4" />
      <rect x="40" y="160" width="180" height="12" fill="${DARK_MUTED}" rx="4" />
      
      <!-- Graphic block -->
      <rect x="40" y="210" width="260" height="120" fill="${PRIMARY_LT}" stroke="${PRIMARY}" stroke-width="4" rx="8" />
      <circle cx="170" cy="270" r="30" fill="${WHITE}" />
      ${drawSparkle(170, 270, 0.8, PRIMARY)}
      
      <rect x="40" y="360" width="200" height="12" fill="${DARK_MUTED}" rx="4" />
    </g>
  `;
}

function generateWriterDesk() {
  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${width}" height="${height}" fill="${BG_LIGHT}" />
      
      <!-- Background pattern (dots) -->
      <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="2" fill="${PRIMARY_LT}" />
      </pattern>
      <rect x="0" y="0" width="${width}" height="${height}" fill="url(#dots)" opacity="0.5" />

      <!-- Document Mockup (Left) -->
      ${drawDocument(120, 100, -4)}

      <!-- Sticky Note (Right overlapping) -->
      <g transform="translate(380, 340) rotate(6)">
        <rect x="8" y="8" width="220" height="220" fill="${DARK}" rx="4" />
        <rect x="0" y="0" width="220" height="220" fill="${PRIMARY}" stroke="${DARK}" stroke-width="4" rx="4" />
        <text x="30" y="50" font-family="monospace" font-size="24" font-weight="bold" fill="${WHITE}">Idea:</text>
        <line x1="30" y1="90" x2="190" y2="90" stroke="${WHITE}" stroke-width="4" stroke-dasharray="10,10" />
        <line x1="30" y1="130" x2="160" y2="130" stroke="${WHITE}" stroke-width="4" stroke-dasharray="10,10" />
        <line x1="30" y1="170" x2="180" y2="170" stroke="${WHITE}" stroke-width="4" stroke-dasharray="10,10" />
      </g>

      <!-- Sparkles -->
      ${drawSparkle(100, 150, 1.5, ACCENT)}
      ${drawSparkle(520, 120, 1, PRIMARY)}

      <!-- Right Side Typography -->
      <g transform="translate(620, 260)">
        <text x="0" y="0" font-family="serif" font-size="85" font-weight="900" fill="${DARK}" letter-spacing="-2">How to Write</text>
        <text x="0" y="90" font-family="serif" font-size="85" font-weight="900" fill="${PRIMARY}" letter-spacing="-2">Headcanons</text>
        
        <rect x="0" y="140" width="120" height="40" fill="${DARK}" rx="20" />
        <text x="60" y="165" font-family="sans-serif" font-size="14" font-weight="bold" fill="${WHITE}" text-anchor="middle" letter-spacing="2">TUTORIAL</text>
      </g>
    </svg>
  `;
}

function generateDefinitionCard() {
  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${width}" height="${height}" fill="${DARK}" />
      
      <!-- Huge abstract background text -->
      <text x="600" y="380" font-family="serif" font-size="280" font-weight="900" fill="${DARK_MUTED}" opacity="0.2" text-anchor="middle">DEFINE</text>

      <!-- The Definition Card -->
      <g transform="translate(250, 140)">
        <!-- Shadow -->
        <rect x="15" y="15" width="700" height="350" fill="${PRIMARY}" rx="16" />
        <!-- Card -->
        <rect x="0" y="0" width="700" height="350" fill="${WHITE}" stroke="${PRIMARY}" stroke-width="6" rx="16" />
        
        <!-- Header -->
        <text x="60" y="100" font-family="serif" font-size="72" font-weight="900" fill="${DARK}" letter-spacing="-2">Headcanon</text>
        <text x="60" y="140" font-family="monospace" font-size="22" font-weight="bold" fill="${PRIMARY}">[hed-kan-uhn] • noun</text>
        
        <line x1="60" y1="180" x2="640" y2="180" stroke="${PRIMARY_LT}" stroke-width="4" stroke-dasharray="12,12" />
        
        <!-- Highlighted Definition Bar -->
        <rect x="60" y="210" width="580" height="80" fill="${PRIMARY_LT}" rx="8" />
        <rect x="60" y="210" width="8" height="80" fill="${PRIMARY}" />
        <text x="90" y="258" font-family="sans-serif" font-size="28" font-weight="bold" fill="${DARK}">A fan's personal interpretation</text>
      </g>

      <!-- Floating Elements -->
      <g transform="translate(850, 80) rotate(15)">
        <rect x="0" y="0" width="160" height="60" fill="${ACCENT}" stroke="${WHITE}" stroke-width="4" rx="30" />
        <text x="80" y="38" font-family="sans-serif" font-size="22" font-weight="bold" fill="${WHITE}" text-anchor="middle">Concept</text>
      </g>
      
      ${drawSparkle(200, 100, 1.5, WHITE)}
      ${drawSparkle(950, 450, 2, PRIMARY_LT)}
      
      <!-- Footer Badge -->
      <rect x="80" y="520" width="150" height="40" fill="${WHITE}" fill-opacity="0.1" rx="20" />
      <text x="155" y="546" font-family="sans-serif" font-size="14" font-weight="bold" fill="${WHITE}" text-anchor="middle" letter-spacing="2">FANDOM WIKI</text>
    </svg>
  `;
}

function generateContrast() {
  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <!-- Diagonal Split Background -->
      <polygon points="0,0 600,0 400,630 0,630" fill="${DARK}" />
      <polygon points="600,0 1200,0 1200,630 400,630" fill="${BG_LIGHT}" />
      <line x1="600" y1="0" x2="400" y2="630" stroke="${PRIMARY}" stroke-width="8" />

      <!-- Left Side (Canon - Formal/Rigid) -->
      <g transform="translate(100, 250)">
        <rect x="0" y="-80" width="220" height="300" fill="${DARK_MUTED}" stroke="${WHITE}" stroke-width="4" rx="4" />
        <rect x="20" y="-60" width="180" height="260" fill="none" stroke="${WHITE}" stroke-width="2" />
        <text x="110" y="20" font-family="serif" font-size="42" font-weight="900" fill="${WHITE}" text-anchor="middle" letter-spacing="2">CANON</text>
        <line x1="40" y1="50" x2="180" y2="50" stroke="${PRIMARY_LT}" stroke-width="4" />
        <line x1="60" y1="70" x2="160" y2="70" stroke="${PRIMARY_LT}" stroke-width="4" />
      </g>

      <!-- Right Side (Headcanon - Creative/Floating) -->
      <g transform="translate(750, 150) rotate(8)">
        <rect x="10" y="10" width="320" height="240" fill="${DARK}" rx="120" />
        <rect x="0" y="0" width="320" height="240" fill="${PRIMARY}" stroke="${DARK}" stroke-width="4" rx="120" />
        <path d="M60 200 L20 280 L100 220 Z" fill="${PRIMARY}" stroke="${DARK}" stroke-width="4" stroke-linejoin="round" />
        <path d="M60 200 L20 280 L100 220 Z" fill="${PRIMARY}" /> <!-- hide stroke overlap -->
        
        <text x="160" y="130" font-family="serif" font-size="42" font-weight="900" fill="${WHITE}" text-anchor="middle" letter-spacing="1">HEADCANON</text>
      </g>
      
      <!-- Sparkles on the creative side -->
      ${drawSparkle(1050, 120, 1.2, ACCENT)}
      ${drawSparkle(720, 420, 0.8, PRIMARY)}

      <!-- Center VS Badge -->
      <g transform="translate(500, 315)">
        <circle cx="0" cy="0" r="70" fill="${DARK}" stroke="${WHITE}" stroke-width="8" />
        <text x="0" y="22" font-family="sans-serif" font-size="64" font-style="italic" font-weight="900" fill="${WHITE}" text-anchor="middle">VS</text>
      </g>
    </svg>
  `;
}

let finalSvg = '';
if (template === 'writer') finalSvg = generateWriterDesk();
else if (template === 'definition') finalSvg = generateDefinitionCard();
else if (template === 'contrast') finalSvg = generateContrast();

const outputPath = path.resolve(process.cwd(), outputFilename);
fs.writeFileSync(outputPath, finalSvg.trim());

console.log(`✅ Successfully generated highly creative SVG image [Template: ${template}] at: ${outputPath}`);
