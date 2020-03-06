import React, { Component } from 'react';
//
import { TabBar } from 'react-native-animated-nav-tab-bar';
import Icon from 'react-native-vector-icons/Feather';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { fromLeft } from 'react-navigation-transitions';

//PAGES
import Chat from './src/pages/Chat';
import ChatComp from './src/pages/chatComp/ChatComp'
import Dashboard from './src/pages/Dashboard';
import Main from './src/pages/Main';
import Profile from './src/pages/Profile';
import Country from './src/pages/Country';
import Test from './src/pages/Test';
import DatePage from './src/pages/DatePage';
import Upload from './src/pages/Upload';


const TabBarIcon = (props) => {
  return (
      <Icon
          name={props.name}
          size={props.size ? props.size : 24}
          color={props.focused ? props.tintColor : "#222222"}
      />
  )
}

const RootStack = createStackNavigator(
{
  Main: Main,
  Chat: ChatComp,
  Profile: Profile,
  Dashboard: Dashboard,
  Country: Country,
},
{
  initialRouteName: 'Main',
  transitionConfig: () => fromLeft(),
},
).navigationOptions = {
headerShown: false,
};

// const MyDrawerNavigator = createDrawerNavigator({
//   Main: {
//     screen: Main,
//   },
//   Profile: {
//     screen: Profile,
//   },
//   Chat: {
//     screen: Chat,
//   },
//   Dashboard: {
//     screen: Dashboard,
//   },
// });

const MainStack = createStackNavigator({
Main: () => <Main />
}, {
  headerMode: 'none',
  navigationOptions: {
    headerShown: false,
  }},
)

const ProfileStack = createStackNavigator({
Profile: () => <Profile/>
}, {
headerMode: 'none',
navigationOptions: {
  headerShown: false,
}}
)

const ChatStack = createStackNavigator({
Chat: () => <ChatComp/>
}, {
headerMode: 'none',
navigationOptions: {
  headerShown: false,
}}
)

const DashboardStack = createStackNavigator({
Dashboard: () => <Dashboard/>
}, {
headerMode: 'none',
navigationOptions: {
  headerShown: false,
}}
)

const CountryStack = createStackNavigator({
Country: () => <Country/>
}, {
headerMode: 'none',
navigationOptions: {
  headerShown: false,
}}
)

MainStack.navigationOptions = {
headerShown: false,
tabBarIcon: ({ focused, tintColor }) => <TabBarIcon focused={focused} tintColor={tintColor} name="home" />,
tabBarVisible: false,
}

ChatStack.navigationOptions = {
headerShown: false,
tabBarIcon: ({ focused, tintColor }) => <TabBarIcon focused={focused} tintColor={tintColor} name="message-square" />,
}

ProfileStack.navigationOptions = {
headerShown: false,
tabBarIcon: ({ focused, tintColor }) => <TabBarIcon focused={focused} tintColor={tintColor} name="home" />,
}

DashboardStack.navigationOptions = {
headerShown: false,
tabBarIcon: ({ focused, tintColor }) => <TabBarIcon focused={focused} tintColor={tintColor} name="user" />,
}

CountryStack.navigationOptions = {
headerShown: false,
tabBarIcon: ({ focused, tintColor }) => <TabBarIcon focused={focused} tintColor={tintColor} name="user" />,
}

// const AppContainer = createAppContainer(
//     createBottomTabNavigator(
//         {
//             // Main: MainStack,
//             Profile: ProfileStack,
//             Chat: ChatStack,
//             Dashboard: DashboardStack,
//             Country: CountryStack
//         }, {
//         tabBarOptions: {
//             activeTintColor: "#2F7C6E",
//             inactiveTintColor: "#222222",
//         },
//         navigationOptions: {
//           header: null,
//         },
//         initialRouteName: 'Profile',
//         tabBarComponent: props => <TabBar
//             activeColors={'#2F7C6E'}
//             activeTabBackgrounds={'#DFF7F6'}
//             {...props}
//         />,
//     }
//     ), RootStack
// )

const AppNavigator = createStackNavigator({
Main: {
  screen: Main,
  navigationOptions: {
    headerShown: false,
  },
},
Chat: {
  screen: ChatComp,
  navigationOptions: {
    headerShown: false,
  },
},
Profile: {
  screen: Profile,
  navigationOptions: {
    headerShown: false,
  },
},
Dashboard: {
  screen: Dashboard,
  navigationOptions: {
    headerShown: false,
  },
},
Country: {
  screen: Country,
  navigationOptions: {
    headerShown: false,
  },
},
DatePage: {
  screen: DatePage,
  navigationOptions: {
    headerShown: false,
  },
},
Test: {
  screen: Test,
  navigationOptions: {
    headerShown: false,
  },
},
Upload: {
  screen: Upload,
  navigationOptions: {
    headerShown: false,
  },
},
},
{
initialRouteName: "Main"
});

const AppContainer = createAppContainer(AppNavigator);


import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';

class App extends Component {
  state = {  }
  render() { 
    return <AppContainer />;
  }
}
 
export default App;