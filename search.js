const puppeteer = require("puppeteer");

const main = async () => {
  //  브라우저 만들기

  const browser = await puppeteer.launch({
    //기본값이 headless:true
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto("https://google.co.kr");

  await page.evaluate(() => {
    const btn = (document.querySelector(".gLFyf").value = "치킨");
    document.querySelector(".gNO89b").click();
  });
  //이동된 페이지니까 스크린샷을 찍는다.
  //클릭을하자마자 끝나고 스크린샷을 찍으니 넘어가기전에 실행
  //waitforselector를 응용하여 대기후 스크린샷을 찍는다
  await page.waitForSelector(".GLcBOb");
  await page.screenshot({ path: "치킨.jpg", fullPage: true });
};
1;

main();
