## 医生端APP

### 一、系统所需组件

序号 | 名称 | 组件名 | 地址 | 版本 | 备注
---- | ---- | ---- | ---- | ---- | ----
1 | 路由 | react-navigation | [https://github.com/react-navigation/react-navigation](https://github.com/react-navigation/react-navigation) | v1.5.0
2 | 热更新 | react-native-code-push | [https://github.com/Microsoft/react-native-code-push](https://github.com/Microsoft/react-native-code-push) | v5.2.2 | 
3 | 消息推送 | 暂定 | | |
4 | 引导页 | react-native-swiper | [https://github.com/leecade/react-native-swiper](https://github.com/leecade/react-native-swiper) | v1.5.13 | 
5 | 左划菜单 | react-native-swipeout | [https://github.com/dancormier/react-native-swipeout](https://github.com/dancormier/react-native-swipeout) | v2.3.3 | 
6.1 | 相机模块(扫码用) | react-native-camera | [https://github.com/react-native-community/react-native-camera](https://github.com/react-native-community/react-native-camera) | v0.10.0 |
6.2 | 二维码扫描 | react-native-qrcode-scanner | [https://github.com/moaazsidat/react-native-qrcode-scanner](https://github.com/moaazsidat/react-native-qrcode-scanner) | v0.0.30 | 
7 | 获取设备信息 | react-native-device-info | [https://github.com/rebeccahughes/react-native-device-info](https://github.com/rebeccahughes/react-native-device-info) | v0.17.4 | 
8 | 数据请求 | frisbee | [https://github.com/niftylettuce/frisbee](https://github.com/niftylettuce/frisbee) | v1.6.4 | 
9 | 提交数据解析 | querystring | [https://github.com/Gozala/querystring](https://github.com/Gozala/querystring) | v0.2.0 | 
10 | cookies | react-native-cookies | [https://www.npmjs.com/package/react-native-cookies](https://www.npmjs.com/package/react-native-cookies) | v3.2.0 |
11 | 浮层 | react-native-root-siblings | [https://github.com/magicismight/react-native-root-siblings](https://github.com/magicismight/react-native-root-siblings) | v3.0.0 |
12 | toast |　react-native-root-toast | [https://github.com/magicismight/react-native-root-toast](https://github.com/magicismight/react-native-root-toast) | v3.0.1 |
13 | 日历 | react-native-calendars | [https://github.com/wix/react-native-calendars](https://github.com/wix/react-native-calendars) | v1.17.3 |
14 | 分享 | 暂定 |||
15 | 即时聊天 | 暂定 |||
16 | 选项卡 | react-native-scrollable-tab-view | [https://github.com/skv-headless/react-native-scrollable-tab-view](https://github.com/skv-headless/react-native-scrollable-tab-view) | v0.8.0 | 


### 二、APP相关账号管理

名称 | 账号 | 密码 | 备注
---- | ---- | ---- | ----
热更新 | doukegithub | douke123456 | https://github.com/
消息推送 | | | https://mobile.umeng.com/push
腾讯云(云通讯) | 179e@179e.com | Douke@yun | https://console.cloud.tencent.com/developer
ios开发者 | | | 
andorid证书 | | | 


### 三、重命名项目

android

> •package.json    
•index.{os}.js    
•android\settings.gradle    
•android\app\build.gradle   
•android\app\src\main\java\com{project}   
•android\app\src\main\java\com{project}\MainActivity.java    
•android\app\src\main\AndroidManifest.xml   
•android\app\src\main\res\values\strings.xml


mac

> •package.json    
•index.{os}.js    
•ios\{project}    
•ios\{project}\Base.lproj\LaunchScreen.xib    
•ios\{project}\appDelegate.m   
•ios\{project}.xcodeproj   
•ios\{project}.xcodeproj\project.pbxproj    
•ios\{project}.xcodeproj\xcsshareddata\xcschemes\{project}.xcscheme    
•ios\{project}Tests    
•ios\{project}Tests\{project}Tests.m

### 四、添加字体

android

1. 添加字体文件到 android 项目    
    把字体文件放到 /android/app/src/main/assets/fonts/ 目录下
2. 使用字体

mac

1.  添加字体文件到 Xcode 项目    
    把字体文件放在 /ios/fonts/ 目录下，点击主项目位置，右键添加新文件(字体文件)到项目   
2. 确保字体包含在项目中
3. 检查字体是否以资源文件形式绑定好
4. 添加自定义字体文件到 plist 文件里面        
    在主目录里面选择 info.plist，然后打开点击 “Information Property List”, 添加插件标识. 在下拉列表中选择 “Fonts provided by application”. 复制字体文件名称并粘贴到该行的右边栏.
5. 查找字体名称 (可选)
6. 使用字体    
    参考站点(访问需要翻墙) [https://medium.com/@dabit3/adding-custom-fonts-to-react-native-b266b41bff7f#.y0s276ll0](https://medium.com/@dabit3/adding-custom-fonts-to-react-native-b266b41bff7f#.y0s276ll0)

### 五、应用名及图标修改
android

1.应用ID    
    1). 修改```android/app/build.gradle```中的以下内容      

        ……
        android {
            ……
            defaultConfig {
                applicationId "com.myproject"  <-- 就是这行
                ……
            }
            ……
        }        

2. 版本号    
    在```android/app/build.gradle```中，versionCode 和versionName两项。versionCode必须每次增加，不能减少。每次发布之前，这两项都要修改    

3. 应用名称    
    在```android/app/src/main/res/values/strings.xml```中，找到```<string name="app_name">MyProject</string>```，中间的MyProject就是应用名称了。

4. 图标
    在```android/app/src/main/res/```下，你会看到一系列mipmap开头的文件夹（默认是4个），按照里面ic_launcher.png的尺寸，生成四个版本的icon并替换。


### 六、打包发布
android

1. 生成签名文件

    生成签名文件
    > keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

    在运行上面这条语句之后，密钥库里应该已经生成了一个单独的密钥，有效期为10000天。--alias参数后面的别名是你将来为应用签名时所需要用到的，所以记得记录这个别名。

    <span style="color:#F00">注：请记得妥善地保管好你的密钥库文件</span>

    查看签名文件
    > keytool -list -v -keystore E:\app\my-release-key.keystore -storepass android

    最后一位(android)是密码

2. 把```my-release-key.keystore```文件放到你工程中的```android/app```文件夹下。
3. 编辑```~/.gradle/gradle.properties```，添加如下的代码（注意把其中的****替换为相应密码）

    > MYAPP_RELEASE_STORE_FILE=my-release-key.keystore   
    MYAPP_RELEASE_KEY_ALIAS=my-key-alias   
    MYAPP_RELEASE_STORE_PASSWORD=\*\*\*\*   
    MYAPP_RELEASE_KEY_PASSWORD=\*\*\*\*   


4. 编辑你工程目录下的```android/app/build.gradle```，添加如下的内容：

        ```
        ...
        android {
            ...
            defaultConfig { ... }
            signingConfigs {
                release {
                    storeFile file(MYAPP_RELEASE_STORE_FILE)
                    storePassword MYAPP_RELEASE_STORE_PASSWORD
                    keyAlias MYAPP_RELEASE_KEY_ALIAS
                    keyPassword MYAPP_RELEASE_KEY_PASSWORD
                }
            }
            buildTypes {
                release {
                    ...
                    signingConfig signingConfigs.release
                }
            }
        }
        ...
        ```

5. 如果你在```android/app```下有一个```react.gradle```,只要在终端下运行以下命令：  

    > cd android && ./gradlew assembleRelease

6. 在把发行版本提交到Play Store之前，你应该做一次最终测试。输入以下命令可以在设备上安装发行版本：

    > cd android && ./gradlew installRelease

    如果打包出错请先执行清除命令
    > cd android && ./gradlew clean

mac   

1. 打开```AwesomeApp/ios/AwesomeApp/AppDelegate.m```    

2. 取消注释```jsCodeLocation = [[NSBundle mainBundle] ...```这一行。    

3. 根据你的app选择的scheme的不同，会生成不同的离线包（Debug会生成带有警告的开发模式的包，Release则会生成压缩优化过的包）。要修改scheme的话，选择Xcode顶部菜单中的```Product > Scheme > Edit Scheme...```，在```Build Configuration```选项中切换选择```Debug```或是```Release```。

