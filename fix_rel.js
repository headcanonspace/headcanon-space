const fs = require('fs');
let file = 'd:/headcanon-space/src/app/relationship-headcanon-generator/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const missing = `      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="section__label">Understanding the tool</p>
          <h2 className="section__h2">What Is a Relationship Headcanon?</h2>
          <div className="space-y-4" style={{ fontSize: "16px", color: "var(--color-ink-3)", lineHeight: 1.8 }}>
            <p>
              A relationship headcanon describes how two characters interact,
              behave, or feel about each other beyond what is officially shown.
            </p>
            <p>
              Fans use relationship headcanons to explore emotional dynamics, hidden
              connections, and unique character interactions. For results focused entirely on platonic dynamics,
              the <Link href="/friendship-headcanon-generator/">friendship headcanon generator</Link> focuses
              specifically on loyalty, found family, and shared history between characters.
            </p>
          </div>
        </div>
      </section>

      {/* ── How to Use & Why Use It ─────────────────────── */}`;

// If the file is missing the section, we inject it back
if (!content.includes('What Is a Relationship Headcanon?')) {
    content = content.replace('<section className="section section--alt">', missing + '\n      <section className="section section--alt">');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed file');
} else {
    console.log('Already fixed or not broken in this way');
}
