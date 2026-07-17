import DashboardPreview from "./DashboardPreview";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-badge">
          🚀 AI Powered Learning Platform
        </div>

        <h1>
          Learn Smarter.
          <br />
          Study Better.
        </h1>

        <p>
          Transform your notes into AI summaries, quizzes,
          flashcards and intelligent conversations—all in one
          modern study platform.
        </p>

        <div className="hero-buttons">
          <button>Get Started</button>
          <button>Watch Demo</button>
        </div>

      </div>

      <DashboardPreview />

    </section>
  );
}

export default Hero;