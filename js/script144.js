window.addEventListener("load", function () {
 document.getElementById("nav").addEventListener("click", function (e) {
  if (e.target.classList.contains("link")) {
   location = e.target.getAttribute("data-link");
  }
 })
})

var divItems = document.getElementsByClassName("link");




function selected(item) {

 if (item.style.backgroundColor == 'yellow') {
  // unset the item that is already selected
  item.style.backgroundColor = 'white';
  localStorage.removeItem(item.id);
 } else {
  item.style.backgroundColor = 'yellow';

  console.log(item.id);
  localStorage.setItem(item.id, 'any value');
 }

}

if (localStorage.getItem("firstlinka")) {
 document.getElementById('firstlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("secondlinka")) {
 document.getElementById('secondlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("thirdlinka")) {
 document.getElementById('thirdlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("fourthlinka")) {
 document.getElementById('fourthlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("fifthlinka")) {
 document.getElementById('fifthlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("sixthlinka")) {
 document.getElementById('sixthlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("seventhlinka")) {
 document.getElementById('seventhlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("eighthlinka")) {
 document.getElementById('eighthlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("ninthlinka")) {
 document.getElementById('ninthlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("tenthlinka")) {
 document.getElementById('tenthlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("eleventhlinka")) {
 document.getElementById('eleventhlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("twelvthinka")) {
 document.getElementById('twelvthinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("thirtenthlinka")) {
 document.getElementById('thirtenthlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("fourteenthlinka")) {
 document.getElementById('fourteenthlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("fifteenthlinka")) {
 document.getElementById('fifteenthlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("sixteenthlinka")) {
 document.getElementById('sixteenthlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("seventeenthlinka")) {
 document.getElementById('seventeenthlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("eighteenthlinka")) {
 document.getElementById('eighteenthlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("nineteenthlinka")) {
 document.getElementById('nineteenthlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("20thlinka")) {
 document.getElementById('20thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("21thlinka")) {
 document.getElementById('21thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("22thlinka")) {
 document.getElementById('22thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("23thlinka")) {
 document.getElementById('23thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("24thlinka")) {
 document.getElementById('24thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("25thlinka")) {
 document.getElementById('25thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("26thlinka")) {
 document.getElementById('26thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("27thlinka")) {
 document.getElementById('27thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("28thlinka")) {
 document.getElementById('28thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("29thlinka")) {
 document.getElementById('29thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("30thlinka")) {
 document.getElementById('30thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("31thlinka")) {
 document.getElementById('31thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("32thlinka")) {
 document.getElementById('32thlinka').style.backgroundColor = "yellow";
}

if (localStorage.getItem("33thlinka")) {
 document.getElementById('33thlinka').style.backgroundColor = "yellow";
}

if (localStorage.getItem("34thlinka")) {
 document.getElementById('34thlinka').style.backgroundColor = "yellow";
}

if (localStorage.getItem("35thlinka")) {
 document.getElementById('35thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("36thlinka")) {
 document.getElementById('36thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("37thlinka")) {
 document.getElementById('37thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("38thlinka")) {
 document.getElementById('38thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("39thlinka")) {
 document.getElementById('39thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("40thlinka")) {
 document.getElementById('40thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("41thlinka")) {
 document.getElementById('41thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("42thlinka")) {
 document.getElementById('42thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("43thlinka")) {
 document.getElementById('43thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("44thlinka")) {
 document.getElementById('44thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("45thlinka")) {
 document.getElementById('45thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("46thlinka")) {
 document.getElementById('46thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("47thlinka")) {
 document.getElementById('47thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("48thlinka")) {
 document.getElementById('48thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("49thlinka")) {
 document.getElementById('49thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("50thlinka")) {
 document.getElementById('50thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("51thlinka")) {
 document.getElementById('51thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("52thlinka")) {
 document.getElementById('52thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("53thlinka")) {
 document.getElementById('53thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("54thlinka")) {
 document.getElementById('54thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("55thlinka")) {
 document.getElementById('55thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("56thlinka")) {
 document.getElementById('56thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("57thlinka")) {
 document.getElementById('57thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("58thlinka")) {
 document.getElementById('58thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("59thlinka")) {
 document.getElementById('59thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("60thlinka")) {
 document.getElementById('60thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("61thlinka")) {
 document.getElementById('61thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("62thlinka")) {
 document.getElementById('62thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("63thlinka")) {
 document.getElementById('63thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("64thlinka")) {
 document.getElementById('64thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("65thlinka")) {
 document.getElementById('65thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("66thlinka")) {
 document.getElementById('66thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("67thlinka")) {
 document.getElementById('67thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("68thlinka")) {
 document.getElementById('68thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("69thlinka")) {
 document.getElementById('69thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("70thlinka")) {
 document.getElementById('70thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("71thlinka")) {
 document.getElementById('71thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("72thlinka")) {
 document.getElementById('72thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("73thlinka")) {
 document.getElementById('73thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("74thlinka")) {
 document.getElementById('74thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("75thlinka")) {
 document.getElementById('75thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("76thlinka")) {
 document.getElementById('76thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("77thlinka")) {
 document.getElementById('77thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("78thlinka")) {
 document.getElementById('78thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("79thlinka")) {
 document.getElementById('79thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("80thlinka")) {
 document.getElementById('80thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("81thlinka")) {
 document.getElementById('81thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("82thlinka")) {
 document.getElementById('82thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("83thlinka")) {
 document.getElementById('83thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("84thlinka")) {
 document.getElementById('84thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("85thlinka")) {
 document.getElementById('85thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("86thlinka")) {
 document.getElementById('86thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("87thlinka")) {
 document.getElementById('87thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("88thlinka")) {
 document.getElementById('88thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("89thlinka")) {
 document.getElementById('89thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("90thlinka")) {
 document.getElementById('90thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("91thlinka")) {
 document.getElementById('91thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("92thlinka")) {
 document.getElementById('92thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("93thlinka")) {
 document.getElementById('93thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("94thlinka")) {
 document.getElementById('94thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("95thlinka")) {
 document.getElementById('95thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("96thlinka")) {
 document.getElementById('96thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("97thlinka")) {
 document.getElementById('97thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("98thlinka")) {
 document.getElementById('98thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("99thlinka")) {
 document.getElementById('99thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("100thlinka")) {
 document.getElementById('100thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("101thlinka")) {
 document.getElementById('101thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("102thlinka")) {
 document.getElementById('102thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("103thlinka")) {
 document.getElementById('103thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("104thlinka")) {
 document.getElementById('104thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("105thlinka")) {
 document.getElementById('105thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("106thlinka")) {
 document.getElementById('106thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("107thlinka")) {
 document.getElementById('107thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("108thlinka")) {
 document.getElementById('108thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("109thlinka")) {
 document.getElementById('109thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("110thlinka")) {
 document.getElementById('110thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("111thlinka")) {
 document.getElementById('111thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("112thlinka")) {
 document.getElementById('112thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("113thlinka")) {
 document.getElementById('113thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("114thlinka")) {
 document.getElementById('114thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("115thlinka")) {
 document.getElementById('115thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("116thlinka")) {
 document.getElementById('116thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("117thlinka")) {
 document.getElementById('117thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("118thlinka")) {
 document.getElementById('118thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("119thlinka")) {
 document.getElementById('119thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("120thlinka")) {
 document.getElementById('120thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("121thlinka")) {
 document.getElementById('121thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("122thlinka")) {
 document.getElementById('122thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("123thlinka")) {
 document.getElementById('123thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("124thlinka")) {
 document.getElementById('124thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("125thlinka")) {
 document.getElementById('125thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("126thlinka")) {
 document.getElementById('126thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("127thlinka")) {
 document.getElementById('127thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("128thlinka")) {
 document.getElementById('128thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("129thlinka")) {
 document.getElementById('129thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("130thlinka")) {
 document.getElementById('130thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("131thlinka")) {
 document.getElementById('131thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("132thlinka")) {
 document.getElementById('132thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("133thlinka")) {
 document.getElementById('133thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("134thlinka")) {
 document.getElementById('134thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("135thlinka")) {
 document.getElementById('135thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("136thlinka")) {
 document.getElementById('136thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("137thlinka")) {
 document.getElementById('137thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("138thlinka")) {
 document.getElementById('138thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("139thlinka")) {
 document.getElementById('139thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("140thlinka")) {
 document.getElementById('140thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("141thlinka")) {
 document.getElementById('141thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("142thlinka")) {
 document.getElementById('142thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("143thlinka")) {
 document.getElementById('143thlinka').style.backgroundColor = "yellow";
}
if (localStorage.getItem("144thlinka")) {
 document.getElementById('144thlinka').style.backgroundColor = "yellow";
}
