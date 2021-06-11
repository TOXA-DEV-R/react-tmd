let initState = {
  clickBtn: true,
  id: 0,
  controlSearching: false,
};

function RootReduder(state = initState, action) {
  const { type, idNumber } = action;
  if (type === "ID") {
    return {
      clickBtn: false,
      id: idNumber,
    };
  }
  if (type === "HEADER") {
    return {
      clickBtn: action.booleanBtn,
    };
  }
  return state;
}
export default RootReduder;
