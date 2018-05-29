import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';

import { Header, Icon, ListItem, Button } from '../../components/Index';
import { AppStyle, colorMap, styleMap } from '../../styles/Index';

export default class RegMaterial extends Component {
	static navigationOptions = { title: '注册2', header: null };

	constructor(props) {
		super(props);

		this.state = { item: {} };
	}

	render() {
		return (
			<View style={AppStyle.container}>
				<Header
					leftStyle={styles.header_btn_width}
					rightStyle={styles.header_btn_width}
					headerLeft={
						<TouchableOpacity
							style={[AppStyle.row, AppStyle.header_btn, AppStyle.header_btn_left]}
							onPress={() => {
								this.props.navigation.goBack();
							}}
						>
							<Icon name={'arrowLeft'} style={AppStyle.header_btn_icon} />
							<Text style={[AppStyle.header_btn_text]}>注册</Text>
						</TouchableOpacity>
					}
				/>
				<ScrollView
					style={[AppStyle.margin_t10, AppStyle.padding_h4, AppStyle.padding_h12, AppStyle.bjColor_white0]}
				>
					<View style={[AppStyle.margin_b17]}>
						<ListItem
							disabled={true}
							style={{ height: 50, paddingLeft: 0, paddingRight: 0 }}
							onPress={() => {
								this.props.navigation.navigate('ProvinceList', {});
							}}
							showBorder={true}
							left={
								<Text style={[AppStyle.font_s16, AppStyle.color_black1, styles.info_item_title]}>
									地区
								</Text>
							}
							right={
								<TouchableOpacity style={[AppStyle.row, { alignItems: 'center' }]}>
									<Text style={[AppStyle.margin_r10, AppStyle.color_gray3]}>请选择</Text>
									<Icon name={'arrowRight'} style={[AppStyle.font_s13, AppStyle.color_gray0]} />
								</TouchableOpacity>
							}
						/>
						<ListItem
							style={{ height: 50, paddingLeft: 0, paddingRight: 0 }}
							onPress={() => {
								this.props.navigation.navigate('HospitalList', {});
							}}
							showBorder={true}
							left={
								<Text style={[AppStyle.font_s16, AppStyle.color_black1, styles.info_item_title]}>
									所在医院
								</Text>
							}
							right={
								<TouchableOpacity style={[AppStyle.row, { alignItems: 'center' }]}>
									<Text style={[AppStyle.margin_r10, AppStyle.color_gray3]}>请选择</Text>
									<Icon name={'arrowRight'} style={[AppStyle.font_s13, AppStyle.color_gray0]} />
								</TouchableOpacity>
							}
						/>
						<ListItem
							style={{ height: 50, paddingLeft: 0, paddingRight: 0 }}
							showBorder={true}
							left={
								<Text style={[AppStyle.font_s16, AppStyle.color_black1, styles.info_item_title]}>
									科室
								</Text>
							}
							right={
								<TouchableOpacity style={[AppStyle.row, { alignItems: 'center' }]}>
									<Text style={[AppStyle.margin_r10, AppStyle.color_gray3]}>请选择</Text>
									<Icon name={'arrowRight'} style={[AppStyle.font_s13, AppStyle.color_gray0]} />
								</TouchableOpacity>
							}
						/>
						<ListItem
							style={{ height: 50, paddingLeft: 0, paddingRight: 0 }}
							showBorder={true}
							onPress={() => {
								this.props.navigation.navigate('TitleLevel', {});
							}}
							left={
								<Text style={[AppStyle.font_s16, AppStyle.color_black1, styles.info_item_title]}>
									职称
								</Text>
							}
							right={
								<TouchableOpacity style={[AppStyle.row, { alignItems: 'center' }]}>
									<Text style={[AppStyle.margin_r10, AppStyle.color_gray3]}>请选择</Text>
									<Icon name={'arrowRight'} style={[AppStyle.font_s13, AppStyle.color_gray0]} />
								</TouchableOpacity>
							}
						/>
					</View>
					<View style={[AppStyle.margin_t30, { justifyContent: 'center' }]}>
						<Button
							style={[AppStyle.bjColor_blue1]}
							onPress={() => {
								Alert.alert('', '账号或密码错误，请重新输入。', [{ text: '确定' }]);
							}}
							title={'完成医生用户注册'}
						/>
					</View>
					<View style={[AppStyle.row, AppStyle.padding_v20, AppStyle.padding_h12]}>
						<Text style={[AppStyle.font_s13, AppStyle.color_gray1]} numberOfLines={1}>
							我已阅读并同意
						</Text>
						<TouchableOpacity onPress={() => {}}>
							<Text
								style={[AppStyle.font_s13, AppStyle.color_blue2, { textDecorationLine: 'underline' }]}
							>
								《前列腺医生APP用户注册协议》
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	header_btn_width: {
		width: 80,
	},
	info_item_title: {
		fontSize: 16,
		textAlign: 'left',
		width: 70,
		color: colorMap.black[1],
	},
	info_item_content: {
		textAlign: 'left',
		fontSize: 15,
		padding: 0,

		color: colorMap.black[1],
	},
	bottom_info: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 20,
		flexDirection: 'row',
	},
	bottom_right: {
		paddingRight: 8,
		borderRightWidth: 1,
		borderColor: AppStyle.color_gray4,
	},
	person_image: {
		height: 67,
		width: 67,
		backgroundColor: '#E7E8E8',
		position: 'relative',
		bottom: 13,
		right: 0,
		borderRadius: 2,
	},
	trangle_bottomright: {
		width: 13,
		height: 13,
		borderBottomWidth: 1,
		borderColor: '#AAAAAA',
		backgroundColor: '#AAAAAA',
		borderRightWidth: 1,
		position: 'absolute',
		right: 0,
		bottom: 0,
	},
});
