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

export default class ProvinceList extends Component {
  static navigationOptions = { title: '选择省份', header: null };
  constructor(props) {
    super(props);
    this.state = { dataSource: [], refreshing: true };

    this.provinceList = [
      { province_id: 0, province_name: '北京' },
      { province_id: 1, province_name: '上海' },
      { province_id: 2, province_name: '广东' },
      { province_id: 3, province_name: '安徽' },
      { province_id: 4, province_name: '重庆' },
      { province_id: 5, province_name: '河南' }
    ];
  }

  componentDidMount() {
    this.setState({ dataSource: this.provinceList, refreshing: false });
  }

  _renderHeader() {
    return (
      <View>
        <View style={[styles.info_title, { backgroundColor: '#eee' }]}>
          <Text
            style={[
              AppStyle.font_s12,
              AppStyle.margin_t13,
              AppStyle.margin_b10,
              { color: '#999' }
            ]}
          >
            当前位置
          </Text>
        </View>
        <View style={[styles.info_desc, AppStyle.bjColor_white0, AppStyle.row]}>
          <Icon
            name={'location'}
            style={[
              AppStyle.header_btn_icon,
              AppStyle.color_gray1,
              AppStyle.margin_l12
            ]}
          />
          <Text
            style={[
              AppStyle.font_s16,
              AppStyle.color_black1,
              AppStyle.margin_l11
            ]}
          >
            上海，闵行
          </Text>
        </View>
        <View
          style={[
            { minHeight: 32 },
            AppStyle.row,
            AppStyle.flex1,
            AppStyle.bjColor_gray4
          ]}
        />
      </View>
    );
  }
  _renderEmptyView() {
    return (
      <View style={AppStyle.center}>
        <Text style={{ fontSize: 16, alignSelf: 'center' }}>
          还没有数据哦！
        </Text>
      </View>
    );
  }

  _renderProvinList = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('CityList', item);
        }}
        style={[
          AppStyle.row,
          AppStyle.flex1,
          AppStyle.margin_l12,
          {
            minHeight: 49,
            borderBottomWidth: 0.5,
            alignItems: 'center',
            justifyContent: 'space-between',
            borderColor: AppStyle.color_gray4
          }
        ]}
      >
        <View>
          <Text style={[AppStyle.font_s16, AppStyle.color_black1]}>
            {item.province_name}
          </Text>
        </View>
        <View
          style={[AppStyle.row, AppStyle.header_btn, AppStyle.header_btn_left]}
        >
          <Icon
            name={'arrowRight'}
            style={[
              AppStyle.header_btn_icon,
              AppStyle.font_s16,
              AppStyle.color_gray1
            ]}
          />
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={[AppStyle.container, , AppStyle.bjColor_white0]}>
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
          title={'地区'}
        />

        <View style={[AppStyle.flex1, AppStyle.row]}>
          <FlatList
            extraData={this.state}
            data={this.provinceList}
            keyExtractor={(item, index) => {
              return String(index);
            }}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={this._renderProvinList}
            ListHeaderComponent={() => {
              return this._renderHeader();
            }}
            ListEmptyComponent={this._renderEmptyView()}
            ListFooterComponent={() => {
              return (
                <View style={AppStyle.center}>
                  <Text>正在加载数据</Text>
                </View>
              );
            }}
            refreshing={false}
            onRefresh={() => {
              this.setState({ dataSource: this.provinceList });
            }}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              this.setState({ refreshing: true }, () => {
                let data = this.state.dataSource;
                data.push({ province_id: 11, province_name: '北京1' });
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
