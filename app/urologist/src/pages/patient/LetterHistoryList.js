import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { Header, Icon, ListItem } from '../../components/Index';
import { AppStyle, styleMap } from '../../styles/Index';

export default class LetterHistoryList extends Component {
  static navigationOptions = {
    title: '查找聊天内容',
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[AppStyle.container, styleMap.bjColor_white0]}>
        <Header
          style={styles.header_main}
          title={'查找聊天内容'}
          showTitle={false}
          headerStyle={styleMap.bjColor_white0}
          statusBarStyle={styleMap.bjColor_white0}
          barStyle={'dark-content'}
          headerCenter={
            <View style={AppStyle.row}>
              <View style={styles.header_center}>
                <Icon
                  name={'search'}
                  style={styles.header_center_search_icon}
                />
                <TextInput
                  style={styles.input_text}
                  underlineColorAndroid="transparent"
                  textAlignVertical="center"
                  autoFocus={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType="done"
                  multiline={true}
                  placeholder={'搜索'}
                  placeholderTextColor={styleMap.color_gray2.color}
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
              <TouchableOpacity
                style={styles.header_center_cancel}
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              >
                <Text style={styles.header_center_cancel_text}>取消</Text>
              </TouchableOpacity>
            </View>
          }
        />
        <View style={[AppStyle.center, styles.letter_search_body]}>
          <Image
            source={require('../../assets/images/pic_sou1.png')}
            style={styles.letter_search_loadImg}
          />
          <View style={styles.letter_search_loadMsg}>
            <Text style={styles.letter_search_loadText}>
              输入您需要查找的信息搜索
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_main: {
    borderBottomWidth: 1,
    ...styleMap.bdColor_gray4,
    paddingVertical: 8
  },
  header_center: {
    flexDirection: 'row',
    marginLeft: 12,
    paddingLeft: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    height: 34,
    ...styleMap.bjColor_gray4
  },
  header_center_search_icon: {
    fontSize: 20,
    ...styleMap.color_gray2
  },
  header_center_cancel: {
    width: 54,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header_center_cancel_text: {
    fontSize: 16,
    ...styleMap.color_blue0
  },
  letter_search_body: {
    marginTop: 125
  },
  letter_search_loadImg: {
    width: 80,
    height: 80
  },
  letter_search_loadMsg: {
    marginTop: 20
  },
  letter_search_loadText: {
    fontSize: 14,
    ...styleMap.color_gray12
  },
  input_text: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    marginLeft: 6,
    fontSize: 17,
    ...styleMap.color_black1,
    justifyContent: 'center',
    textAlignVertical: 'center'
  }
});
