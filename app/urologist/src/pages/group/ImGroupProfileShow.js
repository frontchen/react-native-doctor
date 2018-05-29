import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import { Header, Icon, ListItem } from '../../components/Index';
import { AppStyle } from '../../styles/Index';

export default class ImGroupProfileShow extends Component {
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
                this.props.navigation.navigate('ImGroupProfileEdit', {});
              }}
            >
              <Text style={[AppStyle.color_green1]}>编辑</Text>
            </TouchableOpacity>
          }
        />
        <View>
          <ListItem
            style={AppStyle.padding_v20}
            left={
              <View>
                <Image
                  source={{
                    uri:
                      'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                  }}
                  style={doctorstyles.info_avatar}
                />
              </View>
            }
            center={
              <View style={[AppStyle.margin_l5, AppStyle.margin_t6]}>
                <View style={[AppStyle.row, { alignItems: 'center' }]}>
                  <Text style={[AppStyle.font_s14, AppStyle.color_black2]}>
                    夏术阶
                  </Text>
                </View>
                <View
                  style={[
                    AppStyle.row,
                    { alignItems: 'center' },
                    AppStyle.margin_t3
                  ]}
                >
                  <Text
                    style={[
                      doctorstyles.job_title,
                      AppStyle.color_gray2,
                      AppStyle.font_s12
                    ]}
                  >
                    2018.02.07 21:05
                  </Text>
                </View>
              </View>
            }
          />
        </View>
        <ListItem
          style={[
            AppStyle.padding_l3,
            {
              borderColor: '#eee',
              borderStyle: 'solid',
              borderTopWidth: 1,
              position: 'relative'
            }
          ]}
          center={
            <Text
              numberOfLines={3}
              style={[
                AppStyle.font_s20,
                AppStyle.color_black0,
                AppStyle.padding_t9,
                AppStyle.padding_b15,
                { lineHeight: 30 }
              ]}
            >
              清空聊天记录清空聊天记录清空聊天记录清空聊天记录清空聊天记录清空聊天记录清空聊天记录清空聊天记录清空聊天记录清空聊天记录清空聊天记录清空聊天记录清空聊天记录清空聊天记录
            </Text>
          }
        />
        <View
          style={[
            AppStyle.row,
            AppStyle.center,
            {
              position: 'relative',
              bottom: 15,
              width: 400,
              height: 30,
              marginLeft: 'auto',
              marginRight: 'auto'
            },
            AppStyle.margin_v0
          ]}
        >
          <View style={[doctorstyles.onLine, AppStyle.bjColor_gray4]} />
          <Text
            style={[
              AppStyle.font_s15,
              AppStyle.color_gray11,
              AppStyle.padding_h20
            ]}
          >
            仅群主可以编辑
          </Text>
          <View style={[doctorstyles.onLine, AppStyle.bjColor_gray4]} />
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
