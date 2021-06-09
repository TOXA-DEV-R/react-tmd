import React from "react";
import { Progress } from "antd";
import backgSection from "../img/singlPage-bg.jpg";
const SinglPage = () => {
  return (
    <main>
      <section className="dropdown-menu">
        <ul className="dropdown-menu__items">
          <li className="dropdown-menu__item active">
            <button className="dropdown-menu__btn">
              Overview <i className="fas fa-sort-down    "></i>
            </button>
            <ul className="dropdown-menu__items-init">
              <li className="dropdown-menu__item-init">
                <a className="dropdown-menu__link-init">Menu</a>
              </li>
              <li className="dropdown-menu__item-init">
                <a className="dropdown-menu__link-init">Menu</a>
              </li>
              <li className="dropdown-menu__item-init">
                <a className="dropdown-menu__link-init">Menu</a>
              </li>
              <li className="dropdown-menu__item-init">
                <a className="dropdown-menu__link-init">Menu</a>
              </li>
              <li className="dropdown-menu__item-init">
                <a className="dropdown-menu__link-init">Menu</a>
              </li>
            </ul>
          </li>
          <li className="dropdown-menu__item">
            <button className="dropdown-menu__btn">
              Media <i className="fas fa-sort-down    "></i>
            </button>
          </li>
          <li className="dropdown-menu__item">
            <button className="dropdown-menu__btn">
              Fandom <i className="fas fa-sort-down    "></i>
            </button>
          </li>
          <li className="dropdown-menu__item">
            <button className="dropdown-menu__btn">
              Share <i className="fas fa-sort-down    "></i>
            </button>
          </li>
        </ul>
      </section>
      <section className="section-movies">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-movies-img">
                <img src={backgSection} alt="dfds" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="section-movies-info">
                <div className="section-movies-info-title">
                  <h2>
                    <a href="/">Loki</a> <span>(2021)</span>
                  </h2>
                  <ul>
                    <li>
                      <span>TV-14</span>
                    </li>
                    <li>
                      <a href="/">Sci-Fi & Fantasy,</a>
                    </li>
                    <li>
                      <a href="/">Action & Adventure,</a>
                    </li>
                    <li>
                      <a href="/">Drama</a>
                    </li>
                    <li>
                      <span>45m</span>
                    </li>
                  </ul>
                </div>
                <ul className="section-movies-info-basic">
                  <li>
                    <Progress
                      type="circle"
                      percent={94}
                      strokeColor={"#4fd17b"}
                      width={60}
                      trailColor={"#1f4328"}
                      strokeWidth={8}
                    />
                    <span>
                      User <br /> Score
                    </span>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fas fa-list-ul"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-bookmark"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-star"></i>
                    </a>
                  </li>
                </ul>
                <div className="section-movies-info-texts">
                  <h3 className="tagline">Loki's time has come.</h3>
                  <div className="overview">
                    <h3>Overview</h3>
                    <p>
                      After stealing the Tesseract during the events of
                      “Avengers: Endgame,” an alternate version of Loki is
                      brought to the mysterious Time Variance Authority, a
                      bureaucratic organization that exists outside of time and
                      space and monitors the timeline. They give Loki a choice:
                      face being erased from existence due to being a “time
                      variant”or help fix the timeline and stop a greater
                      threat.
                    </p>
                    <ol className="people">
                      <li className="profile">
                        <p>
                          <a href="/">Michael Waldron</a>
                        </p>
                        <p className="character">Creator</p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SinglPage;
