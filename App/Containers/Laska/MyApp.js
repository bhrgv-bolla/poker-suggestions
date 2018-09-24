import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import {
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  View,
  ImageBackground
} from "react-native";
import Icon from "./_laska_/Icon";

const styles = StyleSheet.create({
  se334471f: {
    backgroundColor: `rgba(183, 9, 11, 1)`,
    color: `rgba(255, 255, 255, 1)`,
    fontSize: 20,
    lineHeight: 30,
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50,
    textAlign: `center`,
    width: `100%`
  },
  s03d34af7: { height: 100, width: 100 },
  s946591e5: {
    alignItems: `center`,
    borderColor: `rgba(0, 0, 0, 1)`,
    borderRadius: 3,
    borderStyle: `dashed`,
    borderWidth: 1,
    height: 100,
    justifyContent: `center`,
    width: 100
  },
  scd061af8: { color: `rgba(183, 15, 17, 1)`, fontSize: 50 },
  sb560888f: {
    alignItems: `center`,
    borderColor: `rgba(0, 0, 0, 1)`,
    borderRadius: 3,
    borderStyle: `dashed`,
    borderWidth: 1,
    height: 100,
    justifyContent: `center`,
    width: 100
  },
  sf7d976d5: {
    alignItems: `center`,
    flex: 1,
    flexWrap: `wrap`,
    justifyContent: `space-evenly`,
    minWidth: `100%`,
    flexDirection: `row`
  },
  sbbb0a84d: {
    backgroundColor: `rgba(179, 179, 0, 1)`,
    color: `rgba(255, 255, 255, 1)`,
    fontSize: 20,
    lineHeight: 30,
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50,
    textAlign: `center`,
    width: `100%`
  },
  s15f9fec2: { fontSize: 50 },
  s69e4e45d: {
    alignItems: `center`,
    borderColor: `rgba(0, 0, 0, 1)`,
    borderRadius: 3,
    borderStyle: `dashed`,
    borderWidth: 1,
    height: 100,
    justifyContent: `center`,
    width: 100
  },
  sd7bd06ec: { fontSize: 50 },
  sb1520708: {
    alignItems: `center`,
    borderColor: `rgba(0, 0, 0, 1)`,
    borderRadius: 3,
    borderStyle: `dashed`,
    borderWidth: 1,
    height: 100,
    justifyContent: `center`,
    width: 100
  },
  s1d49b5d1: { fontSize: 50 },
  s1a9f3891: {
    alignItems: `center`,
    borderColor: `rgba(0, 0, 0, 1)`,
    borderRadius: 3,
    borderStyle: `dashed`,
    borderWidth: 1,
    height: 100,
    justifyContent: `center`,
    width: 100
  },
  sd4e8c754: {
    alignItems: `center`,
    flex: 1,
    flexWrap: `wrap`,
    justifyContent: `space-evenly`,
    minWidth: `100%`,
    flexDirection: `row`
  },
  s234080f9: {
    backgroundColor: `rgba(10, 165, 0, 1)`,
    color: `rgba(255, 255, 255, 1)`,
    fontSize: 20,
    lineHeight: 30,
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50,
    textAlign: `center`,
    width: `100%`
  },
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
  },
  sd7a2d855: { fontSize: 50 },
  s6abc793e: {
    alignItems: `center`,
    borderColor: `rgba(0, 0, 0, 1)`,
    borderRadius: 3,
    borderStyle: `dashed`,
    borderWidth: 1,
    height: 100,
    justifyContent: `center`,
    width: 100
  },
  sb30adc72: {
    alignItems: `center`,
    flex: 1,
    flexWrap: `wrap`,
    justifyContent: `space-evenly`,
    minWidth: `100%`,
    flexDirection: `row`
  },
  sbbc928dc: {
    alignItems: `center`,
    flex: 5,
    flexWrap: `wrap`,
    justifyContent: `space-evenly`,
    overflow: `hidden`,
    flexDirection: `row`
  },
  sb09818b2: { color: `rgba(255, 255, 255, 1)`, fontSize: 50 },
  s66f1cdbf: {
    alignItems: `center`,
    backgroundColor: `rgba(169, 45, 46, 1)`,
    borderColor: `rgba(0, 0, 0, 1)`,
    borderRadius: 3,
    borderWidth: 1,
    height: `70%`,
    justifyContent: `center`,
    width: `30%`
  },
  scb16a78d: { color: `rgba(255, 255, 255, 1)`, fontSize: 50 },
  s34dbc60a: {
    alignItems: `center`,
    backgroundColor: `rgba(49, 136, 0, 1)`,
    borderColor: `rgba(0, 0, 0, 1)`,
    borderRadius: 3,
    borderWidth: 1,
    height: `70%`,
    justifyContent: `center`,
    width: `30%`
  },
  sa3b92470: { color: `rgba(255, 255, 255, 1)`, fontSize: 50 },
  s6941755c: {
    alignItems: `center`,
    backgroundColor: `rgba(45, 88, 132, 1)`,
    borderColor: `rgba(0, 0, 0, 1)`,
    borderRadius: 3,
    borderWidth: 1,
    height: `70%`,
    justifyContent: `center`,
    width: `30%`
  },
  s6966039f: {
    alignItems: `center`,
    flex: 1,
    justifyContent: `space-evenly`,
    flexDirection: `row`
  },
  s437b3df4: {
    backgroundColor: `rgba(210, 19, 21, 1)`,
    height: `100%`,
    width: `100%`
  }
});
class MyApp extends React.PureComponent {
  static navigationOptions = { title: "My App" };
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
        <ImageBackground
          source={{
            uri:
              "https://storage.googleapis.com/laska-a5b9d.appspot.com/users/z7OaG4DmxiVLndzhd51SSPLJxOy1/apps/-LN7f1_mSWBb7JoT58kr/e812ac2d-72c5-497f-a748-9cf7075891e0",
            fileId: "e812ac2d-72c5-497f-a748-9cf7075891e0"
          }}
          style={styles.s437b3df4}
        >
          <View style={styles.sbbc928dc}>
            <View style={styles.sf7d976d5}>
              <Text style={styles.se334471f}>2 PLAYER CARDS</Text>
              <TouchableHighlight style={styles.s946591e5} onPress={() => {}}>
                <Image
                  resizeMode={`contain`}
                  source={{
                    uri:
                      "https://storage.googleapis.com/laska-a5b9d.appspot.com/users/z7OaG4DmxiVLndzhd51SSPLJxOy1/apps/-LN7f1_mSWBb7JoT58kr/9fc9f749-3374-4467-a5eb-c465db13e24e",
                    fileId: "9fc9f749-3374-4467-a5eb-c465db13e24e"
                  }}
                  style={styles.s03d34af7}
                />
              </TouchableHighlight>
              <TouchableHighlight style={styles.sb560888f} onPress={() => {}}>
                <Icon
                  iconIdentifier={`Entypo/squared-plus`}
                  style={styles.scd061af8}
                />
              </TouchableHighlight>
            </View>
            <View style={styles.sd4e8c754}>
              <Text style={styles.sbbb0a84d}>FIRST 3 OPEN CARDS</Text>
              <TouchableHighlight style={styles.s69e4e45d} onPress={() => {}}>
                <Icon
                  iconIdentifier={`Entypo/squared-plus`}
                  style={styles.s15f9fec2}
                />
              </TouchableHighlight>
              <TouchableHighlight style={styles.sb1520708} onPress={() => {}}>
                <Icon
                  iconIdentifier={`Entypo/squared-plus`}
                  style={styles.sd7bd06ec}
                />
              </TouchableHighlight>
              <TouchableHighlight style={styles.s1a9f3891} onPress={() => {}}>
                <Icon
                  iconIdentifier={`Entypo/squared-plus`}
                  style={styles.s1d49b5d1}
                />
              </TouchableHighlight>
            </View>
            <View style={styles.sb30adc72}>
              <Text style={styles.s234080f9}>LAST 2 OPEN CARDS</Text>
              <TouchableHighlight style={styles.sef4be8c8} onPress={() => {}}>
                <Icon
                  iconIdentifier={`Entypo/squared-plus`}
                  style={styles.s6e0a2383}
                />
              </TouchableHighlight>
              <TouchableHighlight style={styles.s6abc793e} onPress={() => {}}>
                <Icon
                  iconIdentifier={`Entypo/squared-plus`}
                  style={styles.sd7a2d855}
                />
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.s6966039f}>
            <TouchableHighlight style={styles.s66f1cdbf} onPress={() => {}}>
              <Icon iconIdentifier={`Entypo/ccw`} style={styles.sb09818b2} />
            </TouchableHighlight>
            <TouchableHighlight style={styles.s34dbc60a} onPress={() => {}}>
              <Icon iconIdentifier={`Entypo/hand`} style={styles.scb16a78d} />
            </TouchableHighlight>
            <TouchableHighlight style={styles.s6941755c} onPress={() => {}}>
              <Icon
                iconIdentifier={`Entypo/line-graph`}
                style={styles.sa3b92470}
              />
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </Fragment>
    );
  }
}

MyApp.defaultProps = {};

MyApp = withNavigationProp(MyApp);

export default MyApp;

export { styles };
