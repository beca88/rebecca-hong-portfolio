import { Link } from 'react-router-dom';
import photoAbout from '../assets/photoAbout.jpg'

function About() {
    return (
        <section className="about-section">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-5">
                        <h1 className="display-4 mb-4">About Me</h1>

                        <p>Hello! I'm originally from China and have been living in New Zealand since 2015.</p>

                        <p>I am currently studying for a Bachelor of Information Technology at SIT. Before beginning my IT journey, I worked in the cleaning industry, both self-employed and as an employee, where I gained valuable experience about running businesses and time management.</p>

                        <p>In my spare time, I enjoy walking my dog, spending quality time with my 7-year-old son, and exploring the 
                        outdoors through exercise and nature walks. I also love travelling and discovering new places around the world.</p>

                        <p>As for my future career goals, I am working towards becoming a professional full-stack web developer. I am passionate about technology and look forward to creating useful digital solutions that can make a positive difference in people's lives.</p>
                        

                    </div>
                    <div className="col-md-4">
                        <img src={photoAbout} alt="Rebecca's photo" className="img-fluid rounded my-4" />
                        <Link to="/projects" className="btn btn-dark me-2">My Work</Link>
                        <Link to="/contact" className="btn btn-outline-dark">Contact Me</Link>
                    </div>
                </div>
            </div>
        </section>
    )
        
}

export default About