import Header from '../Header'

import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="about-image">
      <img
        className="mobile-about-image"
        alt="About"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        className="desktop-about-image"
        alt="About"
      />
    </div>
  </div>
)
export default About
