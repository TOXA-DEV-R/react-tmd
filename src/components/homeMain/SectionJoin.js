import React from "react";

const SectionJoin = () => {
  return (
    <section className="section-join">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="section-join__left">
              <h3>Join Today</h3>
              <p>
                Get access to maintain your own custom personal lists, track
                what you've seen and search and filter for
                <span> what to watch next</span>—regardless if it's in theatres,
                on TV or available on popular streaming services like Kocowa,
                DOCSVILLE, Argo, and True Story.
              </p>
              <a href="/">sign up</a>
            </div>
          </div>
          <div className="col-lg-4">
            <ul className="section-join__right">
              <li>Enjoy TMDb ad free</li>
              <li>Maintain a personal watchlist</li>
              <li>
                Filter by your subscribed streaming services and find something
                to watch
              </li>
              <li>Log the movies and TV shows you've seen</li>
              <li>Build custom lists</li>
              <li>Contribute to and improve our database</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionJoin;
