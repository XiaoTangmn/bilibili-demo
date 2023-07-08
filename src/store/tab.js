


export default {
    namespaced:true,
    state: { // 存放数据 和data类似
        navIndex:1,
        isShowCard:false,
    },
    mutations: { // 用来修改state和getters里面的数据
    
        ChangeisShowCard(state,val){
            console.log(val);
            state.isShowCard=val;
            
        },
        ChangeNavIndex(state,val){
            console.log(val);
            state.navIndex=val;
        }
    },
    getters: { // 相当于计算属性
    },
    actions: { // vuex中用于发起异步请求
    },
  
 
    
    
};