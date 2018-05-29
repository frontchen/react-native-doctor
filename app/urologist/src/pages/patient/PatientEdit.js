import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch
} from 'react-native';

import { Header, Icon, ListItem, Button } from '../../components/Index';
import { AppStyle, styleMap } from '../../styles/Index';

export default class PatientEdit extends Component {
  static navigationOptions = { title: '资料设置', header: null };

  constructor(props) {
    super(props);
  }

  render() {
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
              <Text style={AppStyle.header_btn_text}>详细资料</Text>
            </TouchableOpacity>
          }
          title={'资料设置'}
          rightStyle={styles.header_btn_width}
        />
        <ScrollView style={styles.scrollView}>
          <View style={[AppStyle.flex1, styles.body]}>
            <View style={styles.list}>
              <ListItem
                style={styles.info_item}
                onPress={() => {
                  this.props.navigation.navigate('PatientGroupSet', {});
                }}
                left={
                  <View>
                    <Text style={styles.info_left_title}>设置备注及分组</Text>
                  </View>
                }
                right={
                  <View>
                    <Icon name={'arrowRight'} style={styles.info_right_icon} />
                  </View>
                }
              />
            </View>

            <View style={styles.list}>
              <ListItem
                style={styles.info_item}
                onPress={() => {}}
                left={
                  <View>
                    <Text style={styles.info_left_title}>把TA推荐给朋友</Text>
                  </View>
                }
                right={
                  <View>
                    <Icon name={'arrowRight'} style={styles.info_right_icon} />
                  </View>
                }
              />
            </View>

            <View style={styles.list}>
              <ListItem
                style={styles.info_item}
                showBorder={true}
                left={
                  <View>
                    <Text style={styles.info_left_title}>置顶私信</Text>
                  </View>
                }
                right={
                  <View>
                    <Switch value={true} />
                  </View>
                }
              />
              <ListItem
                style={styles.info_item}
                onPress={() => {}}
                left={
                  <View>
                    <Text style={styles.info_left_title}>屏蔽私信</Text>
                  </View>
                }
                right={
                  <View>
                    <Switch value={false} />
                  </View>
                }
              />
            </View>
            <View style={styles.info_btns}>
              <Button type={'danger'} title={'删除'} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_btn_width: {
    width: 80
  },
  scrollView: {
    ...styleMap.bjColor_white0
  },
  body: {
    ...styleMap.bjColor_gray4
  },
  list: {
    marginTop: 10
  },
  info_item: {
    height: 49
  },
  info_left_title: {
    fontSize: 16,
    ...styleMap.color_black1
  },
  info_right_icon: {
    fontSize: 15,
    ...styleMap.color_black1
  },
  info_btns: {
    marginTop: 10,
    ...styleMap.bjColor_white0,
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 15
  }
});
