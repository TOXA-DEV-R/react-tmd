let initState = {
  sectionMovies: {
    tabs: [
      { itemName: " Streaming", id: 0 },
      { itemName: "On TV", id: 1 },
    ],
    apiNames: {
      firstName: "movie",
      secondName: "popular",
    },
  },
};

function RootReduder(state = initState, action) {
  // const { type } = action;

  return state;
}
export default RootReduder;
