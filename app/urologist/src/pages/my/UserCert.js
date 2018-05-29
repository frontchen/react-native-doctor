import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import { Header, Icon, ListItem, Button } from '../../components/Index';
import { AppStyle, colorMap } from '../../styles/Index';

var { height, width } = Dimensions.get('window');

export default class UserCert extends Component {
  static navigationOptions = { title: '身份认证', header: null };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={AppStyle.container}>
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
          title={'身份认证'}
        />

        <ScrollView>
          <View style={AppStyle.center}>
            <View style={[AppStyle.bjColor_blue1, AppStyle.padding_t10]}>
              <Image
                source={require('../../assets/images/pic_identity.png')}
                style={[{ height: 140, resizeMode: 'contain' }]}
              />
              <Text
                style={[
                  AppStyle.padding_t20,
                  AppStyle.padding_b23,
                  AppStyle.font_s16,
                  AppStyle.color_white0,
                  { textAlign: 'center' }
                ]}
              >
                请上传您手持本人医师资格证的照片
              </Text>
            </View>
            <View style={[{ marginHorizontal: 48, marginTop: 37 }]}>
              <Image
                source={require('../../assets/images/pic_camera.png')}
                style={{
                  width: width - 48 * 2,
                  height: (width - 48 * 2) * 0.6,
                  resizeMode: 'contain'
                }}
              />
              <Text
                style={[
                  AppStyle.padding_v25,
                  AppStyle.font_s12,
                  AppStyle.color_gray1,
                  { lineHeight: 16 }
                ]}
              >
                证书信息及五官要清晰可见，如有模糊、反光、太暗、遮挡，则无法审核通过哦。
              </Text>
            </View>
          </View>
          <View style={[AppStyle.margin_h12, AppStyle.margin_b30]}>
            <Button title={'认证并提及审核'} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_btn_width: {
    width: 60
  }
});
