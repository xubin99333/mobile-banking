# gooseSDK 接口文档

## 0. 使用

### (1) 封装目的

> 1.封装并处理react-native和h5前端通讯联调的问题
> 2.从前端调用原生层API并能直接使用原生的功能

### (2) 引用

```
import 'goose-sdk'//config.js已写好,不需要再引入

```
> 引用后通过this.$goose.callSDK的方式调起api功能
> api功能在goosePro工程中,根目录/sdk/gooseSDK/index 中开发,前端this.$goose对应的方法可以调起
      

### (3) 使用范例

```
let options = {
    title: '修改头像',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '选择照片',
    cameraType: 'back',
    mediaType: 'photo',
    videoQuality: 'high',
    durationLimit: 10,
    maxWidth: 300,
    maxHeight: 300,
    quality: 0.8,
    angle: 0,
    allowsEditing: false,
    noData: false,
    storageOptions: {
      skipBackup: true
    }
  }

  // 调用拍照
  this.$goose.tools.callSDK(
    'getImagePicker',
    options,
    function(data) {
      _this.demoImg = JSON.parse(data).uri
      _this.showImg = true
    },
    function(res) {
      alert('调用失败')
    }
  )
```

## 4. 其他

> 暂无
