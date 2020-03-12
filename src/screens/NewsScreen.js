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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const {item} = this.props.navigation.state.params;
    //console.log(item);

    fetch(`http://45.119.212.43:2710/api/news/${item.cat_name}|${item.id_name}`)
      .then(response => response.json())
      .then(response => {
        this.setState({detail: response});
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
              <Text>{item.title}</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{item.time}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesome5 name="eye" size={11} />
                  <Text> {item.view} </Text>
                </View>
              </View>
              <View>
                <Text>{item.content}</Text>
              </View>
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
