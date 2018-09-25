import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import Icon from "./_laska_/Icon";
import { StyleSheet, TouchableHighlight, View } from "react-native";

const styles = StyleSheet.create({
  sf9b94c51: {
    color: `rgba(255, 255, 255, 1)`,
    fontSize: 50,
    minHeight: 30,
    minWidth: 30
  },
  s6f2a434f: {
    alignItems: `center`,
    backgroundColor: `rgba(53, 48, 225, 1)`,
    height: 60,
    justifyContent: `center`,
    width: `100%`
  },
  s2e0cc9df: {
    backgroundColor: `rgba(212, 212, 212, 1)`,
    flex: 1,
    height: `100%`,
    minWidth: `100%`
  },
  s16ea3267: {
    alignItems: `flex-start`,
    flex: 1,
    flexWrap: `wrap`,
    justifyContent: `space-evenly`,
    top: 40,
    flexDirection: `row`
  },
  s23838be1: {
    backgroundColor: `rgba(47, 47, 47, 0.54)`,
    bottom: 0,
    flex: 1,
    position: `absolute`,
    top: 0,
    width: `100%`
  }
});
class BottomUpDrawer extends React.PureComponent {
  static navigationOptions = { title: "BottomUpDrawer" };
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
        <View style={styles.s23838be1}>
          <View style={styles.s16ea3267}>
            <TouchableHighlight style={styles.s6f2a434f} onPress={() => {}}>
              <Icon
                iconIdentifier={`Entypo/chevron-down`}
                style={styles.sf9b94c51}
              />
            </TouchableHighlight>
            <View style={styles.s2e0cc9df}>{this.props.children}</View>
          </View>
        </View>
      </Fragment>
    );
  }
}

BottomUpDrawer.defaultProps = {};

BottomUpDrawer = withNavigationProp(BottomUpDrawer);

export default BottomUpDrawer;

export { styles };
