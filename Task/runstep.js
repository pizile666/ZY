/*　　　　　　　　　　
说明详情请见：https://raw.githubusercontent.com/CenBoMin/GithubSync/main/RUNSTEP/readme.js
*/
const jsname = '👟走路赚钱'
const $ = Env(jsname)
//0为关闭日志，1为开启,默认为0
const logs = 0;
//0为关闭通知，1为所有通知,默认为0
const notifyInterval = 1;
//通知风格
let tz = '';
let version = $.getval('version') || "1.5.1"; //APP版本号,更新请到APP更改

//////////////////////////////////////////////////////////////////
//hour&min
var hour = '';
var minute = '';
if ($.isNode()) {
  hour = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).getHours();
  minute = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).getMinutes();
} else {
  hour = (new Date()).getHours();
  minute = (new Date()).getMinutes();
}
//现在毫秒格式(13位数)
let todaytimems = Math.round(Date.now())
//现在秒格式(10位数)
let todaytimes = Math.round(Date.now() / 1000)
//今天20200101格式
let today1 = formatDateTime(new Date());
//今天2021.01.30 17:32:01格式
let today2 = formatDateTime(todaytimes);

//////////////////////////////////////////////////////////////////
const runsteptokenArr = [];
let runsteptokenVal = "";

const runstepkeyArr = [];
let runstepkeyVal = "";


if ($.isNode()) {
  
if (process.env.RUNSTEP_TOKEN && process.env.RUNSTEP_TOKEN.split('\n').length > 0) {
   runsteptokenVal = process.env.RUNSTEP_TOKEN.split('\n');
  } else  {
   runsteptokenVal = process.env.RUNSTEP_TOKEN.split()
  };
if (process.env.RUNSTEP_KEY && process.env.RUNSTEP_KEY.split('\n').length > 0) {
   runstepkeyVal = process.env.RUNSTEP_KEY.split('\n');
  } else  {
   runstepkeyVal = process.env.RUNSTEP_KEY.split()
  };

  Object.keys(runsteptokenVal).forEach((item) => {
    if (runsteptokenVal[item]) {
      runsteptokenArr.push(runsteptokenVal[item])
    }
  });

  Object.keys(runstepkeyVal).forEach((item) => {
    if (runstepkeyVal[item]) {
      runstepkeyArr.push(runstepkeyVal[item])
    }
  });

} else {
  runsteptokenArr.push($.getdata('runsteptoken'));
  runstepkeyArr.push($.getdata('runstepkey'));
  // 根据boxjs中设置的额外账号数，添加存在的账号数据进行任务处理
  let Count = ($.getval('Count') || '1') - 0;
  for (let i = 2; i <= Count; i++) {
    if ($.getdata(`runsteptoken${i}`)) {
      runsteptokenArr.push($.getdata(`runsteptoken${i}`));
      runstepkeyArr.push($.getdata(`runstepkey${i}`));
    }
  }
}

//////////////////////////////////////////////////////////////////

!(async () => {
  cc = (`${jsname}任务执行通知🔔`);
   if (!runsteptokenArr[0]) {
    console.log($.name, '【提示】请先前往获取cookie📲')
    return;
       }
/*  if (typeof $.getdata('runsteptoken') === "undefined") {
    console.log($.name, '【提示】请先前往获取cookie📲')
    return;
  } */
  console.log(`\n✅ 检查共有多少个账号。。。`)
  await $.wait(4000)
  console.log(`👥 本次执行共${runsteptokenArr.length}个账号`)
  for(let i = 0; i < runsteptokenArr.length; i++){
    runsteptokenVal = runsteptokenArr[i];
    runstepkeyVal = runstepkeyArr[i];
    console.log(`\n💗💕 开始${$.name}账号【${(i+1)}】 💕💗\n`)
    await $.wait(3000)
    await runstepapp();
  }
})()
.catch((e) => $.logErr(e))
  .finally(() => $.done())
