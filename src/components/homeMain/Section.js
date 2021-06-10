import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Progress } from "antd";
import { connect } from "react-redux";
import axios from "axios";

const imgUrl = "https://image.tmdb.org/t/p/w500/";
const apiKey = "2dd08287b759101888b5a20c23399375";

const Section = (props) => {
  const [dataFirst, setDataFirst] = useState([]);
  const [dataSecond, setDataSecond] = useState([]);
  const [globalData, setGlobalData] = useState([]);
  const [btnCount, setBtnCount] = useState(0);

  const tabs = [
    { itemName: " Streaming", id: 0 },
    { itemName: "On TV", id: 1 },
  ];

  if (btnCount === tabs.length) {
    setBtnCount(0);
  }

  const firstFetch = async () => {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      )
      .catch((err) => console.log(err));
    setDataFirst(response.data.results);
    setGlobalData(response.data.results);
  };

  const secondFetch = async () => {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
      )
      .catch((err) => console.log(err));
    setDataSecond(response.data.results);
  };

  useEffect(() => {
    firstFetch();
    secondFetch();
  }, []);

  useEffect(() => {
    const arrayData = [dataFirst, dataSecond];
    arrayData.forEach((item, index) => {
      if (btnCount === index) {
        setGlobalData(item);
      }
    });
  }, [btnCount]);

  function cardId(id) {
    console.log(id);
  }
  return (
    <section className={props.setClass}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`${props.setClass}__content`}>
              <h2>{props.setTitle}</h2>
              <ul className="tabs">
                {tabs.map((item, index) => {
                  return (
                    <li
                      className={`${
                        btnCount === index ? "tab-link active" : "tab-link"
                      } `}
                      key={index}
                    >
                      <button onClick={() => setBtnCount(btnCount + 1)}>
                        {item.itemName}
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
                    <a
                      className="card__img"
                      onClick={() => props.clickId(item.id)}
                    >
                      <img
                        src={`${imgUrl}${item.poster_path}`}
                        alt={item.title}
                      />
                      <div className="chart-block">
                        <Progress
                          type="circle"
                          percent={Math.floor(item.vote_average * 10)}
                          strokeColor={"#4fd17b"}
                          width={38}
                          trailColor={"#1f4328"}
                        />
                      </div>
                    </a>
                    <div className="card__body">
                      <h3 className="card__title">
                        <a onClick={() => props.clickId(item.id)}>
                          {item.title ? item.title : item.name}
                        </a>
                      </h3>
                      <span className="card__date">
                        {item.release_date
                          ? item.release_date
                          : item.first_air_date}
                      </span>
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
    clickBtn: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clickId: (idNumber) => dispatch({ type: "ID", idNumber }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Section);
