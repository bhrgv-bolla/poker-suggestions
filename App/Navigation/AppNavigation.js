import {StackNavigator} from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import PokerScreen from '../Containers/PokerScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: {screen: LaunchScreen},
  PokerScreen: {screen: PokerScreen}
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'PokerScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
