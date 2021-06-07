import React from "react";

const SectionTrailers = () => {
  return (
    <div className="trailers">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="trailers__content">
              <h2>Latest Trailers</h2>
              <ul className="tabs">
                <li className="tab-link active">
                  <span>Streaming</span>
                </li>
                <li className="tab-link">
                  <span>On TV</span>
                </li>
                <li className="tab-link">
                  <span>For Rent</span>
                </li>
                <li className="tab-link">
                  <span>In Theaters</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="tabs-content-item"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTrailers;
