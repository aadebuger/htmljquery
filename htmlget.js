var request = require('request');
var cheerio = require('cheerio');
request('http://www.ebaiyin.com/news/32180.shtml', function (error, response, body) {
 if (!error && response.statusCode == 200) {
 console.log(body) // 打印google首页

 $ = cheerio.load(body)
 console.log("title")
 console.log($('.detail-title').text())
 console.log("detail")
 console.log($('.detail-content').text())
 
}
})