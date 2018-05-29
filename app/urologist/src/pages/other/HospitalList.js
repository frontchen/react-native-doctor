import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import { Header, Icon } from '../../components/Index';
import { AppStyle } from '../../styles/Index';
export default class HospitalList extends Component {
	static navigationOptions = { title: '选择医院', header: null };
	constructor(props) {
		super(props);
		this.state = { dataSouce: [], refreshing: true };
		this.hosList = [
			{ hos_id: 0, hos_name: '北京协和医院' },
			{ hos_id: 1, hos_name: '北京医科大' },
			{ hos_id: 2, hos_name: '首都医院' },
			{ hos_id: 3, hos_name: '上海交大一附院' },
			{ hos_id: 4, hos_name: '上海人民医院' },
			{ hos_id: 5, hos_name: '华山医院' },
		];
	}
	componentWillMount() {
		this.setState({ dataSource: this.hosList, refreshing: false });
	}
	_renderEmptyView() {
		return (
			<View>
				<Text style={{ fontSize: 16, alignSelf: 'center' }}>还没有数据哦！</Text>
			</View>
		);
	}
	_renderHosList = ({ item, index }) => {
		return (
			<TouchableOpacity
				key={index}
				style={[
					AppStyle.row,
					AppStyle.flex1,
					AppStyle.margin_l12,
					{
						minHeight: 49,
						borderBottomWidth: 0.5,
						alignItems: 'center',
						justifyContent: 'flex-start',
						borderColor: AppStyle.color_gray4,
					},
				]}
			>
				<View>
					<Text style={[AppStyle.font_s16, AppStyle.color_black1]}>
						{item.hos_name}
					</Text>
				</View>
			</TouchableOpacity>
		);
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
					title={'医院'}
				/>

				<View>
					<FlatList
						extraData={this.state}
						data={this.hosList}
						keyExtractor={(item, index) => {
							return String(index);
						}}
						ItemSeparatorComponent={this.renderSeparator}
						renderItem={this._renderHosList}
						ListEmptyComponent={this._renderEmptyView()}
						refreshing={false}
						onRefresh={() => {
							this.setState({ dataSource: this.hosList });
						}}
						onEndReachedThreshold={0.5}
						onEndReached={() => {
							this.setState({
								refreshing: true,
								dataSource: this.state.dataSource,
								refreshing: false,
							});
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
});
