window.addEventListener("load", function () {
 document.getElementById("nav").addEventListener("click", function (e) {
  if (e.target.classList.contains("link")) {
   location = e.target.getAttribute("data-link");
  }
 })
})

var divItems = document.getElementsByClassName("link");




function selected(item) {

 if (item.style.backgroundColor == 'violet') {
  // unset the item that is already selected
  item.style.backgroundColor = 'ivory';
  localStorage.removeItem(item.id);
 } else {
  item.style.backgroundColor = 'violet';

  console.log(item.id);
  localStorage.setItem(item.id, 'any value');
 }

}

if (localStorage.getItem("firstlinkd")) {
 document.getElementById('firstlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("secondlinkd")) {
 document.getElementById('secondlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("thirdlinkd")) {
 document.getElementById('thirdlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("fourthlinkd")) {
 document.getElementById('fourthlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("fifthlinkd")) {
 document.getElementById('fifthlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("sixthlinkd")) {
 document.getElementById('sixthlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("seventhlinkd")) {
 document.getElementById('seventhlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("eighthlinkd")) {
 document.getElementById('eighthlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("ninthlinkd")) {
 document.getElementById('ninthlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("tenthlinkd")) {
 document.getElementById('tenthlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("eleventhlinkd")) {
 document.getElementById('eleventhlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("twelvthinkd")) {
 document.getElementById('twelvthinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("thirtenthlinkd")) {
 document.getElementById('thirtenthlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("fourteenthlinkd")) {
 document.getElementById('fourteenthlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("fifteenthlinkd")) {
 document.getElementById('fifteenthlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("sixteenthlinkd")) {
 document.getElementById('sixteenthlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("seventeenthlinkd")) {
 document.getElementById('seventeenthlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("eighteenthlinkd")) {
 document.getElementById('eighteenthlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("nineteenthlinkd")) {
 document.getElementById('nineteenthlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("20thlinkd")) {
 document.getElementById('20thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("21thlinkd")) {
 document.getElementById('21thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("22thlinkd")) {
 document.getElementById('22thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("23thlinkd")) {
 document.getElementById('23thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("24thlinkd")) {
 document.getElementById('24thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("25thlinkd")) {
 document.getElementById('25thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("26thlinkd")) {
 document.getElementById('26thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("27thlinkd")) {
 document.getElementById('27thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("28thlinkd")) {
 document.getElementById('28thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("29thlinkd")) {
 document.getElementById('29thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("30thlinkd")) {
 document.getElementById('30thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("31thlinkd")) {
 document.getElementById('31thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("32thlinkd")) {
 document.getElementById('32thlinkd').style.backgroundColor = "violet";
}

if (localStorage.getItem("33thlinkd")) {
 document.getElementById('33thlinkd').style.backgroundColor = "violet";
}

if (localStorage.getItem("34thlinkd")) {
 document.getElementById('34thlinkd').style.backgroundColor = "violet";
}

if (localStorage.getItem("35thlinkd")) {
 document.getElementById('35thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("36thlinkd")) {
 document.getElementById('36thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("37thlinkd")) {
 document.getElementById('37thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("38thlinkd")) {
 document.getElementById('38thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("39thlinkd")) {
 document.getElementById('39thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("40thlinkd")) {
 document.getElementById('40thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("41thlinkd")) {
 document.getElementById('41thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("42thlinkd")) {
 document.getElementById('42thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("43thlinkd")) {
 document.getElementById('43thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("44thlinkd")) {
 document.getElementById('44thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("45thlinkd")) {
 document.getElementById('45thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("46thlinkd")) {
 document.getElementById('46thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("47thlinkd")) {
 document.getElementById('47thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("48thlinkd")) {
 document.getElementById('48thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("49thlinkd")) {
 document.getElementById('49thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("50thlinkd")) {
 document.getElementById('50thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("51thlinkd")) {
 document.getElementById('51thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("52thlinkd")) {
 document.getElementById('52thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("53thlinkd")) {
 document.getElementById('53thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("54thlinkd")) {
 document.getElementById('54thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("55thlinkd")) {
 document.getElementById('55thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("56thlinkd")) {
 document.getElementById('56thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("57thlinkd")) {
 document.getElementById('57thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("58thlinkd")) {
 document.getElementById('58thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("59thlinkd")) {
 document.getElementById('59thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("60thlinkd")) {
 document.getElementById('60thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("61thlinkd")) {
 document.getElementById('61thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("62thlinkd")) {
 document.getElementById('62thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("63thlinkd")) {
 document.getElementById('63thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("64thlinkd")) {
 document.getElementById('64thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("65thlinkd")) {
 document.getElementById('65thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("66thlinkd")) {
 document.getElementById('66thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("67thlinkd")) {
 document.getElementById('67thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("68thlinkd")) {
 document.getElementById('68thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("69thlinkd")) {
 document.getElementById('69thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("70thlinkd")) {
 document.getElementById('70thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("71thlinkd")) {
 document.getElementById('71thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("72thlinkd")) {
 document.getElementById('72thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("73thlinkd")) {
 document.getElementById('73thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("74thlinkd")) {
 document.getElementById('74thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("75thlinkd")) {
 document.getElementById('75thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("76thlinkd")) {
 document.getElementById('76thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("77thlinkd")) {
 document.getElementById('77thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("78thlinkd")) {
 document.getElementById('78thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("79thlinkd")) {
 document.getElementById('79thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("80thlinkd")) {
 document.getElementById('80thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("81thlinkd")) {
 document.getElementById('81thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("82thlinkd")) {
 document.getElementById('82thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("83thlinkd")) {
 document.getElementById('83thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("84thlinkd")) {
 document.getElementById('84thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("85thlinkd")) {
 document.getElementById('85thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("86thlinkd")) {
 document.getElementById('86thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("87thlinkd")) {
 document.getElementById('87thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("88thlinkd")) {
 document.getElementById('88thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("89thlinkd")) {
 document.getElementById('89thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("90thlinkd")) {
 document.getElementById('90thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("91thlinkd")) {
 document.getElementById('91thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("92thlinkd")) {
 document.getElementById('92thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("93thlinkd")) {
 document.getElementById('93thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("94thlinkd")) {
 document.getElementById('94thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("95thlinkd")) {
 document.getElementById('95thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("96thlinkd")) {
 document.getElementById('96thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("97thlinkd")) {
 document.getElementById('97thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("98thlinkd")) {
 document.getElementById('98thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("99thlinkd")) {
 document.getElementById('99thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("100thlinkd")) {
 document.getElementById('100thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("101thlinkd")) {
 document.getElementById('101thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("102thlinkd")) {
 document.getElementById('102thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("103thlinkd")) {
 document.getElementById('103thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("104thlinkd")) {
 document.getElementById('104thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("105thlinkd")) {
 document.getElementById('105thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("106thlinkd")) {
 document.getElementById('106thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("107thlinkd")) {
 document.getElementById('107thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("108thlinkd")) {
 document.getElementById('108thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("109thlinkd")) {
 document.getElementById('109thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("110thlinkd")) {
 document.getElementById('110thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("111thlinkd")) {
 document.getElementById('111thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("112thlinkd")) {
 document.getElementById('112thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("113thlinkd")) {
 document.getElementById('113thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("114thlinkd")) {
 document.getElementById('114thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("115thlinkd")) {
 document.getElementById('115thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("116thlinkd")) {
 document.getElementById('116thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("117thlinkd")) {
 document.getElementById('117thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("118thlinkd")) {
 document.getElementById('118thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("119thlinkd")) {
 document.getElementById('119thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("120thlinkd")) {
 document.getElementById('120thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("121thlinkd")) {
 document.getElementById('121thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("122thlinkd")) {
 document.getElementById('122thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("123thlinkd")) {
 document.getElementById('123thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("124thlinkd")) {
 document.getElementById('124thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("125thlinkd")) {
 document.getElementById('125thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("126thlinkd")) {
 document.getElementById('126thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("127thlinkd")) {
 document.getElementById('127thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("128thlinkd")) {
 document.getElementById('128thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("129thlinkd")) {
 document.getElementById('129thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("130thlinkd")) {
 document.getElementById('130thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("131thlinkd")) {
 document.getElementById('131thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("132thlinkd")) {
 document.getElementById('132thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("133thlinkd")) {
 document.getElementById('133thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("134thlinkd")) {
 document.getElementById('134thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("135thlinkd")) {
 document.getElementById('135thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("136thlinkd")) {
 document.getElementById('136thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("137thlinkd")) {
 document.getElementById('137thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("138thlinkd")) {
 document.getElementById('138thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("139thlinkd")) {
 document.getElementById('139thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("140thlinkd")) {
 document.getElementById('140thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("141thlinkd")) {
 document.getElementById('141thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("142thlinkd")) {
 document.getElementById('142thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("143thlinkd")) {
 document.getElementById('143thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("144thlinkd")) {
 document.getElementById('144thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("145thlinkd")) {
 document.getElementById('145thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("146thlinkd")) {
 document.getElementById('146thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("147thlinkd")) {
 document.getElementById('147thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("148thlinkd")) {
 document.getElementById('148thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("149thlinkd")) {
 document.getElementById('149thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("150thlinkd")) {
 document.getElementById('150thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("151thlinkd")) {
 document.getElementById('151thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("152thlinkd")) {
 document.getElementById('152thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("153thlinkd")) {
 document.getElementById('153thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("154thlinkd")) {
 document.getElementById('154thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("155thlinkd")) {
 document.getElementById('155thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("156thlinkd")) {
 document.getElementById('156thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("157thlinkd")) {
 document.getElementById('157thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("158thlinkd")) {
 document.getElementById('158thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("159thlinkd")) {
 document.getElementById('159thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("160thlinkd")) {
 document.getElementById('160thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("161thlinkd")) {
 document.getElementById('161thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("162thlinkd")) {
 document.getElementById('162thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("163thlinkd")) {
 document.getElementById('163thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("164thlinkd")) {
 document.getElementById('164thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("165thlinkd")) {
 document.getElementById('165thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("166thlinkd")) {
 document.getElementById('166thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("167thlinkd")) {
 document.getElementById('167thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("168thlinkd")) {
 document.getElementById('168thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("169thlinkd")) {
 document.getElementById('169thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("170thlinkd")) {
 document.getElementById('170thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("171thlinkd")) {
 document.getElementById('171thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("172thlinkd")) {
 document.getElementById('172thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("173thlinkd")) {
 document.getElementById('173thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("174thlinkd")) {
 document.getElementById('174thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("175thlinkd")) {
 document.getElementById('175thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("176thlinkd")) {
 document.getElementById('176thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("177thlinkd")) {
 document.getElementById('177thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("178thlinkd")) {
 document.getElementById('178thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("179thlinkd")) {
 document.getElementById('179thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("180thlinkd")) {
 document.getElementById('180thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("181thlinkd")) {
 document.getElementById('181thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("182thlinkd")) {
 document.getElementById('182thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("183thlinkd")) {
 document.getElementById('183thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("184thlinkd")) {
 document.getElementById('184thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("185thlinkd")) {
 document.getElementById('185thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("186thlinkd")) {
 document.getElementById('186thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("187thlinkd")) {
 document.getElementById('187thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("188thlinkd")) {
 document.getElementById('188thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("189thlinkd")) {
 document.getElementById('189thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("190thlinkd")) {
 document.getElementById('190thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("191thlinkd")) {
 document.getElementById('191thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("192thlinkd")) {
 document.getElementById('192thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("193thlinkd")) {
 document.getElementById('193thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("194thlinkd")) {
 document.getElementById('194thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("195thlinkd")) {
 document.getElementById('195thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("196thlinkd")) {
 document.getElementById('196thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("197thlinkd")) {
 document.getElementById('197thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("198thlinkd")) {
 document.getElementById('198thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("199thlinkd")) {
 document.getElementById('199thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("200thlinkd")) {
 document.getElementById('200thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("201thlinkd")) {
 document.getElementById('201thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("202thlinkd")) {
 document.getElementById('202thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("203thlinkd")) {
 document.getElementById('203thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("204thlinkd")) {
 document.getElementById('204thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("205thlinkd")) {
 document.getElementById('205thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("206thlinkd")) {
 document.getElementById('206thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("207thlinkd")) {
 document.getElementById('207thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("208thlinkd")) {
 document.getElementById('208thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("209thlinkd")) {
 document.getElementById('209thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("210thlinkd")) {
 document.getElementById('210thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("211thlinkd")) {
 document.getElementById('211thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("212thlinkd")) {
 document.getElementById('212thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("213thlinkd")) {
 document.getElementById('213thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("214thlinkd")) {
 document.getElementById('214thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("215thlinkd")) {
 document.getElementById('215thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("216thlinkd")) {
 document.getElementById('216thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("217thlinkd")) {
 document.getElementById('217thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("218thlinkd")) {
 document.getElementById('218thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("219thlinkd")) {
 document.getElementById('219thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("220thlinkd")) {
 document.getElementById('220thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("221thlinkd")) {
 document.getElementById('221thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("222thlinkd")) {
 document.getElementById('222thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("223thlinkd")) {
 document.getElementById('223thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("224thlinkd")) {
 document.getElementById('224thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("225thlinkd")) {
 document.getElementById('225thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("226thlinkd")) {
 document.getElementById('226thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("227thlinkd")) {
 document.getElementById('227thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("228thlinkd")) {
 document.getElementById('228thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("229thlinkd")) {
 document.getElementById('229thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("230thlinkd")) {
 document.getElementById('230thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("231thlinkd")) {
 document.getElementById('231thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("232thlinkd")) {
 document.getElementById('232thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("233thlinkd")) {
 document.getElementById('233thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("234thlinkd")) {
 document.getElementById('234thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("235thlinkd")) {
 document.getElementById('235thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("236thlinkd")) {
 document.getElementById('236thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("237thlinkd")) {
 document.getElementById('237thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("238thlinkd")) {
 document.getElementById('238thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("239thlinkd")) {
 document.getElementById('239thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("240thlinkd")) {
 document.getElementById('240thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("241thlinkd")) {
 document.getElementById('241thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("242thlinkd")) {
 document.getElementById('242thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("243thlinkd")) {
 document.getElementById('243thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("244thlinkd")) {
 document.getElementById('244thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("245thlinkd")) {
 document.getElementById('245thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("246thlinkd")) {
 document.getElementById('246thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("247thlinkd")) {
 document.getElementById('247thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("248thlinkd")) {
 document.getElementById('248thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("249thlinkd")) {
 document.getElementById('249thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("250thlinkd")) {
 document.getElementById('250thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("251thlinkd")) {
 document.getElementById('251thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("252thlinkd")) {
 document.getElementById('252thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("253thlinkd")) {
 document.getElementById('253thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("254thlinkd")) {
 document.getElementById('254thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("255thlinkd")) {
 document.getElementById('255thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("256thlinkd")) {
 document.getElementById('256thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("257thlinkd")) {
 document.getElementById('257thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("258thlinkd")) {
 document.getElementById('258thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("259thlinkd")) {
 document.getElementById('259thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("260thlinkd")) {
 document.getElementById('260thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("261thlinkd")) {
 document.getElementById('261thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("262thlinkd")) {
 document.getElementById('262thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("263thlinkd")) {
 document.getElementById('263thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("264thlinkd")) {
 document.getElementById('264thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("265thlinkd")) {
 document.getElementById('265thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("266thlinkd")) {
 document.getElementById('266thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("267thlinkd")) {
 document.getElementById('267thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("268thlinkd")) {
 document.getElementById('268thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("269thlinkd")) {
 document.getElementById('269thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("270thlinkd")) {
 document.getElementById('270thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("271thlinkd")) {
 document.getElementById('271thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("272thlinkd")) {
 document.getElementById('272thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("273thlinkd")) {
 document.getElementById('273thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("274thlinkd")) {
 document.getElementById('274thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("275thlinkd")) {
 document.getElementById('275thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("276thlinkd")) {
 document.getElementById('276thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("277thlinkd")) {
 document.getElementById('277thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("278thlinkd")) {
 document.getElementById('278thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("279thlinkd")) {
 document.getElementById('279thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("280thlinkd")) {
 document.getElementById('280thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("281thlinkd")) {
 document.getElementById('281thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("282thlinkd")) {
 document.getElementById('282thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("283thlinkd")) {
 document.getElementById('283thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("284thlinkd")) {
 document.getElementById('284thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("285thlinkd")) {
 document.getElementById('285thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("286thlinkd")) {
 document.getElementById('286thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("287thlinkd")) {
 document.getElementById('287thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("288thlinkd")) {
 document.getElementById('288thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("289thlinkd")) {
 document.getElementById('289thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("290thlinkd")) {
 document.getElementById('290thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("291thlinkd")) {
 document.getElementById('291thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("292thlinkd")) {
 document.getElementById('292thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("293thlinkd")) {
 document.getElementById('293thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("294thlinkd")) {
 document.getElementById('294thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("295thlinkd")) {
 document.getElementById('295thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("296thlinkd")) {
 document.getElementById('296thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("297thlinkd")) {
 document.getElementById('297thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("298thlinkd")) {
 document.getElementById('298thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("299thlinkd")) {
 document.getElementById('299thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("300thlinkd")) {
 document.getElementById('300thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("301thlinkd")) {
 document.getElementById('301thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("302thlinkd")) {
 document.getElementById('302thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("303thlinkd")) {
 document.getElementById('303thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("304thlinkd")) {
 document.getElementById('304thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("305thlinkd")) {
 document.getElementById('305thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("306thlinkd")) {
 document.getElementById('306thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("307thlinkd")) {
 document.getElementById('307thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("308thlinkd")) {
 document.getElementById('308thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("309thlinkd")) {
 document.getElementById('309thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("310thlinkd")) {
 document.getElementById('310thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("311thlinkd")) {
 document.getElementById('311thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("312thlinkd")) {
 document.getElementById('312thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("313thlinkd")) {
 document.getElementById('313thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("314thlinkd")) {
 document.getElementById('314thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("315thlinkd")) {
 document.getElementById('315thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("316thlinkd")) {
 document.getElementById('316thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("317thlinkd")) {
 document.getElementById('317thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("318thlinkd")) {
 document.getElementById('318thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("319thlinkd")) {
 document.getElementById('319thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("320thlinkd")) {
 document.getElementById('320thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("321thlinkd")) {
 document.getElementById('321thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("322thlinkd")) {
 document.getElementById('322thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("323thlinkd")) {
 document.getElementById('323thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("324thlinkd")) {
 document.getElementById('324thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("325thlinkd")) {
 document.getElementById('325thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("326thlinkd")) {
 document.getElementById('326thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("327thlinkd")) {
 document.getElementById('327thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("328thlinkd")) {
 document.getElementById('328thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("329thlinkd")) {
 document.getElementById('329thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("330thlinkd")) {
 document.getElementById('330thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("331thlinkd")) {
 document.getElementById('331thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("332thlinkd")) {
 document.getElementById('332thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("333thlinkd")) {
 document.getElementById('333thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("334thlinkd")) {
 document.getElementById('334thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("335thlinkd")) {
 document.getElementById('335thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("336thlinkd")) {
 document.getElementById('336thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("337thlinkd")) {
 document.getElementById('337thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("338thlinkd")) {
 document.getElementById('338thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("339thlinkd")) {
 document.getElementById('339thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("340thlinkd")) {
 document.getElementById('340thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("341thlinkd")) {
 document.getElementById('341thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("342thlinkd")) {
 document.getElementById('342thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("343thlinkd")) {
 document.getElementById('343thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("344thlinkd")) {
 document.getElementById('344thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("345thlinkd")) {
 document.getElementById('345thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("346thlinkd")) {
 document.getElementById('346thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("347thlinkd")) {
 document.getElementById('347thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("348thlinkd")) {
 document.getElementById('348thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("349thlinkd")) {
 document.getElementById('349thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("350thlinkd")) {
 document.getElementById('350thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("351thlinkd")) {
 document.getElementById('351thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("352thlinkd")) {
 document.getElementById('352thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("353thlinkd")) {
 document.getElementById('353thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("354thlinkd")) {
 document.getElementById('354thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("355thlinkd")) {
 document.getElementById('355thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("356thlinkd")) {
 document.getElementById('356thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("357thlinkd")) {
 document.getElementById('357thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("358thlinkd")) {
 document.getElementById('358thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("359thlinkd")) {
 document.getElementById('359thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("360thlinkd")) {
 document.getElementById('360thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("361thlinkd")) {
 document.getElementById('361thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("362thlinkd")) {
 document.getElementById('362thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("363thlinkd")) {
 document.getElementById('363thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("364thlinkd")) {
 document.getElementById('364thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("365thlinkd")) {
 document.getElementById('365thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("366thlinkd")) {
 document.getElementById('366thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("367thlinkd")) {
 document.getElementById('367thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("368thlinkd")) {
 document.getElementById('368thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("369thlinkd")) {
 document.getElementById('369thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("370thlinkd")) {
 document.getElementById('370thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("371thlinkd")) {
 document.getElementById('371thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("372thlinkd")) {
 document.getElementById('372thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("373thlinkd")) {
 document.getElementById('373thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("374thlinkd")) {
 document.getElementById('374thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("375thlinkd")) {
 document.getElementById('375thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("376thlinkd")) {
 document.getElementById('376thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("377thlinkd")) {
 document.getElementById('377thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("378thlinkd")) {
 document.getElementById('378thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("379thlinkd")) {
 document.getElementById('379thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("380thlinkd")) {
 document.getElementById('380thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("381thlinkd")) {
 document.getElementById('381thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("382thlinkd")) {
 document.getElementById('382thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("383thlinkd")) {
 document.getElementById('383thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("384thlinkd")) {
 document.getElementById('384thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("385thlinkd")) {
 document.getElementById('385thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("386thlinkd")) {
 document.getElementById('386thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("387thlinkd")) {
 document.getElementById('387thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("388thlinkd")) {
 document.getElementById('388thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("389thlinkd")) {
 document.getElementById('389thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("390thlinkd")) {
 document.getElementById('390thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("391thlinkd")) {
 document.getElementById('391thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("392thlinkd")) {
 document.getElementById('392thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("393thlinkd")) {
 document.getElementById('393thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("394thlinkd")) {
 document.getElementById('394thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("395thlinkd")) {
 document.getElementById('395thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("396thlinkd")) {
 document.getElementById('396thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("397thlinkd")) {
 document.getElementById('397thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("398thlinkd")) {
 document.getElementById('398thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("399thlinkd")) {
 document.getElementById('399thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("400thlinkd")) {
 document.getElementById('400thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("401thlinkd")) {
 document.getElementById('401thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("402thlinkd")) {
 document.getElementById('402thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("403thlinkd")) {
 document.getElementById('403thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("404thlinkd")) {
 document.getElementById('404thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("405thlinkd")) {
 document.getElementById('405thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("406thlinkd")) {
 document.getElementById('406thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("407thlinkd")) {
 document.getElementById('407thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("408thlinkd")) {
 document.getElementById('408thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("409thlinkd")) {
 document.getElementById('409thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("410thlinkd")) {
 document.getElementById('410thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("411thlinkd")) {
 document.getElementById('411thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("412thlinkd")) {
 document.getElementById('412thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("413thlinkd")) {
 document.getElementById('413thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("414thlinkd")) {
 document.getElementById('414thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("415thlinkd")) {
 document.getElementById('415thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("416thlinkd")) {
 document.getElementById('416thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("417thlinkd")) {
 document.getElementById('417thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("418thlinkd")) {
 document.getElementById('418thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("419thlinkd")) {
 document.getElementById('419thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("420thlinkd")) {
 document.getElementById('420thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("421thlinkd")) {
 document.getElementById('421thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("422thlinkd")) {
 document.getElementById('422thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("423thlinkd")) {
 document.getElementById('423thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("424thlinkd")) {
 document.getElementById('424thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("425thlinkd")) {
 document.getElementById('425thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("426thlinkd")) {
 document.getElementById('426thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("427thlinkd")) {
 document.getElementById('427thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("428thlinkd")) {
 document.getElementById('428thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("429thlinkd")) {
 document.getElementById('429thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("430thlinkd")) {
 document.getElementById('430thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("431thlinkd")) {
 document.getElementById('431thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("432thlinkd")) {
 document.getElementById('432thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("433thlinkd")) {
 document.getElementById('433thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("434thlinkd")) {
 document.getElementById('434thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("435thlinkd")) {
 document.getElementById('435thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("436thlinkd")) {
 document.getElementById('436thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("437thlinkd")) {
 document.getElementById('437thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("438thlinkd")) {
 document.getElementById('438thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("439thlinkd")) {
 document.getElementById('439thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("440thlinkd")) {
 document.getElementById('440thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("441thlinkd")) {
 document.getElementById('441thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("442thlinkd")) {
 document.getElementById('442thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("443thlinkd")) {
 document.getElementById('443thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("444thlinkd")) {
 document.getElementById('444thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("445thlinkd")) {
 document.getElementById('445thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("446thlinkd")) {
 document.getElementById('446thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("447thlinkd")) {
 document.getElementById('447thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("448thlinkd")) {
 document.getElementById('448thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("449thlinkd")) {
 document.getElementById('449thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("450thlinkd")) {
 document.getElementById('450thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("451thlinkd")) {
 document.getElementById('451thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("452thlinkd")) {
 document.getElementById('452thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("453thlinkd")) {
 document.getElementById('453thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("454thlinkd")) {
 document.getElementById('454thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("455thlinkd")) {
 document.getElementById('455thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("456thlinkd")) {
 document.getElementById('456thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("457thlinkd")) {
 document.getElementById('457thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("458thlinkd")) {
 document.getElementById('458thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("459thlinkd")) {
 document.getElementById('459thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("460thlinkd")) {
 document.getElementById('460thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("461thlinkd")) {
 document.getElementById('461thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("462thlinkd")) {
 document.getElementById('462thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("463thlinkd")) {
 document.getElementById('463thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("464thlinkd")) {
 document.getElementById('464thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("465thlinkd")) {
 document.getElementById('465thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("466thlinkd")) {
 document.getElementById('466thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("467thlinkd")) {
 document.getElementById('467thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("468thlinkd")) {
 document.getElementById('468thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("469thlinkd")) {
 document.getElementById('469thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("470thlinkd")) {
 document.getElementById('470thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("471thlinkd")) {
 document.getElementById('471thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("472thlinkd")) {
 document.getElementById('472thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("473thlinkd")) {
 document.getElementById('473thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("474thlinkd")) {
 document.getElementById('474thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("475thlinkd")) {
 document.getElementById('475thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("476thlinkd")) {
 document.getElementById('476thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("477thlinkd")) {
 document.getElementById('477thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("478thlinkd")) {
 document.getElementById('478thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("479thlinkd")) {
 document.getElementById('479thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("480thlinkd")) {
 document.getElementById('480thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("481thlinkd")) {
 document.getElementById('481thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("482thlinkd")) {
 document.getElementById('482thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("483thlinkd")) {
 document.getElementById('483thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("484thlinkd")) {
 document.getElementById('484thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("485thlinkd")) {
 document.getElementById('485thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("486thlinkd")) {
 document.getElementById('486thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("487thlinkd")) {
 document.getElementById('487thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("488thlinkd")) {
 document.getElementById('488thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("489thlinkd")) {
 document.getElementById('489thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("490thlinkd")) {
 document.getElementById('490thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("491thlinkd")) {
 document.getElementById('491thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("492thlinkd")) {
 document.getElementById('492thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("493thlinkd")) {
 document.getElementById('493thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("494thlinkd")) {
 document.getElementById('494thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("495thlinkd")) {
 document.getElementById('495thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("496thlinkd")) {
 document.getElementById('496thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("497thlinkd")) {
 document.getElementById('497thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("498thlinkd")) {
 document.getElementById('498thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("499thlinkd")) {
 document.getElementById('499thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("500thlinkd")) {
 document.getElementById('500thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("501thlinkd")) {
 document.getElementById('501thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("502thlinkd")) {
 document.getElementById('502thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("503thlinkd")) {
 document.getElementById('503thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("504thlinkd")) {
 document.getElementById('504thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("505thlinkd")) {
 document.getElementById('505thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("506thlinkd")) {
 document.getElementById('506thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("507thlinkd")) {
 document.getElementById('507thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("508thlinkd")) {
 document.getElementById('508thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("509thlinkd")) {
 document.getElementById('509thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("510thlinkd")) {
 document.getElementById('510thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("511thlinkd")) {
 document.getElementById('511thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("512thlinkd")) {
 document.getElementById('512thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("513thlinkd")) {
 document.getElementById('513thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("514thlinkd")) {
 document.getElementById('514thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("515thlinkd")) {
 document.getElementById('515thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("516thlinkd")) {
 document.getElementById('516thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("517thlinkd")) {
 document.getElementById('517thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("518thlinkd")) {
 document.getElementById('518thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("519thlinkd")) {
 document.getElementById('519thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("520thlinkd")) {
 document.getElementById('520thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("521thlinkd")) {
 document.getElementById('521thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("522thlinkd")) {
 document.getElementById('522thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("523thlinkd")) {
 document.getElementById('523thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("524thlinkd")) {
 document.getElementById('524thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("525thlinkd")) {
 document.getElementById('525thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("526thlinkd")) {
 document.getElementById('526thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("527thlinkd")) {
 document.getElementById('527thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("528thlinkd")) {
 document.getElementById('528thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("529thlinkd")) {
 document.getElementById('529thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("530thlinkd")) {
 document.getElementById('530thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("531thlinkd")) {
 document.getElementById('531thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("532thlinkd")) {
 document.getElementById('532thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("533thlinkd")) {
 document.getElementById('533thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("534thlinkd")) {
 document.getElementById('534thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("535thlinkd")) {
 document.getElementById('535thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("536thlinkd")) {
 document.getElementById('536thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("537thlinkd")) {
 document.getElementById('537thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("538thlinkd")) {
 document.getElementById('538thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("539thlinkd")) {
 document.getElementById('539thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("540thlinkd")) {
 document.getElementById('540thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("541thlinkd")) {
 document.getElementById('541thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("542thlinkd")) {
 document.getElementById('542thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("543thlinkd")) {
 document.getElementById('543thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("544thlinkd")) {
 document.getElementById('544thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("545thlinkd")) {
 document.getElementById('545thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("546thlinkd")) {
 document.getElementById('546thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("547thlinkd")) {
 document.getElementById('547thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("548thlinkd")) {
 document.getElementById('548thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("549thlinkd")) {
 document.getElementById('549thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("550thlinkd")) {
 document.getElementById('550thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("551thlinkd")) {
 document.getElementById('551thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("552thlinkd")) {
 document.getElementById('552thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("553thlinkd")) {
 document.getElementById('553thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("554thlinkd")) {
 document.getElementById('554thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("555thlinkd")) {
 document.getElementById('555thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("556thlinkd")) {
 document.getElementById('556thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("557thlinkd")) {
 document.getElementById('557thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("558thlinkd")) {
 document.getElementById('558thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("559thlinkd")) {
 document.getElementById('559thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("560thlinkd")) {
 document.getElementById('560thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("561thlinkd")) {
 document.getElementById('561thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("562thlinkd")) {
 document.getElementById('562thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("563thlinkd")) {
 document.getElementById('563thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("564thlinkd")) {
 document.getElementById('564thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("565thlinkd")) {
 document.getElementById('565thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("566thlinkd")) {
 document.getElementById('566thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("567thlinkd")) {
 document.getElementById('567thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("568thlinkd")) {
 document.getElementById('568thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("569thlinkd")) {
 document.getElementById('569thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("570thlinkd")) {
 document.getElementById('570thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("571thlinkd")) {
 document.getElementById('571thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("572thlinkd")) {
 document.getElementById('572thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("573thlinkd")) {
 document.getElementById('573thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("574thlinkd")) {
 document.getElementById('574thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("575thlinkd")) {
 document.getElementById('575thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("576thlinkd")) {
 document.getElementById('576thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("577thlinkd")) {
 document.getElementById('577thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("578thlinkd")) {
 document.getElementById('578thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("579thlinkd")) {
 document.getElementById('579thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("580thlinkd")) {
 document.getElementById('580thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("581thlinkd")) {
 document.getElementById('581thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("582thlinkd")) {
 document.getElementById('582thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("583thlinkd")) {
 document.getElementById('583thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("584thlinkd")) {
 document.getElementById('584thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("585thlinkd")) {
 document.getElementById('585thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("586thlinkd")) {
 document.getElementById('586thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("587thlinkd")) {
 document.getElementById('587thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("588thlinkd")) {
 document.getElementById('588thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("589thlinkd")) {
 document.getElementById('589thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("590thlinkd")) {
 document.getElementById('590thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("591thlinkd")) {
 document.getElementById('591thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("592thlinkd")) {
 document.getElementById('592thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("593thlinkd")) {
 document.getElementById('593thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("594thlinkd")) {
 document.getElementById('594thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("595thlinkd")) {
 document.getElementById('595thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("596thlinkd")) {
 document.getElementById('596thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("597thlinkd")) {
 document.getElementById('597thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("598thlinkd")) {
 document.getElementById('598thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("599thlinkd")) {
 document.getElementById('599thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("600thlinkd")) {
 document.getElementById('600thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("601thlinkd")) {
 document.getElementById('601thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("602thlinkd")) {
 document.getElementById('602thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("603thlinkd")) {
 document.getElementById('603thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("604thlinkd")) {
 document.getElementById('604thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("605thlinkd")) {
 document.getElementById('605thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("606thlinkd")) {
 document.getElementById('606thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("607thlinkd")) {
 document.getElementById('607thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("608thlinkd")) {
 document.getElementById('608thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("609thlinkd")) {
 document.getElementById('609thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("610thlinkd")) {
 document.getElementById('610thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("611thlinkd")) {
 document.getElementById('611thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("612thlinkd")) {
 document.getElementById('612thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("613thlinkd")) {
 document.getElementById('613thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("614thlinkd")) {
 document.getElementById('614thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("615thlinkd")) {
 document.getElementById('615thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("616thlinkd")) {
 document.getElementById('616thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("617thlinkd")) {
 document.getElementById('617thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("618thlinkd")) {
 document.getElementById('618thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("619thlinkd")) {
 document.getElementById('619thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("620thlinkd")) {
 document.getElementById('620thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("621thlinkd")) {
 document.getElementById('621thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("622thlinkd")) {
 document.getElementById('622thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("623thlinkd")) {
 document.getElementById('623thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("624thlinkd")) {
 document.getElementById('624thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("625thlinkd")) {
 document.getElementById('625thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("626thlinkd")) {
 document.getElementById('626thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("627thlinkd")) {
 document.getElementById('627thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("628thlinkd")) {
 document.getElementById('628thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("629thlinkd")) {
 document.getElementById('629thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("630thlinkd")) {
 document.getElementById('630thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("631thlinkd")) {
 document.getElementById('631thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("632thlinkd")) {
 document.getElementById('632thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("633thlinkd")) {
 document.getElementById('633thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("634thlinkd")) {
 document.getElementById('634thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("635thlinkd")) {
 document.getElementById('635thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("636thlinkd")) {
 document.getElementById('636thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("637thlinkd")) {
 document.getElementById('637thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("638thlinkd")) {
 document.getElementById('638thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("639thlinkd")) {
 document.getElementById('639thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("640thlinkd")) {
 document.getElementById('640thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("641thlinkd")) {
 document.getElementById('641thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("642thlinkd")) {
 document.getElementById('642thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("643thlinkd")) {
 document.getElementById('643thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("644thlinkd")) {
 document.getElementById('644thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("645thlinkd")) {
 document.getElementById('645thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("646thlinkd")) {
 document.getElementById('646thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("647thlinkd")) {
 document.getElementById('647thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("648thlinkd")) {
 document.getElementById('648thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("649thlinkd")) {
 document.getElementById('649thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("650thlinkd")) {
 document.getElementById('650thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("651thlinkd")) {
 document.getElementById('651thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("652thlinkd")) {
 document.getElementById('652thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("653thlinkd")) {
 document.getElementById('653thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("654thlinkd")) {
 document.getElementById('654thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("655thlinkd")) {
 document.getElementById('655thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("656thlinkd")) {
 document.getElementById('656thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("657thlinkd")) {
 document.getElementById('657thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("658thlinkd")) {
 document.getElementById('658thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("659thlinkd")) {
 document.getElementById('659thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("660thlinkd")) {
 document.getElementById('660thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("661thlinkd")) {
 document.getElementById('661thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("662thlinkd")) {
 document.getElementById('662thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("663thlinkd")) {
 document.getElementById('663thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("664thlinkd")) {
 document.getElementById('664thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("665thlinkd")) {
 document.getElementById('665thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("666thlinkd")) {
 document.getElementById('666thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("667thlinkd")) {
 document.getElementById('667thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("668thlinkd")) {
 document.getElementById('668thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("669thlinkd")) {
 document.getElementById('669thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("670thlinkd")) {
 document.getElementById('670thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("671thlinkd")) {
 document.getElementById('671thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("672thlinkd")) {
 document.getElementById('672thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("673thlinkd")) {
 document.getElementById('673thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("674thlinkd")) {
 document.getElementById('674thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("675thlinkd")) {
 document.getElementById('675thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("676thlinkd")) {
 document.getElementById('676thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("677thlinkd")) {
 document.getElementById('677thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("678thlinkd")) {
 document.getElementById('678thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("679thlinkd")) {
 document.getElementById('679thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("680thlinkd")) {
 document.getElementById('680thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("681thlinkd")) {
 document.getElementById('681thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("682thlinkd")) {
 document.getElementById('682thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("683thlinkd")) {
 document.getElementById('683thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("684thlinkd")) {
 document.getElementById('684thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("685thlinkd")) {
 document.getElementById('685thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("686thlinkd")) {
 document.getElementById('686thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("687thlinkd")) {
 document.getElementById('687thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("688thlinkd")) {
 document.getElementById('688thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("689thlinkd")) {
 document.getElementById('689thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("690thlinkd")) {
 document.getElementById('690thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("691thlinkd")) {
 document.getElementById('691thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("692thlinkd")) {
 document.getElementById('692thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("693thlinkd")) {
 document.getElementById('693thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("694thlinkd")) {
 document.getElementById('694thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("695thlinkd")) {
 document.getElementById('695thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("696thlinkd")) {
 document.getElementById('696thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("697thlinkd")) {
 document.getElementById('697thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("698thlinkd")) {
 document.getElementById('698thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("699thlinkd")) {
 document.getElementById('699thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("700thlinkd")) {
 document.getElementById('700thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("701thlinkd")) {
 document.getElementById('701thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("702thlinkd")) {
 document.getElementById('702thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("703thlinkd")) {
 document.getElementById('703thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("704thlinkd")) {
 document.getElementById('704thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("705thlinkd")) {
 document.getElementById('705thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("706thlinkd")) {
 document.getElementById('706thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("707thlinkd")) {
 document.getElementById('707thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("708thlinkd")) {
 document.getElementById('708thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("709thlinkd")) {
 document.getElementById('709thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("710thlinkd")) {
 document.getElementById('710thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("711thlinkd")) {
 document.getElementById('711thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("712thlinkd")) {
 document.getElementById('712thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("713thlinkd")) {
 document.getElementById('713thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("714thlinkd")) {
 document.getElementById('714thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("715thlinkd")) {
 document.getElementById('715thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("716thlinkd")) {
 document.getElementById('716thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("717thlinkd")) {
 document.getElementById('717thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("718thlinkd")) {
 document.getElementById('718thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("719thlinkd")) {
 document.getElementById('719thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("720thlinkd")) {
 document.getElementById('720thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("721thlinkd")) {
 document.getElementById('721thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("722thlinkd")) {
 document.getElementById('722thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("723thlinkd")) {
 document.getElementById('723thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("724thlinkd")) {
 document.getElementById('724thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("725thlinkd")) {
 document.getElementById('725thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("726thlinkd")) {
 document.getElementById('726thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("727thlinkd")) {
 document.getElementById('727thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("728thlinkd")) {
 document.getElementById('728thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("729thlinkd")) {
 document.getElementById('729thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("730thlinkd")) {
 document.getElementById('730thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("731thlinkd")) {
 document.getElementById('731thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("732thlinkd")) {
 document.getElementById('732thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("733thlinkd")) {
 document.getElementById('733thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("734thlinkd")) {
 document.getElementById('734thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("735thlinkd")) {
 document.getElementById('735thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("736thlinkd")) {
 document.getElementById('736thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("737thlinkd")) {
 document.getElementById('737thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("738thlinkd")) {
 document.getElementById('738thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("739thlinkd")) {
 document.getElementById('739thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("740thlinkd")) {
 document.getElementById('740thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("741thlinkd")) {
 document.getElementById('741thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("742thlinkd")) {
 document.getElementById('742thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("743thlinkd")) {
 document.getElementById('743thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("744thlinkd")) {
 document.getElementById('744thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("745thlinkd")) {
 document.getElementById('745thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("746thlinkd")) {
 document.getElementById('746thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("747thlinkd")) {
 document.getElementById('747thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("748thlinkd")) {
 document.getElementById('748thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("749thlinkd")) {
 document.getElementById('749thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("750thlinkd")) {
 document.getElementById('750thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("751thlinkd")) {
 document.getElementById('751thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("752thlinkd")) {
 document.getElementById('752thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("753thlinkd")) {
 document.getElementById('753thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("754thlinkd")) {
 document.getElementById('754thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("755thlinkd")) {
 document.getElementById('755thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("756thlinkd")) {
 document.getElementById('756thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("757thlinkd")) {
 document.getElementById('757thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("758thlinkd")) {
 document.getElementById('758thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("759thlinkd")) {
 document.getElementById('759thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("760thlinkd")) {
 document.getElementById('760thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("761thlinkd")) {
 document.getElementById('761thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("762thlinkd")) {
 document.getElementById('762thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("763thlinkd")) {
 document.getElementById('763thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("764thlinkd")) {
 document.getElementById('764thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("765thlinkd")) {
 document.getElementById('765thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("766thlinkd")) {
 document.getElementById('766thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("767thlinkd")) {
 document.getElementById('767thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("768thlinkd")) {
 document.getElementById('768thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("769thlinkd")) {
 document.getElementById('769thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("770thlinkd")) {
 document.getElementById('770thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("771thlinkd")) {
 document.getElementById('771thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("772thlinkd")) {
 document.getElementById('772thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("773thlinkd")) {
 document.getElementById('773thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("774thlinkd")) {
 document.getElementById('774thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("775thlinkd")) {
 document.getElementById('775thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("776thlinkd")) {
 document.getElementById('776thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("777thlinkd")) {
 document.getElementById('777thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("778thlinkd")) {
 document.getElementById('778thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("779thlinkd")) {
 document.getElementById('779thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("780thlinkd")) {
 document.getElementById('780thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("781thlinkd")) {
 document.getElementById('781thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("782thlinkd")) {
 document.getElementById('782thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("783thlinkd")) {
 document.getElementById('783thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("784thlinkd")) {
 document.getElementById('784thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("785thlinkd")) {
 document.getElementById('785thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("786thlinkd")) {
 document.getElementById('786thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("787thlinkd")) {
 document.getElementById('787thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("788thlinkd")) {
 document.getElementById('788thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("789thlinkd")) {
 document.getElementById('789thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("790thlinkd")) {
 document.getElementById('790thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("791thlinkd")) {
 document.getElementById('791thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("792thlinkd")) {
 document.getElementById('792thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("793thlinkd")) {
 document.getElementById('793thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("794thlinkd")) {
 document.getElementById('794thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("795thlinkd")) {
 document.getElementById('795thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("796thlinkd")) {
 document.getElementById('796thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("797thlinkd")) {
 document.getElementById('797thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("798thlinkd")) {
 document.getElementById('798thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("799thlinkd")) {
 document.getElementById('799thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("800thlinkd")) {
 document.getElementById('800thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("801thlinkd")) {
 document.getElementById('801thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("802thlinkd")) {
 document.getElementById('802thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("803thlinkd")) {
 document.getElementById('803thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("804thlinkd")) {
 document.getElementById('804thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("805thlinkd")) {
 document.getElementById('805thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("806thlinkd")) {
 document.getElementById('806thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("807thlinkd")) {
 document.getElementById('807thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("808thlinkd")) {
 document.getElementById('808thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("809thlinkd")) {
 document.getElementById('809thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("810thlinkd")) {
 document.getElementById('810thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("811thlinkd")) {
 document.getElementById('811thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("812thlinkd")) {
 document.getElementById('812thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("813thlinkd")) {
 document.getElementById('813thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("814thlinkd")) {
 document.getElementById('814thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("815thlinkd")) {
 document.getElementById('815thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("816thlinkd")) {
 document.getElementById('816thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("817thlinkd")) {
 document.getElementById('817thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("818thlinkd")) {
 document.getElementById('818thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("819thlinkd")) {
 document.getElementById('819thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("820thlinkd")) {
 document.getElementById('820thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("821thlinkd")) {
 document.getElementById('821thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("822thlinkd")) {
 document.getElementById('822thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("823thlinkd")) {
 document.getElementById('823thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("824thlinkd")) {
 document.getElementById('824thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("825thlinkd")) {
 document.getElementById('825thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("826thlinkd")) {
 document.getElementById('826thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("827thlinkd")) {
 document.getElementById('827thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("828thlinkd")) {
 document.getElementById('828thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("829thlinkd")) {
 document.getElementById('829thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("830thlinkd")) {
 document.getElementById('830thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("831thlinkd")) {
 document.getElementById('831thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("832thlinkd")) {
 document.getElementById('832thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("833thlinkd")) {
 document.getElementById('833thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("834thlinkd")) {
 document.getElementById('834thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("835thlinkd")) {
 document.getElementById('835thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("836thlinkd")) {
 document.getElementById('836thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("837thlinkd")) {
 document.getElementById('837thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("838thlinkd")) {
 document.getElementById('838thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("839thlinkd")) {
 document.getElementById('839thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("840thlinkd")) {
 document.getElementById('840thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("841thlinkd")) {
 document.getElementById('841thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("842thlinkd")) {
 document.getElementById('842thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("843thlinkd")) {
 document.getElementById('843thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("844thlinkd")) {
 document.getElementById('844thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("845thlinkd")) {
 document.getElementById('845thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("846thlinkd")) {
 document.getElementById('846thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("847thlinkd")) {
 document.getElementById('847thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("848thlinkd")) {
 document.getElementById('848thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("849thlinkd")) {
 document.getElementById('849thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("850thlinkd")) {
 document.getElementById('850thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("851thlinkd")) {
 document.getElementById('851thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("852thlinkd")) {
 document.getElementById('852thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("853thlinkd")) {
 document.getElementById('853thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("854thlinkd")) {
 document.getElementById('854thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("855thlinkd")) {
 document.getElementById('855thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("856thlinkd")) {
 document.getElementById('856thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("857thlinkd")) {
 document.getElementById('857thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("858thlinkd")) {
 document.getElementById('858thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("859thlinkd")) {
 document.getElementById('859thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("860thlinkd")) {
 document.getElementById('860thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("861thlinkd")) {
 document.getElementById('861thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("862thlinkd")) {
 document.getElementById('862thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("863thlinkd")) {
 document.getElementById('863thlinkd').style.backgroundColor = "violet";
}
if (localStorage.getItem("864thlinkd")) {
 document.getElementById('864thlinkd').style.backgroundColor = "violet";
}



