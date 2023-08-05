# 前端开发指引

## 1.概述
### 1.1.编写目的
> 本文档结合前端技术架构，对前端的方式进行描述，包括环境搭建、开发流程、开发步骤等进行说明。

### 1.2.预期读者
> 项目中的前端组成员或参与前端开发的开发人员。

### 1.3.术语描述
> goose-cli：Goose脚手架的配套工具，用于创建Goose脚手架工程
> gooseSDK：基于NebulaSDK的SDK，向前端提供调用Android或iOS的接口
> mPaaS：Mobile PaaS，源于支付宝的移动开发平台。

### 1.4.参考资料
> 暂无

## 2.开发环境搭建
### 2.1.开发工具说明
> VSCode

### 2.2.开发环境搭建
> 安装Node.js
> 安装VSCode
```
    VSCode推荐插件：
    Chinese (Simplified) Language Pack for Visual Studio Code
    Auto Close Tag
    Auto Complete Tag
    Auto Import
    Auto Rename Tag
    Bracket Pair Colorizer
    Vue VS Code Extension Pack
    Vetur
```
> 修改VSCode的Tab键缩进
```
    在VSCode中打开设置，英文语言：file/preferences/settings
    中文语言：文件/首选项/设置，找到：Tab Size设置，并改为2即可
```
> 安装goose-cli  npm install -g goose-cli --registry=http://goose.nineheaven.top:4873/

## 3.开发流程
### 3.1.工具使用说明
> goose-cli是赞同科技自行开发的前端工具，用于创建Goose脚手架工程。Goose脚手架工程目前可以适配蚂蚁金服mPaaS平台和赞同自有的基于React Native开发框架。
> goose list命令，简写为goose l，用于查询当前有哪些前端工程模板可用
> goose init命令，简写为goose i，用于在当前目录下初始化前端工程，在初始化的过程中需要选择工程模板。
> goose setServerAddress命令，简写为goose s，用于设置服务端地址。在项目交付过程中，goose-cli配套服务需要在行内环境部署，部署后需要手动将服务端地址设置为行内环境地址。
> goose resetServerAddress命令，简写为goose r，用于重置服务端地址。在需要的时候，可以将服务端地址重置为默认地址。

### 3.2.工程目录说明
${project.dir}
  |-@goose：UI组件库以及前端图标库（禁止修改）
    |-goose-icons：前端图标库（禁止修改）
    |-gooseui：UI组件库（禁止修改）
  |- command：编译过程中使用的各种命令、loader等（禁止修改）
  |- gooseSDK：前端工程依赖的GooseSDK（禁止修改）
  |- init-modules：前端工程初始化页面和模板工具（禁止修改）
  |- mock：与后端接口的Mock API数据
  |- public：前端页面公共模板信息（禁止修改）
    |- favicon.ico：页面图标（禁止修改）
    |- index.html：页面公共模板（禁止修改）
  |- src：页面源码（开发目录）
    |- assets：静态资源目录
      |- api：服务端接口定义文件（按需求添加）
      |- css：公共CSS文件（推荐使用less编辑）
      |- extend-sdk：GooseSDK的拓展SDK文件
      |- images：图片（推荐按功能划分目录保存），图片大小在50K以下
      |- js：公共JS文件
      |- lang：公共国际化资源（禁止修改）
    |- components：公共组件
    |- config：公共配置（禁止修改）
    |- mixin：公共mixin（按需求添加）
    |- pages：页面资源
      |- page1：页面目录
        |- components：页面自用组件
        |- config：页面配置信息
          |- lang：页面自用国际化资源
          |- i18n-config.js：国际化配置
          |- goose-config.js：引用UI组件配置
        |- app.js：页面入口文件
        |-page1-skeleton.html：页面骨架屏文件（可选）
        |-Page1App.vue：页面代码
  |- .env.mock：Mock-API环境变量文件（禁止修改）
  |- .env.sit：集成测试环境变量文件（禁止修改）
  |- .eslintrc.js：ESLINT规则文件（禁止修改）
  |- .postcss.js：postcss配置文件（禁止修改）
  |- babel.config.js：babel配置文件（禁止修改）
  |- package.json：前端工程依赖管理（根据具体需求修改）
  |- vue.config.js：运行、编译配置文件（禁止修改）

### 3.3.运行脚本说明
> dev脚本：启动调试，调试前端页面。调用服务必须使用手机调试基座，连接mPaaS的MGS上配置的接口
> dev:mock脚本：启动调试，调试前端页面。调用服务使用内置的Mock服务
> sit脚本：编译生成离线包静态资源，包含前端控制台，用于SIT环境
> build脚本：编译生成离线包静态资源，不包含前端控制台，用于UAT环境、生产环境和灾备环境
> report脚本：编译生成离线包静态资源，同时进行对编译生成的静态资源进行分析，了解每个依赖所占用的体积，并对前端工程进行优化
> init-page脚本：创建新页面
> init-component：创建新的公共组件

