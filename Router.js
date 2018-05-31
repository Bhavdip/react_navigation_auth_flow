import {
  StackNavigator,
  TabNavigator,
  SwitchNavigator
} from 'react-navigation';
import { Platform, StatusBar } from 'react-native';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import Home from './screens/Home';
import Profile from './screens/Profile';

export const AuthNavigator = StackNavigator(
  {
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: 'Sign Up'
      }
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        title: 'Sign-In'
      }
    }
  },
  {
    headerMode: 'none'
  }
);

export const SignedIn = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={30} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }
    }
  }
);

export const createRootNavigator = (signedIn = false) => {
  return SwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: AuthNavigator
      }
    },
    {
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    }
  );
};
