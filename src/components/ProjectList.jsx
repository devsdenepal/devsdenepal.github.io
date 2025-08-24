import React from "react";
import data from '/data/data.json';
const ProjectList = () => {
    return (
        <div className="row mb-4"  data-aos="fade-up">
            {data.projects.map((project, index) => (
                <div className="col-md-4 gy-4" key={index}>
                    <div className="card h-100 d-flex flex-column" data-aos="fade-up">
                        <img
                            src={project.thumb}
                            className="card-img-top"
                            alt={project.name}
                            style={{ height: '15rem', objectFit: 'cover' }}
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{project.name}</h5>
                            <p className="card-text flex-grow-1">{project.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;