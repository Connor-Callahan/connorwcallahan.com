import React, { Component } from 'react';

class ProjectListing extends Component {

  render() {
    const projects = this.props.projects

    return (
      <div>
      <section className="project-container">
        <h1>Projects</h1>
          {projects.map(project => (
            <div className="project" key={project.title}>
              <img src={project.icon} alt="icon-" className="project-icon" />
              <h2>
                <a href={project.source} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h2>
              <p>{project.description}</p>
              <div className="buttons">
                {project.demo ? (
                  <a className="button" href={project.demo} target="_blank" rel="noopener noreferrer">
                    Website
                  </a>
                ) : null}
                <a className="source" href={project.source}>
                  Source
                </a>
              </div>
            </div>
          ))}
        </section>
        </div>
    );
  }
}

export default ProjectListing;
