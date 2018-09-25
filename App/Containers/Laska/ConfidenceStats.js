import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import Stats from "./Stats.js";
import BottomUpDrawer from "./BottomUpDrawer.js";

class ConfidenceStats extends React.PureComponent {
  static navigationOptions = { title: "ConfidenceStats" };
  constructor(props) {
    super(props);

    this.state = {};

    if (this.awake) {
      this.awake();
    }
  }

  render() {
    return (
      <Fragment>
        <BottomUpDrawer>
          <Stats />
        </BottomUpDrawer>
      </Fragment>
    );
  }
}

ConfidenceStats.defaultProps = {};

ConfidenceStats = withNavigationProp(ConfidenceStats);

export default ConfidenceStats;

export {};
