import React from 'react';
import projectsData from './projects.json';
import './App.css'; // Custom CSS file for additional styling
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="container">
            <h1 className="mt-4 mb-4">Projects</h1>
            <div className="row">
                {projectsData.projects.map((project, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100">
                            <img src={project.image} className="card-img-top" alt={project.title} />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <a href={project.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit Project</a>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Tags: {project.tags.join(', ')}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
