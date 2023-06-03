import { Link } from 'react-router-dom';

function Landing() {

  const featuresData = [
    {
      number: 1,
      title: "Keep all of your pet's appointments and documents",
      content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
    },
    {
      number: 2,
      title: "Keep your vet in the loop",
      content: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
    },
    {
      number: 3,
      title: "Share your pet's routine with your sitter",
      content: "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam."
    },
    {
      number: 4,
      title: "Stay up-to-date with shots",
      content: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora."
    }
  ]
  return (
    <div className="landing">

      {/* Header */}
      <div className="landing__header">
        <div className="landing__header--left">
          <div className="landing__header--text-box">
            <span>The largest community of pet enthusiasts</span>
            <br />
            <Link to="/login">Join Today</Link>
          </div>
        </div>
        <div className="landing__header--right"></div>
      </div>

      {/* Features */}
      <div className="landing__features">
        <div className="landing__features-header">All of your pet's information in one convenient place</div>
        <div className="landing__features-main">
          {featuresData.map((featuresObj) => {
            return (
            <div className={`landing__feature landing__feature--${featuresObj.number}`} key={featuresObj.number}>
              <span className="landing__feature-head">{featuresObj.title}</span>
              <span className="landing__feature-content">{featuresObj.content}</span>
            </div>) 
          })}
        </div>
      </div>

      <div className="landing__details">Features 2</div>
      <div className="landing__community">Community</div>
      <div className="landing__signup">
        <span className="landing__signup-text">Sign up is free and only one click away!</span>
        <div className="landing__signup-buttons">
          <Link to="/login" className="landing__signup-button landing__signup-button--1">Join Today</Link>
          <Link to="/" className="landing__signup-button landing__signup-button--2">Contact Us</Link>
        </div>
      </div>

    </div>
  )
}

export default Landing