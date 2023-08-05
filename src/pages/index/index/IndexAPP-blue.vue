<template>
  <div class="app">
    <div class="tabPage">
      <component
        ref="component"
        :is="currentComp"
        :is-login="isLogin"
        :login-type="loginType"
        :show-eye-pub="showeye"
        :menu="menu"
        @toRootPage="toRootPage()"
        @getloginstate="getLoginStateFn"
        @geteyestate="getEyeFun"
      ></component>
    </div>
    <div class="index_content_footer tabbarBackground">
      <!-- <div class="cloud_teller" @click="jumpToTeller">
        <img
          class="img_cloud_teller"
          :src="require('@/assets/images/index/4-19.gif')"
          alt=""
        />
          <p class="cyhd">参与活动</p>
      </div> -->

      <!-- <div
        v-for="(item, index) in tabbarList"
        :key="index"
        :class="{ active: isActive == item.value ? true : false }"
        class="page_index"
        @click="handleTab(item, index)"
      >
        <div class="textcent">
          <img :src="num == item.value ? item.img : item.src" alt="" />
        </div>
        <p :class="num == item.value ? 'blue' : 'gray'">{{ item.name }}</p>
      </div> -->
      <div class="page_index" @click="handleTab(tabbarList[0], '1')">
        <div class="textcent">
          <div class="textcentIcon" :class="num == '1' ? 'indexIcon' : 'indexIconActive'"></div>
          <p class="text textChange" :class="num == '1' ? 'blue' : 'gray'">首页</p>
          <!-- <img :src="num == '1' ? minePageBackground : indexPageBackground" alt="" /> -->
        </div>
      </div>
      <div class="page_index" @click="handleTab(tabbarList[1], '2')">
        <div class="textcent">
          <div class="textcentIcon" :class="num == '2' ? 'financialIcon' : 'financialIconActive'"></div>
          <!-- <img :src="num == '2' ? minePageBackground : indexPageBackground" alt="" /> -->
          <p class="text textChange" :class="num == '2' ? 'blue' : 'gray'">理财</p>
        </div>
      </div>
      <div class="page_index" @click="handleTab(tabbarList[2], '4')">
        <div class="textcent">
          <div class="textcentIcon" :class="num == '4' ? 'activityIcon' : 'activityIconActive'"></div>
          <!-- <img :src="num == '2' ? minePageBackground : indexPageBackground" alt="" /> -->
          <p class="text textChange" :class="num == '4' ? 'blue' : 'gray'">活动</p>
        </div>
      </div>
      <div class="page_index" @click="handleTab(tabbarList[3], '3')">
        <div class="textcent">
          <!-- <img :src="num == '3' ? minePageBackground : indexPageBackground" alt="" /> -->
          <div class="textcentIcon" :class="num == '3' ? 'mineIcon' : 'mineIconActive'"></div>
          <p class="text textChange" :class="num == '3' ? 'blue' : 'gray'">我的</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from '@/mixins/common-mixin'
import HomePage from './components/HomePage'
import Home from './components/Home'
import Financial from './components/Financial'
import Mine from './components/Mine'
import CommonUtil from '@/assets/js/common-util'

import { getEncryptData } from '@/assets/api/rpc-home'

