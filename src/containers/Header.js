import React from "react";
import logoSvg from "../img/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";
const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="row navbar justify-lg-content-between align-items-center">
          <div className="col-auto">
            <div className="navbar__left">
              <a href="/" className="logo">
                <img src={logoSvg} alt="logo" />
              </a>
              <ul className="navbar__menu">
                <li>
                  <button className="navbar__link">Movies</button>
                  <ul className="menu-init">
                    <li>
                      <a href="/" className="menu-init__link">
                        Popular
                      </a>
                    </li>
                    <li>
                      <a href="/" className="menu-init__link">
                        Now Playing
                      </a>
                    </li>
                    <li>
                      <a href="/" className="menu-init__link">
                        Upcoming
                      </a>
                    </li>
                    <li>
                      <a href="/" className="menu-init__link">
                        Top Rated
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="navbar__link">TV Shows</button>
                  <ul className="menu-init">
                    <li>
                      <a href="/" className="menu-init__link">
                        Popular
                      </a>
                    </li>
                    <li>
                      <a href="/" className="menu-init__link">
                        Airing Today
                      </a>
                    </li>
                    <li>
                      <a href="/" className="menu-init__link">
                        On TV
                      </a>
                    </li>
                    <li>
                      <a href="/" className="menu-init__link">
                        Top Rated
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="navbar__link">People</button>
                  <ul className="menu-init">
                    <li>
                      <a href="/" className="menu-init__link">
                        Popular People
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="navbar__link">More</button>
                  <ul className="menu-init">
                    <li>
                      <a href="/" className="menu-init__link">
                        Discussions
                      </a>
                    </li>
                    <li>
                      <a href="/" className="menu-init__link">
                        Leaderboard
                      </a>
                    </li>
                    <li>
                      <a href="/" className="menu-init__link">
                        Support
                      </a>
                    </li>
                    <li>
                      <a href="/" className="menu-init__link">
                        API
                      </a>
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

export default Header;
