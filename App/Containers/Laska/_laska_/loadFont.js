import iconFontFontAwesome from "react-native-vector-icons/Fonts/FontAwesome.ttf";
import iconFontEntypo from "react-native-vector-icons/Fonts/Entypo.ttf";

const iconFontStyles = `
@font-face {
  src: url(${iconFontFontAwesome});
  font-family: FontAwesome;
}
@font-face {
  src: url(${iconFontEntypo});
  font-family: Entypo;
}
`;

// Create stylesheet
const style = document.createElement("style");
style.type = "text/css";
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);
