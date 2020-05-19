import React from "react";
import PortfolioCard from "../components/Portfolio";
import Items from "../utils/portfolio";

export default function Portfolio() {
  return (
    <section className="section is-medium" id="portfolio">
      <div className="container">
        <div className="heading" id="portfolioContainer">
          <h2 className="title is-2" id="portfolioTitle">
            portfolio
          </h2>
          <h4 className="subtitle is-5 has-text-white" id="portfolioSub">
            my latest works
          </h4>
          <hr />
        </div>
        <PortfolioCard Items={Items} />
      </div>
    </section>
  );
}
