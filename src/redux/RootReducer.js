let initState = {
  clickBtn: true,
  id: 0,
};

function RootReduder(state = initState, action) {
  const { type, idNumber } = action;
  if (type === "ID") {
    return {
      clickBtn: false,
      id: idNumber,
    };
  }
  return state;
}
export default RootReduder;
