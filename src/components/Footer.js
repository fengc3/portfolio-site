import React from 'react'
import { Button } from './Button'
import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
            Join the Adventure newsletter to receieve our best vacation deals!
        </p>
        <p className="footer-subscription-text">
            You can unsubscribe at any time.
        </p>
        <div className="input-areas">
            <form>
                <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                <Button buttonStyle="btn--outline">Subscribe</Button>
            </form>
        </div>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">Copyright © 2025 Carl Feng</small>
          <div className="social-icons">
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
