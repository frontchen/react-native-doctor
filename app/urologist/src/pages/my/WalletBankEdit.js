import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
	Image,
	StyleSheet,
	PixelRatio,
	TouchableOpacity,
	Dimensions,
	TextInput,
} from 'react-native';

import { Header, Icon, ListItem, SearchBar, Button } from '../../components/Index';
import { AppStyle, colorMap } from '../../styles/Index';

export default class WalletBankEdit extends Component {
	static navigationOptions = { title: '添加修改提现账户', header: null };

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
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
						</TouchableOpacity>
					}
					title={'添加修改提现账户'}
				/>

				<ScrollView style={[AppStyle.bjColor_white0, AppStyle.margin_t10]}>
					<View style={[AppStyle.margin_l30, AppStyle.bjColor_white0]}>
						<ListItem
							style={[
								styles.info_item,
								styles.borderBottom,
								{ justifyContent: 'flex-start', alignItems: 'center' },
							]}
							left={<Text style={styles.info_item_title}>账户姓名</Text>}
							center={
								<TextInput style={[styles.info_item_content]} underlineColorAndroid="transparent" />
							}
						/>
						<ListItem
							style={[
								styles.info_item,
								styles.borderBottom,
								{ justifyContent: 'flex-start', alignItems: 'center' },
							]}
							left={<Text style={styles.info_item_title}>银行账户</Text>}
							center={
								<TextInput style={[styles.info_item_content]} underlineColorAndroid="transparent" />
							}
						/>
						<ListItem
							style={[styles.info_item, { justifyContent: 'flex-start', alignItems: 'center' }]}
							left={<Text style={styles.info_item_title}>银行名称</Text>}
							center={<Text style={[styles.info_item_content]}>中国工商银行</Text>}
						/>
					</View>
				</ScrollView>
				<View style={AppStyle.margin_t10}>
					<ListItem
						style={[
							styles.borderBottom,
							styles.info_item1,
							{ justifyContent: 'flex-start', alignItems: 'center' },
						]}
						left={<Text style={styles.info_item_title}>验证码</Text>}
						center={<TextInput style={[styles.info_item_content]} underlineColorAndroid="transparent" />}
						right={
							<Button
								style={[AppStyle.bjColor_white0, { height: 29, width: 100 }]}
								title={'获取验证码'}
								color={colorMap.gray[0]}
								fontSize={13}
							/>
						}
					/>
				</View>
				<View style={[AppStyle.margin_t10]}>
					<Text style={[AppStyle.font_s12, { paddingLeft: 40 }]}>
						*该手机号为账户注册时的手机号码，如需修改请<Text style={AppStyle.color_blue0}>联系客服</Text>
					</Text>
				</View>
				<View style={[AppStyle.margin_h12, AppStyle.margin_t30]}>
					<Button title="提交" onPress={() => {}} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header_btn_width: {
		width: 70,
	},
	info_item: {
		height: 49,
		padding: 0,
		paddingLeft: 0,
		marginLeft: 10,
	},
	info_item1: {
		height: 49,
		padding: 0,
		paddingLeft: 40,
	},
	info_item_title: {
		fontSize: 16,
		textAlign: 'left',
		width: 70,
		color: colorMap.black[1],
	},
	info_item_content: {
		textAlign: 'left',
		fontSize: 16,
		padding: 0,
		color: colorMap.black[1],
	},
	borderBottom: {
		borderBottomWidth: 0.5,
		borderBottomColor: colorMap.gray[13],
	},
	borderTop: {
		borderTopWidth: 0.5,
		borderTopColor: colorMap.gray[13],
	},
	info_btn: {
		height: 32,
		width: 100,
		borderWidth: 1,
		borderColor: colorMap.gray[1],
		borderRadius: 3,
	},
});
