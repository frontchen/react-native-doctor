import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Switch
} from 'react-native';

import { Header, Icon, ListItem } from '../../components/Index';
import { AppStyle, styleMap, colorMap } from '../../styles/Index';

export default class ImDetailDoctorinfo extends Component {
  static navigationOptions = {
    title: '聊天详情',
    header: null
  };

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
              <Text style={AppStyle.header_btn_text}>返回</Text>
            </TouchableOpacity>
          }
          title={'聊天详情'}
        />

        <ScrollView>
          <ListItem
            style={styles.info_item_first}
            disabled={true}
            left={
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={styles.info_avatar}
              />
            }
          />

          <ListItem
            style={styles.info_item}
            onPress={() => {}}
            left={
              <Text style={[AppStyle.font_s16, AppStyle.color_black1]}>
                查找聊天内容
              </Text>
            }
            right={
              <Icon
                name={'arrowRight'}
                style={[AppStyle.font_s15, AppStyle.color_black1]}
              />
            }
          />

          <ListItem
            style={styles.info_item1}
            disabled={true}
            center={
              <View style={styles.info_item_view}>
                <Text style={[AppStyle.font_s16, AppStyle.color_black1]}>
                  置顶聊天
                </Text>
              </View>
            }
            right={
              <View style={[styles.info_item_view, AppStyle.padding_r12]}>
                <Switch value={true} onTintColor={colorMap.blue[1]} />
              </View>
            }
          />
          <ListItem
            style={styles.info_item2}
            disabled={true}
            onPress={() => {}}
            left={
              <View>
                <Text style={[AppStyle.font_s16, AppStyle.color_black1]}>
                  消息免打扰
                </Text>
              </View>
            }
            right={
              <View>
                <Switch
                  value={false}
                  onTintColor={styleMap.color_blue1.color}
                />
              </View>
            }
          />

          <ListItem
            style={styles.info_item}
            onPress={() => {}}
            left={
              <Text style={[AppStyle.font_s16, AppStyle.color_black1]}>
                清空聊天记录
              </Text>
            }
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_btn_width: {
    width: 70
  },
  info_item_first: {
    height: 80,
    marginTop: 10
  },
  info_avatar: {
    width: 50,
    height: 50
  },
  info_item: {
    height: 49,
    marginTop: 10
  },
  info_item1: {
    height: 49,
    marginTop: 10,
    paddingHorizontal: 0,
    marginLeft: 2
  },
  info_item2: {
    height: 49
  },
  info_item_view: {
    height: 49,
    borderBottomWidth: 1,
    borderBottomColor: colorMap.gray[4],
    justifyContent: 'center'
  }
});
