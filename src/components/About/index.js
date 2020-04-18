import React from "react";
import "./styles.css";
// import headshot from "./assets/images/ChrisEllis.jpg";
// import resume from "./assets/resume/CHRISTOPHER ELLIS_Resume.doc.pdf";

export default function About() {
  return (
    <section className="section is-medium" id="about">
      <div className="container">
        <div className="section-heading has-text-centered">
          <h2 className="title is-2" id="aboutHead">
            About
          </h2>
          <br />
        </div>
        <div className="columns" id="aboutContainer">
          <div className="column is-one-fifth">
            <figure className="image">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/ChrisEllis.jpg"}
                alt="christopher ellis"
              />
            </figure>
          </div>

          <div className="column is-two-thirds">
            <div className="content is-medium">
              <article id="aboutContent">
                <p className="is-size-3">
                  <strong>Hello! </strong> My name is Chris.
                </p>
                <p>
                  I am a <strong>full stack</strong> web developer with a
                  background in customer service.
                </p>
                <p>
                  I am proficient in{" "}
                  <strong>
                    {" "}
                    HTML5, CSS3 (Bootstrap and Bulma), JavaScript/ES6/jQuery,
                    AJAX/axios, Node, Express, Handlebars, SQL/MySQL/Sequelize,
                    MongoDB/Mongoose/Robo3T, Git
                  </strong>{" "}
                  and
                  <strong> React</strong>.
                </p>
                <p>
                  When I'm not coding I enjoy painting, snowboarding, golfing
                  and traveling.
                </p>
              </article>
            </div>
          </div>
        </div>
        {/* <div class="tile is-parent">
          <div class="tile is-child has-text-centered">
            <h2 class="title is-4">Frontend</h2>
            <ul class="content">
              <li>HTML5/CSS3</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React.js</li>
            </ul>
          </div>
          <div class="tile is-child has-text-centered">
            <h2 class="title is-4">Backend</h2>
            <ul class="content">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>{" "} */}
        <a
          className="button is-medium is-link is-outlined "
          id="resume"
          href={
            process.env.PUBLIC_URL +
            "/assets/resume/CHRISTOPHER ELLIS_Resume.doc.pdf"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <i className="far fa-2x fa-file-pdf"></i>
          </span>
          <span>My Resume'</span>
        </a>
      </div>
    </section>
  );
}
