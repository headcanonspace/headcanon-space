import { ChevronDown } from "lucide-react";

/** Consistent dropdown affordance for native `<select>` fields. */
export function SelectChevron({ className = "h-4 w-4" }: { className?: string }) {
  return <ChevronDown className={`shrink-0 text-current ${className}`} strokeWidth={2} aria-hidden />;
}
