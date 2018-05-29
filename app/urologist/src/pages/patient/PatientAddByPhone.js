import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Header, Icon } from '../../components/Index';
import { AppStyle, styleMap } from '../../styles/Index';

export default class PatientAddByPhone extends Component {
  static navigationOptions = {
    title: '通过手机号通知患者加入',
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={AppStyle.container}>
        <Header
          headerLeft={
            <TouchableOpacity
              style={[
                AppStyle.row,
                AppStyle.header_btn,
                AppStyle.header_btn_left
              ]}
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Text style={AppStyle.header_btn_text}>取消</Text>
            </TouchableOpacity>
          }
          title={'通过手机号通知患者加入'}
          headerRight={
            <TouchableOpacity
              style={[
                AppStyle.row,
                AppStyle.header_btn,
                AppStyle.header_btn_right
              ]}
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Text style={AppStyle.header_btn_text}>发送</Text>
            </TouchableOpacity>
          }
        />

        <View>
          <View style={styles.title}>
            <Text style={styles.title_text}>姓名</Text>
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.input_text}
              underlineColorAndroid="transparent"
              textAlignVertical="center"
              autoFocus={false}
              enablesReturnKeyAutomatically={true}
              returnKeyType="next"
              placeholder={'请输入患者姓名'}
              placeholderTextColor={styleMap.color_gray3.color}
              keyboardType="default"
              defaultValue={''}
              onChangeText={text => {}}
              onSubmitEditing={e => {}}
              onEndEditing={e => {
                if (e.nativeEvent.text !== '') {
                }
              }}
            />
          </View>
          <View style={styles.title}>
            <Text style={styles.title_text}>手机号码</Text>
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.input_text}
              underlineColorAndroid="transparent"
              textAlignVertical="center"
              autoFocus={false}
              enablesReturnKeyAutomatically={true}
              returnKeyType="done"
              placeholder={'请输入患者手机号码'}
              placeholderTextColor={styleMap.color_gray3.color}
              keyboardType="numeric"
              defaultValue={''}
              onChangeText={text => {}}
              onSubmitEditing={e => {}}
              onEndEditing={e => {
                if (e.nativeEvent.text !== '') {
                }
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    height: 39,
    marginLeft: 12,
    justifyContent: 'center'
  },
  title_text: {
    fontSize: 14,
    ...styleMap.color_gray0
  },
  input: {
    ...styleMap.bjColor_white0,
    height: 43,
    justifyContent: 'center'
  },
  input_text: {
    fontSize: 15,
    marginLeft: 13
  }
});