//////////////////////////////////////////////////////////////////
//通知1
function showmsg1() {
  if (notifyInterval != 1) {
    console.log(cc + '\n' + tz);
  }

  if (notifyInterval == 1) {
    $.msg(cc, '\n', tz);
  }
}
//通知2
async function showmsg2() {
  if (notifyInterval == 1) {
    if ($.isNode()) {
      if ((hour == 8 && minute <= 5) || (hour == 12 && minute <= 5) || (hour == 23 && minute <= 5)) {
        await notify.sendNotify($.name, tz)
      }
    } else {
      if ((hour == 8 && minute <= 3) || (hour == 12 && minute <= 3) || (hour == 23 && minute <= 3)) {
        $.msg(cc, '', tz);
      }
    }
  } else if (notifyInterval == 0) {
    console.log(cc + '' + tz);
  }
}
//////////////////////////////////////////////////////////////////
async function runstepapp() {
  console.log(`\n🇨🇳【开始首页签到任务】`)
  await index();
  console.log(`\n🇨🇳【开始赚步数任务】`)
  await steptomoney();
  await getharvest();
  //console.log(`\n🇨🇳【开始福利中心任务】`)
  //await center();
  console.log(`\n1️⃣开始🎡幸运转盘🎡任务`)
  //await advlist();
  await wheelindex()
  console.log(`\n2️⃣开始🤘摇一摇🤘任务`)
  await shakeindex();
  console.log(`\n3️⃣开始🎫刮一刮🎫任务`)
  await gglindex();

  await runstepend();
  console.log(`\n🇨🇳【开始提现任务】`)
  console.log(`👧请使用专门的提现脚本,每天提现0.3元`)

}
///////////////////////////【收尾】//////////////////////////////////
async function runstepend(){
  if(wheeltotalnum >= 7 && shaketotalnum >= 7 && ggltotalnum >= 20){
    console.log(`\n🔂开始🔥燃尽模式🔥任务`)
    await $.wait(8000)
    await wheelincr();
    await $.wait(8000)
    await shakeincr();
    await $.wait(8000)
    await gglincr();
  }
}
///////////////////////////【首页】//////////////////////////////////
//index
async function index() {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/runstep/index?platform=iOS&${runsteptokenVal}&version=${version}`,
     // body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            autosteptime = time(data.data.user_detail.auto_harvest_end_time * 1000)
            userjkb = data.data.user_detail.jkb
            userstep = data.data.user_detail.step
            usercash = data.data.user.money
            $.log(`\n🔸用户信息`);
            $.log(`【用户名】:${data.data.user.nickname}`);
            $.log(`【余额】:¥${data.data.user.money}`);
            $.log(`【健康币】:$${data.data.user_detail.jkb}🏅`);
            $.log(`【步数】:${data.data.user_detail.step}👣`);
            $.log(`\n🙇查询签到状态`);
            for (signlist of data.data.sign_list) {
              signname = signlist.description;
              signdate = signlist.signdate;
              signed = signlist.signed;
              signreach = signlist.reachtime
              if (signed == 0 && signreach == 1) {
                $.log(`【${signdate},${signname}】:未签到✖️`);
                $.log(`开始签到...`);
                await signin();
              } else if (signed == 1 && signreach == 1) {
                $.log(`【${signdate},${signname}】:已签到✔️`);
              } else if (signed == 0 && signreach == 0) {
                $.log(`【${signdate},${signname}】:时间未到⏱`);
              }
            }
            $.log(`\n🔸气泡任务`);
            if (typeof data.data.step_list[0] == "undefined") {
              $.log(`目前没有气泡任务可领取`);
            } else {
              for (bblist of data.data.step_list) {
                bbname = `${bblist.type_text}`;
                bbid = bblist.id;
                bbred = bblist.step
                $.log(`🆔${bbid}\n🎈${bbname}:${bbred}👣`);
                if (bbid >= 0) {
                  await $.wait(15000)
                  await pickstep(bbid)
                }
              }
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//signin
async function signin() {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/runstep/signin?date=${signdate}&platform=iOS&${runsteptokenVal}&version=${version}`,
     // body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`【签到】:成功🎉`);
            $.log(`【步数】:获得${data.data.info.step}👣`);
            $.log(`【健康币】:获得$${data.data.info.jkb}`);
            $.log(`【红包】:获得¥${data.data.info.money}`);

          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//pickstep
async function pickstep(bbid) {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/runstep/pickstep?id=${bbid}&platform=iOS&${runsteptokenVal}&version=${version}`,
    //  body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`领取气泡奖励:${data.msg}🎉\n`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
///////////////////////////【赚步数】//////////////////////////////////
//steptomoney
async function steptomoney() {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/runstep/steptomoney?platform=iOS&${runsteptokenVal}&version=${version}`,
   //   body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            goldcard = data.data.buff.gold_card_duration
            speedcard = data.data.buff.speed_card_duration
            doublecard = data.data.buff.double_card_duration
            autostep = data.data.buff.auto_harvest_duration
            $.log(`\n🙇‍♂️查询状态`);
            $.log(`【未收取步数】:${data.data.unreceived_steps}`);

            if (goldcard == 0) {
              $.log(`【自动收取】:未启用✖️,请前往APP观看广告`);
            } else {
              $.log(`【自动收取】:启用中✔️`);
              $.log(`【截止时间】:${autosteptime}`);
            }
            if (goldcard == 0) {
              $.log(`【财神加成】:未启用✖️,请前往APP观看广告`);
            } else {
              $.log(`【财神加成】:启用中✔️`);
            }
            if (goldcard == 0) {
              $.log(`【加速加成】:未启用✖️,请前往APP观看广告`);
            } else {
              $.log(`【加速加成】:启用中✔️`);
            }
            if (doublecard == 0) {
              $.log(`【翻倍加成】:未启用✖️,请前往APP观看广告`);
            } else {
              $.log(`【翻倍加成】:启用中✔️`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//getharvest
async function getharvest() {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/runstep/getharvest?platform=iOS&${runsteptokenVal}&version=${version}`,
    //  body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`\n🔸收取步数`);
            $.log(`${data.msg}🎉\n`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

///////////////////////////【福利中心】//////////////////////////////////
//advlist
async function advlist() {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/runstep/advlist?advkeys=index&platform=iOS&${runsteptokenVal}&version=${version}`,
    //  body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            $.log(`\n🙇查询当前任务状态`);
            for (advlist of data.data.index.list) {
              advlistname = advlist.name;
              advliststatus = advlist.status;
              $.log(`【${advlistname}】:${advliststatus}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//center
async function center() {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/welfare/center?platform=iOS&${runsteptokenVal}&version=${version}`,
     // body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            $.log(`\n🙇‍♂️查询当前任务状态`);
            for (centerlist of data.data.redpackets) {
              centername = centerlist.title;
              centerstatus = centerlist.status;
              $.log(`【${centername}】:${centerstatus}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
///////////////////////////【转盘】//////////////////////////////////
//wheelindex
async function wheelindex() {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/welfare/wheelindex?platform=iOS&${runsteptokenVal}&version=${version}`,
    //  body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            wheeltotalnum = data.data.user_wheelinfo.total_num
            wheelprizes = data.data.wheel_prizes
            wheelleftnum = data.data.user_wheelinfo.left_num
            wheelexsteps = data.data.user_wheelinfo.exchange_steps
            wheelexjkb = data.data.user_wheelinfo.exchange_jkb
            wheelmd5 = data.data.wheel_md5
            $.log(`\n🙇查询[幸运转盘]状态`);
            $.log(`【抽奖次数】:有${data.data.user_wheelinfo.left_num}次抽奖机会(共${data.data.user_wheelinfo.total_num}次)`);
            $.log(`【步数兑换】:${data.data.user_wheelinfo.exchange_steps}步兑换一次抽奖`);
            $.log(`【健康币兑换】:${data.data.user_wheelinfo.exchange_jkb}元兑换一次抽奖`);
            $.log(`\n🙇‍♂️查询[幸运转盘]7个红包状态`);
            for (wheelredlist of data.data.redpacket_list) {
              wheelredstate = wheelredlist.received;
              wheelredstate2 = wheelredlist.reached;
              wheelredid = wheelredlist.num;
              if (wheelredstate == 0 && wheelredstate2 == 1) {
                $.log(`\n🧧红包(${wheelredid}):未兑换,开始自动兑换...`);
                await wheelpickpacket(wheelredid)
                await $.wait(15000)
              } else if (wheelredstate == 0 && wheelredstate2 == 0) {
                $.log(`\n🧧红包(${wheelredid}):未抽奖`);
              } else if (wheelredstate == 1) {
                wheelredjkb = wheelredlist.detail.jkb;
                wheelredstep = wheelredlist.detail.step;
                wheelredmoney = wheelredlist.detail.money;
                $.log(`🧧已领取红包【${wheelredid}】:\n▪️健康币(${wheelredjkb}),步数(${wheelredstep}),金额(${wheelredmoney})`);
              }
            }
            if(wheeltotalnum <= 8){
              await wheelincr();
            }else{
              $.log(`\n👧幸运转盘已达红包上限,进行下一个任务...\n`);
            }

          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//wheelpick
async function wheelpick() {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/welfare/wheelpick?platform=iOS&${runsteptokenVal}&version=${version}&wheel_md5=${wheelmd5}`,
   //   body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`\n🎲开始抽奖...`);
            if (data.code == 1) {
              $.log(`❎你的机会已用尽`);
            } else if (data.data.info.prizeId == 4) {
              $.log(`恭喜获得大奖🆔(${data.data.info.prizeId}):88红包🧧奖励🎉`);
              tz += `恭喜获得大奖🆔(${data.data.info.prizeId}):88红包🧧奖励🎉\n`
            } else if (data.data.info.prizeId == 7) {
              $.log(`恭喜获得大奖🆔(${data.data.info.prizeId}):888红包🧧奖励🎉`);
              tz += `恭喜获得大奖🆔(${data.data.info.prizeId}):888红包🧧奖励🎉\n`
            } else if (data.data.info.type === "redpacket") {
              $.log(`恭喜获得🆔(${data.data.info.prizeId}):${data.data.info.amount}红包🧧奖励🎉`);
            } else if (data.data.info.type === "steps") {
              $.log(`恭喜获得🆔(${data.data.info.prizeId}):${data.data.info.amount}步数👣奖励🎉`);
            } else if (data.data.info.type === "jkb") {
              $.log(`恭喜获得🆔(${data.data.info.prizeId}):${data.data.info.amount}健康币🏅奖励🎉`);
            } else if (data.data.info.prizeId == 9) {
              $.log(`恭喜获得大奖🆔(${data.data.info.prizeId}):小米手机📱奖励🎉`);
              tz += `恭喜获得大奖🆔(${data.data.info.prizeId}):小米手机📱奖励🎉\n`
            } else if (data.data.info.prizeId == 13) {
              $.log(`恭喜获得大奖🆔(${data.data.info.prizeId}):小米手环💍奖励🎉`);
              tz += `恭喜获得大奖🆔(${data.data.info.prizeId}):小米手环💍奖励🎉\n`
            } else if (data.data.info.prizeId == 3 || data.data.info.prizeId == 10 || data.data.info.prizeId == 14) {
              $.log(`运气不好!获得🆔(${data.data.info.prizeId}):谢谢参与`);
            }

          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//wheelincr
async function wheelincr() {
  $.log(`\n🔸兑换[幸运转盘]机会`);
  if (wheelleftnum == 0 && wheelexsteps <= wheelexjkb * 100 && wheelexsteps <= userstep) {
    $.log(`👧使用【步数】兑换抽奖机会...`);
    await wheelincr1(); //step兑换
    $.log(`\n📠打印幸运转盘奖励清单...`);
    for (wheellist of wheelprizes) {
      wheelname = wheellist.name;
      wheelid = wheellist.prizeId;
      $.log(`🆔(${wheelid}):${wheelname}`);
    }
    await wheelpick()
  } else if (wheelleftnum == 0 && wheelexjkb <= 400 && wheelexjkb <= userjkb) {
    $.log(`👧使用【健康币】兑换抽奖机会...`);
    await wheelincr2(); //jkb兑换
    $.log(`\n📠打印幸运转盘奖励清单...`);
    for (wheellist of wheelprizes) {
      wheelname = wheellist.name;
      wheelid = wheellist.prizeId;
      $.log(`🆔(${wheelid}):${wheelname}`);
    }
    await wheelpick()
  } else if (wheelleftnum == 0 && wheelexsteps >= userstep) {
    $.log(`👧兑换失败:没有足够的兑换筹码...\n`);
  } else if (wheelleftnum != 0) {
    $.log(`👧无需兑换:已存在机会...\n`);
    for (let i = 0; i < wheelleftnum; i++) {
      await wheelpick();
      await $.wait(10000)
    }
  }
}
async function wheelincr1() {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/welfare/wheelincr?platform=iOS&${runsteptokenVal}&type=1&version=${version}`,
   //   body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`兑换抽奖机会:${data.msg}🎉\n`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function wheelincr2() {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/welfare/wheelincr?platform=iOS&${runsteptokenVal}&type=2&version=${version}`,
   //   body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            if (data.code == 2) {
              $.log(`兑换抽奖机会:${data.msg}\n`);
            } else {
              $.log(`兑换抽奖机会:${data.msg}🎉\n`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//wheelpickpacket
async function wheelpickpacket(wheelredid) {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/welfare/wheelpickpacket?index=${wheelredid}&platform=iOS&${runsteptokenVal}&version=${version}`,
   //   body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`👧兑换幸运转盘红包:${data.msg}🎉\n`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
///////////////////////////【摇一摇】//////////////////////////////////
//shakedlist
async function shakedlist() {
  $.log(`\n📠打印摇一摇[优惠价商品]摇奖记录,需要自行兑换！\n`);
  for (shakelist of shakemylog) {
    shaketype = shakelist.type;
    shakeid = shakelist.id;
    shakeamount = shakelist.amount;
    if (shaketype == "goods") {
      shakegoodid = shakelist.goods_info.id;
      shakegoodname = shakelist.goods_info.goods_name;
      shakegoodprice = shakelist.goods_info.price;
      $.log(`🆔${shakegoodid}:优惠价商品(¥${shakegoodprice})`);
      $.log(`🛒${shakegoodname}\n`);
    } /*else if (shaketype == "jkb") {
      $.log(`🆔${shakeid}:\n🏅健康币${shakeamount}元`);
    } else if (shaketype == "steps") {
      $.log(`🆔${shakeid}:\n👣${shakeamount}步`);
    } else if (shaketype == "redpacket") {
      $.log(`🆔${shakeid}:\n🧧红包¥${shakeamount}`);
    }*/
  }
}
//shakeindex
async function shakeindex() {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/welfare/shakeindex?platform=iOS&${runsteptokenVal}&version=${version}`,
   //   body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            shaketotalnum = data.data.user_shakeinfo.total_num
            shakemylog = data.data.mylog
            shakeleftnum = data.data.user_shakeinfo.left_num
            shakeexsteps = data.data.user_shakeinfo.exchange_steps
            shakeexjkb = data.data.user_shakeinfo.exchange_jkb
            $.log(`\n🙇查询[摇一摇]状态`);
            $.log(`【抽奖次数】:有${shakeleftnum}次抽奖机会(共${data.data.user_shakeinfo.total_num}次)`);
            $.log(`【步数兑换】:${shakeexsteps}步兑换一次抽奖`);
            $.log(`【健康币兑换】:${shakeexjkb}元兑换一次抽奖`);
            $.log(`\n🙇‍♂️查询[摇一摇]7个红包状态`);
            for (shakeredlist of data.data.redpacket_list) {
              shakeredstate = shakeredlist.received;
              shakeredstate2 = shakeredlist.reached;
              shakeredid = shakeredlist.num;
              if (shakeredstate == 0 && shakeredstate2 == 1) {
                $.log(`\n🧧红包(${shakeredid}):未兑换,开始自动兑换...`);
                await $.wait(20000)
                await shakepickpacket(shakeredid)
              } else if (shakeredstate == 0 && shakeredstate2 == 0) {
                $.log(`\n🧧红包(${shakeredid}):未抽奖`);
              } else if (shakeredstate == 1) {
                shakeredjkb = shakeredlist.detail.jkb;
                shakeredstep = shakeredlist.detail.step;
                shakeredmoney = shakeredlist.detail.money;
                $.log(`🧧已领取红包【${shakeredid}】:\n▪️健康币(${shakeredjkb}),步数(${shakeredstep}),金额(${shakeredmoney})`);
              }
            }
            await shakedlist();
            if(shaketotalnum <= 8){
              await shakeincr();
            }else{
              $.log(`👧摇一摇已达红包上限,进行下一个任务...\n`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//shakeincr
async function shakeincr() {
  $.log(`\n🔸兑换[摇一摇]机会`);
  if (shakeleftnum == 0 && shakeexsteps <= shakeexjkb * 100 && shakeexsteps <= userstep) {
    $.log(`👧使用【步数】兑换抽奖机会...`);
    await shakeincr1(); //step兑换
    await shakepick()
  } else if (shakeleftnum == 0 && shakeexjkb <= 400 && shakeexjkb <= userjkb) {
    $.log(`👧使用【健康币】兑换抽奖机会...`);
    await shakeincr2(); //jkb兑换
    await shakepick()
  } else if (shakeleftnum == 0 && shakeexsteps >= userstep) {
    $.log(`👧兑换失败:没有足够的兑换筹码...\n`);
  } else if (shakeleftnum != 0) {
    $.log(`👧无需兑换:已存在机会...\n`);
    for (let i = 0; i < shakeleftnum; i++) {
      await shakepick();
      await $.wait(15000)
    }
  }
}
async function shakeincr1() {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/welfare/shakeincr?platform=iOS&${runsteptokenVal}&type=1&version=${version}`,
   //   body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`兑换抽奖机会:${data.msg}🎉\n`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function shakeincr2() {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/welfare/shakeincr?platform=iOS&${runsteptokenVal}&type=2&version=${version}`,
    //  body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            if (data.code == 2) {
              $.log(`兑换抽奖机会:${data.msg}\n`);
            } else {
              $.log(`兑换抽奖机会:${data.msg}🎉\n`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//shakepickpacket
async function shakepickpacket(shakeredid) {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/welfare/shakepickpacket?index=${shakeredid}&platform=iOS&${runsteptokenVal}&version=${version}`,
  //    body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`👧兑换摇一摇红包:${data.msg}🎉\n`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//shakepick
async function shakepick() {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/welfare/shakepick?platform=iOS&${runsteptokenVal}&version=${version}`,
    //  body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`\n🎲开始摇一摇...`);
            if (data.code == 1) {
              $.log(`❎你的机会已用尽`);
            } else if (data.data.info.type === "redpacket") {
              $.log(`恭喜获得🆔(${data.data.info.id}):${data.data.info.amount}红包🧧奖励🎉`);
            } else if (data.data.info.type === "steps") {
              $.log(`恭喜获得🆔(${data.data.info.id}):${data.data.info.amount}步数👣奖励🎉`);
            } else if (data.data.info.type === "jkb") {
              $.log(`恭喜获得🆔(${data.data.info.id}):${data.data.info.amount}健康币🏅奖励🎉`);
            }else if (data.data.info.type === "goods") {
              $.log(`恭喜获得🆔(${data.data.info.goods_info.id})优惠价商品:\n${data.data.info.goods_info.goods_name}:¥${data.data.info.goods_info.price}奖励🎉`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

///////////////////////////【刮刮卡】//////////////////////////////////
//ggledlist
async function ggledlist() {
  $.log(`\n📠打印刮刮卡[优惠价商品]摇奖记录,需要自行兑换！\n`);
  for (ggllist of gglmylog) {
    ggltype = ggllist.type;
    gglid = ggllist.id;
    gglamount = ggllist.amount;
    if (ggltype == "goods") {
      gglgoodid = ggllist.goods_info.id;
      gglgoodname = ggllist.goods_info.goods_name;
      gglgoodprice = ggllist.goods_info.price;
      $.log(`🆔${gglgoodid}:优惠价商品(¥${gglgoodprice})`);
      $.log(`🛒${gglgoodname}\n`);
    } /*else if (shaketype == "jkb") {
      $.log(`🆔${shakeid}:\n🏅健康币${shakeamount}元`);
    } else if (shaketype == "steps") {
      $.log(`🆔${shakeid}:\n👣${shakeamount}步`);
    } else if (shaketype == "redpacket") {
      $.log(`🆔${shakeid}:\n🧧红包¥${shakeamount}`);
    }*/
  }
}
//gglindex
async function gglindex() {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/welfare/gglindex?platform=iOS&${runsteptokenVal}&version=${version}`,
    //  body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            ggltotalnum = data.data.user_gglinfo.total_num
            gglmylog = data.data.mylog
            gglleftnum = data.data.user_gglinfo.left_num
            gglexsteps = data.data.user_gglinfo.exchange_steps
            gglexjkb = data.data.user_gglinfo.exchange_jkb
            $.log(`\n🙇查询[刮刮卡]状态`);
            $.log(`【抽奖次数】:有${gglleftnum}次抽奖机会(共${data.data.user_gglinfo.total_num}次)`);
            $.log(`【步数兑换】:${gglexsteps}步兑换一次抽奖`);
            $.log(`【健康币兑换】:${gglexjkb}元兑换一次抽奖`);
            $.log(`\n🙇‍♂️查询[刮刮卡]7个红包状态`);
            for (gglredlist of data.data.redpacket_list) {
              gglredstate = gglredlist.received;
              gglredstate2 = gglredlist.reached;
              gglredid = gglredlist.num;
              if (gglredstate == 0 && gglredstate2 == 1) {
                $.log(`\n🧧红包(${gglredid}):未兑换,开始自动兑换...`);
                await $.wait(20000)
                await gglpickpacket(gglredid)
              } else if (gglredstate == 0 && gglredstate2 == 0) {
                $.log(`\n🧧红包(${gglredid}):未抽奖`);
              } else if (gglredstate == 1) {
                gglredjkb = gglredlist.detail.jkb;
                gglredstep = gglredlist.detail.step;
                gglredmoney = gglredlist.detail.money;
                $.log(`🧧已领取红包【${gglredid}】:\n▪️健康币(${gglredjkb}),步数(${gglredstep}),金额(${gglredmoney})`);
              }
            }
            await ggledlist();
            if(ggltotalnum <= 21){
              await gglincr();
            }else{
              $.log(`👧摇一摇已达红包上限,进行下一个任务...\n`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//gglincr
async function gglincr() {
  $.log(`\n🔸兑换[刮刮卡]机会`);
  if (gglleftnum == 0 && gglexsteps <= gglexjkb * 100 && gglexsteps <= userstep) {
    $.log(`👧使用【步数】兑换抽奖机会...`);
    await gglincr1(); //step兑换
    await gglpick()
  } else if (gglleftnum == 0 && gglexjkb <= 400 && gglexjkb <= userjkb) {
    $.log(`👧使用【健康币】兑换抽奖机会...`);
    await gglincr2(); //jkb兑换
    await gglpick()
  } else if (gglleftnum == 0 && gglexsteps >= userstep) {
    $.log(`👧兑换失败:没有足够的兑换筹码...\n`);
  } else if (gglleftnum != 0) {
    $.log(`👧无需兑换:已存在机会...\n`);
    for (let i = 0; i < gglleftnum; i++) {
      await gglpick();
      await $.wait(15000)
    }
  }
}
async function gglincr1() {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/welfare/gglincr?platform=iOS&${runsteptokenVal}&type=1&version=${version}`,
    //  body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`兑换抽奖机会:${data.msg}🎉\n`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function gglincr2() {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/welfare/gglincr?platform=iOS&${runsteptokenVal}&type=2&version=${version}`,
    //  body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            if (data.code == 2) {
              $.log(`兑换抽奖机会:${data.msg}\n`);
            } else {
              $.log(`兑换抽奖机会:${data.msg}🎉\n`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//gglpickpacket
async function gglpickpacket(gglredid) {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/welfare/gglpickpacket?index=${gglredid}&platform=iOS&${runsteptokenVal}&version=${version}`,
    //  body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`👧兑换刮刮卡红包:${data.msg}🎉\n`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//gglpick
async function gglpick() {
  return new Promise((resolve) => {
    let url = {
      url: `https://runstep.kujievip.com/welfare/gglpick?platform=iOS&${runsteptokenVal}&version=${version}`,
   //   body: ``,
      headers: JSON.parse(runstepkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`\n🎲开始刮一刮...`);
            if (data.code == 1) {
              $.log(`❎你的机会已用尽`);
            } else if (data.data.info.type === "redpacket") {
              $.log(`恭喜获得🆔(${data.data.info.id}):${data.data.info.amount}红包🧧奖励🎉`);
            } else if (data.data.info.type === "steps") {
              $.log(`恭喜获得🆔(${data.data.info.id}):${data.data.info.amount}步数👣奖励🎉`);
            } else if (data.data.info.type === "jkb") {
              $.log(`恭喜获得🆔(${data.data.info.id}):${data.data.info.amount}健康币🏅奖励🎉`);
            }else if (data.data.info.type === "goods") {
              $.log(`恭喜获得🆔(${data.data.info.goods_info.id})优惠价商品:\n${data.data.info.goods_info.goods_name}:¥${data.data.info.goods_info.price}奖励🎉`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}


/////////////////////////////////////////////////////////////////
//invite
function invite() {
  return new Promise((resolve, reject) => {
    let inviteurl = {
      url: ``,
      headers: JSON.parse(runstepkeyVal),
    }
    $.get(inviteurl, (error, resp, data) => {
      if (error) {
        //$.log("响应错误")
      }
      resolve()
    })
  })
}

//解码URIcode
function URIcodetranslate(code) {
  return decodeURIComponent(code);
}
//毫秒时间戳改日期 2021.01.08 05:30:13
function time(time) {
  var date = new Date(time + 8 * 3600 * 1000);
  return date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '.');
}
//安全获取
function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`⛔️服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}
//毫秒时间戳转时间 20200108
function formatDateTime(inputTime) {
  var date = new Date(inputTime);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return y + m + d;
};

function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}