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

if (localStorage.getItem("firstlink")) {
 document.getElementById('firstlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("secondlink")) {
 document.getElementById('secondlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("thirdlink")) {
 document.getElementById('thirdlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("fourthlink")) {
 document.getElementById('fourthlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("fifthlink")) {
 document.getElementById('fifthlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("sixthlink")) {
 document.getElementById('sixthlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("seventhlink")) {
 document.getElementById('seventhlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("eighthlink")) {
 document.getElementById('eighthlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("ninthlink")) {
 document.getElementById('ninthlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("tenthlink")) {
 document.getElementById('tenthlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("eleventhlink")) {
 document.getElementById('eleventhlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("twelvthink")) {
 document.getElementById('twelvthink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("thirtenthlink")) {
 document.getElementById('thirtenthlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("fourteenthlink")) {
 document.getElementById('fourteenthlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("fifteenthlink")) {
 document.getElementById('fifteenthlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("sixteenthlink")) {
 document.getElementById('sixteenthlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("seventeenthlink")) {
 document.getElementById('seventeenthlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("eighteenthlink")) {
 document.getElementById('eighteenthlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("nineteenthlink")) {
 document.getElementById('nineteenthlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("20thlink")) {
 document.getElementById('20thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("21thlink")) {
 document.getElementById('21thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("22thlink")) {
 document.getElementById('22thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("23thlink")) {
 document.getElementById('23thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("24thlink")) {
 document.getElementById('24thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("25thlink")) {
 document.getElementById('25thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("26thlink")) {
 document.getElementById('26thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("27thlink")) {
 document.getElementById('27thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("28thlink")) {
 document.getElementById('28thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("29thlink")) {
 document.getElementById('29thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("30thlink")) {
 document.getElementById('30thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("31thlink")) {
 document.getElementById('31thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("32thlink")) {
 document.getElementById('32thlink').style.backgroundColor = "aqua";
}

if (localStorage.getItem("33thlink")) {
 document.getElementById('33thlink').style.backgroundColor = "aqua";
}

if (localStorage.getItem("34thlink")) {
 document.getElementById('34thlink').style.backgroundColor = "aqua";
}

if (localStorage.getItem("35thlink")) {
 document.getElementById('35thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("36thlink")) {
 document.getElementById('36thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("37thlink")) {
 document.getElementById('37thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("38thlink")) {
 document.getElementById('38thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("39thlink")) {
 document.getElementById('39thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("40thlink")) {
 document.getElementById('40thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("41thlink")) {
 document.getElementById('41thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("42thlink")) {
 document.getElementById('42thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("43thlink")) {
 document.getElementById('43thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("44thlink")) {
 document.getElementById('44thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("45thlink")) {
 document.getElementById('45thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("46thlink")) {
 document.getElementById('46thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("47thlink")) {
 document.getElementById('47thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("48thlink")) {
 document.getElementById('48thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("49thlink")) {
 document.getElementById('49thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("50thlink")) {
 document.getElementById('50thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("51thlink")) {
 document.getElementById('51thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("52thlink")) {
 document.getElementById('52thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("53thlink")) {
 document.getElementById('53thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("54thlink")) {
 document.getElementById('54thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("55thlink")) {
 document.getElementById('55thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("56thlink")) {
 document.getElementById('56thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("57thlink")) {
 document.getElementById('57thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("58thlink")) {
 document.getElementById('58thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("59thlink")) {
 document.getElementById('59thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("60thlink")) {
 document.getElementById('60thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("61thlink")) {
 document.getElementById('61thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("62thlink")) {
 document.getElementById('62thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("63thlink")) {
 document.getElementById('63thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("64thlink")) {
 document.getElementById('64thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("65thlink")) {
 document.getElementById('65thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("66thlink")) {
 document.getElementById('66thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("67thlink")) {
 document.getElementById('67thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("68thlink")) {
 document.getElementById('68thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("69thlink")) {
 document.getElementById('69thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("70thlink")) {
 document.getElementById('70thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("71thlink")) {
 document.getElementById('71thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("72thlink")) {
 document.getElementById('72thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("73thlink")) {
 document.getElementById('73thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("74thlink")) {
 document.getElementById('74thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("75thlink")) {
 document.getElementById('75thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("76thlink")) {
 document.getElementById('76thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("77thlink")) {
 document.getElementById('77thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("78thlink")) {
 document.getElementById('78thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("79thlink")) {
 document.getElementById('79thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("80thlink")) {
 document.getElementById('80thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("81thlink")) {
 document.getElementById('81thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("82thlink")) {
 document.getElementById('82thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("83thlink")) {
 document.getElementById('83thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("84thlink")) {
 document.getElementById('84thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("85thlink")) {
 document.getElementById('85thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("86thlink")) {
 document.getElementById('86thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("87thlink")) {
 document.getElementById('87thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("88thlink")) {
 document.getElementById('88thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("89thlink")) {
 document.getElementById('89thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("90thlink")) {
 document.getElementById('90thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("91thlink")) {
 document.getElementById('91thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("92thlink")) {
 document.getElementById('92thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("93thlink")) {
 document.getElementById('93thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("94thlink")) {
 document.getElementById('94thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("95thlink")) {
 document.getElementById('95thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("96thlink")) {
 document.getElementById('96thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("97thlink")) {
 document.getElementById('97thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("98thlink")) {
 document.getElementById('98thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("99thlink")) {
 document.getElementById('99thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("100thlink")) {
 document.getElementById('100thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("101thlink")) {
 document.getElementById('101thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("102thlink")) {
 document.getElementById('102thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("103thlink")) {
 document.getElementById('103thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("104thlink")) {
 document.getElementById('104thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("105thlink")) {
 document.getElementById('105thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("106thlink")) {
 document.getElementById('106thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("107thlink")) {
 document.getElementById('107thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("108thlink")) {
 document.getElementById('108thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("109thlink")) {
 document.getElementById('109thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("110thlink")) {
 document.getElementById('110thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("111thlink")) {
 document.getElementById('111thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("112thlink")) {
 document.getElementById('112thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("113thlink")) {
 document.getElementById('113thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("114thlink")) {
 document.getElementById('114thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("115thlink")) {
 document.getElementById('115thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("116thlink")) {
 document.getElementById('116thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("117thlink")) {
 document.getElementById('117thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("118thlink")) {
 document.getElementById('118thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("119thlink")) {
 document.getElementById('119thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("120thlink")) {
 document.getElementById('120thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("121thlink")) {
 document.getElementById('121thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("122thlink")) {
 document.getElementById('122thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("123thlink")) {
 document.getElementById('123thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("124thlink")) {
 document.getElementById('124thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("125thlink")) {
 document.getElementById('125thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("126thlink")) {
 document.getElementById('126thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("127thlink")) {
 document.getElementById('127thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("128thlink")) {
 document.getElementById('128thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("129thlink")) {
 document.getElementById('129thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("130thlink")) {
 document.getElementById('130thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("131thlink")) {
 document.getElementById('131thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("132thlink")) {
 document.getElementById('132thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("133thlink")) {
 document.getElementById('133thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("134thlink")) {
 document.getElementById('134thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("135thlink")) {
 document.getElementById('135thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("136thlink")) {
 document.getElementById('136thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("137thlink")) {
 document.getElementById('137thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("138thlink")) {
 document.getElementById('138thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("139thlink")) {
 document.getElementById('139thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("140thlink")) {
 document.getElementById('140thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("141thlink")) {
 document.getElementById('141thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("142thlink")) {
 document.getElementById('142thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("143thlink")) {
 document.getElementById('143thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("144thlink")) {
 document.getElementById('144thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("145thlink")) {
 document.getElementById('145thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("146thlink")) {
 document.getElementById('146thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("147thlink")) {
 document.getElementById('147thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("148thlink")) {
 document.getElementById('148thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("149thlink")) {
 document.getElementById('149thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("150thlink")) {
 document.getElementById('150thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("151thlink")) {
 document.getElementById('151thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("152thlink")) {
 document.getElementById('152thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("153thlink")) {
 document.getElementById('153thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("154thlink")) {
 document.getElementById('154thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("155thlink")) {
 document.getElementById('155thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("156thlink")) {
 document.getElementById('156thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("157thlink")) {
 document.getElementById('157thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("158thlink")) {
 document.getElementById('158thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("159thlink")) {
 document.getElementById('159thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("160thlink")) {
 document.getElementById('160thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("161thlink")) {
 document.getElementById('161thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("162thlink")) {
 document.getElementById('162thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("163thlink")) {
 document.getElementById('163thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("164thlink")) {
 document.getElementById('164thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("165thlink")) {
 document.getElementById('165thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("166thlink")) {
 document.getElementById('166thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("167thlink")) {
 document.getElementById('167thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("168thlink")) {
 document.getElementById('168thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("169thlink")) {
 document.getElementById('169thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("170thlink")) {
 document.getElementById('170thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("171thlink")) {
 document.getElementById('171thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("172thlink")) {
 document.getElementById('172thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("173thlink")) {
 document.getElementById('173thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("174thlink")) {
 document.getElementById('174thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("175thlink")) {
 document.getElementById('175thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("176thlink")) {
 document.getElementById('176thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("177thlink")) {
 document.getElementById('177thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("178thlink")) {
 document.getElementById('178thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("179thlink")) {
 document.getElementById('179thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("180thlink")) {
 document.getElementById('180thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("181thlink")) {
 document.getElementById('181thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("182thlink")) {
 document.getElementById('182thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("183thlink")) {
 document.getElementById('183thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("184thlink")) {
 document.getElementById('184thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("185thlink")) {
 document.getElementById('185thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("186thlink")) {
 document.getElementById('186thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("187thlink")) {
 document.getElementById('187thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("188thlink")) {
 document.getElementById('188thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("189thlink")) {
 document.getElementById('189thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("190thlink")) {
 document.getElementById('190thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("191thlink")) {
 document.getElementById('191thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("192thlink")) {
 document.getElementById('192thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("193thlink")) {
 document.getElementById('193thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("194thlink")) {
 document.getElementById('194thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("195thlink")) {
 document.getElementById('195thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("196thlink")) {
 document.getElementById('196thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("197thlink")) {
 document.getElementById('197thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("198thlink")) {
 document.getElementById('198thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("199thlink")) {
 document.getElementById('199thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("200thlink")) {
 document.getElementById('200thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("201thlink")) {
 document.getElementById('201thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("202thlink")) {
 document.getElementById('202thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("203thlink")) {
 document.getElementById('203thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("204thlink")) {
 document.getElementById('204thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("205thlink")) {
 document.getElementById('205thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("206thlink")) {
 document.getElementById('206thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("207thlink")) {
 document.getElementById('207thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("208thlink")) {
 document.getElementById('208thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("209thlink")) {
 document.getElementById('209thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("210thlink")) {
 document.getElementById('210thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("211thlink")) {
 document.getElementById('211thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("212thlink")) {
 document.getElementById('212thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("213thlink")) {
 document.getElementById('213thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("214thlink")) {
 document.getElementById('214thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("215thlink")) {
 document.getElementById('215thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("216thlink")) {
 document.getElementById('216thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("217thlink")) {
 document.getElementById('217thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("218thlink")) {
 document.getElementById('218thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("219thlink")) {
 document.getElementById('219thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("220thlink")) {
 document.getElementById('220thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("221thlink")) {
 document.getElementById('221thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("222thlink")) {
 document.getElementById('222thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("223thlink")) {
 document.getElementById('223thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("224thlink")) {
 document.getElementById('224thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("225thlink")) {
 document.getElementById('225thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("226thlink")) {
 document.getElementById('226thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("227thlink")) {
 document.getElementById('227thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("228thlink")) {
 document.getElementById('228thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("229thlink")) {
 document.getElementById('229thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("230thlink")) {
 document.getElementById('230thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("231thlink")) {
 document.getElementById('231thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("232thlink")) {
 document.getElementById('232thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("233thlink")) {
 document.getElementById('233thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("234thlink")) {
 document.getElementById('234thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("235thlink")) {
 document.getElementById('235thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("236thlink")) {
 document.getElementById('236thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("237thlink")) {
 document.getElementById('237thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("238thlink")) {
 document.getElementById('238thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("239thlink")) {
 document.getElementById('239thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("240thlink")) {
 document.getElementById('240thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("241thlink")) {
 document.getElementById('241thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("242thlink")) {
 document.getElementById('242thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("243thlink")) {
 document.getElementById('243thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("244thlink")) {
 document.getElementById('244thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("245thlink")) {
 document.getElementById('245thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("246thlink")) {
 document.getElementById('246thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("247thlink")) {
 document.getElementById('247thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("248thlink")) {
 document.getElementById('248thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("249thlink")) {
 document.getElementById('249thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("250thlink")) {
 document.getElementById('250thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("251thlink")) {
 document.getElementById('251thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("252thlink")) {
 document.getElementById('252thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("253thlink")) {
 document.getElementById('253thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("254thlink")) {
 document.getElementById('254thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("255thlink")) {
 document.getElementById('255thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("256thlink")) {
 document.getElementById('256thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("257thlink")) {
 document.getElementById('257thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("258thlink")) {
 document.getElementById('258thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("259thlink")) {
 document.getElementById('259thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("260thlink")) {
 document.getElementById('260thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("261thlink")) {
 document.getElementById('261thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("262thlink")) {
 document.getElementById('262thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("263thlink")) {
 document.getElementById('263thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("264thlink")) {
 document.getElementById('264thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("265thlink")) {
 document.getElementById('265thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("266thlink")) {
 document.getElementById('266thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("267thlink")) {
 document.getElementById('267thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("268thlink")) {
 document.getElementById('268thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("269thlink")) {
 document.getElementById('269thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("270thlink")) {
 document.getElementById('270thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("271thlink")) {
 document.getElementById('271thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("272thlink")) {
 document.getElementById('272thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("273thlink")) {
 document.getElementById('273thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("274thlink")) {
 document.getElementById('274thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("275thlink")) {
 document.getElementById('275thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("276thlink")) {
 document.getElementById('276thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("277thlink")) {
 document.getElementById('277thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("278thlink")) {
 document.getElementById('278thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("279thlink")) {
 document.getElementById('279thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("280thlink")) {
 document.getElementById('280thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("281thlink")) {
 document.getElementById('281thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("282thlink")) {
 document.getElementById('282thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("283thlink")) {
 document.getElementById('283thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("284thlink")) {
 document.getElementById('284thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("285thlink")) {
 document.getElementById('285thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("286thlink")) {
 document.getElementById('286thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("287thlink")) {
 document.getElementById('287thlink').style.backgroundColor = "aqua";
}
if (localStorage.getItem("288thlink")) {
 document.getElementById('288thlink').style.backgroundColor = "aqua";
}




