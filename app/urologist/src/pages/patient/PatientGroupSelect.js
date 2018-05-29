import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Header, Icon } from '../../components/Index';
import { AppStyle, styleMap } from '../../styles/Index';

export default class PatientGroupSelect extends Component {
  static navigationOptions = {
    title: '选择分组',
    header: null
  };

  constructor(props) {
    super(props);

    this.groupListData = [
      { id: 1, name: '特别关心' },
      { id: 2, name: '前列腺炎' },
      { id: 3, name: '肾炎' },
      { id: 4, name: '分组名' },
      { id: 5, name: '分组名称' },
      { id: 6, name: '分组名' },
      { id: 7, name: '分组名' },
      { id: 8, name: '分组' },
      { id: 9, name: '分组名' },
      { id: 10, name: '分组名称' }
    ];
  }

  _renderGroupList(item, index) {
    return (
      <TouchableOpacity key={`group-list-${index}`} style={styles.group_item}>
        <Text style={styles.group_item_text}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    let groupList = this.groupListData.map((v, i) => {
      return this._renderGroupList(v, i);
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
          title={'选择分组'}
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
              <Text style={AppStyle.header_btn_text}>确定</Text>
            </TouchableOpacity>
          }
        />

        <View>
          <View style={styles.input}>
            <TextInput
              style={styles.input_text}
              underlineColorAndroid="transparent"
              textAlignVertical="center"
              autoFocus={false}
              enablesReturnKeyAutomatically={true}
              returnKeyType="done"
              placeholder={'输入分组'}
              placeholderTextColor={styleMap.color_black1.color}
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

          <View style={{ marginHorizontal: 12 }}>
            <View style={[{ height: 39, justifyContent: 'center' }]}>
              <Text style={{ fontSize: 14 }}>所有分组</Text>
            </View>
            <View style={[AppStyle.row, styles.group_list]}>{groupList}</View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    ...styleMap.bjColor_white0,
    height: 47,
    justifyContent: 'center'
  },
  input_text: {
    fontSize: 15,
    marginLeft: 13
  },
  group_list: {
    flexWrap: 'wrap'
  },
  group_item: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    ...styleMap.bdColor_gray3,
    borderRadius: 5
  },
  group_item_text: {
    fontSize: 15,
    ...styleMap.color_black1
  }
});
