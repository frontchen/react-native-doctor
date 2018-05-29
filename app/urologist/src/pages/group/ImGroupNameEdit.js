import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import { Header, Icon, SearchBar, ListItem } from '../../components/Index';
import { AppStyle, styleMap } from '../../styles/Index';

export default class ImGroupNameEdit extends Component {
	static navigationOptions = { title: '修改专家团名称', header: null };

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={AppStyle.container}>
				<Header
					headerLeft={
						<TouchableOpacity
							style={[AppStyle.row, AppStyle.header_btn, AppStyle.header_btn_left]}
							onPress={() => {
								this.props.navigation.goBack();
							}}
						>
							<Text style={AppStyle.header_btn_text}>取消</Text>
						</TouchableOpacity>
					}
					title={'修改专家团名称'}
					headerRight={
						<TouchableOpacity
							style={[AppStyle.row, AppStyle.header_btn, AppStyle.header_btn_right]}
							onPress={() => {
								this.props.navigation.goBack();
							}}
						>
							<Text style={AppStyle.header_btn_text}>完成</Text>
						</TouchableOpacity>
					}
				/>

				<View style={[AppStyle.bjColor_gray4]}>
					<Text
						style={[
							AppStyle.margin_t18,
							AppStyle.padding_l12,
							AppStyle.margin_b8,
							AppStyle.color_gray0,
							AppStyle.font_s14,
						]}
					>
						专家团名称
					</Text>
					<TextInput
						style={[
							AppStyle.font_s15,
							AppStyle.padding_l12,
							AppStyle.color_black0,
							AppStyle.bjColor_white0,
							AppStyle.center,
							AppStyle.padding_l12,
							AppStyle.padding_t15,
						]}
						underlineColorAndroid="transparent"
						ref="testInput"
						autoFocus={true}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	info_item: {
		height: 49,
	},
	header_btn_width: {
		width: 100,
	},
});
