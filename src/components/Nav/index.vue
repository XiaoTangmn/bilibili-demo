<template>
  <div
    class="nav-container"
    :style="{ background: activeColor, $warnColor: fontC }"
  >
    <!-- 导航左边 -->
    <div class="nav-box">
      <img :src="navList[0].icon" class="nav-left-img" alt="" />
      <ul class="nav-left">
        <li v-for="(nav, i) in navList" :key="nav.title">
          <a
            :href="nav.url"
            @mouseover="showCard(nav,i)"
            @mouseout="noShowCard(nav,i)"
            >{{ nav.title }}</a
          >
        </li>
      </ul>
      <span><i class="el-icon-download"></i>下载客户端</span>
    </div>
    <!-- 导航右边 -->

    <div class="nav-box-r">
      <div class="nav-search">
        <input type="text" placeholder="消失的他" />
        <img src="src/assets/img/search.png" alt="" />
      </div>
      <!-- 登录按钮 -->
      <button class="nav-btn">登录</button>
      <ul class="nav-right">
        <li v-for="nav in navList2" :key="nav.title">
          <i :class="nav.icon"></i>
          <a :href="nav.url">{{ nav.title }}</a>
        </li>
      </ul>

      <!-- 投稿按钮 #fb7299-->
      <button class="nav-btn2">投稿按钮</button>
    </div>
    <!-- 插超部分 -->
    <!-- <ShowCardVue :content="contentCard"/> -->

    <!-- <h1>This is an Children page</h1> -->
    <ShowCardVue v-show="isNavItem">
      <div class="nav">

        <div class="mh">
          <div class="mh-left">
            <a href="https://manga.bilibili.com/detail/mc25717?refer_from=bili_main_nav" target="_blank" v-for="mh in mhList" :key="mh.name">
              <img :src="mh.imgUrl" alt="">
              <span>{{mh.name}}</span>
            </a>
          </div>
        </div>
      </div>
    </ShowCardVue>
  </div>
</template>

<script>
import { getNav } from "@/api";
import {debounce,text} from "@/Utils/debounce.js"
// import
// mock是export default不要用{}
import Mock from "mockjs";
import { mapState, mapMutations } from "vuex";

import ShowCardVue from "../ShowCard/index.vue";

