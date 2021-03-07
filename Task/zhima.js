/* ziye 
github地址 https://github.com/6Svip120apk69
TG频道地址  https://t.me/ziyescript
TG交流群   https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接  https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/ziye.boxjs.json
转载请备注个名字，谢谢
⚠️芝嫲视频
2.13 制作
2.15 修复刷新问题,修复部分问题,点夺宝获取ck
2.24 增加自动提现，需要自行获取对应数值的body，并填写CASH变量
2.24-2 修复刷新错误，务必更新
2.25 修复版本更新带来的晶石收取问题
⚠️一共1个位置 1个ck  👉 1条 Secrets
多账号换行
点击 https://h5.sxsjyzm.com/sesameH5/public/sesameLogin/register.html?onlyid=612545154 下载APP
或者商店搜索 芝嫲视频 邀请码612545154
谢谢支持
第一步 添加  hostname=api.sxsjyzm.com,
第二步 添加body重写 
点击夺宝   获取body
zhimabodyVal 👉ZM_zhimabody
CASH 👉ZM_CASH   可设置0.3 0.5 1 5 10 30 50 100 等等，设置完后自行获取对应body
⚠️主机名以及重写👇
时间建议设置一小时一次   如 0 * * * *
hostname=api.sxsjyzm.com,
############## 圈x
#芝嫲视频获取body
https:\/\/api\.sxsjyzm\.com\/* url script-request-body https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/zhima.js   
############## loon
#芝嫲视频获取body
http-request https:\/\/api\.sxsjyzm\.com\/* script-path=https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/zhima.js,requires-body=true, tag=芝嫲视频获取body
############## surge
#芝嫲视频获取body
芝嫲视频获取body = type=http-request,pattern=https:\/\/api\.sxsjyzm\.com\/*,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/zhima.js 
 
*/




