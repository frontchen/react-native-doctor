import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

import { Header, Icon, ListItem, Button } from '../../components/Index';
import { AppStyle, styleMap } from '../../styles/Index';

export default class PatientDetail extends Component {
  static navigationOptions = {
    title: '详细资料',
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
          title={'详细资料'}
          rightStyle={styles.header_btn_width}
          headerRight={
            <TouchableOpacity
              style={[
                AppStyle.row,
                AppStyle.header_btn,
                AppStyle.header_btn_right
              ]}
              onPress={() => {
                this.props.navigation.navigate('PatientEdit', {});
              }}
            >
              <Icon name={'more'} style={AppStyle.header_btn_icon} />
            </TouchableOpacity>
          }
        />

        <ScrollView>
          <View style={styles.list}>
            <ListItem
              left={
                <View>
                  <Image
                    source={{
                      uri:
                        'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                    }}
                    style={styles.info_avatar}
                  />
                </View>
              }
              center={
                <View style={styles.info_pa_center}>
                  <View style={[AppStyle.row, { alignItems: 'center' }]}>
                    <Text style={styles.info_pa_name}>马云</Text>
                    <Icon name={'man'} style={styles.info_pa_sex} />
                  </View>
                  <Text style={styles.info_pa_desc}>13888888888</Text>
                </View>
              }
              right={
                <View style={styles.info_pingbi}>
                  <Icon name={'letter'} style={styles.info_pingbi_icon} />
                  <Icon
                    name={'interdict'}
                    style={[
                      AppStyle.color_red0,
                      AppStyle.font_s12,
                      {
                        position: 'absolute',
                        bottom: 4,
                        right: 3
                      }
                    ]}
                  />
                </View>
              }
            />
          </View>

          <View style={styles.list}>
            <ListItem
              style={styles.info_item}
              onPress={() => {
                this.props.navigation.navigate('PatientGroupSet', {});
              }}
              left={
                <View>
                  <Text style={styles.info_left_title}>设置备注和分组</Text>
                </View>
              }
              right={
                <View>
                  <Icon name={'arrowRight'} style={styles.info_right_icon} />
                </View>
              }
            />
          </View>

          <View style={styles.list}>
            <ListItem
              style={styles.info_item}
              showBorder={true}
              disabled={true}
              left={
                <View>
                  <Text style={styles.info_left_title}>地区及年龄</Text>
                </View>
              }
              center={
                <View style={[AppStyle.row, { alignItems: 'center' }]}>
                  <Text style={styles.info_center_text}>上海</Text>
                  <Text
                    style={[styles.info_center_text, styles.info_center_pl10]}
                  >
                    56岁
                  </Text>
                </View>
              }
            />
            <ListItem
              style={styles.info_item2}
              onPress={() => {
                this.props.navigation.navigate('PatientMedicalHistoryList', {});
              }}
              left={
                <View>
                  <Text style={styles.info_left_title}>TA的病历本</Text>
                </View>
              }
              center={
                <View style={AppStyle.row}>
                  <View>
                    <Image
                      source={{
                        uri:
                          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                      }}
                      style={styles.info_book_image}
                    />
                  </View>
                  <View style={styles.info_center_pl10}>
                    <Image
                      source={{
                        uri:
                          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                      }}
                      style={styles.info_book_image}
                    />
                  </View>
                  <View style={styles.info_center_pl10}>
                    <Image
                      source={{
                        uri:
                          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                      }}
                      style={styles.info_book_image}
                    />
                  </View>
                </View>
              }
              right={
                <View>
                  <Icon name={'arrowRight'} style={styles.info_right_icon} />
                </View>
              }
            />
          </View>

          <View style={styles.list}>
            <ListItem
              style={styles.info_item}
              onPress={() => {}}
              left={
                <View>
                  <Text style={styles.info_left_title}>订单记录</Text>
                </View>
              }
              right={
                <View>
                  <Icon name={'arrowRight'} style={styles.info_right_icon} />
                </View>
              }
            />
          </View>

          <View style={styles.info_btns}>
            <Button style={styles.info_btn1} title={'发私信'} />

            <Button
              style={styles.info_btn2}
              type={'white'}
              color={'#000'}
              title={'打电话'}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_btn_width: {
    width: 80
  },
  list: {
    marginTop: 10
  },
  info_avatar: {
    width: 50,
    height: 50
  },
  info_pa_center: {
    marginLeft: 5
  },
  info_pa_name: {
    fontSize: 17,
    ...styleMap.color_black1
  },
  info_pa_sex: {
    paddingLeft: 10,
    fontSize: 16,
    ...styleMap.color_blue4
  },
  info_pa_desc: {
    paddingTop: 14,
    fontSize: 13,
    ...styleMap.color_gray1
  },
  info_pingbi: {
    paddingRight: 5,
    position: 'relative'
  },
  info_pingbi_icon: {
    fontSize: 30,
    ...styleMap.color_gray2
  },
  info_item: {
    height: 49
  },
  info_item2: {
    height: 88
  },
  info_left_title: {
    fontSize: 16,
    ...styleMap.color_black1
  },
  info_right_icon: {
    fontSize: 15,
    ...styleMap.color_black1
  },
  info_center_text: {
    fontSize: 15,
    ...styleMap.color_gray1
  },
  info_center_pl10: {
    paddingLeft: 10
  },
  info_book_image: {
    width: 51,
    height: 51
  },
  info_btns: {
    paddingHorizontal: 15
  },
  info_btn1: {
    marginTop: 30
  },
  info_btn2: {
    marginTop: 15,
    marginBottom: 115
  }
});
