import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

import { Header, Icon, ListItem } from '../../components/Index';
import { AppStyle, colorMap } from '../../styles/Index';

export default class ImGroupProfileEdit extends Component {
  static navigationOptions = { title: '专家团简介', header: null };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[AppStyle.container, AppStyle.bjColor_white0]}>
        <Header
          leftStyle={doctorstyles.header_btn_width}
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
          title={'专家团简介'}
          headerRight={
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
              <Text style={[AppStyle.header_btn_text]}>完成</Text>
            </TouchableOpacity>
          }
        />
        <View
          style={[
            AppStyle.margin_t5,
            { borderTopWidth: 1, marginLeft: 16, borderColor: colorMap.gray[4] }
          ]}
        >
          <TextInput
            style={[
              AppStyle.font_s20,
              AppStyle.color_black0,
              AppStyle.padding_v20,
              AppStyle.center,
              { letterSpacing: 1 }
            ]}
            underlineColorAndroid="transparent"
            multiline={true}
            autoFocus={true}
          />
        </View>
      </View>
    );
  }
}
const doctorstyles = StyleSheet.create({
  header_btn_width: {
    width: 80
  },

  info_avatar: {
    width: 36,
    height: 36
  },

  info_center_pl10: {
    paddingLeft: 10
  },
  info_book_image: {
    width: 51,
    height: 51
  },
  info_btns: {
    paddingHorizontal: 15
  },
  onLine: {
    flex: 1,
    width: 100,
    height: 1,
    flexDirection: 'column'
  }
});
