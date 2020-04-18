import React from "react";
import "./styles.css"


function PortfolioCard(props) {
  return (
    <div className="columns is-multiline">
      {props.Items.map((items) => (
        <div className="column is-4" key={items.id}>
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                <span>{items.title}</span>
              </p>
            </header>
            <div className="card-content">
              <figure className="image is-16by9">
                <img src={items.image} alt={items.alt} />
              </figure>
            </div>
            <footer className="card-footer">
              <a
                href={items.deployed}
                target="_blank"
                rel="noopener noreferrer"
                className="card-footer-item"
              >
                Deployed
              </a>
              <a
                href={items.source_code}
                target="_blank"
                rel="noopener noreferrer"
                className="card-footer-item"
              >
                Source Code
              </a>
            </footer>
          </div>
        </div>
      )).reverse()}
    </div>
  );
}
export default PortfolioCard;
