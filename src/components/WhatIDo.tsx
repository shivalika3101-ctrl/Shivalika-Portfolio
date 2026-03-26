import { useState } from "react";

import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const [openCard, setOpenCard] = useState<"build" | "analyze" | null>(null);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          <div
            className={`what-content ${openCard === "build" ? "what-content-open" : ""}`}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <div className="what-header-row">
                <div>
                  <h3>BUILD</h3>
                  <h4>Overview</h4>
                </div>
                <button
                  type="button"
                  className="what-arrow"
                  aria-expanded={openCard === "build"}
                  onClick={() =>
                    setOpenCard((current) => (current === "build" ? null : "build"))
                  }
                >
                  <span></span>
                </button>
              </div>

              <div className="what-details">
                <p>
                  I build backend-focused applications with an emphasis on clean
                  logic, structured workflows, and reliable performance. With
                  experience in APIs, automation, and database-driven systems, I
                  focus on creating solutions that are scalable and practical in
                  real-world use. I enjoy working on systems where logic, data,
                  and user interaction come together.
                </p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  <div className="what-tags">Python</div>
                  <div className="what-tags">Java</div>
                  <div className="what-tags">SQL</div>
                  <div className="what-tags">Spring Boot</div>
                  <div className="what-tags">REST APIs</div>
                  <div className="what-tags">MySQL</div>
                  <div className="what-tags">Redis</div>
                  <div className="what-tags">SQLite</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`what-content ${openCard === "analyze" ? "what-content-open" : ""}`}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <div className="what-header-row">
                <div>
                  <h3>ANALYZE</h3>
                  <h4>Overview</h4>
                </div>
                <button
                  type="button"
                  className="what-arrow"
                  aria-expanded={openCard === "analyze"}
                  onClick={() =>
                    setOpenCard((current) =>
                      current === "analyze" ? null : "analyze"
                    )
                  }
                >
                  <span></span>
                </button>
              </div>

              <div className="what-details">
                <p>
                  I work with data to explore patterns, clean information, and
                  extract meaningful insights. My approach focuses on
                  understanding the data before applying models, using
                  structured analysis and clear visualisation to support
                  decision-making. I'm currently developing my skills in machine
                  learning through hands-on projects.
                </p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  <div className="what-tags">Python</div>
                  <div className="what-tags">Pandas</div>
                  <div className="what-tags">NumPy</div>
                  <div className="what-tags">Scikit-learn</div>
                  <div className="what-tags">Data Cleaning</div>
                  <div className="what-tags">Data Visualisation</div>
                  <div className="what-tags">Excel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
