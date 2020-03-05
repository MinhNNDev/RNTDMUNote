import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  // ScrollView,
  View,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {TouchableOpacity} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import {FlatList} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SliderBox} from 'react-native-image-slider-box';
import dataDemo from '../assets/data.json';

export default class CategoryScreen extends Component {
  render() {
    //const {item} = this.props.navigation.state.params;
    return (
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <HeaderComponent
          title="Danh mục"
          backBtn={true}
          goBack={() => this.props.navigation.goBack()}
        />
        <View>
          <Text> CategoryScreen </Text> 
        </View>
      </SafeAreaView>
    );
  }
}
//DetailsScreen