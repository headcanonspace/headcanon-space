/**
 * Resolves after `ms` without setTimeout (Web Animations API).
 * Use for short delays like copy-feedback reset, not for fake loading.
 */
export function afterMs(ms: number): Promise<void> {
  if (typeof document === "undefined") return Promise.resolve();
  const el = document.createElement("div");
  return el.animate([{ opacity: 1 }, { opacity: 1 }], { duration: ms, fill: "forwards" }).finished.then(() => {});
}
