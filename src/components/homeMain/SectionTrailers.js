import React, { useState, useEffect } from "react";
import axios from "axios";

const imgUrl = "https://image.tmdb.org/t/p/w500/";
const apiKey = "2dd08287b759101888b5a20c23399375";
const SectionTrailers = () => {
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
      .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`)
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
  return (
    <div className="trailers">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="trailers__content">
              <h2>Latest Trailers</h2>
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
                    <div className="card__img">
                      <img
                        src={`${imgUrl}${item.poster_path}`}
                        alt={item.title}
                      />
                      <button className="btn-play">
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="card__body">
                      <h3 className="card__title">
                        <a href="/">{item.title ? item.title : item.name}</a>
                      </h3>
                      <p>
                        The Nine-Nine's Going Out in a Blaze of Glory - Brooklyn
                        Nine-Nine
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTrailers;
