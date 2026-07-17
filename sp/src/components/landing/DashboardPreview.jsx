function DashboardPreview() {
  return (
    <div className="dashboard-card">

      <div className="dashboard-top">
        <h3>StudySphere</h3>
        <span>Online</span>
      </div>

      <div className="stats">

        <div className="stat-card">
          <h2>12</h2>
          <p>Notes</p>
        </div>

        <div className="stat-card">
          <h2>8</h2>
          <p>Quizzes</p>
        </div>

        <div className="stat-card">
          <h2>91%</h2>
          <p>Progress</p>
        </div>

      </div>

      <div className="activity">

        <h4>Recent Activity</h4>

        <div className="activity-item">
          📄 AI Summary Generated
        </div>

        <div className="activity-item">
          🧠 Flashcards Created
        </div>

        <div className="activity-item">
          ✅ Quiz Completed
        </div>

      </div>

    </div>
  );
}

export default DashboardPreview;