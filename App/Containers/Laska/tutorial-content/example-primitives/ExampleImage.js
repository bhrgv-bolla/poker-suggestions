import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./../../_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./../../_laska_/globals.js";
import withNavigationProp from "./../../_laska_/withNavigationProp.js";
import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sf1409c1a: { height: `100%` }
});
class ExampleImage extends React.PureComponent {
  static navigationOptions = { title: "ExampleImage" };
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
        <Image
          source={{
            uri:
              "https://storage.googleapis.com/laska-a5b9d.appspot.com/users/TMrAL6KsDjUPU6SjbvW0v2lfsXm1/apps/-L-qX013SrHH-8V2azFE/d1568232-02fb-4c14-970c-c9fcb521efb8",
            fileId: "d1568232-02fb-4c14-970c-c9fcb521efb8"
          }}
          style={styles.sf1409c1a}
        />
      </Fragment>
    );
  }
}

ExampleImage.defaultProps = {};

ExampleImage = withNavigationProp(ExampleImage);

export default ExampleImage;

export { styles };
