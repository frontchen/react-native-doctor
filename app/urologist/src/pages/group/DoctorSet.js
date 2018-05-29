import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { Header, Icon, ListItem } from '../../components/Index';
import { AppStyle } from '../../styles/Index';

export default class DoctorSet extends Component {
	static navigationOptions = {
		title: '资料设置',
		header: null,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={AppStyle.container}>
				<Header
					leftStyle={doctorstyles.header_btn_width}
					headerLeft={
						<TouchableOpacity
							style={[AppStyle.row, AppStyle.header_btn, AppStyle.header_btn_left]}
							onPress={() => {
								this.props.navigation.goBack();
							}}
						>
							<Icon name={'arrowLeft'} style={AppStyle.header_btn_icon} />
							<Text style={AppStyle.header_btn_text}>详细资料</Text>
						</TouchableOpacity>
					}
					title={'资料设置'}
					rightStyle={doctorstyles.header_btn_width}
				/>
				<View style={AppStyle.margin_t10}>
					<ListItem
						style={doctorstyles.info_item}
						left={
							<View>
								<Text style={[AppStyle.font_s16, AppStyle.color_black2, doctorstyles.header_btn_width]}>
									收藏
								</Text>
							</View>
						}
						right={
							<View>
								<Icon name={'star'} style={[AppStyle.font_s20, AppStyle.color_black2]} />
							</View>
						}
					/>
				</View>
			</View>
		);
	}
}
const doctorstyles = StyleSheet.create({
	header_btn_width: {
		width: 80,
	},

	info_avatar: {
		width: 50,
		height: 50,
	},

	info_item: {
		height: 49,
	},
	info_item2: {
		height: 88,
	},

	info_center_pl10: {
		paddingLeft: 10,
	},
	info_book_image: {
		width: 51,
		height: 51,
	},
	info_btns: {
		paddingHorizontal: 15,
	},
});
