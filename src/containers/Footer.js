import React from "react";
import logoSvg from "../img/footer-logo.svg";
const Footer = () => {
  return (
    <footer>
      <div className="footer-conatiner">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-logo">
              <span>
                <img src={logoSvg} alt="img" />
              </span>
              <a href="#1">Join the Community</a>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-3">
                <ul>
                  <li>
                    <h3>The Basics</h3>
                  </li>
                  <li>
                    <a href="#!">About TMDb</a>
                  </li>
                  <li>
                    <a href="#!">Contact Us</a>
                  </li>
                  <li>
                    <a href="#!">Support Forums</a>
                  </li>
                  <li>
                    <a href="#!">API</a>
                  </li>
                  <li>
                    <a href="#!">System Status</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li>
                    <h3>Get Involved</h3>
                  </li>
                  <li>
                    <a href="#!">Contribution Bible</a>
                  </li>
                  <li>
                    <a href="#!">3rd Party Applications</a>
                  </li>
                  <li>
                    <a href="#!">Add New Movie</a>
                  </li>
                  <li>
                    <a href="#!">Add New TV Show</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li>
                    <h3>Community</h3>
                  </li>
                  <li>
                    <a href="#!">Guidelines</a>
                  </li>
                  <li>
                    <a href="#!">Discussions</a>
                  </li>
                  <li>
                    <a href="#!">Leaderboard</a>
                  </li>
                  <li>
                    <a href="#!">Twitter</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li>
                    <h3>Legal</h3>
                  </li>
                  <li>
                    <a href="#!">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#!">API Terms of Use</a>
                  </li>
                  <li>
                    <a href="#!">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
