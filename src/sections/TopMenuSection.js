import React, { Component } from "react";
import "./TopMenuSection.css";
import { Link, Element } from "react-scroll";

class TopMenuSection extends Component {
  render() {
    return (
      <div className="top-menu">
        <div className="menu-item">
          <a onClick={this.props.changeColor}>Color</a>
        </div>

        <div className="menu-item">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            delay={0}
          >
            Home
          </Link>

          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            delay={0}
          >
            About
          </Link>

          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            delay={0}
          >
            Skills
          </Link>
        </div>
      </div>
    );
  }
}

export default TopMenuSection;
