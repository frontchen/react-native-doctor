// 登录注册
import LoginByUserName from './other/LoginByUserName'; // 密码登录
import Login from './other/Login'; // 输入手机号
import LoginBySms from './other/LoginBySms'; // 验证码登录
import HospitalList from './other/HospitalList'; // 医院列表
import TitleLevel from './other/TitleLevel'; // 选择职称
import ProvinceList from './other/ProvinceList'; // 选择省份
import CityList from './other/CityList'; // 选择城市
import AreaList from './other/AreaList'; // 选择区域
import SexSelect from './other/SexSelect'; // 选择性别
import Register from './other/Register'; // 注册
import RegMaterial from './other/RegMaterial'; // 注册补全信息

// 咨询
import AdvisoryDetail from './advisory/AdvisoryDetail'; // 咨询详情
import AdvisoryShow from './advisory/AdvisoryShow'; // 编辑时间段展示
import AdvisoryEdit from './advisory/AdvisoryEdit'; // 修改咨询时间段
import AdvisoryAdd from './advisory/AdvisoryAdd'; // 新增咨询时间段

// 患者录
import PatientNewList from './patient/PatientNewList'; // 新的患者
import PatientAdd from './patient/PatientAdd'; // 添加患者
import PatientAddByQrcode from './patient/PatientAddByQrcode'; // 医生二维码
import PatientAddByPhone from './patient/PatientAddByPhone'; // 通过手机号通知患者加入
import PatientDetail from './patient/PatientDetail'; // 详细资料
import PatientEdit from './patient/PatientEdit'; // 资料设置
import PatientGroupSet from './patient/PatientGroupSet'; // 设置备注及分组
import PatientMedicalHistoryList from './patient/PatientMedicalHistoryList'; // TA的家庭病历本
import PatientGroupSelect from './patient/PatientGroupSelect'; // 选择分组
// 患者录 => 留言
import LetterList from './patient/LetterList'; // 患者留言
import LetterDetail from './patient/LetterDetail'; // 留言内容详情
import LetterDetailinfo from './patient/LetterDetailinfo'; // 留言详情
import LetterHistoryList from './patient/LetterHistoryList'; // 查找留言内容
// 患者录 => 患者分组
import GroupList from './patient/GroupList'; // 患者分组
import GroupAdd from './patient/GroupAdd'; // 分组设置
import GroupSet from './patient/GroupSet'; // 设置分组名称
import GroupAddPatient from './patient/GroupAddPatient'; // 选择患者
// 患者录 => 咨询订单
import OrderList from './patient/OrderList'; // 患者咨询记录
import OrderDetail from './patient/OrderDetail'; // 咨询详情
import OrderEvaluate from './patient/OrderEvaluate'; // 用户评价
import PatientComplaint from './patient/PatientComplaint'; // 患者主诉

// 专家团
// 专家团 => 医生
import DoctorDetail from './group/DoctorDetail'; // 医生资料详情
import DoctorSet from './group/DoctorSet'; // 资料设置
import DoctorSelect from './group/DoctorSelect'; // 选择医生
// 专家团 => 消息
import ImList from './group/ImList'; // 消息列表
import ImDetail from './group/ImDetail'; // 聊天页面
import ImDetailDoctorinfo from './group/ImDetailDoctorinfo'; // 聊天详情(个人)
import ImQrcode from './group/ImQrcode'; // 群二维码
import ImDetailGroupinfo from './group/ImDetailGroupinfo'; // 团信息
import ImGroupNameEdit from './group/ImGroupNameEdit'; // 修改专家团名称
import ImGroupProfileShow from './group/ImGroupProfileShow'; // 专家团简介展示
import ImGroupProfileEdit from './group/ImGroupProfileEdit'; // 专家团简介修改
import ImGroupManage from './group/ImGroupManage'; // 群管理
import ImGroupNickEdit from './group/ImGroupNickEdit'; // 修改群昵称

// 我的
import UserInfo from './my/UserInfo'; // 个人信息
import UserProfile from './my/UserProfile'; // 医生简介
import UserExpert from './my/UserExpert'; // 医生擅长
import UserCert from './my/UserCert'; // 认证
import UserFavoriteList from './my/UserFavoriteList'; // 收藏
import UserSetting from './my/UserSetting'; // 设置
// 我的 => 泌尿科头条
import NewsList from './my/NewsList'; // 泌尿科头条
import NewsDetail from './my/NewsDetail'; // 头条详情
// 我的 => 我的钱包
import WalletIndex from './my/WalletIndex'; // 我的钱包
import WalletDetail from './my/WalletDetail'; // 账单详情
import WalletBankEdit from './my/WalletBankEdit'; // 添加修改提现账户
import WalletTaxpayerAdd from './my/WalletTaxpayerAdd'; // 添加纳税人信息
import WalletTaxpayerBindBank from './my/WalletTaxpayerBindBank'; // 添加纳税人绑卡
import WalletBankList from './my/WalletBankList'; // 选择银行
import WalletResult from './my/WalletResult'; // 钱包结果页
import WalletCash from './my/WalletCash'; // 提现
import WalletCode from './my/WalletCode'; // 验证码
import PassPayEdit from './my/PassPayEdit'; // 安全密码修改
import PassPayConfirm from './my/PassPayConfirm'; // 确认安全密码
import PassLoginCode from './my/PassLoginCode'; // 修改登录密码获取验证码
import PassLoginEdit from './my/PassLoginEdit'; // 修改登录密码

