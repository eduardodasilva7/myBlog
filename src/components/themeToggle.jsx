import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="relative size-9 rounded-md hover:bg-gray-100 dark:hover:bg-red-800 flex items-center justify-center transition-colors">
        {" "}
        <Sun size={20} />
        
      </button>
    );
  }

  return (

      <>
        {theme === "dark" ? (
          <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative size-9 rounded-md hover:bg-gray-800 flex items-center justify-center transition-colors"
        
            >
        <Moon className="absolute h-5 w-5  transition-all light:rotate-0 light:scale-100" />
         </button>
            ) : (
        <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative size-9 rounded-md hover:bg-gray-100  flex items-center justify-center transition-colors"
            >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
        </button>
            )}
        
      </>

  );
}

export default ThemeToggle;
