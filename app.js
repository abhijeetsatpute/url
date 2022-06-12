const express = require('express')
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');

const app = express();
const port = 3000;

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let browser;
app.get('/url', async(req, res) => {
    // We will be coding here
    let resp = {}
    const page = await browser.newPage();
    try{
        const start = performance.now();
        const {url} = (req.query);
        await page.goto(url);
        const resolvedUrl = await page.url();
        resp.url = resolvedUrl;
        resp.timeTaken = performance.now() - start;
    }catch(err){
        resp.error = 'Error in fetching url';
    }
    
    await page.close();
    return res.send(resp)
});

app.listen(port, async () => {
    try{
        browser = await puppeteer.launch();
    }catch(err){
        console.log("Error in launching browser");
        process.exit()
    }
    console.log(`Server is running on port ${port}`);
});
