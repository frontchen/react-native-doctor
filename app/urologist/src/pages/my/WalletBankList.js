import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
  SectionList,
  TextInput
} from 'react-native';

import {
  Header,
  Icon,
  ListItem,
  SearchBar,
  Spinner
} from '../../components/Index';
import { AppStyle, colorMap } from '../../styles/Index';

export default class WalletBankList extends Component {
  static navigationOptions = { title: '选择银行', header: null };

  constructor(props) {
    super(props);

    this.state = { dataSource: [], isloading: true };

    // 分页相关
    this.pageIndex = 1;
    this.page = { total_page: 1 };
    this._list = [];
  }

  // 数据请求
  componentDidMount() {
    this._getData(true);
  }

  _getData(isRefresh) {
    let listData = [
      { key: '热', data: [{ name: '中国工商银行' }, { name: '中国工商银行' }] },
      { key: 'A', data: [{ name: '中国工商银行' }] },
      { key: 'B', data: [{ name: '中国工商银行' }] },
      { key: 'C', data: [{ name: '中国工商银行' }] },
      { key: 'D', data: [{ name: '中国工商银行' }] },
      { key: 'E', data: [{ name: '中国工商银行' }] },
      { key: 'F', data: [{ name: '中国工商银行' }] },
      { key: 'G', data: [{ name: '中国工商银行' }] },
      { key: 'H', data: [{ name: '中国工商银行' }] },
      { key: 'I', data: [{ name: '中国工商银行' }] },
      { key: 'J', data: [{ name: '中国工商银行' }] },
      { key: 'M', data: [{ name: '中国工商银行' }] }
    ];
    //listData = [];
    let newlist;
    if (isRefresh) {
      newlist = listData;
    } else {
      newlist = this._list.slice().concat(listData);
    }
    this._list = newlist;
    this.setState({
      isloading: false,
      dataSource: newlist
    });
  }

  _renderRow(item) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.goBack();
        }}
        style={
          [
            AppStyle.padding_h12,
            AppStyle.bjColor_white0,
            { height: 54, justifyContent: 'center' }
          ]
          //borderBottomWidth: 0.5,
          //borderBottomColor: colorMap.gray[13]
        }
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View>
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
          title={'选择银行'}
        />
        <SectionList
          sections={this.state.dataSource}
          extraData={this.state}
          keyExtractor={(item, index) => {
            return String(index);
          }}
          renderItem={({ item, index }) => this._renderRow(item)}
          ListHeaderComponent={() => {
            return (
              <ListItem
                style={[AppStyle.margin_t10, { height: 54 }]}
                left={
                  <View>
                    <Icon
                      name={'search'}
                      style={[AppStyle.font_s20, AppStyle.color_gray2]}
                    />
                  </View>
                }
                center={
                  <TextInput
                    style={AppStyle.font_s14}
                    underlineColorAndroid="transparent"
                    textAlignVertical="center"
                    autoFocus={false}
                    enablesReturnKeyAutomatically={true}
                    returnKeyType="done"
                    placeholder={'搜索'}
                    placeholderTextColor={colorMap.gray[3]}
                    keyboardType="numeric"
                    defaultValue={''}
                    onChangeText={text => {}}
                    onSubmitEditing={e => {}}
                    onEndEditing={e => {
                      if (e.nativeEvent.text !== '') {
                      }
                    }}
                  />
                }
              />
            );
          }}
          renderSectionHeader={({ section }) => {
            return (
              <View
                style={[
                  AppStyle.padding_h12,
                  AppStyle.bjColor_white3,
                  {
                    height: 44,
                    justifyContent: 'center'
                  }
                ]}
              >
                <Text>{section.key}</Text>
              </View>
            );
          }}
          stickySectionHeadersEnabled={true}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={[
                  AppStyle.flex1,
                  {
                    borderBottomWidth: 0.5,
                    borderBottomColor: colorMap.gray[13]
                  }
                ]}
              />
            );
          }}
          ListEmptyComponent={() => {
            if (this.state.isloading) {
              return <View />;
            }
            return (
              <View style={[AppStyle.center, AppStyle.margin_t53]}>
                <Image
                  source={require('../../assets/images/pic_data.png')}
                  style={styles.list_nothing_pic}
                />
                <Text
                  style={[
                    AppStyle.font_s15,
                    AppStyle.margin_t15,
                    AppStyle.color_gray1
                  ]}
                >
                  暂无记录
                </Text>
              </View>
            );
          }}
          ListFooterComponent={() => {
            let footMsg = '';
            if (this.state.isloading) {
              footMsg = '正在加载...';
            }
            // if (
            //   this.pageIndex == this.page.total_page &&
            //   this.state.dataSource.length > 0
            // ) {
            //   footMsg = '已经全部加载完毕';
            // }
            let footStyle = [AppStyle.row, AppStyle.center];
            if (footMsg) {
              footStyle.push(AppStyle.padding_v10);
            }

            return (
              <View style={footStyle}>
                {this.state.isloading ? (
                  <Spinner style={AppStyle.margin_r8} />
                ) : null}
                <Text style={[AppStyle.font_s14, AppStyle.color_gray1]}>
                  {footMsg}
                </Text>
              </View>
            );
          }}
          refreshing={false}
          onRefresh={() => {
            this.pageIndex = 1;
            this._getData(true);
          }}
          onEndReachedThreshold={0.1}
          onEndReached={info => {
            if (
              !this.state.isloading &&
              this.pageIndex < this.page.total_page
            ) {
              this.setState({ isloading: true });
              this.pageIndex += 1;
              this._getData();
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_btn_width: {
    width: 70
  },
  list_nothing_pic: {
    width: 100,
    height: 100
  }
});
