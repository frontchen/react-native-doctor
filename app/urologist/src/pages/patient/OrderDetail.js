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
import { AppStyle, styleMap } from '../../styles/Index';

export default class OrderDetail extends Component {
  static navigationOptions = { title: '咨询详情', header: null };

  constructor(props) {
    super(props);
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
              <Icon name={'arrowLeft'} style={AppStyle.header_btn_icon} />
            </TouchableOpacity>
          }
          title={'咨询详情'}
          leftStyle={styles.header_btn_width}
          rightStyle={styles.header_btn_width}
        />
        <ScrollView>
          <View style={styles.info_top}>
            <Image
              source={require('../../assets/images/pic_orderdetail.png')}
              style={styles.info_top_image}
            />
            <Text style={styles.info_top_text}>咨询已完成</Text>
          </View>
          <View style={styles.list}>
            <ListItem
              style={styles.info_detail}
              center={
                <View style={styles.info_detail_title}>
                  <Text style={styles.info_detail_text}>订单信息</Text>
                </View>
              }
            />
            <ListItem
              left={
                <View style={styles.info_detail_subtitle}>
                  <Text style={styles.info_detail_subtext}>订单编号</Text>
                </View>
              }
              center={
                <View style={styles.info_detail_val}>
                  <Text style={styles.info_detail_valtext}>
                    13124234234234234
                  </Text>
                </View>
              }
            />
            <ListItem
              left={
                <View style={styles.info_detail_subtitle}>
                  <Text style={styles.info_detail_subtext}>订单类型</Text>
                </View>
              }
              center={
                <View style={styles.info_detail_val}>
                  <Text style={styles.info_detail_valtext}>咨询</Text>
                </View>
              }
            />
          </View>

          <View style={styles.list}>
            <ListItem
              style={styles.info_detail}
              center={
                <View style={styles.info_detail_title}>
                  <Text style={styles.info_detail_text}>预约人信息</Text>
                </View>
              }
            />
            <ListItem
              left={
                <View style={styles.info_detail_subtitle}>
                  <Text style={styles.info_detail_subtext}>预约人</Text>
                </View>
              }
              center={
                <View style={styles.info_detail_val}>
                  <Text style={styles.info_detail_valtext}>李小果</Text>
                </View>
              }
              right={
                <TouchableOpacity
                  style={styles.info_call}
                  onPress={() => {
                    this.props.navigation.navigate('PatientComplaint', {});
                  }}
                >
                  <Text style={styles.info_call_text}>立即拨打</Text>
                </TouchableOpacity>
              }
            />
            <ListItem
              left={
                <View style={styles.info_detail_subtitle}>
                  <Text style={styles.info_detail_subtext}>订单编号</Text>
                </View>
              }
              center={
                <View style={styles.info_detail_val}>
                  <Text style={styles.info_detail_valtext}>
                    13124234234234234
                  </Text>
                </View>
              }
            />
            <ListItem
              left={
                <View style={styles.info_detail_subtitle}>
                  <Text style={styles.info_detail_subtext}>订单类型</Text>
                </View>
              }
              center={
                <View style={styles.info_detail_val}>
                  <Text style={styles.info_detail_valtext}>咨询</Text>
                </View>
              }
            />
            <ListItem
              style={styles.info_detail}
              center={
                <View
                  style={[
                    styles.info_detail_title,
                    {
                      height: 49,
                      justifyContent: 'center',
                      borderBottomWidth: 0,
                      borderTopWidth: 1,
                      borderTopColor: styleMap.color_gray10.color
                    }
                  ]}
                >
                  <Text style={styles.info_detail_text}>查看患者主诉</Text>
                </View>
              }
            />
          </View>

          <View style={styles.list}>
            <ListItem
              disabled={true}
              right={
                <View style={AppStyle.row}>
                  <View style={[AppStyle.center, styles.info_btn]}>
                    <Text style={styles.info_btn_text}>暂无评价</Text>
                  </View>
                  <TouchableOpacity
                    style={[
                      AppStyle.center,
                      styles.info_btn,
                      styleMap.bdColor_black1,
                      { marginLeft: 10 }
                    ]}
                    onPress={() => {
                      this.props.navigation.navigate('OrderEvaluate', {});
                    }}
                  >
                    <Text style={[styles.info_btn_text, styleMap.color_black1]}>
                      查看评价
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('PatientComplaint', {});
                    }}
                    style={[
                      AppStyle.center,
                      styles.info_btn,
                      styleMap.bdColor_blue1,
                      { marginLeft: 10 }
                    ]}
                  >
                    <Text style={[styles.info_btn_text, styleMap.color_blue1]}>
                      私信留言
                    </Text>
                  </TouchableOpacity>
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
    width: 80
  },
  info_top: {
    flexDirection: 'row',
    height: 114,
    alignItems: 'center',
    ...styleMap.bjColor_white0
  },
  info_top_image: {
    width: 42,
    height: 42,
    marginLeft: 35
  },
  info_top_text: {
    marginLeft: 20,
    fontSize: 20,
    ...styleMap.color_black1
  },
  list: {
    marginTop: 10
  },
  info_detail: {
    paddingVertical: 0,
    paddingRight: 0
  },
  info_detail_title: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: styleMap.color_gray10.color,
    height: 34
  },
  info_detail_text: {
    fontSize: 15,
    ...styleMap.color_black1
  },
  info_detail_subtitle: {
    width: 60
  },
  info_detail_subtext: {
    fontSize: 14,
    ...styleMap.color_gray1
  },
  info_detail_valtext: {
    fontSize: 14,
    ...styleMap.color_black1
  },
  info_call: {
    width: 55,
    height: 19,
    borderRadius: 5,
    borderWidth: 1,
    ...styleMap.bdColor_blue1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  info_call_text: {
    fontSize: 10,
    ...styleMap.color_blue1
  },
  info_btn: {
    width: 88,
    height: 28,
    borderRadius: 5,
    borderWidth: 1,
    ...styleMap.bdColor_gray1
  },
  info_btn_text: {
    fontSize: 14,
    ...styleMap.color_gray1
  }
});
