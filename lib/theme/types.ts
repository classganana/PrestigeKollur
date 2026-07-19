/** Deployable visual identity — paired with `data-theme` on `<html>`. */
export type ThemeId = "prestige-kollur" | "godrej-kukatpally" | "golden-doors";

export type ThemeTypography = {
  /** Human-readable label for docs / debugging. */
  displayFamily: string;
  sansFamily: string;
};

export type ThemeDefinition = {
  id: ThemeId;
  /** PWA / mobile browser chrome — matches `--color-surface`. */
  viewportThemeColor: string;
  typography: ThemeTypography;
};
