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

export default class OrderDetail extends Component {
  static navigationOptions = { title: '用户评价', header: null };

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
              <Icon name={'arrowLeft'} style={AppStyle.header_btn_icon} />
            </TouchableOpacity>
          }
          title={'用户评价'}
          leftStyle={styles.header_btn_width}
          rightStyle={styles.header_btn_width}
        />
        <ScrollView>
          <ListItem
            style={styles.info_top}
            showBorder={true}
            left={
              <View>
                <Image
                  source={{
                    uri:
                      'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                  }}
                  style={styles.info_top_avatar}
                />
              </View>
            }
            center={
              <View style={styles.info_top_center}>
                <Text style={styles.info_top_name}>马化腾</Text>
                <Text style={styles.info_top_phone}>136****8888</Text>
              </View>
            }
          />

          <ListItem
            showBorder={true}
            center={
              <View>
                <Text style={styles.info_desc_text}>
                  王医生，医者仁心，妙手回春，帮我把多年缠身打顽疾治好了，大恩不言谢，希望王医生健康快乐，事事顺心
                </Text>
              </View>
            }
          />

          <ListItem
            left={
              <View>
                <Text style={styles.info_title}>向患者公开</Text>
              </View>
            }
            right={
              <View>
                <Switch value={true} onTintColor={styleMap.color_blue1.color} />
              </View>
            }
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_btn_width: {
    width: 80
  },
  info_top: {
    height: 80
  },
  info_top_avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  info_top_center: {
    marginLeft: 5
  },
  info_top_name: {
    fontSize: 16,
    ...styleMap.color_black1
  },
  info_top_phone: {
    marginTop: 16,
    fontSize: 14,
    ...styleMap.color_gray11
  },
  info_desc_text: {
    fontSize: 16,
    lineHeight: 18,
    ...styleMap.color_black2
  },
  info_title: {
    fontSize: 16,
    ...styleMap.color_black1
  }
});
