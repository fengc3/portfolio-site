import React from 'react'
// import { Button } from './Button'
import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer-container" id="contacts">
      {/* <section className="footer-subscription">
        <p className="footer-subscription-heading">
            Contact me!
        </p>
        <p className="footer-subscription-text">
            Let's do lunch.
        </p>
        <div className="input-areas">
            <form>
                <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                <Button buttonStyle="btn--outline">E-mail</Button>
            </form>
        </div>
      </section> */}
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">Copyright © 2025 Carl Feng</small>
          <div className="social-icons">
          <Link className="social-icon-link-email" to="mailto:carlfeng3@gmail.com" target="_blank">
              <i className="fa fa-envelope" />
            </Link>
            <Link className="social-icon-link-linkedin" to="https://www.linkedin.com/in/carl-feng-a372b72ba/" target="_blank">
              <i className="fab fa-linkedin" />
            </Link>
            <Link className="social-icon-link-github" to="https://github.com/fengc3" target="_blank">
              <i className="fab fa-github" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