const $ = Env("芝嫲视频");
$.idx = ($.idx = ($.getval('zhimaSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;
const COOKIE = $.isNode() ? require("./zhimaCOOKIE") : ``;
const logs = 0; // 0为关闭日志，1为开启
const notifyttt = 1 // 0为关闭外部推送，1为12 23 点外部推送
const notifyInterval = 2; // 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知 
$.message = '', COOKIES_SPLIT = '', CASH = '', ddtime = '';
const zhimabodyArr = [];
let zhimabodyVal = ``;
let middlezhimabody = [];

const zhimatxbodyArr = [];
let zhimatxbodyVal = ``;
let middlezhimatxbody = [];

if ($.isNode()) {
    // 没有设置 ZM_CASH 则默认为 0 不提现
    CASH = process.env.ZM_CASH || 0;
}

if ($.isNode() && process.env.ZM_zhimabody) {
    COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
    console.log(
        `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
    );
    if (
        process.env.ZM_zhimabody &&
        process.env.ZM_zhimabody.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlezhimabody = process.env.ZM_zhimabody.split(COOKIES_SPLIT);
    } else {
        middlezhimabody = process.env.ZM_zhimabody.split();
    }

    if (
        process.env.ZM_zhimatxbody &&
        process.env.ZM_zhimatxbody.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlezhimatxbody = process.env.ZM_zhimatxbody.split(COOKIES_SPLIT);
    } else {
        middlezhimatxbody = process.env.ZM_zhimatxbody.split();
    }
}
if (COOKIE.zhimabodyVal) {
    ZM_COOKIES = {
        "zhimabodyVal": COOKIE.zhimabodyVal.split('\n'),
        "zhimatxbodyVal": COOKIE.zhimatxbodyVal.split('\n'),
    }
    Length = ZM_COOKIES.zhimabodyVal.length;
}
if (!COOKIE.zhimabodyVal) {
    if ($.isNode()) {
        Object.keys(middlezhimabody).forEach((item) => {
            if (middlezhimabody[item]) {
                zhimabodyArr.push(middlezhimabody[item]);
                zhimatxbodyArr.push(middlezhimatxbody[item]);
            }
        });

    } else {
        zhimabodyArr.push($.getdata("zhimabody"));
        zhimatxbodyArr.push($.getdata("zhimatxbody"));
        // 根据boxjs中设置的额外账号数，添加存在的账号数据进行任务处理
        if ("zhimaCASH") {
            CASH = $.getval("zhimaCASH") || '0';
        }
        let zhimaCount = ($.getval('zhimaCount') || '1') - 0;
        for (let i = 2; i <= zhimaCount; i++) {
            if ($.getdata(`zhimabody${i}`)) {
                zhimabodyArr.push($.getdata(`zhimabody${i}`));
                zhimatxbodyArr.push($.getdata(`zhimatxbody${i}`));


            }
        }
    }


    if (zhimabodyArr == '') {
        Length = 0
    } else Length = zhimabodyArr.length


}


function GetCookie() {
    if ($request && $request.url.indexOf("loot") >= 0 && $request.url.indexOf("index") >= 0) {
        const zhimabodyVal = $request.body;
        if (zhimabodyVal) $.setdata(zhimabodyVal, "zhimabody" + $.idx);
        $.log(
            `[${$.name + $.idx}] 获取zhimabodyVal✅: 成功,zhimabodyVal: ${zhimabodyVal}`
        );
        $.msg($.name + $.idx, `获取zhimabodyVal: 成功🎉`, ``);
    }

    if ($request && $request.url.indexOf("userWxCashSubmit") >= 0) {
        const zhimatxbodyVal = $request.body;
        if (zhimatxbodyVal) $.setdata(zhimatxbodyVal, "zhimatxbody" + $.idx);
        $.log(
            `[${$.name + $.idx}] 获取zhimatxbodyVal✅: 成功,zhimatxbodyVal: ${zhimatxbodyVal}`
        );
        $.msg($.name + $.idx, `获取zhimatxbodyVal: 成功🎉`, ``);

    }

}
console.log(
    `================== 脚本执行 - 北京时间(UTC+8)：${new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
  ).toLocaleString()} =====================\n`
);
console.log(
    `============ 共 ${Length} 个${$.name}账号=============\n`
);


//时间
nowTimes = new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
);
//今天
Y = nowTimes.getFullYear() + '-';
M = (nowTimes.getMonth() + 1 < 10 ? '0' + (nowTimes.getMonth() + 1) : nowTimes.getMonth() + 1) + '-';
D = (nowTimes.getDate() < 10 ? '0' + (nowTimes.getDate()) : nowTimes.getDate());
ddtime = Y + M + D;
console.log(ddtime)

function tts(inputTime) {
    if ($.isNode()) {
        TTS = Math.round(new Date().getTime() +
            new Date().getTimezoneOffset() * 60 * 1000).toString();
    } else TTS = Math.round(new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toString();
    return TTS;
};



//当前10位时间戳
function ts(inputTime) {
    if ($.isNode()) {
        TS = Math.round((new Date().getTime() +
            new Date().getTimezoneOffset() * 60 * 1000) / 1000).toString();
    } else TS = Math.round((new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000) / 1000).toString();
    return TS;
};
//今天0点时间戳时间戳
function daytime(inputTime) {
    if ($.isNode()) {
        DAYTIME =
            new Date(new Date().toLocaleDateString()).getTime() - 8 * 60 * 60 * 1000;
    } else DAYTIME = new Date(new Date().toLocaleDateString()).getTime();
    return DAYTIME;
};
//时间戳格式化日期
function time(inputTime) {

    if ($.isNode()) {
        var date = new Date(inputTime + 8 * 60 * 60 * 1000);
    } else var date = new Date(inputTime);


    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y + M + D + h + m + s;
};
//随机udid 大写
function udid() {
    var s = [];
    var hexDigits = "0123456789ABCDEF";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
}
//随机udid 小写
function udid2() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
//编码
function encodeUnicode(str) {
    var res = [];
    for (var i = 0; i < str.length; i++) {
        res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    }
    return "\\u" + res.join("\\u");
}
//解码
function decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    return unescape(str);
}
let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
    GetCookie()
    $.done();
} else {
    !(async () => {
        await all();
        //await $.wait(1000);
        await msgShow();
    })()
    .catch((e) => {
            $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
        })
        .finally(() => {
            $.done();
        })
}
async function all() {
    if (!Length) {
        $.msg(
            $.name,
            '提示：⚠️请点击前往获取CK  https://h5.sxsjyzm.com/sesameH5/public/sesameLogin/register.html?onlyid=612545154\n',
            'https://h5.sxsjyzm.com/sesameH5/public/sesameLogin/register.html?onlyid=612545154', {
                "open-url": "https://h5.sxsjyzm.com/sesameH5/public/sesameLogin/register.html?onlyid=612545154"
            }
        );
        return;
    }
    for (let i = 0; i < Length; i++) {

        if (COOKIE.zhimabodyVal) {
            zhimabodyVal = ZM_COOKIES.zhimabodyVal[i];
            zhimatxbodyVal = ZM_COOKIES.zhimatxbodyVal[i];
        }
        if (!COOKIE.zhimabodyVal) {
            zhimabodyVal = zhimabodyArr[i];
            zhimatxbodyVal = zhimatxbodyArr[i];
        }


        O = (`${$.name + (i + 1)}🔔`);
        await console.log(`-------------------------\n\n🔔开始运行【${$.name+(i+1)}】`)


        console.log(`\n${O}\n========== 【${O}】 ==========\n`);
        $.message += `\n${O}\n========== 【${O}】 ==========\n`;
        let cookie_is_live = await zhimasx(); //运行
        if (!cookie_is_live) {
            continue;
        }
        await zhima() //收取晶石       
        if (nowTimes.getHours() === 17 && CASH >= 0.3) {
            await zhimatx(); //提现
        }
        await zhimasx(); //刷新
    }
}
//通知
function msgShow() {
    return new Promise(async resolve => {
        if (notifyInterval != 1) {
            console.log($.name + '\n' + $.message);
        }
        if (notifyInterval == 1) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 2 && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 3 && (nowTimes.getHours() === 6 || nowTimes.getHours() === 12 || nowTimes.getHours() === 18 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyttt == 1 && $.isNode() && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10))
            await notify.sendNotify($.name, $.message);
        resolve()
    })
}



//zhimasx
function zhimasx(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {


            let url = {
                url: `https://api.sxsjyzm.com/api2/loot/index`,
                headers: {
                    'Accept': `*/*`,
                    'wToken': ``,
                    'Accept-Encoding': `gzip, deflate, br`,
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Connection': `keep-alive`,
                    'Host': `api.sxsjyzm.com`,
                    'User-Agent': `APP/5.0 CFNetwork/1206 Darwin/20.1.0`,
                    'Accept-Language': `zh-cn`
                },
                body: zhimabodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 芝嫲刷新🚩: ${data}`);

                    $.zhimasx = JSON.parse(data);

                    if ($.zhimasx.code == 200) {

                        console.log(`【芝嫲刷新】:刷新成功\n`)
                        $.message += `【芝嫲刷新】:刷新成功\n`
                        resolve(true)

                    }
                    if ($.zhimasx.code == 2970) {
                        $.msg(O, time(Number(tts())) + "❌❌❌COOKIE失效");
                        if ($.isNode()) {
                            notify.sendNotify(O, time(Number(tts())) + "❌❌❌COOKIE失效");
                        }
                        resolve(false)
                    }

                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}


//zhima
function zhima(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {


            let url = {
                url: `https://api.sxsjyzm.com/api2/loot/supquickgetloot`,
                headers: {
                    'Accept': `*/*`,
                    'wToken': ``,
                    'Accept-Encoding': `gzip, deflate, br`,
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Connection': `keep-alive`,
                    'Host': `api.sxsjyzm.com`,
                    'User-Agent': `APP/5.0 CFNetwork/1206 Darwin/20.1.0`,
                    'Accept-Language': `zh-cn`
                },
                body: zhimabodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 芝嫲收晶石🚩: ${data}`);

                    $.zhima = JSON.parse(data);


                    if ($.zhima.code == 200) {

                        console.log(`【晶石收取】:${time(Number(tts()))}领取晶石成功,冷却3小时\n`)
                        $.message += `【晶石收取】:${time(Number(tts()))}领取晶石成功,冷却3小时\n`


                    }



                    if ($.zhima.code == 1002) {

                        console.log(`【晶石收取】:${$.zhima.mess},间隔3小时才能收取\n`)
                        $.message += `【晶石收取】:${$.zhima.mess},间隔3小时才能收取\n`

                    }


                    if ($.zhima.code == 156) {

                        console.log(`【晶石收取】:${$.zhima.mess}\n`)
                        $.message += `【晶石收取】:${$.zhima.mess}\n`

                    }


                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })

        }, timeout)
    })
}


//zhimatx
function zhimatx(timeout = 0) {

    return new Promise((resolve) => {

        setTimeout(() => {
            let url = {
                url: `https://api.sxsjyzm.com/api2/loot/userWxCashSubmit`,
                headers: {
                    'Accept': `*/*`,
                    'wToken': ``,
                    'Accept-Encoding': `gzip, deflate, br`,
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Connection': `keep-alive`,
                    'Host': `api.sxsjyzm.com`,
                    'User-Agent': `APP/5.0 CFNetwork/1206 Darwin/20.1.0`,
                    'Accept-Language': `zh-cn`
                },
                body: zhimatxbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 芝嫲提现🚩: ${data}`);
                    $.zhimatx = JSON.parse(data);

                    console.log(`【芝嫲提现${CASH}元】:${$.zhimatx.mess}\n`)
                    $.message += `【芝嫲提现${CASH}元】:${$.zhimatx.mess}\n`
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}


// prettier-ignore
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
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log(``, `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
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
                i = i ? i.replace(/\n/g, ``).trim() : i;
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
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ``;
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, ``) : e
                } catch (t) {
                    e = ``
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
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + ``).substr(4 - RegExp.$1.length)));
            for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr((`` + e[s]).length)));
            return t
        }
        msg(e = t, s = ``, i = ``, r) {
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
            let h = [``, "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log(``, `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log(``, `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log(``, `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}