export default {
  name: 'IndexApp',
  components: {
    HomePage,
    Home,
    Financial,
    Mine
  },
  mixins: [CommonMixin],
  data () {
    return {
      //获取登录方式参数
      loginType: {},
      //用户是否登陆
      isLogin: false,
      num: 1,
      //首页全局小眼睛状态
      showeye: false,
      currentComp: 'Home',
      isActive: '1',
      menu: {
        "moduleGroup": {
          "moduleGroupId": "1514191623964200960",
          "groupName": "模块布局",
          "auditStatus": 4,
          "processInstanceId": null,
          "submitUserId": "21",
          "submitUserName": null,
          "effectTime": "2022-04-01 00:00:00",
          "createTime": "2022-04-13 18:39:50",
          "updateTime": "2022-04-18 11:31:34",
          "moduleGroupList": [
            {
              "moduleGroupId": "1514191623964200960",
              "moduleName": "搜索模块",
              "componentsName": "searchModule",
              "icon": "el-icon-s-flag",
              "defaultShow": 1,
              "rank": 0
            },
            {
              "moduleGroupId": "1514191623964200960",
              "moduleName": "头部菜单",
              "componentsName": "headMenu",
              "icon": "el-icon-s-flag",
              "defaultShow": 1,
              "rank": 1
            },
            {
              "moduleGroupId": "1514191623964200960",
              "moduleName": "服务菜单",
              "componentsName": "serviceMenu",
              "icon": "el-icon-s-operation",
              "defaultShow": 1,
              "rank": 2
            },
            {
              "moduleGroupId": "1514191623964200960",
              "moduleName": "头条菜单",
              "componentsName": "headlineMenu",
              "icon": "el-icon-s-operation",
              "defaultShow": 1,
              "rank": 3
            },
            {
              "moduleGroupId": "1514191623964200960",
              "moduleName": "广告位一",
              "componentsName": "advModuleS",
              "icon": "el-icon-s-operation",
              "defaultShow": 1,
              "rank": 4
            },
            {
              "moduleGroupId": "1514191623964200960",
              "moduleName": "热销理财",
              "componentsName": "hotMoneyModule",
              "icon": "el-icon-s-operation",
              "defaultShow": 1,
              "rank": 5
            },
            {
              "moduleGroupId": "1514191623964200960",
              "moduleName": "广告位二",
              "componentsName": "advModuleM",
              "icon": "el-icon-s-operation",
              "defaultShow": 1,
              "rank": 6
            },
            {
              "moduleGroupId": "1514191623964200960",
              "moduleName": "广告位三",
              "componentsName": "advModuleL",
              "icon": "el-icon-s-operation",
              "defaultShow": 1,
              "rank": 7
            },
            // {
            //   "moduleGroupId": "1514191623964200960",
            //   "moduleName": "贷款专区",
            //   "componentsName": "loanZoneModule",
            //   "icon": "el-icon-s-operation",
            //   "defaultShow": 1,
            //   "rank": 8
            // }
          ]
        },
        "headMenu": {
          "id": "1515898611131617280",
          "groupName": "niu头部菜单模板牡丹主题",
          "menuList": [
            {
              "icon": [require('@/assets/images/index/icon1.png')],
              "updateType": false,
              "needLogin": "1",
              "sc": "账户总览",
              "tc": "賬戶總覽",
              "en": "Account overview",
              "routerType": 1,
              "routerName": "00010004",
              "pageUrl": "/www/overview_page_content.html",
              "clientMinVersion": "1.0.0",
              "platform": "3",
              "menuName": "账户总览",
              "name": "账户总览",
              "menuIndex": 0
            },
            {
              "icon": [require('@/assets/images/index/icon2.png')],
              "updateType": false,
              "sc": "收支明细",
              "tc": "收支明细",
              "en": "Payment details",
              "routerType": 1,
              "routerName": "00010003",
              "pageUrl": "/www/income_expenditure_details_index.html",
              "needLogin": "1",
              "clientMinVersion": "1.0.0",
              "platform": "3",
              "menuName": "收支明细",
              "name": "收支明细",
              "menuIndex": 1
            },
            {
              "icon": [require('@/assets/images/index/icon3.png')],
              "updateType": false,
              "sc": "转账",
              "tc": "轉賬",
              "en": "Transfer",
              "routerType": 1,
              "routerName": "00010005",
              "pageUrl": "/www/transfer_transferAccounts.html",
              "needLogin": "1",
              "clientMinVersion": "1.0.0",
              "platform": "3",
              "menuName": "转账",
              "name": "转账",
              "menuIndex": 2
            },
            {
              "icon": [require('@/assets/images/index/icon4.png')],
              "updateType": false,
              "sc": "扫一扫",
              "tc": "扫一扫",
              "en": "scan",
              "routerType": 1,
              "routerName": "124",
              "pageUrl": "124",
              "needLogin": "1",
              "clientMinVersion": "1.0.0",
              "platform": "3",
              "menuName": "扫一扫",
              "name": "扫一扫",
              "menuIndex": 3
            }
          ],
          "userLevel": "2",
          "auditStatus": 4,
          "processInstanceId": null,
          "updateUserId": "21",
          "submitUserId": null,
          "submitUserName": null,
          "effectTime": "2022-04-01 00:00:00",
          "updateTime": "2022-04-18 11:42:48",
          "createTime": "2022-04-18 11:42:48"
        },
        "headlineMenu": {
          "id": "1514453556206374912",
          "groupName": "二级头条切换时间",
          "changeTime": 2500,
          "userLevel": "2",
          "auditStatus": 4,
          "processInstanceId": null,
          "updateUserId": "21",
          "submitUserId": null,
          "submitUserName": null,
          "effectTime": "2022-04-01 00:00:00",
          "updateTime": "2022-04-14 12:00:40",
          "createTime": "2022-04-14 12:00:40"
        },
        "serviceMenu": {
          "id": null,
          "groupName": null,
          "detailList": [
            {
              "menuOrderInGroup": 15,
              "routerType": 1,
              "routerName": "00010004",
              "tc": "賬戶總覽 ",
              "pageUrl": "/www/overview_page_content.html",
              "menuName": "账户总览",
              "sc": "账户总览",
              "platform": 3,
              "icon": [require('@/assets/images/index-icon/overview.svg')],
              "en": "Account overview",
              "clientMinVersion": "1.0.0",
              "needLogin": "1",
              "isServiceMenu": true,
              "isActive": true,
              "groupInfo": {},
              "groupIndex": 0,
              "menuIndex": 0,
              "updateType": false,
              "name": "账户总览"
            },
            {
              "menuOrderInGroup": 23,
              "routerType": 1,
              "routerName": "00010003",
              "tc": "交易査詢",
              "pageUrl": "/www/income_expenditure_details_serach.html",
              "menuName": "交易查询",
              "sc": "交易查询",
              "platform": 3,
              "icon": [require('@/assets/images/index-icon/my-bill.svg')],
              "en": "TradingQuery",
              "clientMinVersion": "1.0.0",
              "needLogin": "1",
              "isServiceMenu": true,
              "isActive": false,
              "groupInfo": {},
              "groupIndex": 0,
              "menuIndex": 1,
              "updateType": false,
              "name": "交易查询"
            },
            {
              "menuOrderInGroup": 24,
              "routerType": 1,
              "routerName": "00010003",
              "tc": "收支明細",
              "pageUrl": "/www/income_expenditure_details_index.html",
              "menuName": "收支明细",
              "sc": "收支明细",
              "platform": 3,
              "icon": [require('@/assets/images/index-icon/payment-details.svg')],
              "en": "Payment details",
              "clientMinVersion": "1.0.0",
              "needLogin": "1",
              "isServiceMenu": true,
              "isActive": false,
              "groupInfo": {},
              "groupIndex": 0,
              "menuIndex": 2,
              "updateType": false,
              "name": "收支明细"
            },
            {
              "menuOrderInGroup": 6,
              "routerType": 1,
              "routerName": "00010006",
              "tc": "理財推薦",
              "pageUrl": "/www/financial_details.html",
              "menuName": "理财推荐",
              "sc": "理财推荐",
              "img": [
                "img/commend-blue.1f53a3fa.svg"
              ],
              "platform": 3,
              "en": "Financial recommendation",
              "clientMinVersion": "1.0.0",
              "needLogin": "0",
              "isServiceMenu": true,
              "isActive": false,
              "groupInfo": {},
              "groupIndex": 1,
              "menuIndex": 0,
              "updateType": false,
              "icon": [require('@/assets/images/index-icon/financial-blue.svg')],
              "name": "理财推荐"
            },
            {
              "menuOrderInGroup": 8,
              "routerType": 1,
              "routerName": "00010005",
              "tc": "銀行卡轉帳",
              "pageUrl": "/www/transfer_transferInfo.html",
              "menuName": "银行卡转账",
              "sc": "银行卡转账",
              "platform": 3,
              "img": [
                "img/bank-trans.7dc32e3c.svg"
              ],
              "en": "Bank Card Transfer",
              "clientMinVersion": "1.0.0",
              "needLogin": "0",
              "isServiceMenu": true,
              "isActive": true,
              "groupInfo": {},
              "groupIndex": 2,
              "menuIndex": 0,
              "updateType": false,
              "icon": [require('@/assets/images/index-icon/bank-trans.svg')],
              "name": "银行卡转账"
            },
            {
              "menuOrderInGroup": 10,
              "routerType": 1,
              "routerName": "00010005",
              "tc": "轉帳査詢",
              "pageUrl": "/www/transfer_transferRecordQuery.html",
              "menuName": "转账查询",
              "sc": "转账查询",
              "platform": 3,
              "img": [
                "img/query.b6ffd85e.svg"
              ],
              "en": "Transfer Inquiry",
              "clientMinVersion": "1.0.0",
              "needLogin": "0",
              "isServiceMenu": true,
              "isActive": true,
              "groupInfo": {},
              "groupIndex": 2,
              "menuIndex": 2,
              "updateType": false,
              "icon": [require('@/assets/images/index-icon/transfer.svg')],
              "name": "转账查询"
            },
            {
              "menuOrderInGroup": 17,
              "routerType": 1,
              "routerName": "00010005",
              "tc": "轉賬",
              "pageUrl": "/www/transfer_transferAccounts.html",
              "menuName": "转账",
              "sc": "转账",
              "platform": 3,
              "img": [
                "img/transfer.c3403e7a.svg"
              ],
              "en": "Transfer",
              "clientMinVersion": "1.0.0",
              "needLogin": "0",
              "isServiceMenu": true,
              "isActive": true,
              "groupInfo": {},
              "groupIndex": 2,
              "menuIndex": 5,
              "updateType": false,
              "icon": [require('@/assets/images/index-icon/transfer.svg')],
              "name": "转账"
            },
            {
              "menuOrderInGroup": 22,
              "routerType": 1,
              "routerName": "00010006",
              "tc": "理財產品",
              "pageUrl": "/www/financial_index.html",
              "menuName": "理财产品",
              "sc": "理财产品",
              "platform": 3,
              "img": [
                "img/financial-blue.9d4b5f52.svg"
              ],
              "en": "Finance Products ",
              "clientMinVersion": "1.0.0",
              "needLogin": "0",
              "isServiceMenu": true,
              "isActive": false,
              "groupInfo": {},
              "groupIndex": 1,
              "menuIndex": 3,
              "updateType": false,
              "icon": [require('@/assets/images/index-icon/financial-blue.svg')],
              "name": "理财产品"
            },
            {
              "menuOrderInGroup": 7,
              "routerType": 1,
              "routerName": "00010015",
              "tc": "風險評估",
              "pageUrl": "/www/risk_assessment_index.html",
              "menuName": "风险评估",
              "sc": "风险评估",
              "platform": 3,
              "img": [
                "img/takeRisk.b8fb4401.svg"
              ],
              "en": "Risk Assessment",
              "clientMinVersion": "1.0.0",
              "needLogin": "0",
              "isServiceMenu": true,
              "isActive": true,
              "groupInfo": {},
              "groupIndex": 1,
              "menuIndex": 1,
              "updateType": false,
              "icon": [require('@/assets/images/index-icon/takeRisk.svg')],
              "name": "风险评估"
            },
            { 
              id: 111,
              name: '全部',
              routerName: '00010010',
              icon: [require('@/assets/images/index-icon/blue-all.svg')],
              pageUrl: '/www/all_applications_index.html' 
            }
          ],
          "groupMenuList": [
            {
              "groupId": 64,
              "groupName": "查询",
              "menuList": [
                {
                  "menuOrderInGroup": 15,
                  "routerType": 1,
                  "routerName": "00010004",
                  "tc": "賬戶總覽 ",
                  "pageUrl": "/www/overview_page_content.html",
                  "menuName": "账户总览",
                  "sc": "账户总览",
                  "platform": 3,
                  "icon": "http://8.142.109.118:9088/uploadFile/6ec7e235-e482-4151-91cf-beafa7a33912.png",
                  "en": "Account overview",
                  "clientMinVersion": "1.0.0",
                  "needLogin": "1",
                  "isServiceMenu": true,
                  "isActive": true,
                  "groupInfo": {},
                  "groupIndex": 0,
                  "menuIndex": 0,
                  "updateType": false,
                  "name": "账户总览"
                },
                {
                  "menuOrderInGroup": 23,
                  "routerType": 1,
                  "routerName": "00010003",
                  "tc": "交易査詢",
                  "pageUrl": "/www/income_expenditure_details_serach.html",
                  "menuName": "交易查询",
                  "sc": "交易查询",
                  "platform": 3,
                  "icon": "http://8.142.109.118:9088/uploadFile/5a760b58-e3f0-4793-9838-61c2f20a76b3.png",
                  "en": "TradingQuery",
                  "clientMinVersion": "1.0.0",
                  "needLogin": "1",
                  "isServiceMenu": true,
                  "isActive": false,
                  "groupInfo": {},
                  "groupIndex": 0,
                  "menuIndex": 1,
                  "updateType": false,
                  "name": "交易查询"
                },
                {
                  "menuOrderInGroup": 24,
                  "routerType": 1,
                  "routerName": "00010003",
                  "tc": "收支明細",
                  "pageUrl": "/www/income_expenditure_details_index.html",
                  "menuName": "收支明细",
                  "sc": "收支明细",
                  "platform": 3,
                  "icon": "http://8.142.109.118:9088/uploadFile/1c6ae696-832e-4379-81ab-ff597a21eb7e.png",
                  "en": "Payment details",
                  "clientMinVersion": "1.0.0",
                  "needLogin": "1",
                  "isServiceMenu": true,
                  "isActive": false,
                  "groupInfo": {},
                  "groupIndex": 0,
                  "menuIndex": 2,
                  "updateType": false,
                  "name": "收支明细"
                }
              ],
              "groupOrder": "2"
            },
            {
              "groupId": 109,
              "groupName": "理财",
              "menuList": [
                {
                  "menuOrderInGroup": 6,
                  "routerType": 1,
                  "routerName": "00010006",
                  "tc": "理財推薦",
                  "pageUrl": "/www/financial_details.html",
                  "menuName": "理财推荐",
                  "sc": "理财推荐",
                  "img": [
                    "img/commend-blue.1f53a3fa.svg"
                  ],
                  "platform": 3,
                  "en": "Financial recommendation",
                  "clientMinVersion": "1.0.0",
                  "needLogin": "0",
                  "isServiceMenu": true,
                  "isActive": false,
                  "groupInfo": {},
                  "groupIndex": 1,
                  "menuIndex": 0,
                  "updateType": false,
                  "icon": "http://8.142.109.118:9088/uploadFile/4014ca10-3684-4e85-8069-403e592568ac.png",
                  "name": "理财推荐"
                },
                {
                  "menuOrderInGroup": 7,
                  "routerType": 1,
                  "routerName": "00010015",
                  "tc": "風險評估",
                  "pageUrl": "/www/risk_assessment_index.html",
                  "menuName": "风险评估",
                  "sc": "风险评估",
                  "platform": 3,
                  "img": [
                    "img/takeRisk.b8fb4401.svg"
                  ],
                  "en": "Risk Assessment",
                  "clientMinVersion": "1.0.0",
                  "needLogin": "0",
                  "isServiceMenu": true,
                  "isActive": true,
                  "groupInfo": {},
                  "groupIndex": 1,
                  "menuIndex": 1,
                  "updateType": false,
                  "icon": "http://8.142.109.118:9088/uploadFile/daa73860-610a-4398-9e89-bcd7555b589d.png",
                  "name": "风险评估"
                },
                {
                  "menuOrderInGroup": 16,
                  "routerType": 1,
                  "routerName": "00010003",
                  "tc": "存款",
                  "pageUrl": "/www/income_expenditure_details_index.html",
                  "menuName": "存款",
                  "sc": "存款",
                  "platform": 3,
                  "img": [
                    "img/deposit-blue.50697f0f.svg"
                  ],
                  "en": "Deposit",
                  "clientMinVersion": "1.0.0",
                  "needLogin": "0",
                  "isServiceMenu": false,
                  "isActive": true,
                  "groupInfo": {},
                  "groupIndex": 1,
                  "menuIndex": 2,
                  "updateType": false,
                  "icon": "http://8.142.109.118:9088/uploadFile/24509d59-88f0-47d9-910a-3780064fe856.png",
                  "name": "存款"
                },
                {
                  "menuOrderInGroup": 22,
                  "routerType": 1,
                  "routerName": "00010006",
                  "tc": "理財產品",
                  "pageUrl": "/www/financial_index.html",
                  "menuName": "理财产品",
                  "sc": "理财产品",
                  "platform": 3,
                  "img": [
                    "img/financial-blue.9d4b5f52.svg"
                  ],
                  "en": "Finance Products ",
                  "clientMinVersion": "1.0.0",
                  "needLogin": "0",
                  "isServiceMenu": true,
                  "isActive": false,
                  "groupInfo": {},
                  "groupIndex": 1,
                  "menuIndex": 3,
                  "updateType": false,
                  "icon": "http://8.142.109.118:9088/uploadFile/73893570-157a-4a5b-b336-1b0800c61e4a.png",
                  "name": "理财产品"
                }
              ],
              "groupOrder": "3"
            },
            {
              "groupId": 110,
              "groupName": "转账",
              "menuList": [
                {
                  "menuOrderInGroup": 8,
                  "routerType": 1,
                  "routerName": "00010005",
                  "tc": "銀行卡轉帳",
                  "pageUrl": "/www/transfer_transferInfo.html",
                  "menuName": "银行卡转账",
                  "sc": "银行卡转账",
                  "platform": 3,
                  "img": [
                    "img/bank-trans.7dc32e3c.svg"
                  ],
                  "en": "Bank Card Transfer",
                  "clientMinVersion": "1.0.0",
                  "needLogin": "0",
                  "isServiceMenu": true,
                  "isActive": true,
                  "groupInfo": {},
                  "groupIndex": 2,
                  "menuIndex": 0,
                  "updateType": false,
                  "icon": "http://8.142.109.118:9088/uploadFile/ee390eae-fe43-4ef3-9270-87370b3a6449.png",
                  "name": "银行卡转账"
                },
                {
                  "menuOrderInGroup": 9,
                  "routerType": 1,
                  "routerName": "00010005",
                  "tc": "通訊錄轉帳",
                  "pageUrl": "/www/transfer_addressBookTransfer.html",
                  "menuName": "通讯录转账",
                  "sc": "通讯录转账",
                  "platform": 3,
                  "img": [
                    "img/address-book-transfer.0f02c516.svg"
                  ],
                  "en": "Address Book Transfer",
                  "clientMinVersion": "1.0.0",
                  "needLogin": "0",
                  "isServiceMenu": false,
                  "isActive": false,
                  "groupInfo": {},
                  "groupIndex": 2,
                  "menuIndex": 1,
                  "updateType": false,
                  "icon": "http://8.142.109.118:9088/uploadFile/89c5c190-ef09-4819-b739-9b28cb504826.svg",
                  "name": "通讯录转账"
                },
                {
                  "menuOrderInGroup": 10,
                  "routerType": 1,
                  "routerName": "00010005",
                  "tc": "轉帳査詢",
                  "pageUrl": "/www/transfer_transferRecordQuery.html",
                  "menuName": "转账查询",
                  "sc": "转账查询",
                  "platform": 3,
                  "img": [
                    "img/query.b6ffd85e.svg"
                  ],
                  "en": "Transfer Inquiry",
                  "clientMinVersion": "1.0.0",
                  "needLogin": "0",
                  "isServiceMenu": true,
                  "isActive": true,
                  "groupInfo": {},
                  "groupIndex": 2,
                  "menuIndex": 2,
                  "updateType": false,
                  "icon": "http://8.142.109.118:9088/uploadFile/f9577390-5570-40d7-b0c0-9a1f66bcb05e.png",
                  "name": "转账查询"
                },
                {
                  "menuOrderInGroup": 11,
                  "routerType": 1,
                  "routerName": "00010005",
                  "tc": "預約轉帳",
                  "pageUrl": "/www/transfer_reservationTransfer.html",
                  "menuName": "预约转账",
                  "sc": "预约转账",
                  "platform": 3,
                  "img": [
                    "img/regular-basis.176a2c18.svg"
                  ],
                  "en": "Advance Transfer",
                  "clientMinVersion": "1.0.0",
                  "needLogin": "0",
                  "isServiceMenu": false,
                  "isActive": false,
                  "groupInfo": {},
                  "groupIndex": 2,
                  "menuIndex": 3,
                  "updateType": false,
                  "icon": "http://8.142.109.118:9088/uploadFile/ef771c67-71f0-46b4-8590-83a9811029f0.svg",
                  "name": "预约转账"
                },
                {
                  "menuOrderInGroup": 12,
                  "routerType": 1,
                  "routerName": "00010005",
                  "tc": "轉帳設定",
                  "pageUrl": "/www/transfer_transferSet.html",
                  "menuName": "转账设置",
                  "sc": "转账设置",
                  "platform": 3,
                  "img": [
                    "img/my-bill.a5b6ee1c.svg"
                  ],
                  "en": "Transfer Settings",
                  "clientMinVersion": "1.0.0",
                  "needLogin": "0",
                  "isServiceMenu": false,
                  "isActive": false,
                  "groupInfo": {},
                  "groupIndex": 2,
                  "menuIndex": 4,
                  "updateType": false,
                  "icon": "http://8.142.109.118:9088/uploadFile/76f31012-5bcd-4e81-a9a8-395d1b31acde.svg",
                  "name": "转账设置"
                },
                {
                  "menuOrderInGroup": 17,
                  "routerType": 1,
                  "routerName": "00010005",
                  "tc": "轉賬",
                  "pageUrl": "/www/transfer_transferAccounts.html",
                  "menuName": "转账",
                  "sc": "转账",
                  "platform": 3,
                  "img": [
                    "img/transfer.c3403e7a.svg"
                  ],
                  "en": "Transfer",
                  "clientMinVersion": "1.0.0",
                  "needLogin": "0",
                  "isServiceMenu": true,
                  "isActive": true,
                  "groupInfo": {},
                  "groupIndex": 2,
                  "menuIndex": 5,
                  "updateType": false,
                  "icon": "http://8.142.109.118:9088/uploadFile/992d2779-bab4-42ea-a9d2-83808d9f24f3.png",
                  "name": "转账"
                }
              ],
              "groupOrder": "4"
            },
            {
              "groupId": 111,
              "groupName": "便民",
              "menuList": [
                {
                  "menuOrderInGroup": 18,
                  "routerType": 1,
                  "routerName": "212",
                  "tc": "熱門活動",
                  "pageUrl": "122",
                  "menuName": "热门活动",
                  "sc": "热门活动",
                  "platform": 3,
                  "img": [
                    "img/new-hot.32e737a7.svg"
                  ],
                  "en": "Hot Events",
                  "clientMinVersion": "1.0.0",
                  "needLogin": "0",
                  "isServiceMenu": false,
                  "isActive": false,
                  "groupInfo": {},
                  "groupIndex": 3,
                  "menuIndex": 0,
                  "updateType": false,
                  "icon": "http://8.142.109.118:9088/uploadFile/bf9a1c60-71bc-47e6-a2cf-21784d2c9bf6.svg",
                  "name": "热门活动"
                },
                {
                  "menuOrderInGroup": 19,
                  "routerType": 1,
                  "routerName": "00010009",
                  "tc": "電話費充值",
                  "pageUrl": "/www/living_expenses_index.html",
                  "menuName": "话费充值",
                  "sc": "话费充值",
                  "platform": 3,
                  "img": [
                    "img/pay-cost.3c4b751b.svg"
                  ],
                  "en": "Prepaid Refill",
                  "clientMinVersion": "1.0.0",
                  "needLogin": "0",
                  "isServiceMenu": false,
                  "isActive": false,
                  "groupInfo": {},
                  "groupIndex": 3,
                  "menuIndex": 1,
                  "updateType": false,
                  "icon": "http://8.142.109.118:9088/uploadFile/9d6cbc37-ffaf-4950-b11f-9a4bb54b44cc.svg",
                  "name": "话费充值"
                }
              ],
              "groupOrder": "5"
            },
            {
              "groupId": 112,
              "groupName": "网点",
              "menuList": [
                {
                  "menuOrderInGroup": 13,
                  "routerType": 1,
                  "routerName": "00010008",
                  "tc": "網點査詢",
                  "pageUrl": "/www/near_site_choose_site.html",
                  "menuName": "网点查询",
                  "sc": "网点查询",
                  "platform": 3,
                  "img": [
                    "img/query.b6ffd85e.svg"
                  ],
                  "en": "Network Query",
                  "clientMinVersion": "1.0.0",
                  "needLogin": "0",
                  "isServiceMenu": false,
                  "isActive": false,
                  "groupInfo": {},
                  "groupIndex": 4,
                  "menuIndex": 0,
                  "updateType": false,
                  "icon": "http://8.142.109.118:9088/uploadFile/24c34234-b14b-46ef-8c99-e0cc8fe5b2e9.svg",
                  "name": "网点查询"
                },
                {
                  "menuOrderInGroup": 20,
                  "routerType": 1,
                  "routerName": "00010008",
                  "tc": "網點預約",
                  "pageUrl": "/www/near_site_index.html",
                  "menuName": "网点预约",
                  "sc": "网点预约",
                  "platform": 3,
                  "img": [
                    "img/make-appointment.337da22d.svg"
                  ],
                  "en": "Appointment of outlets",
                  "clientMinVersion": "1.0.0",
                  "needLogin": "0",
                  "isServiceMenu": false,
                  "isActive": true,
                  "groupInfo": {},
                  "groupIndex": 4,
                  "menuIndex": 1,
                  "updateType": false,
                  "icon": "http://8.142.109.118:9088/uploadFile/82d5594d-2c14-4eb7-90e8-0084392b4440.svg",
                  "name": "网点预约"
                }
              ],
              "groupOrder": "6"
            },
            {
              "groupId": 12,
              "groupName": "设置",
              "menuList": [
                {
                  "menuOrderInGroup": 21,
                  "routerType": 1,
                  "routerName": "22",
                  "tc": "銀行卡設定",
                  "pageUrl": "122",
                  "menuName": "银行卡设置",
                  "sc": "银行卡设置",
                  "platform": 3,
                  "img": [
                    "img/bank-card-settings.700f5724.svg"
                  ],
                  "en": "Bank Card Settings",
                  "clientMinVersion": "1.0.0",
                  "needLogin": "0",
                  "isServiceMenu": false,
                  "isActive": false,
                  "groupInfo": {},
                  "groupIndex": 5,
                  "menuIndex": 0,
                  "updateType": false,
                  "icon": "http://8.142.109.118:9088/uploadFile/15cbdd95-11e1-4c9a-b501-d3d7744a543c.svg",
                  "name": "银行卡设置"
                },
                {
                  "menuOrderInGroup": 14,
                  "routerType": 1,
                  "routerName": "00010007",
                  "tc": "個人設置",
                  "pageUrl": "/www/set_up_set_up_content.html",
                  "menuName": "个人设置",
                  "sc": "个人设置",
                  "platform": 3,
                  "img": [
                    "img/set.574d21ce.svg"
                  ],
                  "en": "Personal Settings",
                  "clientMinVersion": "1.0.0",
                  "needLogin": "0",
                  "isServiceMenu": false,
                  "isActive": false,
                  "groupInfo": {},
                  "groupIndex": 5,
                  "menuIndex": 1,
                  "updateType": false,
                  "icon": "http://8.142.109.118:9088/uploadFile/0fb48c28-4566-49a1-8c93-03accd4f4424.svg",
                  "name": "个人设置"
                }
              ],
              "groupOrder": "7"
            }
          ],
          "userLevel": null,
          "auditStatus": null,
          "processInstanceId": null,
          "updateUserId": null,
          "submitUserId": null,
          "submitUserName": null,
          "effectTime": null,
          "updateTime": null,
          "createTime": null
        },
        "hotMoneyModule": null,
        "loanZoneModule": {
          "id": "1513442781840936960",
          "groupName": "贷款模板1",
          "loanTermKey": "贷款1",
          "loanNameKey": "贷款1",
          "loanRecommendKey": "贷款1",
          "loanQuotaKey": "贷款1",
          "userLevel": "2",
          "auditStatus": 4,
          "processInstanceId": null,
          "updateUserId": "21",
          "submitUserId": null,
          "submitUserName": null,
          "effectTime": "2022-04-05 00:00:00",
          "updateTime": "2022-04-11 17:04:12",
          "createTime": "2022-04-11 17:04:12"
        },
        "advModuleS": {
          "id": "1515943486564732928",
          "groupName": "新富文本",
          "moduleType": 6,
          "auditStatus": 4,
          "processInstanceId": null,
          "boothId": "1514185194838560768",
          "boothResource": null,
          "boothResourceName": null,
          "boothName": "新富文本",
          "autoOff": null,
          "autoOffTime": 0,
          "roll": 0,
          "rollInterval": 0,
          "rollDirection": 2,
          "boothType": 2,
          "click": 0,
          "chainedAddressList": null,
          "width": null,
          "high": null,
          "resourceType": 0,
          "userLevel": "2",
          "effectTime": "2022-04-01 00:00:00",
          "updateUserId": "21",
          "createUserId": "21",
          "submitUserName": null,
          "submitUserId": null,
          "createTime": "2022-04-18 14:41:07",
          "updateTime": "2022-04-18 14:41:07",
          "richTextBase64": "%3Cp%3E%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%E8%BF%99%E6%98%AF%E5%AF%8C%E6%96%87%E6%9C%AC%3Cimg%20src%3D%22http%3A%2F%2F8.142.109.118%3A9088%2FuploadFile%2F0d087249-d1a8-41f1-8a38-e9e52b8e1749.png%22%20width%3D%22160%22%20height%3D%22132%22%20%2F%3E%3C%2Fp%3E%0A%3Cp%3E%3Cimg%20src%3D%22http%3A%2F%2F8.142.109.118%3A9088%2FuploadFile%2F603a94e2-80a2-4cae-8fd0-5b22814a8a34.png%22%20width%3D%22160%22%20height%3D%22132%22%20%2F%3E%E5%AF%8C%E6%96%87%E6%9C%AC%E5%9C%A8%E8%BF%99%3C%2Fp%3E"
        },
        "advModuleM": {
          "id": "1515892290936246272",
          "groupName": "图片",
          "moduleType": 7,
          "auditStatus": 4,
          "processInstanceId": null,
          "boothId": "1514476987043942400",
          "boothResource": [
            {
              "url": "http://8.142.109.118:9088/booth/03375e3c-efa9-412c-9d96-dbc0b30aa226.jpg",
              "type": 0,
              "chainedAddress": "/www/risk_assessment_index.html",
              "clickType": 1,
              "appId": "00010015"
            }
          ],
          "boothResourceName": "1-中.zip",
          "boothName": "图片",
          "autoOff": null,
          "autoOffTime": 0,
          "roll": 0,
          "rollInterval": 0,
          "rollDirection": 2,
          "boothType": 2,
          "click": 0,
          "chainedAddressList": null,
          "width": null,
          "high": 135,
          "resourceType": 0,
          "userLevel": "2",
          "effectTime": "2022-04-01 00:00:00",
          "updateUserId": "21",
          "createUserId": "21",
          "submitUserName": null,
          "submitUserId": null,
          "createTime": "2022-04-18 11:17:41",
          "updateTime": "2022-04-18 11:17:41",
          "richTextBase64": null
        },
        "advModuleL": {
          "id": "1514808482459684864",
          "groupName": "轮播2",
          "moduleType": 8,
          "auditStatus": 4,
          "processInstanceId": null,
          "boothId": "1514464046936625152",
          "boothResource": [
            {
              "url": "http://8.142.109.118:9088/booth/36c1fe62-a6ee-4174-85ed-abfcea848f4d.jpg",
              "type": 0,
              "chainedAddress": "/www/transfer_transferAccounts.html",
              "clickType": 1,
              "appId": "00010005"
            },
            {
              "url": "http://8.142.109.118:9088/booth/2c76cc90-8dcd-4c90-bf98-8f4d01695297.jpg",
              "type": 0,
              "chainedAddress": "/www/transfer_transferAccounts.html",
              "clickType": 1,
              "appId": "00010005"
            },
            {
              "url": "http://8.142.109.118:9088/booth/2555340e-db69-489b-aff5-466fbf9044e3.jpg",
              "type": 0,
              "chainedAddress": "/www/transfer_transferAccounts.html",
              "clickType": 1,
              "appId": "00010005"
            }
          ],
          "boothResourceName": "1-中.zip",
          "boothName": "轮播2",
          "autoOff": null,
          "autoOffTime": null,
          "roll": 1,
          "rollInterval": 1000,
          "rollDirection": 0,
          "boothType": 2,
          "click": 0,
          "chainedAddressList": null,
          "width": null,
          "high": 135,
          "resourceType": 0,
          "userLevel": "2",
          "effectTime": "2022-04-01 00:00:00",
          "updateUserId": "21",
          "createUserId": "21",
          "submitUserName": null,
          "submitUserId": null,
          "createTime": "2022-04-15 11:31:01",
          "updateTime": "2022-04-15 11:31:01",
          "richTextBase64": null
        },
        "startPage": {
          "id": "1514466375479988224",
          "groupName": "启动页",
          "moduleType": 10,
          "auditStatus": 4,
          "processInstanceId": null,
          "boothId": "1514461167211384832",
          "boothResource": [
            {
              "url": "http://8.142.109.118:9088/booth/a3a6c30b-5185-4859-9412-0f29ff21f0d4.jpg",
              "type": 0,
              "chainedAddress": "/www/index_index.html",
              "clickType": 2,
              "appId": null
            },
            {
              "url": "http://8.142.109.118:9088/booth/c5fa3168-b1db-41bc-8982-9153e3cfca90.jpg",
              "type": 0,
              "chainedAddress": "/www/index_index.html",
              "clickType": 2,
              "appId": null
            },
            {
              "url": "http://8.142.109.118:9088/booth/a4065f73-4dc5-4a40-97d7-0071c75ebbe7.jpg",
              "type": 0,
              "chainedAddress": "/www/index_index.html",
              "clickType": 2,
              "appId": null
            }
          ],
          "boothResourceName": "1-启动页.zip",
          "boothName": "启动页",
          "autoOff": 1,
          "autoOffTime": 1500,
          "roll": null,
          "rollInterval": null,
          "rollDirection": null,
          "boothType": 0,
          "click": 0,
          "chainedAddressList": null,
          "width": null,
          "high": null,
          "resourceType": 0,
          "userLevel": "2",
          "effectTime": "2022-04-01 00:00:00",
          "updateUserId": "21",
          "createUserId": "21",
          "submitUserName": null,
          "submitUserId": null,
          "createTime": "2022-04-14 12:51:36",
          "updateTime": "2022-04-14 12:51:36",
          "richTextBase64": null
        },
        "firstScreen": {
            "id": "1516255595794141184",
            "groupName": "首屏轮播",
            "moduleType": 11,
            "auditStatus": 4,
            "processInstanceId": null,
            "moduleMsg": "{\"boothId\":1514546524745502720,\"boothName\":\"首屏轮播\",\"boothResource\":\"[{\\\"chainedAddress\\\":\\\"123\\\",\\\"clickType\\\":4,\\\"type\\\":0,\\\"url\\\":\\\"http://8.142.109.118:9088/booth/302168e1-5753-48c5-af4a-220263397db8.jpg\\\"},{\\\"chainedAddress\\\":\\\"123\\\",\\\"clickType\\\":4,\\\"type\\\":0,\\\"url\\\":\\\"http://8.142.109.118:9088/booth/49f5c190-9514-473d-8d10-7e6dd3e55384.jpg\\\"},{\\\"chainedAddress\\\":\\\"123\\\",\\\"clickType\\\":4,\\\"type\\\":0,\\\"url\\\":\\\"http://8.142.109.118:9088/booth/7f0ffc87-7eff-46a3-bbbd-81f712cd0ac2.jpg\\\"},{\\\"chainedAddress\\\":\\\"123\\\",\\\"clickType\\\":4,\\\"type\\\":0,\\\"url\\\":\\\"http://8.142.109.118:9088/booth/3163d496-0379-4ef3-92ce-c542bae704c4.jpg\\\"}]\",\"boothResourceName\":\"1-小.zip\",\"boothType\":1,\"click\":0,\"createTime\":1649931005000,\"high\":100,\"isDel\":0,\"resourceType\":0,\"updateTime\":1649931005000,\"width\":84}",
            "boothId": "1514546524745502720",
            "boothResource": [],
            "boothResourceName": "1-小.zip",
            "boothName": "首屏轮播",
            "autoOff": null,
            "autoOffTime": null,
            "roll": null,
            "rollInterval": null,
            "rollDirection": null,
            "boothType": 1,
            "click": 0,
            "chainedAddressList": null,
            "width": 84,
            "high": 100,
            "resourceType": 0,
            "userLevel": "2",
            "richText": null,
            "effectTime": "2022-04-01 00:00:00",
            "updateUserId": "21",
            "createUserId": "21",
            "submitUserName": null,
            "submitUserId": null,
            "createTime": "2022-04-19 11:21:19",
            "updateTime": "2022-04-19 11:21:19",
            "richTextBase64": null
        },
        "topic": {
          "cssUrl": "http://8.142.109.118:9088/topic/8c9449c2-524b-4256-8373-00dc5e700ed6.css",
          "topicRnJsonVO": {}
        }
      },
      tabbarList: [
        {
          name: '首页',
          //手机银行蓝色主题图标和组件
          comp: 'Home',
          value: '1',
          islogin: false
        },
        {
          name: '理财',
          //手机银行蓝色主题图标
          value: '2',
          comp: 'Financial',
          islogin: false
        },
        {
          name: '活动',
          //手机银行蓝色主题图标
          value: '4',
          comp: '',
          islogin: true
        },
        {
          name: '我的',
          //手机银行蓝色主题图标
          value: '3',
          comp: 'Mine',
          islogin: true
        }
      ]
    }
  },
  created () {
    CommonUtil.getLoginType()
      .then(res => {
        this.loginType = res
        console.log('首页获取登录类型参数res------' + JSON.stringify(res))
        this.getLoginState(res)
      })
      .catch(e => {
        this.loginType = e
        console.log('首页获取登录类型参数e-------' + JSON.stringify(e))
        this.getLoginState(e)
      })
      
  },
  mounted () {
    // 添加resume监听事件
    this.$goose.on('resume', this.resumeHomePage)
  },
  methods: {
    jumpToTeller () {
      CommonUtil.isUserLogin()
        .then(() => {
          CommonUtil.getUserInfo()
            .then(res => {
              console.log('缓存中获取到的用户信息', typeof res)
              let params = {
                param: res.phone
              }
              this.$goose.tools.getAPPDataCache({
                keys: [ 'UserNoByMobilePhone', 'userInfo' ]
              }, succ => {
                if (succ.data.UserNoByMobilePhone) {
                  this.coreUserNo = succ.data.UserNoByMobilePhone.coreUserNo
                  this.userNo = succ.data.UserNoByMobilePhone.userNo
                  getEncryptData(params, res => {
                    this.encryData = res.encryData
                    this.sign = res.sign
                    this.encryKey = res.encryKey
                    let url = url = `https://adev.agree.com.cn/210/11/activitygame_uat/#/Common?TransId=kbxyhl&ChannelId=2002&ActivitySeq=${this.userNo}&CloudTenantId=yrrcbimp&SceneNo=6006&Sign=${this.sign}&EncryKey=${this.encryKey}&EncryData=${this.encryData}`
                    let options = {
                      url: url,
                      param: {
                        isShowTitleBar: true
                      }
                    }
    
                    this.$goose.context.pushWindow(options)
                  }, err => {
                    console.log(err)
                  })
                }

              })
            })
        })
        .catch(() => {
          this.isLogin = false
          console.log('首页判断是否登陆-------' + this.isLogin)
        })
    },
    getLoginState (typeParam) {
      let target = {
        param: {
          loginType: typeParam,
          //仅判断是否登陆，但不跳转登录
          canJumpLogin: false
        },
        closeCurrentApp: false
      }

      CommonUtil.isUserLogin(target)
        .then(() => {
          this.isLogin = true
          console.log('首页判断是否登陆-------' + this.isLogin)
          switch (this.currentComp) {
            case 'Mine':
              this.$refs.component.resumeFn()
              break

            case 'Financial':
              this.$refs.component.isLogin()
              break

            default:
              break
          }
        })
        .catch(() => {
          this.isLogin = false
          console.log('首页判断是否登陆-------' + this.isLogin)
        })
    },
    toRootPage () {
      this.isActive = '1'
      //新主题
      this.currentComp = 'Home'

      /*
       *默认主题
       * this.currentComp = 'HomePage'
       */

      this.num = '1'
    },
    getEyeFun (msg) {
      this.showeye = msg
    },
    getLoginStateFn (msg) {
      this.isLogin = msg
    },
    handleTab (item) {
      console.log(item)
      if ( item.value == 4) {
        this.jumpToTeller()
      } else {
        this.isActive = item.value
        this.currentComp = item.comp
        this.num = item.value
      }

    },

    /**
     * @description 监听页面进入resume
     * @author 王哲
     */
    resumeHomePage () {
      console.log('首页进入监听')
      CommonUtil.getLoginType()
        .then(res => {
          this.loginType = res
          console.log('首页获取登录类型参数res------' + JSON.stringify(res))
          this.getLoginState(res)
        })
        .catch(e => {
          this.loginType = e
          console.log('首页获取登录类型参数e-------' + JSON.stringify(e))
          this.getLoginState(e)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.tabPage {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.index_content_footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .cloud_teller {
    width: 99px;
    height: 42px;
    margin-left: -7vw;
    position: relative;
    .img_cloud_teller {
      width: 100px;
      height: 100px;
      position: absolute;
      top: -65px;
      left: 10px;
    }
  }
  .godetail_img {
    display: flex;
    position: absolute;
    left: 20px;
    bottom: 5px;
    justify-content: space-between;
    align-items: center;
    .go_img {
      width: 8px;
      height: 8px;
      margin-right: 3px;
    }
    p {
      font-size: @label-text;
      color: @white;
      letter-spacing: 0.12px;
      text-align: center;
      line-height: 10px;
    }
  }

  .page_index {
    height: 80px;
    width: 20%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .blue {
      color: @white;
      font-weight: bold
    }
    .gray {
      color: @white;
    }
    .textcent {
      width: 100%;
      height: 30px;
      text-align: center;
      .textcentIcon {
        background-repeat: no-repeat;
        width: 40px;
        height: 40px;
        display: inline-block;
        background-size: cover;
      }
    }
    img {
      width: 20px;
      height: 20px;
    }
    p {
      font-size: @label-text;
      color: @green-dark-little;
      letter-spacing: 0.12px;
      text-align: center;
    }
  }
}
.text {
  display: block;
}
.indexIcon {
  background-image: url(~@/assets/images/index/indexIcon.png);
}
.indexIconActive {
  background-image: url(~@/assets/images/index/indexIconActive.png);
  color: #fff;
}
.financialIcon {
  background-image: url(~@/assets/images/index/financialIcon.png);
}
.financialIconActive {
  background-image: url(~@/assets/images/index/financialIconActive.png);
  color: #fff;
}
.activityIcon {
  background-image: url(~@/assets/images/index/activityIcon.png);
}
.activityIconActive {
  background-image: url(~@/assets/images/index/activityIconActive.png);
  color: #fff;
}
.mineIcon {
  background-image: url(~@/assets/images/index/mineIcon.png);
}
.mineIconActive {
  background-image: url(~@/assets/images/index/mineIconActive.png);
  color: #fff;
}
.tabbarBackground {
  background-image: url(~@/assets/images/index/tabbarBackground.png);
  background-size: 100% 100%;
}

.homePageBackground {
	background-image: url(~@/assets/images/index/indexBackground.png) !important; 
	background-repeat: no-repeat;
	background-size: 100%;
}

.minePageBackground {
  background-image: url(~@/assets/images/index/mineBackground.png) !important;
  background-repeat: no-repeat;
  background-size: 100%;
}
// .majorColor {
//   color: #e4r3f4 !important 
// }
.deputyColor {
  color: #eeeeee !important 
}
.accountBackground {
  background-image: url(~@/assets/images/index/accountBackground.png) !important;
  background-repeat: no-repeat;
  background-size: 100%;
}
.tabbarBackground {
  background-image: url(~@/assets/images/index/tabbarBackground.png) !important;
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: transparent !important;
  box-shadow: none !important;
}
.loginBackground {
  background-image: url(~@/assets/images/index/loginBackground.png) !important;
  background-repeat: no-repeat;
  background-size: 100%;
}
.indexIcon {
  background-image: url(~@/assets/images/index/indexIcon.png) !important;
  background-repeat: no-repeat;
  background-size: 40px 40px;
  margin-top: -10px !important;
  margin-left: 0 !important;
  transform: scale(1.2, 1.2);
}
.indexIconActive {
  background-image: url(~@/assets/images/index/indexIconActive.png) !important;
  background-repeat: no-repeat;
  background-size: 40px 40px;
  margin-top: -10px !important;
  margin-left: 0 !important;
}
.financialIcon {
  background-image: url(~@/assets/images/index/financialIcon.png) !important;
  background-repeat: no-repeat;
  background-size: 40px 40px;
  margin-top: -10px !important;
  margin-left: 0 !important;
  transform: scale(1.2, 1.2);
}
.financialIconActive {
  background-image: url(~@/assets/images/index/financialIconActive.png) !important;
  background-repeat: no-repeat;
  background-size: 40px 40px;
  margin-top: -10px !important;
  margin-left: 0 !important;
}
.activityIcon {
  background-image: url(~@/assets/images/index/activityIcon.png) !important;
  background-repeat: no-repeat;
  background-size: 40px 40px;
  margin-top: -10px !important;
  margin-left: 0 !important;
  transform: scale(1.2, 1.2);
}
.activityIconActive {
  background-image: url(~@/assets/images/index/activityIconActive.png) !important;
  background-repeat: no-repeat;
  background-size: 40px 40px;
  margin-top: -10px !important;
  margin-left: 0 !important;
}
.mineIcon {
  background-image: url(~@/assets/images/index/mineIcon.png) !important;
  background-repeat: no-repeat;
  background-size: 40px 40px;
  margin-top: -10px !important;
  margin-left: 0 !important;
  transform: scale(1.2, 1.2);
}
.mineIconActive {
  background-image: url(~@/assets/images/index/mineIconActive.png) !important;
  background-repeat: no-repeat;
  background-size: 40px 40px;
  margin-top: -10px !important;
  margin-left: 0 !important;
}
.textChange {
  margin-top: 0 !important;
  font-size: 13px;
  color: #f9f9f9;
}

.cyhd {
  position: absolute;
  left: 25px;
  color: #fff;
}
</style>
