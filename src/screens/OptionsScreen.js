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
import facultyname from '../assets/facultyname.json';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class OptionsScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <HeaderComponent
          title="Lựa chọn khoa"
          backBtn={true}
          goBack={() => this.props.navigation.goBack()}
        />
        <View style={{flex: 1}}>
          <FlatList
            style={{}}
            data={facultyname.dataname}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('FacultyNote', {item})
                  }
                  style={styles.optTxt}>
                  <FontAwesome5
                    name="chevron-right"
                    size={20}
                    color="#001f45"
                    style={{
                      position: 'absolute',
                      left: 350,
                      top: 10,
                    }}
                  />
                  <View
                    style={{
                      marginRight: 15,
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'column',
                        marginVertical: 6,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontFamily: 'Roboto-Bold',
                          paddingLeft: 4,
                        }}>
                        {item.faculty_name}
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

const styles = StyleSheet.create({
  optTxt: {
    width: '90%',
    height: 40,
    marginVertical: 10,
    marginLeft: 20,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 10,
    shadowOffset: {width: 56, height: 13},
    borderWidth: 0,
    backgroundColor: '#fff',
  },
});
