import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Progress } from "antd";
import { connect } from "react-redux";

const Section = (props) => {
  const [globalData, setGlobalData] = useState([]);
  const { imgUrl } = props.movies.sectionMovies.apiNames;
  useEffect(() => {
    function apiFunction() {
      const { firstName, secondName, apiKey } =
        props.movies.sectionMovies.apiNames;
      fetch(
        `https://api.themoviedb.org/3/${firstName}/${secondName}?api_key=${apiKey}&language=en-US&page=1`
      )
        .then((data) => data.json())
        .then((res) => {
          setGlobalData(res.results);
        });
    }
    apiFunction();
  }, []);
  console.log(props);
  return (
    <section className={props.setClass}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`${props.setClass}__content`}>
              <h2>{props.setTitle}</h2>
              <ul className="tabs">
                {props.movies.sectionMovies.tabs.map((item, index) => {
                  return (
                    <li className="tab-link" key={index}>
                      <button onClick={() => props.chengName(item.id)}>
                        {item.link}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="tabs-content-item">
              {globalData.map((item, index) => {
                return (
                  <div className="card" key={index}>
                    <a href="/" className="card__img">
                      <img
                        src={`${imgUrl}${item.poster_path}`}
                        alt={item.title}
                      />
                      <div className="chart-block">
                        <Progress
                          type="circle"
                          percent={Math.floor(item.popularity / 100)}
                          strokeColor={"#4fd17b"}
                          width={38}
                          trailColor={"#1f4328"}
                        />
                      </div>
                    </a>
                    <div className="card__body">
                      <h3 className="card__title">
                        <a href="/">{item.title}</a>
                      </h3>
                      <span className="card__date">{item.release_date}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
function mapStateToProps(state) {
  return {
    movies: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    chengName: (index) => dispatch({ type: index }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Section);
