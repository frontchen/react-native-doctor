import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Switch, ListView } from 'react-native';

import { Header, Icon, ListItem, Button } from '../../components/Index';
import { AppStyle, styleMap, colorMap, screenWidth } from '../../styles/Index';
const imgWidth = 50;
const imgHeight = 50;
const PaddingWidth = (screenWidth % (imgWidth + 20)) / 2;
export default class ImDetailGroupinfo extends Component {
	static navigationOptions = {
		title: '团信息',
		header: null,
	};

	constructor(props) {
		super(props);
		this.groupList = [
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},

			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
			{
				image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
				name: '前列腺',
			},
		];
	}
	//群成员列表

	_renderList = () => {
		var allData = [];
		//减号
		allData.unshift(
			<View
				key={(item, index) => {
					return index;
				}}
				style={[AppStyle.row]}
			>
				<View style={[styles.addBox]}>
					<View style={styles.sumRow} />
				</View>
			</View>
		);
		//加号
		allData.unshift(
			<View
				key={(item, index) => {
					return index;
				}}
				style={[AppStyle.row]}
			>
				<View style={[styles.addBox]}>
					<View style={styles.sumColumn} />
					<View style={styles.sumRow} />
				</View>
			</View>
		);
		for (var i = 0; i < this.groupList.length; i++) {
			var badge = this.groupList[i];
			allData.unshift(
				//  key={i} ：for循环的创建的组件必须设置唯一标示，不然会抱警告
				<View key={i} style={styles.outViewS}>
					<Image source={{ uri: badge.image }} style={styles.info_avatar} />
					<Text style={styles.titleName}>{badge.name}</Text>
				</View>
			);
		}

		return allData;
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
					title={'团信息(200)'}
				/>

				<ScrollView>
					<View style={[styles.container, AppStyle.bjColor_white0]}>
						{/*调用函数*/}
						{this._renderList()}
					</View>
					{/*查看更多群成员 */}
					<ListItem
						onPress={() => {
							this.props.navigation.navigate('ImGroupNameEdit', {});
						}}
						center={
							<View
								style={[
									AppStyle.flex1,
									AppStyle.center,
									AppStyle.row,
									styles.morePerson,
									AppStyle.bjColor_white0,
									AppStyle.margin_b10,
								]}
							>
								<Text>查看更多群成员</Text>
								<Icon name={'arrowRight'} style={[AppStyle.font_s15, AppStyle.color_black2]} />
							</View>
						}
					/>

					<ListItem
						style={[styles.info_item1, styles.info_item_view]}
						onPress={() => {
							this.props.navigation.navigate('ImGroupNameEdit', {});
						}}
						left={
							<View style={[AppStyle.margin_l12, AppStyle.padding_r12]}>
								<Text style={[AppStyle.font_s17, AppStyle.color_black1]}>专家团名称</Text>
							</View>
						}
						center={
							<View style={[AppStyle.row, AppStyle.center, AppStyle.padding_r12, AppStyle.padding_l15]}>
								<Text
									numberOfLines={1}
									style={[AppStyle.font_s15, AppStyle.color_gray0, AppStyle.padding_r10]}
								>
									名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称
								</Text>
								<Icon
									name={'arrowRight'}
									style={[AppStyle.font_s15, AppStyle.padding_r13, AppStyle.color_black1]}
								/>
							</View>
						}
					/>
					<ListItem
						style={styles.info_item2}
						onPress={() => {}}
						center={
							<View style={styles.info_item_view}>
								<Text style={[AppStyle.font_s17, AppStyle.color_black1]}>专家团二维码</Text>
							</View>
						}
						right={
							<View style={[AppStyle.row, AppStyle.center, styles.info_item_view, AppStyle.padding_r12]}>
								<Icon
									name={'qrcode'}
									style={[AppStyle.font_s18, AppStyle.color_gray0, AppStyle.margin_r10]}
								/>
								<Icon name={'arrowRight'} style={[AppStyle.font_s15, AppStyle.color_black1]} />
							</View>
						}
					/>
					<ListItem
						style={styles.info_item2}
						onPress={() => {}}
						center={
							<View style={styles.info_item_view}>
								<Text style={[AppStyle.font_s17, AppStyle.color_black1]}>通过手机号邀请</Text>
							</View>
						}
						right={
							<View style={[styles.info_item_view, AppStyle.padding_r12]}>
								<Icon name={'arrowRight'} style={[AppStyle.font_s15, AppStyle.color_black1]} />
							</View>
						}
					/>
					<View style={AppStyle.bjColor_white0}>
						<View style={[AppStyle.padding_l12, { height: 30, justifyContent: 'flex-end' }]}>
							<Text style={[AppStyle.font_s17, AppStyle.color_black1]}>专家团简介</Text>
						</View>
						<ListItem
							style={styles.info_item3}
							onPress={() => {
								this.props.navigation.navigate('ImGroupProfileShow', {});
							}}
							center={
								<Text
									numberOfLines={3}
									style={[AppStyle.font_s15, AppStyle.color_gray0, { lineHeight: 18 }]}
								>
									清空聊天记录清空聊天记录清空聊天记录清空聊天记录清空聊天记录清空聊天记录清空聊天记录清空聊天记录清空聊天记录清空聊天记录清空聊天记录清空聊天记录清空聊天记录清空聊天记录
								</Text>
							}
							right={<Icon name={'arrowRight'} style={[AppStyle.font_s15, AppStyle.color_black1]} />}
						/>
					</View>
					<ListItem
						onPress={() => {
							this.props.navigation.navigate('ImGroupNickEdit', {});
						}}
						style={styles.info_item1}
						center={
							<View style={styles.info_item_view}>
								<Text style={[AppStyle.font_s17, AppStyle.color_black1]}>我在本团的昵称</Text>
							</View>
						}
						right={
							<View style={[styles.info_item_view, AppStyle.padding_r12]}>
								<Icon name={'arrowRight'} style={[AppStyle.font_s15, AppStyle.color_black1]} />
							</View>
						}
					/>
					<ListItem
						style={styles.info_item2}
						disabled={true}
						onPress={() => {}}
						center={
							<View style={styles.info_item_view}>
								<Text style={[AppStyle.font_s17, AppStyle.color_black1]}>消息免打扰</Text>
							</View>
						}
						right={
							<View style={[styles.info_item_view, AppStyle.padding_r12]}>
								<Switch value={true} onTintColor={colorMap.blue[1]} />
							</View>
						}
					/>
					<ListItem
						style={styles.info_item2}
						disabled={true}
						onPress={() => {}}
						center={
							<View style={styles.info_item_view}>
								<Text style={[AppStyle.font_s17, AppStyle.color_black1]}>置顶聊天</Text>
							</View>
						}
						right={
							<View style={[styles.info_item_view, AppStyle.padding_r12]}>
								<Switch value={false} onTintColor={colorMap.blue[1]} />
							</View>
						}
					/>
					<ListItem
						style={styles.info_item1}
						center={
							<View style={styles.info_item_view}>
								<Text style={[AppStyle.font_s17, AppStyle.color_black1]}>查找聊天内容</Text>
							</View>
						}
						right={
							<View style={[styles.info_item_view, AppStyle.padding_r12]}>
								<Icon name={'arrowRight'} style={[AppStyle.font_s15, AppStyle.color_black1]} />
							</View>
						}
					/>
					<ListItem
						style={styles.info_item2}
						onPress={() => {}}
						center={
							<View style={styles.info_item_view}>
								<Text style={[AppStyle.font_s17, AppStyle.color_black1]}>清空聊天记录</Text>
							</View>
						}
					/>
					<View style={[AppStyle.margin_v30, AppStyle.padding_h12]}>
						<Button type={'danger'} title={'退出专家团'} />
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
	listViewStyle: {
		width: imgWidth,
		height: 80,
	},
	info_item_first: {
		height: 80,
		marginTop: 10,
	},
	info_avatar: {
		width: imgWidth,
		height: imgHeight,
		borderRadius: 5,
	},
	info_item1: {
		height: 44,
		marginTop: 20,
		paddingHorizontal: 0,
		marginLeft: 2,
	},
	info_item2: {
		height: 44,
		paddingHorizontal: 0,
		marginLeft: 2,
	},
	info_item3: {
		paddingLeft: 2,
	},
	info_item_view: {
		height: 44,
		borderBottomWidth: 1,
		borderBottomColor: colorMap.gray[4],
		justifyContent: 'center',
	},
	container: {
		flexDirection: 'row', //设置主轴方向
		flexWrap: 'wrap', //超出换行
		paddingBottom: 6,
		paddingLeft: PaddingWidth,
		paddingRight: PaddingWidth,
	},
	outViewS: {
		alignItems: 'center', //交叉轴的对齐方式
		width: imgWidth,
		height: 80,
		margin: 10,
	},
	imageStyle: {
		width: 80,
		height: 80,
	},
	titleName: {
		marginTop: 8,
	},
	addBox: {
		width: imgWidth,
		height: imgHeight,
		borderRadius: 5,
		margin: 10,
		borderWidth: 1,
		borderColor: '#CDCDCD',
		borderStyle: 'dashed',
		alignItems: 'center',
		justifyContent: 'center',
	},

	sumRow: {
		position: 'absolute',
		top: 23,
		width: 25,
		height: 1,
		flexDirection: 'column',
		backgroundColor: AppStyle.bjColor_black1,
	},
	sumColumn: {
		flexDirection: 'row',
		width: 1,
		height: 25,
		backgroundColor: AppStyle.bjColor_black1,
	},
	morePerson: {
		flex: 1,
		alignItems: 'center',
	},
});
