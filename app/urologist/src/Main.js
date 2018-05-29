import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import codePush from 'react-native-code-push';

// unit
import Config from './config/Config';
import Http from './service/Http';

// db
import DPatient from './dbModel/DPatient';

// pages
import Login from './pages/other/Login';
import PatientIndex from './pages/patient/PatientIndex';
import AdvisoryIndex from './pages/advisory/AdvisoryIndex';
import GroupIndex from './pages/group/GroupIndex';
import Member from './pages/my/Member';
import Pages from './pages/Pages';
import Register from './pages/other/Register';
// 全局变量(统一管理)
global.App = {
	Config,
	DPatient,
};
global.api = Http;

// 底部菜单路由
const MainTabNavigator = TabNavigator(
	{
		Register: {
			screen: Register,
		},
		PatientIndex: {
			screen: PatientIndex,
		},
		AdvisoryIndex: {
			screen: AdvisoryIndex,
		},
		GroupIndex: {
			screen: GroupIndex,
		},
		Member: {
			screen: Member,
		},
	},
	{
		tabBarComponent: TabBarBottom,
		tabBarPosition: 'bottom',
		swipeEnabled: false,
		animationEnabled: false,
		lazy: true,
		tabBarOptions: {
			inactiveTintColor: '#808080',
			activeTintColor: '#597AEE',
			showIcon: true,
							labelStyle: {
				fontSize: 10,
			},
		},
	}
);

// 程序主路由
const MainScreenNavigator = StackNavigator(
	{
		MainTab: {
			screen: MainTabNavigator,
		},
		...Pages,
	},
	{
		headerMode: 'none',
		navigationOptions: {
			gesturesEnabled: true, //手势控制页面切换
		},
	}
);

// 路由入口
const MyApp = StackNavigator({
	MainScreen: {
		screen: MainScreenNavigator,
	},
	Login: {
		screen: Login,
	},
});

// 程序入口
export default class Main extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// codePush
		//   .checkForUpdate(
		//     'uliOE8IzyKZjxZ1VzvrwlpP_k3gy7af874f6-3bca-4a9b-aabe-a7b4de52816a'
		//   )
		//   .then(update => {
		//     if (!update) {
		//       console.warn('App is up to date');
		//     } else {
		//       console.warn('App have a update');
		//     }
		//   });
	}

	render() {
		return <MyApp />;
	}
}
