import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { Text, StyleSheet, TouchableHighlight, ScrollView } from "react-native";

const styles = StyleSheet.create({
  s22881df0: {
    fontSize: 30,
    fontWeight: `bold`,
    lineHeight: 30,
    textAlign: `center`
  },
  s46b2054e: {
    alignItems: `center`,
    backgroundColor: `rgba(77, 192, 224, 1)`,
    height: 50,
    justifyContent: `center`,
    margin: 10,
    width: `90%`
  },
  s98a81984: {
    fontSize: 30,
    fontWeight: `bold`,
    lineHeight: 30,
    textAlign: `center`
  },
  s3a985b5a: {
    alignItems: `center`,
    backgroundColor: `rgba(77, 192, 224, 1)`,
    height: 50,
    justifyContent: `center`,
    margin: 10,
    width: `90%`
  },
  s63642bc9: {
    fontSize: 30,
    fontWeight: `bold`,
    lineHeight: 30,
    textAlign: `center`
  },
  s9071f678: {
    alignItems: `center`,
    backgroundColor: `rgba(77, 192, 224, 1)`,
    height: 50,
    justifyContent: `center`,
    margin: 10,
    width: `90%`
  },
  s1446a48e: {
    fontSize: 30,
    fontWeight: `bold`,
    lineHeight: 30,
    textAlign: `center`
  },
  s7e1b4d54: {
    alignItems: `center`,
    backgroundColor: `rgba(77, 192, 224, 1)`,
    height: 50,
    justifyContent: `center`,
    margin: 10,
    width: `90%`
  },
  s42e6e207: {
    fontSize: 30,
    fontWeight: `bold`,
    lineHeight: 30,
    textAlign: `center`
  },
  s426ec142: {
    alignItems: `center`,
    backgroundColor: `rgba(77, 192, 224, 1)`,
    height: 50,
    justifyContent: `center`,
    margin: 10,
    width: `90%`
  },
  s7426219d: {
    fontSize: 30,
    fontWeight: `bold`,
    lineHeight: 30,
    textAlign: `center`
  },
  scf1348c3: {
    alignItems: `center`,
    backgroundColor: `rgba(77, 192, 224, 1)`,
    height: 50,
    justifyContent: `center`,
    margin: 10,
    width: `90%`
  },
  sa277570b: {
    fontSize: 30,
    fontWeight: `bold`,
    lineHeight: 30,
    textAlign: `center`
  },
  s8b091563: {
    alignItems: `center`,
    backgroundColor: `rgba(77, 192, 224, 1)`,
    height: 50,
    justifyContent: `center`,
    margin: 10,
    width: `90%`
  },
  sb0544a5c: {
    fontSize: 30,
    fontWeight: `bold`,
    lineHeight: 30,
    textAlign: `center`
  },
  sb17a7649: {
    alignItems: `center`,
    backgroundColor: `rgba(77, 192, 224, 1)`,
    height: 50,
    justifyContent: `center`,
    margin: 10,
    width: `90%`
  },
  safaee6c4: {
    fontSize: 30,
    fontWeight: `bold`,
    lineHeight: 30,
    textAlign: `center`
  },
  s4a09b555: {
    alignItems: `center`,
    backgroundColor: `rgba(77, 192, 224, 1)`,
    height: 50,
    justifyContent: `center`,
    margin: 10,
    width: `90%`
  },
  s1331c924: {
    fontSize: 30,
    fontWeight: `bold`,
    lineHeight: 30,
    textAlign: `center`
  },
  s0a8f1842: {
    alignItems: `center`,
    backgroundColor: `rgba(77, 192, 224, 1)`,
    height: 50,
    justifyContent: `center`,
    margin: 10,
    width: `90%`
  },
  s0ed10b13: {
    fontSize: 30,
    fontWeight: `bold`,
    lineHeight: 30,
    textAlign: `center`
  },
  s4a729bb9: {
    alignItems: `center`,
    backgroundColor: `rgba(77, 192, 224, 1)`,
    height: 50,
    justifyContent: `center`,
    margin: 10,
    width: `90%`
  },
  sb7ac3023: {
    fontSize: 30,
    fontWeight: `bold`,
    lineHeight: 30,
    textAlign: `center`
  },
  sb525326d: {
    alignItems: `center`,
    backgroundColor: `rgba(77, 192, 224, 1)`,
    height: 50,
    justifyContent: `center`,
    margin: 10,
    width: `90%`
  },
  s6cceb4c6: {
    fontSize: 30,
    fontWeight: `bold`,
    lineHeight: 30,
    textAlign: `center`
  },
  s4582a7f0: {
    alignItems: `center`,
    backgroundColor: `rgba(77, 192, 224, 1)`,
    height: 50,
    justifyContent: `center`,
    margin: 10,
    width: `90%`
  },
  scfec991c: {
    backgroundColor: `rgba(11, 134, 118, 1)`,
    bottom: 0,
    flex: 1,
    flexWrap: `wrap`,
    position: `absolute`,
    top: 0,
    width: `100%`
  }
});
class NumberPicker extends React.PureComponent {
  static navigationOptions = { title: "NumberPicker" };
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
        <ScrollView style={styles.scfec991c}>
          <TouchableHighlight style={styles.s46b2054e} onPress={() => {}}>
            <Text style={styles.s22881df0}>A</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.s3a985b5a} onPress={() => {}}>
            <Text style={styles.s98a81984}>A</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.s9071f678} onPress={() => {}}>
            <Text style={styles.s63642bc9}>A</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.s7e1b4d54} onPress={() => {}}>
            <Text style={styles.s1446a48e}>A</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.s426ec142} onPress={() => {}}>
            <Text style={styles.s42e6e207}>A</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.scf1348c3} onPress={() => {}}>
            <Text style={styles.s7426219d}>A</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.s8b091563} onPress={() => {}}>
            <Text style={styles.sa277570b}>A</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.sb17a7649} onPress={() => {}}>
            <Text style={styles.sb0544a5c}>A</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.s4a09b555} onPress={() => {}}>
            <Text style={styles.safaee6c4}>A</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.s0a8f1842} onPress={() => {}}>
            <Text style={styles.s1331c924}>A</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.s4a729bb9} onPress={() => {}}>
            <Text style={styles.s0ed10b13}>A</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.sb525326d} onPress={() => {}}>
            <Text style={styles.sb7ac3023}>A</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.s4582a7f0} onPress={() => {}}>
            <Text style={styles.s6cceb4c6}>A</Text>
          </TouchableHighlight>
        </ScrollView>
      </Fragment>
    );
  }
}

NumberPicker.defaultProps = {};

NumberPicker = withNavigationProp(NumberPicker);

export default NumberPicker;

export { styles };
