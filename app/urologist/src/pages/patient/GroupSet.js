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

export default class GroupSet extends Component {
  static navigationOptions = { title: '设置分组名称', header: null };

  constructor(props) {
    super(props);
  }

  render() {
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
          title={'设置分组名称'}
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

        <View style={styles.list}>
          <View style={styles.input}>
            <TextInput
              style={styles.input_text}
              underlineColorAndroid="transparent"
              textAlignVertical="center"
              autoFocus={false}
              enablesReturnKeyAutomatically={true}
              returnKeyType="done"
              placeholder={'例如前列腺炎、肾结石'}
              placeholderTextColor={styleMap.color_gray3.color}
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
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginTop: 10
  },
  input: {
    ...styleMap.bjColor_white0,
    height: 49,
    justifyContent: 'center'
  },
  input_text: {
    fontSize: 15,
    marginLeft: 12
  }
});
