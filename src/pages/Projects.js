import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Accomplishments"
    description="Learn about Tomáš Volf's accomplishments."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/accomplishments">Accomplishments</Link></h2>
          <p>A selection of few that I&apos;m not too ashamed of</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
