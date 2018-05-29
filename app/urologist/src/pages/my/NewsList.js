import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
  FlatList
} from 'react-native';

import {
  Header,
  Icon,
  ListItem,
  Button,
  Spinner
} from '../../components/Index';
import {
  AppStyle,
  colorMap,
  screenWidth,
  statusBarHeight
} from '../../styles/Index';

export default class NewsList extends Component {
  static navigationOptions = { title: '泌尿科头条', header: null };

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
      {
        pic:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '王医生',
        desc: '新的医学新闻，美国最新研究表示这个病可以治了，我们国家开始使用'
      },
      {
        pic:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '王医生',
        desc: '新的医学新闻，美国最新研究表示这个病可以治了，我们国家开始使用'
      },
      {
        pic:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '王医生',
        desc: '新的医学新闻，美国最新研究表示这个病可以治了，我们国家开始使用'
      },
      {
        pic:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '王医生',
        desc: '新的医学新闻，美国最新研究表示这个病可以治了，我们国家开始使用'
      }
    ];
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
    let hearList = [
      { name: '马国昌' },
      { name: '马国昌' },
      { name: '马国昌' },
      { name: 'Magic' },
      { name: 'Magic' },
      { name: 'Magic' },
      { name: 'Magic' }
    ];

    let heart = hearList.map((v, i) => {
      return (
        <TouchableOpacity key={`heart-${i}`}>
          <Text
            style={[
              AppStyle.font_s14,
              AppStyle.color_blue6,
              AppStyle.margin_r6,
              { lineHeight: 16, fontWeight: 'bold' }
            ]}
          >
            {v.name}
          </Text>
        </TouchableOpacity>
      );
    });

    let comment = hearList.map((v, i) => {
      return (
        <TouchableOpacity
          style={[AppStyle.row, AppStyle.padding_b4]}
          key={`comment${i}`}
        >
          <Text>
            <Text
              style={[
                AppStyle.font_s14,
                AppStyle.color_blue6,
                styles.news_bold
              ]}
            >
              Magic
            </Text>：
            <Text style={[AppStyle.font_s14, AppStyle.color_black1]}>
              我觉得这个很有用！我们医院最近也在研究这一块，值得深入。
            </Text>
          </Text>
        </TouchableOpacity>
      );
    });

    return (
      <View
        ref={sectionHeader => {
          this.sectionHeader = sectionHeader;
        }}
        style={[
          AppStyle.row,
          AppStyle.padding_h12,
          AppStyle.padding_v24,
          AppStyle.bjColor_white0
        ]}
      >
        <TouchableOpacity style={AppStyle.margin_r10}>
          <Image source={{ uri: item.pic }} style={{ width: 42, height: 42 }} />
        </TouchableOpacity>
        <View style={AppStyle.flex1}>
          <Text style={[AppStyle.font_s16, AppStyle.color_black0]}>
            {item.name}
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('NewsDetail', {});
            }}
            style={[
              AppStyle.row,
              AppStyle.center,
              AppStyle.margin_v8,
              AppStyle.padding5,
              AppStyle.bjColor_white3
            ]}
          >
            <Image
              source={{ uri: item.pic }}
              style={{ width: 42, height: 42 }}
            />
            <View style={[AppStyle.flex1, AppStyle.margin_l5]}>
              <Text
                numberOfLines={2}
                style={[AppStyle.font_s15, AppStyle.color_black0]}
              >
                {item.desc}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={AppStyle.row}>
            <View style={AppStyle.flex1}>
              <Text style={[AppStyle.font_s12, AppStyle.color_gray0]}>
                47分钟前
              </Text>
            </View>
            <TouchableOpacity onPress={() => {}}>
              <Icon
                name={'comment'}
                style={[AppStyle.font_s18, AppStyle.color_blue5]}
              />
            </TouchableOpacity>
          </View>

          <View style={AppStyle.margin_t8}>
            <View style={styles.news_topTriangle} />
            <View
              style={[
                AppStyle.row,
                AppStyle.bjColor_white3,
                AppStyle.padding_h13,
                AppStyle.padding_v10,
                { alignItems: 'center', flexWrap: 'wrap' }
              ]}
            >
              <Icon
                name={'heart'}
                style={[
                  AppStyle.font_s16,
                  AppStyle.color_blue6,
                  AppStyle.margin_r6
                ]}
              />
              {heart}
            </View>
            <View
              style={[
                AppStyle.padding_h13,
                AppStyle.padding_t4,
                AppStyle.bjColor_white3,
                { borderTopWidth: 1, borderTopColor: colorMap.gray[4] }
              ]}
            >
              {comment}
            </View>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={AppStyle.container}>
        <Header
          leftStyle={styles.header_btn_width}
          rightStyle={styles.header_btn_width}
          headerLeft={
            <TouchableOpacity
              style={
                [AppStyle.row, AppStyle.header_btn, AppStyle.header_btn_left] //headerStyle={{ backgroundColor: 'rgba(0,0,0,0.2)' }} //statusBarStyle={AppStyle.bjColor_black0}
              }
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Icon name={'arrowLeft'} style={AppStyle.header_btn_icon} />
              <Text style={AppStyle.header_btn_text}>我的</Text>
            </TouchableOpacity>
          }
          title={'泌尿科头条'}
        />
        <FlatList
          data={this.state.dataSource}
          extraData={this.state}
          keyExtractor={(item, index) => {
            return String(index);
          }}
          renderItem={({ item, index }) => this._renderRow(item)}
          ListHeaderComponent={() => {
            return (
              <View>
                <Image
                  source={require('../../assets/images/pic_news_banner.jpg')}
                  style={styles.list_banner}
                />
              </View>
            );
          }}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={[
                  AppStyle.flex1,
                  { borderBottomWidth: 1, borderBottomColor: colorMap.gray[4] }
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
  },
  list_banner: {
    width: screenWidth,
    height: screenWidth * 0.56
  },
  news_topTriangle: {
    marginLeft: 10,
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    borderRightWidth: 5,
    borderRightColor: 'transparent',
    borderBottomWidth: 8,
    borderBottomColor: colorMap.white[3]
  },
  news_bold: {
    fontWeight: 'bold'
  }
});
