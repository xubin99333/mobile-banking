/**
 * 环境变量声明文件
 * @author 孟庆云
 */
module.exports = {
  // 当前运行环境：dev/sit/uat/ia/prod
  runtime: 'uat',
  // 不需要vconsole的运行环境
  noConsoleRuntime: [ 'uat', 'prod' ],
  // 运行环境配置，主要配置网关、APP和Workspace的信息、公共资源包信息等
  runtimeConfig: {
    sit: {
      // 网关地址
      gatewayAddress: 'https://api.goose-dev.top:53105',
      // 应用ID
      appId: 'GSMA40D2C346',
      // Workspace ID
      workspaceId: 'SIT1',
      // 公共资源包地址
      publicResource: 'https://api.goose-dev.top:50137/agree.goosedev/',
      // 注入sdk类型  可选项： rn / mPaas / Harmony
      sdkType: 'Harmony'
    },
    dev: {
      gatewayAddress: 'https://api.goose-dev.top:53105',
      appId: 'GSMA40D2C346',
      workspaceId: 'DEV1',
      publicResource: 'https://api.goose-dev.top:50137/agree.goosedev/',
      sdkType: 'rn'
    },
    uat: {
      gatewayAddress: 'http://192.9.200.95:20000',
      appId: 'GSMA40D2C346',
      workspaceId: 'UAT1',
      publicResource: 'https://123.103.88.18:50137/agree.goosedev',
      sdkType: 'rn'
    }
  }
}
