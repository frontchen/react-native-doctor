import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, TextInput, Alert, FlatList } from 'react-native';

import MyWebView from 'react-native-webview-autoheight';

import { Header, Icon, ListItem, Button } from '../../components/Index';
import { AppStyle, colorMap, styleMap } from '../../styles/Index';

export default class NewsDetail extends Component {
	static navigationOptions = { title: '头条详情', header: null };

	constructor(props) {
		super(props);
		this.hotList = [
			{
				pic: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '王医生',
				desc: '新的医学新闻，美国最新研究表示这个病可以治了，我们国家开始使用',
				time: '08-18 16:34',
			},
			{
				pic: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '王医生',
				desc: '新的医学新闻，美国最新研究表示这个病可以治了，我们国家开始使用',
				time: '08-18 16:34',
			},
			{
				pic: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '王医生',
				desc: '新的医学新闻，美国最新研究表示这个病可以治了，我们国家开始使用',
				time: '08-18 16:34',
			},
		];
	}
	_renderHot = () => {
		var hotData = [];
		for (var i = 0; i < this.hotList.length; i++) {
			var badge = this.hotList[i];
			hotData.unshift(
				//  key={i} ：for循环的创建的组件必须设置唯一标示，不然会抱警告
				<View style={[AppStyle.flex1, AppStyle.row]} key={i}>
					<ListItem
						style={[AppStyle.flex1, AppStyle.row, { position: 'relative', right: 7 }]}
						left={
							<View style={[{ alignItems: 'flex-start', flexDirection: 'column' }, AppStyle.flex1]}>
								<Image source={{ uri: badge.pic }} style={[styles.info_avatar]} />
							</View>
						}
						center={
							<View style={[{ position: 'relative', bottom: 10 }]}>
								<View>
									<ListItem
										style={[AppStyle.flex1, { justifyContent: 'space-between' }]}
										left={
											<View
												style={[
													{ flexDirection: 'column', alignItems: 'flex-start' },
													AppStyle.flex1,
												]}
											>
												<Text style={[AppStyle.font_s14, AppStyle.color_black2]}>
													{badge.name}
												</Text>
												<Text
													style={[
														AppStyle.font_s12,
														AppStyle.color_gray1,
														AppStyle.margin_t4,
													]}
												>
													{badge.time}
												</Text>
											</View>
										}
									/>
								</View>

								<View
									style={[AppStyle.row, { position: 'absolute', right: 0, top: 10 }, AppStyle.flex1]}
								>
									<Text style={[AppStyle.color_gray1, AppStyle.font_s12, AppStyle.padding_r8]}>
										666
									</Text>
									<View>
										<Icon
											name={'choose'}
											style={[AppStyle.header_btn_icon, AppStyle.color_gray1]}
										/>
									</View>
								</View>
								<View style={[AppStyle.margin_l12, AppStyle.flex1, AppStyle.row]}>
									<Text style={[AppStyle.font_s15, AppStyle.color_black1, { lineHeight: 30 }]}>
										{badge.desc}
									</Text>
								</View>
							</View>
						}
					/>
				</View>
			);
		}
		return hotData;
	};
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
							<Text style={AppStyle.header_btn_text}>返回</Text>
						</TouchableOpacity>
					}
					title={'头条详情'}
					headerRight={
						<TouchableOpacity
							style={[AppStyle.header_btn, AppStyle.header_btn_right]}
							onPress={() => {
								this.props.navigation.goBack();
							}}
						>
							<Icon name={'more'} style={AppStyle.header_btn_icon} />
						</TouchableOpacity>
					}
				/>

				<ScrollView>
					<View style={[AppStyle.padding20, AppStyle.bjColor_white0]}>
						<Text style={[AppStyle.font_s24, AppStyle.color_black1, { lineHeight: 28 }]}>
							人工智能来袭：家庭医生和互联网医院谁能走的更远？
						</Text>
						<View style={[AppStyle.row, AppStyle.center, AppStyle.padding_v18]}>
							<Image
								source={{
									uri:
										'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
								}}
								style={{ width: 20, height: 20 }}
							/>
							<Text style={[AppStyle.font_s12, AppStyle.color_gray1, AppStyle.padding_l10]}>张治国</Text>
							<Text
								style={[
									AppStyle.flex1,
									AppStyle.font_s12,
									AppStyle.color_gray1,
									{ textAlign: 'right' },
								]}
							>
								2017-08-18
							</Text>
						</View>
						<MyWebView
							source={{ uri: 'https://www.jianshu.com/p/9f18c99fb70c' }}
							startInLoadingState={true}
						/>
					</View>
					<View style={[AppStyle.padding_h12, { paddingBottom: 70 }, AppStyle.bjColor_white0]}>
						<View style={[AppStyle.row, AppStyle.center, AppStyle.padding_v18]}>
							<Text style={[AppStyle.font_s12, AppStyle.color_gray1]}>阅读</Text>
							<Text
								style={[AppStyle.font_s12, AppStyle.color_gray1, AppStyle.flex1, AppStyle.padding_l10]}
							>
								10000+
							</Text>
						</View>
						<View style={[AppStyle.flex1, AppStyle.center]}>
							<View
								style={[
									{ height: 50, width: 50, borderRadius: 50, borderColor: '#FF3D17', borderWidth: 1 },
									AppStyle.margin_t15,
									AppStyle.flex1,
									AppStyle.center,
								]}
							>
								<TouchableOpacity
									style={[AppStyle.header_btn, AppStyle.header_btn_right]}
									onPress={() => {}}
								>
									<Icon name={'arrowLeft'} style={[AppStyle.header_btn_icon, AppStyle.color_red2]} />
								</TouchableOpacity>
							</View>
						</View>
						<View style={[AppStyle.flex1, AppStyle.center, AppStyle.margin_t11]}>
							<Text style={[AppStyle.color_red2, AppStyle.font_s15, { color: '#FF3D17' }]}>759</Text>
						</View>
						<View style={[AppStyle.flex1, AppStyle.padding_t30, AppStyle.padding_b7]}>
							<Text style={[AppStyle.font_s16, AppStyle.color_black1]}>热门评论</Text>
						</View>
						{this._renderHot()}
						<View style={[AppStyle.flex1, AppStyle.padding_t25, AppStyle.padding_b7]}>
							<Text style={[AppStyle.font_s16, AppStyle.color_black1]}>全部评论</Text>
						</View>
						{this._renderHot()}
					</View>
					<View
						style={[
							{
								position: 'absolute',
								left: 0,
								right: 0,
								bottom: 0,
								flexDirection: 'row',
								minHeight: 49,
								alignItems: 'flex-end',
								borderTopWidth: 1,
							},
							styleMap.bjColor_white2,
							styleMap.bdColor_gray9,
						]}
					>
						<View style={{ paddingHorizontal: 10, flex: 1 }}>
							<TextInput
								style={styles.input_text}
								underlineColorAndroid="transparent"
								textAlignVertical="center"
								autoFocus={false}
								enablesReturnKeyAutomatically={true}
								returnKeyType="done"
								multiline={true}
								placeholder={'写评论'}
								placeholderTextColor={styleMap.color_gray3.color}
								keyboardType="default"
								defaultValue={''}
								onChangeText={text => {}}
								onSubmitEditing={e => {}}
								onEndEditing={e => {
									if (e.nativeEvent.text !== '') {
									}
								}}
							/>
							<View style={{ position: 'absolute', left: 20, top: 15 }}>
								<Image
									source={{
										uri:
											'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
									}}
									style={styles.info_avatar1}
								/>
							</View>
						</View>
						<View style={{ marginRight: 9, paddingBottom: 15 }}>
							<Icon name={'comment'} style={[{ fontSize: 20 }, styleMap.color_gray8]} />
						</View>

						<View style={{ marginRight: 9, paddingBottom: 15 }}>
							<Icon name={'star'} style={[{ fontSize: 20 }, styleMap.color_gray8]} />
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header_btn_width: {
		width: 70,
	},
	info_avatar: {
		width: 34,
		height: 34,
		borderRadius: 5,
	},
	info_avatar1: {
		width: 20,
		height: 20,
		borderRadius: 5,
	},
	input_text: {
		minHeight: 36,
		minWidth: 250,
		marginVertical: 6,
		paddingVertical: 0,
		paddingLeft: 40,
		flex: 1,
		fontSize: 15,
		...styleMap.bjColor_white0,
		...styleMap.bdColor_gray9,
		borderWidth: 1,
		borderRadius: 5,
	},
});
