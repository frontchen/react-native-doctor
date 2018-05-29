import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  SectionList
} from 'react-native';

import { Header, Icon, SearchBar, ListItem } from '../../components/Index';
import { AppStyle } from '../../styles/Index';

export default class GroupIndex extends Component {
  static navigationOptions = {
    title: '专家团',
    header: null,
    headerBackTitle: null,
    headerTitleStyle: { alignSelf: 'center' },
    tabBarIcon: ({ focused, tintColor }) => {
      return (
        <Icon
          name={focused ? 'groupActive' : 'group'}
          style={{ fontSize: 26, color: tintColor }}
        />
      );
    }
  };

  constructor(props) {
    super(props);

    this.groupList = [
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '前列腺炎专家团'
      },
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '前列腺炎专家团'
      }
    ];
  }

  // 我加入的专家团
  _renderList = (item, index) => {
    return (
      <ListItem
        key={`ImDetail-${index}`}
        style={[styles.message]}
        showBorder={true}
        onPress={() => {
          this.props.navigation.navigate('ImDetail', {});
        }}
        left={
          <View style={[styles.message_left]}>
            <View
              style={[
                AppStyle.center,
                AppStyle.bjColor_blue2,
                styles.message_left_icon
              ]}
            >
              <Image
                source={{
                  uri: item.image
                }}
                style={styles.group_img}
              />
            </View>
          </View>
        }
        center={
          <View>
            <Text style={[AppStyle.font_s17, AppStyle.color_black2]}>
              {item.name}
            </Text>
          </View>
        }
      />
    );
  };
  //全部专家--医生
  _renderItem = info => {
    var txt = '' + info.item.title;
    var img = '' + info.item.image;

    return (
      <ListItem
        key={`ImDetailGroupinfo-${info.item.index}`}
        onPress={() => {
          this.props.navigation.navigate('ImDetailGroupinfo', {});
        }}
        style={[styles.message]}
        showBorder={true}
        left={
          <View style={[styles.message_left]}>
            <View
              style={[
                AppStyle.center,
                AppStyle.bjColor_blue2,
                styles.message_left_icon
              ]}
            >
              <Image
                source={{
                  uri: img
                }}
                style={styles.group_img}
              />
            </View>
          </View>
        }
        center={
          <View>
            <Text style={[AppStyle.font_s17, AppStyle.color_black2]}>
              {txt}
            </Text>
          </View>
        }
      />
    );
  };
  //全部专家--地区
  _sectionComp = info => {
    var txt = info.address;
    return (
      <View style={AppStyle.bjColor_white0}>
        <Text
          style={[AppStyle.padding_l12, AppStyle.padding_v5, AppStyle.font_s17]}
        >
          {txt}
        </Text>
      </View>
    );
  };

  render() {
    let list = this.groupList.map((v, i) => {
      return this._renderList(v, i);
    });

    let sections = [
      {
        address: '上海',
        data: [
          {
            index: 0,
            image:
              'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
            title: '阿童木'
          },
          {
            index: 1,
            image:
              'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
            title: '阿玛尼'
          },
          {
            index: 2,
            image:
              'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
            title: '爱多多'
          }
        ]
      },
      {
        address: '北京',
        data: [
          {
            index: 0,
            image:
              'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
            title: '表哥'
          },
          {
            index: 1,
            image:
              'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
            title: '贝贝'
          },
          {
            index: 2,
            image:
              'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
            title: '表弟'
          },
          {
            index: 3,
            image:
              'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
            title: '表姐'
          },
          {
            index: 4,
            image:
              'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
            title: '表叔'
          }
        ]
      },
      {
        address: '广东',
        data: [
          {
            index: 0,
            image:
              'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
            title: '成吉思汗'
          },
          {
            index: 1,
            image:
              'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
            title: '超市快递'
          }
        ]
      },
      {
        address: '江西',
        data: [
          {
            index: 0,
            image:
              'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
            title: '王磊'
          },
          {
            index: 1,
            image:
              'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
            title: '王者荣耀'
          },
          {
            index: 2,
            image:
              'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
            title: '往事不能回味'
          },
          {
            index: 3,
            image:
              'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
            title: '王小磊'
          },
          {
            index: 4,
            image:
              'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
            title: '王中磊'
          },
          {
            index: 5,
            image:
              'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
            title: '王大磊'
          }
        ]
      }
    ];

    return (
      <View style={AppStyle.container}>
        <Header title={'专家团'} />
        <ScrollView>
          <SearchBar />

          <ListItem
            style={[styles.message]}
            onPress={() => {
              this.props.navigation.navigate('ImList', {});
            }}
            left={
              <View style={[styles.message_left]}>
                <View
                  style={[
                    AppStyle.center,
                    AppStyle.bjColor_blue2,
                    styles.message_left_icon
                  ]}
                >
                  <Icon
                    name={'message'}
                    style={[AppStyle.font_s20, AppStyle.color_white0]}
                  />
                </View>
                <View style={[styles.message_new, AppStyle.bjColor_red0]} />
              </View>
            }
            center={
              <View>
                <Text style={[AppStyle.font_s16, AppStyle.color_black1]}>
                  消息
                </Text>
              </View>
            }
          />
          <Text style={[AppStyle.margin_l12, AppStyle.padding_v5]}>
            我加入的专家团
          </Text>
          <View>{list}</View>
          <Text style={[AppStyle.margin_l12, AppStyle.padding_v5]}>
            全部专家
          </Text>
          <View style={AppStyle.flex1}>
            <SectionList
              keyExtractor={(item, index) => {
                return index;
              }}
              renderSectionHeader={({ section }) => {
                return this._sectionComp(section);
              }}
              renderItem={this._renderItem}
              sections={sections}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  message: {
    height: 55
  },
  message_left: {
    position: 'relative'
  },
  group_img: {
    height: 50,
    width: 50
  },
  message_left_icon: {
    width: 36,
    height: 36
  },
  message_new: {
    position: 'absolute',
    right: -3,
    top: -3,
    width: 10,
    height: 10,
    borderRadius: 5
  }
});
