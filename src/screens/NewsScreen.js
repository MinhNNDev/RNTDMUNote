import React, {Component, useCallback} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
//import { WebView } from 'react-native-webview';
import HeaderComponent from '../components/HeaderComponent';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';

export default class NewsScreen extends Component {
  constructor(props) {
    super(props);

    const {item} = props;

    this.state = {
      detail: {...item},
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const {item} = this.props.navigation.state.params;
    // console.log(item);

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
    const { detail } = this.state;

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
            
             <ScrollView>
             <View>
              <Text style={Styles.txtTitle}>{(detail && detail.title) || item.name}</Text>
              <View
                style={Styles.styleViewTime}>
                <View style={Styles.layoutViewTime}>
                <FontAwesome5 name="calendar-day" size={11}/>
                <Text style={Styles.ViewAndTime}> {detail.time}</Text>
                </View>
                <View style={Styles.layoutViewTime}>
                  <FontAwesome5 name="eye" size={11} />
                  <Text style={Styles.ViewAndTime}> {detail.view}</Text>
                </View>
              </View>
              <View>
                
              </View>
            </View>
             </ScrollView>
              

          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  styleViewTime: {
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  layoutViewTime:{
    flexDirection: 'row',
    alignItems: 'center',
  },
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
  ViewAndTime:{
    fontFamily:'Roboto-Regular',
    fontSize: 12,
  },
});
