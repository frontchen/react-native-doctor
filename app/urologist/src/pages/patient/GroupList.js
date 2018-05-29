import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Header, Icon, ListItem } from '../../components/Index';
import { AppStyle, styleMap } from '../../styles/Index';

export default class GroupList extends Component {
  static navigationOptions = {
    title: '患者分组',
    header: null
  };

  constructor(props) {
    super(props);

    this.listData = [
      { name: '前列腺炎', num: 10 },
      { name: '尿结石', num: 8 },
      { name: '肾肿瘤', num: 18 },
      { name: '住院中', num: 20 },
      { name: '手术已出院', num: 78 }
    ];
  }

  _renderList(item, index) {
    return (
      <ListItem
        key={`group-list-${index}`}
        style={styles.group_item}
        showBorder={true}
        onPress={() => {
          this.props.navigation.navigate('GroupAdd', {});
        }}
        left={
          <View>
            <Text style={styles.group_item_text}>
              {item.name}({item.num})
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
          title={'患者分组'}
          rightStyle={styles.header_btn_width}
        />

        <ScrollView>
          <ListItem
            style={styles.group_add}
            showBorder={true}
            onPress={() => {
              this.props.navigation.navigate('GroupAdd', {});
            }}
            left={
              <View>
                <Icon name={'addtj'} style={styles.group_add_icon} />
              </View>
            }
            center={
              <View>
                <Text style={styles.group_add_text}>新建分组</Text>
              </View>
            }
          />
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
  group_add: {
    paddingHorizontal: 15,
    paddingVertical: 0,
    height: 65
  },
  group_add_icon: {
    fontSize: 20,
    ...styleMap.color_blue0
  },
  group_add_text: {
    fontSize: 15,
    ...styleMap.color_blue0
  },
  group_item: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  group_item_text: {
    fontSize: 16,
    ...styleMap.color_black1
  }
});
