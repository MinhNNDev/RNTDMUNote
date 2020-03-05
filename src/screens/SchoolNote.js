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

export default class SchoolNote extends Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <HeaderComponent
          title="Sổ tay trường"
          backBtn={true}
          goBack={() => this.props.navigation.goBack()}
        />
        <View
          style={{
            width: 400,
            height: 180,
            backgroundColor: '#000', //#1392fd
            overlayColor: '#fff',
            marginTop: 5,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <Image
            source={require('../assets/img/ImgF/TDMUscreen.jpg')}
            style={{
              width: '97%',
              height: 180,
              resizeMode: 'cover',
              overlayColor: '#000',
              opacity: 0.4,
            }}
          />
          <Text
            style={{
              position: 'absolute',
              fontFamily: 'Roboto-Bold',
              fontSize: 22,
              color: '#fff',
            }}>
            Đại học Thủ Dầu Một
          </Text>
        </View>

        <View style={{marginTop: 7, marginLeft: 35}}>
          <View
            style={{
              flexDirection: 'row',
              //justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('CategoryScreen')}
              style={styles.tbBox1}>
              <Image
                source={require('../assets/img/noteimg/imgnote1.png')}
                style={styles.imgst}
              />
              <Text style={styles.cstxt}> Giới thiệu chung </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('CategoryScreen')}
              style={styles.tbBox2}>
              <Image
                source={require('../assets/img/noteimg/imgnote2.png')}
                style={styles.imgst}
              />
              <Text style={styles.cstxt}>Quyền và nghĩa vụ</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              //justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('CategoryScreen')}
              style={styles.tbBox1}>
              <Image
                source={require('../assets/img/noteimg/imgnote3.png')}
                style={styles.imgst}
              />
              <Text style={styles.cstxt}>Quy trình thực hiện</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('CategoryScreen')}
              style={styles.tbBox2}>
              <Image
                source={require('../assets/img/noteimg/imgnote4.png')}
                style={styles.imgst}
              />
              <Text style={styles.cstxt}> Thông tin cần thiết </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              //justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('CategoryScreen')}
              style={styles.tbBox}>
              <Image
                source={require('../assets/img/noteimg/imgnote5.png')}
                style={styles.imgst}
              />
              <Text style={styles.cstxt}>Đoàn hội thanh niên</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('CategoryScreen')}
              style={styles.tbBox3}>
              <Image
                source={require('../assets/img/noteimg/imgnote6.png')}
                style={{
                  width: 33,
                  height: 33,
                }}
              />
              <Text style={styles.cstxt}> Hoạt động khác </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  tbBox: {
    width: 170,
    height: 120,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  tbBox1: {
    width: 170,
    height: 120,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    //borderLeftWidth: 1,
  },
  tbBox2: {
    width: 170,
    height: 120,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
  },
  tbBox3: {
    width: 170,
    height: 120,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderLeftWidth: 1,
  },
  cstxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
  imgst: {
    height: 35,
    width: 35,
  },
});