export default {
  data() {
    return {
  navItemStyle2: {
        img:" width: 70px;"+
      "min-width: 40px;z-index:1;"+
      "border-radius: 50%;"+

      "height: 70px;",
        navItem:
          "position:absolute;" +
          "top:30px;" +
          "left:20px;" +
          "display:flex;" +
          " border-radius:10px;" +
          " background:rgba(255, 255, 255, 0.9);" +
          " width:570px;" +
          "border:1px solid red;" +
          "height:300px;" +
          "margin:40px;",
        leftImg: "border-radius: 10px;" + " margin:10px 20px;" + "width:240px;z-index:1;",
        navItemRight: "width: 50%;",
        navLi:
          " float: left;" +
          " margin-top: 10px;" +
          "margin-left: 5px;" +
          "width: 80px;" +
          "text-align: center;" +
          " color: #000;" +
          "height: 100px;" +
          " flex-wrap: wrap;" +
          "flex-direction: column;" +
          "display: flex;position: relative;",
          navLeftDiv:"width:70px;height:70px;z-index:12;border-radius:50%;margin-bottom:-70px;"
      },

      navList: [],
      navList2: [],
      isNavItem: false,
      navItem: [],
      mhList:[],
      // 放漫画右边的数据
      mhList2:[],
    };
  },
  props: {
    fontC: {
      type: String,
      default: "#fff",
    },
    activeColor: {
      type: String,
      default: "transparent",
    },
  },
  components: {
    ShowCardVue,
  },
  computed: {
    ...mapState("tab", ["isShowCard"]),
  },
  methods: {
    ...mapMutations("tab", ["ChangeisShowCard"]),
    showCard(item, i){
      console.log(i,"df");  
    if (i == 2) {
        console.log(i);
        // 悬浮是navItem出现
        this.isNavItem = true;
        // console.log(document.querySelector(".aa"));
        // this.sw="position:absolute;top:30px;left:20px;border-radius:20px;background:rgba(255,255,255,.9);width:400px;border:1px solid red;height:200px;margin:40px;"
        document.querySelector(".nav").innerHTML = `
        <div style="${this.navItemStyle2.navItem}">
        <div style="${this.navItemStyle2.navItemRight}">
          <h2 style="font-size: 30px; font-weight: 100">热门直播：</h2>
          <ul style="border-right: 1px solid #efefef; width:270px;height:240px;">
            <li style="${this.navItemStyle2.navLi}">
            <div style="${this.navItemStyle2.navLeftDiv}" id="navLeftDiv"></div>
              <img v-lazy src="http://localhost:521/nav/nav1.webp" style="${this.navItemStyle2.img}"/>
              <span id="navText">喵熊°</span>
            </li>
             <li style="${this.navItemStyle2.navLi}">
            <div style="${this.navItemStyle2.navLeftDiv}" id="navLeftDiv"></div>
              <img v-lazy src="http://localhost:521/nav/nav1.webp" style="${this.navItemStyle2.img}"/>
              <span id="navText">喵熊°</span>
            </li> <li style="${this.navItemStyle2.navLi}">
            <div style="${this.navItemStyle2.navLeftDiv}" id="navLeftDiv"></div>
              <img v-lazy src="http://localhost:521/nav/nav1.webp" style="${this.navItemStyle2.img}"/>
              <span id="navText">喵熊°</span>
            </li> <li style="${this.navItemStyle2.navLi}">
            <div style="${this.navItemStyle2.navLeftDiv}" id="navLeftDiv"></div>
              <img v-lazy src="http://localhost:521/nav/nav1.webp" style="${this.navItemStyle2.img}"/>
              <span id="navText">喵熊°</span>
            </li> <li style="${this.navItemStyle2.navLi}">
            <div style="${this.navItemStyle2.navLeftDiv}" id="navLeftDiv"></div>
              <img v-lazy src="http://localhost:521/nav/nav1.webp" style="${this.navItemStyle2.img}"/>
              <span id="navText">喵熊°</span>
            </li> <li style="${this.navItemStyle2.navLi}">
            <div style="${this.navItemStyle2.navLeftDiv}" id="navLeftDiv"></div>
              <img v-lazy src="http://localhost:521/nav/nav1.webp" style="${this.navItemStyle2.img}"/>
              <span id="navText">喵熊°</span>
            </li>
    
          </ul>
        </div>
        <div class="navItem-left">
          <h2 style="font-size: 30px; font-weight: 100">热门活动：</h2>
          <img v-lazy src="http://localhost:521/nav/nav2.webp" style="margin:10px 10px;border-radius:5px;width:250px;" />
        </div>
      </div>
        `;
        let navDiv = document.querySelectorAll("#navLeftDiv")
        for (let i = 0; i < navDiv.length; i++) {
          navDiv[i].style.background=""
          navDiv[i].addEventListener('mouseover',()=>{
            navDiv[i].style.background="rgba(0,0,0,.4)"
          })
           navDiv[i].addEventListener('mouseout',()=>{
            navDiv[i].style.background=""
          })
          
        }
                let navText = document.querySelectorAll("#navText")
        for (let i = 0; i < navText.length; i++) {
          navText[i].style.color="#000";
          navText[i].addEventListener('mouseover',()=>{
            navText[i].style.color="#00aeec";
          })
           navText[i].addEventListener('mouseout',()=>{
            navText[i].style.color="#000";
          })
          
        }
        }
   
    
    if(i==5){
      // console.log("sc");
      this.isNavItem=true;

    }
    },
     





    noShowCard(item, i) {
      // console.log(90);
      // if(i==2){
        // this.isNavItem=false;
      // }
      // document.querySelector(".aa").innerHTML=""

      // }
    },
  },
  mounted() {
    getNav().then((res) => {
      const { data: res1 } = res.data;
      this.navList = res1.navData;
      this.navList2 = res1.navData2;
      this.navItem = res1.navItem;
      this.mhList=res1.navMhLeft;
      this.mhList2=res1.navMhbg;

      console.log(res1);
    });
  },
};
</script>

