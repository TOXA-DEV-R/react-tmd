import React from "react";

const SectionMedia = () => {
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

export default SectionMedia;
