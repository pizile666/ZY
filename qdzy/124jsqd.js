
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction`;
const method = `POST`;
const headers = {
'Origin' : `https://render-web.shuqireader.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept' : `application/json, text/plain, */*`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.4.0) WindVane/8.6.1 Shuqi-Lite (iPhone11,8__shuqi__v1.0.4.0) 828x1792 Winding(WV_2) WK`,
'Referer' : `https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=13.4.1&ustatus=1&umidtoken=gjVLvOJLOkZCzjV8PMLZ8m6rP7eH5Ptx&net_env=wifi&placeid=111111&user_id=314143411&sn=408ABB01A2C36F704CB9863CDEC1DACC17CC023C&msv=10.0.0&brand=Apple&imei=9FDB7193A9D41AE06D05C1B57AD35ADAF5A80D96&appVer=1.0.4.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTQxNDM0MTEiLCJ1dGRpZCI6IiIsImltZWkiOiJmYXN0XzlGREI3MTkzQTlENDFBRTA2RDA1QzFCNTdBRDM1QURBRjVBODBEOTYiLCJzbiI6ImZhc3RfNDA4QUJCMDFBMkMzNkY3MDRDQjk4NjNDREVDMURBQ0MxN0NDMDIzQyIsImV4cCI6MTYzMzUwNTg3NiwidXNlcklkIjoiMzE0MTQzNDExIiwiaWF0IjoxNjMyOTg3NDc2LCJvYWlkIjoiIiwicGxhdGZvcm0iOiIxMTYifQ.0oS3_k-DYnVOCuLwE6xs6oyZmCImrvAlDgUIC3TBbLbLzw-gNibV8sqKPzpoJ1P1VY50hTh6qaYwOfbqg6P01A&statusBarHeight=44.000000&platform=116&ver=210309&mod=iPhoneXR&wh=828x1792&utype=vip&utdid=YEY%2Fa9CKBdADAKN6AfBw8uNt&idfa=871138B6-BB9C-4BE3-BA29-6A9E5B870542`,
'Accept-Language' : `zh-cn`
};
const body = `clientTimestamp=1633146714&position=601&signInType=1&wua=ktgi_FCQcvccRMYjKkSr1YBO7vzErJD%2Fn9YhSo6Wz19L5sgrQgQ8AMOtSCeW7Pq47MaQ2BQcgF915lPGWAJB4TzRN%2FlvvLQIYuqSxe5vk0c7xd3QT9K6mxQs4a9PnFmbhcgGNesXgnmao2jijoLH8jAetFOpJAFNWqBNzBK%2BTm53DKSJ814bRwHfka2zOOwwy7zHrAprLiBPtGNxaNxfLyoSlf%2B65yxqY3n0wOgdgRIkxKfH95Z09h7wPRhPCosI4dYpcH4Mv00Ra%2Fgs%2FB7%2Bf075oU9YZsqnIl5AcB0Vdab57AiDt0sm108%2FtkZjQtpzPehEBaUiOKlWnWv4W1qlNSnaqkmPLXnS4VvMaDl0TJ%2FnIqrF5sgITPJ0dR0dOy%2B%2BopwoCXoLzKg%2FFo8k2PgkLBSd3vg%3D%3D&miniWua=HHnB_h3G6WXTlyVcT%2FaIAqPMF1ubKzgOczDgj2vpojwiGL3TA4EsFyPgJPUPxw24rNdc64u6fEwbWfVG7e7YHqT%2BKBtdIi4iSinJFQS2X4ioZYPq8%2FaCWvIwx4VrRP5u9wkfy%2Bf97w6fTKHVdrwzTPUUR8g%3D%3D&userId=314143411&umidtoken=gjVLvOJLOkZCzjV8PMLZ8m6rP7eH5Ptx&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.4.0&placeId=111111&timestamp=1633146714&sqSv=1.0&sign=bbdbaa9ad839fdcdb51345255fcbcc86&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D13.4.1%26ustatus%3D1%26umidtoken%3DgjVLvOJLOkZCzjV8PMLZ8m6rP7eH5Ptx%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D314143411%26sn%3D408ABB01A2C36F704CB9863CDEC1DACC17CC023C%26msv%3D10.0.0%26brand%3DApple%26imei%3D9FDB7193A9D41AE06D05C1B57AD35ADAF5A80D96%26appVer%3D1.0.4.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTQxNDM0MTEiLCJ1dGRpZCI6IiIsImltZWkiOiJmYXN0XzlGREI3MTkzQTlENDFBRTA2RDA1QzFCNTdBRDM1QURBRjVBODBEOTYiLCJzbiI6ImZhc3RfNDA4QUJCMDFBMkMzNkY3MDRDQjk4NjNDREVDMURBQ0MxN0NDMDIzQyIsImV4cCI6MTYzMzUwNTg3NiwidXNlcklkIjoiMzE0MTQzNDExIiwiaWF0IjoxNjMyOTg3NDc2LCJvYWlkIjoiIiwicGxhdGZvcm0iOiIxMTYifQ.0oS3_k-DYnVOCuLwE6xs6oyZmCImrvAlDgUIC3TBbLbLzw-gNibV8sqKPzpoJ1P1VY50hTh6qaYwOfbqg6P01A%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210309%26mod%3DiPhoneXR%26wh%3D828x1792%26utype%3Dvip%26utdid%3DYEY%252Fa9CKBdADAKN6AfBw8uNt%26idfa%3D871138B6-BB9C-4BE3-BA29-6A9E5B870542`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
