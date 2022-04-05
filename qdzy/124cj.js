
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR`;
const method = `POST`;
const headers = {
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Origin' : `https://render-web.shuqireader.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPhone11,8__shuqi__v4.3.1.0) 828x1792 Winding(WV_3) WK`,
'x-sq-req-platform' : `iOS`,
'x-sq-timestamp' : `1649051161814`,
'Host' : `ocean.shuqireader.com`,
'Referer' : `https://render-web.shuqireader.com/render/sq-base/page/welfare_turntable/?serviceWorkerOn=1&spm=a2oun.page_render_sq_welfare_welfare_page_v2.%E6%8B%9B%E8%B4%A2%E7%8C%AB.turntable_in_0&sdk=13.4.1&utdid=YDY88Onh8DADALt%2BDDpBJrv9&ustatus=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=314143411&sn=DC73887642034852BC4FF2B7E36BB8A0707311A4&umidtoken=ZFBLC6JLOvoa0zV%2F70uiy6sOQIX9GqZm&msv=8.0.0&brand=Apple&imei=047B729BA7E372317954A1AA97D7257939A857C3&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTQxNDM0MTEiLCJ1dGRpZCI6IiIsImltZWkiOiIwNDdCNzI5QkE3RTM3MjMxNzk1NEExQUE5N0Q3MjU3OTM5QTg1N0MzIiwic24iOiJEQzczODg3NjQyMDM0ODUyQkM0RkYyQjdFMzZCQjhBMDcwNzMxMUE0IiwiZXhwIjoxNjQ5NTYzODc3LCJ1c2VySWQiOiIzMTQxNDM0MTEiLCJpYXQiOjE2NDkwNDU0NzcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6ImlPUyJ9.HIX_q9DdUvF_KExwWk5EuQNpADLKYvsnhau70u1IUcGo_rx28a3tUxsUcY4uaHnHrvJ5HIBcnen_kTMou8vCxg&skinColor=23B383&platform=iOS&ver=210111&mod=iPhoneXR&statusBarHeight=44.000000&skinVersion=1&wh=828x1792&soft_id=21&utype=vip&skinId=999&idfa=9AE1A17E-6D0D-42C2-AB74-49CE945B63A0`,
'Accept-Language' : `zh-cn`,
'Accept' : `application/json, text/plain, */*`
};
const body = `activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&wua=HIVW_8s%2FlW3jaVTOpjP6AcXfmUQKxp6cSL0qtIKm8nHCBiKgMS5JSUG1qh3aerbz6jHGbc0VaX9Zsj6cjiu6goeuftY%2FHm4cAlteQJ3goS%2BmqR7X%2B%2BjHTy6jRIanOrDpExJYRSWVHmR7jV4zq0qr1%2BXeez6Mz1YDQRqcnux3vHSPMINP0rsAs93ihEs2NFhe9Npq%2FlHqoV7h2gngh9lKatuUVyW%2BQmbYH6N3%2Fe%2F%2BT%2B5Vb2cjXbCoRvUORESXx36X4uvVB5%2FSJZXt75V12Hgf98wcFfOJifo7XQXefS5WVy4Kb3AFlbwcSojTgC9CA54S8o1jgrhr9FPGOPRqGtS1Sb45%2BsJ1h00Wvahx1IkgoLQDq%2FkFug%2Bxbu1HFl1GyFnCt8bs6RMdt4r6Wf94QHXxAJ9GCcA%3D%3D&ua=140%2358Mdq9WczzWgTzo2%2BQssKtN8s7adwjUNYBvU2n5%2FeMM3GhiOnqfcgPTe6xdEbtzJrpJqlbzxkVHWupBCzzcz12K7l3MzzPzbVXlqlbrxG0j%2BV3hqabzi21e6lDTdY%2BIQiO%2FqlbzzEPc%2BVoXc4tP0MI2y7yDY5anrHRqjELrEilhjYBVkYXOO%2Fx3ZcnoIF6iQNLDUoAwhMEyzHy99aO3NeYZO7YFDGDPhjPTxGaTBQKzmx1L3JqqFX2B9708PIwEuG79wrhV644x3OUqZQAWhfQvyQjYv30S9SB3f9oFYWq4fLa9IFHS6l1WRUeeTWIdysk%2FGdG%2BQXhIJCfkDe3%2FfLVZqiybqBGrxPVih0Bpb8LfBHU%2BjjIwxvX7VECF9gnGQTAehFuOk8pmsry4Xf5dvhfXCArsXrNadhfuccO4Or3lfO5yjAQ7HVq44M%2FWdun%2BW3cPIMZl3895AzvJ8i9IIQmMzntQBzk2kG%2FnWKsP5YPkoQmV0Y9shoANJY9%2FY49BVDyX5M79wJ%2F8LfjDeygsrypbSWH0jFgDm5w0KrD184CtKaQGOGp2H8Xp3Jffs5zfYwR7SznmQNOpacfHYTWkBBT39KyRO8FtPlaULF7IT%2Fe9P5IjWUlcGheLE2fM%2FgY9Tpx3ieJ%2BWK7VwhgXstAj5LIA1Z%2B47VRdMDo12TPaq0BVmS95oqri1aD5fBi1SbGc2vxk83symMBRVsdHfB0mBPtZLnlZ8lsypAc5TasWYN4bp5ki3vjFVL8vlbGne2QbUY86lI%2Bo%2Baq9%2FNAuDrB3zw6UPhr2m%2BISCznb28Qzp%2FIlsvLzySCXmdDQ3B%2BM17Z%2BqmtAf7%2BkUuSzy5nrWwWWaPhFxiuCB6vp7%2BIsh7G2nw2CYpIlbc9TEoyIDn2Iw%2Boe7tUTL42Z3JKxUz9rcIZUxyPPmqpvS9JS%2FSAhppXqyQ0YjXx6zPspIDraEdr481UPPlkJSfUolyElAnKkXNDO2GnjWykGxPWNc9KDaDpBAb0DL73kaVt8%2BY6cOJYLCEawr5cGyEQL9KO3nJFepnlPjOv0T2PlrSGRLO1mbb27k9z6qP3m1uvmbvo8tNT9MJZEjCj9%2BQc2Cx%2FFEcLkyoneSDQhw1ahy%2Bve%2BWG9Vl6JrWVqYx1Mk4ZSPraGdaUPSlvecNzXz2%2Fwm36d5hxV%2FCIWqWlHY5m%2FevrdFCPdFOC8fP4xEXSyeUZCGZSHTiLK4lirvGlybtvnYlZhWIqcZCmwuBbUY81AIZgHc53VnV6UdcbsLOckBHtwqq1OR0qca6FOrhAkmZaqy8lkQS6vZ5rmc77q7hh32C3T95o7YeQ1T5uq12p0Gu%2FvFtxLGid7vZQEck%2B%2F4HPmC4Q6j6%2BkVITdcTyyhWr61muGVKRqADRsh9iBZuVDOaFv%2F8nWHDe%2FyW5psb7W2Z48ZGoCIVi%2B4TSryXSr0iacenefZxhAjNOG1JamnqHJG2Ja0uZjI%2F%2FBmXD5WlZ%2BYkdMqepVrLorsIwx%2B%2BrpVK%2FSbpIh6P%2FZG0WlQSdheOMLialg1JCRIiXU2ppPaptK8B0xpzVlTdhObrECh4q%2F0qTZSZhtDGAYJDUUvTcQNm1T2Xpi%2FS109YYf4eOMm40anykiPyplCTiDl9sp7XKtZf6g6Dax0TasQTT1FEh0lNO6ps1w1C%2BgQC0PNcmji4k4qH7qbohYAU%2BFKViSkdQ7kj7%2Bb8TGpRblmdSf5kFFU8WuzXeyck49M3ATW9HLObpvmlqjQq7CB3wUyb9KDl7tGHa5ao6AeovRNt%2FcfCBpmaR9ux6KBM7Y9MXE%2FiJprSI3CjFw7o%2F%2BrFQX94u3n5E9Xcr%2BAURT0Tgmg%2BnEkDC29mP9oDhbuzZ7Eb3eaKZHHBk283vy%2BK%2BedQ8%2B%3D&miniWua=HHnB_5gNzjQx%2FL4UMk%2BuEVObCzkrg9MiGV587z960z6Np93EpeXpgaIxJjVa1SCGhXSuDrm6ZItTbweZwXTQNQBMxS6KaA%2F1xXEFmgd2vtdfDMUjW6934OFpWd%2FW2VYoPGo8cv%2FtWLKBd211%2BTsafX3SESQ%3D%3D&umidtoken=ZFBLC6JLOvoa0zV%2F70uiy6sOQIX9GqZm&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&userId=314143411&platform=1&appVer=4.3.1.0&ver=210111&placeId=111111&timestamp=1649051162&sqSv=1.0&sign=bf903f509f5d3b0e553e1da456e35c9d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D13.4.1%26utdid%3DYDY88Onh8DADALt%252BDDpBJrv9%26ustatus%3D1%26firstPlaceid%3D111111%26netEnv%3D4g%26placeId%3D111111%26userId%3D314143411%26sn%3DDC73887642034852BC4FF2B7E36BB8A0707311A4%26umidtoken%3DZFBLC6JLOvoa0zV%252F70uiy6sOQIX9GqZm%26msv%3D8.0.0%26brand%3DApple%26imei%3D047B729BA7E372317954A1AA97D7257939A857C3%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTQxNDM0MTEiLCJ1dGRpZCI6IiIsImltZWkiOiIwNDdCNzI5QkE3RTM3MjMxNzk1NEExQUE5N0Q3MjU3OTM5QTg1N0MzIiwic24iOiJEQzczODg3NjQyMDM0ODUyQkM0RkYyQjdFMzZCQjhBMDcwNzMxMUE0IiwiZXhwIjoxNjQ5NTYzODc3LCJ1c2VySWQiOiIzMTQxNDM0MTEiLCJpYXQiOjE2NDkwNDU0NzcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6ImlPUyJ9.HIX_q9DdUvF_KExwWk5EuQNpADLKYvsnhau70u1IUcGo_rx28a3tUxsUcY4uaHnHrvJ5HIBcnen_kTMou8vCxg%26skinColor%3D23B383%26ver%3D210111%26mod%3DiPhoneXR%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D828x1792%26softId%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D9AE1A17E-6D0D-42C2-AB74-49CE945B63A0%26platform%3D1`;

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
