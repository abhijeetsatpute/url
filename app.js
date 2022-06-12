const express = require('express')
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');

const app = express();
const port = 3000;

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/url', async(req, res) => {
    // We will be coding here
    const {url} = (req.query);
    console.log(url);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.time();
    await page.goto(url);
    const resolvedUrl = await page.url();
    console.log(resolvedUrl);
    console.timeEnd();
    res.send(resolvedUrl)

});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
