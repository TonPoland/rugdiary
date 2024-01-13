// Project.js
import React from 'react';

function Project({ title, description, image }) {
  return (
    <div className="project">
      <div className="project-image">
        <img src={require(`/${image}`).default} alt={title} />
      </div>
      <div className="project-details">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
