import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  s61526d1a: {
    alignItems: `center`,
    flex: 1,
    justifyContent: `center`,
    width: `100%`
  }
});
class Stats extends React.PureComponent {
  static navigationOptions = { title: "stats" };
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
        <View style={styles.s61526d1a}>
          <Text>STATS COMPONENT GOES HERE</Text>
        </View>
      </Fragment>
    );
  }
}

Stats.defaultProps = {};

Stats = withNavigationProp(Stats);

export default Stats;

export { styles };
