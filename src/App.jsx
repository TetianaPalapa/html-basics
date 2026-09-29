import { useState } from "react";
import LessonCard from "./LessonCard";
import { Switch } from "./components/ui/switch";

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleThemeChange = (checked) => {
    setIsDark(checked);
    document.documentElement.classList.toggle("dark", checked);
  };

  return (
    <main className="flex-col">
      <div className="flex items-center gap-2 p-4">
        <label htmlFor="theme-toggle" className="font-sans text-[length:var(--font-size-sm)] text-foreground">
          Dark mode
        </label>
        <Switch id="theme-toggle" checked={isDark} onCheckedChange={handleThemeChange} />
      </div>
      <section className="lessons" aria-label="Lessons">
        <LessonCard
          variant="html"
          title="HTML Basics"
          description="Learn the building blocks of the web with HTML. This lesson covers elements, attributes, and how to structure a webpage from scratch."
          chip="Code"
          dueDate="Sep 1"
          isDOne
        />
        <LessonCard
          variant="css"
          title="CSS Basics"
          description="Style and layout your webpages with CSS. This lesson covers selectors, properties, the box model, and how to bring your designs to life."
          chip="Code"
          dueDate="Sep 1"
          price="$19"
        />
        <LessonCard
          variant="html"
          title="HTML Basics"
          description="Learn the building blocks of the web with HTML. This lesson covers elements, attributes, and how to structure a webpage from scratch."
          chip="Code"
          dueDate="Sep 1"
          price="$19"
        />
      </section>
    </main>
  );
}

export default App;
