import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Header, Icon } from '../../components/Index';
import QrcodeCard from '../../components/QrcodeCard';
import { AppStyle, styleMap } from '../../styles/Index';

export default class ImQrcode extends Component {
  static navigationOptions = {
    title: '群二维码',
    header: null
  };

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
              <Text style={AppStyle.header_btn_text}>取消</Text>
            </TouchableOpacity>
          }
          title={'群二维码'}
          headerRight={
            <TouchableOpacity
              onPress={() => {}}
              style={AppStyle.header_btn_right}
            >
              <Icon name={'more'} style={AppStyle.header_btn_icon} />
            </TouchableOpacity>
          }
        />

        <ScrollView style={styles.main}>
          <View style={styles.qrcode}>
            <QrcodeCard />
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
  main: {
    ...styleMap.bjColor_blue3,
    flex: 1
  },
  qrcode: {
    marginTop: 53,
    marginBottom: 10,
    marginHorizontal: 18
  }
});
