//独立COOKIE文件     ck在``里面填写，多账号换行
let DsjurlVal= `{"Accept-Encoding":"gzip, deflate","AppVerCode":"199","userid":"427639c1ff3f35531c4789c0288fd2e6","language":"zh_CN","Host":"api.gaoqingdianshi.com","AppVerName":"1.88","HwDevice":"Iphone","hwModel":"iPhone 7","hwBrand":"iPhone","HwId":"4c58a563fdc00667","countryCode":"CN","ssid":"4391ddf8-99d7-423a-a3a7-2d7a7095531c","Connection":"keep-alive","uuid":"888888","Cache-Control":"no-cache","ispId":"","Accept-Language":"zh-Hans;q=1","User-Agent":"Dsj/Client1.2","MarketChannelName":"Iphone","hwMac":"","Generation":"com.dianshijia.mobile.ios","Accept":"*/*","Authorization":"TjJJM01tWm1NMlF4TkRrMU5tTXhPR0ZrWVRBeVptUXlNR1EwTURBMFl6WT18MTYxODk4MjE1NTgxMzMzNzk3OHwwMzBhNWZmNTViM2UyNWM3ZjNjNTNmYTVmYjFhODRmZTI2ZjE3OTM0","appId":"19227f89ea1a166451593601eb8a1b4f","cityCode":"340800","erid":"13038","routerMac":"","ethMac":"","Cookie":"beegosessionID=29f2731e3a0e8298b753d30501078ccd","areaCode":"340000","gpsCityCode":"341300"}`

let DrawalVal= `http://api.gaoqingdianshi.com/api/v2/cash/withdrawal?code=tx00031&rs=7VYJeivECpohDSsNRt0FrqjBJ5&sign=db8a1e965c032e5daecd77f172798d09`

let cookiearr = {
  DsjurlVal: DsjurlVal,
  DrawalVal: DrawalVal,
 
}

module.exports =  cookiearr
