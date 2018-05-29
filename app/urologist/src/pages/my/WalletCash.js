import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { Header, Icon, ListItem, Button } from '../../components/Index';
import { AppStyle, colorMap } from '../../styles/Index';

export default class WalletCash extends Component {
  static navigationOptions = { title: '提现', header: null };

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
            </TouchableOpacity>
          }
          title={'提现'}
        />

        <ScrollView>
          <View style={[AppStyle.margin_t10, AppStyle.bjColor_white0]}>
            <ListItem
              style={styles.cash_item}
              showBorder={true}
              left={
                <Text style={[AppStyle.font_16, AppStyle.color_black1]}>
                  提现账户
                </Text>
              }
            />
            <ListItem
              style={styles.cash_item}
              showBorder={true}
              left={
                <Text style={[AppStyle.font_15, AppStyle.color_black1]}>
                  银行卡
                </Text>
              }
              center={
                <Text
                  numberOfLines={1}
                  style={[
                    AppStyle.font_12,
                    AppStyle.color_gray1,
                    AppStyle.marin_l18
                  ]}
                >
                  6222 0213 **** 4502 562
                </Text>
              }
              right={
                <Button
                  onPress={() => {
                    this.props.navigation.navigate('WalletBankList', {});
                  }}
                  title={'更换'}
                  fontSize={12}
                  color={colorMap.blue[1]}
                  borderColor={colorMap.blue[1]}
                  style={[
                    AppStyle.margin_l10,
                    {
                      width: 48,
                      height: 24,
                      backgroundColor: colorMap.white[0]
                    }
                  ]}
                />
              }
            />
          </View>

          <View style={[AppStyle.margin_t10, AppStyle.bjColor_white0]}>
            <ListItem
              style={styles.cash_item}
              left={
                <Text style={[AppStyle.font_16, AppStyle.color_black1]}>
                  提现金额
                </Text>
              }
            />
            <ListItem
              style={[styles.cash_item, AppStyle.margin_l20]}
              showBorder={true}
              center={
                <View style={[AppStyle.row, { alignItems: 'flex-end' }]}>
                  <Text
                    style={[
                      AppStyle.font_16,
                      AppStyle.color_black1,
                      AppStyle.padding_b6
                    ]}
                  >
                    ¥
                  </Text>
                  <TextInput
                    style={[
                      AppStyle.flex1,
                      AppStyle.font_s36,
                      AppStyle.margin_l6
                    ]}
                    underlineColorAndroid="transparent"
                    textAlignVertical="bottom"
                    autoFocus={false}
                    returnKeyType="done"
                    placeholder={''}
                    placeholderTextColor={colorMap.gray[3]}
                    keyboardType="numeric"
                    defaultValue={'3182.00'}
                    onChangeText={text => {
                      this.setState({ currentNum: text.length });
                    }}
                    onSubmitEditing={e => {}}
                    onEndEditing={e => {
                      if (e.nativeEvent.text !== '') {
                      }
                    }}
                  />
                </View>
              }
            />
            <ListItem
              style={styles.cash_item}
              left={
                <View style={[AppStyle.row, AppStyle.center]}>
                  <Text style={[AppStyle.font_16, AppStyle.color_gray1]}>
                    可提现金额：
                  </Text>
                  <Text
                    style={[
                      AppStyle.font_16,
                      AppStyle.color_gary1,
                      AppStyle.padding_h5
                    ]}
                  >
                    ¥ 3182.00，
                  </Text>
                  <Text style={[AppStyle.font_16, AppStyle.color_blue1]}>
                    全部提现
                  </Text>
                </View>
              }
            />
          </View>

          <View
            style={[
              AppStyle.padding_l30,
              AppStyle.padding_r20,
              AppStyle.padding_v15
            ]}
          >
            <Text style={[AppStyle.font_s12, AppStyle.color_black2]}>
              提现规则：
            </Text>
            <Text
              style={[
                AppStyle.font_s12,
                AppStyle.color_gray1,
                AppStyle.padding_t5
              ]}
            >
              1、只有可提现余额可以提取；
            </Text>
            <Text
              style={[
                AppStyle.font_s12,
                AppStyle.color_gray1,
                AppStyle.padding_t5
              ]}
            >
              2、当月所有提现统一次月5-10号到账；
            </Text>
            <Text
              style={[
                AppStyle.font_s12,
                AppStyle.color_gray1,
                AppStyle.padding_t5
              ]}
            >
              3、请务必保证您的提现银行卡所属姓名与填写姓名一致。
            </Text>
          </View>
          <Button
            onPress={() => {
              this.props.navigation.navigate('WalletResult', {});
            }}
            style={[AppStyle.margin_l30, AppStyle.margin_r20]}
            title={'立即申请提现'}
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
  cash_item: {
    minHeight: 49,
    paddingHorizontal: 0,
    marginLeft: 30,
    paddingRight: 20
  }
});
