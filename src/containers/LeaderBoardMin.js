import React from "react";

const LeaderBoardMin = (props) => {
  const { firstName, firstNumber, secondNumber, avatar, urlAddress } = props;

  return (
    <div className="leaderBoard-column">
      <a className="leaderBoard-column__avatar">
        <span>{avatar}</span>
      </a>
      <div className="leaderBoard-column__data">
        <h4>
          <a href={urlAddress}>{firstName}</a>
        </h4>
        <p>
          <span></span> <span>{firstNumber}</span>
        </p>
        <p>
          <span></span> <span>{secondNumber}</span>
        </p>
      </div>
    </div>
  );
};

export default LeaderBoardMin;
