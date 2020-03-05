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

export default class HomeScreen extends Component {
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
        <HeaderComponent title="Trang chủ" />
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

        <View style={{marginLeft: 16}}>
          <Text
            style={{
              marginVertical: 10,
              fontFamily: 'Roboto-Bold',
              fontSize: 19,
              color: '#001f45',
            }}>
            Tin tức
          </Text>
          <FlatList
            style={{}}
            data={dataDemo.results}
            //data={this.state.trending.results}     // Clone dữ liệu trực tiếp
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('NewsScreen', {item})
                  }>
                  <View
                    style={{
                      marginRight: 10,
                      flexDirection: 'row',
                    }}>
                    <Image
                      source={{
                        uri: `https://tdmu.edu.vn/hinh/thuvien/hinhanh/${item.poster_path}`,
                      }}
                      style={{
                        width: 78,
                        height: 65,
                        borderRadius: 3,
                        marginRight: 10,
                      }}
                      resizeMode="cover"
                    />
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'column',
                        marginVertical: 6,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'Roboto-Bold',
                        }}>
                        {item.title || item.name}
                      </Text>
                      {/* <Text style={{
                  fontSize:12,
                  fontFamily: 'Roboto-Regular',
                  fontStyle: "italic",
                }}
                  >Ngày cập nhật: {item.release_date}</Text>   */}
                      <Text numberOfLines={2}>
                        {' '}
                        {item.overview.substring(0, 60)}...
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}