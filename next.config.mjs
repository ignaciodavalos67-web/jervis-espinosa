import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

export default function nextConfig(phase) {
  // Keep development isolated while production uses Next.js/Vercel's default .next.
  return phase === PHASE_DEVELOPMENT_SERVER ? { distDir: ".next-dev" } : {};
}
