import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import { Header, Icon, ListItem } from '../../components/Index';
import { AppStyle, styleMap } from '../../styles/Index';

export default class DoctorSelect extends Component {
	static navigationOptions = { title: '选择医生', header: null };

	constructor(props) {
		super(props);

		this.listData = [
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '马云',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '马云',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '马云',
			},
		];
	}

	_renderList(item, index) {
		return (
			<ListItem
				key={`nav_${index}`}
				showBorder={true}
				onPress={() => {
					this.props.navigation.goBack();
				}}
				style={[AppStyle.margin_v10, AppStyle.margin_h10]}
				left={
					<View style={[AppStyle.row, { alignItems: 'center' }]}>
						<Icon name={'choose'} style={styles.list_left_icon} />
						<Image source={{ uri: item.image }} style={styles.list_left_image} />
						<View style={styles.list_center}>
							<Text style={styles.list_center_title}>
								{item.name}
							</Text>
						</View>
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
			<View>
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
					title={'选择医生'}
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
				<ScrollView>
					<ListItem
						style={[styles.group_search]}
						left={
							<View>
								<Icon name={'search'} style={styles.group_search_icon} />
							</View>
						}
						center={
							<TextInput
								style={styles.input_text}
								underlineColorAndroid="transparent"
								textAlignVertical="center"
								autoFocus={false}
								enablesReturnKeyAutomatically={true}
								returnKeyType="done"
								placeholder={'搜索'}
								placeholderTextColor={styleMap.color_gray3.color}
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
					<View style={styles.title}>
						<Text style={styles.title_text}>前列腺炎</Text>
					</View>
					<View>
						{list}
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	group_search: {
		height: 54,
	},
	group_search_icon: {
		fontSize: 20,
		...styleMap.color_gray2,
	},
	input_text: {
		fontSize: 14,
	},
	title: {
		height: 39,
		marginLeft: 12,
		justifyContent: 'center',
	},
	title_text: {
		fontSize: 14,
		...styleMap.color_gray0,
	},
	list_left_icon: {
		marginRight: 15,
		fontSize: 30,
		...styleMap.color_green1,
	},
	list_left_image: {
		width: 36,
		height: 36,
	},
	list_center: {
		marginLeft: 15,
	},
	list_center_title: {
		fontSize: 17,
		...styleMap.color_black1,
	},
});
