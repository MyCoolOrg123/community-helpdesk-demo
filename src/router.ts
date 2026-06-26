export type ReportKind = "support" | "bug" | "onboarding" | "release";

export interface RoutedReport {
  kind: ReportKind;
  label: string;
  channel: string;
  sourcePath: string;
}

const routes: Record<ReportKind, RoutedReport> = {
  support: {
    kind: "support",
    label: "support",
    channel: "#help-desk",
    sourcePath: "docs/faq.md",
  },
  bug: {
    kind: "bug",
    label: "bug",
    channel: "#bug-reports",
    sourcePath: ".github/ISSUE_TEMPLATE/bug-report.yml",
  },
  onboarding: {
    kind: "onboarding",
    label: "good first issue",
    channel: "#start-here",
    sourcePath: "docs/onboarding.md",
  },
  release: {
    kind: "release",
    label: "release-recap",
    channel: "#announcements",
    sourcePath: "CHANGELOG.md",
  },
};

export function routeReport(text: string): RoutedReport {
  const normalized = text.toLowerCase();

  if (normalized.includes("crash") || normalized.includes("regression") || normalized.includes("broken")) {
    return routes.bug;
  }

  if (normalized.includes("new here") || normalized.includes("start")) {
    return routes.onboarding;
  }

  if (normalized.includes("shipped") || normalized.includes("release")) {
    return routes.release;
  }

  return routes.support;
}
