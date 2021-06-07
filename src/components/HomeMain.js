import React, { Component } from "react";
import SectionMedia from "./homeMain/SectionMedia";
import LeaderBoard from "./homeMain/LeaderBoard";
import SectionJoin from "./homeMain/SectionJoin";
import Section from "./homeMain/Section";
import SectionTrailers from "./homeMain/SectionTrailers";

class HomeMain extends Component {
  render() {
    return (
      <main>
        <SectionMedia />
        <Section setClass={"movies"} setTitle={"What's Popular"} />
        {/* <Section
          tabs={this.state.sectionMoviesLast}
          setClass={"movies"}
          setTitle={"Free To Watch"}
        /> */}
        <SectionTrailers />
        <SectionJoin />
        <LeaderBoard />
      </main>
    );
  }
}

export default HomeMain;
