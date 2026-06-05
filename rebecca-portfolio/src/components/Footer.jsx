function Footer() {
  return (
    <footer className="bg-light">
      <div className="container d-flex justify-content-between align-items-center p-3">
        
        <div className="small">
          © {new Date().getFullYear()} Rebecca Hong. All rights reserved.
        </div>

        <div className="d-flex gap-3">
          <a href="https://www.facebook.com/rebeccahong88" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook fs-5"></i>
          </a>
          <a href="https://www.instagram.com/danhua.1988" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram fs-5"></i>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer