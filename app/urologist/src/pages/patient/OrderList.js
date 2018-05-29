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

import ScrollableTabView from 'react-native-scrollable-tab-view';

import { Header, Icon, ListItem } from '../../components/Index';
import { AppStyle, styleMap } from '../../styles/Index';

export default class OrderList extends Component {
  static navigationOptions = { title: '患者咨询记录', header: null };

  constructor(props) {
    super(props);

    this.listData = [
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '马云',
        time: '2018-01-23 10:00~11:00',
        pj: 1,
        desc: '前列腺炎，尿频尿急怎么办？',
        price: '800.00'
      },
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '刘强东',
        time: '2018-01-23 10:00~11:00',
        pj: 0,
        desc:
          '晚上睡眠质量比较差，经常上厕所，很难入眠。晚上睡眠质量比较差，经常上厕所，很难入眠。',
        price: '800.00'
      },
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '马云',
        time: '2018-01-23 10:00~11:00',
        pj: 1,
        desc: '前列腺炎，尿频尿急怎么办？',
        price: '800.00'
      }
    ];
  }

  _renderList(item, index) {
    return (
      <TouchableOpacity
        key={`orderlist-${index}`}
        style={styles.order_item}
        onPress={() => {
          this.props.navigation.navigate('OrderDetail', {});
        }}
      >
        <View style={[AppStyle.row, styles.order_time]}>
          <View style={{ flex: 5 }}>
            <Text
              numberOfLines={1}
              style={[{ fontSize: 15 }, styleMap.color_black1]}
            >
              预约时间：{item.time}
            </Text>
          </View>
          <View style={{ flex: 2, alignItems: 'flex-end' }}>
            <Text style={[{ fontSize: 13 }, styleMap.color_blue1]}>
              {item.pj == 1 ? '查看评价' : '未评价'}
            </Text>
          </View>
        </View>
        <View
          style={[
            AppStyle.row,
            { paddingHorizontal: 12, height: 75, alignItems: 'center' }
          ]}
        >
          <View>
            <Image
              source={{ uri: item.image }}
              style={{ width: 40, height: 40, borderRadius: 5 }}
            />
          </View>
          <View style={{ marginLeft: 15, flex: 1 }}>
            <View style={[AppStyle.row]}>
              <View style={AppStyle.flex1}>
                <Text style={[{ fontSize: 15 }, styleMap.color_black1]}>
                  预约人：{item.name}
                </Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text
                  style={[
                    {
                      fontSize: 13,
                      fontWeight: 'bold'
                    },
                    styleMap.color_black1
                  ]}
                >
                  ¥ {item.price}
                </Text>
              </View>
            </View>
            <Text
              numberOfLines={1}
              style={[{ marginTop: 10, fontSize: 16 }, styleMap.color_gray1]}
            >
              {item.desc}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    let list = this.listData.map((v, i) => {
      return this._renderList(v, i);
    });

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
              <Icon name={'arrowLeft'} style={AppStyle.header_btn_icon} />
            </TouchableOpacity>
          }
          title={'患者咨询记录'}
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
              <Icon name={'date'} style={AppStyle.header_btn_icon} />
            </TouchableOpacity>
          }
        />
        <ScrollableTabView
          tabBarBackgroundColor={styleMap.color_white0.color}
          tabBarActiveTextColor={styleMap.color_blue1.color}
          tabBarInactiveTextColor={styleMap.color_gray1.color}
          tabBarTextStyle={{ fontSize: 15 }}
          tabBarUnderlineStyle={[{ bottom: -1 }, styleMap.bjColor_blue1]}
          style={{ borderBottomColor: styleMap.color_gray10.color }}
          prerenderingSiblingsNumber={Infinity}
          scrollWithoutAnimation={false}
        >
          <View tabLabel="全部" style={[AppStyle.flex1, AppStyle.center]}>
            <View>
              <Image
                source={require('../../assets/images/pic_data.png')}
                style={{ width: 100, height: 100 }}
              />
              <Text
                style={[
                  { fontSize: 15, marginTop: 15, textAlign: 'center' },
                  styleMap.color_gray1
                ]}
              >
                暂无记录
              </Text>
            </View>
          </View>
          <View tabLabel="已评价" style={AppStyle.flex1}>
            {list}
          </View>
          <View tabLabel="未评价" style={AppStyle.flex1}>
            {list}
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  order_item: {
    ...styleMap.bjColor_white0,
    marginBottom: 10
  },
  order_time: {
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: styleMap.color_gray10.color,
    alignItems: 'center',
    paddingHorizontal: 12
  }
});
