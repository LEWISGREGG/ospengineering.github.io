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

if (localStorage.getItem("firstlinke")) {
 document.getElementById('firstlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("secondlinke")) {
 document.getElementById('secondlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("thirdlinke")) {
 document.getElementById('thirdlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("fourthlinke")) {
 document.getElementById('fourthlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("fifthlinke")) {
 document.getElementById('fifthlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("sixthlinke")) {
 document.getElementById('sixthlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("seventhlinke")) {
 document.getElementById('seventhlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("eighthlinke")) {
 document.getElementById('eighthlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("ninthlinke")) {
 document.getElementById('ninthlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("tenthlinke")) {
 document.getElementById('tenthlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("eleventhlinke")) {
 document.getElementById('eleventhlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("twelvthinke")) {
 document.getElementById('twelvthinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("thirtenthlinke")) {
 document.getElementById('thirtenthlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("fourteenthlinke")) {
 document.getElementById('fourteenthlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("fifteenthlinke")) {
 document.getElementById('fifteenthlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("sixteenthlinke")) {
 document.getElementById('sixteenthlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("seventeenthlinke")) {
 document.getElementById('seventeenthlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("eighteenthlinke")) {
 document.getElementById('eighteenthlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("nineteenthlinke")) {
 document.getElementById('nineteenthlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("20thlinke")) {
 document.getElementById('20thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("21thlinke")) {
 document.getElementById('21thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("22thlinke")) {
 document.getElementById('22thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("23thlinke")) {
 document.getElementById('23thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("24thlinke")) {
 document.getElementById('24thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("25thlinke")) {
 document.getElementById('25thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("26thlinke")) {
 document.getElementById('26thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("27thlinke")) {
 document.getElementById('27thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("28thlinke")) {
 document.getElementById('28thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("29thlinke")) {
 document.getElementById('29thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("30thlinke")) {
 document.getElementById('30thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("31thlinke")) {
 document.getElementById('31thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("32thlinke")) {
 document.getElementById('32thlinke').style.backgroundColor = "violet";
}

if (localStorage.getItem("33thlinke")) {
 document.getElementById('33thlinke').style.backgroundColor = "violet";
}

if (localStorage.getItem("34thlinke")) {
 document.getElementById('34thlinke').style.backgroundColor = "violet";
}

if (localStorage.getItem("35thlinke")) {
 document.getElementById('35thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("36thlinke")) {
 document.getElementById('36thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("37thlinke")) {
 document.getElementById('37thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("38thlinke")) {
 document.getElementById('38thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("39thlinke")) {
 document.getElementById('39thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("40thlinke")) {
 document.getElementById('40thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("41thlinke")) {
 document.getElementById('41thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("42thlinke")) {
 document.getElementById('42thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("43thlinke")) {
 document.getElementById('43thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("44thlinke")) {
 document.getElementById('44thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("45thlinke")) {
 document.getElementById('45thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("46thlinke")) {
 document.getElementById('46thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("47thlinke")) {
 document.getElementById('47thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("48thlinke")) {
 document.getElementById('48thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("49thlinke")) {
 document.getElementById('49thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("50thlinke")) {
 document.getElementById('50thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("51thlinke")) {
 document.getElementById('51thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("52thlinke")) {
 document.getElementById('52thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("53thlinke")) {
 document.getElementById('53thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("54thlinke")) {
 document.getElementById('54thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("55thlinke")) {
 document.getElementById('55thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("56thlinke")) {
 document.getElementById('56thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("57thlinke")) {
 document.getElementById('57thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("58thlinke")) {
 document.getElementById('58thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("59thlinke")) {
 document.getElementById('59thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("60thlinke")) {
 document.getElementById('60thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("61thlinke")) {
 document.getElementById('61thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("62thlinke")) {
 document.getElementById('62thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("63thlinke")) {
 document.getElementById('63thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("64thlinke")) {
 document.getElementById('64thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("65thlinke")) {
 document.getElementById('65thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("66thlinke")) {
 document.getElementById('66thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("67thlinke")) {
 document.getElementById('67thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("68thlinke")) {
 document.getElementById('68thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("69thlinke")) {
 document.getElementById('69thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("70thlinke")) {
 document.getElementById('70thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("71thlinke")) {
 document.getElementById('71thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("72thlinke")) {
 document.getElementById('72thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("73thlinke")) {
 document.getElementById('73thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("74thlinke")) {
 document.getElementById('74thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("75thlinke")) {
 document.getElementById('75thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("76thlinke")) {
 document.getElementById('76thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("77thlinke")) {
 document.getElementById('77thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("78thlinke")) {
 document.getElementById('78thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("79thlinke")) {
 document.getElementById('79thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("80thlinke")) {
 document.getElementById('80thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("81thlinke")) {
 document.getElementById('81thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("82thlinke")) {
 document.getElementById('82thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("83thlinke")) {
 document.getElementById('83thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("84thlinke")) {
 document.getElementById('84thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("85thlinke")) {
 document.getElementById('85thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("86thlinke")) {
 document.getElementById('86thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("87thlinke")) {
 document.getElementById('87thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("88thlinke")) {
 document.getElementById('88thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("89thlinke")) {
 document.getElementById('89thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("90thlinke")) {
 document.getElementById('90thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("91thlinke")) {
 document.getElementById('91thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("92thlinke")) {
 document.getElementById('92thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("93thlinke")) {
 document.getElementById('93thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("94thlinke")) {
 document.getElementById('94thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("95thlinke")) {
 document.getElementById('95thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("96thlinke")) {
 document.getElementById('96thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("97thlinke")) {
 document.getElementById('97thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("98thlinke")) {
 document.getElementById('98thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("99thlinke")) {
 document.getElementById('99thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("100thlinke")) {
 document.getElementById('100thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("101thlinke")) {
 document.getElementById('101thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("102thlinke")) {
 document.getElementById('102thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("103thlinke")) {
 document.getElementById('103thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("104thlinke")) {
 document.getElementById('104thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("105thlinke")) {
 document.getElementById('105thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("106thlinke")) {
 document.getElementById('106thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("107thlinke")) {
 document.getElementById('107thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("108thlinke")) {
 document.getElementById('108thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("109thlinke")) {
 document.getElementById('109thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("110thlinke")) {
 document.getElementById('110thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("111thlinke")) {
 document.getElementById('111thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("112thlinke")) {
 document.getElementById('112thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("113thlinke")) {
 document.getElementById('113thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("114thlinke")) {
 document.getElementById('114thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("115thlinke")) {
 document.getElementById('115thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("116thlinke")) {
 document.getElementById('116thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("117thlinke")) {
 document.getElementById('117thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("118thlinke")) {
 document.getElementById('118thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("119thlinke")) {
 document.getElementById('119thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("120thlinke")) {
 document.getElementById('120thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("121thlinke")) {
 document.getElementById('121thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("122thlinke")) {
 document.getElementById('122thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("123thlinke")) {
 document.getElementById('123thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("124thlinke")) {
 document.getElementById('124thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("125thlinke")) {
 document.getElementById('125thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("126thlinke")) {
 document.getElementById('126thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("127thlinke")) {
 document.getElementById('127thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("128thlinke")) {
 document.getElementById('128thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("129thlinke")) {
 document.getElementById('129thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("130thlinke")) {
 document.getElementById('130thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("131thlinke")) {
 document.getElementById('131thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("132thlinke")) {
 document.getElementById('132thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("133thlinke")) {
 document.getElementById('133thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("134thlinke")) {
 document.getElementById('134thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("135thlinke")) {
 document.getElementById('135thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("136thlinke")) {
 document.getElementById('136thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("137thlinke")) {
 document.getElementById('137thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("138thlinke")) {
 document.getElementById('138thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("139thlinke")) {
 document.getElementById('139thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("140thlinke")) {
 document.getElementById('140thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("141thlinke")) {
 document.getElementById('141thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("142thlinke")) {
 document.getElementById('142thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("143thlinke")) {
 document.getElementById('143thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("144thlinke")) {
 document.getElementById('144thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("145thlinke")) {
 document.getElementById('145thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("146thlinke")) {
 document.getElementById('146thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("147thlinke")) {
 document.getElementById('147thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("148thlinke")) {
 document.getElementById('148thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("149thlinke")) {
 document.getElementById('149thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("150thlinke")) {
 document.getElementById('150thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("151thlinke")) {
 document.getElementById('151thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("152thlinke")) {
 document.getElementById('152thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("153thlinke")) {
 document.getElementById('153thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("154thlinke")) {
 document.getElementById('154thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("155thlinke")) {
 document.getElementById('155thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("156thlinke")) {
 document.getElementById('156thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("157thlinke")) {
 document.getElementById('157thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("158thlinke")) {
 document.getElementById('158thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("159thlinke")) {
 document.getElementById('159thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("160thlinke")) {
 document.getElementById('160thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("161thlinke")) {
 document.getElementById('161thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("162thlinke")) {
 document.getElementById('162thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("163thlinke")) {
 document.getElementById('163thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("164thlinke")) {
 document.getElementById('164thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("165thlinke")) {
 document.getElementById('165thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("166thlinke")) {
 document.getElementById('166thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("167thlinke")) {
 document.getElementById('167thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("168thlinke")) {
 document.getElementById('168thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("169thlinke")) {
 document.getElementById('169thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("170thlinke")) {
 document.getElementById('170thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("171thlinke")) {
 document.getElementById('171thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("172thlinke")) {
 document.getElementById('172thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("173thlinke")) {
 document.getElementById('173thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("174thlinke")) {
 document.getElementById('174thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("175thlinke")) {
 document.getElementById('175thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("176thlinke")) {
 document.getElementById('176thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("177thlinke")) {
 document.getElementById('177thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("178thlinke")) {
 document.getElementById('178thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("179thlinke")) {
 document.getElementById('179thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("180thlinke")) {
 document.getElementById('180thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("181thlinke")) {
 document.getElementById('181thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("182thlinke")) {
 document.getElementById('182thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("183thlinke")) {
 document.getElementById('183thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("184thlinke")) {
 document.getElementById('184thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("185thlinke")) {
 document.getElementById('185thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("186thlinke")) {
 document.getElementById('186thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("187thlinke")) {
 document.getElementById('187thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("188thlinke")) {
 document.getElementById('188thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("189thlinke")) {
 document.getElementById('189thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("190thlinke")) {
 document.getElementById('190thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("191thlinke")) {
 document.getElementById('191thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("192thlinke")) {
 document.getElementById('192thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("193thlinke")) {
 document.getElementById('193thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("194thlinke")) {
 document.getElementById('194thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("195thlinke")) {
 document.getElementById('195thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("196thlinke")) {
 document.getElementById('196thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("197thlinke")) {
 document.getElementById('197thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("198thlinke")) {
 document.getElementById('198thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("199thlinke")) {
 document.getElementById('199thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("200thlinke")) {
 document.getElementById('200thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("201thlinke")) {
 document.getElementById('201thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("202thlinke")) {
 document.getElementById('202thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("203thlinke")) {
 document.getElementById('203thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("204thlinke")) {
 document.getElementById('204thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("205thlinke")) {
 document.getElementById('205thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("206thlinke")) {
 document.getElementById('206thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("207thlinke")) {
 document.getElementById('207thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("208thlinke")) {
 document.getElementById('208thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("209thlinke")) {
 document.getElementById('209thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("210thlinke")) {
 document.getElementById('210thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("211thlinke")) {
 document.getElementById('211thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("212thlinke")) {
 document.getElementById('212thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("213thlinke")) {
 document.getElementById('213thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("214thlinke")) {
 document.getElementById('214thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("215thlinke")) {
 document.getElementById('215thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("216thlinke")) {
 document.getElementById('216thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("217thlinke")) {
 document.getElementById('217thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("218thlinke")) {
 document.getElementById('218thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("219thlinke")) {
 document.getElementById('219thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("220thlinke")) {
 document.getElementById('220thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("221thlinke")) {
 document.getElementById('221thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("222thlinke")) {
 document.getElementById('222thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("223thlinke")) {
 document.getElementById('223thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("224thlinke")) {
 document.getElementById('224thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("225thlinke")) {
 document.getElementById('225thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("226thlinke")) {
 document.getElementById('226thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("227thlinke")) {
 document.getElementById('227thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("228thlinke")) {
 document.getElementById('228thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("229thlinke")) {
 document.getElementById('229thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("230thlinke")) {
 document.getElementById('230thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("231thlinke")) {
 document.getElementById('231thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("232thlinke")) {
 document.getElementById('232thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("233thlinke")) {
 document.getElementById('233thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("234thlinke")) {
 document.getElementById('234thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("235thlinke")) {
 document.getElementById('235thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("236thlinke")) {
 document.getElementById('236thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("237thlinke")) {
 document.getElementById('237thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("238thlinke")) {
 document.getElementById('238thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("239thlinke")) {
 document.getElementById('239thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("240thlinke")) {
 document.getElementById('240thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("241thlinke")) {
 document.getElementById('241thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("242thlinke")) {
 document.getElementById('242thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("243thlinke")) {
 document.getElementById('243thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("244thlinke")) {
 document.getElementById('244thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("245thlinke")) {
 document.getElementById('245thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("246thlinke")) {
 document.getElementById('246thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("247thlinke")) {
 document.getElementById('247thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("248thlinke")) {
 document.getElementById('248thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("249thlinke")) {
 document.getElementById('249thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("250thlinke")) {
 document.getElementById('250thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("251thlinke")) {
 document.getElementById('251thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("252thlinke")) {
 document.getElementById('252thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("253thlinke")) {
 document.getElementById('253thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("254thlinke")) {
 document.getElementById('254thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("255thlinke")) {
 document.getElementById('255thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("256thlinke")) {
 document.getElementById('256thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("257thlinke")) {
 document.getElementById('257thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("258thlinke")) {
 document.getElementById('258thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("259thlinke")) {
 document.getElementById('259thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("260thlinke")) {
 document.getElementById('260thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("261thlinke")) {
 document.getElementById('261thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("262thlinke")) {
 document.getElementById('262thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("263thlinke")) {
 document.getElementById('263thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("264thlinke")) {
 document.getElementById('264thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("265thlinke")) {
 document.getElementById('265thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("266thlinke")) {
 document.getElementById('266thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("267thlinke")) {
 document.getElementById('267thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("268thlinke")) {
 document.getElementById('268thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("269thlinke")) {
 document.getElementById('269thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("270thlinke")) {
 document.getElementById('270thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("271thlinke")) {
 document.getElementById('271thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("272thlinke")) {
 document.getElementById('272thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("273thlinke")) {
 document.getElementById('273thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("274thlinke")) {
 document.getElementById('274thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("275thlinke")) {
 document.getElementById('275thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("276thlinke")) {
 document.getElementById('276thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("277thlinke")) {
 document.getElementById('277thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("278thlinke")) {
 document.getElementById('278thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("279thlinke")) {
 document.getElementById('279thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("280thlinke")) {
 document.getElementById('280thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("281thlinke")) {
 document.getElementById('281thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("282thlinke")) {
 document.getElementById('282thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("283thlinke")) {
 document.getElementById('283thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("284thlinke")) {
 document.getElementById('284thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("285thlinke")) {
 document.getElementById('285thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("286thlinke")) {
 document.getElementById('286thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("287thlinke")) {
 document.getElementById('287thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("288thlinke")) {
 document.getElementById('288thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("289thlinke")) {
 document.getElementById('289thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("290thlinke")) {
 document.getElementById('290thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("291thlinke")) {
 document.getElementById('291thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("292thlinke")) {
 document.getElementById('292thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("293thlinke")) {
 document.getElementById('293thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("294thlinke")) {
 document.getElementById('294thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("295thlinke")) {
 document.getElementById('295thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("296thlinke")) {
 document.getElementById('296thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("297thlinke")) {
 document.getElementById('297thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("298thlinke")) {
 document.getElementById('298thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("299thlinke")) {
 document.getElementById('299thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("300thlinke")) {
 document.getElementById('300thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("301thlinke")) {
 document.getElementById('301thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("302thlinke")) {
 document.getElementById('302thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("303thlinke")) {
 document.getElementById('303thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("304thlinke")) {
 document.getElementById('304thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("305thlinke")) {
 document.getElementById('305thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("306thlinke")) {
 document.getElementById('306thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("307thlinke")) {
 document.getElementById('307thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("308thlinke")) {
 document.getElementById('308thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("309thlinke")) {
 document.getElementById('309thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("310thlinke")) {
 document.getElementById('310thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("311thlinke")) {
 document.getElementById('311thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("312thlinke")) {
 document.getElementById('312thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("313thlinke")) {
 document.getElementById('313thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("314thlinke")) {
 document.getElementById('314thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("315thlinke")) {
 document.getElementById('315thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("316thlinke")) {
 document.getElementById('316thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("317thlinke")) {
 document.getElementById('317thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("318thlinke")) {
 document.getElementById('318thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("319thlinke")) {
 document.getElementById('319thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("320thlinke")) {
 document.getElementById('320thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("321thlinke")) {
 document.getElementById('321thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("322thlinke")) {
 document.getElementById('322thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("323thlinke")) {
 document.getElementById('323thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("324thlinke")) {
 document.getElementById('324thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("325thlinke")) {
 document.getElementById('325thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("326thlinke")) {
 document.getElementById('326thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("327thlinke")) {
 document.getElementById('327thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("328thlinke")) {
 document.getElementById('328thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("329thlinke")) {
 document.getElementById('329thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("330thlinke")) {
 document.getElementById('330thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("331thlinke")) {
 document.getElementById('331thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("332thlinke")) {
 document.getElementById('332thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("333thlinke")) {
 document.getElementById('333thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("334thlinke")) {
 document.getElementById('334thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("335thlinke")) {
 document.getElementById('335thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("336thlinke")) {
 document.getElementById('336thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("337thlinke")) {
 document.getElementById('337thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("338thlinke")) {
 document.getElementById('338thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("339thlinke")) {
 document.getElementById('339thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("340thlinke")) {
 document.getElementById('340thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("341thlinke")) {
 document.getElementById('341thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("342thlinke")) {
 document.getElementById('342thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("343thlinke")) {
 document.getElementById('343thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("344thlinke")) {
 document.getElementById('344thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("345thlinke")) {
 document.getElementById('345thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("346thlinke")) {
 document.getElementById('346thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("347thlinke")) {
 document.getElementById('347thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("348thlinke")) {
 document.getElementById('348thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("349thlinke")) {
 document.getElementById('349thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("350thlinke")) {
 document.getElementById('350thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("351thlinke")) {
 document.getElementById('351thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("352thlinke")) {
 document.getElementById('352thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("353thlinke")) {
 document.getElementById('353thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("354thlinke")) {
 document.getElementById('354thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("355thlinke")) {
 document.getElementById('355thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("356thlinke")) {
 document.getElementById('356thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("357thlinke")) {
 document.getElementById('357thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("358thlinke")) {
 document.getElementById('358thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("359thlinke")) {
 document.getElementById('359thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("360thlinke")) {
 document.getElementById('360thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("361thlinke")) {
 document.getElementById('361thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("362thlinke")) {
 document.getElementById('362thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("363thlinke")) {
 document.getElementById('363thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("364thlinke")) {
 document.getElementById('364thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("365thlinke")) {
 document.getElementById('365thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("366thlinke")) {
 document.getElementById('366thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("367thlinke")) {
 document.getElementById('367thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("368thlinke")) {
 document.getElementById('368thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("369thlinke")) {
 document.getElementById('369thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("370thlinke")) {
 document.getElementById('370thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("371thlinke")) {
 document.getElementById('371thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("372thlinke")) {
 document.getElementById('372thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("373thlinke")) {
 document.getElementById('373thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("374thlinke")) {
 document.getElementById('374thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("375thlinke")) {
 document.getElementById('375thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("376thlinke")) {
 document.getElementById('376thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("377thlinke")) {
 document.getElementById('377thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("378thlinke")) {
 document.getElementById('378thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("379thlinke")) {
 document.getElementById('379thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("380thlinke")) {
 document.getElementById('380thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("381thlinke")) {
 document.getElementById('381thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("382thlinke")) {
 document.getElementById('382thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("383thlinke")) {
 document.getElementById('383thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("384thlinke")) {
 document.getElementById('384thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("385thlinke")) {
 document.getElementById('385thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("386thlinke")) {
 document.getElementById('386thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("387thlinke")) {
 document.getElementById('387thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("388thlinke")) {
 document.getElementById('388thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("389thlinke")) {
 document.getElementById('389thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("390thlinke")) {
 document.getElementById('390thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("391thlinke")) {
 document.getElementById('391thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("392thlinke")) {
 document.getElementById('392thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("393thlinke")) {
 document.getElementById('393thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("394thlinke")) {
 document.getElementById('394thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("395thlinke")) {
 document.getElementById('395thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("396thlinke")) {
 document.getElementById('396thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("397thlinke")) {
 document.getElementById('397thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("398thlinke")) {
 document.getElementById('398thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("399thlinke")) {
 document.getElementById('399thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("400thlinke")) {
 document.getElementById('400thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("401thlinke")) {
 document.getElementById('401thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("402thlinke")) {
 document.getElementById('402thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("403thlinke")) {
 document.getElementById('403thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("404thlinke")) {
 document.getElementById('404thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("405thlinke")) {
 document.getElementById('405thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("406thlinke")) {
 document.getElementById('406thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("407thlinke")) {
 document.getElementById('407thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("408thlinke")) {
 document.getElementById('408thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("409thlinke")) {
 document.getElementById('409thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("410thlinke")) {
 document.getElementById('410thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("411thlinke")) {
 document.getElementById('411thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("412thlinke")) {
 document.getElementById('412thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("413thlinke")) {
 document.getElementById('413thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("414thlinke")) {
 document.getElementById('414thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("415thlinke")) {
 document.getElementById('415thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("416thlinke")) {
 document.getElementById('416thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("417thlinke")) {
 document.getElementById('417thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("418thlinke")) {
 document.getElementById('418thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("419thlinke")) {
 document.getElementById('419thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("420thlinke")) {
 document.getElementById('420thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("421thlinke")) {
 document.getElementById('421thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("422thlinke")) {
 document.getElementById('422thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("423thlinke")) {
 document.getElementById('423thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("424thlinke")) {
 document.getElementById('424thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("425thlinke")) {
 document.getElementById('425thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("426thlinke")) {
 document.getElementById('426thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("427thlinke")) {
 document.getElementById('427thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("428thlinke")) {
 document.getElementById('428thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("429thlinke")) {
 document.getElementById('429thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("430thlinke")) {
 document.getElementById('430thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("431thlinke")) {
 document.getElementById('431thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("432thlinke")) {
 document.getElementById('432thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("433thlinke")) {
 document.getElementById('433thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("434thlinke")) {
 document.getElementById('434thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("435thlinke")) {
 document.getElementById('435thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("436thlinke")) {
 document.getElementById('436thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("437thlinke")) {
 document.getElementById('437thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("438thlinke")) {
 document.getElementById('438thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("439thlinke")) {
 document.getElementById('439thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("440thlinke")) {
 document.getElementById('440thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("441thlinke")) {
 document.getElementById('441thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("442thlinke")) {
 document.getElementById('442thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("443thlinke")) {
 document.getElementById('443thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("444thlinke")) {
 document.getElementById('444thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("445thlinke")) {
 document.getElementById('445thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("446thlinke")) {
 document.getElementById('446thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("447thlinke")) {
 document.getElementById('447thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("448thlinke")) {
 document.getElementById('448thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("449thlinke")) {
 document.getElementById('449thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("450thlinke")) {
 document.getElementById('450thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("451thlinke")) {
 document.getElementById('451thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("452thlinke")) {
 document.getElementById('452thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("453thlinke")) {
 document.getElementById('453thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("454thlinke")) {
 document.getElementById('454thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("455thlinke")) {
 document.getElementById('455thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("456thlinke")) {
 document.getElementById('456thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("457thlinke")) {
 document.getElementById('457thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("458thlinke")) {
 document.getElementById('458thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("459thlinke")) {
 document.getElementById('459thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("460thlinke")) {
 document.getElementById('460thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("461thlinke")) {
 document.getElementById('461thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("462thlinke")) {
 document.getElementById('462thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("463thlinke")) {
 document.getElementById('463thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("464thlinke")) {
 document.getElementById('464thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("465thlinke")) {
 document.getElementById('465thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("466thlinke")) {
 document.getElementById('466thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("467thlinke")) {
 document.getElementById('467thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("468thlinke")) {
 document.getElementById('468thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("469thlinke")) {
 document.getElementById('469thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("470thlinke")) {
 document.getElementById('470thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("471thlinke")) {
 document.getElementById('471thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("472thlinke")) {
 document.getElementById('472thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("473thlinke")) {
 document.getElementById('473thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("474thlinke")) {
 document.getElementById('474thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("475thlinke")) {
 document.getElementById('475thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("476thlinke")) {
 document.getElementById('476thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("477thlinke")) {
 document.getElementById('477thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("478thlinke")) {
 document.getElementById('478thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("479thlinke")) {
 document.getElementById('479thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("480thlinke")) {
 document.getElementById('480thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("481thlinke")) {
 document.getElementById('481thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("482thlinke")) {
 document.getElementById('482thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("483thlinke")) {
 document.getElementById('483thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("484thlinke")) {
 document.getElementById('484thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("485thlinke")) {
 document.getElementById('485thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("486thlinke")) {
 document.getElementById('486thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("487thlinke")) {
 document.getElementById('487thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("488thlinke")) {
 document.getElementById('488thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("489thlinke")) {
 document.getElementById('489thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("490thlinke")) {
 document.getElementById('490thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("491thlinke")) {
 document.getElementById('491thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("492thlinke")) {
 document.getElementById('492thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("493thlinke")) {
 document.getElementById('493thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("494thlinke")) {
 document.getElementById('494thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("495thlinke")) {
 document.getElementById('495thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("496thlinke")) {
 document.getElementById('496thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("497thlinke")) {
 document.getElementById('497thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("498thlinke")) {
 document.getElementById('498thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("499thlinke")) {
 document.getElementById('499thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("500thlinke")) {
 document.getElementById('500thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("501thlinke")) {
 document.getElementById('501thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("502thlinke")) {
 document.getElementById('502thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("503thlinke")) {
 document.getElementById('503thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("504thlinke")) {
 document.getElementById('504thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("505thlinke")) {
 document.getElementById('505thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("506thlinke")) {
 document.getElementById('506thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("507thlinke")) {
 document.getElementById('507thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("508thlinke")) {
 document.getElementById('508thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("509thlinke")) {
 document.getElementById('509thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("510thlinke")) {
 document.getElementById('510thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("511thlinke")) {
 document.getElementById('511thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("512thlinke")) {
 document.getElementById('512thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("513thlinke")) {
 document.getElementById('513thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("514thlinke")) {
 document.getElementById('514thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("515thlinke")) {
 document.getElementById('515thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("516thlinke")) {
 document.getElementById('516thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("517thlinke")) {
 document.getElementById('517thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("518thlinke")) {
 document.getElementById('518thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("519thlinke")) {
 document.getElementById('519thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("520thlinke")) {
 document.getElementById('520thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("521thlinke")) {
 document.getElementById('521thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("522thlinke")) {
 document.getElementById('522thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("523thlinke")) {
 document.getElementById('523thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("524thlinke")) {
 document.getElementById('524thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("525thlinke")) {
 document.getElementById('525thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("526thlinke")) {
 document.getElementById('526thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("527thlinke")) {
 document.getElementById('527thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("528thlinke")) {
 document.getElementById('528thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("529thlinke")) {
 document.getElementById('529thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("530thlinke")) {
 document.getElementById('530thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("531thlinke")) {
 document.getElementById('531thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("532thlinke")) {
 document.getElementById('532thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("533thlinke")) {
 document.getElementById('533thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("534thlinke")) {
 document.getElementById('534thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("535thlinke")) {
 document.getElementById('535thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("536thlinke")) {
 document.getElementById('536thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("537thlinke")) {
 document.getElementById('537thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("538thlinke")) {
 document.getElementById('538thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("539thlinke")) {
 document.getElementById('539thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("540thlinke")) {
 document.getElementById('540thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("541thlinke")) {
 document.getElementById('541thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("542thlinke")) {
 document.getElementById('542thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("543thlinke")) {
 document.getElementById('543thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("544thlinke")) {
 document.getElementById('544thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("545thlinke")) {
 document.getElementById('545thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("546thlinke")) {
 document.getElementById('546thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("547thlinke")) {
 document.getElementById('547thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("548thlinke")) {
 document.getElementById('548thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("549thlinke")) {
 document.getElementById('549thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("550thlinke")) {
 document.getElementById('550thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("551thlinke")) {
 document.getElementById('551thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("552thlinke")) {
 document.getElementById('552thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("553thlinke")) {
 document.getElementById('553thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("554thlinke")) {
 document.getElementById('554thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("555thlinke")) {
 document.getElementById('555thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("556thlinke")) {
 document.getElementById('556thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("557thlinke")) {
 document.getElementById('557thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("558thlinke")) {
 document.getElementById('558thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("559thlinke")) {
 document.getElementById('559thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("560thlinke")) {
 document.getElementById('560thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("561thlinke")) {
 document.getElementById('561thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("562thlinke")) {
 document.getElementById('562thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("563thlinke")) {
 document.getElementById('563thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("564thlinke")) {
 document.getElementById('564thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("565thlinke")) {
 document.getElementById('565thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("566thlinke")) {
 document.getElementById('566thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("567thlinke")) {
 document.getElementById('567thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("568thlinke")) {
 document.getElementById('568thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("569thlinke")) {
 document.getElementById('569thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("570thlinke")) {
 document.getElementById('570thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("571thlinke")) {
 document.getElementById('571thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("572thlinke")) {
 document.getElementById('572thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("573thlinke")) {
 document.getElementById('573thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("574thlinke")) {
 document.getElementById('574thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("575thlinke")) {
 document.getElementById('575thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("576thlinke")) {
 document.getElementById('576thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("577thlinke")) {
 document.getElementById('577thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("578thlinke")) {
 document.getElementById('578thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("579thlinke")) {
 document.getElementById('579thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("580thlinke")) {
 document.getElementById('580thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("581thlinke")) {
 document.getElementById('581thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("582thlinke")) {
 document.getElementById('582thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("583thlinke")) {
 document.getElementById('583thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("584thlinke")) {
 document.getElementById('584thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("585thlinke")) {
 document.getElementById('585thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("586thlinke")) {
 document.getElementById('586thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("587thlinke")) {
 document.getElementById('587thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("588thlinke")) {
 document.getElementById('588thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("589thlinke")) {
 document.getElementById('589thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("590thlinke")) {
 document.getElementById('590thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("591thlinke")) {
 document.getElementById('591thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("592thlinke")) {
 document.getElementById('592thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("593thlinke")) {
 document.getElementById('593thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("594thlinke")) {
 document.getElementById('594thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("595thlinke")) {
 document.getElementById('595thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("596thlinke")) {
 document.getElementById('596thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("597thlinke")) {
 document.getElementById('597thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("598thlinke")) {
 document.getElementById('598thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("599thlinke")) {
 document.getElementById('599thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("600thlinke")) {
 document.getElementById('600thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("601thlinke")) {
 document.getElementById('601thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("602thlinke")) {
 document.getElementById('602thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("603thlinke")) {
 document.getElementById('603thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("604thlinke")) {
 document.getElementById('604thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("605thlinke")) {
 document.getElementById('605thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("606thlinke")) {
 document.getElementById('606thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("607thlinke")) {
 document.getElementById('607thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("608thlinke")) {
 document.getElementById('608thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("609thlinke")) {
 document.getElementById('609thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("610thlinke")) {
 document.getElementById('610thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("611thlinke")) {
 document.getElementById('611thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("612thlinke")) {
 document.getElementById('612thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("613thlinke")) {
 document.getElementById('613thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("614thlinke")) {
 document.getElementById('614thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("615thlinke")) {
 document.getElementById('615thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("616thlinke")) {
 document.getElementById('616thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("617thlinke")) {
 document.getElementById('617thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("618thlinke")) {
 document.getElementById('618thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("619thlinke")) {
 document.getElementById('619thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("620thlinke")) {
 document.getElementById('620thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("621thlinke")) {
 document.getElementById('621thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("622thlinke")) {
 document.getElementById('622thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("623thlinke")) {
 document.getElementById('623thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("624thlinke")) {
 document.getElementById('624thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("625thlinke")) {
 document.getElementById('625thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("626thlinke")) {
 document.getElementById('626thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("627thlinke")) {
 document.getElementById('627thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("628thlinke")) {
 document.getElementById('628thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("629thlinke")) {
 document.getElementById('629thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("630thlinke")) {
 document.getElementById('630thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("631thlinke")) {
 document.getElementById('631thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("632thlinke")) {
 document.getElementById('632thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("633thlinke")) {
 document.getElementById('633thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("634thlinke")) {
 document.getElementById('634thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("635thlinke")) {
 document.getElementById('635thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("636thlinke")) {
 document.getElementById('636thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("637thlinke")) {
 document.getElementById('637thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("638thlinke")) {
 document.getElementById('638thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("639thlinke")) {
 document.getElementById('639thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("640thlinke")) {
 document.getElementById('640thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("641thlinke")) {
 document.getElementById('641thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("642thlinke")) {
 document.getElementById('642thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("643thlinke")) {
 document.getElementById('643thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("644thlinke")) {
 document.getElementById('644thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("645thlinke")) {
 document.getElementById('645thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("646thlinke")) {
 document.getElementById('646thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("647thlinke")) {
 document.getElementById('647thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("648thlinke")) {
 document.getElementById('648thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("649thlinke")) {
 document.getElementById('649thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("650thlinke")) {
 document.getElementById('650thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("651thlinke")) {
 document.getElementById('651thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("652thlinke")) {
 document.getElementById('652thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("653thlinke")) {
 document.getElementById('653thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("654thlinke")) {
 document.getElementById('654thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("655thlinke")) {
 document.getElementById('655thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("656thlinke")) {
 document.getElementById('656thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("657thlinke")) {
 document.getElementById('657thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("658thlinke")) {
 document.getElementById('658thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("659thlinke")) {
 document.getElementById('659thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("660thlinke")) {
 document.getElementById('660thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("661thlinke")) {
 document.getElementById('661thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("662thlinke")) {
 document.getElementById('662thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("663thlinke")) {
 document.getElementById('663thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("664thlinke")) {
 document.getElementById('664thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("665thlinke")) {
 document.getElementById('665thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("666thlinke")) {
 document.getElementById('666thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("667thlinke")) {
 document.getElementById('667thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("668thlinke")) {
 document.getElementById('668thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("669thlinke")) {
 document.getElementById('669thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("670thlinke")) {
 document.getElementById('670thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("671thlinke")) {
 document.getElementById('671thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("672thlinke")) {
 document.getElementById('672thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("673thlinke")) {
 document.getElementById('673thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("674thlinke")) {
 document.getElementById('674thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("675thlinke")) {
 document.getElementById('675thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("676thlinke")) {
 document.getElementById('676thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("677thlinke")) {
 document.getElementById('677thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("678thlinke")) {
 document.getElementById('678thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("679thlinke")) {
 document.getElementById('679thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("680thlinke")) {
 document.getElementById('680thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("681thlinke")) {
 document.getElementById('681thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("682thlinke")) {
 document.getElementById('682thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("683thlinke")) {
 document.getElementById('683thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("684thlinke")) {
 document.getElementById('684thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("685thlinke")) {
 document.getElementById('685thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("686thlinke")) {
 document.getElementById('686thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("687thlinke")) {
 document.getElementById('687thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("688thlinke")) {
 document.getElementById('688thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("689thlinke")) {
 document.getElementById('689thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("690thlinke")) {
 document.getElementById('690thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("691thlinke")) {
 document.getElementById('691thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("692thlinke")) {
 document.getElementById('692thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("693thlinke")) {
 document.getElementById('693thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("694thlinke")) {
 document.getElementById('694thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("695thlinke")) {
 document.getElementById('695thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("696thlinke")) {
 document.getElementById('696thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("697thlinke")) {
 document.getElementById('697thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("698thlinke")) {
 document.getElementById('698thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("699thlinke")) {
 document.getElementById('699thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("700thlinke")) {
 document.getElementById('700thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("701thlinke")) {
 document.getElementById('701thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("702thlinke")) {
 document.getElementById('702thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("703thlinke")) {
 document.getElementById('703thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("704thlinke")) {
 document.getElementById('704thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("705thlinke")) {
 document.getElementById('705thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("706thlinke")) {
 document.getElementById('706thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("707thlinke")) {
 document.getElementById('707thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("708thlinke")) {
 document.getElementById('708thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("709thlinke")) {
 document.getElementById('709thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("710thlinke")) {
 document.getElementById('710thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("711thlinke")) {
 document.getElementById('711thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("712thlinke")) {
 document.getElementById('712thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("713thlinke")) {
 document.getElementById('713thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("714thlinke")) {
 document.getElementById('714thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("715thlinke")) {
 document.getElementById('715thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("716thlinke")) {
 document.getElementById('716thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("717thlinke")) {
 document.getElementById('717thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("718thlinke")) {
 document.getElementById('718thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("719thlinke")) {
 document.getElementById('719thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("720thlinke")) {
 document.getElementById('720thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("721thlinke")) {
 document.getElementById('721thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("722thlinke")) {
 document.getElementById('722thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("723thlinke")) {
 document.getElementById('723thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("724thlinke")) {
 document.getElementById('724thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("725thlinke")) {
 document.getElementById('725thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("726thlinke")) {
 document.getElementById('726thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("727thlinke")) {
 document.getElementById('727thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("728thlinke")) {
 document.getElementById('728thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("729thlinke")) {
 document.getElementById('729thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("730thlinke")) {
 document.getElementById('730thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("731thlinke")) {
 document.getElementById('731thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("732thlinke")) {
 document.getElementById('732thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("733thlinke")) {
 document.getElementById('733thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("734thlinke")) {
 document.getElementById('734thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("735thlinke")) {
 document.getElementById('735thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("736thlinke")) {
 document.getElementById('736thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("737thlinke")) {
 document.getElementById('737thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("738thlinke")) {
 document.getElementById('738thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("739thlinke")) {
 document.getElementById('739thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("740thlinke")) {
 document.getElementById('740thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("741thlinke")) {
 document.getElementById('741thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("742thlinke")) {
 document.getElementById('742thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("743thlinke")) {
 document.getElementById('743thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("744thlinke")) {
 document.getElementById('744thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("745thlinke")) {
 document.getElementById('745thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("746thlinke")) {
 document.getElementById('746thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("747thlinke")) {
 document.getElementById('747thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("748thlinke")) {
 document.getElementById('748thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("749thlinke")) {
 document.getElementById('749thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("750thlinke")) {
 document.getElementById('750thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("751thlinke")) {
 document.getElementById('751thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("752thlinke")) {
 document.getElementById('752thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("753thlinke")) {
 document.getElementById('753thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("754thlinke")) {
 document.getElementById('754thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("755thlinke")) {
 document.getElementById('755thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("756thlinke")) {
 document.getElementById('756thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("757thlinke")) {
 document.getElementById('757thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("758thlinke")) {
 document.getElementById('758thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("759thlinke")) {
 document.getElementById('759thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("760thlinke")) {
 document.getElementById('760thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("761thlinke")) {
 document.getElementById('761thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("762thlinke")) {
 document.getElementById('762thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("763thlinke")) {
 document.getElementById('763thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("764thlinke")) {
 document.getElementById('764thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("765thlinke")) {
 document.getElementById('765thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("766thlinke")) {
 document.getElementById('766thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("767thlinke")) {
 document.getElementById('767thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("768thlinke")) {
 document.getElementById('768thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("769thlinke")) {
 document.getElementById('769thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("770thlinke")) {
 document.getElementById('770thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("771thlinke")) {
 document.getElementById('771thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("772thlinke")) {
 document.getElementById('772thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("773thlinke")) {
 document.getElementById('773thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("774thlinke")) {
 document.getElementById('774thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("775thlinke")) {
 document.getElementById('775thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("776thlinek")) {
 document.getElementById('776thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("777thlinke")) {
 document.getElementById('777thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("778thlinke")) {
 document.getElementById('778thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("779thlinke")) {
 document.getElementById('779thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("780thlinke")) {
 document.getElementById('780thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("781thlinke")) {
 document.getElementById('781thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("782thlinke")) {
 document.getElementById('782thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("783thlinke")) {
 document.getElementById('783thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("784thlinke")) {
 document.getElementById('784thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("785thlinke")) {
 document.getElementById('785thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("786thlinke")) {
 document.getElementById('786thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("787thlinke")) {
 document.getElementById('787thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("788thlinke")) {
 document.getElementById('788thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("789thlinke")) {
 document.getElementById('789thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("790thlinke")) {
 document.getElementById('790thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("791thlinke")) {
 document.getElementById('791thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("792thlinke")) {
 document.getElementById('792thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("793thlinke")) {
 document.getElementById('793thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("794thlinke")) {
 document.getElementById('794thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("795thlinke")) {
 document.getElementById('795thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("796thlinke")) {
 document.getElementById('796thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("797thlinke")) {
 document.getElementById('797thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("798thlinke")) {
 document.getElementById('798thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("799thlinke")) {
 document.getElementById('799thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("800thlinke")) {
 document.getElementById('800thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("801thlinke")) {
 document.getElementById('801thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("802thlinke")) {
 document.getElementById('802thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("803thlinke")) {
 document.getElementById('803thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("804thlinke")) {
 document.getElementById('804thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("805thlinke")) {
 document.getElementById('805thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("806thlinke")) {
 document.getElementById('806thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("807thlinke")) {
 document.getElementById('807thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("808thlinke")) {
 document.getElementById('808thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("809thlinke")) {
 document.getElementById('809thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("810thlinke")) {
 document.getElementById('810thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("811thlinke")) {
 document.getElementById('811thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("812thlinke")) {
 document.getElementById('812thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("813thlinke")) {
 document.getElementById('813thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("814thlinke")) {
 document.getElementById('814thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("815thlinke")) {
 document.getElementById('815thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("816thlinke")) {
 document.getElementById('816thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("817thlinke")) {
 document.getElementById('817thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("818thlinke")) {
 document.getElementById('818thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("819thlinke")) {
 document.getElementById('819thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("820thlinke")) {
 document.getElementById('820thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("821thlinke")) {
 document.getElementById('821thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("822thlinke")) {
 document.getElementById('822thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("823thlinke")) {
 document.getElementById('823thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("824thlinke")) {
 document.getElementById('824thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("825thlinke")) {
 document.getElementById('825thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("826thlinke")) {
 document.getElementById('826thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("827thlinke")) {
 document.getElementById('827thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("828thlinke")) {
 document.getElementById('828thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("829thlinke")) {
 document.getElementById('829thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("830thlinke")) {
 document.getElementById('830thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("831thlinke")) {
 document.getElementById('831thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("832thlinke")) {
 document.getElementById('832thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("833thlinke")) {
 document.getElementById('833thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("834thlinke")) {
 document.getElementById('834thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("835thlinke")) {
 document.getElementById('835thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("836thlinke")) {
 document.getElementById('836thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("837thlinke")) {
 document.getElementById('837thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("838thlinke")) {
 document.getElementById('838thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("839thlinke")) {
 document.getElementById('839thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("840thlinke")) {
 document.getElementById('840thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("841thlinke")) {
 document.getElementById('841thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("842thlinke")) {
 document.getElementById('842thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("843thlinke")) {
 document.getElementById('843thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("844thlinke")) {
 document.getElementById('844thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("845thlinke")) {
 document.getElementById('845thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("846thlinke")) {
 document.getElementById('846thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("847thlinke")) {
 document.getElementById('847thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("848thlinke")) {
 document.getElementById('848thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("849thlinke")) {
 document.getElementById('849thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("850thlinke")) {
 document.getElementById('850thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("851thlinke")) {
 document.getElementById('851thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("852thlinke")) {
 document.getElementById('852thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("853thlinke")) {
 document.getElementById('853thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("854thlinke")) {
 document.getElementById('854thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("855thlinke")) {
 document.getElementById('855thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("856thlinke")) {
 document.getElementById('856thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("857thlinke")) {
 document.getElementById('857thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("858thlinke")) {
 document.getElementById('858thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("859thlinke")) {
 document.getElementById('859thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("860thlinke")) {
 document.getElementById('860thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("861thlinke")) {
 document.getElementById('861thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("862thlinke")) {
 document.getElementById('862thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("863thlinke")) {
 document.getElementById('863thlinke').style.backgroundColor = "violet";
}
if (localStorage.getItem("864thlinke")) {
 document.getElementById('864thlinke').style.backgroundColor = "violet";
}



