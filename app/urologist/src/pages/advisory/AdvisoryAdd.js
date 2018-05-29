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

export default class AdvisoryAdd extends Component {
  static navigationOptions = { title: '新增咨询时段', header: null };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={AppStyle.container}>
        <Header
          headerStyle={AppStyle.bjColor_trans0}
          statusBarStyle={AppStyle.bjColor_trans0}
          barStyle={'dark-content'}
          headerLeft={
            <TouchableOpacity
              style={[
                AppStyle.row,
                AppStyle.padding_h12,
                AppStyle.padding_v10,
                { alignItems: 'center' }
              ]}
            >
              <Icon
                name={'close'}
                style={[AppStyle.font_s20, AppStyle.padding_r10]}
              />
              <Text style={[AppStyle.font_s20, AppStyle.color_black1]}>
                新增咨询时段
              </Text>
            </TouchableOpacity>
          }
          title={''}
        />

        <ScrollView style={[AppStyle.padding_h30, AppStyle.flex1]}>
          <Text
            style={[
              AppStyle.padding_v30,
              AppStyle.font_s15,
              AppStyle.color_black1,
              { fontWeight: 'bold' }
            ]}
          >
            单价
          </Text>
          <ListItem
            style={[
              AppStyle.bjColor_trans0,
              styles.info_item,
              styles.borderBottom
            ]}
            left={
              <View
                style={[
                  AppStyle.row,
                  styles.info_item_left,
                  { alignItems: 'center' }
                ]}
              >
                <Text style={styles.info_item_title}>针对长期</Text>
                <Icon name={'triangle'} style={[AppStyle.margin_l4]} />
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

          <View>
            <Text
              style={[
                AppStyle.padding_v30,
                AppStyle.font_s15,
                AppStyle.color_black1,
                { fontWeight: 'bold' }
              ]}
            >
              时段
            </Text>
            <ListItem
              style={[styles.info_item, styles.borderBottom]}
              left={
                <Icon
                  name={'calendars'}
                  style={[AppStyle.font_s20, AppStyle.color_black1]}
                />
              }
              center={
                <View style={styles.info_item_left}>
                  <Text style={styles.info_item_title}>2018-03-12</Text>
                </View>
              }
              right={
                <Icon
                  name={'arrowRight'}
                  style={[AppStyle.padding_l10, AppStyle.color_black1]}
                />
              }
            />
            <ListItem
              style={[styles.info_item, styles.borderBottom]}
              left={
                <Icon
                  name={'begin'}
                  style={[AppStyle.font_s20, AppStyle.color_black1]}
                />
              }
              center={
                <View style={styles.info_item_left}>
                  <Text style={styles.info_item_title}>开始 11:30</Text>
                </View>
              }
              right={
                <Icon
                  name={'arrowRight'}
                  style={[AppStyle.padding_l10, AppStyle.color_black1]}
                />
              }
            />
            <ListItem
              style={[styles.info_item, styles.borderBottom]}
              left={
                <Icon
                  name={'end'}
                  style={[AppStyle.font_s20, AppStyle.color_black1]}
                />
              }
              center={
                <View style={styles.info_item_left}>
                  <Text style={styles.info_item_title}>结束 11:45</Text>
                </View>
              }
              right={
                <Icon
                  name={'arrowRight'}
                  style={[AppStyle.padding_l10, AppStyle.color_black1]}
                />
              }
            />
          </View>
        </ScrollView>
        <Button
          style={[AppStyle.margin_h12, AppStyle.margin_v10]}
          title={'确定'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  borderTop: {
    borderTopWidth: 0.5,
    borderTopColor: colorMap.gray[13]
  },
  borderBottom: {
    borderBottomWidth: 0.5,
    borderBottomColor: colorMap.gray[13]
  },
  info_item: {
    height: 44,
    paddingHorizontal: 0,
    backgroundColor: colorMap.trans[0]
  },
  info_item_title: {
    fontSize: 15,
    color: colorMap.black[1]
  }
});
