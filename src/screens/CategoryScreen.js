import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {TouchableOpacity} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import {FlatList} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SliderBox} from 'react-native-image-slider-box';
import optionsdata from '../assets/datadocument.json';
import titlename from '../assets/facultyname.json';

export default class CategoryScreen extends Component {
  render() {
    //const {item} = this.props.navigation.state.params;
    const { navigation } = this.props;
    const itemName = navigation.getParam('name', 'NO-NAME');
    return (
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <HeaderComponent
          title={itemName}
          backBtn={true}
          goBack={() => this.props.navigation.goBack()}
        />
        <ScrollView>
        
        <View>
          <View>
            <Text style={stylescreen.texttitle}>TDMU</Text>
          </View>
        </View>

        </ScrollView>
        
      </SafeAreaView>
    );
  }
}
//DetailsScreen

const stylescreen = StyleSheet.create({
    texttitle: {
      fontFamily: 'Roboto-Bold',
      fontSize: 19,
      color: '#000'

    }

})
