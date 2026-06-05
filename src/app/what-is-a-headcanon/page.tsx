import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  robots: "noindex, follow",
};

export default function LegacyWhatIsAHeadcanonPage() {
  permanentRedirect("/blog/headcanon-vs-canon/");
}
