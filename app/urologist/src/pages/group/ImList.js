import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Header, Icon, ListItem, SearchBar } from '../../components/Index';
import { AppStyle, colorMap } from '../../styles/Index';

export default class ImList extends Component {
  static navigationOptions = {
    title: '消息',
    header: null
  };

  constructor(props) {
    super(props);

    this.listData = [
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '互联网',
        desc:
          '夏老师，您好，我的手术安排能否提前夏老师，您好，我的手术安排能否提前',
        date: '下午 2:29'
      },
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '互联网',
        desc: '夏老师，您好，我的手术安排能否提前',
        date: '昨天'
      },
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '互联网',
        desc: '夏老师，您好，我的手术安排能否提前',
        date: '星期四'
      },
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '互联网',
        desc: '夏老师，您好，我的手术安排能否提前',
        date: '2018/2/16'
      },
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '互联网',
        desc: '夏老师，您好，我的手术安排能否提前',
        date: '2018/2/16'
      },
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '互联网',
        desc: '夏老师，您好，我的手术安排能否提前',
        date: '2018/2/16'
      }
    ];
  }

  _renderList(item, index) {
    return (
      <ListItem
        key={`imList-${index}`}
        style={styles.im_item}
        onPress={() => {
          this.props.navigation.navigate('ImDetail', {});
        }}
        left={
          <View style={styles.im_item_left}>
            <Image source={{ uri: item.image }} style={styles.im_item_avatar} />
            <View style={[styles.im_item_new, AppStyle.bjColor_red0]} />
          </View>
        }
        center={
          <View style={[AppStyle.margin_l6, styles.im_item_center]}>
            <View style={AppStyle.row}>
              <Text
                style={[
                  AppStyle.font_s16,
                  AppStyle.flex1,
                  AppStyle.color_black1
                ]}
              >
                {item.name}
              </Text>
              <Text style={[AppStyle.font_s12, AppStyle.color_gray1]}>
                {item.date}
              </Text>
            </View>
            <Text
              numberOfLines={1}
              style={[
                AppStyle.font_s13,
                AppStyle.padding_t8,
                AppStyle.color_gray1
              ]}
            >
              {item.desc}
            </Text>
          </View>
        }
      />
    );
  }

  render() {
    let list = this.listData.map((v, i) => {
      return this._renderList(v, i);
    });

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
              <Text style={AppStyle.header_btn_text}>专家团</Text>
            </TouchableOpacity>
          }
          title={'消息'}
        />

        <View>
          <ScrollView>
            <SearchBar />

            <View>{list}</View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_btn_width: {
    width: 85
  },
  im_item: {
    height: 68,
    paddingVertical: 0,
    paddingRight: 0
  },
  im_item_left: {
    position: 'relative'
  },
  im_item_center: {
    height: 68,
    borderBottomWidth: 1,
    borderBottomColor: colorMap.gray[4],
    justifyContent: 'center',
    paddingRight: 12
  },
  im_item_avatar: {
    width: 50,
    height: 50,
    borderRadius: 4
  },
  im_item_new: {
    position: 'absolute',
    right: -3,
    top: -3,
    width: 10,
    height: 10,
    borderRadius: 5
  }
});
