const SKILLS = [
    { name: 'HTML5', src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { name: 'React', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'JavaScript', src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'CSS3', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    { name: 'Docker', src: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png' },
    { name: '.NET Core', src: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg' },
]

function Skills() {
    return (
        <section className="skills-section">
            <div className="container">

                <div className="row mb-5 mt-5">
                    <div className="col-12 text-center">
                        <h1>My Skills</h1>
                        <p>Throughout my studies at SIT, I have been learning and working
                            with a range of web technologies. Here are some of the tools and
                            languages I have picked up along the way.</p>
                    </div>
                </div>

                <div className="row justify-content-center g-4">
                    {SKILLS.map((skill) => (
                        <div className="col-4 col-md-2 text-center" key={skill.name}>
                            <img src={skill.src} alt={skill.name} className="img-fluid" />
                            <p className="mt-2">{skill.name}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Skills