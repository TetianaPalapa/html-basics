import LessonCard from "./LessonCard";

function App() {
  return (
    <main>
      <div id="tw-probe" className="bg-pink-700 p-4 p-11.5 gap-3.5 font-sans text-gray-900" />
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
