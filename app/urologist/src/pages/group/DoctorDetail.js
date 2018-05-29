import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Header, Icon, ListItem, Button } from '../../components/Index';
import { AppStyle, colorMap } from '../../styles/Index';

export default class DoctorDetail extends Component {
	static navigationOptions = { title: '医生资料详情', header: null };

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
							<Text style={AppStyle.header_btn_text}>专家团</Text>
						</TouchableOpacity>
					}
					title={'医生详情'}
					rightStyle={doctorstyles.header_btn_width}
					headerRight={
						<TouchableOpacity
							style={[AppStyle.row, AppStyle.header_btn, AppStyle.header_btn_right]}
							onPress={() => {
								this.props.navigation.goBack();
							}}
						>
							<Icon name={'more'} style={AppStyle.header_btn_icon} />
						</TouchableOpacity>
					}
				/>

				<ScrollView>
					<View style={AppStyle.margin_t10}>
						<ListItem
							disabled={true}
							left={
								<View>
									<Image
										source={{
											uri:
												'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
										}}
										style={doctorstyles.info_avatar}
									/>
								</View>
							}
							center={
								<View style={AppStyle.margin_l5}>
									<View style={[AppStyle.row, { alignItems: 'center' }]}>
										<Text style={[AppStyle.font_s17, AppStyle.color_black2]}>夏术阶</Text>
										<Icon
											name={'man'}
											style={[AppStyle.font_s16, AppStyle.padding_l10, AppStyle.color_blue1]}
										/>
										<Text
											style={[doctorstyles.job_title, AppStyle.margin_l6, AppStyle.color_gray2]}
										>
											{' '}主任医师
										</Text>
										<Text style={[doctorstyles.job_title, AppStyle.color_gray2]}> 教授</Text>
									</View>
									<View style={[AppStyle.row, { alignItems: 'center' }, AppStyle.margin_t10]}>
										<Text style={[doctorstyles.job_title, AppStyle.color_gray2]}>上海第一人民医院</Text>
										<Text
											style={[doctorstyles.job_title, AppStyle.margin_l6, AppStyle.color_gray2]}
										>
											泌尿外科
										</Text>
									</View>
								</View>
							}
						/>
					</View>

					<View style={AppStyle.margin_t10}>
						<ListItem
							disabled={true}
							style={doctorstyles.info_item}
							onPress={() => {
								this.props.navigation.navigate('PatientGroupSet', {});
							}}
							left={
								<View style={[AppStyle.row, { alignItems: 'center' }]}>
									<Text style={[AppStyle.font_s16, AppStyle.color_black2]}>前列腺医生专家团</Text>
									<Text style={[AppStyle.margin_l20, AppStyle.color_gray2]}>主席</Text>
								</View>
							}
						/>
					</View>

					<View style={[AppStyle.margin_t10, AppStyle.bjColor_white0]}>
						<ListItem
							style={[doctorstyles.info_item, AppStyle.margin_l13, { paddingLeft: 0 }]}
							showBorder={true}
							disabled={true}
							left={
								<View>
									<Text
										style={[
											AppStyle.font_s16,
											AppStyle.color_black2,
											doctorstyles.header_btn_width,
										]}
									>
										地区
									</Text>
								</View>
							}
							center={
								<View style={[AppStyle.row, { alignItems: 'center' }, AppStyle.margin_l40]}>
									<Text style={[AppStyle.font_s16, AppStyle.color_gray2]}>上海</Text>
								</View>
							}
						/>
						<ListItem
							style={doctorstyles.info_item2}
							onPress={() => {
								this.props.navigation.navigate('PatientMedicalHistoryList', {});
							}}
							left={
								<View>
									<Text
										style={[
											AppStyle.font_s16,
											AppStyle.color_black2,
											doctorstyles.header_btn_width,
										]}
									>
										头条文章
									</Text>
								</View>
							}
							center={
								<View style={AppStyle.row}>
									<View>
										<Image
											source={{
												uri:
													'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
											}}
											style={doctorstyles.info_book_image}
										/>
									</View>
									<View style={doctorstyles.info_center_pl10}>
										<Image
											source={{
												uri:
													'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
											}}
											style={doctorstyles.info_book_image}
										/>
									</View>
									<View style={doctorstyles.info_center_pl10}>
										<Image
											source={{
												uri:
													'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
											}}
											style={doctorstyles.info_book_image}
										/>
									</View>
								</View>
							}
							right={
								<View>
									<Icon name={'arrowRight'} style={[AppStyle.font_s15, AppStyle.color_black2]} />
								</View>
							}
						/>
					</View>

					<View style={AppStyle.margin_t10}>
						<ListItem
							style={doctorstyles.info_item}
							onPress={() => {}}
							left={
								<View>
									<Text
										style={[
											AppStyle.font_s16,
											AppStyle.color_black2,
											doctorstyles.header_btn_width,
										]}
									>
										擅长
									</Text>
								</View>
							}
							center={
								<View>
									<Text style={[AppStyle.color_gray2, AppStyle.font_s15]} numberOfLines={1}>
										前列腺炎、前列腺癌、微创手术啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
									</Text>
								</View>
							}
							right={
								<View>
									<Icon name={'arrowRight'} style={[AppStyle.font_s15, AppStyle.color_black2]} />
								</View>
							}
						/>
					</View>
					<View style={AppStyle.margin_t10}>
						<ListItem
							style={doctorstyles.info_item}
							onPress={() => {}}
							left={
								<View>
									<Text
										style={[
											AppStyle.font_s16,
											AppStyle.color_black2,
											doctorstyles.header_btn_width,
										]}
									>
										简介
									</Text>
								</View>
							}
							center={
								<View>
									<Text style={[AppStyle.color_gray2, AppStyle.font_s15]} numberOfLines={1}>
										上海市第一人民医院副院长啊啊啊啊啊啊啊啊啊
									</Text>
								</View>
							}
							right={
								<View>
									<Icon name={'arrowRight'} style={[AppStyle.font_s15, AppStyle.color_black2]} />
								</View>
							}
						/>
					</View>

					<View style={doctorstyles.info_btns}>
						<Button style={AppStyle.margin_t30} title={'发私信'} />
						<View style={[AppStyle.row, { alignItems: 'center' }]}>
							<Button
								style={[
									AppStyle.margin_v15,
									AppStyle.flex1,
									AppStyle.bjColor_white0,
									{ borderColor: '#fff' },
								]}
								title={'转诊'}
								color={colorMap.gray[0]}
								onPress={() => {}}
							/>
							<Button
								style={[
									AppStyle.margin_v15,
									AppStyle.flex1,
									AppStyle.margin_l10,
									AppStyle.bjColor_white0,
									{ borderColor: '#fff' },
								]}
								title={'会诊'}
								color={colorMap.gray[0]}
								onPress={() => {}}
							/>
						</View>
					</View>
				</ScrollView>
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
