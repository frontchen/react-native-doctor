# CodePush 使用说明

### 一、安装CodePush CLI

> npm install -g code-push-cli

### 二、创建CodePush账号

第一次使用需要创建一个CodePush账号，可以使用```GitHub账号```或者```微软账号```授权登录

> code-push register

执行后，会弹出网页授权登录页面(可以选择github账号或者微软账号登录)

授权成功后获得access key

根据cmd命令提示符，输入刚刚生成的access key

windows系统：```C:\Users\{当前登录用户}\AppData\Local\.code-push.config```

如需删除该配置文件和终止你的session
> code-push logout

### 三、把自己的app注册成服务

> code-push app add MyApp


### 四、CodePush你的app

#### React Native

###### 平台支持情况  

iOS (8+)    
Android (4.1+)    
Windows (UWP)    

######  安装codepush

> npm install --save react-native-code-push@latest    
> rnpm link react-native-code-push

rnpm安装
> npm install rnpm -g

具体安装过程请参考 [https://github.com/Microsoft/react-native-code-push#getting-started](https://github.com/Microsoft/react-native-code-push#getting-started)

######  插件使用

1. 导入模块
> import codePush from "react-native-code-push";

2. 在```componentDidMount```中调用，应用启动后会在后台更新程序
> codePush.sync();


### 五、推送更新内容

    code-push release-react <appName> <platform>

示例(默认走```Staging```分支):
> code-push release-react MyApp ios    
> code-push release-react MyApp-Android android
 
指定部署分支名称 
> code-push release-react MyApp android -d Production

指定开发版本或发布版本(默认false)
> code-push release-react MyApp windows --dev

强制更新描述内容 
> code-push release-react MyApp ios -m --description "Modified the header color"

更新一个1/4用户的开发版本
> code-push release-react MyApp-Android android --rollout 25% --dev true

更新1.1.0版本的所有用户
> code-push release-react MyApp-Android android --targetBinaryVersion "~1.1.0" 

或者  

> code-push release-react MyApp-Android android --t "~1.1.0"

开发者模式，更新android版bundle内容
> code-push release-react myApp android -m --dev true --t "~1.1.0"

### 六、运行app程序

### 七、常用命令
1. 查看更新历史

    > code-push deployment h myApp Staging

    或者    

    > code-push deployment history myApp Production

2. 查看应用key

    > code-push deployment ls myApp -k

    或者

    > code-push deployment list myApp -k
    
3. 禁用某个更新

    > code-push patch myApp Staging --label v66 --disabled



