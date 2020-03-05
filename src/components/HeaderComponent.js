import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';


export default class HeaderComponent extends Component {
  render() {
    const {title, backBtn} = this.props;
    return (
      <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#1392fd', '#001f45']}>
        <View>
          <View
            style={[
              {
                paddingVertical: 15,
                paddingHorizontal: 18,
                justifyContent: 'center',
              },
              backBtn && {alignItems: 'center'},
            ]}>
            {backBtn && (
              <TouchableOpacity
                onPress={() => this.props.goBack()}
                style={{
                  position: 'absolute',
                  left: 16,
                  top: 15,
                }}>
                <FontAwesome5 name="chevron-left" size={20} color="#001f45" />
              </TouchableOpacity>
            )}
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                fontSize: 20,
                color: '#001F45',
                textAlign: 'center',
              }}>{title}</Text>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
