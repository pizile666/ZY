/*
软件名称:幸运赚点 微信小程序
更新时间：2021-03-09 @肥皂
脚本说明：幸运赚点
脚本为自动完成常规任务
小程序试玩任务，自动开启宝箱
自动获取夺宝券参与1,5,10,20元的夺宝
任务运行时长比较久，跑完差不多要四十多分钟。
小程序二维码地址 https://raw.githubusercontent.com/age174/-/main/03733050-CDF8-4247-B1AE-6AC7C6718CF9.jpeg
微信扫码打开
本脚本以学习为主！
使用方法:
打开幸运赚点小程序点击任务界面，获得数据
TG电报群: https://t.me/hahaha802
boxjs地址 :  
https://raw.githubusercontent.com/age174/-/main/feizao.box.json
幸运赚点
圈X配置如下，其他软件自行测试，定时可以多设置几次，没任务会停止运行的
[task_local]
#幸运赚点
20 12 * * * https://raw.githubusercontent.com/age174/-/main/xyzd.js, tag=幸运赚点, img-url=https://ae01.alicdn.com/kf/U1680ecdfa17544669c71e00400c542e31.jpg, enabled=true
[rewrite_local]
#幸运赚点
https://vip.75787.com/app/index.php url script-request-body https://raw.githubusercontent.com/age174/-/main/xyzd.js
#loon
https://vip.75787.com/app/index.php script-path=https://raw.githubusercontent.com/age174/-/main/xyzd.js, requires-body=true, timeout=10, tag=幸运赚点
#surge
幸运赚点 = type=http-request,pattern=https://vip.75787.com/app/index.php,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/xyzd.js,script-update-interval=0
[MITM]
hostname = vip.75787.com
*/


