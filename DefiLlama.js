import puppeteer from "puppeteer";

export default class DeFiLlama {
    constructor() {
        this.browser = null;
        this.page = null;
    }

    delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async init() {
        this.browser = await puppeteer.launch({
            headless: false,
            slowMo: true,
            defaultViewport: null,
            args: ["--start-maximized"],
        });

        this.page = await this.browser.newPage();
    }

    async goToPage(url) {
        await this.page.goto(url);
    }

    async fillForm() {
        //select the chain
        const chainSelector = await this.page.waitForXPath(
            '//*[@id="__next"]/div/div/div[2]/main/div[2]/div[1]/div[1]/div[1]/span/div/div'
        );
        await chainSelector.click();

        const arb = await this.page.waitForXPath(
            '//*[@id="react-select-2-option-4"]'
        );
        await arb.click();

        //set the sell value as 12
        const [sell, buy] = await this.page.$x(
            '//input[contains(@class, "css-lv0ed5")]'
        );
        await sell.evaluate((e) => (e.value = ""));
        await sell.type("12");

        //choose the sell currency
        const sellCurrency = await this.page.waitForXPath(
            '//*[@id="__next"]/div/div/div[2]/main/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/button'
        );
        await sellCurrency.click();

        const sellSearchTextField = await this.page.waitForXPath(
            '//input[contains(@class,"css-s1d1f4")]'
        );
        await sellSearchTextField.type("wbtc");
        await this.delay(500);

        const wbtc = await this.page.$x('//div[contains(@class,"cjxQGj")]');
        await wbtc[0].click();

        //choose the buy currency
        const buyCurrency = await this.page.waitForXPath(
            '//*[@id="__next"]/div/div/div[2]/main/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/button'
        );
        await buyCurrency.click();

        const buySearchTextField = await this.page.waitForXPath(
            '//input[contains(@class,"css-s1d1f4")]'
        );
        await buySearchTextField.type("usdc");
        await this.delay(500);

        const usdc = await this.page.$x('//div[contains(@class,"cjxQGj")]');
        await usdc[1].click();

        //choose the second best route
        await this.delay(15000);
        const secondRouteOption = await this.page.waitForXPath(
            '//*[@id="__next"]/div/div/div[2]/main/div[2]/div[1]/div[2]/div[4]'
        );
        await secondRouteOption.click();
    }

    async run() {
        await this.init();
        await this.goToPage("https://swap.defillama.com");
        await this.fillForm();
    }
}
