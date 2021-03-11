/*
软件名称:春风转 
更新时间：2021-03-11 @肥皂
脚本说明：春风转
脚本为自动阅读新闻
每天三元上限？
脚本运行时间未知，我也不知道啥时候能跑完
每日任务我慢慢添加，暂时没加入
下载地址 
https://ss.tblk.me/amlHv
二维码地址 https://raw.githubusercontent.com/age174/-/main/4705AE1B-41ED-4341-9CCD-5E06F3372D30.jpeg
本脚本以学习为主！
使用方法:
打开春风转，点击文章赚钱，下拉刷新一下，获得阅读数据
随便进入一篇文章阅读，获得金币奖励后提示获得上报数据
TG电报群: https://t.me/hahaha8028
boxjs地址 :  
https://raw.githubusercontent.com/age174/-/main/feizao.box.json
春风转
圈X配置如下，其他软件自行测试，定时可以多设置几次，没任务会停止运行的
[task_local]
#春风转
/30 8-22 * * * https://raw.githubusercontent.com/age174/-/main/cfz.js, tag=春风转, img-url=https://ae01.alicdn.com/kf/U8a3a2572bf5d4584928d1d7cde52b50ba.jpg, enabled=true
[rewrite_local]
#春风转
http://cf-api.douzhuanapi.cn:10002/api/ url script-request-header https://raw.githubusercontent.com/age174/-/main/cfz.js
#loon
http://cf-api.douzhuanapi.cn:10002/api/ script-path=https://raw.githubusercontent.com/age174/-/main/cfz.js, requires-header=true, timeout=10, tag=春风转
#surge
春风转 = type=http-request,pattern=http://cf-api.douzhuanapi.cn:10002/api/,requires-header=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/cfz.js,script-update-interval=0
[MITM]
hostname = cf-api.douzhuanapi.cn
*/


