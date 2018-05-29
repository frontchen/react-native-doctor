import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { Header, Icon, ListItem } from '../../components/Index';
import { AppStyle, colorMap } from '../../styles/Index';

export default class UserProfile extends Component {
  static navigationOptions = { title: '医生简介', header: null };

  constructor(props) {
    super(props);

    this.state = {
      currentNum: 0
    };
  }

  render() {
    return (
      <View>
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
          title={'医生简介'}
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
              <Text style={AppStyle.header_btn_text}>完成</Text>
            </TouchableOpacity>
          }
        />

        <View style={[AppStyle.margin_t20, AppStyle.bjColor_white0]}>
          <View style={styles.input}>
            <TextInput
              style={styles.input_text}
              underlineColorAndroid="transparent"
              textAlignVertical="center"
              autoFocus={false}
              multiline={true}
              enablesReturnKeyAutomatically={true}
              returnKeyType="done"
              placeholder={'请输入您的简介'}
              placeholderTextColor={colorMap.gray[3]}
              keyboardType="default"
              defaultValue={''}
              onChangeText={text => {
                this.setState({
                  currentNum: text.length
                });
              }}
              onSubmitEditing={e => {}}
              onEndEditing={e => {
                if (e.nativeEvent.text !== '') {
                }
              }}
            />
          </View>
          <View stlye={AppStyle.flex1}>
            <Text style={styles.info_num}>{this.state.currentNum}/2000</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    minHeight: 49,
    justifyContent: 'center'
  },
  input_text: {
    fontSize: 15,
    marginLeft: 16
  },
  info_num: {
    textAlign: 'right',
    fontSize: 14,
    paddingRight: 12,
    paddingBottom: 10,
    color: colorMap.gray[3]
  }
});
