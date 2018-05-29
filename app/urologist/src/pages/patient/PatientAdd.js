import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Header, Icon, ListItem } from '../../components/Index';
import { AppStyle, styleMap } from '../../styles/Index';

export default class PatientAdd extends Component {
  static navigationOptions = {
    title: '添加患者',
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={AppStyle.container}>
        <Header
          leftStyle={styles.header_btn_width}
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
              <Text style={AppStyle.header_btn_text}>患者录</Text>
            </TouchableOpacity>
          }
          title={'添加患者'}
          rightStyle={styles.header_btn_width}
        />

        <View style={styles.main}>
          <ListItem
            showBorder={true}
            onPress={() => {
              this.props.navigation.navigate('PatientAddByQrcode', {});
            }}
            left={
              <View style={styles.pa_left}>
                <Icon name={'qrcode'} style={styles.pa_left_icon} />
              </View>
            }
            center={
              <View style={styles.pa_center}>
                <Text style={styles.pa_center_title}>我的二维码</Text>
                <Text style={styles.pa_center_desc}>
                  患者用微信扫一扫，与我建立联系
                </Text>
              </View>
            }
            right={<Icon name={'arrowRight'} style={styles.pa_right_icon} />}
          />
          <ListItem
            onPress={() => {
              this.props.navigation.navigate('PatientAddByPhone', {});
            }}
            left={
              <View style={[styles.pa_left, styles.pa_left_phone]}>
                <Icon name={'phoneAdd'} style={styles.pa_left_icon} />
              </View>
            }
            center={
              <View style={styles.pa_center}>
                <Text style={styles.pa_center_title}>手机号加患者</Text>
                <Text style={styles.pa_center_desc}>
                  输入手机号，加入我的患者录
                </Text>
              </View>
            }
            right={<Icon name={'arrowRight'} style={styles.pa_right_icon} />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_btn_width: {
    width: 80
  },
  main: {
    marginTop: 10
  },
  pa_left: {
    width: 37,
    height: 37,
    ...styleMap.bjColor_blue3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pa_left_phone: {
    ...styleMap.bjColor_green0
  },
  pa_left_icon: {
    fontSize: 22,
    ...styleMap.color_white0
  },
  pa_center_title: {
    fontSize: 16,
    ...styleMap.color_black0,
    marginBottom: 8
  },
  pa_center_desc: {
    fontSize: 13,
    ...styleMap.color_gray2
  },
  pa_right_icon: {
    fontSize: 15,
    ...styleMap.color_gray2,
    fontWeight: 'bold'
  }
});
