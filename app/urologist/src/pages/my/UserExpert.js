import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Header, Icon, ListItem } from '../../components/Index';
import { AppStyle, colorMap } from '../../styles/Index';

export default class UserExpert extends Component {
  static navigationOptions = { title: '医生擅长', header: null };

  constructor(props) {
    super(props);

    this.state = {
      currentNum: 0
    };

    this.currentData = [
      { name: '糖尿病科' },
      { name: '前列腺炎' },
      { name: '肾炎' },
      { name: '蛋白尿' },
      { name: '肾脏功能' }
    ];

    this.listData = [
      { name: '糖尿病科' },
      { name: '前列腺炎' },
      { name: '肾炎' },
      { name: '蛋白尿' },
      { name: '肾脏功能' },
      { name: '肾结石' },
      { name: '糖尿病' },
      { name: '血尿' },
      { name: '类风湿' },
      { name: '慢性尿路' },
      { name: '糖尿病科' },
      { name: '糖尿病科' }
    ];
  }

  _renderCurrentList(item, index) {
    return (
      <View
        key={`current-list-${index}`}
        style={[
          AppStyle.center,
          AppStyle.margin_r10,
          AppStyle.margin_b10,
          AppStyle.padding_h10,
          AppStyle.padding_v7,
          AppStyle.row,
          { borderRadius: 4, borderWidth: 1, borderColor: colorMap.blue[1] }
        ]}
      >
        <Text style={[AppStyle.font_s14, AppStyle.color_blue1]}>
          {item.name}
        </Text>
        <Icon
          name={'close'}
          style={[AppStyle.margin_l6, AppStyle.font_s16, AppStyle.color_blue1]}
        />
      </View>
    );
  }

  _renderList(item, index) {
    return (
      <TouchableOpacity
        key={`list-${index}`}
        style={[
          AppStyle.center,
          AppStyle.margin_r10,
          AppStyle.margin_b10,
          AppStyle.padding_h10,
          AppStyle.padding_v7,
          { borderRadius: 4, borderWidth: 1, borderColor: colorMap.gray[0] }
        ]}
      >
        <Text style={[AppStyle.font_s14, AppStyle.color_black1]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    let list = this.listData.map((v, i) => {
      return this._renderList(v, i);
    });

    let currentList = this.currentData.map((v, i) => {
      return this._renderCurrentList(v, i);
    });

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
          title={'医生擅长'}
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

        <ScrollView>
          <View style={styles.info_title}>
            <Text style={[AppStyle.font_s14, AppStyle.color_gray0]}>
              选择擅长治疗疾病（最多选10个）
            </Text>
          </View>
          <View
            style={[
              AppStyle.padding_t10,
              AppStyle.padding_h12,
              styles.info_content
            ]}
          >
            {currentList}
            <View
              style={[
                AppStyle.center,
                AppStyle.margin_r10,
                AppStyle.margin_b10,
                AppStyle.padding_h10,
                AppStyle.padding_v7
              ]}
            >
              <Text style={[AppStyle.font_s14, AppStyle.color_gray1]}>
                请选择擅长
              </Text>
            </View>
          </View>
          <View style={AppStyle.padding_h12}>
            <View style={AppStyle.margin_t13}>
              <Text style={[AppStyle.font_s14, AppStyle.color_red0]}>
                *将按照您的选择顺序一次展示在您的详情页
              </Text>
              <Text
                style={[
                  AppStyle.padding_t10,
                  AppStyle.font_s14,
                  AppStyle.color_red0
                ]}
              >
                *选择多个擅长后可拖动调整顺序
              </Text>
            </View>
            <View style={[AppStyle.margin_t25, AppStyle.margin_b18]}>
              <Text style={[AppStyle.font_s14, AppStyle.color_gray0]}>
                泌尿外科
              </Text>
            </View>
            <View style={styles.list}>{list}</View>
            <View style={[AppStyle.margin_t25, AppStyle.margin_b18]}>
              <Text style={[AppStyle.font_s14, AppStyle.color_gray0]}>
                泌尿外科二
              </Text>
            </View>
            <View style={styles.list}>{list}</View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  info_title: {
    marginLeft: 12,
    height: 39,
    justifyContent: 'center'
  },
  info_content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    minHeight: 49,
    backgroundColor: colorMap.white[0]
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
