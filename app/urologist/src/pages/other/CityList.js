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
import { AppStyle, screenHeight } from '../../styles/Index';

export default class CityList extends Component {
  static navigationOptions = { title: '选择城市', header: null };

  constructor(props) {
    super(props);
    this.state = { dataSouce: [], refreshing: true };
    this.cityList = [
      {
        province_id: 2,
        data: [
          { city_id: 0, city_name: '广州' },
          { city_id: 1, city_name: '汕头' },
          { city_id: 2, city_name: '潮州' },
          { city_id: 3, city_name: '珠海' },
          { city_id: 4, city_name: '梅州' },
          { city_id: 5, city_name: '惠州' }
        ]
      },
      {
        province_id: 3,
        data: [
          { city_id: 6, city_name: '合肥市' },
          { city_id: 7, city_name: '芜湖市' },
          { city_id: 8, city_name: '巢湖市' },
          { city_id: 9, city_name: '宣城市' }
        ]
      },
      {
        province_id: 5,
        data: [
          { city_id: 10, city_name: '郑州' },
          { city_id: 11, city_name: '漯河' },
          { city_id: 12, city_name: '洛阳' },
          { city_id: 13, city_name: '许昌' }
        ]
      }
    ];
  }

  componentWillMount() {
    this.setState({ dataSource: this.cityList, refreshing: false });
    let city = this.props.navigation.state.params;

    if (city) {
      this.city = city;
    }
  }
  _renderEmptyView() {
    return (
      <View>
        <Text style={{ fontSize: 16, alignSelf: 'center' }}>
          还没有数据哦！
        </Text>
      </View>
    );
  }

  _renderCityList = ({ item, index }) => {
    var cityData = [];
    if (item.province_id == this.city.province_id) {
      cityData = item.data;
    }

    return cityData.map((v, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            this.props.navigation.navigate('AreaList', v);
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
              {v.city_name}
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
          title={'市'}
        />

        <View>
          <FlatList
            extraData={this.state}
            data={this.cityList}
            keyExtractor={(item, index) => {
              return String(index);
            }}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={this._renderCityList}
            ListEmptyComponent={this._renderEmptyView()}
            refreshing={false}
            onRefresh={() => {
              this.setState({ dataSource: this.cityList });
            }}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              this.setState({ refreshing: true }, () => {
                let data = this.state.dataSource;
                data.push({ city_id: 11, city_name: '云南' });
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
