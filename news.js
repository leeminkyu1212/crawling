const puppeteer = require("puppeteer");

const main = async () => {
  //  브라우저 만들기

  const browser = await puppeteer.launch({
    //기본값이 headless:true
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto("https://news.daum.net/digital#1");

  await page.waitForSelector(".list_news_major");

  //browser close-> 주석
  const data = await page.evaluate(() => {
    const newsList = document.querySelectorAll(".tit_g .link_txt");
    //querySelectorAll :유사배열->Array.from으로 배열화 시킨후에 배열 메서드 사용가능
    const result = Array.from(newsList).map((li) => li.textContent);
    console.log(result);
  });
};

main();
