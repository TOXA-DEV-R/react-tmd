import React from "react";
import logoSvg from "../img/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { connect } from "react-redux";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <nav className="row navbar justify-lg-content-between align-items-center">
          <div className="col-auto">
            <div className="navbar__left">
              <AnchorLink href="/" className="logo">
                <img src={logoSvg} alt="logo" />
              </AnchorLink>
              <ul className="navbar__menu">
                <li>
                  <button
                    className="navbar__link"
                    onClick={() => props.clickId(true)}
                  >
                    Movies
                  </button>
                  <ul className="menu-init">
                    <li>
                      <AnchorLink href="/" className="menu-init__link">
                        Popular
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink href="/" className="menu-init__link">
                        Now Playing
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink href="/" className="menu-init__link">
                        Upcoming
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink href="/" className="menu-init__link">
                        Top Rated
                      </AnchorLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="navbar__link">TV Shows</button>
                  <ul className="menu-init">
                    <li>
                      <AnchorLink href="/" className="menu-init__link">
                        Popular
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink href="/" className="menu-init__link">
                        Airing Today
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink href="/" className="menu-init__link">
                        On TV
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink href="/" className="menu-init__link">
                        Top Rated
                      </AnchorLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="navbar__link">People</button>
                  <ul className="menu-init">
                    <li>
                      <AnchorLink href="/" className="menu-init__link">
                        Popular People
                      </AnchorLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="navbar__link">More</button>
                  <ul className="menu-init">
                    <li>
                      <AnchorLink href="/" className="menu-init__link">
                        Discussions
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink href="/" className="menu-init__link">
                        Leaderboard
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink href="/" className="menu-init__link">
                        Support
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink href="/" className="menu-init__link">
                        API
                      </AnchorLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-auto">
            <ul className="navbar__right">
              <li className="icon-add">
                <a href="/">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </a>
              </li>
              <li className="translate">
                <span>en</span>
              </li>
              <li className="login">
                <a href="/">Login</a>
              </li>
              <li className="join">
                <a href="/">Join TMDb</a>
              </li>
              <li className="search">
                <button className="btn">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    clickId: (booleanBtn) => dispatch({ type: "HEADER", booleanBtn }),
  };
}

export default connect(null, mapDispatchToProps)(Header);
