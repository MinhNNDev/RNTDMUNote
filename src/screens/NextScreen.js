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
import {TouchableOpacity} from 'react-native-gesture-handler';
import HeaderComponent from '../components/HeaderComponent';
import {SliderBox} from 'react-native-image-slider-box';
import dataDemo from '../assets/data.json';

export default class NextScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../assets/img/banner1.jpg'),
        require('../assets/img/banner2.jpg'),
        require('../assets/img/banner3.jpg'),
        require('../assets/img/banner4.jpg'),
      ],
    };
  }
  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <HeaderComponent title="" />
        <View>
          <SliderBox
            images={this.state.images}
            sliderBoxHeight={200}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
            dotColor="#5597FF"
            inactiveDotColor="#E3E7EE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={{
              position: 'absolute',
              padding: 0,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
            }}
            dotStyle={{
              width: 20,
              height: 4,
              borderRadius: 2,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: 'rgba(128, 128, 128, 0.92)',
            }}
            ImageComponentStyle={{borderRadius: 8, width: '97%', marginTop: 5}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SchoolNote')}
            style={styles.fixToBt1}>
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                color: '#fff',
              }}>
              School Note
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('OptionsScreen')}
            style={styles.fixToBt2}>
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                color: '#fff',
              }}>
              Faculty Note
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  fixToBt1: {
    width: 130,
    height: 200,
    borderRadius: 5,
    marginTop: 40,
    marginLeft: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 10,
    shadowOffset: {width: 56, height: 13},
    borderWidth: 0,
    backgroundColor: '#1392fd',
  },
  fixToBt2: {
    width: 130,
    height: 200,
    borderRadius: 5,
    marginTop: 40,
    marginRight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 10,
    shadowOffset: {width: 56, height: 13},
    borderWidth: 0,
    backgroundColor: '#1392fd',
  },
});
