let initState = {
  clickBtn: true,
  id: 0,
  controlSearching: false,
  inputValue: "",
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
  if (type === "SEARCH") {
    return {
      clickBtn: false,
      id: idNumber,
      controlSearching: false,
    };
  }
  if (type === "SEARCHINPAGE") {
    return {
      clickBtn: false,
      controlSearching: true,
      inputValue: action.value,
    };
  }
  if (type === "SEARCHBASIC") {
    return {
      clickBtn: false,
      controlSearching: false,
      inputValue: type.value,
    };
  }
  return state;
}
export default RootReduder;
