import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {TouchableOpacity} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import {FlatList} from 'react-native-gesture-handler';
import {SliderBox} from 'react-native-image-slider-box';

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
      news: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    let response = await fetch(`http://45.119.212.43:2710/api/news`);
    let responseJson = await response.json();
    this.setState({news: responseJson});
  };

  render() {
    if (!this.state.news) {
      return (
        <ActivityIndicator
          size="large"
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      );
    }
    return (
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <HeaderComponent title="Trang chủ" />
        <View>
          <SliderBox
            images={this.state.images}
            sliderBoxHeight={200}
            onCurrentImagePressed={(index) =>
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

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SchoolNote')}
              style={[Styles.fixToBt, Styles.btMarginLeft]}>
              <Text
                style={{
                  fontFamily: 'Roboto-Bold',
                  color: '#000',
                }}>
                School Note
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('OptionsScreen')}
              style={[Styles.fixToBt, Styles.btMarginRight]}>
              <Text
                style={{
                  fontFamily: 'Roboto-Bold',
                  color: '#000',
                }}>
                Faculty Note
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginLeft: 16}}>
          <Text
            style={{
              marginVertical: 5,
              fontFamily: 'Roboto-Bold',
              fontSize: 19,
              color: '#001f45',
            }}>
            Tin tức
          </Text>
          <ScrollView>
            <FlatList
              style={{marginBottom: 75}}
              data={this.state.news} // Clone dữ liệu trực tiếp
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
                        alignItems: 'center',
                      }}>
                      <Image
                        source={{uri: `https://tdmu.edu.vn` + item.img}}
                        style={Styles.ImageNews}
                        resizeMode="cover"
                      />
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'column',
                          marginVertical: 6,
                        }}>
                        <Text
                          numberOfLines={2}
                          style={{
                            fontSize: 14,
                            fontFamily: 'Roboto-Bold',
                          }}>
                          {item.name}
                        </Text>
                        {/* <Text style={{
                  fontSize:12,
                  fontFamily: 'Roboto-Regular',
                  fontStyle: "italic",
                }}
                  >Ngày cập nhật: {item.time}</Text>   */}
                        <Text numberOfLines={2}>
                          {item.desc.substring(0, 60)}...
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  ImageNews: {
    width: 78,
    height: 65,
    borderRadius: 3,
    marginRight: 10,
  },
  fixToBt: {
    width: 193,
    height: 40,
    borderRadius: 1,
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 10,
    shadowOffset: {width: 56, height: 13},
    borderWidth: 0,
    backgroundColor: '#fff',
  },
  btMarginLeft: {
    marginLeft: 8, // Check Trai
  },
  btMarginRight: {
    marginRight: 8, // Check Phai
  },
});
