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
            //thay urls thành 1 khi chỉ muốn crawl giới hạn
            const urls = await page.$$eval("a.story__title", results =>
                Array.from(results)
                .map(r => r.href)
            );
            console.log("Total url: ", urls);
            // const urls = [];
            // for (let i = 0; i < 5; i++) {
            //     urls[i] = urls1[i];
            // }
            console.log(urls);
            //Lấy dữ liệu từ các class trong từng bài báo
            let pagePromise = (link) => new Promise(async(resolve, reject) => {
                let dataObj = {};
                let newPage = await browser.newPage();
                await newPage.goto(link, {
                    waitUntil: 'load',
                    timeout: 0
                });

                if (await newPage.$('.breadcrumbs')) {
                    dataObj['categories'] = await newPage.$eval('.breadcrumbs > span > a >span', text => text.textContent);
                    console.log('có thẻ categories');
                } else {
                    dataObj['categories'] = '';
                    console.log('không tìm thấy categories');
                }

                if (await newPage.$('h1')) {
                    dataObj['newsTitle'] = await newPage.$eval('h1', text => text.textContent);
                    console.log(dataObj['newsTitle']);
                    console.log('có thẻ h1');
                } else {
                    dataObj['newsTitle'] = '';
                    console.log('không tìm thấy h1');
                }

                if (await newPage.$('.details__meta')) {
                    dataObj['pubDate'] = await newPage.$eval('.details__meta .meta > time', text => text.textContent);
                    console.log('có thẻ pubDate');
                } else {
                    dataObj['pubDate'] = '';
                    console.log('không tìm thấy pubDate');
                }

                if (await newPage.$('.sapo')) {
                    dataObj['description'] = await newPage.$eval('.sapo', text => {
                        text = text.textContent.replace(/(\r\n\t|\n|\r|\t|")/gm, "");
                        return text;
                    });
                    console.log('có thẻ description');
                } else {
                    dataObj['description'] = '';
                    console.log('không tìm thấy description');
                }

                if (await newPage.$('#contentAvatar')) {
                    dataObj['imageUrl'] = await newPage.$eval('#contentAvatar', img => img.innerHTML);
                    console.log('có thẻ images');
                } else {
                    dataObj['imageUrl'] = '';
                    console.log('không tìm thấy images');
                }

                if (await newPage.$('.left > h4')) {
                    dataObj['author'] = await newPage.$eval('.left > h4', text => text.textContent);
                    console.log('có thẻ author');
                } else {
                    dataObj['author'] = '';
                    console.log('không tìm thấy author');
                }

                if (await newPage.$('.details__content')) {
                    dataObj['content'] = await newPage.$eval('.details__content', text => {
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
                    console.log('có thẻ content');
                } else {
                    dataObj['content'] = '';
                    console.log('không tìm thấy content');
                }


                resolve(dataObj);
                await newPage.close();
            });
            //Lặp các link nhỏ để truy xuất vào từng bài viết
            for (link in urls) {
                let currentPageData = await pagePromise(urls[link]); //gbh
                // arr.push(currentPageData);
                // console.log(arr);
                console.log(currentPageData['author']);
                //Ghi từng phần tử vào file JSON
                fs.readFile('../assets/data.json', 'utf8', function(err, data) {
                    if (err) {
                        console.log(err)
                    } else {

                        const file = JSON.parse(data);
                        let isExist = file.newsDetail.some(item => item.newsTitle == currentPageData['newsTitle'])
                        console.log('isExist ======== ', isExist)
                        if (!isExist) {
                            file['newsDetail'].push(currentPageData);
                            const json = JSON.stringify(file);
                            //ghi file
                            fs.writeFile('../assets/data.json', json, 'utf8', function(err) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log("Đã ghi bài báo vào data.");
                                }
                            });
                        }
                    }
                });
            }
            await page.close();

        }
    }
}
module.exports = scraperObject;
