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

export default class UserFavoriteList extends Component {
  static navigationOptions = { title: '收藏', header: null };

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
          title={'收藏'}
        />

        <ScrollView>
          <View style={AppStyle.bjColor_blue1}>
            <SearchBar />
          </View>
          <View style={[AppStyle.margin_t15, AppStyle.margin_h12]}>
            <View
              style={[
                AppStyle.bjColor_white0,
                AppStyle.padding18,
                AppStyle.margin_b10,
                { borderRadius: 5 }
              ]}
            >
              <View style={[AppStyle.row, { alignItems: 'center' }]}>
                <Image
                  source={{
                    uri:
                      'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                  }}
                  style={{ width: 50, height: 50 }}
                />
                <View
                  style={[AppStyle.margin_l13, { flex: 1, flexWrap: 'wrap' }]}
                >
                  <Text
                    style={[
                      AppStyle.font_s17,
                      AppStyle.color_black0,
                      { lineHeight: 19 }
                    ]}
                  >
                    劲爆消息！劲爆消息世界医学研究中心发现，可以攻克癌症！
                  </Text>
                </View>
              </View>

              <View style={[AppStyle.row, AppStyle.margin_t14]}>
                <Text style={[AppStyle.font_s12, AppStyle.color_gray1]}>
                  三甲医院网
                </Text>
                <Text
                  style={[
                    AppStyle.font_s12,
                    AppStyle.color_gray1,
                    AppStyle.margin_l10
                  ]}
                >
                  今天
                </Text>
              </View>
            </View>

            <View
              style={[
                AppStyle.bjColor_white0,
                AppStyle.padding18,
                AppStyle.margin_b10,
                { borderRadius: 5 }
              ]}
            >
              <View style={[AppStyle.row, { alignItems: 'center' }]}>
                <Image
                  source={{
                    uri:
                      'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                  }}
                  style={{ width: 50, height: 50 }}
                />
                <View
                  style={[AppStyle.margin_l13, { flex: 1, flexWrap: 'wrap' }]}
                >
                  <Text
                    style={[
                      AppStyle.font_s17,
                      AppStyle.color_black0,
                      { lineHeight: 19 }
                    ]}
                  >
                    葛俊豪
                  </Text>
                  <Text
                    style={[
                      AppStyle.font_s15,
                      AppStyle.color_gray1,
                      AppStyle.margin_t10
                    ]}
                  >
                    上海第六人民医院 泌尿外科
                  </Text>
                </View>
              </View>

              <View style={[AppStyle.row, AppStyle.margin_t14]}>
                <Text style={[AppStyle.font_s12, AppStyle.color_gray1]}>
                  医生
                </Text>
                <Text
                  style={[
                    AppStyle.font_s12,
                    AppStyle.color_gray1,
                    AppStyle.margin_l10
                  ]}
                >
                  5天前
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_btn_width: {
    width: 60
  }
});
