import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { LocaleConfig, CalendarList, Agenda } from 'react-native-calendars';

import { Header, Icon } from '../../components/Index';
import { AppStyle, colorMap } from '../../styles/Index';

export default class AdvisoryIndex extends Component {
  static navigationOptions = {
    title: '咨询',
    header: null,
    headerBackTitle: null,
    headerTitleStyle: { alignSelf: 'center' },
    tabBarIcon: ({ focused, tintColor }) => {
      return (
        <Icon
          name={focused ? 'advisoryActive' : 'advisory'}
          style={{ fontSize: 26, color: tintColor }}
        />
      );
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      item: {}
    };
  }

  componentDidMount() {
    this.setState({
      item: {
        '2018-03-25': [{ text: '11' }, { text: '12' }],
        '2018-03-26': [
          { text: '22', name: '马云', desc: '泌尿系肿瘤带确诊中' }
        ],
        '2018-03-27': [{ text: '33' }]
      }
    });
  }

  render() {
    return (
      <View style={AppStyle.container}>
        <Header title={'咨询时间表'} />

        <Agenda
          items={this.state.item}
          selected={'2018-03-26'}
          renderItem={(item, firstItemInDay) => {
            return (
              <View
                style={[
                  AppStyle.row,
                  AppStyle.centerm,
                  AppStyle.padding_v18,
                  {
                    borderBottomWidth: 1,
                    borderBottomColor: colorMap.gray[4]
                  }
                ]}
              >
                <View style={[AppStyle.row, AppStyle.center]}>
                  <View
                    style={[
                      AppStyle.bjColor_blue1,
                      AppStyle.margin_l10,
                      AppStyle.margin_r7,
                      { width: 4, height: 4, borderRadius: 2 }
                    ]}
                  />
                  <View style={AppStyle.padding_r20}>
                    <Text style={[AppStyle.font_s12, AppStyle.color_gray1]}>
                      10:00 - 10:15
                    </Text>
                  </View>
                </View>
                <View style={AppStyle.flex1}>
                  <View
                    style={[
                      AppStyle.row,
                      AppStyle.center,
                      AppStyle.padding_r12
                    ]}
                  >
                    <View style={AppStyle.flex1}>
                      <Text style={[AppStyle.font_s14, AppStyle.color_gray1]}>
                        {item.name}
                      </Text>
                      <Text
                        style={[
                          AppStyle.padding_t10,
                          AppStyle.font_s15,
                          AppStyle.color_black1
                        ]}
                        numberOfLines={1}
                      >
                        {item.desc}
                      </Text>
                    </View>
                    <View
                      style={[
                        AppStyle.margin_l20,
                        AppStyle.center,
                        AppStyle.bjColor_blue1,
                        { width: 60, height: 24, borderRadius: 4 }
                      ]}
                    >
                      <Text style={[AppStyle.font_s12, AppStyle.color_white0]}>
                        进入咨询
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
          rowHasChanged={(r1, r2) => {
            return r1.text !== r2.text;
          }}
          renderEmptyDate={() => {
            return (
              <View>
                <Text>empty</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}
