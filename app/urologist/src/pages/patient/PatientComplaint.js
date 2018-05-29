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

import { Header, Icon, ListItem, RowItem } from '../../components/Index';
import { AppStyle, colorMap, screenWidth } from '../../styles/Index';

export default class PatientComplaint extends Component {
  static navigationOptions = { title: '患者主诉', header: null };

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
          title={'患者主诉'}
        />

        <ScrollView>
          <View style={[AppStyle.bjColor_white0, AppStyle.padding_v15]}>
            <ListItem
              left={
                <View>
                  <Image
                    source={{
                      uri:
                        'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                    }}
                    style={{ width: 64, height: 64, borderRadius: 5 }}
                  />
                </View>
              }
              center={
                <View>
                  <View style={[AppStyle.row, { alignItems: 'center' }]}>
                    <Text style={[AppStyle.font_s15, AppStyle.color_black1]}>
                      李小果
                    </Text>
                    <Text
                      style={[
                        AppStyle.font_s12,
                        AppStyle.color_gray0,
                        AppStyle.padding_l8
                      ]}
                    >
                      男
                    </Text>
                    <Text
                      style={[
                        AppStyle.font_s12,
                        AppStyle.color_gray0,
                        AppStyle.padding_l8
                      ]}
                    >
                      34岁
                    </Text>
                  </View>
                  <View style={AppStyle.padding_t8}>
                    <Text style={[AppStyle.font_s14, AppStyle.color_blue1]}>
                      13600887859
                    </Text>
                  </View>
                </View>
              }
            />
            <View
              style={[
                AppStyle.padding_h12,
                AppStyle.padding_v8,
                AppStyle.padding_b15
              ]}
            >
              <Text style={[AppStyle.font_s14, AppStyle.color_gray0]}>
                咨询标题
              </Text>
            </View>
            <View style={[AppStyle.padding_h12]}>
              <Text
                style={[
                  AppStyle.font_s15,
                  AppStyle.color_black1,
                  { lineHeight: 17 }
                ]}
              >
                前列腺炎 尿频尿急怎么办？前列腺炎 尿频尿急怎么办？前列腺炎
                尿频尿急怎么办？前列腺炎 尿频尿急怎么办？
              </Text>
            </View>
          </View>
          <View style={styles.info_title}>
            <Text style={[AppStyle.font_s14, AppStyle.color_gray0]}>
              想获得的帮助
            </Text>
          </View>
          <View style={styles.info_content}>
            <Text
              style={[
                AppStyle.font_s15,
                AppStyle.color_black1,
                { lineHeight: 17 }
              ]}
            >
              医生帮我诊断一下，开点中药缓解一下炎症。
            </Text>
          </View>
          <View style={styles.info_title}>
            <Text style={[AppStyle.font_s14, AppStyle.color_gray0]}>
              疾病症状
            </Text>
          </View>
          <View style={styles.info_content}>
            <Text
              style={[
                AppStyle.font_s15,
                AppStyle.color_black1,
                { lineHeight: 17 }
              ]}
            >
              小便不利 刺痛感
            </Text>
          </View>
          <View style={styles.info_title}>
            <Text style={[AppStyle.font_s14, AppStyle.color_gray0]}>
              患者主诉
            </Text>
          </View>
          <View style={AppStyle.bjColor_white0}>
            <View style={AppStyle.padding_h12}>
              <View
                style={[
                  AppStyle.padding_v10,
                  AppStyle.margin_b5,
                  { borderBottomWidth: 1, borderBottomColor: colorMap.gray[4] }
                ]}
              >
                <Text
                  style={[
                    AppStyle.font_s15,
                    AppStyle.color_black1,
                    { lineHeight: 17 }
                  ]}
                >
                  小便不利
                  刺痛感，这几天小便的时候都感觉难受，去医院看了一下说是有炎症
                </Text>
              </View>
              <View>
                <Text style={[AppStyle.font_s14, AppStyle.color_gray0]}>
                  患者时长：3个月
                </Text>
              </View>
              <View style={AppStyle.padding_v8}>
                <Text
                  style={[
                    AppStyle.font_s14,
                    AppStyle.color_red1,
                    { fontWeight: 'bold' }
                  ]}
                >
                  *补充材料：
                </Text>
              </View>
              <View style={[AppStyle.padding_v10]}>
                <Text
                  style={[
                    AppStyle.font_s15,
                    AppStyle.color_black1,
                    { lineHeight: 17 }
                  ]}
                >
                  小便不利
                  刺痛感，这几天小便的时候都感觉难受，去医院看了一下说是有炎症
                </Text>
              </View>
            </View>
            <ScrollView
              style={[AppStyle.margin_l12, AppStyle.padding_v12]}
              horizontal={true}
            >
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={{ width: 70, height: 70, marginRight: 12 }}
              />
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={{ width: 70, height: 70, marginRight: 12 }}
              />
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={{ width: 70, height: 70, marginRight: 12 }}
              />
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={{ width: 70, height: 70, marginRight: 12 }}
              />
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={{ width: 70, height: 70, marginRight: 12 }}
              />
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={{ width: 70, height: 70, marginRight: 12 }}
              />
            </ScrollView>
          </View>

          <View style={styles.info_title}>
            <Text style={[AppStyle.font_s14, AppStyle.color_gray0]}>
              就诊医院及科室
            </Text>
          </View>
          <View style={styles.info_content}>
            <Text
              style={[
                AppStyle.font_s15,
                AppStyle.color_black1,
                { lineHeight: 17 }
              ]}
            >
              上海第六人民医院
            </Text>
          </View>

          <View style={styles.info_title}>
            <Text style={[AppStyle.font_s14, AppStyle.color_gray0]}>
              过敏史
            </Text>
          </View>
          <View style={styles.info_content}>
            <Text
              style={[
                AppStyle.font_s15,
                AppStyle.color_black1,
                { lineHeight: 17 }
              ]}
            >
              海鲜 奶制品过敏
            </Text>
          </View>

          <View style={styles.info_title}>
            <Text style={[AppStyle.font_s14, AppStyle.color_gray0]}>
              药物治疗情况
            </Text>
          </View>
          <View
            style={[
              ,
              AppStyle.padding_l12,
              AppStyle.padding_v12,
              AppStyle.bjColor_white0
            ]}
          >
            <View style={[AppStyle.row, AppStyle.padding_r12]}>
              <Text
                style={[
                  AppStyle.font_s15,
                  AppStyle.color_black1,
                  { lineHeight: 17 }
                ]}
              >
                药物名称:
              </Text>
              <Text
                style={[
                  AppStyle.font_s15,
                  AppStyle.color_gray0,
                  AppStyle.padding_l8,
                  { lineHeight: 17 }
                ]}
              >
                三金片
              </Text>
            </View>
            <View
              style={[
                AppStyle.row,
                AppStyle.padding_r12,
                AppStyle.padding_v8,
                { borderBottomWidth: 1, borderBottomColor: colorMap.gray[4] }
              ]}
            >
              <Text
                style={[
                  AppStyle.font_s15,
                  AppStyle.color_black1,
                  { lineHeight: 17 }
                ]}
              >
                服用说明:
              </Text>
              <Text
                style={[
                  AppStyle.flex1,
                  AppStyle.font_s15,
                  AppStyle.color_gray0,
                  AppStyle.padding_l8,
                  { lineHeight: 17, textAlign: 'left', flexWrap: 'wrap' }
                ]}
              >
                口服 3次／日 {`\r\n`}三周一个疗程,三周后停服一周再继续服用需要服用3个月。
              </Text>
            </View>
            <ScrollView style={[AppStyle.padding_v12]} horizontal={true}>
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={{ width: 70, height: 70, marginRight: 12 }}
              />
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={{ width: 70, height: 70, marginRight: 12 }}
              />
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={{ width: 70, height: 70, marginRight: 12 }}
              />
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={{ width: 70, height: 70, marginRight: 12 }}
              />
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={{ width: 70, height: 70, marginRight: 12 }}
              />
              <Image
                source={{
                  uri:
                    'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                }}
                style={{ width: 70, height: 70, marginRight: 12 }}
              />
            </ScrollView>
          </View>
          <View style={styles.info_title}>
            <Text style={[AppStyle.font_s14, AppStyle.color_gray0]}>
              既往病史
            </Text>
          </View>
          <View style={styles.info_content}>
            <Text
              style={[
                AppStyle.font_s15,
                AppStyle.color_black1,
                { lineHeight: 17 }
              ]}
            >
              前列腺手术 没有成功
            </Text>
          </View>
          <View style={styles.info_title}>
            <Text style={[AppStyle.font_s14, AppStyle.color_gray0]}>
              检查资料
            </Text>
          </View>

          <View
            style={[
              AppStyle.row,
              AppStyle.bjColor_white0,
              AppStyle.padding_v12,
              AppStyle.padding_h5,
              { flexWrap: 'wrap' }
            ]}
          >
            <Image
              source={{
                uri:
                  'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
              }}
              style={[
                AppStyle.margin_h5,
                AppStyle.margin_b10,
                {
                  width: (screenWidth - 40) / 3,
                  height: (screenWidth - 40) / 3
                }
              ]}
            />
            <Image
              source={{
                uri:
                  'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
              }}
              style={[
                AppStyle.margin_h5,
                AppStyle.margin_b10,
                {
                  width: (screenWidth - 40) / 3,
                  height: (screenWidth - 40) / 3
                }
              ]}
            />
            <Image
              source={{
                uri:
                  'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
              }}
              style={[
                AppStyle.margin_h5,
                AppStyle.margin_b10,
                {
                  width: (screenWidth - 40) / 3,
                  height: (screenWidth - 40) / 3
                }
              ]}
            />
            <Image
              source={{
                uri:
                  'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
              }}
              style={[
                AppStyle.margin_h5,
                AppStyle.margin_b10,
                {
                  width: (screenWidth - 40) / 3,
                  height: (screenWidth - 40) / 3
                }
              ]}
            />
            <Image
              source={{
                uri:
                  'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
              }}
              style={[
                AppStyle.margin_h5,
                AppStyle.margin_b10,
                {
                  width: (screenWidth - 40) / 3,
                  height: (screenWidth - 40) / 3
                }
              ]}
            />
            <Image
              source={{
                uri:
                  'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
              }}
              style={[
                AppStyle.margin_h5,
                AppStyle.margin_b10,
                {
                  width: (screenWidth - 40) / 3,
                  height: (screenWidth - 40) / 3
                }
              ]}
            />
            <Image
              source={{
                uri:
                  'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
              }}
              style={[
                AppStyle.margin_h5,
                AppStyle.margin_b10,
                {
                  width: (screenWidth - 40) / 3,
                  height: (screenWidth - 40) / 3
                }
              ]}
            />
            <Image
              source={{
                uri:
                  'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
              }}
              style={[
                AppStyle.margin_h5,
                AppStyle.margin_b10,
                {
                  width: (screenWidth - 40) / 3,
                  height: (screenWidth - 40) / 3
                }
              ]}
            />
            <Image
              source={{
                uri:
                  'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
              }}
              style={[
                AppStyle.margin_h5,
                AppStyle.margin_b10,
                {
                  width: (screenWidth - 40) / 3,
                  height: (screenWidth - 40) / 3
                }
              ]}
            />
            <Image
              source={{
                uri:
                  'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
              }}
              style={[
                AppStyle.margin_h5,
                AppStyle.margin_b10,
                {
                  width: (screenWidth - 40) / 3,
                  height: (screenWidth - 40) / 3
                }
              ]}
            />
            <Image
              source={{
                uri:
                  'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
              }}
              style={[
                AppStyle.margin_h5,
                AppStyle.margin_b10,
                {
                  width: (screenWidth - 40) / 3,
                  height: (screenWidth - 40) / 3
                }
              ]}
            />
            <Image
              source={{
                uri:
                  'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
              }}
              style={[
                AppStyle.margin_h5,
                AppStyle.margin_b10,
                {
                  width: (screenWidth - 40) / 3,
                  height: (screenWidth - 40) / 3
                }
              ]}
            />
            <Image
              source={{
                uri:
                  'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
              }}
              style={[
                AppStyle.margin_h5,
                AppStyle.margin_b10,
                {
                  width: (screenWidth - 40) / 3,
                  height: (screenWidth - 40) / 3
                }
              ]}
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
  },
  info_title: {
    height: 39,
    marginLeft: 12,
    justifyContent: 'center'
  },
  info_content: {
    paddingVertical: 9,
    paddingHorizontal: 12,
    backgroundColor: colorMap.white[0],
    minHeight: 43,
    justifyContent: 'center'
  }
});
