import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  // ScrollView,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import {TouchableOpacity} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import {FlatList} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class FacultyNote extends Component {
  render() {
    const {item} = this.props.navigation.state.params;

    const gtc = 'Giới thiệu chung';
    const qvnv = 'Quyền và nghĩa vụ';
    const qtth = 'Quy trình thực hiện';
    const ttct = 'Thông tin cần thiết';
    const dhtn = 'Đoàn hội thanh niên';
    const hdk = 'Hoạt động khác';

    const {navigate} = this.props.navigation;
  
    return (
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <HeaderComponent
          title="Sổ tay khoa"
          backBtn={true}
          goBack={() => this.props.navigation.goBack()}
        />
        <View style={styles.viewcover}>
          <Image
            source={require('../assets/img/ImgF/CNKT.jpg')}
            style={styles.imgcover}
          />
          <Text
            style={{
              position: 'absolute',
              fontFamily: 'Roboto-Bold',
              fontSize: 22,
              color: '#fff',
            }}>
            {item.faculty_name}
          </Text>
        </View>

        <View style={{marginTop: 7, marginLeft: 35}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => navigate('CategoryScreen',{name: 'Giới thiệu chung' })}
              style={styles.tbBox1}>
              <Image
                source={require('../assets/img/noteimg/imgnote1.png')}
                style={styles.imgst}
              />
              <Text style={styles.cstxt}>{gtc}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('CategoryScreen',{name: 'Quyền và nghĩa vụ' })}
              style={styles.tbBox2}>
              <Image
                source={require('../assets/img/noteimg/imgnote2.png')}
                style={styles.imgst}
              />
              <Text style={styles.cstxt}>{qvnv}</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => navigate('CategoryScreen',{name: 'Quy trình thực hiện' })}
              style={styles.tbBox1}>
              <Image
                source={require('../assets/img/noteimg/imgnote3.png')}
                style={styles.imgst}
              />
              <Text style={styles.cstxt}>{qtth}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('CategoryScreen',{name: 'Thông tin cần thiết' })}
              style={styles.tbBox2}>
              <Image
                source={require('../assets/img/noteimg/imgnote4.png')}
                style={styles.imgst}
              />
              <Text style={styles.cstxt}>{ttct}</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => navigate('CategoryScreen',{name: 'Đoàn hội thanh niên' })}
              style={styles.tbBox}>
              <Image
                source={require('../assets/img/noteimg/imgnote5.png')}
                style={styles.imgst}
              />
              <Text style={styles.cstxt}>{dhtn}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('CategoryScreen',{name: 'Hoạt động khác' })}
              style={styles.tbBox3}>
              <Image
                source={require('../assets/img/noteimg/imgnote6.png')}
                style={{width: 33, height: 33}}
              />
              <Text style={styles.cstxt}>{hdk}</Text>
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
  imgcover: {
    width: '97%',
    height: 180,
    borderRadius: 5,
    resizeMode: 'cover',
    overlayColor: '#000',
    opacity: 0.4,
  },
  viewcover: {
    width: 400,
    height: 180,
    backgroundColor: '#000', //#1392fd
    overlayColor: '#fff',
    marginTop: 5,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
