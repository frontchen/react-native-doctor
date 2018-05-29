import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  PixelRatio,
  TouchableOpacity
} from 'react-native';

import CodeInput from 'react-native-confirmation-code-input';

import { Header, Icon, ListItem, Button } from '../../components/Index';
import { AppStyle, colorMap, screenWidth } from '../../styles/Index';

export default class PassPayEdit extends Component {
  static navigationOptions = { title: '安全密码', header: null };

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
          title={'安全密码'}
        />
        <ScrollView>
          <View style={[AppStyle.bjColor_white0, AppStyle.padding_h15]}>
            <View style={{ alignItems: 'center' }}>
              <Text
                style={[
                  AppStyle.font_s16,
                  AppStyle.color_black1,
                  AppStyle.padding_v25
                ]}
              >
                设置六位数字支付密码
              </Text>
              <CodeInput
                codeLength={6}
                inputPosition={'center'}
                secureTextEntry
                className={'border-b'}
                space={15}
                size={(screenWidth - 15 * 6 - 15 * 2) / 6}
                activeColor={colorMap.black[1]}
                inactiveColor={colorMap.black[1]}
                codeInputStyle={AppStyle.font_s20}
                onFulfill={code => {
                  console.warn(code);
                }}
              />
            </View>
            <View style={[AppStyle.margin_t15, AppStyle.margin_b25]}>
              <Text style={[AppStyle.font_s12, AppStyle.color_blue1]}>
                *安全密码将在提现等与我的钱包相关操作中使用。
              </Text>
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
