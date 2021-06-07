let initState = {
  sectionMovies: {
    tabs: [
      { link: " Streaming", id: 1 },
      { link: "On TV", id: 2 },
      { link: " For Rent", id: 3 },
      { link: " In Theaters", id: 4 },
    ],
    apiNames: {
      firstName: "movie",
      secondName: "popular",
      apiKey: "2dd08287b759101888b5a20c23399375",
      imgUrl: "https://image.tmdb.org/t/p/w500/",
    },
  },
  sectionMoviesLast: {
    tabs: [
      { link: "Movies", id: 0 },
      { link: "TV", id: 1 },
    ],
  },
};

function RootReduder(state = initState, action) {
  if (action.type === "button") {
    console.log("hello");
  }
  return state;
}
export default RootReduder;
