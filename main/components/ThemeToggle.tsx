"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 md:top-10 md:right-10 text-[11px] font-mono uppercase tracking-widest text-muted hover:text-foreground transition-colors z-50"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? "[ Light Mode ]" : "[ Dark Mode ]"}
    </button>
  );
}