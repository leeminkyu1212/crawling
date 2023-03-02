// 패키지를 가져오는법
//require로 가져올 수 있다.
//내부에 있는 모듈은 ./~~

const puppeteer = require("puppeteer");

const main = async () => {
  //  브라우저 만들기

  const browser = await puppeteer.launch({
    //기본값이 headless:true
    headless: false,
  });
  //브라우저에 페이지 만들기
  const page = await browser.newPage();

  //페이지에서 주소로 이동하기
  await page.goto("https://comic.naver.com/webtoon?tab=mon");
  
  //대기하는법
  //waitForSelector->특정 selector가 올때까지 대기하는 역할
  //이미지가 로딩싱 없었으니 이미지가 나올때까지 기다리는 역할
  await page.waitForSelector("#content .item img");


  //  document.querySelectorAll("#content .item")
  //클롤링데이터 가져오기

  //nodejs는 브라우저가 아닌 환경이기 때문에 document 사용 불가능
  //evaluate 안에서는 document 사용이 가능하다
  //headless.false;
  //browser close-> 주석
  const data = await page.evaluate(() => {
    const webtoonList = document.querySelectorAll("#content .item img");
    //querySelectorAll :유사배열->Array.from으로 배열화 시킨후에 배열 메서드 사용가능
    const result = Array.from(webtoonList).map((li) => li.getAttribute("alt"));
    console.log(result);
  });

  //스크린샷 찍기
  //await page.screenshot({ path: "screenshot.jpg", fullPage: true });

  //pdf 따기 (headless :true 일때만 동작)
  //await page.pdf({ path: "test.pdf", format: "A4" });

  //브라우저 종료하기
  //await browser.close();
};

main();
