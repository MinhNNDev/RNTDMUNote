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
import { create } from 'react-test-renderer';

export default class DetailsScreen extends Component {
  render() {
    const {item} = this.props.navigation.state.params;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <HeaderComponent
          title="Tin tức"
          backBtn={true}
          goBack={() => this.props.navigation.goBack()}
        />
        <View
          style={{
            alignItem: 'center',
            justifyContent: 'center',
          }}>
          <View style={{
              marginHorizontal:20,
              marginTop:10,
          }}>
            <View>
              <Text style={Styles.txtTitle}>
                {item.title || item.name}
              </Text>
            </View>
            <View style={Styles.txtDetails}>
              <Text>{item.overview}</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
    txtTitle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 19,
        
    },
    txtDetails: {
        fontFamily:'Roboto-Regular',
        fontSize: 16,
        marginTop: 10,
    },
});
