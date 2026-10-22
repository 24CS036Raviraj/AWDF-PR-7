import React from 'react';

function Footer() {
  const repoUrl = 'https://github.com/24CS036Raviraj/AWDF-PR-7.git';

  return (
    <footer className="footer-bar">
      <div className="footer-inner">
        <div>
          <h4>Raviraj Kamejaliya (24CS036)</h4>
          <p>Practical 7: JWT Authentication & Middleware Pipeline | ITUE301</p>
        </div>
        <div>
          <a href={repoUrl} target="_blank" rel="noreferrer" className="footer-repo">
            GitHub: {repoUrl}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
