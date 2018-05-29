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

export default class WalletTaxpayerBindBank extends Component {
	static navigationOptions = { title: '添加纳税人信息', header: null };

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
					title={'添加纳税人信息'}
				/>
				<ScrollView style={[AppStyle.bjColor_white0]}>
					<View style={[{ height: 60 }, AppStyle.flex1, AppStyle.row, AppStyle.center]}>
						<View style={[styles.border_color, styles.border_bottom, { width: 25, height: 1 }]}>
							<Text />
						</View>
						<View style={[styles.ball_info1, AppStyle.center]}>
							<Text style={[AppStyle.font_s9, AppStyle.color_gray1]}>1</Text>
						</View>
						<View style={[styles.border_color, styles.border_bottom, { width: 94, height: 1 }]}>
							<Text />
						</View>
						<View style={[styles.ball_info, AppStyle.center]}>
							<Text style={[AppStyle.font_s9, AppStyle.color_blue0]}>2</Text>
						</View>
						<View style={[styles.border_color, styles.border_bottom, { width: 25, height: 1 }]}>
							<Text />
						</View>
					</View>
					<View
						style={[
							AppStyle.flex1,
							AppStyle.row,
							{ alignItems: 'center', justifyContent: 'center', position: 'relative', bottom: 11 },
						]}
					>
						<Text style={[AppStyle.font_s12, AppStyle.color_gray1, { position: 'relative', right: 25 }]}>
							纳税人信息
						</Text>
						<Text style={[AppStyle.font_s12, AppStyle.color_gray1, { position: 'relative', left: 25 }]}>
							绑定银行卡
						</Text>
					</View>
					<View
						style={[
							AppStyle.margin_t10,
							AppStyle.row,
							AppStyle.bjColor_gray4,
							{ height: 40, alignItems: 'center' },
						]}
					>
						<Text
							style={[AppStyle.font_s12, AppStyle.padding_h12, AppStyle.padding_t2, AppStyle.color_gray0]}
						>
							您的税后收入将汇至以下账户，请认真填写:
						</Text>
					</View>
					<View style={[AppStyle.padding_l30, AppStyle.bjColor_white0]}>
						<ListItem
							style={[
								styles.info_item,
								styles.border_bottom,
								{ justifyContent: 'flex-start', alignItems: 'center' },
							]}
							left={
								<View style={[AppStyle.row]}>
									<View style={[styles.line_style]} />
									<Text style={styles.info_item_title}>账户姓名</Text>
								</View>
							}
							center={
								<View>
									<TextInput
										style={[styles.info_item_content, AppStyle.font_s14]}
										underlineColorAndroid="transparent"
									/>
									<View style={styles.icon_emample} />
								</View>
							}
						/>

						<ListItem
							style={[styles.info_item, { justifyContent: 'flex-start', alignItems: 'center' }]}
							left={
								<View style={[AppStyle.row]}>
									<View style={[styles.line_style]} />
									<Text style={styles.info_item_title}>银行账户</Text>
								</View>
							}
							center={
								<TextInput
									style={[styles.info_item_content, AppStyle.color_gray1, AppStyle.font_s14]}
									underlineColorAndroid="transparent"
									placeholder={'请输入银行卡账号'}
									placeholderTextColor={AppStyle.color_gray1}
								/>
							}
						/>
					</View>
				</ScrollView>
				<View style={[AppStyle.margin_t10, AppStyle.bjColor_gray4]}>
					<Text style={[AppStyle.font_s12, AppStyle.padding_h12, AppStyle.color_red2]}>
						信用卡不能接收汇款，请务必输入储蓄卡卡号。
					</Text>
				</View>
				<View style={[AppStyle.margin_t10, AppStyle.bjColor_gray4]}>
					<Text style={[AppStyle.font_s12, AppStyle.padding_h12, AppStyle.color_gray0]}>
						*以上信息仅用于为您提现，请放心填写
					</Text>
				</View>
				<View style={[AppStyle.margin_t10, AppStyle.bjColor_gray4]}>
					<Text style={[AppStyle.font_s12, AppStyle.padding_h13, AppStyle.color_gray0]}>
						同意<Text style={AppStyle.color_blue0}>《银行卡信息授权使用协议》</Text>
					</Text>
				</View>
				<View style={[AppStyle.margin_h12, { position: 'relative', top: 50 }]}>
					<Button
						title={'确定'}
						onPress={() => {
							this.props.navigation.navigate('WalletBankEdit', {});
						}}
					/>
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
	},
	info_item1: {
		height: 49,
		padding: 0,
		paddingLeft: 40,
	},
	info_item_title: {
		fontSize: 16,
		textAlign: 'left',
		marginLeft: 8,
		height: 20,
		width: 70,
		color: colorMap.black[1],
	},
	line_style: {
		width: 2,
		height: 16,
		backgroundColor: '#305FCC',
		position: 'relative',
		top: 3,
		right: 12,
	},
	info_item_content: {
		marginLeft: 5,
		textAlign: 'left',
		fontSize: 16,
		padding: 0,
		paddingRight: 12,
		color: colorMap.black[1],
	},
	border_color: {
		borderColor: AppStyle.color_gray4,
	},
	border_bottom: {
		borderBottomWidth: 0.5,
		borderBottomColor: colorMap.gray[13],
	},
	ball_info: {
		height: 17,
		width: 17,
		borderWidth: 0.5,
		borderColor: AppStyle.color_blue0,
		backgroundColor: '#A1BDFF',
		borderRadius: 50,
	},
	ball_info1: {
		height: 17,
		width: 17,
		borderWidth: 1,
		borderColor: AppStyle.color_gray3,
		backgroundColor: '#E5E5E5',
		borderRadius: 50,
	},
	icon_emample: {
		width: 17,
		height: 17,
		borderColor: AppStyle.color_blue0,
		borderRadius: 50,
		borderWidth: 1,
		position: 'absolute',
		right: 0,
		top: 6,
	},
});
