<template>
  <div class="root">
    <div class="speedbox">
      <div class="speedbox__score" id="speedbox-score"></div>
      <div class="speedbox__groove"></div>
      <div class="speedbox__base">Неверный ввод {{ count }} раз</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Speedometer",
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  watch: {
    count() {
      if(this.count < 100){
        let updatedSpeed = Math.round(this.count * 180 / 100) - 45;
        document.querySelector('#speedbox-score').style.transform = 'rotate(' + updatedSpeed + 'deg)'
      }
    }
  },
  mounted() {
    let updatedSpeed = Math.round(0 * 180 / 100) - 45;
    document.querySelector('#speedbox-score').style.transform = 'rotate(' + updatedSpeed + 'deg)'
  }
}
</script>

<style scoped lang="scss">
.root{
  position: absolute;
  bottom: -80px;
  left: -30px;
}
.speedbox {
  margin: 5em;
  height: 200px;
  width: 200px;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  position: relative;
&__groove {
   height: 100px;
   width: 200px;
   background: transparent;
   border-top-left-radius: 100px;
   border-top-right-radius: 100px;
   border: 20px solid #eee;
   border-bottom: 0;
   box-sizing: border-box;
   position: absolute;
   left: 0;
   top: 0;
 }
&__score {
   position: absolute;
   left: 0;
   top: 0;
   transform: rotate(-45deg);
   -webkit-transform: rotate(-0deg);
   height: 200px;
   width: 200px;
   background: transparent;
   border-radius: 50%;
   border: 20px solid #587777;
   border-color: transparent transparent #587777 #587777;
   box-sizing: border-box;
   z-index: 1;
   transition: transform .3s ease;
 }
&__base {
   width: 240px;
   height: 100px;
   background: #c5dbd8;
   position: relative;
   top: 100px;
   z-index: 20;
  text-align: center;
  padding-top: 5px;
  font-size: 20px;
  color: #8f8f8f;
&:before {
   content: '';
   width: 240px;
   position: absolute;
   top: 0;
 }
}
&__odo {
   text-align: center;
   position: absolute;
   color: #5c6f7b;
   bottom: 100px;
   left: 50%;
   transform: translateX(-50%);
}
}
</style>