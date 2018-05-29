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

export default class AdvisoryDetail extends Component {
  static navigationOptions = { title: '预约详情', header: null };

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
          title={'预约详情'}
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
              style={[styles.info_item, styles.borderBottom]}
              left={
                <View style={styles.info_item_left}>
                  <Text style={styles.info_item_title}>时间</Text>
                </View>
              }
              right={
                <Text
                  numberOfLines={1}
                  style={[AppStyle.font_s15, AppStyle.color_black1]}
                >
                  2018年3月5日 上午10:00 - 10:15
                </Text>
              }
            />
            <ListItem
              style={[styles.info_item, styles.borderBottom]}
              left={
                <View style={styles.info_item_left}>
                  <Text style={styles.info_item_title}>价格</Text>
                </View>
              }
              right={
                <Text
                  numberOfLines={1}
                  style={[AppStyle.font_s15, AppStyle.color_black1]}
                >
                  268元
                </Text>
              }
            />

            <ListItem
              style={[styles.info_item, styles.borderBottom]}
              left={
                <View style={styles.info_item_left}>
                  <Text style={styles.info_item_title}>患者</Text>
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
                    马云
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
                  <Text style={styles.info_item_title}>咨询问题</Text>
                </View>
              }
              center={
                <Text
                  numberOfLines={1}
                  style={[
                    AppStyle.font_s15,
                    AppStyle.color_black1,
                    { textAlign: 'right' }
                  ]}
                >
                  泌尿系肿瘤带确诊中泌尿系肿瘤带确诊中
                </Text>
              }
            />
            <ListItem
              style={styles.info_item}
              left={
                <View style={styles.info_item_left}>
                  <Text style={styles.info_item_title}>患者主诉</Text>
                </View>
              }
              right={
                <View
                  style={[AppStyle.row, AppStyle.center, AppStyle.margin_l4]}
                >
                  <Text
                    numberOfLines={1}
                    style={[AppStyle.font_s15, AppStyle.color_gray1]}
                  >
                    去查看详情
                  </Text>
                  <Icon
                    name={'arrowRight'}
                    style={[AppStyle.padding_l10, AppStyle.color_gray0]}
                  />
                </View>
              }
            />
          </View>
          <Button
            title={'发留言'}
            style={[AppStyle.margin_h12, AppStyle.margin_t20]}
          />
          <Button
            title={'打电话'}
            type={'white'}
            color={colorMap.black[0]}
            style={[AppStyle.margin_h12, AppStyle.margin_v15]}
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
