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

import { Header, Icon, ListItem, Button } from '../../components/Index';
import { AppStyle, colorMap } from '../../styles/Index';

export default class WalletResult extends Component {
  static navigationOptions = { title: '成功提示', header: null };

  constructor(props) {
    super(props);
  }

  _getContent(item) {
    let { icon, title, button } = item;
    return (
      <View style={[AppStyle.bjColor_white0, styles.info_tips]}>
        <Icon name={icon} style={styles.info_icon} />
        <Text style={styles.info_title}>{title}</Text>
        {button}
      </View>
    );
  }

  render() {
    let content = this._getContent({
      icon: 'success',
      title: '绑定银行卡成功！',
      button: (
        <Button
          title={'去提现'}
          color={colorMap.blue[1]}
          borderColor={colorMap.blue[1]}
          fontSize={15}
          style={styles.info_btn}
        />
      )
    });

    content = this._getContent({
      icon: 'success',
      title: '您的安全密码已修改成功！',
      button: null
    });

    content = this._getContent({
      icon: 'success',
      title: '您的安全密码已设置成功，请前往绑定银行卡',
      button: (
        <Button
          title={'去绑卡'}
          color={colorMap.blue[1]}
          borderColor={colorMap.blue[1]}
          fontSize={15}
          style={styles.info_btn}
        />
      )
    });

    content = this._getContent({
      icon: 'wait',
      title: `你的提现申请已经提交，款项次月5-10号\n转入到您的账户`,
      button: null
    });

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
          title={'绑卡成功'}
        />

        <View>{content}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_btn_width: {
    width: 70
  },
  info_tips: {
    alignItems: 'center',
    paddingTop: 45,
    paddingBottom: 30
  },
  info_icon: {
    fontSize: 60,
    color: colorMap.green[1],
    color: colorMap.yellow[0]
  },
  info_title: {
    marginTop: 40,
    marginBottom: 30,
    fontSize: 15,
    lineHeight: 20,
    color: colorMap.black[1],
    textAlign: 'center'
  },
  info_btn: {
    width: 120,
    height: 28,
    backgroundColor: colorMap.white[0]
  }
});
