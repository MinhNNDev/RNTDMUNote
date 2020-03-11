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

import HeaderComponent from '../components/HeaderComponent';
import {FlatList} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class DetailsScreen extends Component {
  state = {
    detail: [],
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const {item} = this.props.navigation.state.params;

    fetch(`http://45.119.212.43:2710/api/news/${item.cat_name}|${item.id_name}`)
      .then(response => {
        this.setState({detail: response.json()});
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (!this.state.detail) {
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
          <View
            style={{
              marginHorizontal: 20,
              marginTop: 10,
            }}>
            <View>
              <Text style={Styles.txtTitle}>{item.name}</Text>
            </View>
            <View>
              <FlatList
                style={{marginBottom: 65}}
                //data={dataDemo.results}
                data={this.state.detail} // Clone dữ liệu trực tiếp
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={Styles.watchcount}>
                        Lượt xem: {item.view},
                      </Text>
                      <Text>{item.time}</Text>
                    </View>
                  );
                }}
              />
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
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    marginTop: 10,
  },
  watchcount: {
    fontFamily: 'Roboto-Bold',
    fontSize: 9,
  },
});
