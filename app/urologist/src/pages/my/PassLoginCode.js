import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
  TextInput,
  Linking,
  Alert
} from 'react-native';

import { Header, Icon, ListItem, Button } from '../../components/Index';
import { AppStyle, colorMap } from '../../styles/Index';

export default class PassLoginCode extends Component {
  static navigationOptions = { title: '修改登录密码', header: null };

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
          title={'修改登录密码'}
        />
        <ScrollView>
          <View style={[AppStyle.margin_t10, AppStyle.bjColor_white0]}>
            <ListItem
              disabled={true}
              showBorder={true}
              style={{ height: 49 }}
              left={
                <Text style={[AppStyle.font_s17, AppStyle.color_black1]}>
                  手机号
                </Text>
              }
              center={
                <TextInput
                  style={[AppStyle.font_s18, AppStyle.color_black1]}
                  underlineColorAndroid="transparent"
                  textAlignVertical="center"
                  autoFocus={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType="done"
                  placeholder={'150****0532'}
                  placeholderTextColor={colorMap.gray[3]}
                  keyboardType="numeric"
                  defaultValue={''}
                  onChangeText={text => {}}
                  onSubmitEditing={e => {}}
                  onEndEditing={e => {
                    if (e.nativeEvent.text !== '') {
                    }
                  }}
                />
              }
              right={
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(
                      '提示',
                      '该手机号为账号注册时等手机号码，如需修改请联系客服',
                      [
                        { text: '取消', onPress: () => {} },
                        {
                          text: '联系客服',
                          onPress: () => {
                            Linking.openURL(`tel:${App.Config.tel}`).catch(
                              e => {}
                            );
                          }
                        }
                      ]
                    );
                  }}
                >
                  <Icon
                    name={'plaint'}
                    style={[AppStyle.font_s22, AppStyle.color_gray0]}
                  />
                </TouchableOpacity>
              }
            />
            <ListItem
              style={{ height: 49 }}
              showBorder={true}
              left={
                <Text style={[AppStyle.font_s17, AppStyle.color_black1]}>
                  验证码
                </Text>
              }
              center={
                <TextInput
                  style={[AppStyle.font_s16, AppStyle.color_black1]}
                  underlineColorAndroid="transparent"
                  textAlignVertical="center"
                  autoFocus={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType="done"
                  placeholder={'请输入您收到的验证码'}
                  placeholderTextColor={colorMap.gray[3]}
                  keyboardType="numeric"
                  defaultValue={''}
                  onChangeText={text => {}}
                  onSubmitEditing={e => {}}
                  onEndEditing={e => {
                    if (e.nativeEvent.text !== '') {
                    }
                  }}
                />
              }
              right={
                <Button
                  style={[
                    AppStyle.padding_h5,
                    AppStyle.bjColor_white0,
                    { height: 35 }
                  ]}
                  title={'获取验证码'}
                  color={colorMap.blue[1]}
                  borderColor={colorMap.blue[1]}
                  fontSize={16}
                />
              }
            />
            <View
              style={[AppStyle.row, AppStyle.padding_v20, AppStyle.padding_h12]}
            >
              <Text style={[AppStyle.font_s14, AppStyle.color_gray1]}>
                手机不在身边，请拨打
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`tel:${App.Config.tel}`).catch(e => {});
                }}
              >
                <Text style={[AppStyle.font_s14, AppStyle.color_blue1]}>
                  客服电话
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[AppStyle.margin_h12, AppStyle.margin_v25]}>
            <Button
              onPress={() => {
                this.props.navigation.navigate('PassLoginEdit', {});
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
