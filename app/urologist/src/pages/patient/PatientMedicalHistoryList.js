import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

import { Header, Icon, ListItem } from '../../components/Index';
import { AppStyle, styleMap } from '../../styles/Index';

export default class PatientMedicalHistoryList extends Component {
  static navigationOptions = { title: 'TA的家庭病历本', header: null };

  constructor(props) {
    super(props);

    this.listData = [
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '章大天',
        type: 0
      },
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '章大天',
        type: 1
      },
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '章大天',
        type: 1
      },
      {
        image:
          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        name: '章大天',
        type: 1
      }
    ];
  }

  componentWillMount() {}

  componentDidMount() {}

  _renderList(item, index) {
    const bookImageStyles = [styles.book_image];
    const bookTitleStyles = [styles.book_title];
    const bookIconStyles = [styles.book_right_icon];

    if (item.type == 1) {
      bookImageStyles.push({ opacity: 0.5 });
      bookTitleStyles.push({ opacity: 0.5 });
      bookIconStyles.push({
        opacity: 0.5,
        fontSize: 20
      });
    }

    return (
      <ListItem
        key={`book-${index}`}
        showBorder={true}
        disabled={item.type == 1 ? true : false}
        left={
          <View>
            <Image source={{ uri: item.image }} style={bookImageStyles} />
          </View>
        }
        center={
          <View>
            <Text style={bookTitleStyles}>{item.name}</Text>
          </View>
        }
        right={
          <View>
            <Icon
              name={item.type == 0 ? 'arrowRight' : 'locked'}
              style={bookIconStyles}
            />
          </View>
        }
      />
    );
  }

  render() {
    let list = this.listData.map((v, i) => {
      return this._renderList(v, i);
    });

    return (
      <View style={[AppStyle.container]}>
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
              <Text style={AppStyle.header_btn_text}>详细资料</Text>
            </TouchableOpacity>
          }
          title={'TA的家庭病历本'}
          rightStyle={styles.header_btn_width}
        />
        <ScrollView style={{ marginTop: 10 }}>{list}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_btn_width: {
    width: 91
  },
  book_image: {
    width: 65,
    height: 65,
    borderRadius: 5
  },
  book_title: {
    fontSize: 18,
    ...styleMap.color_black0
  },
  book_right_icon: {
    paddingRight: 5,
    fontSize: 15,
    ...styleMap.color_black1
  }
});
