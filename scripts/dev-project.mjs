#!/usr/bin/env node
/**
 * Multi-project local dev launcher — isolated slug, port, and Next.js cache per brand.
 * Usage: node scripts/dev-project.mjs prestige | godrej | golden
 */
import { spawn } from "node:child_process";

const PROJECTS = {
  prestige: {
    slug: "prestige-kollur",
    port: 3000,
    distDir: ".next-prestige",
    theme: "prestige-kollur",
    label: "Prestige Kollur",
  },
  godrej: {
    slug: "godrej-kukatpally",
    port: 3001,
    distDir: ".next-godrej",
    theme: "godrej-kukatpally",
    label: "Godrej Kukatpally",
  },
  golden: {
    slug: "golden-doors",
    port: 3002,
    distDir: ".next-golden",
    theme: "golden-doors",
    label: "Golden Doors",
  },
};

const key = process.argv[2];

if (key == null || !(key in PROJECTS)) {
  console.error(
    `[dev] Unknown project "${key ?? ""}". Use: node scripts/dev-project.mjs prestige | godrej | golden`,
  );
  process.exit(1);
}

const project = PROJECTS[key];

console.log("");
console.log("┌─────────────────────────────────────────────────────────────");
console.log(`│  ${project.label}`);
console.log(`│  slug   ${project.slug}`);
console.log(`│  theme  ${project.theme}`);
console.log(`│  url    http://localhost:${project.port}`);
console.log(`│  cache  ${project.distDir}/`);
console.log("└─────────────────────────────────────────────────────────────");
console.log("");

const child = spawn(
  "next",
  ["dev", "--turbopack", "-p", String(project.port)],
  {
    stdio: "inherit",
    env: {
      ...process.env,
      NEXT_PUBLIC_PROJECT_SLUG: project.slug,
      NEXT_DIST_DIR: project.distDir,
      PORT: String(project.port),
    },
    shell: process.platform === "win32",
  },
);

child.on("exit", (code, signal) => {
  if (signal != null) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
