import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  PixelRatio,
  Alert,
  Linking,
  TouchableOpacity
} from 'react-native';

import CodeInput from 'react-native-confirmation-code-input';

import { Header, Icon, ListItem, Button } from '../../components/Index';
import { AppStyle, colorMap, screenWidth } from '../../styles/Index';

export default class WalletCode extends Component {
  static navigationOptions = { title: '填写验证码', header: null };

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
          title={'填写验证码'}
        />
        <ScrollView>
          <View style={[AppStyle.bjColor_white0, AppStyle.padding_h15]}>
            <View style={{ alignItems: 'center' }}>
              <Text
                style={[
                  AppStyle.font_s18,
                  AppStyle.color_black1,
                  AppStyle.padding_t25
                ]}
              >
                我们已将 <Text style={AppStyle.color_blue1}>验证码</Text>{' '}
                发送到您的手机
              </Text>
              <View style={AppStyle.margin_t6}>
                <Text
                  style={[
                    AppStyle.font_s18,
                    AppStyle.color_black1,
                    AppStyle.padding_v0
                  ]}
                >
                  176******20
                </Text>
              </View>
              <CodeInput
                codeLength={6}
                inputPosition={'center'}
                space={15}
                size={(screenWidth - 15 * 6 - 15 * 2) / 6}
                className={'border-box'}
                activeColor={colorMap.black[1]}
                inactiveColor={colorMap.black[1]}
                codeInputStyle={AppStyle.font_s20}
                keyboardType={'numeric'}
                onFulfill={code => {
                  console.warn(code);
                }}
              />
            </View>
            <View style={[AppStyle.margin_t15, AppStyle.margin_b25]}>
              <ListItem
                onPress={() => {
                  Alert.alert('提示信息', '您是否要拨打客服电话', [
                    {
                      text: '取消',
                      onPress: () => {}
                    },
                    {
                      text: '确定',
                      onPress: () => {
                        Linking.openURL(`tel:${App.Config.tel}`).catch(e => {});
                      }
                    }
                  ]);
                }}
                style={[styles.member_item]}
                left={
                  <Text
                    style={[
                      styles.member_item_title,
                      AppStyle.font_s12,
                      AppStyle.color_blue1
                    ]}
                  >
                    联系客服
                  </Text>
                }
                right={
                  <Text
                    style={[
                      styles.member_item_title,
                      AppStyle.font_s12,
                      AppStyle.color_gray1
                    ]}
                  >
                    59秒后重发
                  </Text>
                }
              />
            </View>
          </View>
          <View style={[AppStyle.margin_h12, AppStyle.margin_v25]}>
            <Button
              onPress={() => {
                this.props.navigation.navigate('PassPayConfirm', {});
              }}
              title={'下一步'}
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
  }
});
