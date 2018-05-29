import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
  Dimensions,
  Alert,
  Linking
} from 'react-native';

import { Header, Icon, ListItem, SearchBar } from '../../components/Index';
import { AppStyle, colorMap } from '../../styles/Index';

export default class WalletIndex extends Component {
  static navigationOptions = { title: '我的钱包', header: null };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={AppStyle.container}>
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
          title={'我的钱包'}
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
              <Icon name={'distrust'} style={AppStyle.header_btn_icon} />
            </TouchableOpacity>
          }
        />

        <ScrollView>
          <View
            style={[
              AppStyle.bjColor_blue1,
              AppStyle.padding_h24,
              AppStyle.padding_t15,
              { height: 86 }
            ]}
          >
            <Text style={{ fontSize: 11, color: 'rgba(255,255,255, 0.8)' }}>
              账号余额(元)
            </Text>
            <Text
              style={[
                AppStyle.font_s20,
                AppStyle.color_white0,
                AppStyle.margin_t10
              ]}
            >
              ¥ 88888.00
            </Text>
          </View>
          <View
            style={[
              AppStyle.row,
              AppStyle.center,
              AppStyle.bjColor_red5,
              { height: 34 }
            ]}
          >
            <Icon
              name={'money'}
              style={[AppStyle.color_red4, AppStyle.margin_r5]}
            />
            <Text style={[{ fontSize: 12 }, AppStyle.color_red6]}>
              截止今日，您在本平台累计收益：¥99999.00 元
            </Text>
          </View>

          <View
            style={[
              AppStyle.margin10,
              AppStyle.bjColor_white0,
              AppStyle.padding_h18,
              AppStyle.padding_v23,
              AppStyle.row,
              AppStyle.center,
              { borderLeftWidth: 2, borderLeftColor: colorMap.blue[1] }
            ]}
          >
            <View style={AppStyle.flex1}>
              <View style={AppStyle.row}>
                <Text
                  style={[
                    AppStyle.font_s15,
                    AppStyle.color_black1,
                    { fontWeight: 'bold' }
                  ]}
                >
                  可提取金额
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(
                      '说明',
                      '您服务获得的收益，将于72小时后转入可提现金额，如有疑问请联系客服',
                      [
                        {
                          text: '联系客服',
                          onPress: () => {
                            Linking.openURL('tel:021-54847990').catch(e => {});
                          }
                        },
                        {
                          text: '我知道了',
                          onPress: () => {}
                        }
                      ]
                    );
                  }}
                  style={[
                    AppStyle.margin_l10,
                    AppStyle.padding_h5,
                    {
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: colorMap.red[4],
                      borderRadius: 3
                    }
                  ]}
                >
                  <Text style={{ fontSize: 11, color: colorMap.red[4] }}>
                    说明
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={[
                  AppStyle.margin_t10,
                  AppStyle.font_s18,
                  AppStyle.color_blue1
                ]}
              >
                ¥6666.00
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('WalletCash', {});
              }}
              style={[
                AppStyle.bjColor_blue1,
                AppStyle.padding_h20,
                { height: 30, justifyContent: 'center' }
              ]}
            >
              <Text style={[AppStyle.font_s15, AppStyle.color_white0]}>
                去提现
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[AppStyle.padding_l30, AppStyle.bjColor_white0]}>
            <View
              style={[
                AppStyle.padding_v20,
                AppStyle.padding_r30,
                { borderBottomWidth: 1, borderBottomColor: colorMap.gray[4] }
              ]}
            >
              <Text
                style={[
                  AppStyle.font_s15,
                  AppStyle.color_black1,
                  { fontWeight: 'bold' }
                ]}
              >
                账户流水
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('WalletDetail', {});
              }}
              style={[
                AppStyle.padding_v15,
                AppStyle.padding_r30,
                { borderBottomWidth: 1, borderBottomColor: colorMap.gray[4] }
              ]}
            >
              <View style={[AppStyle.row, AppStyle.center]}>
                <Text
                  style={[
                    AppStyle.font_s15,
                    AppStyle.color_black1,
                    AppStyle.flex1
                  ]}
                  numberOfLines={1}
                >
                  咨询费：患者郭晓华付费咨询华付费咨询
                </Text>
                <Text
                  style={[
                    AppStyle.font_s15,
                    AppStyle.color_blue1,
                    AppStyle.padding_l10
                  ]}
                >
                  +800.00
                </Text>
              </View>
              <Text
                style={[
                  AppStyle.font_s13,
                  AppStyle.color_gray1,
                  AppStyle.padding_t10
                ]}
              >
                2017-8-29 15:24
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                AppStyle.padding_v15,
                AppStyle.padding_r30,
                { borderBottomWidth: 1, borderBottomColor: colorMap.gray[4] }
              ]}
            >
              <View style={[AppStyle.row, AppStyle.center]}>
                <Text
                  style={[
                    AppStyle.font_s15,
                    AppStyle.color_black1,
                    AppStyle.flex1
                  ]}
                  numberOfLines={1}
                >
                  咨询费：患者郭晓华付费咨询华付费咨询
                </Text>
                <Text
                  style={[
                    AppStyle.font_s15,
                    AppStyle.color_blue1,
                    AppStyle.padding_l10
                  ]}
                >
                  +800.00
                </Text>
              </View>
              <Text
                style={[
                  AppStyle.font_s13,
                  AppStyle.color_gray1,
                  AppStyle.padding_t10
                ]}
              >
                2017-8-29 15:24
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_btn_width: {
    width: 70
  }
});
