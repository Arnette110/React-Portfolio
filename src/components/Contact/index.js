import React from 'react'
import "./styles.css"

export default function index() {
    return (
      <section className='section has-text-centered is-medium' id='contact'>
        <div className='container'>
          <div className='heading'>
            <h3 className='title is-2' id='contactTitle'>
              Contact
            </h3>
            <h4 className='subtitle is-5' id='contactSub'>
              Let's Connect
            </h4>
          </div>

          <hr />

          <div className='columns is-vcentered is-centered'>
            <div className='column is-3'>
              <h3 className='subtitle' id='phone'>
                <i className='fa fa-mobile    '></i> Phone
              </h3>
              <p>385.421.0733</p>
              <hr />
              <h3 className='subtitle' id='email'>
                <i className='fas fa-envelope    '></i> Email
              </h3>
              <p>
                <a id='emailLink'
                  href='mailto:christopher.ryan.ellis@gmail.com'
                  rel='noopener noreferrer'>
                  christopher.ryan.ellis@gmail.com
                </a>
              </p>
              <hr />
              <h3 className='subtitle' id='web'>
                <i className='fas fa-globe    '></i> On the Web
              </h3>
              <a
                id='github'
                href='https://github.com/Arnette110'
                target='_blank'
                rel='noopener noreferrer'>
                <span className='icon'>
                  <i className='fab fa-github'></i>
                </span>
                <span>GitHub</span>
              </a>
              <span> |</span>
              <a
                id='linkedin'
                href='https://www.linkedin.com/in/christopher-ellis-b018a67/'
                target='_blank'
                rel='noopener noreferrer'>
                <span className='icon'>
                  <i className='fab fa-linkedin'></i>
                </span>
                <span> Linked-In</span>
              </a>
              <hr />
            </div>
          </div>
        </div>
      </section>
    )
}
