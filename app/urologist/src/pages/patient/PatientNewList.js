import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import RootSiblings from 'react-native-root-siblings';

import { Header, Icon, ListItem, SearchBar } from '../../components/Index';
import QrcodeCard from '../../components/QrcodeCard';
import { AppStyle, styleMap } from '../../styles/Index';

export default class PatientNewList extends Component {
  static navigationOptions = {
    title: '新的患者',
    header: null,
    headerBackTitle: null,
    headerTitleStyle: { alignSelf: 'center' }
  };

  constructor(props) {
    super(props);

    this.listData = [
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '马云'
      },
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '马云'
      },
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '马云'
      }
    ];
  }

  _renderList(item, index) {
    return (
      <ListItem
        key={`nav_${index}`}
        showBorder={true}
        disabled={true}
        left={
          <TouchableOpacity
            style={[AppStyle.row, { alignItems: 'center' }]}
            onPress={() => {
              this.props.navigation.navigate('PatientDetail', {});
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={styles.list_left_image}
            />
            <View style={styles.list_center}>
              <Text style={styles.list_center_title}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        }
        right={
          <TouchableOpacity
            style={styles.list_right}
            onPress={() => {
              this.props.navigation.navigate('PatientGroupSelect', {});
            }}
          >
            <Text style={styles.list_right_title}>去分组</Text>
          </TouchableOpacity>
        }
      />
    );
  }

  render() {
    let list = this.listData.map((v, i) => {
      return this._renderList(v, i);
    });

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
          title={'新的患者'}
          rightStyle={styles.header_btn_width}
          headerRight={
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('PatientAdd', {});
              }}
              style={AppStyle.header_btn_right}
            >
              <Icon name={'addhz'} style={AppStyle.header_btn_icon} />
            </TouchableOpacity>
          }
        />

        <SearchBar title={'姓名、手机号'} />

        <TouchableOpacity
          style={[AppStyle.center, styles.new_qrcode]}
          onPress={() => {
            new RootSiblings(
              (
                <View
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <QrcodeCard />
                </View>
              )
            );
          }}
        >
          <Icon name={'qrcode'} style={styles.new_qrcode_icon} />
          <Text style={styles.new_qrcode_title}>我的二维码:</Text>
          <Text style={styles.new_qrcode_desc}>
            患者用微信扫一扫，与我建立联系
          </Text>
        </TouchableOpacity>

        <View style={styles.list_title}>
          <Text style={styles.list_title_text}>新加入患者</Text>
        </View>

        <View>{list}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_btn_width: {
    width: 80
  },
  new_qrcode: {
    ...styleMap.bjColor_white0,
    paddingVertical: 12
  },
  new_qrcode_icon: {
    fontSize: 22,
    ...styleMap.color_blue0
  },
  new_qrcode_title: {
    fontSize: 14,
    ...styleMap.color_black0,
    marginBottom: 5
  },
  new_qrcode_desc: {
    fontSize: 13,
    ...styleMap.color_gray2
  },
  list_title: {
    height: 22,
    paddingLeft: 12,
    justifyContent: 'center',
    ...styleMap.bjColor_gray5
  },
  list_title_text: {
    fontSize: 14,
    ...styleMap.color_gray0
  },
  list_left_image: {
    width: 36,
    height: 36
  },
  list_center: {
    marginLeft: 10
  },
  list_center_title: {
    fontSize: 17,
    ...styleMap.color_black2
  },
  list_right: {
    width: 54,
    height: 29,
    justifyContent: 'center',
    alignItems: 'center',
    ...styleMap.bjColor_gray6,
    borderWidth: 1,
    ...styleMap.bdColor_gray4,
    borderRadius: 5
  },
  list_right_title: {
    fontSize: 13,
    ...styleMap.color_black0
  }
});
