import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

const SearchingPage = (props) => {
  const [globalData, setGlobalData] = useState([]);
  const imgUrl = "https://image.tmdb.org/t/p/w500/";

  const fetchAxios = async () => {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=2dd08287b759101888b5a20c23399375&language=en-US&query=${props.searchingControl.inputValue.value}&page=1&include_adult=false`
      )
      .catch((err) => console.log(err));
    setGlobalData(response.data.results);
  };

  useEffect(() => {
    fetchAxios();
  }, []);

  const [inputText, setInputText] = useState({
    value: props.searchingControl.inputValue.value,
  });

  const inputOnchange = (e) => {
    setInputText({ value: e.target.value });
    console.log(inputText);
  };

  const iventKey = (e) => {
    if (e.key === "Enter") {
      props.clickId(inputText);
    }
  };

  return (
    <main>
      <section className="searching">
        <div className="searching-input">
          <input
            type="text"
            onChange={inputOnchange}
            onKeyDown={iventKey}
            value={inputText.value}
          />
        </div>
        <div className="container">
          <div className="row">
            {globalData.map((item, index) => {
              const { overview, title, release_date, poster_path, id } = item;
              return (
                <div className="col-lg-12" key={index}>
                  <div className="searching-card">
                    <img
                      src={`${imgUrl}${poster_path}`}
                      alt={title}
                      onClick={() => props.clickId(id)}
                    />
                    <div className="searching-card-body">
                      <h3
                        className="searching-card-title"
                        onClick={() => props.clickId(id)}
                      >
                        {title}
                      </h3>
                      <span className="searching-card-date">
                        {release_date}
                      </span>
                      <p>{overview}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

function mapStateToProps(state) {
  return {
    searchingControl: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clickId: (idNumber) => dispatch({ type: "SEARCH", idNumber }),
    // searchMovies: ()=> dispatch({})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchingPage);
