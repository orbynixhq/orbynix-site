import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = localStorage.getItem("orbynix-theme") as Theme | null;
    if (stored === "light" || stored === "dark") return stored;
  } catch {}
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "light") {
    root.classList.add("light");
    root.classList.remove("dark");
  } else {
    root.classList.add("dark");
    root.classList.remove("light");
  }
  try {
    localStorage.setItem("orbynix-theme", theme);
  } catch {}
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  if (!mounted) {
    // Avoid hydration mismatch — render placeholder same size
    return <div className={cn("h-9 w-9", className)} />;
  }

  return (
    <button
      id="theme-toggle"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300",
        "glass hover:bg-white/10 border border-white/10",
        "group overflow-hidden",
        className,
      )}
    >
      {/* Sun icon */}
      <Sun
        className={cn(
          "absolute h-4 w-4 text-amber-400 transition-all duration-500",
          theme === "light"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-50",
        )}
      />
      {/* Moon icon */}
      <Moon
        className={cn(
          "absolute h-4 w-4 text-cyan-300 transition-all duration-500",
          theme === "dark"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-50",
        )}
      />
    </button>
  );
}
