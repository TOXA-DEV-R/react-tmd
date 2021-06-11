import React from "react";
import { connect } from "react-redux";
import imgll from "../img/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg";

const SearchingPage = (props) => {
  console.log(props);
  return (
    <main>
      <section className="searching">
        <div className="searching-input">
          <input type="text" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="searching-card">
                <img src={imgll} alt="" />
                <div className="card-body">
                  <h3 className="card-title">Hello</h3>
                  <span className="card-date">December 16, 2020</span>
                  <p>
                    A botched store robbery places Wonder Woman in a global
                    battle against a powerful and mysterious ancient force that
                    puts her powers in jeopardy.
                  </p>
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
    searchingControl: state,
  };
}

export default connect(null, mapStateToProps)(SearchingPage);
