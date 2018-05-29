import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Switch
} from 'react-native';

import { Header, Icon, ListItem } from '../../components/Index';
import { AppStyle, styleMap } from '../../styles/Index';

export default class ImGroupManage extends Component {
  static navigationOptions = { title: '团管理', header: null };

  constructor(props) {
    super(props);
    this.state = { isOn: false };
  }

  render() {
    return (
      <View style={AppStyle.container}>
        <Header
          leftStyle={doctorstyles.header_btn_width}
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
              <Text style={AppStyle.header_btn_text}>返回</Text>
            </TouchableOpacity>
          }
          title={'团管理'}
          rightStyle={doctorstyles.header_btn_width}
        />
        <View style={AppStyle.margin_t10}>
          <ListItem
            style={doctorstyles.info_item}
            onPress={() => {}}
            left={
              <View>
                <Text
                  style={[
                    AppStyle.font_s16,
                    AppStyle.color_black2,
                    doctorstyles.header_btn_width
                  ]}
                >
                  专家团邀请确认
                </Text>
              </View>
            }
            right={
              <View>
                <Switch
                  onValueChange={() =>
                    this.setState({ isOn: !this.state.isOn })
                  }
                  value={this.state.isOn == true}
                />
              </View>
            }
          />
        </View>
        <Text
          style={[
            AppStyle.padding_l12,
            AppStyle.padding_t10,
            AppStyle.padding_b14,
            {
              fontSize: 14,
              color: AppStyle.color_gray0
            }
          ]}
        >
          启用后专家团成员需要主席团主席确认才能邀请成员进群。扫描二维码进专家团将同时停用
        </Text>
        <View style={AppStyle.margin_t10}>
          <ListItem
            style={doctorstyles.info_item}
            onPress={() => {}}
            left={
              <View>
                <Text
                  style={[
                    AppStyle.font_s16,
                    AppStyle.color_black2,
                    doctorstyles.header_btn_width
                  ]}
                >
                  专家团管理权转让
                </Text>
              </View>
            }
            right={
              <View style={AppStyle.flex1}>
                <Icon
                  name={'arrowRight'}
                  style={doctorstyles.info_right_icon}
                />
              </View>
            }
          />
        </View>
      </View>
    );
  }
}
const doctorstyles = StyleSheet.create({
  header_btn_width: {
    width: 140
  },
  info_right_icon: {
    fontSize: 15,
    lineHeight: 30,
    marginTop: 2,
    ...styleMap.color_black1
  },
  info_avatar: {
    width: 50,
    height: 50
  },

  info_item: {
    height: 49
  },
  info_item2: {
    height: 88
  },

  info_center_pl10: {
    paddingLeft: 10
  },
  info_book_image: {
    width: 51,
    height: 51
  },
  info_btns: {
    paddingHorizontal: 15
  }
});
