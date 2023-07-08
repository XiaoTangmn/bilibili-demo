<template>
  <div>
     
      <slot></slot>
    
  </div>
</template>

<script>
import { computed } from 'vue'
import {mapState,mapMutations} from "vuex"

export default {
props:{
 

},
computed:{
...mapState('tab',['isShowCard']),
},
mounted(){
  console.log(this.isShowCard);
}

}

</script>

<style lang="scss" scoped>
.navItem{
  position:absolute;
  top:30px;
  left: 20px;
background: red;
  width:400px;
  height: 300px;

 margin: 30px;
}
</style>