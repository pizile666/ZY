//独立COOKIE文件     ck在``里面填写，多账号换行
let DsjurlVal= `{"Accept-Encoding":"gzip, deflate","AppVerCode":"193","userid":"611094db94a19439c6ef4502800b167e","language":"zh_CN","Host":"api.gaoqingdianshi.com","AppVerName":"1.85","hwModel":"iPhone11,8","hwBrand":"iPhone","countryCode":"CN","ssid":"","Connection":"keep-alive","uuid":"ffae5b66ea1846919f415ce67da435a2","Cache-Control":"no-cache","ispId":"","Accept-Language":"zh-Hans;q=1","User-Agent":"Dsj/Client1.2","MarketChannelName":"Iphone","hwMac":"","Generation":"com.dianshijia.mobile.ios","Accept":"*/*","Authorization":"WlRJNFlUQXlZbUk1WlRNM05qTTBNV1kwTWprNVlqRXdOelF5TW1FNU9EZz18MTYxNjU5MjMxMDk4NjA1NTAzNnw0ZTY4ODdhNjNkYmIzYTE4ZDE0NzE2NDA4YWUyNWQ3MTFkZjFmMTI4","appId":"19227f89ea1a166451593601eb8a1b4f","cityCode":"341300","erid":"11069","routerMac":"2c6142b1a8","ethMac":"","Cookie":"beegosessionID=004441f127b84c696137a5323b361586","areaCode":"340000","gpsCityCode":"341300"}`

let DrawalVal= `http://api.gaoqingdianshi.com/api/v2/cash/withdrawal?code=tx00031&rs=OfgSQ0UVoDB9nl3TYTITfxk9n3&sign=84d0da74da27487cf8b370cb7d00aa29`

let cookiearr = {
  DsjurlVal: DsjurlVal,
  DrawalVal: DrawalVal,
 
}

module.exports =  cookiearr
