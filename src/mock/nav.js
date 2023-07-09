import Mock from 'mockjs'

// 图表数据
let List = []
export default {
  getNavData: () => {
    //Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位
    // for (let i = 0; i < 7; i++) {
    //   List.push(
    //     Mock.mock({
    //       苹果: Mock.Random.float(100, 8000, 0, 0),
    //       vivo: Mock.Random.float(100, 8000, 0, 0),
    //       oppo: Mock.Random.float(100, 8000, 0, 0),
    //       魅族: Mock.Random.float(100, 8000, 0, 0),
    //       三星: Mock.Random.float(100, 8000, 0, 0),
    //       小米: Mock.Random.float(100, 8000, 0, 0)
    //     })
    //   )
    // }
    return {
      code: 20000,
      data: {
        // 饼图
        navData: [
         {

          icon:"src/assets/img/bilibili-fill.png",
          title:"首页",
          url:"https://www.bilibili.com/?spm_id_from=333.1007.0.0"
         },
         {

          icon:"",
          title:"番剧",
          url:"https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0"
         },
         {

          icon:"",
          title:"直播",
          url:"https://live.bilibili.com/?spm_id_from=333.1007.0.0"
         },
         {

          icon:"",
          title:"游戏中心",
          url:"https://game.bilibili.com/platform/?spm_id_from=666.4.0.0"
         },
         {

          icon:"",
          title:"会员购",
          url:"https://show.bilibili.com/platform/home.html?msource=pc_web&spm_id_from=333.1007.0.0"
         },
         {

          icon:"",
          title:"漫画",
          url:"https://manga.bilibili.com/?from=bill_top_mnav&spm_id_from=333.1007.0.0"
         },
         {

          icon:"",
          title:"赛事",
        url:"https://www.bilibili.com/match/home/?spm_id_from=333.1007.0.0"
         },
         {

          icon:"",
          title:"新时代",
          url:"https://www.bilibili.com/blackboard/activity-XSDYYRJH-PC.html?spm_id_from=333.1007.0.0"
         },

        ],
        // nav2
        navData2:[
          {

            icon:"el-icon-news",
            title:"大会员",
            url:"https://account.bilibili.com/big?spm_id_from=333.1007.0.0"
           },
           {

            icon:"el-icon-message",
            title:"消息",
            url:"https://account.bilibili.com/big?spm_id_from=333.1007.0.0"
           },
           {

            icon:"el-icon-video-camera-solid",
            title:"动态",
            url:"https://account.bilibili.com/big?spm_id_from=333.1007.0.0"
           },
           {

            icon:"el-icon-star-off",
            title:"收藏",
            url:"https://account.bilibili.com/big?spm_id_from=333.1007.0.0"
           },
           {

            icon:"el-icon-watch",
            title:"历史",
            url:"https://account.bilibili.com/big?spm_id_from=333.1007.0.0"
           },
           {

            icon:"el-icon-s-opportunity",
            title:"创作中心",
            url:"https://account.bilibili.com/big?spm_id_from=333.1007.0.0"
           },
        ],
      // navItem的图片地址
      navItem:[
        {
          imgUrl:"http://localhost:521/nav/nav1.webp",
          text:"喵熊°"
        },
        {
          imgUrl:"http://localhost:521/nav/nav1.webp",

          text:"綾音Aya"
        },
        {
          imgUrl:"http://localhost:521/nav/nav1.webp",

          text:"Eghver巧"
        },
        {
          imgUrl:"http://localhost:521/nav/nav1.webp",

          text:"桃几OvO"
        },
        {
          imgUrl:"http://localhost:521/nav/nav1.webp",

          text:"被窝小腰精"
        },
        {
          imgUrl:"http://localhost:521/nav/nav1.webp",

          text:"羽天Shine"
        }
       

      ],
      // navmnData
      navMhbg:[
        {
          idx:1,
          name:"我家老婆来自一千年前",
          url:"http://localhost:521/nav/mhbg0.webp"
        },
        {
          idx:2,
          name:"【我推的孩子】",
          url:"http://localhost:521/nav/mhbg1.webp"
        },
        {
          idx:3,
          name:"碧蓝之海",
          url:"http://localhost:521/nav/mhbg2.webp"
        },
        {
          idx:4,
          name:"我的假女友正全力防御她们的进攻",
          url:"http://localhost:521/nav/mhbg3.webp"
        },
        {
          idx:5,
          name:"间谍过家家",
          url:"http://localhost:521/nav/mhbg4.webp"
        },
        {
          idx:6,
          name:"罗小黑战记·蓝溪镇",
          url:"http://localhost:521/nav/mhbg5.webp"
        },
        

      ]
      
      }
    }
  }} 