<style lang="scss" scoped>
.mh{
  width:500px;
  height: 246px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.9);
    position: absolute;
  top: 60px;

  left: 120px;
  display: flex;
   border: 1px solid red;
   .mh-left{
    width:60%;
    margin: 13px;
    height: 230px;
    display: flex;
    flex-wrap: wrap;;
    a{
      width:50%;
      display: flex;
      border-radius: 10px;
      flex-direction: column;
       img{
      width:100%;
      height:50%;
    }
    }
   
   }
}
// $priceColor: #cf4444;
// .navItem {
  
//   position: absolute;
//   top: 30px;
//   left: 20px;
//   display: flex;
//   border-radius: 10px;
//   background: rgba(255, 255, 255, 0.9);
//   width: 570px;
//   border: 1px solid red;
//   height: 300px;
//   margin: 40px;

//   .navItem-left {
//     img {
//       border-radius: 10px;
//       margin: 10px 20px;
//       width: 240px;
//     }
//   }
//   .navItem-right {
//     width: 50%;

//     border-right: 1px solid #ccc;

//     li {
//       float: left;
//       margin-top: 10px;
//       margin-left: 5px;
//       width: 80px;
//       text-align: center;
//       color: #000;
//       height: 100px;
//       flex-wrap: wrap;
//       flex-direction: column;

//       display: flex;
//     }

//     img {
//       width: 70px;
//       min-width: 40px;
//       border-radius: 50%;

//       height: 70px;
//     }
//     li:hover {
//       color: #00aeec;
//     }
//   }
// }

.nav-container {
  $warnColor: #fff;
  width: 100%;

  display: flex;
  height: 55px;
  //  background-color: $warnColor ;

  .nav-box {
    display: flex;
    width: 35%;
    color: $warnColor;
    height: 55px;
    // border: 1px solid $warnColor;
    span {
      i {
        font-size: 17px;
      }
      display: inline-block;
      margin-left: 10px;
      margin-top: 18px;
      font-size: 14px;
      // color: #fff;
    }
    .nav-left-img {
      width: 18px;
      margin-top: 18px;
      margin-left: 10px;
      height: 18px;
    }
    .nav-left {
      display: flex;
      margin-top: 18px;
      list-style-type: none;

      li a {
        color: $warnColor;
        display: inline-block;
        margin-left: 10px;

        font-size: 14px;
        // color: #fff;
      }
      li a:hover {
        display: block;

        animation: navText 0.2s linear 1;
      }
    }
  }
  .nav-box-r {
    width: 63%;
    height: 55px;
    display: flex;
    .nav-search {
      margin-top: 10px;
      width: 389px;
      height: 38px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.8);
      display: flex;
      input {
        background-color: rgba(255, 255, 255, 0.1);
        width: 350px;
        margin-left: 10px;
      }
      img {
        margin-top: 8px;
        margin-right: 5px;
        width: 22px;
        height: 22px;
        background-color: transparent;
      }
    }
    .nav-btn {
      margin-left: 12px;
      margin-top: 8px;
      // 主题色
      background-color: #00aeec;
      border: none;
      // color:#fff;
      border-radius: 50px;
      width: 41px;
      height: 41px;
    }
    .nav-right {
      display: flex;
      margin-top: 6px;
      list-style-type: none;
      li {
        color: $warnColor;
        width: 60px;
        height: 50px;
        display: flex;
        justify-content: center;
        font-size: 9px;
        flex-direction: column;
      }
      li i {
        // text-align: center;
        margin-left: 35px;
        margin-top: -10px;
        // color: #fff;
        font-size: 24px;
      }

      li a {
        color: $warnColor;
        position: absolute;
        top: 35px;

        text-align: center;
        display: inline-block;
        margin-left: 30px;

        // color: #fff;
      }
      i:hover {
        // color:red;
        animation: navText 0.2s linear 1;
      }
    }
    .nav-btn2 {
      margin-left: 30px;
      margin-top: 8px;
      // 主题色
      background-color: #fb7299;
      border: none;
      // color:#fff;
      border-radius: 10px;
      width: 85px;
      height: 38px;
    }
  }
}
@keyframes navText {
  0% {
    margin-top: 0px;
  }
  50% {
    margin-top: -3px;
  }
  100% {
    margin-top: 0px;
  }
}
</style>