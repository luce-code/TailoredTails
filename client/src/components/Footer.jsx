import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <span className="footer__head">a Luce Code Project</span>
      <div className="footer__main">
        <div className="footer__links">
          Developed and made by <Link to="https://drewford.dev" target="_blank">Andrew Cook</Link> and <Link to="https://mohammadreza-memar-portfolio-moreza66.vercel.app" target="_blank">Mohammadreza Memar</Link>
        </div>
        <div className="footer__p">
          &#169; 2023 by Luce Code. React, API, and Database by
          <Link to="https://mohammadreza-memar-portfolio-moreza66.vercel.app" target="_blank"> Mohammadreza Memar</Link>
          . React and CSS by
          <Link to="https://drewford.dev" target="_blank"> Andrew Cook</Link>. This web application was a recreational portfolio project.
        </div>
      </div>
    </div>
  );
}

export default Footer;
