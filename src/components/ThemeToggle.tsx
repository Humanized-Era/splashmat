"use client";

import { IconMoon, IconSun } from "@/components/icons";

export default function ThemeToggle() {
  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("splashmat-theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Wissel tussen licht en donker thema"
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border-soft bg-surface/60 text-foreground transition-colors hover:bg-surface"
    >
      <IconMoon className="h-5 w-5 dark:hidden" />
      <IconSun className="hidden h-5 w-5 dark:block" />
    </button>
  );
}