const $ = new Env('幸运赚点');
let status;
status = (status = ($.getval("xyzdstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const xyzdurlArr = [], xyzdhdArr = [],xyzdbodyArr = [],xyzdcount = ''
let xyzdurl = $.getdata('xyzdurl')
let xyzdhd = $.getdata('xyzdhd')
let xyzdbody = $.getdata('xyzdbody')
let xyzdcg = '',xyzdbxid = '',xyzdtoken = '',xyzdsign = '',xyzdcgid = '',xyzdxcxid = '',xyzddb = ''
let bx = 0   //此处为选择宝箱的碎片id，如果为0，宝箱开启获得的碎片兑换为红包碎片，如果填写1，开启宝箱的碎片兑换为升级分红宝箱的碎片
!(async () => {
  if (typeof $request !== "undefined") {
    await xyzdck()
   
  } else {
    if ($.isNode()) {
  COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
  console.log(
    `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
  );
if (
    process.env.XYZDURL &&
    process.env.XYZDURL.indexOf(COOKIES_SPLIT) > -1
  ) {
    xyzdurl = process.env.XYZDURL.split(COOKIES_SPLIT);
  } else {
    xyzdurl = process.env.XYZDURL.split();
  }
  if (
    process.env.XYZDHD &&
    process.env.XYZDHD.indexOf(COOKIES_SPLIT) > -1
  ) {
    xyzdhd = process.env.XYZDHD.split(COOKIES_SPLIT);
  } else {
    xyzdhd = process.env.XYZDHD.split();
  }
  if (
    process.env.XYZDBODY &&
    process.env.XYZDBODY.indexOf(COOKIES_SPLIT) > -1
  ) {
    xyzdbody = process.env.XYZDBODY.split(COOKIES_SPLIT);
  } else {
    xyzdbody = process.env.XYZDBODY.split();
  }


	
  Object.keys(xyzdurl).forEach((item) => {
        if (xyzdurl[item]) {
          xyzdurlArr.push(xyzdurl[item])
        }
    });
    Object.keys(xyzdhd).forEach((item) => {
        if (xyzdhd[item]) {
          xyzdhdArr.push(xyzdhd[item])
        }
    });
    Object.keys(xyzdbody).forEach((item) => {
        if (xyzdbody[item]) {
          xyzdbodyArr.push(xyzdbody[item])
        }
    });

  	
  } else {
    xyzdurlArr.push($.getdata('xyzdurl'))
    xyzdhdArr.push($.getdata('xyzdhd'))
   xyzdbodyArr.push($.getdata('xyzdbody'))
    let xyzdcount = ($.getval('xyzdcount') || '1');
  for (let i = 2; i <= xyzdcount; i++) {
    xyzdurlArr.push($.getdata(`xyzdurl${i}`))
    xyzdhdArr.push($.getdata(`xyzdhd${i}`))
    xyzdbodyArr.push($.getdata(`xyzdbody${i}`))
  }
  }
    console.log(`------------- 共${xyzdhdArr.length}个账号-------------\n`)
      for (let i = 0; i < xyzdhdArr.length; i++) {
        if (xyzdhdArr[i]) {
          xyzdurl = xyzdurlArr[i];
          xyzdhd = xyzdhdArr[i];
          xyzdbody = xyzdbodyArr[i];
          $.index = i + 1;
          console.log(`\n开始【幸运赚点${$.index}】`)
            await cgrwlb();
            
            
  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//幸运赚点数据获取


function xyzdck() {
if($request.url.indexOf("do=index") > -1 && $request.body.indexOf("treasure.get_task_page") > -1) {
 const xyzdurl = $request.url
  if(xyzdurl)     $.setdata(xyzdurl,`xyzdurl${status}`)
    $.log(xyzdurl)
  const xyzdhd = JSON.stringify($request.headers)
        if(xyzdhd)    $.setdata(xyzdhd,`xyzdhd${status}`)
$.log(xyzdhd)
const xyzdbody = $request.body
        if(xyzdbody)    $.setdata(xyzdbody,`xyzdbody${status}`)
$.log(xyzdbody)
   $.msg($.name,"",'幸运赚点'+`${status}` +'获取数据成功！')
  }
}



//幸运赚点小程序任务列表     
function xcxrwlb(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://vip.75787.com/app/index.php?i=21&c=entry&from=wxapp&a=wxapp&do=index&t=0&v=6.4.2&m=panda_key&sign='+xyzdsign,
        headers : JSON.parse(xyzdhd),
        body : 'controller=redirect.index&token='+xyzdtoken,
       
}      
      $.post(url, async (err, resp, data) => {
        try {
//console.log(data)
if(data.match(/"list":(.*?)}/)[1] === '[]'){
console.log('\n🔮幸运赚点当前没有小程序任务了,前去执行开宝箱任务')
await kqbx();
}
         const result = JSON.parse(data)
        if (result.code == 1) {
          xyzdxcxid = data.match(/"id":"(\w+)",/)[1]
          console.log(`\n幸运赚点[小程序试玩任务列表]回执:成功🌝 ID:`+xyzdxcxid+result.msg)
     await $.wait(1000);
     await xcxsw();
        } else {
       console.log('\n幸运赚点[小程序试玩任务列表]回执:失败🚫'+result.msg) 
       
       
        }} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//幸运赚点小程序试玩     
function xcxsw(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://vip.75787.com/app/index.php?i=21&c=entry&from=wxapp&a=wxapp&do=index&t=0&v=6.4.2&m=panda_key&sign='+xyzdsign,
        headers : JSON.parse(xyzdhd),
        body : 'controller=redirect.redirect_app&token='+xyzdtoken+'&other_app_id='+xyzdxcxid,
       
}      
      $.post(url, async (err, resp, data) => {
        try {
         const result = JSON.parse(data)
        if (result.code == 1) {
          console.log(`\n幸运赚点[小程序试玩]回执:成功🌝\n`+result.msg+'等待60秒')
     await $.wait(60000);
     await xcxtj();
        } else {
       console.log('\n幸运赚点[小程序试玩]回执:失败🚫'+result.msg) 
       
       
        }} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//幸运赚点小程序提交     
function xcxtj(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://vip.75787.com/app/index.php?i=21&c=entry&from=wxapp&a=wxapp&do=index&t=0&v=6.4.2&m=panda_key&sign='+xyzdsign,
        headers : JSON.parse(xyzdhd),
        body : 'controller=redirect.complete&token='+xyzdtoken+'&other_app_id='+xyzdxcxid,
       
}      
      $.post(url, async (err, resp, data) => {
        try {
         const result = JSON.parse(data)
        if (result.code == 1) {
          console.log(`\n幸运赚点[小程序试玩提交]回执:成功🌝\n`+result.msg)
     await $.wait(1000);
     await xcxrwlb();
        } else {
       console.log('\n幸运赚点[小程序试玩提交]回执:失败🚫'+result.msg) 
       
       
        }} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//幸运赚点常规任务列表
function cgrwlb(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      if (typeof xyzdhd === "undefined") {
        $.msg($.name,"",'请先获取幸运赚点数据!😓',)
        $.done()
      }
    xyzdsign = xyzdurl.match(/sign=(\w+)/)[1]
    xyzdtoken = xyzdbody.match(/token=(\w+)/)[1]
let url = {
        url : 'https://vip.75787.com/app/index.php?i=21&c=entry&from=wxapp&a=wxapp&do=index&t=0&v=6.4.2&m=panda_key&sign='+xyzdsign,
        headers : JSON.parse(xyzdhd),
        body : 'controller=treasure.get_task_page&token='+xyzdtoken,
        
}
      $.post(url, async (err, resp, data) => {
        try {

if(data.match(/multi_daily_key":(.*?)}/)[1] === '[]'){
console.log('\n🔮幸运赚点当前没有常规任务了,前去执行小程序任务')
await xcxrwlb();
}

    const result = JSON.parse(data)
        if(result.code == 1){

     
      xyzdcgid = data.match(/"id":"(\w+)",/)[1]
        console.log('\n幸运赚点[获取常规任务列表]回执:成功🌝  \n[任务ID]: '+xyzdcgid+'\n开始领取任务奖励')
     //$.done()
       await $.wait(1000);
       await cgrw();
        
} else {
console.log('幸运赚点[获取常规任务列表]回执:失败🚫 当前账号可能没有任务了')
     await xcxrwlb();
}
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}

//幸运赚点常规任务     
function cgrw(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://vip.75787.com/app/index.php?i=21&c=entry&from=wxapp&a=wxapp&do=index&t=0&v=6.4.2&m=panda_key&sign='+xyzdsign,
        headers : JSON.parse(xyzdhd),
        body : 'controller=treasure.post_multi_daily_key&daily_key_id='+xyzdcgid+'&token='+xyzdtoken,
       
}      
      $.post(url, async (err, resp, data) => {
        try {
         const result = JSON.parse(data)
        if (result.code == 1) {
          console.log(`\n幸运赚点[常规任务]回执:成功🌝\n`+result.msg+'等待30秒继续')
     await $.wait(30000);
     await cgrwlb();
        } else {
       console.log('\n幸运赚点[常规任务]回执:失败🚫'+result.msg) 
       
       
        }} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//幸运赚点开启宝箱     
function kqbx(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://vip.75787.com/app/index.php?i=21&c=entry&from=wxapp&a=wxapp&do=index&t=0&v=6.4.2&m=panda_key&sign='+xyzdsign,
        headers : JSON.parse(xyzdhd),
        body : 'controller=treasure.post_treasure_box&token='+xyzdtoken,
       
}      
      $.post(url, async (err, resp, data) => {
        try {
         const result = JSON.parse(data)
        if (result.code == 1) {
         xyzdbxid = result.data.box_id
          console.log(`\n幸运赚点[宝箱开启]回执:成功🌝\n获得红包碎片类型为`+result.data.goods_name+'数量'+result.data.piece+' 个，等待1秒开始宝箱翻倍')
     await $.wait(1000);
     await bxfb();
        } else {
       console.log('\n幸运赚点[宝箱开启]回执:失败🚫'+result.msg) 
       await dbsy();
       
        }} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//幸运赚点宝箱翻倍     
function bxfb(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://vip.75787.com/app/index.php?i=21&c=entry&from=wxapp&a=wxapp&do=index&t=0&v=6.4.2&m=panda_key&sign='+xyzdsign,
        headers : JSON.parse(xyzdhd),
        body : 'controller=treasure.get_treasure_box_piece&token='+xyzdtoken+'&box_id='+xyzdbxid+'&video_extra=1&is_level_piece='+bx,
       
}      
      $.post(url, async (err, resp, data) => {
        try {
         const result = JSON.parse(data)
        if (result.code == 1) {
       console.log('\n幸运赚点[宝箱翻倍]回执:成功🌝\n' +result.msg+'等待1秒继续开启宝箱')
     await $.wait(1000);
     await kqbx();
        } else {
       console.log('\n幸运赚点[宝箱翻倍]回执:失败🚫'+result.msg) 
       
       
        }} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//幸运赚点夺宝首页     
function dbsy(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://vip.75787.com/app/index.php?i=21&c=entry&from=wxapp&a=wxapp&do=index&t=0&v=6.4.2&m=panda_key&sign='+xyzdsign,
        headers : JSON.parse(xyzdhd),
        body : 'controller=pond.index&token='+xyzdtoken,
       
}      
      $.post(url, async (err, resp, data) => {
        try {
         const result = JSON.parse(data)
        if (result.code == 1) {
         xyzddb = result.data.pond_num
          if(xyzddb >= 40){
console.log('\n幸运夺宝[夺宝券]，当前夺宝券已满足参与全部夺宝，前去参与夺宝')
await db1();
}else{
console.log(`\n幸运赚点[夺宝券]回执:成功🌝\n当前夺宝券数量为:`+result.data.pond_num)
     await $.wait(1000);
     await dbq();}
        } else {
       console.log('\n幸运赚点[夺宝券]回执:失败🚫'+result.msg) 

       
        }} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//幸运赚点获取夺宝券     
function dbq(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'https://vip.75787.com/app/index.php?i=21&c=entry&from=wxapp&a=wxapp&do=index&t=0&v=6.4.2&m=panda_key&sign='+xyzdsign+'&controller=pond.pond_video&token='+xyzdtoken,
        headers : JSON.parse(xyzdhd),
       
}      
      $.get(url, async (err, resp, data) => {
        try {
         const result = JSON.parse(data)
        if (result.code == 1) {
       console.log('\n幸运赚点[夺宝券获取]回执:成功🌝\n' +result.msg+'等待1秒继续')
     await $.wait(1000);
     await dbsy();
        } else {
       console.log('\n幸运赚点[夺宝券获取]回执:失败🚫'+result.msg) 
       
       
        }} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//幸运赚点一元夺宝     
function db1(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'https://vip.75787.com/app/index.php?i=21&c=entry&from=wxapp&a=wxapp&do=index&t=0&v=6.4.2&m=panda_key&sign='+xyzdsign+'&controller=pond.join&token='+xyzdtoken+'&pond_id=1',
        headers : JSON.parse(xyzdhd),
       
}      
      $.get(url, async (err, resp, data) => {
        try {
         const result = JSON.parse(data)
        if (result.code == 1) {
       console.log('\n幸运赚点[1元夺宝]回执:成功🌝\n' +result.msg+'等待1秒继续')
     await $.wait(1000);
     await db1();
        } else {
       console.log('\n幸运赚点[1元夺宝]回执:失败🚫'+result.msg+'前去参与5元夺宝') 
       await db2();
       
        }} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//幸运赚点5元夺宝     
function db2(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'https://vip.75787.com/app/index.php?i=21&c=entry&from=wxapp&a=wxapp&do=index&t=0&v=6.4.2&m=panda_key&sign='+xyzdsign+'&controller=pond.join&token='+xyzdtoken+'&pond_id=2',
        headers : JSON.parse(xyzdhd),
       
}      
      $.get(url, async (err, resp, data) => {
        try {
         const result = JSON.parse(data)
        if (result.code == 1) {
       console.log('\n幸运赚点[5元夺宝]回执:成功🌝\n' +result.msg+'等待1秒继续')
     await $.wait(1000);
     await db2();
        } else {
       console.log('\n幸运赚点[5元夺宝]回执:失败🚫'+result.msg+'前去参与10元夺宝') 
       await db3();
       
        }} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//幸运赚点10元夺宝     
function db3(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'https://vip.75787.com/app/index.php?i=21&c=entry&from=wxapp&a=wxapp&do=index&t=0&v=6.4.2&m=panda_key&sign='+xyzdsign+'&controller=pond.join&token='+xyzdtoken+'&pond_id=3',
        headers : JSON.parse(xyzdhd),
       
}      
      $.get(url, async (err, resp, data) => {
        try {
         const result = JSON.parse(data)
        if (result.code == 1) {
       console.log('\n幸运赚点[10元夺宝]回执:成功🌝\n' +result.msg+'等待1秒继续')
     await $.wait(1000);
     await db3();
        } else {
       console.log('\n幸运赚点[10元夺宝]回执:失败🚫'+result.msg+'前去参与20元夺宝') 
       await db4();
       
        }} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//幸运赚点20元夺宝     
function db4(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'https://vip.75787.com/app/index.php?i=21&c=entry&from=wxapp&a=wxapp&do=index&t=0&v=6.4.2&m=panda_key&sign='+xyzdsign+'&controller=pond.join&token='+xyzdtoken+'&pond_id=4',
        headers : JSON.parse(xyzdhd),
       
}      
      $.get(url, async (err, resp, data) => {
        try {
         const result = JSON.parse(data)
        if (result.code == 1) {
       console.log('\n幸运赚点[20元夺宝]回执:成功🌝\n' +result.msg+'等待1秒继续')
     await $.wait(100);
     await db4();
        } else {
       console.log('\n幸运赚点[20元夺宝]回执:失败🚫'+result.msg)      
       
        }} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}