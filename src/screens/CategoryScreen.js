import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import {FlatList} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import textdata from '../assets/datatext';

export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: '',
        key: '',
        data: [],
      },
    };
  }

  componentDidMount() {
    const keyProps = this.props.navigation.getParam('key', '');
    const dataProps = Object.values(textdata).find(d => d.key == keyProps);

    if (dataProps) {
      this.setState({data: dataProps});
    }
  }

  render() {
    const {navigation} = this.props;
    const {data} = this.state;

    return (
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <HeaderComponent
          title={data.name}
          backBtn={true}
          goBack={() => this.props.navigation.goBack()}
        />
        <View style={{flex: 1}}>
          <FlatList
            style={{}}
            data={data.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <View style={{marginHorizontal: 9, marginVertical: 5}}>
                  <View style={stylescreen.layoutViewtitle}>
                    <FontAwesome5 name="stream" size={11} />
                    <Text style={stylescreen.texttitle}>
                      {' '}
                      {item.title_name}
                    </Text>
                  </View>
                  <View>
                    <Text>{item.description}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const stylescreen = StyleSheet.create({
  viewtitle: {
    marginLeft: 8,
  },
  texttitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
    color: '#000',
  },
  layoutViewtitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
