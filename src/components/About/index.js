import React from "react";
import "./styles.css";

export default function About() {
  return (
    <section className='section is-medium' id='about'>
      <div className='container'>
        <div className='section-heading has-text-centered'>
          <h2 className='title is-2' id='aboutHead'>
            About
          </h2>
          <br />
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
                  I am a <strong>full stack</strong> web developer with a
                  background in customer service.
                </p>
                <p>
                  I am proficient in{' '}
                  <strong>
                    {' '}
                    MongoDB/Mongoose/Robo3T, Express, Node, React, HTML5, CSS3
                    (Bootstrap and Bulma), JavaScript/ES6/jQuery, AJAX/axios,
                    Handlebars, SQL/MySQL/Sequelize
                  </strong>{' '}
                  and
                  <strong> Git</strong>.
                </p>
                <p>
                  When I'm not coding I enjoy painting, snowboarding, golfing
                  and traveling.
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
            '/assets/resume/resumeCHRISTOPHER ELLIS.pdf'
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
