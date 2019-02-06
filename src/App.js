import React, { Component } from "react";

import TitlesSection from "./sections/TitlesSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import TopMenuSection from "./sections/TopMenuSection";

import data from "./data.json";

import "./App.css";

class App extends Component {
  state = {
    titleSectionColor: data.colors[0],
    aboutSectionColor: data.colors[1],
    skillSectionColor: data.colors[2]
  }

  changeColor = () => {   
    let i=data.colors.indexOf(this.state.titleSectionColor);
    let j=data.colors.indexOf(this.state.aboutSectionColor);
    let k=data.colors.indexOf(this.state.skillSectionColor);
    let n=data.colors.length;    

    this.setState({
      titleSectionColor: data.colors[i+1 < n ? i+1 : 0],
      aboutSectionColor: data.colors[j+1 < n ? j+1 : 0],
      skillSectionColor: data.colors[k+1 < n ? k+1 : 0]
    });
  };

  render() {
    return (
      <div className="App">
        <div className="navigation" />
        <TopMenuSection changeColor={this.changeColor} />
        <TitlesSection bgcolor={this.state.titleSectionColor} />
        <AboutSection bgcolor={this.state.aboutSectionColor} />
        <SkillSection bgcolor={this.state.skillSectionColor} />
      </div>
    );
  }
}

export default App;
