const puppeteer = require('puppeteer');
const url = "https://amzn.to/3aXmNL8";
const url2 = "https://bigloot.in/?p=3805";
const url3= "https://cutt.ly/7J1M1cS";
async function run () {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    console.time();
    await page.goto("https://amzn.to/38Qu1zt");
    const resolvedUrl = await page.url();
    console.log(resolvedUrl);
    console.timeEnd();


    console.time();
    await page.goto("https://amzn.to/38Qu1zt");
    const resolvedUrl2 = await page.url();
    console.log(resolvedUrl2);
    console.timeEnd();
    // await page.goto('https://bitly.com');
    // await page.waitForSelector('#shorten_url');
    // await page.type('#shorten_url', resolvedUrl);
    // await page.click("#shorten_btn");
    // let element = await page.$('.short-link')
    // console.log(element);
    // let value = await page.evaluate(el => el.textContent, element)
    // console.log(document.getElementsByClassName('short-link')[0].innerText);
    // console.log(value);
}
run();