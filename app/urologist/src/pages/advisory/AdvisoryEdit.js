import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Header, Icon, ListItem, Button } from '../../components/Index';
import { AppStyle, colorMap } from '../../styles/Index';

export default class AdvisoryEdit extends Component {
  static navigationOptions = { title: '修改时间段', header: null };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
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
              <Text style={AppStyle.header_btn_text}>取消</Text>
            </TouchableOpacity>
          }
          title={'修改时间段'}
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
              <Text style={AppStyle.header_btn_text}>完成</Text>
            </TouchableOpacity>
          }
        />
        <ScrollView>
          <ListItem
            style={[
              AppStyle.margin_t10,
              styles.borderTop,
              styles.borderBottom,
              { height: 49 }
            ]}
            left={
              <View style={styles.info_item_left}>
                <Text style={styles.info_item_title}>针对长期</Text>
              </View>
            }
            right={
              <Text
                numberOfLines={1}
                style={[AppStyle.font_s15, AppStyle.color_black1]}
              >
                268 元
              </Text>
            }
          />
          <ListItem
            style={[AppStyle.bjColor_trans0, { height: 34 }]}
            right={
              <Text
                numberOfLines={1}
                style={[AppStyle.font_s15, AppStyle.color_gray1]}
              >
                正高不低于268元，副高不低于168元
              </Text>
            }
          />
          <View
            style={[
              AppStyle.margin_b10,
              AppStyle.bjColor_white0,
              styles.borderTop,
              styles.borderBottom
            ]}
          >
            <ListItem
              style={[styles.info_item, styles.borderBottom]}
              left={
                <View style={styles.info_item_left}>
                  <Text style={styles.info_item_title}>当前日期</Text>
                </View>
              }
              right={
                <View
                  style={[AppStyle.row, AppStyle.center, AppStyle.margin_l4]}
                >
                  <Text
                    numberOfLines={1}
                    style={[AppStyle.font_s15, AppStyle.color_black1]}
                  >
                    2018年3月5日
                  </Text>
                  <Icon
                    name={'arrowRight'}
                    style={[AppStyle.padding_l10, AppStyle.color_gray0]}
                  />
                </View>
              }
            />
            <ListItem
              style={[styles.info_item, styles.borderBottom]}
              left={
                <View style={styles.info_item_left}>
                  <Text style={styles.info_item_title}>开始</Text>
                </View>
              }
              right={
                <View
                  style={[AppStyle.row, AppStyle.center, AppStyle.margin_l4]}
                >
                  <Text
                    numberOfLines={1}
                    style={[AppStyle.font_s15, AppStyle.color_black1]}
                  >
                    上午11:00
                  </Text>
                  <Icon
                    name={'arrowRight'}
                    style={[AppStyle.padding_l10, AppStyle.color_gray0]}
                  />
                </View>
              }
            />
            <ListItem
              style={styles.info_item}
              left={
                <View style={styles.info_item_left}>
                  <Text style={styles.info_item_title}>结束</Text>
                </View>
              }
              right={
                <View
                  style={[AppStyle.row, AppStyle.center, AppStyle.margin_l4]}
                >
                  <Text
                    numberOfLines={1}
                    style={[AppStyle.font_s15, AppStyle.color_black1]}
                  >
                    上午11:15
                  </Text>
                  <Icon
                    name={'arrowRight'}
                    style={[AppStyle.padding_l10, AppStyle.color_gray0]}
                  />
                </View>
              }
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_btn_width: {
    width: 70
  },
  borderTop: {
    borderTopWidth: 0.5,
    borderTopColor: colorMap.gray[13]
  },
  borderBottom: {
    borderBottomWidth: 0.5,
    borderBottomColor: colorMap.gray[13]
  },
  info_item: {
    height: 49,
    paddingLeft: 0,
    marginLeft: 12
  },
  info_item_title: {
    fontSize: 17,
    color: colorMap.black[0]
  }
});
