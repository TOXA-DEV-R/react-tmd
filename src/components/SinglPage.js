import React, { useEffect, useState } from "react";
import { Progress } from "antd";
import { connect } from "react-redux";
import axios from "axios";
import { cleanup } from "@testing-library/react";

const SinglPage = (props) => {
  const IMGURL = "https://image.tmdb.org/t/p/w500/";
  const APIKEY = "2dd08287b759101888b5a20c23399375";
  const [globalData, setGlobalData] = useState([]);

  const secondFetch = async () => {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.clickBtn.id}?api_key=${APIKEY}&language=en-US`
      )
      .catch((err) => console.log(err));
    setGlobalData(response.data);
  };

  useEffect(() => {
    secondFetch();
    return () => cleanup(secondFetch);
  }, []);

  const {
    backdrop_path,
    original_title,
    overview,
    poster_path,
    tagline,
    vote_average,
  } = globalData;
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
      <section
        className="section-movies"
        style={{ backgroundImage: `url(${IMGURL}${backdrop_path})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-movies-img">
                <img src={`${IMGURL}${poster_path}`} alt={original_title} />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="section-movies-info">
                <div className="section-movies-info-title">
                  <h2>
                    <a href="/">{original_title}</a> <span>(2021)</span>
                  </h2>
                  <ul>
                    <li>
                      <span>TV-14</span>
                    </li>
                    <li>
                      <a href="/">Action & Adventure</a>
                    </li>
                    <li>
                      <a href="/">Sci-Fi & Fantasy</a>
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
                      percent={vote_average * 10}
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
                  <h3 className="tagline">{tagline}</h3>
                  <div className="overview">
                    <h3>Overview</h3>
                    <p>{overview}</p>
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

function mapStateToProps(state) {
  return {
    clickBtn: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clickId: (idNumber) => dispatch({ type: "ID", idNumber }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SinglPage);
