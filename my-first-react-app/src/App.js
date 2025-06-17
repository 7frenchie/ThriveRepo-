import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Why Nottingham?</h1>
          <p className="tagline">The Ultimate Destination for Your Academic Journey</p>
          <div className="cta-buttons">
            <button className="explore-btn">Explore Nottingham</button>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </header>

      <main>
        <section className="features-section">
          <div className="feature-card">
            <h2>World-Class Universities</h2>
            <p>Home to prestigious institutions like the University of Nottingham and Nottingham Trent University</p>
            <div className="university-logos">
              <img src="https://www.nottingham.ac.uk/images/logo.png" alt="University of Nottingham" className="university-logo" />
              <img src="https://www.ntu.ac.uk/themes/ntu/images/ntu-logo.svg" alt="Nottingham Trent University" className="university-logo" />
            </div>
          </div>

          <div className="feature-card">
            <h2>Cultural Hub</h2>
            <p>A vibrant mix of history, arts, and modern culture that enriches your student experience</p>
            <div className="cultural-highlights">
              <div className="highlight">
                <h3>Nottingham Castle</h3>
                <p>Historic landmark and cultural center</p>
              </div>
              <div className="highlight">
                <h3>Nottingham Playhouse</h3>
                <p>Home of innovative theatre productions</p>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h2>Student Life</h2>
            <p>A thriving student community with endless opportunities for growth and fun</p>
            <div className="student-life-stats">
              <div className="stat">
                <h3>50,000+</h3>
                <p>Students</p>
              </div>
              <div className="stat">
                <h3>150+</h3>
                <p>Societies</p>
              </div>
              <div className="stat">
                <h3>100+</h3>
                <p>Student Events Weekly</p>
              </div>
            </div>
          </div>
        </section>

        <section className="call-to-action">
          <h2>Start Your Journey</h2>
          <p>Join thousands of students who have chosen Nottingham for their academic adventure</p>
          <button className="apply-now-btn">Apply Now</button>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 StudyInNottingham | All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
