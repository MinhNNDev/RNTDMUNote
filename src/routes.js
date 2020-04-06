import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './screens/HomeScreen';
import OptionsScreen from './screens/OptionsScreen';
import SchoolNote from './screens/SchoolNote';
import FacultyNote from './screens/FacultyNote';
import CategoryScreen from './screens/CategoryScreen';
import DetailsScreen from './screens/DetailsScreen';
import NewsScreen from './screens/NewsScreen';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
   // NextScreen: NextScreen,
    SchoolNote: SchoolNote,
    FacultyNote: FacultyNote,
    OptionsScreen: OptionsScreen,
    CategoryScreen: CategoryScreen,
    DetailsScreen: DetailsScreen,
    NewsScreen: NewsScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: 
    {                                      // Hide Header default xấu như chó, bố mày tự làm còn đẹp hơn
      headerVisible: false,
    },
  },
);

// const BottomNav = createBottomTabNavigator(
//   {
//     HomeStack: {screen: HomeStack, navigationOptions: {tabBarLabel: 'Home'}},
//     NextScreen: {screen: NextScreen, navigationOptions: {tabBarLabel: 'Note'}},
//   },
//   {
//     defaultNavigationOptions: ({navigation}) => ({
//       tabBarIcon: ({focused, horizontal, tintColor}) => {
//         const {routeName} = navigation.state;
//         let iconName;
//         if (routeName === 'HomeStack') {
//           iconName = 'university';
//         } else if (routeName === 'NextScreen') {
//           iconName = 'book';
//         }
//         return <FontAwesome5 name={iconName} size={20} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: '#5A7BBD',
//       inactiveTintColor: '#001F45',
//       style: {paddingVertical: 7},
//       labelStyle: {
//         fontFamily: 'Roboto-Regular',
//         fontSize: 11,
//       },
//     },
//   },
// );

// const StackNav = createStackNavigator({
//     Home: HomeScreen,
//     Dashboard: BottomNav
// });

const MainContainer = createAppContainer(HomeStack);
export default MainContainer;
