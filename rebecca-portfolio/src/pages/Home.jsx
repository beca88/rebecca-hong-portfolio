import React from 'react';
import { Link } from 'react-router-dom';
import photoHome from '../assets/photoHome.jpg'



function Home() {
    return (

        <section className="home-section">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-5">
                        <h1 className="display-4">Hi, I'm Rebecca Hong!</h1>
                        <p className="lead">A passionate web developer with a knack for creating engaging and user-friendly websites. With a love for coding, I bring creativity and technical expertise to every project I work on.</p>
                        <Link to="/projects" className="btn btn-dark me-2">My Work</Link>
                        <Link to="/contact" className="btn btn-outline-dark">Contact Me</Link>
                    </div>
                    <div className="col-md-4 text-center mt-4 mb-md-0">
                        <img src={photoHome} alt="Rebecca's photo" className="img-fluid rounded-circle" style={{ maxWidth: '300px', height: '300px' }} />
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Home