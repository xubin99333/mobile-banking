<template>
  
</template>
<script>

export default {
  props: {
    closePolicy: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      boxShow: true

    }
  },
  methods: {
    jumpToMine () {
      this.boxShow = false
    }
  }
}

</script>

<style lang="less" scoped>
.box{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    // border: yellowgreen 1px solid;
}
.policy{
    z-index: 1000;
    top: 0;
    left: 0;
    position: absolute;
    padding: 10px 10px;
    width: 100%;
    // border: 1px solid red;
    background-color: white;
    font-size:18px;
    .fontBold{
        text-align: center;
        font-weight: 600;
    }
   ul{
      margin-left: 10px;
      line-height: 30px;
     width:100%px;
     margin: 0 auto;
    //  border: turquoise 1px solid;
   }
}
.know{
    z-index:2000;
    position: fixed;
    left: 0px;
    bottom: 0px;
    height: 40px;
    width: 100%;
    border-top:rgb(182, 182, 182) 1px solid;
    background: white;
    text-align: center;
    line-height: 40px;
    color: rgb(224, 1, 1);
    font-size:14px;
    font-weight: bold;
}
</style>
