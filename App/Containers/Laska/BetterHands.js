import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { Text, StyleSheet } from "react-native";
import CardsList from "./CardsList.js";
import BottomUpDrawer from "./BottomUpDrawer.js";

const styles = StyleSheet.create({
  s9156c6ae: {
    fontSize: 24,
    fontWeight: `bold`,
    lineHeight: 50,
    textAlign: `center`,
    width: `100%`
  }
});
class BetterHands extends React.PureComponent {
  static navigationOptions = { title: "BetterHands" };
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
          <Text style={styles.s9156c6ae}>BETTER THAN TWO PAIR!</Text>
          <CardsList />
        </BottomUpDrawer>
      </Fragment>
    );
  }
}

BetterHands.defaultProps = {};

BetterHands = withNavigationProp(BetterHands);

export default BetterHands;

export { styles };
