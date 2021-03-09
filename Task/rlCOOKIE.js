//独立COOKIE文件     ck在``里面填写，多账号换行
let rlurl = `access_token=f2e1d57418bb3d6a0439b494f3468a75&client=1&member_id=195121&user_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJSYW5sdiBKV1QiLCJpYXQiOjE2MTUwMTkzNzcsImV4cCI6MzIzMDAzODc1NCwiYXVkIjoiUmFubHYiLCJzdWIiOiJSYW5sdiIsImRhdGEiOnsibWVtYmVyX2lkIjoxOTUxMjEsImF2YXRhciI6Imh0dHA6XC9cL3Jhbmx2Lmx2ZmFjbi5jb21cL3VwbG9hZFwvcGljdHVyZVwvMjAyMTAyMTZcL2E0ZGZmNDk1MWNmOWViNjM1NmRjNGU2MWY0NGE2MzgyLmpwZyIsIm5pY2tuYW1lIjoiXHU5NjNmXHU0ZTUwIiwibW9iaWxlIjoiMTgxMzMyMTUzNzMifX0.NImNLYBh2ER3DXsYHLPrumY94baHY-qVLFPs2SfLpDw&uuid=AC6B3FB4-4B14-4030-B7E7-E6745D132BE0&video_id=30487`
let rlheader= `{"Cookie":"acw_tc=7ce1a71d16152917837463704e2a230f7d272c79eda27c2df25812ee6f","Accept":"*/*","Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","Host":"ranlv.lvfacn.com","User-Agent":"ran lu shi pin/1.0.50 (iPhone; iOS 13.4.1; Scale/2.00)","Content-Length":"0","Accept-Language":"zh-Hans-CN;q=1, en-US;q=0.9"}`

let rlcookie = {

    rlurl: rlurl,
    rlheader: rlheader,

}

module.exports = rlcookie