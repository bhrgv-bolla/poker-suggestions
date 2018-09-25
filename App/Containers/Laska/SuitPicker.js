import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";

const styles = StyleSheet.create({
  s252f4c48: {
    backgroundColor: `rgba(255, 255, 255, 1)`,
    height: 100,
    width: `80%`
  },
  sd5f12a3d: { alignItems: `center`, justifyContent: `center`, width: `100%` },
  s94b8a260: {
    backgroundColor: `rgba(255, 255, 255, 1)`,
    height: 100,
    width: `80%`
  },
  sbfe71ac4: { alignItems: `center`, justifyContent: `center`, width: `100%` },
  s7c85aeaa: {
    backgroundColor: `rgba(255, 255, 255, 1)`,
    height: 100,
    width: `80%`
  },
  s4fb1d48a: { alignItems: `center`, justifyContent: `center`, width: `100%` },
  s91ee277c: {
    backgroundColor: `rgba(255, 255, 255, 1)`,
    height: 100,
    width: `80%`
  },
  sc30082bd: { alignItems: `center`, justifyContent: `center`, width: `100%` },
  s50ca2f7b: {
    alignItems: `center`,
    flex: 1,
    flexWrap: `wrap`,
    justifyContent: `center`,
    width: `100%`,
    flexDirection: `row`
  },
  s3ab9ff8a: {
    alignItems: `center`,
    backgroundColor: `rgba(70, 155, 210, 1)`,
    flex: 1,
    justifyContent: `center`,
    minHeight: `100%`,
    position: `absolute`,
    top: 0,
    width: `100%`
  }
});
class SuitPicker extends React.PureComponent {
  static navigationOptions = { title: "SuitPicker" };
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
        <View style={styles.s3ab9ff8a}>
          <View style={styles.s50ca2f7b}>
            <TouchableHighlight style={styles.sd5f12a3d} onPress={() => {}}>
              <Image
                resizeMode={`contain`}
                source={{
                  uri:
                    "https://storage.googleapis.com/laska-a5b9d.appspot.com/users/z7OaG4DmxiVLndzhd51SSPLJxOy1/apps/-LN7f1_mSWBb7JoT58kr/387c2798-36f5-4f44-8b94-7f08e041b496",
                  fileId: "387c2798-36f5-4f44-8b94-7f08e041b496"
                }}
                style={styles.s252f4c48}
              />
            </TouchableHighlight>
            <TouchableHighlight style={styles.sbfe71ac4} onPress={() => {}}>
              <Image
                resizeMode={`contain`}
                source={{
                  uri:
                    "https://storage.googleapis.com/laska-a5b9d.appspot.com/users/z7OaG4DmxiVLndzhd51SSPLJxOy1/apps/-LN7f1_mSWBb7JoT58kr/673807e6-c3ea-4300-a3e9-43e749ca1285",
                  fileId: "673807e6-c3ea-4300-a3e9-43e749ca1285"
                }}
                style={styles.s94b8a260}
              />
            </TouchableHighlight>
            <TouchableHighlight style={styles.s4fb1d48a} onPress={() => {}}>
              <Image
                resizeMode={`contain`}
                source={{
                  uri:
                    "https://storage.googleapis.com/laska-a5b9d.appspot.com/users/z7OaG4DmxiVLndzhd51SSPLJxOy1/apps/-LN7f1_mSWBb7JoT58kr/5013733e-52e1-4c22-bca9-6e9c828c3b20",
                  fileId: "5013733e-52e1-4c22-bca9-6e9c828c3b20"
                }}
                style={styles.s7c85aeaa}
              />
            </TouchableHighlight>
            <TouchableHighlight style={styles.sc30082bd} onPress={() => {}}>
              <Image
                resizeMode={`contain`}
                source={{
                  uri:
                    "https://storage.googleapis.com/laska-a5b9d.appspot.com/users/z7OaG4DmxiVLndzhd51SSPLJxOy1/apps/-LN7f1_mSWBb7JoT58kr/1a86534e-e00b-42ea-835b-63a7d017fc2b",
                  fileId: "1a86534e-e00b-42ea-835b-63a7d017fc2b"
                }}
                style={styles.s91ee277c}
              />
            </TouchableHighlight>
          </View>
        </View>
      </Fragment>
    );
  }
}

SuitPicker.defaultProps = {};

SuitPicker = withNavigationProp(SuitPicker);

export default SuitPicker;

export { styles };
