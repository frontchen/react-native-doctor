import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Header, Icon } from '../../components/Index';
import { AppStyle } from '../../styles/Index';
export default class SexSelect extends Component {
  static navigationOptions = { title: '选择性别', header: null };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[AppStyle.container, AppStyle.bjColor_white0]}>
        <Header
          leftStyle={styles.header_btn_width}
          rightStyle={styles.header_btn_width}
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
              <Icon name={'arrowLeft'} style={AppStyle.header_btn_icon} />
            </TouchableOpacity>
          }
          title={'性别'}
        />
        <View style={[styles.info_title, { backgroundColor: '#eee' }]}>
          <Text
            style={[
              AppStyle.font_s13,
              AppStyle.margin_t20,
              AppStyle.margin_b7,
              { color: '#999' }
            ]}
          >
            分组名字
          </Text>
        </View>
        <View style={[{ flexDirection: 'column', minHeight: 100 }]}>
          <TouchableOpacity
            style={[
              AppStyle.row,
              AppStyle.margin_l12,
              {
                minHeight: 50,
                flex: 0.5,
                borderBottomWidth: 0.5,
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderColor: AppStyle.color_gray4
              }
            ]}
          >
            <View style={[AppStyle.padding_l10]}>
              <Text style={[AppStyle.font_s16, AppStyle.color_black1]}>男</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              AppStyle.row,
              AppStyle.margin_l12,
              {
                minHeight: 50,
                flex: 0.5,
                borderBottomWidth: 0.5,
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderColor: AppStyle.color_gray4
              }
            ]}
          >
            <View style={[AppStyle.padding_l10]}>
              <Text style={[AppStyle.font_s16, AppStyle.color_black1]}>女</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header_btn_width: {
    width: 70
  },
  info_title: {
    minHeight: 39,
    paddingLeft: 16
  }
});
