import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { Header, Icon, ListItem } from '../../components/Index';
import { AppStyle, styleMap, colorMap } from '../../styles/Index';

export default class ImDetail extends Component {
  static navigationOptions = {
    title: '',
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={AppStyle.container}>
        <Header
          leftStyle={styles.header_btn_width}
          rightStyle={styles.header_btn_width}
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
              <Text style={AppStyle.header_btn_text}>专家团</Text>
            </TouchableOpacity>
          }
          title={'马云'}
          headerRight={
            <TouchableOpacity
              style={[
                AppStyle.row,
                AppStyle.header_btn,
                AppStyle.header_btn_right
              ]}
              onPress={() => {
                this.props.navigation.navigate('ImDetailDoctorinfo', {});
              }}
            >
              <Icon name={'depart'} style={AppStyle.header_btn_icon} />
            </TouchableOpacity>
          }
        />

        <ScrollView>
          <View style={[AppStyle.row, styles.letter_item]}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('DoctorDetail', {});
              }}
            >
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={styles.letter_item_avatar}
              />
            </TouchableOpacity>
            <View style={styles.letter_item_leftTriangle} />
            <View style={[AppStyle.row, styles.letter_item_content]}>
              <View style={styles.letter_item_msg}>
                <Text style={styles.letter_item_msgText}>在吗？医生</Text>
              </View>
            </View>
          </View>

          <View style={[AppStyle.row, styles.letter_item]}>
            <View>
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={styles.letter_item_avatar}
              />
            </View>
            <View style={styles.letter_item_leftTriangle} />
            <View style={[AppStyle.row, styles.letter_item_content]}>
              <View style={AppStyle.flex1}>
                <View style={styles.letter_item_msg}>
                  <Text style={styles.letter_item_msgText}>
                    最近不太舒服，心里总是揣揣不安，最近不太舒服，心里总是揣揣不安
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={[AppStyle.row, styles.letter_item]}>
            <View>
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={styles.letter_item_avatar}
              />
            </View>
            <View />
            <View
              style={[
                AppStyle.row,
                styles.letter_item_content,
                { marginHorizontal: 12 }
              ]}
            >
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={styles.letter_item_image}
              />
            </View>
          </View>

          <View style={[AppStyle.center, styles.letter_time]}>
            <View style={styles.letter_time_content}>
              <Text style={styles.letter_time_text}>下午 5:12</Text>
            </View>
          </View>

          <View style={[AppStyle.row, styles.letter_item]}>
            <View
              style={[
                AppStyle.row,
                styles.letter_item_content,
                styles.letter_item_contentMe
              ]}
            >
              <View style={[styles.letter_item_msg, styles.letter_item_msgMe]}>
                <Text
                  style={[
                    styles.letter_item_msgText,
                    styles.letter_item_msgMeText
                  ]}
                >
                  嗯，具体情况具体分析，好
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.letter_item_leftTriangle,
                styles.letter_item_rightTriangle
              ]}
            />
            <View>
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={styles.letter_item_avatar}
              />
            </View>
          </View>

          <View style={[AppStyle.row, styles.letter_item]}>
            <View
              style={[
                AppStyle.row,
                styles.letter_item_content,
                styles.letter_item_contentMe
              ]}
            >
              <View style={[styles.letter_item_msg, styles.letter_item_msgMe]}>
                <Text
                  style={[
                    styles.letter_item_msgText,
                    styles.letter_item_msgMeText
                  ]}
                >
                  我最近不太舒服，心里总是揣揣不安，最近不太舒服，心里总是揣揣不安
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.letter_item_leftTriangle,
                styles.letter_item_rightTriangle
              ]}
            />
            <View>
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={styles.letter_item_avatar}
              />
            </View>
          </View>

          <View style={[AppStyle.center, styles.letter_time]}>
            <View style={styles.letter_time_content}>
              <Text style={styles.letter_time_text}>下午 5:12</Text>
            </View>
          </View>

          <View style={[AppStyle.row, styles.letter_item]}>
            <View
              style={[
                AppStyle.row,
                styles.letter_item_content,
                styles.letter_item_contentMe,
                { marginHorizontal: 12 }
              ]}
            >
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={styles.letter_item_image}
              />
            </View>
            <View />
            <View>
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={styles.letter_item_avatar}
              />
            </View>
          </View>
        </ScrollView>

        <View
          style={[
            {
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              flexDirection: 'row',
              minHeight: 49,
              alignItems: 'flex-end',
              borderTopWidth: 1
            },
            styleMap.bjColor_white2,
            styleMap.bdColor_gray9
          ]}
        >
          <View style={{ paddingLeft: 10, paddingBottom: 8 }}>
            <Icon
              name={'voice'}
              style={[{ fontSize: 30 }, styleMap.color_gray8]}
            />
          </View>
          <View style={{ paddingHorizontal: 10, flex: 1 }}>
            <TextInput
              style={styles.input_text}
              underlineColorAndroid="transparent"
              textAlignVertical="center"
              autoFocus={false}
              enablesReturnKeyAutomatically={true}
              returnKeyType="done"
              multiline={true}
              placeholder={''}
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
          <View style={{ marginRight: 9, paddingBottom: 8 }}>
            <Icon
              name={'emjo'}
              style={[{ fontSize: 30 }, styleMap.color_gray8]}
            />
          </View>
          <View style={{ marginRight: 9, paddingBottom: 8 }}>
            <Icon
              name={'addtj'}
              style={[{ fontSize: 30 }, styleMap.color_gray8]}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_btn_width: {
    width: 85
  },
  letter_time: {
    marginTop: 25
  },
  letter_time_content: {
    ...styleMap.bjColor_gray7,
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 5
  },
  letter_time_text: {
    fontSize: 12,
    ...styleMap.color_white1
  },
  letter_item: {
    marginHorizontal: 12,
    marginTop: 15
  },
  letter_item_avatar: {
    width: 40,
    height: 40
  },
  letter_item_image: {
    width: 100,
    height: 140,
    borderRadius: 3,
    resizeMode: 'cover'
  },
  letter_item_content: {
    flex: 1
  },
  letter_item_contentMe: {
    justifyContent: 'flex-end'
  },
  letter_item_leftTriangle: {
    marginLeft: 4,
    marginTop: 15,
    width: 0,
    height: 0,
    borderTopWidth: 5,
    borderTopColor: 'transparent',
    borderBottomWidth: 5,
    borderBottomColor: 'transparent',
    borderRightWidth: 8,
    borderRightColor: styleMap.color_white0.color
  },
  letter_item_rightTriangle: {
    marginLeft: 0,
    marginRight: 4,
    borderRightWidth: 0,
    borderLeftWidth: 8,
    borderLeftColor: styleMap.color_blue1.color
  },
  letter_item_msg: {
    backgroundColor: '#F00',
    flexWrap: 'wrap',
    justifyContent: 'center',
    ...styleMap.bjColor_white0,
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderRadius: 3
  },
  letter_item_msgText: {
    fontSize: 16,
    ...styleMap.color_black1,
    lineHeight: 18
  },
  letter_item_msgMe: {
    flexWrap: 'wrap',
    ...styleMap.bjColor_blue1
  },
  letter_item_msgMeText: {
    ...styleMap.color_white0
  },
  input_text: {
    minHeight: 36,
    marginVertical: 6,
    paddingVertical: 0,
    paddingLeft: 10,
    flex: 1,
    fontSize: 15,
    ...styleMap.bjColor_white0,
    ...styleMap.bdColor_gray9,
    borderWidth: 1,
    borderRadius: 5
  }
});
