import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import Icon from "./_laska_/Icon";
import { StyleSheet, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
  s6e0a2383: { fontSize: 50 },
  sef4be8c8: {
    alignItems: `center`,
    borderColor: `rgba(0, 0, 0, 1)`,
    borderRadius: 3,
    borderStyle: `dashed`,
    borderWidth: 1,
    height: 100,
    justifyContent: `center`,
    width: 100
  }
});
class CardPlaceHolder extends React.PureComponent {
  static navigationOptions = { title: "CardPlaceHolder" };
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
        <TouchableHighlight style={styles.sef4be8c8} onPress={() => {}}>
          <Icon
            iconIdentifier={`Entypo/squared-plus`}
            style={styles.s6e0a2383}
          />
        </TouchableHighlight>
      </Fragment>
    );
  }
}

CardPlaceHolder.defaultProps = {};

CardPlaceHolder = withNavigationProp(CardPlaceHolder);

export default CardPlaceHolder;

export { styles };
