import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Switch
} from 'react-native';

import { Header, Icon, ListItem } from '../../components/Index';
import { AppStyle, styleMap } from '../../styles/Index';

export default class LetterDetailinfo extends Component {
  static navigationOptions = { title: '留言详情', header: null };

  constructor(props) {
    super(props);
  }

  render() {
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
              <Text style={AppStyle.header_btn_text}>留言聊天</Text>
            </TouchableOpacity>
          }
          title={'留言详情'}
          rightStyle={styles.header_btn_width}
        />

        <ScrollView>
          <View style={styles.list}>
            <ListItem
              left={
                <View>
                  <Image
                    source={{
                      uri:
                        'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                    }}
                    style={styles.info_avatar}
                  />
                </View>
              }
            />
          </View>

          <View style={styles.list}>
            <ListItem
              style={styles.info_item}
              onPress={() => {
                this.props.navigation.navigate('LetterHistoryList', {});
              }}
              left={
                <View>
                  <Text style={styles.info_left_title}>查找留言内容</Text>
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
                  <Text style={styles.info_left_title}>置顶聊天</Text>
                </View>
              }
              right={
                <View>
                  <Switch
                    value={true}
                    onTintColor={styleMap.color_blue1.color}
                  />
                </View>
              }
            />
            <ListItem
              style={styles.info_item}
              onPress={() => {}}
              left={
                <View>
                  <Text style={styles.info_left_title}>消息免打扰</Text>
                </View>
              }
              right={
                <View>
                  <Switch
                    value={false}
                    onTintColor={styleMap.color_blue1.color}
                  />
                </View>
              }
            />
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
  list: {
    marginTop: 10
  },
  info_avatar: {
    width: 50,
    height: 50
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
  }
});
