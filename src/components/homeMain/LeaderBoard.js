import React from "react";
import LeaderBoardMin from "../../containers/LeaderBoardMin";

const LeaderBoard = () => {
  return (
    <section className="leaderBoard">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="leaderBoard-info">
              <h3>Leaderboard</h3>
              <ul>
                <li> All Time Edits</li>
                <li> Edits This Week</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6">
                <LeaderBoardMin
                  urlAddress={"/"}
                  avatar={"s"}
                  firstName={"Silvers_Rayleigh"}
                  firstNumber={"57,192"}
                  secondNumber={"57,192"}
                />
              </div>
              <div className="col-lg-6">
                <LeaderBoardMin
                  urlAddress={"/"}
                  avatar={"s"}
                  firstName={"Silvers_Rayleigh"}
                  firstNumber={"57,192"}
                  secondNumber={"57,192"}
                />
              </div>
              <div className="col-lg-6">
                <LeaderBoardMin
                  urlAddress={"/"}
                  avatar={"s"}
                  firstName={"Silvers_Rayleigh"}
                  firstNumber={"57,192"}
                  secondNumber={"57,192"}
                />
              </div>
              <div className="col-lg-6">
                <LeaderBoardMin
                  urlAddress={"/"}
                  avatar={"s"}
                  firstName={"Silvers_Rayleigh"}
                  firstNumber={"57,192"}
                  secondNumber={"57,192"}
                />
              </div>
              <div className="col-lg-6">
                <LeaderBoardMin
                  avatar={"s"}
                  firstName={"Silvers_Rayleigh"}
                  firstNumber={"57,192"}
                  secondNumber={"57,192"}
                />
              </div>
              <div className="col-lg-6">
                <LeaderBoardMin
                  urlAddress={"/"}
                  avatar={"s"}
                  firstName={"Silvers_Rayleigh"}
                  firstNumber={"57,192"}
                  secondNumber={"57,192"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderBoard;
