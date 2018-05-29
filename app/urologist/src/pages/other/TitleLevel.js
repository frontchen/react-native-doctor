import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Header, Icon, ListItem, Button } from '../../components/Index';
import { AppStyle, colorMap } from '../../styles/Index';

export default class TitleLevel extends Component {
  static navigationOptions = { title: '选择职称', header: null };

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
            </TouchableOpacity>
          }
          title={'选择职称'}
          rightStyle={styles.header_btn_width}
        />
        <ScrollView>
          <View
            style={[
              AppStyle.row,
              AppStyle.flex1,
              {
                borderRadius: 5,
                minHeight: 49,
                margin: 10,
                alignItems: 'center'
              },
              AppStyle.bjColor_white0
            ]}
          >
            <TouchableOpacity
              style={[
                { flex: 0.5, justifyContent: 'flex-start', paddingLeft: 17 },
                AppStyle.row
              ]}
            >
              <View style={[styles.checkbox]} />
              <View style={[{ marginLeft: 16 }]}>
                <Text style={[styles.font_style]}>教授</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                { flex: 0.5, justifyContent: 'flex-start', paddingLeft: 17 },
                ,
                AppStyle.row
              ]}
            >
              <View style={[styles.checkbox]} />
              <View style={[{ marginLeft: 16 }]}>
                <Text style={[styles.font_style]}>副教授</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={[
              AppStyle.flex1,
              AppStyle.margin_h10,
              AppStyle.padding_v10,
              { borderRadius: 5, minHeight: 105, flexDirection: 'column' },
              AppStyle.bjColor_white0
            ]}
          >
            <View
              style={[
                AppStyle.row,
                AppStyle.flex1,
                { flex: 0.3, alignItems: 'center' }
              ]}
            >
              <TouchableOpacity
                style={[
                  { flex: 0.5, justifyContent: 'flex-start', paddingLeft: 17 },
                  AppStyle.row
                ]}
              >
                <View style={[styles.checkbox]} />
                <View style={[{ marginLeft: 16 }]}>
                  <Text style={[styles.font_style]}>主任医师</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  { flex: 0.5, justifyContent: 'flex-start', paddingLeft: 17 },
                  ,
                  AppStyle.row
                ]}
              >
                <View style={[styles.checkbox]} />
                <View style={[{ marginLeft: 16 }]}>
                  <Text style={[styles.font_style]}>副主任医师</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={[
                AppStyle.row,
                AppStyle.flex1,
                { flex: 0.3, alignItems: 'center' }
              ]}
            >
              <TouchableOpacity
                style={[
                  { flex: 0.5, justifyContent: 'flex-start', paddingLeft: 17 },
                  AppStyle.row
                ]}
              >
                <View style={[styles.checkbox]} />
                <View style={[{ marginLeft: 16 }]}>
                  <Text style={[styles.font_style]}>主治医师</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  { flex: 0.5, justifyContent: 'flex-start', paddingLeft: 17 },
                  ,
                  AppStyle.row
                ]}
              >
                <View style={[styles.checkbox]} />
                <View style={[{ marginLeft: 16 }]}>
                  <Text style={[styles.font_style]}>住院医师</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={[
                AppStyle.row,
                AppStyle.flex1,
                { flex: 0.3, alignItems: 'center' }
              ]}
            >
              <TouchableOpacity
                style={[
                  { flex: 0.5, justifyContent: 'flex-start', paddingLeft: 17 },
                  AppStyle.row
                ]}
              >
                <View style={[styles.checkbox]} />
                <View style={[{ marginLeft: 16 }]}>
                  <Text style={[styles.font_style]}>主任技师</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  { flex: 0.5, justifyContent: 'flex-start', paddingLeft: 17 },
                  ,
                  AppStyle.row
                ]}
              >
                <View style={[styles.checkbox]} />
                <View style={[{ marginLeft: 16 }]}>
                  <Text style={[styles.font_style]}>副主任技师</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              AppStyle.row,
              AppStyle.flex1,
              {
                borderRadius: 5,
                minHeight: 49,
                margin: 10,
                alignItems: 'center'
              },
              AppStyle.bjColor_white0
            ]}
          >
            <TouchableOpacity
              style={[
                { flex: 0.5, justifyContent: 'flex-start', paddingLeft: 17 },
                AppStyle.row
              ]}
            >
              <View style={[styles.checkbox]} />
              <View style={[{ marginLeft: 16 }]}>
                <Text style={[styles.font_style]}>研究员</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                { flex: 0.5, justifyContent: 'flex-start', paddingLeft: 17 },
                ,
                AppStyle.row
              ]}
            >
              <View style={[styles.checkbox]} />
              <View style={[{ marginLeft: 16 }]}>
                <Text style={[styles.font_style]}>副研究员</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={[
              AppStyle.row,
              AppStyle.flex1,
              AppStyle.margin_h10,
              { borderRadius: 5, minHeight: 49, alignItems: 'center' },
              AppStyle.bjColor_white0
            ]}
          >
            <TouchableOpacity
              style={[
                { flex: 0.5, justifyContent: 'flex-start', paddingLeft: 17 },
                AppStyle.row
              ]}
            >
              <View style={[styles.checkbox]} />
              <View style={[{ marginLeft: 16 }]}>
                <Text style={[styles.font_style]}>以上都不是</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[AppStyle.margin_h12, AppStyle.margin_v30]}>
            <Button
              onPress={() => {}}
              style={[AppStyle.bjColor_blue1]}
              title={'确定'}
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
  checkbox: {
    height: 17,
    width: 17,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: AppStyle.color_gray4
  },
  font_style: {
    fontSize: 16,
    color: '#333'
  }
});
