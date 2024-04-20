window.addEventListener("load", function () {
 document.getElementById("nav").addEventListener("click", function (e) {
  if (e.target.classList.contains("link")) {
   location = e.target.getAttribute("data-link");
  }
 })
})

var divItems = document.getElementsByClassName("link");




function selected(item) {

 if (item.style.backgroundColor == 'lime') {
  // unset the item that is already selected
  item.style.backgroundColor = 'white';
  localStorage.removeItem(item.id);
 } else {
  item.style.backgroundColor = 'lime';

  console.log(item.id);
  localStorage.setItem(item.id, 'any value');
 }

}

if (localStorage.getItem("firstlinkc")) {
 document.getElementById('firstlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("secondlinkc")) {
 document.getElementById('secondlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("thirdlinkc")) {
 document.getElementById('thirdlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("fourthlinkc")) {
 document.getElementById('fourthlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("fifthlinkc")) {
 document.getElementById('fifthlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("sixthlinkc")) {
 document.getElementById('sixthlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("seventhlinkc")) {
 document.getElementById('seventhlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("eighthlinkc")) {
 document.getElementById('eighthlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("ninthlinkc")) {
 document.getElementById('ninthlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("tenthlinkc")) {
 document.getElementById('tenthlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("eleventhlinkc")) {
 document.getElementById('eleventhlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("twelvthinkc")) {
 document.getElementById('twelvthinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("thirtenthlinkc")) {
 document.getElementById('thirtenthlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("fourteenthlinkc")) {
 document.getElementById('fourteenthlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("fifteenthlinkc")) {
 document.getElementById('fifteenthlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("sixteenthlinkc")) {
 document.getElementById('sixteenthlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("seventeenthlinkc")) {
 document.getElementById('seventeenthlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("eighteenthlinkc")) {
 document.getElementById('eighteenthlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("nineteenthlinkc")) {
 document.getElementById('nineteenthlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("20thlinkc")) {
 document.getElementById('20thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("21thlinkc")) {
 document.getElementById('21thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("22thlinkc")) {
 document.getElementById('22thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("23thlinkc")) {
 document.getElementById('23thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("24thlinkc")) {
 document.getElementById('24thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("25thlinkc")) {
 document.getElementById('25thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("26thlinkc")) {
 document.getElementById('26thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("27thlinkc")) {
 document.getElementById('27thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("28thlinkc")) {
 document.getElementById('28thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("29thlinkc")) {
 document.getElementById('29thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("30thlinkc")) {
 document.getElementById('30thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("31thlinkc")) {
 document.getElementById('31thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("32thlinkc")) {
 document.getElementById('32thlinkc').style.backgroundColor = "lime";
}

if (localStorage.getItem("33thlinkc")) {
 document.getElementById('33thlinkc').style.backgroundColor = "lime";
}

if (localStorage.getItem("34thlinkc")) {
 document.getElementById('34thlinkc').style.backgroundColor = "lime";
}

if (localStorage.getItem("35thlinkc")) {
 document.getElementById('35thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("36thlinkc")) {
 document.getElementById('36thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("37thlinkc")) {
 document.getElementById('37thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("38thlinkc")) {
 document.getElementById('38thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("39thlinkc")) {
 document.getElementById('39thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("40thlinkc")) {
 document.getElementById('40thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("41thlinkc")) {
 document.getElementById('41thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("42thlinkc")) {
 document.getElementById('42thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("43thlinkc")) {
 document.getElementById('43thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("44thlinkc")) {
 document.getElementById('44thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("45thlinkc")) {
 document.getElementById('45thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("46thlinkc")) {
 document.getElementById('46thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("47thlinkc")) {
 document.getElementById('47thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("48thlinkc")) {
 document.getElementById('48thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("49thlinkc")) {
 document.getElementById('49thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("50thlinkc")) {
 document.getElementById('50thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("51thlinkc")) {
 document.getElementById('51thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("52thlinkc")) {
 document.getElementById('52thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("53thlinkc")) {
 document.getElementById('53thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("54thlinkc")) {
 document.getElementById('54thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("55thlinkc")) {
 document.getElementById('55thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("56thlinkc")) {
 document.getElementById('56thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("57thlinkc")) {
 document.getElementById('57thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("58thlinkc")) {
 document.getElementById('58thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("59thlinkc")) {
 document.getElementById('59thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("60thlinkc")) {
 document.getElementById('60thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("61thlinkc")) {
 document.getElementById('61thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("62thlinkc")) {
 document.getElementById('62thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("63thlinkc")) {
 document.getElementById('63thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("64thlinkc")) {
 document.getElementById('64thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("65thlinkc")) {
 document.getElementById('65thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("66thlinkc")) {
 document.getElementById('66thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("67thlinkc")) {
 document.getElementById('67thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("68thlinkc")) {
 document.getElementById('68thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("69thlinkc")) {
 document.getElementById('69thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("70thlinkc")) {
 document.getElementById('70thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("71thlinkc")) {
 document.getElementById('71thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("72thlinkc")) {
 document.getElementById('72thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("73thlinkc")) {
 document.getElementById('73thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("74thlinkc")) {
 document.getElementById('74thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("75thlinkc")) {
 document.getElementById('75thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("76thlinkc")) {
 document.getElementById('76thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("77thlinkc")) {
 document.getElementById('77thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("78thlinkc")) {
 document.getElementById('78thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("79thlinkc")) {
 document.getElementById('79thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("80thlinkc")) {
 document.getElementById('80thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("81thlinkc")) {
 document.getElementById('81thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("82thlinkc")) {
 document.getElementById('82thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("83thlinkc")) {
 document.getElementById('83thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("84thlinkc")) {
 document.getElementById('84thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("85thlinkc")) {
 document.getElementById('85thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("86thlinkc")) {
 document.getElementById('86thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("87thlinkc")) {
 document.getElementById('87thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("88thlinkc")) {
 document.getElementById('88thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("89thlinkc")) {
 document.getElementById('89thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("90thlinkc")) {
 document.getElementById('90thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("91thlinkc")) {
 document.getElementById('91thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("92thlinkc")) {
 document.getElementById('92thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("93thlinkc")) {
 document.getElementById('93thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("94thlinkc")) {
 document.getElementById('94thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("95thlinkc")) {
 document.getElementById('95thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("96thlinkc")) {
 document.getElementById('96thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("97thlinkc")) {
 document.getElementById('97thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("98thlinkc")) {
 document.getElementById('98thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("99thlinkc")) {
 document.getElementById('99thlink').style.backgroundColor = "lime";
}
if (localStorage.getItem("100thlinkc")) {
 document.getElementById('100thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("101thlinkc")) {
 document.getElementById('101thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("102thlinkc")) {
 document.getElementById('102thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("103thlinkc")) {
 document.getElementById('103thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("104thlinkc")) {
 document.getElementById('104thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("105thlinkc")) {
 document.getElementById('105thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("106thlinkc")) {
 document.getElementById('106thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("107thlinkc")) {
 document.getElementById('107thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("108thlinkc")) {
 document.getElementById('108thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("109thlinkc")) {
 document.getElementById('109thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("110thlinkc")) {
 document.getElementById('110thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("111thlinkc")) {
 document.getElementById('111thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("112thlinkc")) {
 document.getElementById('112thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("113thlinkc")) {
 document.getElementById('113thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("114thlinkc")) {
 document.getElementById('114thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("115thlinkc")) {
 document.getElementById('115thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("116thlinkc")) {
 document.getElementById('116thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("117thlinkc")) {
 document.getElementById('117thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("118thlinkc")) {
 document.getElementById('118thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("119thlinkc")) {
 document.getElementById('119thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("120thlinkc")) {
 document.getElementById('120thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("121thlinkc")) {
 document.getElementById('121thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("122thlinkc")) {
 document.getElementById('122thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("123thlinkc")) {
 document.getElementById('123thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("124thlinkc")) {
 document.getElementById('124thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("125thlinkc")) {
 document.getElementById('125thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("126thlinkc")) {
 document.getElementById('126thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("127thlinkc")) {
 document.getElementById('127thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("128thlinkc")) {
 document.getElementById('128thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("129thlinkc")) {
 document.getElementById('129thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("130thlinkc")) {
 document.getElementById('130thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("131thlinkc")) {
 document.getElementById('131thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("132thlinkc")) {
 document.getElementById('132thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("133thlinkc")) {
 document.getElementById('133thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("134thlinkc")) {
 document.getElementById('134thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("135thlinkc")) {
 document.getElementById('135thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("136thlinkc")) {
 document.getElementById('136thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("137thlinkc")) {
 document.getElementById('137thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("138thlinkc")) {
 document.getElementById('138thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("139thlinkc")) {
 document.getElementById('139thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("140thlinkc")) {
 document.getElementById('140thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("141thlinkc")) {
 document.getElementById('141thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("142thlinkc")) {
 document.getElementById('142thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("143thlinkc")) {
 document.getElementById('143thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("144thlinkc")) {
 document.getElementById('144thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("145thlinkc")) {
 document.getElementById('145thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("146thlinkc")) {
 document.getElementById('146thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("147thlinkc")) {
 document.getElementById('147thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("148thlinkc")) {
 document.getElementById('148thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("149thlinkc")) {
 document.getElementById('149thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("150thlinkc")) {
 document.getElementById('150thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("151thlinkc")) {
 document.getElementById('151thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("152thlinkc")) {
 document.getElementById('152thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("153thlinkc")) {
 document.getElementById('153thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("154thlinkc")) {
 document.getElementById('154thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("155thlinkc")) {
 document.getElementById('155thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("156thlinkc")) {
 document.getElementById('156thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("157thlinkc")) {
 document.getElementById('157thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("158thlinkc")) {
 document.getElementById('158thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("159thlinkc")) {
 document.getElementById('159thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("160thlinkc")) {
 document.getElementById('160thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("161thlinkc")) {
 document.getElementById('161thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("162thlinkc")) {
 document.getElementById('162thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("163thlinkc")) {
 document.getElementById('163thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("164thlinkc")) {
 document.getElementById('164thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("165thlinkc")) {
 document.getElementById('165thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("166thlinkc")) {
 document.getElementById('166thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("167thlinkc")) {
 document.getElementById('167thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("168thlinkc")) {
 document.getElementById('168thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("169thlinkc")) {
 document.getElementById('169thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("170thlinkc")) {
 document.getElementById('170thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("171thlinkc")) {
 document.getElementById('171thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("172thlinkc")) {
 document.getElementById('172thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("173thlinkc")) {
 document.getElementById('173thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("174thlinkc")) {
 document.getElementById('174thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("175thlinkc")) {
 document.getElementById('175thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("176thlinkc")) {
 document.getElementById('176thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("177thlinkc")) {
 document.getElementById('177thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("178thlinkc")) {
 document.getElementById('178thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("179thlinkc")) {
 document.getElementById('179thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("180thlinkc")) {
 document.getElementById('180thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("181thlinkc")) {
 document.getElementById('181thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("182thlinkc")) {
 document.getElementById('182thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("183thlinkc")) {
 document.getElementById('183thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("184thlinkc")) {
 document.getElementById('184thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("185thlinkc")) {
 document.getElementById('185thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("186thlinkc")) {
 document.getElementById('186thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("187thlinkc")) {
 document.getElementById('187thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("188thlinkc")) {
 document.getElementById('188thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("189thlinkc")) {
 document.getElementById('189thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("190thlinkc")) {
 document.getElementById('190thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("191thlinkc")) {
 document.getElementById('191thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("192thlinkc")) {
 document.getElementById('192thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("193thlinkc")) {
 document.getElementById('193thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("194thlinkc")) {
 document.getElementById('194thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("195thlinkc")) {
 document.getElementById('195thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("196thlinkc")) {
 document.getElementById('196thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("197thlinkc")) {
 document.getElementById('197thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("198thlinkc")) {
 document.getElementById('198thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("199thlinkc")) {
 document.getElementById('199thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("200thlinkc")) {
 document.getElementById('200thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("201thlinkc")) {
 document.getElementById('201thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("202thlinkc")) {
 document.getElementById('202thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("203thlinkc")) {
 document.getElementById('203thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("204thlinkc")) {
 document.getElementById('204thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("205thlinkc")) {
 document.getElementById('205thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("206thlinkc")) {
 document.getElementById('206thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("207thlinkc")) {
 document.getElementById('207thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("208thlinkc")) {
 document.getElementById('208thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("209thlinkc")) {
 document.getElementById('209thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("210thlinkc")) {
 document.getElementById('210thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("211thlinkc")) {
 document.getElementById('211thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("212thlinkc")) {
 document.getElementById('212thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("213thlinkc")) {
 document.getElementById('213thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("214thlinkc")) {
 document.getElementById('214thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("215thlinkc")) {
 document.getElementById('215thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("216thlinkc")) {
 document.getElementById('216thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("217thlinkc")) {
 document.getElementById('217thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("218thlinkc")) {
 document.getElementById('218thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("219thlinkc")) {
 document.getElementById('219thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("220thlinkc")) {
 document.getElementById('220thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("221thlinkc")) {
 document.getElementById('221thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("222thlinkc")) {
 document.getElementById('222thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("223thlinkc")) {
 document.getElementById('223thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("224thlinkc")) {
 document.getElementById('224thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("225thlinkc")) {
 document.getElementById('225thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("226thlinkc")) {
 document.getElementById('226thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("227thlinkc")) {
 document.getElementById('227thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("228thlinkc")) {
 document.getElementById('228thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("229thlinkc")) {
 document.getElementById('229thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("230thlinkc")) {
 document.getElementById('230thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("231thlinkc")) {
 document.getElementById('231thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("232thlinkc")) {
 document.getElementById('232thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("233thlinkc")) {
 document.getElementById('233thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("234thlinkc")) {
 document.getElementById('234thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("235thlinkc")) {
 document.getElementById('235thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("236thlinkc")) {
 document.getElementById('236thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("237thlinkc")) {
 document.getElementById('237thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("238thlinkc")) {
 document.getElementById('238thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("239thlinkc")) {
 document.getElementById('239thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("240thlinkc")) {
 document.getElementById('240thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("241thlinkc")) {
 document.getElementById('241thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("242thlinkc")) {
 document.getElementById('242thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("243thlinkc")) {
 document.getElementById('243thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("244thlinkc")) {
 document.getElementById('244thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("245thlinkc")) {
 document.getElementById('245thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("246thlinkc")) {
 document.getElementById('246thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("247thlinkc")) {
 document.getElementById('247thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("248thlinkc")) {
 document.getElementById('248thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("249thlinkc")) {
 document.getElementById('249thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("250thlinkc")) {
 document.getElementById('250thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("251thlinkc")) {
 document.getElementById('251thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("252thlinkc")) {
 document.getElementById('252thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("253thlinkc")) {
 document.getElementById('253thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("254thlinkc")) {
 document.getElementById('254thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("255thlinkc")) {
 document.getElementById('255thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("256thlinkc")) {
 document.getElementById('256thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("257thlinkc")) {
 document.getElementById('257thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("258thlinkc")) {
 document.getElementById('258thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("259thlinkc")) {
 document.getElementById('259thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("260thlinkc")) {
 document.getElementById('260thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("261thlinkc")) {
 document.getElementById('261thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("262thlinkc")) {
 document.getElementById('262thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("263thlinkc")) {
 document.getElementById('263thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("264thlinkc")) {
 document.getElementById('264thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("265thlinkc")) {
 document.getElementById('265thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("266thlinkc")) {
 document.getElementById('266thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("267thlinkc")) {
 document.getElementById('267thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("268thlinkc")) {
 document.getElementById('268thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("269thlinkc")) {
 document.getElementById('269thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("270thlinkc")) {
 document.getElementById('270thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("271thlinkc")) {
 document.getElementById('271thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("272thlinkc")) {
 document.getElementById('272thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("273thlinkc")) {
 document.getElementById('273thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("274thlinkc")) {
 document.getElementById('274thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("275thlinkc")) {
 document.getElementById('275thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("276thlinkc")) {
 document.getElementById('276thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("277thlinkc")) {
 document.getElementById('277thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("278thlinkc")) {
 document.getElementById('278thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("279thlinkc")) {
 document.getElementById('279thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("280thlinkc")) {
 document.getElementById('280thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("281thlinkc")) {
 document.getElementById('281thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("282thlinkc")) {
 document.getElementById('282thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("283thlinkc")) {
 document.getElementById('283thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("284thlinkc")) {
 document.getElementById('284thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("285thlinkc")) {
 document.getElementById('285thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("286thlinkc")) {
 document.getElementById('286thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("287thlinkc")) {
 document.getElementById('287thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("288thlinkc")) {
 document.getElementById('288thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("289thlinkc")) {
 document.getElementById('289thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("290thlinkc")) {
 document.getElementById('290thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("291thlinkc")) {
 document.getElementById('291thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("292thlinkc")) {
 document.getElementById('292thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("293thlinkc")) {
 document.getElementById('293thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("294thlinkc")) {
 document.getElementById('294thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("295thlinkc")) {
 document.getElementById('295thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("296thlinkc")) {
 document.getElementById('296thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("297thlinkc")) {
 document.getElementById('297thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("298thlinkc")) {
 document.getElementById('298thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("299thlinkc")) {
 document.getElementById('299thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("300thlinkc")) {
 document.getElementById('300thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("301thlinkc")) {
 document.getElementById('301thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("302thlinkc")) {
 document.getElementById('302thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("303thlinkc")) {
 document.getElementById('303thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("304thlinkc")) {
 document.getElementById('304thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("305thlinkc")) {
 document.getElementById('305thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("306thlinkc")) {
 document.getElementById('306thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("307thlinkc")) {
 document.getElementById('307thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("308thlinkc")) {
 document.getElementById('308thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("309thlinkc")) {
 document.getElementById('309thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("310thlinkc")) {
 document.getElementById('310thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("311thlinkc")) {
 document.getElementById('311thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("312thlinkc")) {
 document.getElementById('312thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("313thlinkc")) {
 document.getElementById('313thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("314thlinkc")) {
 document.getElementById('314thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("315thlinkc")) {
 document.getElementById('315thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("316thlinkc")) {
 document.getElementById('316thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("317thlinkc")) {
 document.getElementById('317thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("318thlinkc")) {
 document.getElementById('318thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("319thlinkc")) {
 document.getElementById('319thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("320thlinkc")) {
 document.getElementById('320thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("321thlinkc")) {
 document.getElementById('321thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("322thlinkc")) {
 document.getElementById('322thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("323thlinkc")) {
 document.getElementById('323thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("324thlinkc")) {
 document.getElementById('324thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("325thlinkc")) {
 document.getElementById('325thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("326thlinkc")) {
 document.getElementById('326thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("327thlinkc")) {
 document.getElementById('327thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("328thlinkc")) {
 document.getElementById('328thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("329thlinkc")) {
 document.getElementById('329thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("330thlinkc")) {
 document.getElementById('330thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("331thlinkc")) {
 document.getElementById('331thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("332thlinkc")) {
 document.getElementById('332thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("333thlinkc")) {
 document.getElementById('333thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("334thlinkc")) {
 document.getElementById('334thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("335thlinkc")) {
 document.getElementById('335thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("336thlinkc")) {
 document.getElementById('336thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("337thlinkc")) {
 document.getElementById('337thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("338thlinkc")) {
 document.getElementById('338thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("339thlinkc")) {
 document.getElementById('339thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("340thlinkc")) {
 document.getElementById('340thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("341thlinkc")) {
 document.getElementById('341thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("342thlinkc")) {
 document.getElementById('342thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("343thlinkc")) {
 document.getElementById('343thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("344thlinkc")) {
 document.getElementById('344thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("345thlinkc")) {
 document.getElementById('345thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("346thlinkc")) {
 document.getElementById('346thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("347thlinkc")) {
 document.getElementById('347thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("348thlinkc")) {
 document.getElementById('348thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("349thlinkc")) {
 document.getElementById('349thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("350thlinkc")) {
 document.getElementById('350thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("351thlinkc")) {
 document.getElementById('351thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("352thlinkc")) {
 document.getElementById('352thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("353thlinkc")) {
 document.getElementById('353thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("354thlinkc")) {
 document.getElementById('354thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("355thlinkc")) {
 document.getElementById('355thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("356thlinkc")) {
 document.getElementById('356thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("357thlinkc")) {
 document.getElementById('357thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("358thlinkc")) {
 document.getElementById('358thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("359thlinkc")) {
 document.getElementById('359thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("360thlinkc")) {
 document.getElementById('360thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("361thlinkc")) {
 document.getElementById('361thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("362thlinkc")) {
 document.getElementById('362thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("363thlinkc")) {
 document.getElementById('363thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("364thlinkc")) {
 document.getElementById('364thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("365thlinkc")) {
 document.getElementById('365thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("366thlinkc")) {
 document.getElementById('366thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("367thlinkc")) {
 document.getElementById('367thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("368thlinkc")) {
 document.getElementById('368thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("369thlinkc")) {
 document.getElementById('369thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("370thlinkc")) {
 document.getElementById('370thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("371thlinkc")) {
 document.getElementById('371thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("372thlinkc")) {
 document.getElementById('372thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("373thlinkc")) {
 document.getElementById('373thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("374thlinkc")) {
 document.getElementById('374thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("375thlinkc")) {
 document.getElementById('375thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("376thlinkc")) {
 document.getElementById('376thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("377thlinkc")) {
 document.getElementById('377thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("378thlinkc")) {
 document.getElementById('378thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("379thlinkc")) {
 document.getElementById('379thlink').style.backgroundColor = "lime";
}
if (localStorage.getItem("380thlinkc")) {
 document.getElementById('380thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("381thlinkc")) {
 document.getElementById('381thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("382thlinkc")) {
 document.getElementById('382thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("383thlinkc")) {
 document.getElementById('383thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("384thlinkc")) {
 document.getElementById('384thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("385thlinkc")) {
 document.getElementById('385thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("386thlinkc")) {
 document.getElementById('386thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("387thlinkc")) {
 document.getElementById('387thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("388thlinkc")) {
 document.getElementById('388thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("389thlinkc")) {
 document.getElementById('389thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("390thlinkc")) {
 document.getElementById('390thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("391thlinkc")) {
 document.getElementById('391thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("392thlinkc")) {
 document.getElementById('392thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("393thlinkc")) {
 document.getElementById('393thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("394thlinkc")) {
 document.getElementById('394thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("395thlinkc")) {
 document.getElementById('395thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("396thlinkc")) {
 document.getElementById('396thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("397thlinkc")) {
 document.getElementById('397thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("398thlinkc")) {
 document.getElementById('398thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("399thlinkc")) {
 document.getElementById('399thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("400thlinkc")) {
 document.getElementById('400thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("401thlinkc")) {
 document.getElementById('401thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("402thlinkc")) {
 document.getElementById('402thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("403thlinkc")) {
 document.getElementById('403thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("404thlinkc")) {
 document.getElementById('404thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("405thlinkc")) {
 document.getElementById('405thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("406thlinkc")) {
 document.getElementById('406thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("407thlinkc")) {
 document.getElementById('407thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("408thlinkc")) {
 document.getElementById('408thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("409thlinkc")) {
 document.getElementById('409thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("410thlinkc")) {
 document.getElementById('410thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("411thlinkc")) {
 document.getElementById('411thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("412thlinkc")) {
 document.getElementById('412thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("413thlinkc")) {
 document.getElementById('413thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("414thlinkc")) {
 document.getElementById('414thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("415thlinkc")) {
 document.getElementById('415thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("416thlinkc")) {
 document.getElementById('416thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("417thlinkc")) {
 document.getElementById('417thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("418thlinkc")) {
 document.getElementById('418thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("419thlinkc")) {
 document.getElementById('419thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("420thlinkc")) {
 document.getElementById('420thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("421thlinkc")) {
 document.getElementById('421thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("422thlinkc")) {
 document.getElementById('422thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("423thlinkc")) {
 document.getElementById('423thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("424thlinkc")) {
 document.getElementById('424thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("425thlinkc")) {
 document.getElementById('425thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("426thlinkc")) {
 document.getElementById('426thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("427thlinkc")) {
 document.getElementById('427thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("428thlinkc")) {
 document.getElementById('428thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("429thlinkc")) {
 document.getElementById('429thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("430thlinkc")) {
 document.getElementById('430thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("431thlinkc")) {
 document.getElementById('431thlinkc').style.backgroundColor = "lime";
}
if (localStorage.getItem("432thlinkc")) {
 document.getElementById('432thlinkc').style.backgroundColor = "lime";
}
