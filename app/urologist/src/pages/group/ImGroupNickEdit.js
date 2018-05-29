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

import { Header, Icon, SearchBar, ListItem } from '../../components/Index';
import { AppStyle, styleMap } from '../../styles/Index';

export default class ImGroupNickEdit extends Component {
  static navigationOptions = { title: '我在本群的昵称', header: null };

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
          title={'我在本群的昵称'}
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

        <View style={(AppStyle.bjColor_gray4, AppStyle.margin_t10)}>
          <TextInput
            style={[
              AppStyle.font_s17,
              AppStyle.color_black1,
              AppStyle.padding_l12,
              AppStyle.bjColor_white0,
              AppStyle.padding_t15,
              AppStyle.center,
              { letterSpacing: 1 }
            ]}
            underlineColorAndroid="transparent"
            autoFocus={true}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  info_item: {
    height: 49
  },
  header_btn_width: {
    width: 100
  }
});
