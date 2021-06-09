import React from "react";
import SectionMedia from "./homeMain/SectionMedia";
import LeaderBoard from "./homeMain/LeaderBoard";
import SectionJoin from "./homeMain/SectionJoin";
import Section from "./homeMain/Section";
import SectionTrailers from "./homeMain/SectionTrailers";

const HomeMain = () => {
  return (
    <main>
      <SectionMedia />
      <Section setClass={"movies"} setTitle={"What's Popular"} />
      <SectionTrailers />
      <SectionJoin />
      <LeaderBoard />
    </main>
  );
};

export default HomeMain;
