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
import { styleMap, AppStyle } from '../../styles/Index';

import Toast from '../../components/Toast';

export default class PatientIndex extends Component {
  static navigationOptions = {
    title: '患者录',
    header: null,
    headerBackTitle: null,
    headerTitleStyle: { alignSelf: 'center' },
    tabBarIcon: ({ focused, tintColor }) => {
      return (
        <Icon
          name={focused ? 'patientActive' : 'patient'}
          style={{ fontSize: 26, color: tintColor }}
        />
      );
    }
  };

  constructor(props) {
    super(props);

    this.navList = [
      { iconname: 'newhz', title: '新的患者' },
      { iconname: 'message', title: '患者留言' },
      { iconname: 'depart', title: '患者分组' },
      { iconname: 'order', title: '咨询订单' }
    ];

    this.listData = [
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '马云',
        desc: '2018年2月3日已办理出院，需要观察'
      },
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '马云',
        desc: '2018年2月3日已办理出院，需要观察'
      },
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '马云',
        desc: '2018年2月3日已办理出院，需要观察'
      }
    ];
  }

  componentDidMount() {
    // App.DPatient.list().then(res => {
    //   console.warn(res);
    // });
    //Toast.show('correct', '分组保存中');
  }

  _renderNav(item, index) {
    return (
      <ListItem
        key={`nav_${index}`}
        showBorder={true}
        onPress={() => {
          if (item.iconname == 'newhz') {
            this.props.navigation.navigate('PatientNewList', {});
          }
          if (item.iconname == 'message') {
            this.props.navigation.navigate('LetterList', {});
          }
          if (item.iconname == 'depart') {
            this.props.navigation.navigate('GroupList', {});
          }
          if (item.iconname == 'order') {
            this.props.navigation.navigate('OrderList', {});
          }
        }}
        left={
          <View style={styles.nav_left}>
            <Icon name={item.iconname} style={styles.nav_left_icon} />
          </View>
        }
        center={
          <View style={styles.nav_right}>
            <Text style={styles.nav_right_text}>{item.title}</Text>
          </View>
        }
      />
    );
  }

  _renderList(item, index) {
    return (
      <ListItem
        key={`nav_${index}`}
        showBorder={true}
        onPress={() => {
          this.props.navigation.navigate('PatientDetail', {});
        }}
        left={
          <Image source={{ uri: item.image }} style={styles.list_left_image} />
        }
        center={
          <View style={styles.list_right}>
            <Text style={styles.list_right_title}>{item.name}</Text>
            <Text style={styles.list_right_desc}>{item.desc}</Text>
          </View>
        }
      />
    );
  }

  render() {
    let navList = this.navList.map((v, i) => {
      return this._renderNav(v, i);
    });

    let list = this.listData.map((v, i) => {
      return this._renderList(v, i);
    });

    return (
      <View style={AppStyle.container}>
        <Header
          leftStyle={styles.header_btn_width}
          rightStyle={styles.header_btn_width}
          title={'患者录'}
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

        <ScrollView>
          <SearchBar />

          <View>{navList}</View>

          <View style={styles.list_title}>
            <Text style={styles.list_title_text}>前列腺炎</Text>
          </View>

          <View>{list}</View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_btn_width: {
    width: 40
  },
  nav_left: {
    width: 36,
    height: 36,
    ...styleMap.bjColor_blue2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nav_left_icon: {
    fontSize: 20,
    ...styleMap.color_white0
  },
  nav_right: {},
  nav_right_text: {
    fontSize: 16,
    ...styleMap.color_black1
  },
  list_title: {
    height: 22,
    paddingLeft: 12,
    justifyContent: 'center',
    ...styleMap.bjColor_gray4
  },
  list_title_text: {
    fontSize: 14,
    ...styleMap.color_gray0
  },
  list_left_image: {
    width: 36,
    height: 36
  },
  list_right_title: {
    fontSize: 17,
    ...styleMap.color_black1,
    marginBottom: 5
  },
  list_right_desc: {
    fontSize: 14,
    ...styleMap.color_gray1
  }
});
