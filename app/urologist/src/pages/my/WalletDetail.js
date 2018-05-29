import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import { Header, Icon, ListItem, SearchBar } from '../../components/Index';
import { AppStyle, colorMap } from '../../styles/Index';

export default class WalletDetail extends Component {
  static navigationOptions = { title: '账单详情', header: null };

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
            </TouchableOpacity>
          }
          title={'账单详情'}
        />

        <ScrollView>
          <View
            style={[
              AppStyle.padding_h12,
              AppStyle.padding_v25,
              AppStyle.bjColor_white0
            ]}
          >
            <View style={[AppStyle.row, AppStyle.center]}>
              <Text
                style={[
                  AppStyle.font_s14,
                  AppStyle.color_gray1,
                  AppStyle.flex1
                ]}
              >
                提现金额(元)
              </Text>
              <View style={[AppStyle.row, AppStyle.center]}>
                <Icon name={'tradeProcess'} style={[AppStyle.color_red3]} />
                <Text
                  style={[
                    AppStyle.font_s12,
                    AppStyle.color_red3,
                    AppStyle.margin_l5
                  ]}
                >
                  处理中
                </Text>
              </View>
            </View>
            <Text
              style={[
                AppStyle.margin_t15,
                AppStyle.font_s36,
                AppStyle.color_black1
              ]}
            >
              -800.00
            </Text>
          </View>

          <View style={AppStyle.margin_t10}>
            <ListItem
              style={{ height: 49 }}
              left={
                <Text style={[AppStyle.font_s14, AppStyle.color_gray1]}>
                  创建时间:
                </Text>
              }
              center={
                <Text style={[AppStyle.font_s14, AppStyle.color_black1]}>
                  2017-11-29 10:39
                </Text>
              }
            />
            <ListItem
              style={[{ height: 49 }, AppStyle.bjColor_white4]}
              left={
                <Text style={[AppStyle.font_s14, AppStyle.color_gray1]}>
                  账单编号:
                </Text>
              }
              center={
                <Text style={[AppStyle.font_s14, AppStyle.color_black1]}>
                  234146346456345654
                </Text>
              }
            />
            <ListItem
              style={{ height: 49 }}
              left={
                <Text style={[AppStyle.font_s14, AppStyle.color_gray1]}>
                  账单类型:
                </Text>
              }
              center={
                <Text style={[AppStyle.font_s14, AppStyle.color_black1]}>
                  咨询
                </Text>
              }
            />
            <ListItem
              style={[{ height: 49 }, AppStyle.bjColor_white4]}
              left={
                <Text style={[AppStyle.font_s14, AppStyle.color_gray1]}>
                  订单编号:
                </Text>
              }
              center={
                <Text style={[AppStyle.font_s14, AppStyle.color_black1]}>
                  234146346456345654
                </Text>
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
    width: 70
  }
});
