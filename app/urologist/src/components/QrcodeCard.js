import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { AppStyle, styleMap } from '../styles/Index';

export default class QrcodeCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.qrcode}>
          <View style={AppStyle.row}>
            <View>
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={styles.qrcode_avatar}
              />
            </View>
            <View>
              <Text style={styles.qrcode_name}>医生姓名</Text>
              <Text style={styles.qrcode_desc}>
                上海市第一人民医院 泌尿外科
              </Text>
            </View>
          </View>
          <View style={styles.qrcode_code}>
            <Image
              source={{
                uri:
                  'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=fa9140accd95d143ce7bec711299e967/2934349b033b5bb571dc8c5133d3d539b600bc12.jpg'
              }}
              style={styles.qrcode_code_image}
            />
          </View>
          <View style={styles.qrcode_mark}>
            <Text style={styles.qrcode_mark_text}>
              扫一扫上面的二维码即可与我建立联系哦
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  qrcode: {
    ...styleMap.bjColor_white0,
    paddingHorizontal: 24,
    borderRadius: 5
  },
  qrcode_avatar: {
    width: 65,
    height: 65,
    marginTop: 24,
    marginRight: 10,
    borderRadius: 5
  },
  qrcode_name: {
    fontSize: 16,
    ...styleMap.color_black,
    marginTop: 32
  },
  qrcode_desc: {
    marginTop: 16,
    fontSize: 12,
    ...styleMap.color_gray2
  },
  qrcode_code: {
    marginTop: 42,
    alignItems: 'center'
  },
  qrcode_code_image: {
    width: 220,
    height: 220,
    borderRadius: 5
  },
  qrcode_mark: {
    marginTop: 65,
    marginBottom: 25,
    alignItems: 'center'
  },
  qrcode_mark_text: {
    fontSize: 11,
    ...styleMap.color_gray2
  }
});
