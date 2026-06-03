import { Link } from 'react-router-dom';
import photoAbout from '../assets/photoAbout.jpg'

function About() {
    return (
        <section className="about-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="display-4">About Me</h1>

                        <p>Here is a little page about me!</p>
                        <p>I am originally from China and have been living in New Zealand since 2015!
                            Now I am studying a Degree of Information Technology in SIT. Before that,
                            I was an active cleaner both at home and for a living.</p>
                        <p>In my spare time, I like walking my dog, spending time with my 7 year old
                            son (yes, we are all students now, how wonderful life is). Also I like to do
                            a bit of exercise in nature and travel around the world!</p>
                        <p>As for my career, I am aiming to be a professional full stack web developer
                            to bring a little difference to the world.</p>
                        <Link to="/projects" className="btn btn-dark me-2">My Work</Link>
                        <Link to="/contact" className="btn btn-outline-dark">Contact Me</Link>

                    </div>
                    <div className="col-md-6">
                        <img src={photoAbout} alt="Rebecca's photo" className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </section>
    )
        
}

export default About