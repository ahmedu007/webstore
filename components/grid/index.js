import React, { Component } from "react";
import { config } from "react-spring/renderprops.cjs";
import Grid from "./Grid";
import { Slug, Fade } from "./Primitives";
import data from "./data";

class Cell extends Component {
  render() {
    const { toggle, name, description, css, active } = this.props;
    return (
      <div
        className="cell"
        style={{ backgroundImage: css, cursor: !active ? "pointer" : "auto" }}
        onClick={!active ? toggle : undefined}
      >
        <Fade show={active} delay={active ? 500 : 0}>
          <div className="details">
            <Slug delay={600}>
              <div className="circle" style={{ background: css }} />
              <div className="close">
                Close Icon
                {/* <Icon type="close" style={{ cursor: "pointer" }} onClick={toggle} /> */}
              </div>
              <h1>{name}</h1>
              <p>{description}</p>
            </Slug>
          </div>
        </Fade>
        <Fade
          show={!active}
          from={{ opacity: 0, transform: "translate3d(0,140px,0)" }}
          enter={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
          leave={{ opacity: 0, transform: "translate3d(0,-50px,0)" }}
          delay={active ? 0 : 400}
        >
          <div className="default">
            <div style={{ zIndex: 1 }}>{name}</div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default class App extends Component {
  state = { data };
  render() {
    return (
      <Grid
        className="grid"
        // Arbitrary data, should contain keys, possibly heights, etc.
        data={this.state.data}
        // Key accessor, instructs grid on how to fet individual keys from the data set
        keys={d => d.name}
        // Can be a fixed value or an individual data accessor
        heights={d => d.height}
        // Number of columns
        columns={2}
        // Space between elements
        margin={30}
        // Removes the possibility to scroll away from a maximized element
        lockScroll={false}
        // Delay when active elements (blown up) are minimized again
        closeDelay={500}
        // Regular react-spring configs
        config={config.slow}
      >
        {(data, active, toggle) => <Cell {...data} active={active} toggle={toggle} />}
      </Grid>
    );
  }
}
