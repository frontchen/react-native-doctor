import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  PixelRatio,
  Alert
} from 'react-native';

import { Header, Icon, ListItem } from '../../components/Index';
import { AppStyle, colorMap } from '../../styles/Index';

export default class Member extends Component {
  static navigationOptions = {
    title: '我的',
    header: null,
    headerBackTitle: null,
    headerTitleStyle: { alignSelf: 'center' },
    tabBarIcon: ({ focused, tintColor }) => {
      return (
        <Icon
          name={focused ? 'memberActive' : 'member'}
          style={{ fontSize: 26, color: tintColor }}
        />
      );
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={AppStyle.container}>
        <Header title={'我的'} />
        <ScrollView>
          <ListItem
            onPress={() => {
              this.props.navigation.navigate('UserInfo', {});
            }}
            style={[
              AppStyle.margin_t20,
              styles.borderTop,
              styles.borderBottom,
              styles.member_info
            ]}
            left={
              <View style={[AppStyle.row, { alignItems: 'center' }]}>
                <View>
                  <Image
                    source={{
                      uri:
                        'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                    }}
                    style={{ width: 64, height: 64, borderRadius: 5 }}
                  />
                </View>
                <View style={AppStyle.margin_l13}>
                  <Text style={[AppStyle.font_s17, AppStyle.color_black]}>
                    医生姓名
                  </Text>
                  <View
                    style={[AppStyle.row, AppStyle.margin_t10, AppStyle.center]}
                  >
                    <Icon
                      name={'plaint'}
                      style={[
                        AppStyle.font_s18,
                        AppStyle.color_green2,
                        AppStyle.color_gray1,
                        AppStyle.color_red2
                      ]}
                    />
                    <Text
                      style={[
                        AppStyle.font_s14,
                        AppStyle.color_gray11,
                        AppStyle.padding_l5,
                        AppStyle.color_red2
                      ]}
                    >
                      去认证
                    </Text>
                  </View>
                </View>
              </View>
            }
            right={
              <View style={[AppStyle.row, AppStyle.center]}>
                <Icon
                  name={'qrcode'}
                  style={[AppStyle.font_s22, AppStyle.color_gray0]}
                />
                <Icon
                  name={'arrowRight'}
                  style={[AppStyle.padding_l10, AppStyle.color_gray0]}
                />
              </View>
            }
          />

          <ListItem
            onPress={() => {
              this.props.navigation.navigate('WalletIndex', {});
              // Alert.alert(
              //   '提示',
              //   '为了您的账户安全，建议您先设置六位安全密码',
              //   [
              //     {
              //       text: '取消',
              //       onPress: () => {}
              //     },
              //     { text: '去设置', onPress: () => {} }
              //   ]
              // );
              // Alert.alert(
              //   '绑定账户',
              //   '尊敬的用户，为了您的资金安全，请您绑定银行卡账户',
              //   [
              //     {
              //       text: '取消',
              //       onPress: () => {}
              //     },
              //     { text: '去绑卡', onPress: () => {} }
              //   ]
              // );
            }}
            style={[
              AppStyle.margin_t20,
              styles.member_item,
              styles.borderTop,
              styles.borderBottom
            ]}
            left={
              <Icon
                name={'wallet'}
                style={[AppStyle.font_s20, AppStyle.color_gray0]}
              />
            }
            center={<Text style={styles.member_item_title}>钱包</Text>}
            right={
              <View style={[AppStyle.row, AppStyle.center]}>
                <Text
                  style={[
                    AppStyle.font_s14,
                    AppStyle.color_gray0,
                    AppStyle.padding_r10
                  ]}
                >
                  设置支付密码(去绑定银行卡)
                </Text>
                <Icon name={'arrowRight'} style={[AppStyle.color_gray0]} />
              </View>
            }
          />

          <View
            style={[
              AppStyle.margin_t20,
              AppStyle.bjColor_white0,
              styles.borderTop,
              styles.borderBottom
            ]}
          >
            <ListItem
              onPress={() => {
                this.props.navigation.navigate('NewsList', {});
              }}
              style={[styles.member_item1, styles.borderBottom]}
              left={
                <Icon
                  name={'news'}
                  style={[AppStyle.font_s20, AppStyle.color_gray0]}
                />
              }
              center={<Text style={styles.member_item_title}>泌尿科头条</Text>}
              right={
                <Icon name={'arrowRight'} style={[AppStyle.color_gray0]} />
              }
            />
            <ListItem
              onPress={() => {
                this.props.navigation.navigate('UserFavoriteList', {});
              }}
              style={[styles.member_item]}
              left={
                <Icon
                  name={'star'}
                  style={[AppStyle.font_s20, AppStyle.color_gray0]}
                />
              }
              center={<Text style={styles.member_item_title}>收藏</Text>}
              right={
                <Icon name={'arrowRight'} style={[AppStyle.color_gray0]} />
              }
            />
          </View>

          <ListItem
            onPress={() => {
              this.props.navigation.navigate('UserSetting', {});
            }}
            style={[
              AppStyle.margin_t20,
              styles.member_item,
              styles.borderTop,
              styles.borderBottom
            ]}
            left={
              <Icon
                name={'setting'}
                style={[AppStyle.font_s20, AppStyle.color_gray0]}
              />
            }
            center={<Text style={styles.member_item_title}>设置</Text>}
            right={
              <Icon
                name={'arrowRight'}
                style={[AppStyle.padding_l10, AppStyle.color_gray0]}
              />
            }
          />
        </ScrollView>
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
  member_info: {
    height: 88
  },
  member_item: {
    height: 44
  },
  member_item1: {
    height: 44,
    paddingLeft: 0,
    marginLeft: 12
  },
  member_item_title: {
    fontSize: 17,
    color: colorMap.black[0]
  }
});
