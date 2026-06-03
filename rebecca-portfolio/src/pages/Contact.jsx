function Contact() {
    return (
        <section className="contact-section">
            <div className="container">

        
                <div className="row mb-5 mt-5">
                    <div className="col-12 text-center">
                        <h1>Contact Me</h1>
                        <p>Feel free to contact me if you have any work opportunities or just want to say hi!</p>
                    </div>
                </div>

                <div className="row justify-content-center g-4">

                    <div className="col-md-4">
                        <div className="card text-center p-4">
                            <i className="bi bi-telephone fs-1 mb-3"></i>
                            <h5>Phone</h5>
                            <p>+64 21 254 2265</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center p-4">
                            <i className="bi bi-envelope fs-1 mb-3"></i>
                            <h5>Email</h5>
                            <p><a href="mailto:rebeccahong88@gmail.com" className="text-decoration-underline">rebeccahong88@gmail.com</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact