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

export default class GroupAdd extends Component {
  static navigationOptions = { title: '分组设置', header: null };

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
          title={'分组设置'}
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
        <ScrollView>
          <View style={styles.title}>
            <Text style={styles.title_text}>分组名称</Text>
          </View>
          <TouchableOpacity
            style={styles.input}
            onPress={() => {
              this.props.navigation.navigate('GroupSet', {});
            }}
          >
            <Text style={styles.input_text}>未设置分组名称</Text>
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.title_text}>分组成员 (0)</Text>
          </View>
          <ListItem
            style={styles.group_add}
            showBorder={true}
            onPress={() => {
              this.props.navigation.navigate('GroupAddPatient', {});
            }}
            left={
              <View>
                <Icon name={'addtj'} style={styles.group_add_icon} />
              </View>
            }
            center={
              <View>
                <Text style={styles.group_add_text}>添加患者</Text>
              </View>
            }
          />
          <View style={styles.title}>
            <Text style={styles.title_text}>前列腺炎</Text>
          </View>
          <View>{list}</View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_btn_width: {
    width: 80
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
    height: 43,
    justifyContent: 'center'
  },
  input_text: {
    fontSize: 15,
    marginLeft: 13,
    ...styleMap.color_gray3
  },
  group_add: {
    paddingVertical: 0,
    height: 55
  },
  group_add_icon: {
    fontSize: 24,
    ...styleMap.color_blue0
  },
  group_add_text: {
    fontSize: 17,
    ...styleMap.color_blue0
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
    ...styleMap.color_black1
  }
});
