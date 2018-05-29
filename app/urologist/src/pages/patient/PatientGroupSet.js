import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Header, Icon, ListItem } from '../../components/Index';
import { AppStyle, styleMap } from '../../styles/Index';

export default class PatientGroupSet extends Component {
  static navigationOptions = { title: '设置备注及分组', header: null };

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
              <Text style={AppStyle.header_btn_text}>取消</Text>
            </TouchableOpacity>
          }
          title={'设置备注及分组'}
          headerRight={
            <TouchableOpacity
              style={[
                AppStyle.row,
                AppStyle.header_btn,
                AppStyle.header_btn_right
              ]}
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Text style={AppStyle.header_btn_text}>完成</Text>
            </TouchableOpacity>
          }
        />

        <ScrollView style={styles.bgWhite}>
          <View style={[AppStyle.flex1, styles.body]}>
            <View style={styles.title}>
              <Text style={styles.title_text}>备注名</Text>
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.input_text}
                underlineColorAndroid="transparent"
                textAlignVertical="center"
                autoFocus={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType="next"
                placeholder={'请输入备注名'}
                placeholderTextColor={styleMap.color_gray3.color}
                keyboardType="default"
                defaultValue={''}
                onChangeText={text => {}}
                onSubmitEditing={e => {}}
                onEndEditing={e => {
                  if (e.nativeEvent.text !== '') {
                  }
                }}
              />
            </View>
            <View style={styles.title}>
              <Text style={styles.title_text}>分组</Text>
            </View>
            <View style={styles.input}>
              <ListItem
                left={
                  <View>
                    <Text style={[{ fontSize: 17 }, styleMap.color_gray3]}>
                      通过分组给患者进行分类管理
                    </Text>
                  </View>
                }
                right={
                  <View>
                    <Icon name={'arrowRight'} style={styles.info_right_icon} />
                  </View>
                }
              />
            </View>
            <View style={styles.title}>
              <Text style={styles.title_text}>电话号码</Text>
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.input_text}
                underlineColorAndroid="transparent"
                textAlignVertical="center"
                autoFocus={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType="next"
                placeholder={'请输入患者手机号码'}
                placeholderTextColor={styleMap.color_gray3.color}
                keyboardType="numeric"
                defaultValue={''}
                onChangeText={text => {}}
                onSubmitEditing={e => {}}
                onEndEditing={e => {
                  if (e.nativeEvent.text !== '') {
                  }
                }}
              />
            </View>
            <View style={styles.title}>
              <Text style={styles.title_text}>描述</Text>
            </View>
            <View style={[styles.input, styles.input_bak]}>
              <TextInput
                style={styles.input_text}
                underlineColorAndroid="transparent"
                textAlignVertical="center"
                autoFocus={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType="done"
                multiline={true}
                placeholder={'添加更多备注信息'}
                placeholderTextColor={styleMap.color_gray3.color}
                keyboardType="default"
                defaultValue={''}
                onChangeText={text => {}}
                onSubmitEditing={e => {}}
                onEndEditing={e => {
                  if (e.nativeEvent.text !== '') {
                  }
                }}
              />
            </View>
            <View style={styles.bgWhite}>
              <TouchableOpacity style={styles.upload_area}>
                <Text style={styles.upload_area_text}>添加名片或相关图片</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgWhite: {
    ...styleMap.bjColor_white0
  },
  body: {
    ...styleMap.bjColor_gray4
  },
  title: {
    height: 39,
    marginLeft: 12,
    justifyContent: 'center'
  },
  title_text: {
    fontSize: 14,
    ...styleMap.color_gray0
  },
  input: {
    ...styleMap.bjColor_white0,
    minHeight: 43,
    justifyContent: 'center'
  },
  input_text: {
    fontSize: 17,
    marginLeft: 13
  },
  input_bak: {
    minHeight: 63,
    borderBottomWidth: 1,
    ...styleMap.bdColor_gray4
  },
  upload_area: {
    height: 150,
    borderRadius: 5,
    borderStyle: 'dashed',
    ...styleMap.bdColor_gray6,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20
  },
  upload_area_text: {
    fontSize: 17,
    ...styleMap.color_gray3
  }
});
