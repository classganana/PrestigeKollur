/**
 * @deprecated Use `useSite()` in client components or `resolveProject()` / `resolveSite()` on the server.
 * Re-export shim — preserves legacy imports during incremental migration.
 */
import { resolveProject } from "@/lib/project/resolve-project";

const project = resolveProject();

/** @deprecated Use `resolveProject().site` or `useSite()`. */
export const SITE = project.site;

/** @deprecated Use `resolveProject().leadSourceTag`. */
export const LEAD_SOURCE_TAG = project.leadSourceTag;
