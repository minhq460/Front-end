const fs = require('fs');
var data = fs.readFileSync('./links.json', { encoding: 'utf8' });
// lấy link trong file links.json
let web = JSON.parse(data);
const scraperObject = {
    async scraper(browser, category) {
        //Mảng chứa toàn bộ dữ liệu bài viết
        // const arr = [];
        //Lặp các link trong file json để sau khi crawl data từ trang này sẽ sang trang khác
        for (var i of web) {
            let url = i.url;
            let page = await browser.newPage();
            console.log(`Điều hướng đến `, url, `...`);
            await page.goto(url, {
                waitUntil: 'load',
                timeout: 0
            });
            //Mảng chứa url truy xuất từ 1 trang
            const urls = await page.$$eval("a.story__title", results =>
                Array.from(results)
                .map(r => r.href)
            );
            console.log(urls);
            //Lấy dữ liệu từ các class trong từng bài báo
            let pagePromise = (link) => new Promise(async(resolve, reject) => {
                let dataObj = {};
                let newPage = await browser.newPage();
                await newPage.goto(link, {
                    waitUntil: 'load',
                    timeout: 0
                });
                dataObj['newTitle'] = await newPage.$eval('h1', text => text.textContent);
                dataObj['p'] = await newPage.$eval('.sapo', text => {
                    text = text.textContent.replace(/(\r\n\t|\n|\r|\t|")/gm, "");
                    return text;
                });
                dataObj['p1'] = await newPage.$eval('.details__content', text => {
                    //xóa các class thừa và các dấu xuống hàng, cách dòng.... trong bài viết
                    $('.player__wrap').remove();
                    $('.imagefull').remove();
                    $('.imagefull').removeAttr('style');
                    $('.video').remove();
                    $('.body-ads').remove();
                    $('.ThanhNienPlayer-control').remove();
                    text = text.textContent.replace(/(\r\n\t|\n|\r|\t|")/gm, "");

                    return text;
                });
                resolve(dataObj);
                await newPage.close();
            });
            //Lặp các link nhỏ để truy xuất vào từng bài viết
            for (link in urls) {
                let currentPageData = await pagePromise(urls[link]);
                // arr.push(currentPageData);
                // console.log(arr);
                //Ghi từng phần tử vào file JSON
                fs.readFile('data.json', 'utf8', function(err, data) {
                    if (err) {
                        console.log(err)
                    } else {
                        const file = JSON.parse(data);
                        file.push(currentPageData);

                        const json = JSON.stringify(file);
                        //ghi file
                        fs.writeFile('data.json', json, 'utf8', function(err) {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log("Đã ghi bài báo vào data.");
                            }
                        });
                    }
                });
            }
            await newPage.close();

        }
        //Ghi dữ liệu vào file json
        // let data = JSON.stringify(arr);
        // fs.writeFile('data.json', data, (err) => {
        //     if (err) throw err;
        //     console.log('Dữ liệu đã được ghi vào tệp data.json');
        // });
    }
}
module.exports = scraperObject;