### 3.4.开发流程说明
#### 3.4.1.创建新页面
```
npm run init-page <pagename>
如果页面复杂度高，需要依赖的资源多，需要添加骨架屏模板。新建页面资源包括：
|-components：页面自用组件
|-config：页面相关配置
  |-lang：国际化资源
    |-en.js：英文
    |-zh-CN.js：简体中文
    |-zh-HK.js：繁体中文
  |-i18n-config.js：国际化配置
  |-goose-config.js：引用Goose-UI组件的配置
|-app.js：页面入口
|-<pagename>.vue：页面Vue文件
|-<pagename>-skeleton.html：页面模板文件（可选）
```

> 页面中使用的所有Goose-UI组件，必须通过vant-config.js配置，示例代码如下：
```
import Vue from ‘vue’
import { Cell, CellGroup } from ‘gooseui’ // 使用ES6的解构赋值，引用对应的组件

Vue.use(Cell)
.use(CellGroup)
```
> 骨架屏编写说明：骨架屏位于<pagename>-skeleton.html文件中，<div id=”app”></div>下编写骨架屏内容即可

> 页面创建好后，如果需要设置标题，需要修改App.vue中的title属性,然后在页面自用国际化资源中添加对应的国际化信息。

#### 3.4.2.创建组件
> 在工程根目录下执行npm run init-component <componentname>

#### 3.4.3.调用RPC接口
> 先在mPaaS控制台添加接口，并将预设报文填入，点击保存
> 在assets/api/demo-rpc.js中配置刚才添加的RPC接口名字，
> callRPC参数说明：
```
入参1：operationType：操作类型，对应mPaaS控制台配置的operationType
入参2：传递的参数
入参3：HTTP请求头信息
入参4：成功的回调函数
入参5：失败的回调函数（可省略）
入参6：关于本次请求的设置（可省略），JSON
```
> 请求的设置：showLoading：是否显示Loading，默认true,在页面中调用rpc方法并传入对应参数即可
> RPC接口的Mock服务:在实际开发过程中，手机端不方便调试接口，经常需要在浏览器端进行调试，Mock服务由此而生。
```
步骤1：在/mock目录下添加${operationType}.json文件，编写Mock数据
步骤2：使用dev:mock脚本启动
```
#### 3.4.4.GooseSDK接口扩展（前端部分）
> 如果想要注册某个拓展SDK接口，则需要提前原生同事沟通好接口的名字、参数、回调、实现的功能等，本案例使用接口名字为‘extendDemo’，如要拓展请按照实际情况开发。
> 先在src/assets/extend-sdk目录下新建goose-demo.js文件，在文件中使用Vue.prototype.$goose.call方法调用原生方法。
> 在src/assets/extend-sdk目录下的index.js中，将刚才创建的dextendDemo方法添加到extend对象中
> 如在某个页面中需要使用此接口，则在该页面的app.js中将extend-sdk注册到页面中，即可正常使用。
> 注册完成后，在页面中调用即可

### 3.5.离线包发布流程
> 离线包发布需要在mPaaS的控制台进行，早期开发阶段，使用mPaaS公有云环境，信息如下：
登录地址：https://signin.aliyun.com/agree.onaliyun.com/login.htm
账号：工号（字母小写）@agree.onaliyun.com
默认密码：agree.mobile（首次登录后需要修改密码）
> 当我们需要使用离线包开发移动应用时，需要将我们本地生成的www包上传为离线包供移动APP使用。
> 打开mPaaS移动开发平台，选择当前开发的项目并进入，选择离线包管理
> 点击新建H5离线包，会出现弹窗要求录入8位数H5AppID和H5App名称，如：20200212,按照要求录入并点击提交。
> 点击配置管理，录入域名等配置信息，每个移动应用仅需要录入一次即可。开发阶段可以暂时不上传秘钥文件，但是测试和生产阶段为了提升移动应用的安全性则必须上传秘钥文件，需注意的是秘钥文件一旦提交后不可修改，要谨慎对待。
> 接下来需要编译生成离线包，先在工程中vue.config.js中将outputDir修改为“H5AppId/www”格式，如20200212/www，然后执行npm run build或npm run sit，编译生成静态资源，然后将文件夹压缩成zip压缩包。
> 回到mPaaS平台的控制台中，选择刚才新建的H5App应用，点击添加开始上传离线包。选择客户端范围和版本号，将刚才新建创建的压缩包上传，并完成其他相关配置即可提交。
> 上传成功的离线包还处于待发布状态，我们需要将它发布后才可以正常使用，点击发布按钮，配置发布类型和发布模式等配置项点击确定后即可发布
