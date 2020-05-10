import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import {FlatList} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HTML from 'react-native-render-html';

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
      },
    };
  }

  render() {
    const {item} = this.props.navigation.state.params;
    var datacontent = entities.decode(item.content);
    return (
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <HeaderComponent
          title={item.name}
          backBtn={true}
          goBack={() => this.props.navigation.goBack()}
        />
        <View style={{flex: 1}}>
          <ScrollView>
            <View style={styles.viewContent}>
            <HTML
              html={datacontent}
              imagesMaxWidth={Dimensions.get('window').width}
            />
            </View >
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    viewContent:{
      marginHorizontal:7,
    }

});
