
import React from "react";

function Project(props) {
  return (
    <div>
      <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        {props.projects.map((project) => (
          <div className="column is-half">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <a href={project.live} target="_self" rel="noreferrer">
                    <img src={process.env.PUBLIC_URL + project.image} alt="Place" />
                  </a>
                </figure>
              </div>
              <div className="card-content1">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-4" key={project.id}>
                      {project.title}
                    </p>
                  </div>
                </div>

                <div className="content1 has-text-left">
                  {project.description}
                  <br />
                  <br />
                  <div className="content1 is-family-code">
                    Date of Arrival: {project.date}
                    <br />
                    Time of Arrival: {project.time}
                  </div>
                  <div className="card">
                    <footer className="card-footer">
                      <a
                        href={project.repo}
                        className="card-footer-item"
                
                      >
                        Modify My Date - Alert
                      </a>
                      <br />
                      <a
                        href={project.live}
                        className="card-footer-item"
           
                      >
                        Modify My Arrival Time - Alert
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;