// 页面路由
const Pages = {
	PatientNewList: {
		screen: PatientNewList,
	},
	PatientAdd: {
		screen: PatientAdd,
	},
	PatientAddByQrcode: {
		screen: PatientAddByQrcode,
	},
	PatientAddByPhone: {
		screen: PatientAddByPhone,
	},
	PatientDetail: {
		screen: PatientDetail,
	},
	PatientEdit: {
		screen: PatientEdit,
	},
	PatientGroupSet: {
		screen: PatientGroupSet,
	},
	PatientMedicalHistoryList: {
		screen: PatientMedicalHistoryList,
	},
	PatientGroupSelect: {
		screen: PatientGroupSelect,
	},
	LetterList: {
		screen: LetterList,
	},
	LetterDetail: {
		screen: LetterDetail,
	},
	LetterDetailinfo: {
		screen: LetterDetailinfo,
	},
	LetterHistoryList: {
		screen: LetterHistoryList,
	},
	GroupList: {
		screen: GroupList,
	},
	GroupAdd: {
		screen: GroupAdd,
	},
	GroupSet: {
		screen: GroupSet,
	},
	GroupAddPatient: {
		screen: GroupAddPatient,
	},
	OrderList: {
		screen: OrderList,
	},
	OrderDetail: {
		screen: OrderDetail,
	},
	OrderEvaluate: {
		screen: OrderEvaluate,
	},
	PatientComplaint: {
		screen: PatientComplaint,
	},
	DoctorDetail: {
		screen: DoctorDetail,
	},
	DoctorSet: {
		screen: DoctorSet,
	},
	DoctorSelect: {
		screen: DoctorSelect,
	},
	ImList: {
		screen: ImList,
	},
	ImDetail: {
		screen: ImDetail,
	},
	ImDetailDoctorinfo: {
		screen: ImDetailDoctorinfo,
	},
	ImQrcode: {
		screen: ImQrcode,
	},
	ImDetailGroupinfo: {
		screen: ImDetailGroupinfo,
	},
	ImGroupNameEdit: {
		screen: ImGroupNameEdit,
	},
	ImGroupProfileShow: {
		screen: ImGroupProfileShow,
	},
	ImGroupProfileEdit: {
		screen: ImGroupProfileEdit,
	},
	ImGroupManage: {
		screen: ImGroupManage,
	},
	ImGroupNickEdit: {
		screen: ImGroupNickEdit,
	},
	UserInfo: {
		screen: UserInfo,
	},
	UserProfile: {
		screen: UserProfile,
	},
	UserExpert: {
		screen: UserExpert,
	},
	UserCert: {
		screen: UserCert,
	},
	UserFavoriteList: {
		screen: UserFavoriteList,
	},
	UserSetting: {
		screen: UserSetting,
	},
	NewsList: {
		screen: NewsList,
	},
	NewsDetail: {
		screen: NewsDetail,
	},
	WalletIndex: {
		screen: WalletIndex,
	},
	WalletDetail: {
		screen: WalletDetail,
	},
	WalletBankEdit: {
		screen: WalletBankEdit,
	},
	WalletBankList: {
		screen: WalletBankList,
	},
	WalletResult: {
		screen: WalletResult,
	},
	WalletCash: {
		screen: WalletCash,
	},
	WalletTaxpayerAdd: {
		screen: WalletTaxpayerAdd,
	},
	WalletTaxpayerBindBank: {
		screen: WalletTaxpayerBindBank,
	},
	WalletCode: {
		screen: WalletCode,
	},
	PassPayEdit: {
		screen: PassPayEdit,
	},
	PassPayConfirm: {
		screen: PassPayConfirm,
	},
	PassLoginCode: {
		screen: PassLoginCode,
	},
	PassLoginEdit: {
		screen: PassLoginEdit,
	},
	AdvisoryDetail: {
		screen: AdvisoryDetail,
	},
	AdvisoryShow: {
		screen: AdvisoryShow,
	},
	AdvisoryEdit: {
		screen: AdvisoryEdit,
	},
	AdvisoryAdd: {
		screen: AdvisoryAdd,
	},
	ProvinceList: {
		screen: ProvinceList,
	},
	CityList: {
		screen: CityList,
	},
	AreaList: {
		screen: AreaList,
	},
	HospitalList: {
		screen: HospitalList,
	},
	LoginBySms: {
		screen: LoginBySms,
	},
	LoginByUserName: {
		screen: LoginByUserName,
	},
};

module.exports = Pages;
