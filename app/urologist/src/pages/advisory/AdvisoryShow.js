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

export default class AdvisoryShow extends Component {
  static navigationOptions = { title: '编辑时间段', header: null };

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
              <Icon name={'arrowLeft'} style={AppStyle.header_btn_icon} />
              <Text style={AppStyle.header_btn_text}>咨询</Text>
            </TouchableOpacity>
          }
          title={'编辑时间段'}
          headerRight={
            <TouchableOpacity
              style={[
                AppStyle.row,
                AppStyle.header_btn,
                AppStyle.header_btn_right
              ]}
              onPress={() => {
                this.props.navigation.navigate('AdvisoryEdit', {});
              }}
            >
              <Text style={AppStyle.header_btn_text}>编辑</Text>
            </TouchableOpacity>
          }
        />
        <ScrollView>
          <View
            style={[
              AppStyle.margin_v10,
              AppStyle.bjColor_white0,
              styles.borderTop,
              styles.borderBottom
            ]}
          >
            <ListItem
              disabled={true}
              style={styles.info_item}
              left={
                <View style={styles.info_item_left}>
                  <Text style={styles.info_item_title}>价格</Text>
                </View>
              }
              center={
                <Text
                  numberOfLines={1}
                  style={[AppStyle.font_s15, AppStyle.color_black1]}
                >
                  268元／15分钟
                </Text>
              }
            />
            <ListItem
              disabled={true}
              style={styles.info_item}
              left={
                <View style={styles.info_item_left}>
                  <Text style={styles.info_item_title}>日期</Text>
                </View>
              }
              center={
                <Text
                  numberOfLines={1}
                  style={[AppStyle.font_s15, AppStyle.color_black1]}
                >
                  2018年3月5日
                </Text>
              }
            />

            <ListItem
              disabled={true}
              style={styles.info_item}
              left={
                <View style={styles.info_item_left}>
                  <Text style={styles.info_item_title}>时段</Text>
                </View>
              }
              center={
                <Text
                  numberOfLines={1}
                  style={[AppStyle.font_s15, AppStyle.color_black1]}
                >
                  上午11:00 - 上午11:15
                </Text>
              }
            />
          </View>
          <Button
            title={'删除该时间段'}
            type={'danger'}
            style={[AppStyle.margin_h12, AppStyle.margin_v30]}
          />
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
    height: 44,
    paddingLeft: 0,
    marginLeft: 12
  },
  info_item_title: {
    fontSize: 17,
    color: colorMap.black[0]
  }
});
