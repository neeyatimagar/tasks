import "./App.css";

function App() {
  return (
    <>
      {/* Top Navigation */}
      <header className="topnav">
        <div className="topnav-inner">
          <div className="logo">
            Learn <span>Up</span>
          </div>

          <nav className="nav-links">
            <a href="#">Courses</a>
            <a href="#">Community</a>
            <a href="#">Blog</a>
          </nav>

          <div></div>
        </div>
      </header>

      <div className="page">

        {/* Sidebar */}
        <aside className="sidebar">
          <div>
            <p className="sidebar-label">Main Menu</p>

            <nav className="sidebar-nav">
              <a href="#">📋 Overview</a>
              <a href="#" className="active">🎓 My courses</a>
              <a href="#">👥 My Mentors</a>
              <a href="#">🗓️ Calendar</a>
              <a href="#">💬 Message</a>
            </nav>

            <div className="sidebar-account">
              <p className="sidebar-label">Account</p>

              <nav className="sidebar-nav">
                <a href="#">⚙️ Settings</a>
                <a href="#">↪️ Logout</a>
              </nav>
            </div>
          </div>

          <button className="switch-btn">
            🔄 Switch to Learner
          </button>
        </aside>

        {/* Main Content */}
        <main className="main">

          <div>

            {/* Hero */}
            <div className="hero">
              <img
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=80"
                alt="Developer at desk"
              />

              <div className="hero-overlay"></div>

              <span className="hero-tag">
                Web Development
              </span>

              <span className="hero-reviews">
                ★ 4.8 reviews (2,450 reviews)
              </span>

              <h1 className="hero-title">
                Complete React Developer Bootcamp 2025
              </h1>

              <div className="hero-meta">
                <span>Beginner</span>
                <span>42 hrs</span>
                <span>8000+ Students</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="tabs">
              <button className="active">Overview</button>
              <button>Curriculum</button>
              <button>Mentors</button>
              <button>Review</button>
            </div>

            {/* About Course */}
            <section className="about-card">
              <h2>About this Course</h2>

              <p>
                This page shares my best articles to read on topics like
                health, happiness, creativity, productivity and more. The
                central question that drives my work is, "How can we live
                better?" To answer that question, I like to write about
                science-based ways to solve practical problems. You'll find
                interesting articles to read on topics like how to stop
                procrastinating as well as personal recommendations like my
                list of the best books to read and my minimalist travel guide.
                Ready to dive in? You can use the categories below to browse
                my best articles.
              </p>

              <div className="check-grid">
                <div className="check-item">
                  <span className="icon">✔✔</span>
                  <span>Master React hooks</span>
                </div>

                <div className="check-item">
                  <span className="icon">✔✔</span>
                  <span>
                    Global state management with Redux Toolkit
                  </span>
                </div>

                <div className="check-item">
                  <span className="icon">✔✔</span>
                  <span>
                    Routing with React Router V6.4+
                  </span>
                </div>

                <div className="check-item">
                  <span className="icon">✔✔</span>
                  <span>
                    Responsive design with Tailwind and CSS
                  </span>
                </div>
              </div>

              <h3>Course Requirement</h3>

              <ul className="req-list">
                <li>Basic knowledge of HTML &amp; CSS</li>
                <li>
                  Intermediate knowledge of Modern Java Script
                </li>
                <li>
                  A computer with Node.js installed
                </li>
              </ul>
            </section>
          </div>

          {/* Right Column */}
          <aside className="right-col">

            {/* Progress */}
            <div className="progress-card">
              <h3>Your Progress</h3>

              <div className="progress-labels">
                <span>65 %</span>
                <span>completed</span>
              </div>

              <div className="progress-track">
                <div className="progress-fill"></div>
              </div>

              <button className="continue-btn">
                Continue Learning ▷
              </button>
            </div>

            {/* Course Includes */}
            <div className="includes-card">
              <h3>This course includes:</h3>

              <ul className="includes-list">
                <li>
                  <span className="icon">🎥</span>
                  45-high quality videos
                </li>

                <li>
                  <span className="icon">﹤/﹥</span>
                  12 Coding exercises
                </li>

                <li>
                  <span className="icon">📁</span>
                  5- Real world projects
                </li>

                <li>
                  <span className="icon">🏆</span>
                  Certificate of Completion
                </li>
              </ul>
            </div>

            {/* Related Courses */}
            <div className="related">
              <h3>Related Courses</h3>

              <div className="related-list">

                <a href="#" className="related-card">
                  <div className="related-img">
                    <img
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
                      alt="Node.js course"
                    />

                    <span className="related-tag">
                      Backend
                    </span>
                  </div>

                  <div className="related-body">
                    <p>
                      Node.js &amp; Express Api Development
                    </p>

                    <div className="related-footer">
                      <span>
                        32 Hours . Intermediate
                      </span>

                      <span className="price">
                        NPR 4,999
                      </span>
                    </div>
                  </div>
                </a>

                <a href="#" className="related-card">
                  <div className="related-img">
                    <img
                      src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80"
                      alt="UI UX course"
                    />

                    <span className="related-tag">
                      Design
                    </span>
                  </div>

                  <div className="related-body">
                    <p>
                      UI/UX Design Master Class with Figma
                    </p>

                    <div className="related-footer">
                      <span>
                        28 Hours . All Levels
                      </span>

                      <span className="price">
                        NPR 3,999
                      </span>
                    </div>
                  </div>
                </a>

                <a href="#" className="related-card">
                  <div className="related-img">
                    <img
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
                      alt="AWS course"
                    />

                    <span className="related-tag">
                      Data Science
                    </span>
                  </div>

                  <div className="related-body">
                    <p>
                      Aws Cloud Practitioner Certification
                    </p>

                    <div className="related-footer">
                      <span>
                        50 Hours . All Levels
                      </span>

                      <span className="price">
                        NPR 6,499
                      </span>
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}

export default App;