window.addEventListener("load", function () {
 document.getElementById("nav").addEventListener("click", function (e) {
  if (e.target.classList.contains("link")) {
   location = e.target.getAttribute("data-link");
  }
 })
})

var divItems = document.getElementsByClassName("link");




function selected(item) {

 if (item.style.backgroundColor == 'aqua') {
  // unset the item that is already selected
  item.style.backgroundColor = 'white';
  localStorage.removeItem(item.id);
 } else {
  item.style.backgroundColor = 'aqua';

  console.log(item.id);
  localStorage.setItem(item.id, 'any value');
 }

}

if (localStorage.getItem("firstlinkb")) {
 document.getElementById('firstlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("secondlinkb")) {
 document.getElementById('secondlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("thirdlinkb")) {
 document.getElementById('thirdlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("fourthlinkb")) {
 document.getElementById('fourthlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("fifthlinkb")) {
 document.getElementById('fifthlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("sixthlinkb")) {
 document.getElementById('sixthlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("seventhlinkb")) {
 document.getElementById('seventhlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("eighthlinkb")) {
 document.getElementById('eighthlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("ninthlinkb")) {
 document.getElementById('ninthlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("tenthlinkb")) {
 document.getElementById('tenthlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("eleventhlinkb")) {
 document.getElementById('eleventhlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("twelvthinkb")) {
 document.getElementById('twelvthinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("thirtenthlinkb")) {
 document.getElementById('thirtenthlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("fourteenthlinkb")) {
 document.getElementById('fourteenthlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("fifteenthlinkb")) {
 document.getElementById('fifteenthlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("sixteenthlinkb")) {
 document.getElementById('sixteenthlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("seventeenthlinkb")) {
 document.getElementById('seventeenthlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("eighteenthlinkb")) {
 document.getElementById('eighteenthlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("nineteenthlinkb")) {
 document.getElementById('nineteenthlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("20thlinkb")) {
 document.getElementById('20thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("21thlinkb")) {
 document.getElementById('21thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("22thlinkb")) {
 document.getElementById('22thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("23thlinkb")) {
 document.getElementById('23thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("24thlinkb")) {
 document.getElementById('24thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("25thlinkb")) {
 document.getElementById('25thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("26thlinkb")) {
 document.getElementById('26thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("27thlinkb")) {
 document.getElementById('27thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("28thlinkb")) {
 document.getElementById('28thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("29thlinkb")) {
 document.getElementById('29thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("30thlinkb")) {
 document.getElementById('30thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("31thlinkb")) {
 document.getElementById('31thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("32thlinkb")) {
 document.getElementById('32thlinkb').style.backgroundColor = "aqua";
}

if (localStorage.getItem("33thlinkb")) {
 document.getElementById('33thlinkb').style.backgroundColor = "aqua";
}

if (localStorage.getItem("34thlinkb")) {
 document.getElementById('34thlinkb').style.backgroundColor = "aqua";
}

if (localStorage.getItem("35thlinkb")) {
 document.getElementById('35thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("36thlinkb")) {
 document.getElementById('36thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("37thlinkb")) {
 document.getElementById('37thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("38thlinkb")) {
 document.getElementById('38thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("39thlinkb")) {
 document.getElementById('39thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("40thlinkb")) {
 document.getElementById('40thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("41thlinkb")) {
 document.getElementById('41thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("42thlinkb")) {
 document.getElementById('42thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("43thlinkb")) {
 document.getElementById('43thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("44thlinkb")) {
 document.getElementById('44thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("45thlinkb")) {
 document.getElementById('45thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("46thlinkb")) {
 document.getElementById('46thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("47thlinkb")) {
 document.getElementById('47thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("48thlinkb")) {
 document.getElementById('48thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("49thlinkb")) {
 document.getElementById('49thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("50thlinkb")) {
 document.getElementById('50thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("51thlinkb")) {
 document.getElementById('51thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("52thlinkb")) {
 document.getElementById('52thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("53thlinkb")) {
 document.getElementById('53thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("54thlinkb")) {
 document.getElementById('54thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("55thlinkb")) {
 document.getElementById('55thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("56thlinkb")) {
 document.getElementById('56thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("57thlinkb")) {
 document.getElementById('57thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("58thlinkb")) {
 document.getElementById('58thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("59thlinkb")) {
 document.getElementById('59thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("60thlinkb")) {
 document.getElementById('60thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("61thlinkb")) {
 document.getElementById('61thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("62thlinkb")) {
 document.getElementById('62thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("63thlinkb")) {
 document.getElementById('63thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("64thlinkb")) {
 document.getElementById('64thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("65thlinkb")) {
 document.getElementById('65thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("66thlinkb")) {
 document.getElementById('66thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("67thlinkb")) {
 document.getElementById('67thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("68thlinkb")) {
 document.getElementById('68thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("69thlinkb")) {
 document.getElementById('69thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("70thlinkb")) {
 document.getElementById('70thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("71thlinkb")) {
 document.getElementById('71thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("72thlinkb")) {
 document.getElementById('72thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("73thlinkb")) {
 document.getElementById('73thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("74thlinkb")) {
 document.getElementById('74thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("75thlinkb")) {
 document.getElementById('75thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("76thlinkb")) {
 document.getElementById('76thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("77thlinkb")) {
 document.getElementById('77thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("78thlinkb")) {
 document.getElementById('78thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("79thlinkb")) {
 document.getElementById('79thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("80thlinkb")) {
 document.getElementById('80thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("81thlinkb")) {
 document.getElementById('81thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("82thlinkb")) {
 document.getElementById('82thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("83thlinkb")) {
 document.getElementById('83thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("84thlinkb")) {
 document.getElementById('84thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("85thlinkb")) {
 document.getElementById('85thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("86thlinkb")) {
 document.getElementById('86thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("87thlinkb")) {
 document.getElementById('87thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("88thlinkb")) {
 document.getElementById('88thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("89thlinkb")) {
 document.getElementById('89thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("90thlinkb")) {
 document.getElementById('90thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("91thlinkb")) {
 document.getElementById('91thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("92thlinkb")) {
 document.getElementById('92thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("93thlinkb")) {
 document.getElementById('93thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("94thlinkb")) {
 document.getElementById('94thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("95thlinkb")) {
 document.getElementById('95thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("96thlinkb")) {
 document.getElementById('96thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("97thlinkb")) {
 document.getElementById('97thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("98thlinkb")) {
 document.getElementById('98thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("99thlinkb")) {
 document.getElementById('99thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("100thlinkb")) {
 document.getElementById('100thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("101thlinkb")) {
 document.getElementById('101thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("102thlinkb")) {
 document.getElementById('102thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("103thlinkb")) {
 document.getElementById('103thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("104thlinkb")) {
 document.getElementById('104thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("105thlinkb")) {
 document.getElementById('105thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("106thlinkb")) {
 document.getElementById('106thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("107thlinkb")) {
 document.getElementById('107thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("108thlinkb")) {
 document.getElementById('108thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("109thlinkb")) {
 document.getElementById('109thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("110thlinkb")) {
 document.getElementById('110thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("111thlinkb")) {
 document.getElementById('111thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("112thlinkb")) {
 document.getElementById('112thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("113thlinkb")) {
 document.getElementById('113thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("114thlinkb")) {
 document.getElementById('114thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("115thlinkb")) {
 document.getElementById('115thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("116thlinkb")) {
 document.getElementById('116thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("117thlinkb")) {
 document.getElementById('117thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("118thlinkb")) {
 document.getElementById('118thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("119thlinkb")) {
 document.getElementById('119thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("120thlinkb")) {
 document.getElementById('120thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("121thlinkb")) {
 document.getElementById('121thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("122thlinkb")) {
 document.getElementById('122thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("123thlinkb")) {
 document.getElementById('123thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("124thlinkb")) {
 document.getElementById('124thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("125thlinkb")) {
 document.getElementById('125thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("126thlinkb")) {
 document.getElementById('126thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("127thlinkb")) {
 document.getElementById('127thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("128thlinkb")) {
 document.getElementById('128thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("129thlinkb")) {
 document.getElementById('129thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("130thlinkb")) {
 document.getElementById('130thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("131thlinkb")) {
 document.getElementById('131thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("132thlinkb")) {
 document.getElementById('132thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("133thlinkb")) {
 document.getElementById('133thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("134thlinkb")) {
 document.getElementById('134thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("135thlinkb")) {
 document.getElementById('135thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("136thlinkb")) {
 document.getElementById('136thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("137thlinkb")) {
 document.getElementById('137thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("138thlinkb")) {
 document.getElementById('138thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("139thlinkb")) {
 document.getElementById('139thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("140thlinkb")) {
 document.getElementById('140thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("141thlinkb")) {
 document.getElementById('141thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("142thlinkb")) {
 document.getElementById('142thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("143thlinkb")) {
 document.getElementById('143thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("144thlinkb")) {
 document.getElementById('144thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("145thlinkb")) {
 document.getElementById('145thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("146thlinkb")) {
 document.getElementById('146thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("147thlinkb")) {
 document.getElementById('147thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("148thlinkb")) {
 document.getElementById('148thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("149thlinkb")) {
 document.getElementById('149thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("150thlinkb")) {
 document.getElementById('150thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("151thlinkb")) {
 document.getElementById('151thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("152thlinkb")) {
 document.getElementById('152thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("153thlinkb")) {
 document.getElementById('153thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("154thlinkb")) {
 document.getElementById('154thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("155thlinkb")) {
 document.getElementById('155thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("156thlinkb")) {
 document.getElementById('156thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("157thlinkb")) {
 document.getElementById('157thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("158thlinkb")) {
 document.getElementById('158thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("159thlinkb")) {
 document.getElementById('159thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("160thlinkb")) {
 document.getElementById('160thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("161thlinkb")) {
 document.getElementById('161thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("162thlinkb")) {
 document.getElementById('162thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("163thlinkb")) {
 document.getElementById('163thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("164thlinkb")) {
 document.getElementById('164thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("165thlinkb")) {
 document.getElementById('165thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("166thlinkb")) {
 document.getElementById('166thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("167thlinkb")) {
 document.getElementById('167thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("168thlinkb")) {
 document.getElementById('168thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("169thlinkb")) {
 document.getElementById('169thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("170thlinkb")) {
 document.getElementById('170thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("171thlinkb")) {
 document.getElementById('171thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("172thlinkb")) {
 document.getElementById('172thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("173thlinkb")) {
 document.getElementById('173thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("174thlinkb")) {
 document.getElementById('174thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("175thlinkb")) {
 document.getElementById('175thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("176thlinkb")) {
 document.getElementById('176thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("177thlinkb")) {
 document.getElementById('177thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("178thlinkb")) {
 document.getElementById('178thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("179thlinkb")) {
 document.getElementById('179thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("180thlinkb")) {
 document.getElementById('180thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("181thlinkb")) {
 document.getElementById('181thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("182thlinkb")) {
 document.getElementById('182thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("183thlinkb")) {
 document.getElementById('183thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("184thlinkb")) {
 document.getElementById('184thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("185thlinkb")) {
 document.getElementById('185thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("186thlinkb")) {
 document.getElementById('186thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("187thlinkb")) {
 document.getElementById('187thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("188thlinkb")) {
 document.getElementById('188thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("189thlinkb")) {
 document.getElementById('189thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("190thlinkb")) {
 document.getElementById('190thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("191thlinkb")) {
 document.getElementById('191thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("192thlinkb")) {
 document.getElementById('192thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("193thlinkb")) {
 document.getElementById('193thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("194thlinkb")) {
 document.getElementById('194thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("195thlinkb")) {
 document.getElementById('195thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("196thlinkb")) {
 document.getElementById('196thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("197thlinkb")) {
 document.getElementById('197thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("198thlinkb")) {
 document.getElementById('198thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("199thlinkb")) {
 document.getElementById('199thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("200thlinkb")) {
 document.getElementById('200thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("201thlinkb")) {
 document.getElementById('201thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("202thlinkb")) {
 document.getElementById('202thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("203thlinkb")) {
 document.getElementById('203thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("204thlinkb")) {
 document.getElementById('204thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("205thlinkb")) {
 document.getElementById('205thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("206thlinkb")) {
 document.getElementById('206thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("207thlinkb")) {
 document.getElementById('207thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("208thlinkb")) {
 document.getElementById('208thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("209thlinkb")) {
 document.getElementById('209thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("210thlinkb")) {
 document.getElementById('210thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("211thlinkb")) {
 document.getElementById('211thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("212thlinkb")) {
 document.getElementById('212thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("213thlinkb")) {
 document.getElementById('213thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("214thlinkb")) {
 document.getElementById('214thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("215thlinkb")) {
 document.getElementById('215thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("216thlinkb")) {
 document.getElementById('216thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("217thlinkb")) {
 document.getElementById('217thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("218thlinkb")) {
 document.getElementById('218thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("219thlinkb")) {
 document.getElementById('219thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("220thlinkb")) {
 document.getElementById('220thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("221thlinkb")) {
 document.getElementById('221thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("222thlinkb")) {
 document.getElementById('222thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("223thlinkb")) {
 document.getElementById('223thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("224thlinkb")) {
 document.getElementById('224thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("225thlinkb")) {
 document.getElementById('225thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("226thlinkb")) {
 document.getElementById('226thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("227thlinkb")) {
 document.getElementById('227thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("228thlinkb")) {
 document.getElementById('228thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("229thlinkb")) {
 document.getElementById('229thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("230thlinkb")) {
 document.getElementById('230thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("231thlinkb")) {
 document.getElementById('231thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("232thlinkb")) {
 document.getElementById('232thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("233thlinkb")) {
 document.getElementById('233thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("234thlinkb")) {
 document.getElementById('234thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("235thlinkb")) {
 document.getElementById('235thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("236thlinkb")) {
 document.getElementById('236thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("237thlinkb")) {
 document.getElementById('237thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("238thlinkb")) {
 document.getElementById('238thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("239thlinkb")) {
 document.getElementById('239thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("240thlinkb")) {
 document.getElementById('240thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("241thlinkb")) {
 document.getElementById('241thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("242thlinkb")) {
 document.getElementById('242thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("243thlinkb")) {
 document.getElementById('243thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("244thlinkb")) {
 document.getElementById('244thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("245thlinkb")) {
 document.getElementById('245thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("246thlinkb")) {
 document.getElementById('246thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("247thlinkb")) {
 document.getElementById('247thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("248thlinkb")) {
 document.getElementById('248thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("249thlinkb")) {
 document.getElementById('249thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("250thlinkb")) {
 document.getElementById('250thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("251thlinkb")) {
 document.getElementById('251thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("252thlinkb")) {
 document.getElementById('252thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("253thlinkb")) {
 document.getElementById('253thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("254thlinkb")) {
 document.getElementById('254thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("255thlinkb")) {
 document.getElementById('255thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("256thlinkb")) {
 document.getElementById('256thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("257thlinkb")) {
 document.getElementById('257thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("258thlinkb")) {
 document.getElementById('258thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("259thlinkb")) {
 document.getElementById('259thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("260thlinkb")) {
 document.getElementById('260thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("261thlinkb")) {
 document.getElementById('261thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("262thlinkb")) {
 document.getElementById('262thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("263thlinkb")) {
 document.getElementById('263thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("264thlinkb")) {
 document.getElementById('264thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("265thlinkb")) {
 document.getElementById('265thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("266thlinkb")) {
 document.getElementById('266thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("267thlinkb")) {
 document.getElementById('267thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("268thlinkb")) {
 document.getElementById('268thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("269thlinkb")) {
 document.getElementById('269thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("270thlinkb")) {
 document.getElementById('270thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("271thlinkb")) {
 document.getElementById('271thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("272thlinkb")) {
 document.getElementById('272thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("273thlinkb")) {
 document.getElementById('273thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("274thlinkb")) {
 document.getElementById('274thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("275thlinkb")) {
 document.getElementById('275thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("276thlinkb")) {
 document.getElementById('276thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("277thlinkb")) {
 document.getElementById('277thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("278thlinkb")) {
 document.getElementById('278thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("279thlinkb")) {
 document.getElementById('279thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("280thlinkb")) {
 document.getElementById('280thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("281thlinkb")) {
 document.getElementById('281thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("282thlinkb")) {
 document.getElementById('282thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("283thlinkb")) {
 document.getElementById('283thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("284thlinkb")) {
 document.getElementById('284thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("285thlinkb")) {
 document.getElementById('285thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("286thlinkb")) {
 document.getElementById('286thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("287thlinkb")) {
 document.getElementById('287thlinkb').style.backgroundColor = "aqua";
}
if (localStorage.getItem("288thlinkc")) {
 document.getElementById('288thlinkc').style.backgroundColor = "aqua";
}




