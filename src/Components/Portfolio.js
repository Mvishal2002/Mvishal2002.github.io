import React from "react";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="portfolio-item">
          <div className="item-wrap">
            <a href={projects.url}  target="_blank" rel="noreferrer" title={projects.title}>
              <img alt={projects.title}  src={projectImage} />
            </a>
          </div>
          <div >
            <h3 className="portfolio__title">
            {projects.title}
            </h3>
            <p className="portfolio__content">
              {projects.content}
            </p>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;