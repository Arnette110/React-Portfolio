import React from 'react'
import "./styles.css"

export default function Hero() {
    return (
      <section className="hero is-fullheight-with-navbar has-background">
        <img
          className="hero-background is-transparent"
          src={
            process.env.PUBLIC_URL +
            "/assets/images/green-pine-trees-covered-with-fogs-under-white-sky-during-167699.jpg"
            
          }
          alt="background"
        />

        <div
          className="hero-body"
          id="heroBody"
        >
          <div className="container">
            <h1 className="title is-1" id="heroTitle">
              Christopher Ellis
            </h1>
            <h2 className="subtitle" id="heroSub">
              full stack web developer
            </h2>
          </div>
        </div>
      </section>
    );
}


