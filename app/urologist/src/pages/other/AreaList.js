import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native';

import { Header, Icon } from '../../components/Index';
import { AppStyle } from '../../styles/Index';

export default class AreaList extends Component {
  static navigationOptions = { title: '选择区域', header: null };

  constructor(props) {
    super(props);
    this.state = { dataSouce: [], refreshing: true };
    this.areaList = [
      {
        city_id: 0,
        data: [
          { area_id: 0, area_name: '白云区' },
          { area_id: 1, area_name: '天河区' },
          { area_id: 2, area_name: '海珠区' },
          { area_id: 3, area_name: '番禺区' },
          { area_id: 4, area_name: '黄浦区' },
          { area_id: 5, area_name: '南沙区' }
        ]
      },
      {
        city_id: 3,
        data: [
          { area_id: 0, area_name: '香洲区' },
          { area_id: 1, area_name: '大塘区' },
          { area_id: 2, area_name: '花地玛堂区' },
          { area_id: 3, area_name: '花王堂区' }
        ]
      },
      {
        city_id: 10,
        data: [
          { area_id: 0, area_name: '二七区' },
          { area_id: 1, area_name: '金水区' },
          { area_id: 2, area_name: '高新区' },
          { area_id: 3, area_name: '惠济区' }
        ]
      }
    ];
  }
  componentWillMount() {
    this.setState({ dataSource: this.areaList, refreshing: false });
    let city = this.props.navigation.state.params;

    if (city) {
      this.city = city;
    }
  }
  _renderEmptyView() {
    return (
      <Text style={{ fontSize: 20, alignSelf: 'center' }}>还没有数据哦！</Text>
    );
  }

  _renderAreaList = ({ item, index }) => {
    var areaData = [];
    if (item.city_id == this.city.city_id) {
      areaData = item.data;
    }

    return areaData.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}
          style={[
            AppStyle.row,
            AppStyle.flex1,
            AppStyle.margin_l12,
            {
              minHeight: 49,
              borderBottomWidth: 0.5,
              alignItems: 'center',
              justifyContent: 'flex-start',
              borderColor: AppStyle.color_gray4
            }
          ]}
        >
          <View>
            <Text style={[AppStyle.font_s16, AppStyle.color_black1]}>
              {item.area_name}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
  };
  render() {
    return (
      <View style={[AppStyle.container, AppStyle.bjColor_white0]}>
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
              <Text style={AppStyle.header_btn_text}>返回</Text>
            </TouchableOpacity>
          }
          title={'区'}
        />

        <View>
          <FlatList
            extraData={this.state}
            data={this.areaList}
            keyExtractor={(item, index) => {
              return String(index);
            }}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={this._renderAreaList}
            ListEmptyComponent={this._renderEmptyView()}
            refreshing={false}
            onRefresh={() => {
              this.setState({ dataSource: this.areaList });
            }}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              this.setState({ refreshing: true }, () => {
                let data = this.state.dataSource;
                data.push({ area_id: 11, city_name: '湖南' });
                this.setState({ dataSource: data, refreshing: false });
              });
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header_btn_width: {
    width: 70
  },
  info_title: {
    minHeight: 34,
    paddingLeft: 12
  },
  info_desc: {
    minHeight: 49,
    alignItems: 'center'
  }
});
