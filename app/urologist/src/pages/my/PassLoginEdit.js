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

export default class PassPayEdit extends Component {
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
                  登录密码
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
                  placeholder={'请输入您的登录密码'}
                  placeholderTextColor={colorMap.gray[3]}
                  keyboardType="default"
                  defaultValue={''}
                  onChangeText={text => {}}
                  onSubmitEditing={e => {}}
                  onEndEditing={e => {
                    if (e.nativeEvent.text !== '') {
                    }
                  }}
                />
              }
            />
            <ListItem
              style={{ height: 49 }}
              showBorder={true}
              left={
                <Text style={[AppStyle.font_s17, AppStyle.color_black1]}>
                  确认密码
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
                  placeholder={'请确认您的登录密码'}
                  placeholderTextColor={colorMap.gray[3]}
                  keyboardType="default"
                  defaultValue={''}
                  onChangeText={text => {}}
                  onSubmitEditing={e => {}}
                  onEndEditing={e => {
                    if (e.nativeEvent.text !== '') {
                    }
                  }}
                />
              }
            />
          </View>
          <View style={[AppStyle.margin_h12, AppStyle.margin_v25]}>
            <Button title={'提交'} />
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
