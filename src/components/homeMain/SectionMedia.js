import React, { useEffect } from "react";
import axios from "axios";
const imgUrl = "https://image.tmdb.org/t/p/w500/";
const apiKey = "2dd08287b759101888b5a20c23399375";

const SectionMedia = () => {
  const axiosFetch = async () => {
    const response = await axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=2dd08287b759101888b5a20c23399375&language=en-US&query=woman&page=1&include_adult=false"
      )
      .catch((err) => console.log(err));
    // console.log(response);
  };

  useEffect(() => {
    axiosFetch();
  }, []);

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
