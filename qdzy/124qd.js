
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction`;
const method = `POST`;
const headers = {
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Content-Type' : `application/x-www-form-urlencoded`,
'x-sq-req-encrypt' : `sdk`,
'Origin' : `https://render-web.shuqireader.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.5.1.0) WindVane/8.6.1 Shuqi (iPhone11,8__shuqi__v4.5.1.0) 828x1792 Winding(WV_2) WK`,
'x-sq-req-platform' : `iOS`,
'Host' : `ocean.shuqireader.com`,
'Referer' : `https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&ustatus=1&contentRecom=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=314143411&sqExt=sFdgTN6OKsoXdyxNCb0rjK6uw6az%2FYh03g7mDnznsYpl2kzaLKJwKp%2FNVhkgi5tztM2ce3HoBd4Ms24k7oMWKYJUxpQXLdzwvfP0Ex1eGlPYTuDTxztpHFAK1Sf18kIv9lWWjqtDA2R6wFuQ4QVvCwVl4gFZvicFWomakFQj0y4OGlUwIcYYxp92Qbak%2BKcGZFQJZON0c90z%2BH1wMKRS6rVnbxCP0r5fFfNTmCOAiodwV5thOmB8vOMAavxn6WHxr%2FhSiK2R5mENE64Pxc2Bwlf2QzG5FEYsWFcOO0TrR0e7Bg1AJeSm7652%2Be0%3D&msv=8.0.0&brand=Apple&skinVersionPrefix=1&isTeenMode=0&appVer=4.5.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTQxNDM0MTEiLCJ1dGRpZCI6IiIsImltZWkiOiIwNDdCNzI5QkE3RTM3MjMxNzk1NEExQUE5N0Q3MjU3OTM5QTg1N0MzIiwic24iOiJEQzczODg3NjQyMDM0ODUyQkM0RkYyQjdFMzZCQjhBMDcwNzMxMUE0IiwiZXhwIjoxNjMzMTYzOTQ2LCJ1c2VySWQiOiIzMTQxNDM0MTEiLCJpYXQiOjE2MzI2NDU1NDYsIm9haWQiOiIiLCJwbGF0Zm9ybSI6ImlPUyJ9.PAUTdXswAvz20Fx8P0ww-dxnNv4j2DxalveeBbH2-ZG-yqWSUOZ_x4G2vdTMGakz230SE9TqHslpRz_P87IJFQ&skinColor=23B383&platform=iOS&ver=210909&mod=iPhoneXR&personalized=1&skinVersion=1&statusBarHeight=44.000000&wh=828x1792&soft_id=21&utype=vip&skinId=999&sdk=13.4.1`,
'Accept-Language' : `zh-cn`,
'Accept' : `application/json, text/plain, */*`
};
const body = `data=uBs%2BZPTcd4Z7KXccSPl51ea5y8bB%2F%2F0A2njkc37g0eR%2F6xOedeEqdMCuWB1mysMey7qBe2fCKcYxqXsIqIQELJc609FbDr%2F92oiKd3kwZweKPfXW9BYpEid430KRnjdzxz7P9YE%2BZ2Z6iVvAsFAkeGM%2B8AUtkiQFL5DJhVVTzQEKZgkvIPcSteVNHfDyj6JBCncoYONuaIhpgw4oVfcumsIvfk6Q2JdZD%2F902S7HmJZvTuw6FBkjhZo4FuNqzGuWtuRr5dS5ghcpJMYK3r%2FfjgrmSHaCCVp4JCA3JwydQ26RA0kbBfKD%2FJJDzrrZV17jLGwZZZBJ%2BejyHXJ1QRlxPkKC0QpOKyreTkjk1Jcn6JJC%2Fhis6kGtHzVpx0Hc3oYr7YX1MIkNAMnvoidrGnYVmGizbN21Oz2GTpy5st7kRRphsfwIvxAXT7fRsKuT3XMADBf0Ijsu0iUFv01WYnXetCXLqKcUMdkk8f64TvH9tnjP5m2HNG5CfJejHEA9wKa25ocsqK5Vj00PXLVOSxuL6DxrR05I%2B%2BRFZ0IIh9AIYfFtLyW%2BZO9XZ91kHnTielXnBIzX11ldcUZt7cea22Q%2BYIh5qZv4jh1olBwE6wRTjJoPyRGPJ8P%2BQxsM4WTuomCtx1q4azEZyX%2FyNm9Ujgydop7PubD2vdfmn2v8WlKWj9M4ewFWIawLF%2BPz6D32s%2B2jdxLBYpSFWsQdYozTMZBr6wVlYr%2FmwEjZSLYWx3HnwhpJDcV95j%2B%2F308b7opLHZl0Oo2L%2FbM5YxZ%2B9WebhLlBkzgUU2YMqrvkWeAXUawJKVyNuuCLwbSHbNxMGs19cus3PT9inc%2B3WvAeKrNFYPg0lnYbBDpUQUyLaJhagbtZnKyBwsO5wFn1XqsrdMaRDX2CptmDa%2B336jZNplh6yv5HJ5jMSUnDJGH35%2BtLLlSWhYp31UNed%2BS%2FREVBhc9hRFWs9%2F865afT6mC8CqRwsatQw6VU9XQsrb2J32w08AQ6Z3zDCSlLikfOq6%2FMLs0bQ6bcaipAO5wwwc6aoEZvcfP3AFNmApKGbudP%2B4%2FUzy4IA9z18FFgeqREw4vAEBI2CtnUUVOhZsR6n8PlOgWb73Tb6OABTcXAmNAcTqV7n%2FJrshS53P3JfXyDVfc1MVn7506SHeObJB0hBtAfvn%2Fxq0yZqdoG1FCuF8DDaVZom3c%2FAs%2F2qAAKv1IPDJgumakzl%2FK5ZwAo9Q58kna9WCqiFKRK%2FQeAb2EKiic5cuzr6WbS%2B%2FFBZddTJGJJ2RpxdWd7rBZh39Ir6tCs7bcHhE5r3xJzm78p%2BSRQsy%2B9wJwfvmkgEzCDxRHwYryQBW6zfs9%2BkVEGWQgzf40yb%2F8QENZ3H4vsQmOqz%2FdsGOxjBLfShIBsmIqtFGSvPplqHgieDX8SkCzm70TeIJNO9w8hQjF9cpxj20Bwdg05AmmPONzRp6NnTWIhcXegvQWgHvhtuYMiDB0AHCiw6O5K6tfsDU2x6KQaar%2BFrCjoJE8Ij%2F%2FzLVvtcBugKOOakV55E6L366xiQEieexmRzbQJNBKpnnYN2zsncX8BXtXVGIa4KTMj26J6%2BwTdtI5TcfCI5PyeY0WFemQ%2FPq0s6f%2BFW0Vv0oShulltUja0Hw1%2BcBVwlFogVUPKgIBmDEKseJTtJ6DZzx%2F5LS%2BUixlmg%2BB0g85P5p6cQ6bhYptvkr8G0Hw%2BrTzul%2Bi6IA%2FfsbW8o2EpOeDkO3V3ukv3f%2B52odMn32noM6hk3415UiDgu0jEgS3AnmsqLqu3A6CaFd9%2FdRPMeymLirTdUcwVOitJlfFR1ptrJvW%2Bf9%2FWDbqj7CjC7YydsquywoUGujfrjnh7FQXnKY6HuMs%2Bm0UEqMo%2F4w%2BjfdgETsG9E19A3y%2FAdfyjOlRf%2FaDtO8BnnmrWGDsGdlBXSBqOWoyuBYIpfnO93jg%2BhwG%2B23ImaBtyOfyyDF4LvX%2Fo78uioVO6zZo9LD51%2B%2BtS5b1M8zBLYWldWEz0pgYsNE8kWjj03i01fsj00AteBx8dBUW3HrFt1O9lpUbsj4qKqRiC96G5QDGxxiGU72pJO1IiWFuIyyCZIGaJaDewzmTyxqRQ%2BEW49EVON4XjDz%2FkxiiCM%2Ffiwt1FhneLta3vOVa6CqFz9yBaEvLCk1r6nfWaYkxO5tFGAu4WPCbvWZSlS7rpeGDnFK2UiZ71%2FEn%2B3Uhdu5K2HUM7HrhyQw9M0agvbkvN5rXcjlW0cKfhshKx7SLXcx%2FseXWdZC%2BjlT6tQb1wzv0V5XJDvDy0j320wHyIGQQSKOSXDBy2S3QmBUpiL%2Ft5MKRRFfMVQwKk8YUwKmgvMU17Bcj7Rg2EU0AZ5MHyrp%2FKOxquixZv9IS0tvo%2Frz4rhqg9bJqzN9UhaU%2BHC4ULC3Osgc9ulLxCi1NtJ%2BByDEwhQIRk%2BG2skYcDzHKI9i355fkGhFo2i4nzrrrK62hsdg8E0Q9KPeBhRicYwuOIVosugJi5%2FsCHmTfTX7AJbF4v9ezqVL3QVGg3goRSi4rxPxMI7GgF04Q%2FX8f08qp5oSjuzAFJOzAYhivTak1ePdA%2FibZIEqB8EeNu7np6Le7s2X%2BRsLNfg0vRo6IJDiC7vVGfZt4EkTeYhjm%2FfawfLljR6Ia5R7ig1rwwFc9auKI%3D`;

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
