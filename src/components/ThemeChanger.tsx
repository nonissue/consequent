import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

export const ThemeChanger: React.FunctionComponent = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  // Only show theme changer on client when rendered
  // Avoids hydration mismatch between server & client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="w-6 h-6 text-radix-orange10 hover:text-radix-gray12 transition-all duration-500"
      onClick={() => {
        // for some reason, if theme is light, setTheme doesn't
        // change theme to dark on first use unless we use the logic below
        let nextTheme;
        if (theme === "system") {
          nextTheme = resolvedTheme === "light" ? "dark" : "light";
        } else {
          nextTheme = theme === "light" ? "dark" : "light";
        }

        setTheme(nextTheme);
      }}
      aria-label="Theme Toggle"
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};
