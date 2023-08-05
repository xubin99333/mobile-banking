import { getTopic } from '@/assets/api/rpc-login'

export default {
  name: 'common-mixin',
  beforeCreate () {
    this.$goose.tools.getAPPDataStorage({
      keys: ['userLevel', 'userTopic']
    },
    succ => {
      console.log(succ, 'userLevel获取--')
      if (succ.data.userTopic) {
        this.loadExternalCss(succ.data.userTopic)
      }
    })
    this.$goose.on('resume', (res) => {
      
      this.$goose.tools.getAPPDataStorage({
        keys: [ 'isTopic' ]
      },
      succ => {
        if (succ.data && succ.data.isTopic) {
          this.removeTopic()
        } else {
          this.$goose.tools.getAPPDataCache({
            keys: [ 'userLevel', 'userInfo', 'userTopic' ]
          },
          succ => {
            console.log(succ, 'userLevel获取--++++++')
            if (succ.data.userTopic) {
              this.loadExternalCss(succ.data.userTopic)
            }
          })
        }
        
      })
    })
  },
  methods: {
    removeTopic() {
      var idObject = document.getElementById('topicId');
      console.log("idObject=", idObject)
      if (idObject != null){
        console.log('removeTopic_href=', idObject.href)

        idObject.href = ''

        // idObject.parentNode.removeChild(idObject);

        let option = {
          keys: [ 'isTopic' ]
        }
        this.$goose.tools.removeAPPDataStorage( option )
      }
    },
    loadExternalCss (urlObj) {
      let linkeElement = document.getElementById("topicId") 
      console.log('loadExternalCss_href', linkeElement)

      if (linkeElement && linkeElement.href !== urlObj) {
        linkeElement.href = urlObj
      }
      
      // if(!linkeElement) {
      //   let linkeElementNew = document.createElement('link')
      //   linkeElementNew.rel = 'stylesheet'
      //   linkeElementNew.type = 'text/css'
      //   linkeElementNew.id = 'topicId'
      //   linkeElementNew.href = urlObj

      //   document.head.appendChild(linkeElementNew)
      //   console.log(document.head.appendChild(linkeElementNew), 'css----common-mixin')
      // } else {
      //   linkeElement.href = urlObj
      //   console.log('href4=', linkeElement.href)
      // }
    },
    removeRule (num, index) {
      var sheet = document.styleSheets[num];
      if (typeof sheet.deleteRule != 'undefined') {
          sheet.deleteRule(index);
      }else if(typeof sheet.removeRule != 'undefined'){
          sheet.removeRule(index);
      }
    },
    getTopicFn (userLevel) {
      let params = {
        userLevel: JSON.stringify(userLevel)
      }

      getTopic(params, res => {
        console.log('获取用户主题地址接口调用成功', res)
        this.loadExternalCss(res.resultStr)
      })
    }
  }
}
