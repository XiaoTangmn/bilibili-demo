
import {mapMutations,mapActions} from "vuex"
function debounce(cb,delay=3000){
    let timer = null;
    return function(){
        clearTimeout(timer);
        timer=setTimeout(() => {
            // console.log(cb);
            cb()
        
            cb.apply(this)
        }, delay);
    }
}
function text(item,i){
    if (i == 2) {
        // console.log(i);
        // 悬浮是navItem出现
        this.isNavItem = true;
        // console.log(document.querySelector(".aa"));
        // this.sw="position:absolute;top:30px;left:20px;border-radius:20px;background:rgba(255,255,255,.9);width:400px;border:1px solid red;height:200px;margin:40px;"
        document.querySelector(".nav").innerHTML = `
        <div style="${this.navItemStyle2.navItem}">
        <div style="${this.navItemStyle2.navItemRight}">
          <h2 style="font-size: 30px; font-weight: 100">热门直播：</h2>
          <ul>
            <li style="${this.navItemStyle2.navLi}">
              <img v-lazy src="http://localhost:521/nav/nav1.webp" style="${this.navItemStyle2.img}"/>
              <span>喵熊°</span>
            </li>
             <li style="${this.navItemStyle2.navLi}">
              <img v-lazy src="http://localhost:521/nav/nav1.webp" style="${this.navItemStyle2.img}"/>
              <span>喵熊°</span>
            </li>
             <li style="${this.navItemStyle2.navLi}">
              <img v-lazy src="http://localhost:521/nav/nav1.webp" style="${this.navItemStyle2.img}"/>
              <span>喵熊°</span>
            </li>
             <li style="${this.navItemStyle2.navLi}">
              <img v-lazy src="http://localhost:521/nav/nav1.webp" style="${this.navItemStyle2.img}"/>
              <span>喵熊°</span>
            </li>
             <li style="${this.navItemStyle2.navLi}">
              <img v-lazy src="http://localhost:521/nav/nav1.webp" style="${this.navItemStyle2.img}"/>
              <span>喵熊°</span>
            </li>
    
             <li style="${this.navItemStyle2.navLi}">
              <img v-lazy src="http://localhost:521/nav/nav1.webp" style="${this.navItemStyle2.img}"/>
              <span>喵熊°</span>
            </li>
    
          </ul>
        </div>
        <div class="navItem-left">
          <h2 style="font-size: 30px; font-weight: 100">热门活动：</h2>
          <img v-lazy src="http://localhost:521/nav/nav2.webp" />
        </div>
      </div>
        `;}
}


export {debounce,text}