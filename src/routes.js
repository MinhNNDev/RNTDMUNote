
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import HomeScreen     from './screens/HomeScreen';
import NextScreen     from './screens/NextScreen';
import OptionsScreen  from './screens/OptionsScreen';
import SchoolNote     from './screens/SchoolNote';
import FacultyNote    from './screens/FacultyNote';
import CategoryScreen from './screens/CategoryScreen';
import DetailsScreen  from './screens/DetailsScreen';

const HomeStack = createStackNavigator({
    HomeScreen: HomeScreen,
    DetailsScreen: DetailsScreen,
    NextScreen: NextScreen,
    SchoolNote : SchoolNote,
    OptionsScreen: OptionsScreen,
    FacultyNote: FacultyNote,
    CategoryScreen: CategoryScreen
});

const BottomNav = createBottomTabNavigator({
    HomeStack : HomeStack,
    NextScreen: NextScreen
    
});

const StackNav = createStackNavigator({
    Home: HomeScreen,
    Dashboard: BottomNav
});

const MainContainer = createAppContainer(StackNav);
export default MainContainer;
