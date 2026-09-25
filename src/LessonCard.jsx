const LESSON_VARIANTS = {
  html: {
    coverClass: "cover-html",
    word: "HTML",
    wordClass: "cover-word gradient-html",
    bars: ["bar-teal", "bar-pink", "bar-violet"],
    ghost: "</>",
    stripClass: "strip-html",
    code: (
      <>
        <span className="tok-tag">&lt;div</span> <span className="tok-attr">class</span>=
        <span className="tok-str">"container"</span>
        <span className="tok-tag">&gt;</span>
        {"\n  "}
        <span className="tok-tag">&lt;h1&gt;</span>Lesson Title<span className="tok-tag">&lt;/h1&gt;</span>
        {"\n  "}
        <span className="tok-tag">&lt;p&gt;</span>Learn to code<span className="tok-tag">&lt;/p&gt;</span>
        {"\n"}
        <span className="tok-tag">&lt;/div&gt;</span>
      </>
    ),
  },
  css: {
    coverClass: "cover-css",
    word: "CSS",
    wordClass: "cover-word",
    bars: ["bar-blue", "bar-violet", "bar-cyan"],
    ghost: "{ }",
    stripClass: "strip-css",
    code: (
      <>
        <span className="tok-sel">.box</span> <span className="tok-plain">{"{"}</span>
        {"\n  "}
        <span className="tok-prop">color</span>
        <span className="tok-plain">:</span> <span className="tok-val-green">#fff</span>
        <span className="tok-plain">;</span>
        {"\n  "}
        <span className="tok-prop">display</span>
        <span className="tok-plain">:</span> <span className="tok-val-pink">flex</span>
        <span className="tok-plain">;</span>
        {"\n"}
        <span className="tok-plain">{"}"}</span>
      </>
    ),
  },
};

function LessonCard({ title, description, chip, dueDate, variant }) {
  const v = LESSON_VARIANTS[variant];

  return (
    <article className="card">
      <div className={`card-cover ${v.coverClass}`} role="img" aria-label={`${v.word} lesson cover`}>
        <div className="cover-title">
          <span className={v.wordClass}>{v.word}</span>
          <span className="cover-bars">
            {v.bars.map((bar) => (
              <i key={bar} className={`bar ${bar}`}></i>
            ))}
          </span>
        </div>
        <div className="code-window">
          <div className="code-window-header">
            <i className="dot dot-red"></i>
            <i className="dot dot-yellow"></i>
            <i className="dot dot-green"></i>
          </div>
          <pre className="code-window-body">
            <code>{v.code}</code>
          </pre>
        </div>
        <span className="cover-ghost">{v.ghost}</span>
        <div className={`cover-strip ${v.stripClass}`}></div>
      </div>
      <div className="card-content">
        <div className="card-info">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
        <div className="card-meta">
          <span className="chip">{chip}</span>
          <span className="due-date">Due Date: {dueDate}</span>
        </div>
      </div>
    </article>
  );
}

export default LessonCard;
