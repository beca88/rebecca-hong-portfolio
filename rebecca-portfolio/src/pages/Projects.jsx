import { useState, useEffect } from 'react'

function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/beca88/repos')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <section className="projects-section">
            <div className="container">
                <h1 className="text-center mb-3 mt-5">My Projects</h1>
                <p className="text-center mb-5">Here are some of my recent projects on GitHub :)</p>
                <div className="row g-4">
                    {projects.map((project) => (
                        <div className="col-md-6" key={project.id}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{project.name}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <a href={project.html_url} target="_blank" className="btn btn-dark">View on GitHub</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects