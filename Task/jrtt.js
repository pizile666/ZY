tgchannel：httpst.meZhiYi_Script
github：httpsgithub.comZhiYi-Nscript
转载给我留个名字，谢谢
邀请码：1980436898
我的--输入邀请码，立得一元，直接提现，谢谢
作者：执意ZhiYi-N
目前包含：
签到
开首页宝箱
读文章30篇（具体效果自测）
开农场宝箱
农场浇水
done 农场离线奖励(农场宝箱开完后，需要进农场再运行脚本才能开，有点问题)
##通过农场浇水激活上线，达到获取理想奖励目的，目前测试每天的离线奖励足够开启农场5个宝箱，不需要做其他任务，具体情况看后期是否需要，再添加除虫，开地，施肥，三餐奖励以及农场签到活动
20点睡觉，获取完全后（3600）或睡觉12小时，自动醒来（防止封号）
自动收取睡觉金币
脚本初成，非专业人士制作，欢迎指正
#右上角签到即可获取签到cookie
#进一次农场即可获取农场cookie
#读文章弹出金币获取读文章cookie
[mitm]
hostname = .snssdk.com
#圈x
[rewrite local]
score_taskv1task(sign_inget_read_bonus) url script-request-header httpsraw.githubusercontent.comZhiYi-NPrivate-ScriptmasterScriptsjrtt.js
ttgamegame_farmhome_info url script-request-header httpsraw.githubusercontent.comZhiYi-NPrivate-ScriptmasterScriptsjrtt.js
[task]
5,35 8-23    httpsraw.githubusercontent.comZhiYi-NPrivate-ScriptmasterScriptsjrtt.js, tag=今日头条极速版, enabled=true
#loon
http-request score_taskv1task(sign_inget_read_bonus) script-path=httpsraw.githubusercontent.comZhiYi-NPrivate-ScriptmasterScriptsjrtt.js, requires-body=true, timeout=10, tag=今日头条极速版sign
http-request ttgamegame_farmhome_info script-path=httpsraw.githubusercontent.comZhiYi-NPrivate-ScriptmasterScriptsjrtt.js, requires-body=true, timeout=10, tag=今日头条极速版farm
cron 5,35 8-23    script-path=httpsraw.githubusercontent.comZhiYi-NPrivate-ScriptmasterScriptsjrtt.js, tag=今日头条极速版
#surge
jrttsign = type=http-request,pattern=score_taskv1task(sign_inget_read_bonus),requires-body=1,max-size=0,script-path=httpsraw.githubusercontent.comZhiYi-NPrivate-ScriptmasterScriptsjrtt.js,script-update-interval=0
jrttfarm = type=http-request,pattern=ttgamegame_farmhome_info,requires-body=1,max-size=0,script-path=httpsraw.githubusercontent.comZhiYi-NPrivate-ScriptmasterScriptsjrtt.js,script-update-interval=0
jrtt = type=cron,cronexp=5,35 8-23   ,wake-system=1,script-path=httpsraw.githubusercontent.comZhiYi-NPrivate-ScriptmasterScriptsjrtt.js,script-update-interval=0


const jsname='今日头条极速版'
const $ = Env(jsname)
const notify = $.isNode() require('.sendNotify')  '';
$.idx = ($.idx = ($.getval(jrttcount)  1) - 1)  0  `${$.idx + 1}`  ;  账号扩展字符
const signurlArr = [],signkeyArr=[]
const farmurlArr = [],farmkeyArr=[]
const readurlArr = [],readkeyArr=[]
let signurl = $.getdata('signurl')
let signkey = $.getdata('signkey')

let farmurl = $.getdata('farmurl')
let farmkey = $.getdata('farmkey')

let readurl = $.getdata('readurl')
let readkey = $.getdata('readkey')
var articles =''
let tz = ($.getval('tz')  '1');0关闭通知，1默认开启
const invit=1;新用户自动邀请，0关闭，1默认开启
const logs =0;0为关闭日志，1为开启
var coins=''
var article =''
var collect = ''
var invited =''
var hour=''
var minute=''
if ($.isNode()) {
   hour = new Date( new Date().getTime() + 8  60  60  1000 ).getHours();
   minute = new Date( new Date().getTime() + 8  60  60  1000 ).getMinutes();
}else{
   hour = (new Date()).getHours();
   minute = (new Date()).getMinutes();
}
CK运行

let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
   GetCookie();
   $.done()
} 
if ($.isNode()) {
sign
  if (process.env.JRTTSIGNURL && process.env.JRTTSIGNURL.indexOf('#')  -1) {
   signurl = process.env.JRTTSIGNURL.split('#');
   console.log(`您选择的是用#隔开n`)
  }
  else if (process.env.JRTTSIGNURL && process.env.JRTTSIGNURL.indexOf('n')  -1) {
   signurl = process.env.JRTTSIGNURL.split('n');
   console.log(`您选择的是用换行隔开n`)
  } else {
   signurl = process.env.JRTTSIGNURL.split()
  };
  if (process.env. JRTTSIGNKEY&& process.env.JRTTSIGNKEY.indexOf('#')  -1) {
   signkey = process.env.JRTTSIGNKEY.split('#');
  }
  else if (process.env.JRTTSIGNKEY && process.env.JRTTSIGNKEY.split('n').length  0) {
   signkey = process.env.JRTTSIGNKEY.split('n');
  } else  {
   signkey = process.env.JRTTSIGNKEY.split()
  };
farm
if (process.env.JRTTFARMURL && process.env.JRTTFARMURL.indexOf('#')  -1) {
   farmurl = process.env.JRTTFARMURL.split('#');
   console.log(`您选择的是用#隔开n`)
  }
  else if (process.env.JRTTFARMURL && process.env.JRTTFARMURL.indexOf('n')  -1) {
   farmurl = process.env.JRTTFARMURL.split('n');
   console.log(`您选择的是用换行隔开n`)
  } else {
   farmurl = process.env.JRTTFARMURL.split()
  };
  if (process.env. JRTTFARMKEY&& process.env.JRTTFARMKEY.indexOf('#')  -1) {
   farmkey = process.env.JRTTFARMKEY.split('#');
  }
  else if (process.env.JRTTFARMKEY && process.env.JRTTFARMKEY.split('n').length  0) {
   farmkey = process.env.JRTTFARMKEY.split('n');
  } else  {
   farmkey = process.env.JRTTFARMKEY.split()
  };
read
if (process.env.JRTTREADURL && process.env.JRTTREADURL.indexOf('#')  -1) {
   readurl = process.env.JRTTREADURL.split('#');
   console.log(`您选择的是用#隔开n`)
  }
  else if (process.env.JRTTREADURL && process.env.JRTTREADURL.indexOf('n')  -1) {
   readurl = process.env.JRTTREADURL.split('n');
   console.log(`您选择的是用换行隔开n`)
  } else {
   readurl = process.env.JRTTREADURL.split()
  };
  if (process.env. JRTTREADKEY&& process.env.JRTTREADKEY.indexOf('#')  -1) {
   readkey = process.env.JRTTREADKEY.split('#');
  }
  else if (process.env.JRTTREADKEY && process.env.JRTTREADKEY.split('n').length  0) {
   readkey = process.env.JRTTREADKEY.split('n');
  } else  {
   readkey = process.env.JRTTREADKEY.split()
  };
sign
  Object.keys(signurl).forEach((item) = {
        if (signurl[item]) {
          signurlArr.push(signurl[item])
        }
    });
    Object.keys(signkey).forEach((item) = {
        if (signkey[item]) {
          signkeyArr.push(signkey[item])
        }
    });
farm
Object.keys(farmurl).forEach((item) = {
        if (farmurl[item]) {
          farmurlArr.push(farmurl[item])
        }
    });
    Object.keys(farmkey).forEach((item) = {
        if (farmkey[item]) {
          farmkeyArr.push(signkey[item])
        }
    });
read
Object.keys(readurl).forEach((item) = {
        if (readurl[item]) {
          readurlArr.push(readurl[item])
        }
    });
    Object.keys(readkey).forEach((item) = {
        if (readkey[item]) {
          readkeyArr.push(readkey[item])
        }
    });
    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============n`)
    console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8  60  60  1000).toLocaleString()}  =============n`)
 } else {
    signurlArr.push($.getdata('signurl'))
    signkeyArr.push($.getdata('signkey'))
    farmurlArr.push($.getdata('farmurl'))
    farmkeyArr.push($.getdata('farmkey'))
    readurlArr.push($.getdata('readurl'))
    readkeyArr.push($.getdata('readkey'))
    let jrttcount = ($.getval('jrttcount')  '1');
  for (let i = 2; i = jrttcount; i++) {
    signurlArr.push($.getdata(`signurl${i}`))
    signkeyArr.push($.getdata(`signkey${i}`))
    farmurlArr.push($.getdata(`farmurl${i}`))
    farmkeyArr.push($.getdata(`farmkey${i}`))
    readurlArr.push($.getdata(`readurl${i}`))
    readkeyArr.push($.getdata(`readkey${i}`))
  }
}
!(async () = {
if (!signurlArr[0]) {
    $.msg($.name, '【提示】请先获取今日头条极速版一cookie')
    return;
  }
   console.log(`------------- 共${signurlArr.length}个账号----------------n`)
  for (let i = 0; i  signurlArr.length; i++) {
    if (signurlArr[i]) {
      other = ''
      signurl = signurlArr[i];
      signkey = signkeyArr[i];
      farmurl = farmurlArr[i];
      farmkey = farmkeyArr[i];
      readurl = readurlArr[i];
      readkey = readkeyArr[i];
      $.index = i + 1;
      console.log(`n开始【今日头条极速版${$.index}】`)
      await invite()
      await userinfo()
      await profit()
      await sign_in()
      await openbox()
      await reading()
      await farm_sign_in()
      await openfarmbox()
      await landwarer()
      await double_reward()
      await sleepstatus()
      await control()
      await sleepstart()
      await sleepstop()
      await collectcoins(coins)
      await showmsg()
  }
 }
})()
    .catch((e) = $.logErr(e))
    .finally(() = $.done())
function GetCookie() {
 if($request&&$request.url.indexOf(info)=0) {
  const farmurlVal = $request.url.split(``)[1]
    if (farmurlVal) $.setdata(farmurlVal,
`farmurl${$.idx}`)
    $.log(`[${jsname}] 获取farm请求 成功,farmirlVal ${farmurl}`)
    $.msg(`获取farmurl 成功🎉`, ``)
   const jrttfarmKey = JSON.stringify($request.headers)
$.log(jrttfarmKey)
  if(jrttfarmKey)        $.setdata(jrttfarmKey,`farmkey${$.idx}`)
    $.log(`[${jsname + $.idx}] 获取farm请求 成功,jrttfarmKey ${farmkey}`)
    $.msg(`获取farmkey 成功🎉`, ``)
}
  if($request&&$request.url.indexOf(sign_in)=0) {
  const signurlVal = $request.url.split(``)[1]
    if (signurlVal) $.setdata(signurlVal,
`signurl${$.idx}`)
    $.log(`[${jsname + $.idx}] 获取sign请求 成功,signurlVal ${signurl}`)
    $.msg(`获取signurl 成功🎉`, ``)
   const jrttsignKey = JSON.stringify($request.headers)
$.log(jrttsignKey)
  if(jrttsignKey.indexOf(STUB)=0)
    $.setdata(jrttsignKey,`signkey${$.idx}`)
    $.log(`[${jsname + $.idx}] 获取sign请求 成功,jrttsignKey ${signkey}`)
    $.msg(`获取signkey 成功🎉`, ``)
}

if($request&&$request.url.indexOf(get_read_bonus)=0) {
  const readurlVal = $request.url.split(``)[1]

  const article = readurlVal.replace(d{3}$,Math.floor(Math.random()1000));
article = article.replace(d{3}$, (Math.random()1e3).toFixed(0).padStart(3,0));

    if(article) $.setdata(article,
'article')
    if (readurlVal) $.setdata(readurlVal,
`readurl${$.idx}`)
    $.log(`[${jsname + $.idx}] 获取read请求 成功,readurlVal ${readurl}`)
    $.msg(`获取readurl 成功🎉`, ``)
   const jrttreadKey = JSON.stringify($request.headers)
$.log(jrttreadKey)
  if(jrttreadKey)        $.setdata(jrttreadKey,`readkey${$.idx}`)
    $.log(`[${jsname}] 获取read请求 成功,jrttreadKey ${readkey}`)
    $.msg(`获取readkey 成功🎉`, ``)
    }
  }
function sign_in() {
return new Promise((resolve, reject) = {
  let sign_inurl ={
    url `httpsapi3-normal-c-lq.snssdk.comscore_taskv1tasksign_in${signurl}`,
    headers JSON.parse(signkey),
      timeout 60000,
}

   $.post(sign_inurl,(error, response, data) ={
     const result = JSON.parse(data)
       if(logs) $.log(data)
      if(result.err_no == 0) {
          other +='📣首页签到n'
          other +='签到完成n'
          other +='获得'+result.data.score_amount+'金币n'
          other +='连续签到'+result.data.sign_times+'天n'
  
}else{
          other +='📣首页签到n'
          other +='今日已完成签到n'
           }
          resolve()
    })
   })
  } 

async function control(){
   if(collect == 0){
      await sleepstart();
   }
   if(collect == 1){
      await sleepstop();
      await collectcoins(coins);
   }
   if(collect == 2){
      $.log('no opreation')
      other +='nn生前何必久睡，死后自会长眠n'
   }
   if(collect == 3){
      await collectcoins(coins);
   }
   if(invited == 4 && invit== 1){
      await invitation();
   }
}
function invite() {
return new Promise((resolve, reject) = {
  let inviteurl ={
    url `httpsapi3-normal-c-lq.snssdk.comscore_taskv1usernew_tabs${signurl}`,
    headers JSON.parse(signkey),
      timeout 60000,
}

   $.get(inviteurl,(error, response, data) ={
     const result = JSON.parse(data)
      if(logs)$.log(data)
      if(result.data.section[10].key=='mine_input_code') {
          invited=4;
           }else{
          invited=5;
}
          resolve()
    })
   })
  } 
function invitation() {
return new Promise((resolve, reject) = {
  let invitatonurl ={
    url `httpsapi3-normal-c-lq.snssdk.comluckycatlitev1invitepost_invite_code_request_from=web&device_platform=ios&ac=4G&${signurl}`,
    headers JSON.parse(farmkey),
      timeout 60000,
    body JSON.stringify({invitecode  1980436898})
}

   $.post(invitatonurl,(error, response, data) ={
     const result = JSON.parse(data)
       if(logs)$.log(data)
          resolve()
    })
   })
  } 

function userinfo() {
return new Promise((resolve, reject) = {
  let userinfourl ={
    url `httpsapi3-normal-c-hl.snssdk.compassportaccountinfov2${signurl}`,
    headers JSON.parse(signkey),
      timeout 60000,
}

   $.get(userinfourl,(error, response, data) ={
     const result = JSON.parse(data)
      $.log(signurl+'n'+signkey+'n'+farmurl+'n'+farmkey+'n'+readurl+'n'+readkey)
       if(logs) $.log(data)
      if(result.message == 'success') {
          other +='🎉'+result.data.name+'n'
  
}     else if(result.message == 'error'){
          other += '⚠️异常'+result.data.description+'n'
           }else{
          other += '⚠️异常'
}
          resolve()
    })
   })
  } 

function profit() {
return new Promise((resolve, reject) = {
  let profiturl ={
    url `httpsapi3-normal-c-lq.snssdk.comscore_taskv1userinfo${signurl}`,
    headers JSON.parse(signkey),
      timeout 60000,
}

   $.get(profiturl,(error, response, data) ={
     const result = JSON.parse(data)
        if(logs)$.log(data)
      if(result.err_no == 0) {
          other +='🎉金币收益'+result.data.score.amount+'n🎉估计兑换现金'+(result.data.score.amount30000).toFixed(2)+'n🎉'+'现金收益'+result.data.cash.amount+'n'      
}else{
          other += '⚠️异常n'
           }
          resolve()
    })
   })
  } 

文章阅读30篇每天
function reading() {
const articles = readurl.replace(d{3}$,Math.floor(Math.random()1000));
return new Promise((resolve, reject) = {
  let readurl ={
    url `httpsapi3-normal-c-lq.snssdk.comscore_taskv1taskget_read_bonus${articles}`,
    headers JSON.parse(signkey),
      timeout 60000,
}

   $.post(readurl,(error, response, data) ={
     const result = JSON.parse(data)
      if(logs)  $.log(data)
      other +='📣文章阅读n'
      if(result.err_no == 0) {
          other +='阅读完成'
          other +='获得'+result.data.score_amount+'金币n'
          other +='阅读进度'+result.data.icon_data.done_times+''+result.data.icon_data.read_limit+'n'
      }
       if(result.err_no == 4){
          other +='文章阅读已达上限n'
        }
       if(result.err_no == 1028){
          other +='这篇文章已经读过了n'
        }
          resolve()
    })
   })
  } 
农场签到
function farm_sign_in() {
return new Promise((resolve, reject) = {
  let farm_sign_inurl ={
    url `httpsapi3-normal-c-lq.snssdk.comttgamegame_farmrewardsign_inwatch_ad=1&${signurl}`,
    headers JSON.parse(farmkey),
      timeout 60000,
}

   $.get(farm_sign_inurl,(error, response, data) ={
     const result = JSON.parse(data)
       if(logs) $.log(data)
       other +='📣农场签到n'
      if(result.status_code == 0) {
          other +='签到完成n'
         
}else{
          other +=result.message+'n'
           }
          resolve()
    })
   })
  } 

function openbox() {
return new Promise((resolve, reject) = {
  let openboxurl ={
    url `httpsit-lq.snssdk.comscore_taskv1taskopen_treasure_box${signurl}`,
    headers JSON.parse(signkey),
      timeout 60000,
}

   $.post(openboxurl,(error, response, data) ={
     const result = JSON.parse(data)
       if(logs) $.log(data)
       other +='📣首页宝箱n'
      if(result.err_no == 0) {
        other += '开启成功'
        other += '获得金币'+result.data.score_amount+'个n'
        }
      else{
         if(result.err_no == 9){
        other += result.err_tips+'n'
        }else{
        other +=不在开宝箱时间n
           }
    }
          resolve()
    })
   })
  }  


function openfarmbox() {
return new Promise((resolve, reject) = {
  let openfarmboxurl ={
    url `httpsapi3-normal-c-lq.snssdk.comttgamegame_farmboxopen${farmurl}`,
    headers JSON.parse(farmkey),
      timeout 60000,
}

   $.get(openfarmboxurl,(error, response, data) ={
     const result = JSON.parse(data)
       if(logs) $.log(data)
       other +='📣农场宝箱n'
      if(result.status_code == 0) {
        other += 第+(5-result.data.box_num)+开启成功
        other += 还可以开启+result.data.box_num+个n
        }
      else if(result.status_code == 5003){
        other +=已全部开启n
        }
          resolve()
    })
   })
  }  
function landwarer() {
return new Promise((resolve, reject) = {
  let landwaterurl ={
    url `httpsapi3-normal-c-lq.snssdk.comttgamegame_farmland_watertentimes=0${farmurl}`,
    headers JSON.parse(farmkey),
      timeout 60000,
}

   $.get(landwaterurl,(error, response, data) ={
     const result = JSON.parse(data)
        if(logs)$.log(data)
       other +='📣农场浇水n'
      if(result.status_code == '0') {
        other += result.message+'n'
        other += '💧水滴剩余'+result.data.water+'n'
        }
      else{
        other +=result.message+'n'
           }
          resolve()
    })
   })
  } 
done 这个离线奖励当宝箱全部开完后，需要进入农场再运行脚本，才能获取离线奖励，应该有一个判定，目前没有找到
利用浇水激活进农场状态获取离线奖励，目前测试每天离线奖励足够开启农场5个宝箱，不需要做游戏加快生产，具体情况看后期是否需要，再考虑加做除虫，开地，三餐奖励
function double_reward() {
return new Promise((resolve, reject) = {
  let double_rewardurl ={
    url `httpsapi3-normal-c-lq.snssdk.comttgamegame_farmdouble_rewardwatch_ad=1&${farmurl}`,
    headers JSON.parse(farmkey),
      timeout 60000,
}

   $.get(double_rewardurl,(error, response, data) ={
     const result = JSON.parse(data)
       if(logs) $.log(data)
        other +='📣农场视频双倍离线奖励n'
      if(result.status_code == 0) {
        other += '获得成功n'
        }else if(result.status_code==5033){
            other += result.message+'n'
          }
        else{
        other +='📣农场视频双倍离线奖励n'
        other +=无离线产量可领取n
           }
          resolve()
    })
   })
  }  


睡觉状态
function sleepstatus() {
return new Promise((resolve, reject) = {
  let sleepstatusurl ={
    url `httpsapi3-normal-c-lq.snssdk.comluckycatlitev1sleepstatus_request_from=web&${signurl}`,
    headers JSON.parse(signkey),
      timeout 60000,
}

   $.get(sleepstatusurl,(error, response, data) ={
     const result = JSON.parse(data)
       if(logs)$.log(data)
      if(result.err_no == 0) {
          other +='📣查询睡觉状态n🎉查询'+result.err_tips+'n'
           }
      if(result.data.sleeping == false){
          other +='当前状态清醒着呢n'
        if(hour = 20hour=2){
           collect=0 await sleepstart()
           }else{
if(result.data.history_amount!==0){ 
即使没有满足3600也在睡觉12小时后停止，以防封号
         coins=result.data.history_amount
         collect =3 collect coins
          }else{
         collect=2
}
}}
          else{
         other  +='当前状态酣睡中,已睡'+parseInt(result.data.sleep_last_time3600)+'小时'+parseInt((result.data.sleep_last_time%3600)60)+'分钟'+parseInt((result.data.sleep_last_time%3600)%60)+'秒n'
          other +='预计可得金币'+result.data.sleep_unexchanged_score+'n'
          coins=result.data.sleep_unexchanged_score
         if(result.data.sleep_unexchanged_score == 3600  parseInt(result.data.sleep_last_time3600) = 12){ 
即使没有满足3600也在睡觉12小时后停止，以防封号
         collect =1 collect coins&sleepstop
          }else{
         collect =2
}
   
     }
          resolve()
    })
   })
  } 
开始睡觉
function sleepstart() {
return new Promise((resolve, reject) = {
  let sleepstarturl ={
    url `httpsapi3-normal-c-lq.snssdk.comluckycatlitev1sleepstart_request_from=web&${signurl}`,
    headers JSON.parse(signkey),
      timeout 60000,
}

   $.post(sleepstarturl,(error, response, data) ={
     const result = JSON.parse(data)
       if(logs) $.log(data)
      if(result.err_no == 0) {
          other +='📣开始睡觉n该睡觉了，开始睡觉'+result.err_tips+'n'
  
}     else if(result.err_no == 1052){
          other +='📣开始睡觉n'+result.err_tips+'n'
           }else{
          other += '📣开始睡觉'+'⚠️异常'
}
          resolve()
    })
   })
  } 
停止睡觉
function sleepstop() {
return new Promise((resolve, reject) = {
  let sleepstopurl ={
    url `httpsapi3-normal-c-lq.snssdk.comluckycatlitev1sleepstop_request_from=web&${signurl}`,
    headers JSON.parse(signkey),
      timeout 60000,
}

   $.post(sleepstopurl,(error, response, data) ={
     const result = JSON.parse(data)
       if(logs) $.log(data)
      if(result.err_no == 0) {
          other +='📣停止睡觉n'+result.err_tips+'n'
          
}     else if(result.err_no == 1052){
          other += '📣停止睡觉n'+'还没开始睡觉n'
           }else{
          other +='📣停止睡觉'+'n⚠️异常'
}
          resolve()
    })
   })
  } 
收取睡觉金币
function collectcoins(coins) {
return new Promise((resolve, reject) = {
  let collectcoinsurl ={
    url `httpsapi3-normal-c-lq.snssdk.comluckycatlitev1sleepdone_task_request_from=web&device_platform=undefined&${signurl}`,
    headers JSON.parse(farmkey),
      timeout 60000,
    body JSON.stringify({score_amount coins}),

}

   $.post(collectcoinsurl,(error, response, data) ={
     const result = JSON.parse(data)
       if(logs)$.log(data)
      if(result.err_no == 0) {
          other +='📣收取金币n'+result.err_tips+'     获得金币'+coins
          
}     else{
          other +='📣收取金币'+'n⚠️异常'+result.err_tips+''
}
          resolve()
    })
   })
  } 
var Time = new Date(new Date().getTime() + 8  60  60  1000);
async function showmsg(){
if(tz==1){
    if ($.isNode()&& (Time.getHours() == 12 && Time.getMinutes() = 20)  (Time.getHours() == 23 && Time.getMinutes() = 40)) {
       await notify.sendNotify($.name,other)
     }else{
       $.msg(jsname,'',other)
}
   }else{
       $.log(jsname,'',other)
}

}
function Env(t,e){class s{constructor(t){this.env=t}send(t,e=GET){t=string==typeof t{urlt}t;let s=this.get;returnPOST===e&&(s=this.post),new Promise((e,i)={s.call(this,t,(t,s,r)={ti(t)e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,POST)}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile=box.dat,this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator=n,this.startTime=(new Date).getTime(),Object.assign(this,e),this.log(,`ud83dudd14${this.name}, u5f00u59cb!`)}isNode(){returnundefined!=typeof module&&!!module.exports}isQuanX(){returnundefined!=typeof $task}isSurge(){returnundefined!=typeof $httpClient&&undefined==typeof $loon}isLoon(){returnundefined!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e={this.get({urlt},(t,s,i)=e(i))})}runScript(t,e){return new Promise(s={let i=this.getdata(@chavy_boxjs_userCfgs.httpapi);i=ii.replace(ng,).trim()i;let r=this.getdata(@chavy_boxjs_userCfgs.httpapi_timeout);r=r1r20,r=e&&e.timeoute.timeoutr;const[o,h]=i.split(@),a={url`http${h}v1scriptingevaluate`,body{script_textt,mock_typecron,timeoutr},headers{X-Keyo,Accept}};this.post(a,(t,e,i)=s(i))}).catch(t=this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fsthis.fsrequire(fs),this.path=this.paththis.pathrequire(path);const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=ste;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fsthis.fsrequire(fs),this.path=this.paththis.pathrequire(path);const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);sthis.fs.writeFileSync(t,r)ithis.fs.writeFileSync(e,r)this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace([(d+)]g,.$1).split(.);let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==tt(Array.isArray(e)(e=e.toString().match([^.[]]+g)[]),e.slice(0,-1).reduce((t,s,i)=Object(t[s])===t[s]t[s]t[s]=Math.abs(e[i+1])0==+e[i+1][]{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(^@.test(t)){const[,s,i]=^@(.).(.)$.exec(t),r=sthis.getval(s);if(r)try{const t=JSON.parse(r);e=tthis.lodash_get(t,i,)e}catch(t){e=}}return e}setdata(t,e){let s=!1;if(^@.test(e)){const[,i,r]=^@(.).(.)$.exec(e),o=this.getval(i),h=inull===onullo{}{};try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()this.isLoon()$persistentStore.read(t)this.isQuanX()$prefs.valueForKey(t)this.isNode()(this.data=this.loaddata(),this.data[t])this.data&&this.data[t]null}setval(t,e){return this.isSurge()this.isLoon()$persistentStore.write(t,e)this.isQuanX()$prefs.setValueForKey(t,e)this.isNode()(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0)this.data&&this.data[e]null}initGotEnv(t){this.got=this.gotthis.gotrequire(got),this.cktough=this.cktoughthis.cktoughrequire(tough-cookie),this.ckjar=this.ckjarthis.ckjarnew this.cktough.CookieJar,t&&(t.headers=t.headerst.headers{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()={})){t.headers&&(delete t.headers[Content-Type],delete t.headers[Content-Length]),this.isSurge()this.isLoon()(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers{},Object.assign(t.headers,{X-Surge-Skip-Scripting!1})),$httpClient.get(t,(t,s,i)={!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)}))this.isQuanX()(this.isNeedRewrite&&(t.opts=t.opts{},Object.assign(t.opts,{hints!1})),$task.fetch(t).then(t={const{statusCodes,statusCodei,headersr,bodyo}=t;e(null,{statuss,statusCodei,headersr,bodyo},o)},t=e(t)))this.isNode()&&(this.initGotEnv(t),this.got(t).on(redirect,(t,e)={try{if(t.headers[set-cookie]){const s=t.headers[set-cookie].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t={const{statusCodes,statusCodei,headersr,bodyo}=t;e(null,{statuss,statusCodei,headersr,bodyo},o)},t={const{messages,responsei}=t;e(s,i,i&&i.body)}))}post(t,e=(()={})){if(t.body&&t.headers&&!t.headers[Content-Type]&&(t.headers[Content-Type]=applicationx-www-form-urlencoded),t.headers&&delete t.headers[Content-Length],this.isSurge()this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers{},Object.assign(t.headers,{X-Surge-Skip-Scripting!1})),$httpClient.post(t,(t,s,i)={!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method=POST,this.isNeedRewrite&&(t.opts=t.opts{},Object.assign(t.opts,{hints!1})),$task.fetch(t).then(t={const{statusCodes,statusCodei,headersr,bodyo}=t;e(null,{statuss,statusCodei,headersr,bodyo},o)},t=e(t));else if(this.isNode()){this.initGotEnv(t);const{urls,...i}=t;this.got.post(s,i).then(t={const{statusCodes,statusCodei,headersr,bodyo}=t;e(null,{statuss,statusCodei,headersr,bodyo},o)},t={const{messages,responsei}=t;e(s,i,i&&i.body)})}}time(t){let e={M+(new Date).getMonth()+1,d+(new Date).getDate(),H+(new Date).getHours(),m+(new Date).getMinutes(),s+(new Date).getSeconds(),q+Math.floor(((new Date).getMonth()+3)3),S(new Date).getMilliseconds()};(y+).test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+).substr(4-RegExp.$1.length)));for(let s in e)new RegExp((+s+)).test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.lengthe[s](00+e[s]).substr((+e[s]).length)));return t}msg(e=t,s=,i=,r){const o=t={if(!t)return t;if(string==typeof t)return this.isLoon()tthis.isQuanX(){open-urlt}this.isSurge(){urlt}void 0;if(object==typeof t){if(this.isLoon()){let e=t.openUrlt.urlt[open-url],s=t.mediaUrlt[media-url];return{openUrle,mediaUrls}}if(this.isQuanX()){let e=t[open-url]t.urlt.openUrl,s=t[media-url]t.mediaUrl;return{open-urle,media-urls}}if(this.isSurge()){let e=t.urlt.openUrlt[open-url];return{urle}}}};this.isMute(this.isSurge()this.isLoon()$notification.post(e,s,i,o(r))this.isQuanX()&&$notify(e,s,i,o(r)));let h=[,==============ud83dudce3u7cfbu7edfu901au77e5ud83dudce3==============];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join(n)),this.logs=this.logs.concat(h)}log(...t){t.length0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();sthis.log(,`u2757ufe0f${this.name}, u9519u8bef!`,t.stack)this.log(,`u2757ufe0f${this.name}, u9519u8bef!`,t)}wait(t){return new Promise(e=setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)1e3;this.log(,`ud83dudd14${this.name}, u7ed3u675f! ud83dudd5b ${s} u79d2`),this.log(),(this.isSurge()this.isQuanX()this.isLoon())&&$done(t)}}(t,e)}