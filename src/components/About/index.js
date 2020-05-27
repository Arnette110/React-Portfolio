import React from "react";
import "./styles.css";

export default function About() {
  return (
    <section className='section is-medium' id='about'>
      <div className='container'>
        <div className='heading has-text-centered'>
          <h2 className='title is-2' id='aboutHead'>
            About
          </h2>
          <hr style={{ backgroundColor: '#363636' }} />
        </div>
        <div className='columns' id='aboutContainer'>
          <div className='column is-one-fifth'>
            <figure className='image'>
              <img
                src={process.env.PUBLIC_URL + '/assets/images/ChrisEllis.jpg'}
                alt='christopher ellis'
              />
            </figure>
          </div>

          <div className='column is-two-thirds'>
            <div className='content is-medium'>
              <article id='aboutContent'>
                <p className='is-size-3'>
                  <strong>Hello! </strong> My name is Chris.
                </p>
                <p>
                  <strong>Full stack</strong> web developer with a Bachelor's in
                  International Studies with minors in Business and German who has a
                  customer service and art background, culminating in an eye for
                  design and detail, and focus on creating functional user
                  experiences.
                </p>
                <p>
                  Newly acquired skills in{' '}
                  <strong>MongoDB, Express.js, React.js</strong> and{' '}
                  <strong>Node.js</strong> as a recipient of a certificate in
                  Full Stack Web Development from the University of Utah.
                  <strong> Passionate</strong> about creating well designed apps
                  with an emphasis on usability and aesthetic. Also proficient
                  in{' '}
                  <strong>
                    {' '}
                    HTML5, CSS3 (Bootstrap and Bulma), JavaScript/ES6/jQuery,
                    AJAX/axios, Handlebars, SQL/MySQL/Sequelize
                  </strong>{' '}
                  and
                  <strong> Git</strong>.
                </p>
                <p>
                  When I'm not coding I enjoy skiing/snowboarding, golfing and
                  traveling with my wife. It's also like playing fetch and
                  tug-o-war with my two dogs.
                </p>
              </article>
            </div>
          </div>
        </div>
        <a
          className='button is-medium is-link is-outlined '
          id='resume'
          href={
            process.env.PUBLIC_URL +
            '/assets/resume/CHRISTOPHER_ELLIS_resume.pdf'
          }
          target='_blank'
          rel='noopener noreferrer'>
          <span className='icon'>
            <i className='far fa-2x fa-file-pdf'></i>
          </span>
          <span>My Resume'</span>
        </a>
      </div>
    </section>
  )
}
