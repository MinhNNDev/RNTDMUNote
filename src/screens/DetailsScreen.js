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

export default class DetailsScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <HeaderComponent
          title="Chi tiết"
          backBtn={true}
          goBack={() => this.props.navigation.goBack()}
        />
        
        <View
          style={{
            alignItem: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 16,
            }}>
            {' '}
            Dữ liệu đang được cập nhật ...{' '}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}
