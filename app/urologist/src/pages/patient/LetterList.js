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
import { AppStyle, styleMap } from '../../styles/Index';

export default class LetterList extends Component {
  static navigationOptions = { title: '留言', header: null };

  constructor(props) {
    super(props);

    this.listData = [
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '互联网',
        desc: '夏老师，您好，我的手术安排能否提前',
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
        key={`letter-lsit-${index}`}
        onPress={() => {
          this.props.navigation.navigate('LetterDetail', {});
        }}
        showBorder={true}
        left={
          <View style={{ position: 'relative' }}>
            <Image source={{ uri: item.image }} style={styles.letter_avatar} />
            <View
              style={[
                {
                  position: 'absolute',
                  right: -3,
                  top: -3,
                  width: 10,
                  height: 10,
                  borderRadius: 5
                },
                styleMap.bjColor_red0
              ]}
            />
          </View>
        }
        center={
          <View style={{ paddingLeft: 5 }}>
            <View style={AppStyle.row}>
              <Text style={[{ fontSize: 16, flex: 1 }, styleMap.color_black1]}>
                {item.name}
              </Text>
              <Text style={[{ fontSize: 12 }, styleMap.color_gray1]}>
                {item.date}
              </Text>
            </View>
            <Text
              numberOfLines={1}
              style={[{ fontSize: 13, paddingTop: 10 }, styleMap.color_gray1]}
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
          title={'留言'}
          rightStyle={styles.header_btn_width}
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
    width: 80
  },
  letter_avatar: {
    width: 50,
    height: 50,
    borderRadius: 4
  }
});
