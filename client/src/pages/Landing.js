import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="landing">

      <div className="landing__header">
        <div className="landing__header--left">
          <div className="landing__header--text-box">
            <span>The largest community of pet enthusiasts</span>
            <br />
            <Link to="/login">Join Today</Link>
          </div>
        </div>
        <div className="landing__header--right">

        </div>
      </div>
      <div className="landing__features-1">Features</div>
      <div className="landing__features-2">Features 2</div>
      <div className="landing__community">Community</div>
      <div className="landing__signup">SignUp</div>

    </div>
  )
}

export default Landing