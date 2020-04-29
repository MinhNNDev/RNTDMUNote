import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native';
import {TouchableOpacity} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import textData from '../assets/datatext';
import HTML from 'react-native-render-html';
import { FlatList } from 'react-native-gesture-handler';
import CategoryScreen from './CategoryScreen';
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

const screenWidth = Dimensions.get('window').width;

export default class FacultyNote extends Component {
  constructor(props){
    super(props);
  const {item} = props;

    this.state = {
      cont: {...item},
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const {item} = this.props.navigation.state.params;
    fetch(`http://tdmuapp.ngocminh.design/api.php?${item.idcode}`)
    .then(response => response.json())
      .then(response => {
        this.setState({cont: response});
        
      })
      .catch(err => {
        console.log(err);
      });
  }

  goToCategoryScreen = key => {
    this.props.navigation.navigate('CategoryScreen', {key});
  };

  renderData = () => {
    return Object.values(textData).map((data, index) => (
      <TouchableOpacity
        key={data.key}
        style={index % 2 == 0 ? styles.tbBox1 : styles.tbBox2}
        onPress={() => this.goToCategoryScreen(data.key)}>
        <Image source={data.image} style={styles.imgst} />
        <Text style={styles.cstxt}>{data.name}</Text>
      </TouchableOpacity>
    ));
  };

  render() {
    const numColumns = 2;
    const {item} = this.props.navigation.state.params;
    const {cont} = this.state;
    var datacontent = entities.decode(cont.content);
    return (
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <HeaderComponent
          title="Sổ tay khoa"
          backBtn={true}
          goBack={() => this.props.navigation.goBack()}
        />
        <View style={styles.viewcover}>
          <Image
              source={{uri:`https://ngocminh.design/imageapp/${item.image}`}}
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
        {/* <Text>{item.idcode}</Text> */}
        <View style={styles.viewTable}>
          {/* <View style={styles.itemContainer}>{this.renderData()}</View> */}
          <ScrollView>
            <FlatList 
              style={{}}
              data={cont}
              numColumns={numColumns}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) =>{
                 return(
                   <TouchableOpacity onPress={()=>this.props.navigation.navigate('CategoryScreen',{item})}>
                   <View>
                     <View style={styles.tbBox}>
                        <Image style={styles.imgst} />
                        <Text style={styles.cstxt}>{item.name}</Text>
                     </View>
                   </View>
                     
                   </TouchableOpacity>
                 ) 
              }}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  tbBox: {
    width: screenWidth / 2 - 30,
    height: 132,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#346356',
  },
  tbBox1: {
    width: screenWidth / 2 - 15,
    height: 120,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
  },
  tbBox2: {
    width: screenWidth / 2 - 15,
    height: 120,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
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
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: screenWidth,
    marginVertical: 8,
    marginHorizontal: 15,
  },
  viewTable:{
    marginTop:30,
    marginHorizontal:30,
  }

});
