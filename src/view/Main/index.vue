<template>
  <div>
   <div class="headerMain" >
    
  <Nav activeColor="#ccc" fontC="#ff0000"/>

   </div>
  
    <NavLive/>
  </div>
</template>

<script>
import Nav from "@/components/Nav/index.vue"
import NavLive from "@/components/NavLive/index.vue"
import {mapState,mapMutations} from "vuex"
export default{
  data() {
  return {
    
  }
},
components:{
  Nav,
  NavLive
}
}
</script>

<style lang="scss">
.headerMain{
  width: 100%;
  background-color: aqua;
}

</style>