const $ = new Env('春风转');
let status;
status = (status = ($.getval("cfzstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const cfzurlArr = [], cfzhdArr = []
let concurrency = ($.getval('cfzConcurrency') || '3') - 0; // 并发执行任务的账号数，默认单账号循环执行
concurrency = concurrency < 1 ? 1 : concurrency;

!(async () => {
  if (typeof $request !== "undefined") {
    await cfzck()
   
  } else {
   if ($.isNode()) {
  COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
  console.log(
    `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
  );
if (
    process.env.CFZURL &&
    process.env.CFZURL.indexOf(COOKIES_SPLIT) > -1
  ) {
    cfzurl = process.env.CFZURL.split(COOKIES_SPLIT);
  } else {
    cfzurl = process.env.CFZURL.split();
  }
	   
  if (
    process.env.CFZHD &&
    process.env.CFZHD.indexOf(COOKIES_SPLIT) > -1
  ) {
    cfzhd = process.env.CFZHD.split(COOKIES_SPLIT);
  } else {
    cfzhd = process.env.CFZHD.split();
  }
	   


	
  Object.keys(cfzurl).forEach((item) => {
        if (cfzurl[item]) {
          cfzurlArr.push(cfzurl[item])
        }
    });
    Object.keys(cfzhd).forEach((item) => {
        if (cfzhd[item]) {
          cfzhdArr.push(cfzhd[item])
        }
    });
    

  	
  } else {	  
    cfzurlArr.push($.getdata('cfzurl'))
    cfzhdArr.push($.getdata('cfzhd'))
    let cfzcount = ($.getval('cfzcount') || '1');
  for (let i = 2; i <= cfzcount; i++) {
    cfzurlArr.push($.getdata(`cfzurl${i}`))
    cfzhdArr.push($.getdata(`cfzhd${i}`))
  }
  }
    let execAcList = [];
    let slot = cfzhdArr.length % concurrency == 0 ? cfzhdArr.length / concurrency : parseInt(cfzhdArr.length / concurrency) + 1;
    cfzhdArr.forEach((o, i) => {
      if(o){
        let idx = i % slot;
        if (execAcList[idx]) {
          execAcList[idx].push({no: i + 1, cfzhd: o, cfzid: ''});
        } else {
          execAcList[idx] = [{no: i + 1, cfzhd: o, cfzid: ''}];
        }
      }
    });
    $.log(`----------- 共${cfzhdArr.length}个账号分${execAcList.length}组去执行 -----------`);
    for (let arr of execAcList) {
      let allAc = arr.map(ac => ac.no).join(', ');
      $.log(`\n=======================================\n开始【${$.name}账号：${allAc}】`);
      await Promise.all(arr.map((ac, i) => execTask(ac, i)));
    }
  }

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())

function execTask(ac, i) {
  return new Promise(async resolve => {
    try {
      await $.wait(i * 500)
      for (let i = 0; i < 20; i++) {
        $.log(`春风转开始执行循环阅读，本次共执行20次，已执行${i+1}次`)
        await cfzqd(ac)
        await $.wait(31000)
      }
    } catch (e) {
      $.logErr(e, `账号${ac.no} 循环执行任务出现异常`)
    } finally {
      resolve()
    }
  })
}

//春风转数据获取
function cfzck() {
   if ($request.url.indexOf("list?city_type") > -1) {
 const cfzurl = $request.url
  if(cfzurl)     $.setdata(cfzurl,`cfzurl${status}`)
    $.log(cfzurl)
  const cfzhd = JSON.stringify($request.headers)
        if(cfzhd)    $.setdata(cfzhd,`cfzhd${status}`)
$.log(cfzhd)
   $.msg($.name,"",'春风转'+`${status}` +'阅读数据获取成功！')
  }
if ($request.url.indexOf("ad_sense/report") > -1) {
 
  const cfzsbhd = JSON.stringify($request.headers)
        if(cfzsbhd)    $.setdata(cfzsbhd,`cfzsbhd${status}`)
$.log(cfzsbhd)
   $.msg($.name,"",'春风转'+`${status}` +'上报数据获取成功！')
  }
}


//春风转阅读
function cfzyd(ac,timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://cf-api.douzhuanapi.cn:10002/api/self_read_report?item_id='+ac.cfzid,
        headers : JSON.parse(ac.cfzhd),
        }
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 200){
        console.log('\n春风转[领取阅读奖励]回执:成功🌝 \n获得奖励: '+result.data.amount+'金币，等待30秒继续领取')       
           await cfzsb(ac);
           
           
} else {
     
console.log('\n春风转[领取阅读奖励]回执:失败🌚'+result.message+'\n恭喜您，您的账号黑了，尝试上报数据修复，提示上报数据成功请关闭脚本等待一分钟再次运行试试')
await cfzxf(ac);

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//春风转上报数据
function cfzsb(ac, timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://cf-api.douzhuanapi.cn:10002/api/self_read_init?item_id='+ac.cfzid,
        headers : JSON.parse(ac.cfzhd),
        
        }
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 200){
        //console.log('\n春风转[数据上报]回执:成功🌝'+result.message)  
await cfztj(ac)
} else {
console.log('\n春风转[上报数据]回执:失败🌚'+result.message)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//春风转上报提交数据
function cfztj(ac,timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://cf-api.douzhuanapi.cn:10002/api/ad_sense/report',
        headers : JSON.parse(ac.cfzhd),
        body : 'ad_source=1&location=3&position=8&report_type=1',
        
        }
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 200){
        console.log('\n春风转[数据上报]回执:成功🌝'+result.data)  
} else {
console.log('\n春风转[上报数据]回执:失败🌚'+result.message)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//春风转修复系统错误
function cfzxf(ac,timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://cf-api.douzhuanapi.cn:10002/api/ad_sense/report',
        headers : JSON.parse(ac.cfzhd),
        body : 'ad_source=1&location=3&position=8&report_type=1',
        
        }
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 200){
        console.log('\n春风转[数据上报]回执:成功🌝'+result.data)  
} else {
console.log('\n春风转[上报数据]回执:失败🌚'+result.message)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//春风转列表
function cfzqd(ac, timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
let sjs = Math.floor(Math.random()*1000); //生成随机数
let url = {
        url : 'http://cf-api.douzhuanapi.cn:10002/api/article/list?city_type=1&page='+sjs+'&slide='+sjs+'&tag_id=0&type=1',
        headers : JSON.parse(ac.cfzhd),
        
}
      $.get(url, async (err, resp, data) => {
let cfzlb = data.match(/"list":(.*)/)[1]
ac.cfzid = cfzlb.match(/"id":(\w+),/)[1]
let cfzmc = cfzlb.match(/"title":"(.+?)","/)[1]
//console.log(cfzmc)
//$.done()
        try {
    const result = JSON.parse(data)
        if(result.code == 200){
     

        console.log('\n春风转[阅读列表]回执:成功🌝  \n📄阅读ID:'+ac.cfzid+'\n📑开始阅读:'+cfzmc)
       await $.wait(1000);
        await cfzyd(ac);
} else {
console.log('春风转[阅读列表]回执:失败🚫 '+result.message)
     
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



function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}


