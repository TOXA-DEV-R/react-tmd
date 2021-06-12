import React, { useState } from "react";
import { connect } from "react-redux";

const SectionMedia = (props) => {
  const [inputText, setInputText] = useState({});
  const inputOnchange = (e) => {
    setInputText({ value: e.target.value });
  };

  const eventKey = (e) => {
    if (e.key === "Enter") {
      props.clickId(inputText);
    }
  };

  return (
    <section className="section-media">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-media__search">
              <h2>Welcome.</h2>
              <h3>
                Millions of movies, TV shows and people to discover. Explore
                now.
              </h3>
              <div className="search">
                <form>
                  <label>
                    <input
                      type="text"
                      placeholder="Search for a movie, tv show, person......"
                      onChange={inputOnchange}
                      onKeyDown={eventKey}
                    />
                    <input type="submit" value="Search" />
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function mapStateToProps(state) {
  return {
    searchingControl: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clickId: (value) => dispatch({ type: "SEARCHINPAGE", value }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionMedia);
