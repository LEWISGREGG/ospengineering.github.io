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

if (localStorage.getItem("firstlink")) {
 document.getElementById('firstlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("secondlink")) {
 document.getElementById('secondlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("thirdlink")) {
 document.getElementById('thirdlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("fourthlink")) {
 document.getElementById('fourthlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("fifthlink")) {
 document.getElementById('fifthlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("sixthlink")) {
 document.getElementById('sixthlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("seventhlink")) {
 document.getElementById('seventhlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("eighthlink")) {
 document.getElementById('eighthlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("ninthlink")) {
 document.getElementById('ninthlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("tenthlink")) {
 document.getElementById('tenthlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("eleventhlink")) {
 document.getElementById('eleventhlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("twelvthink")) {
 document.getElementById('twelvthink').style.backgroundColor = "violet";
}
if (localStorage.getItem("thirtenthlink")) {
 document.getElementById('thirtenthlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("fourteenthlink")) {
 document.getElementById('fourteenthlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("fifteenthlink")) {
 document.getElementById('fifteenthlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("sixteenthlink")) {
 document.getElementById('sixteenthlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("seventeenthlink")) {
 document.getElementById('seventeenthlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("eighteenthlink")) {
 document.getElementById('eighteenthlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("nineteenthlink")) {
 document.getElementById('nineteenthlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("20thlink")) {
 document.getElementById('20thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("21thlink")) {
 document.getElementById('21thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("22thlink")) {
 document.getElementById('22thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("23thlink")) {
 document.getElementById('23thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("24thlink")) {
 document.getElementById('24thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("25thlink")) {
 document.getElementById('25thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("26thlink")) {
 document.getElementById('26thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("27thlink")) {
 document.getElementById('27thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("28thlink")) {
 document.getElementById('28thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("29thlink")) {
 document.getElementById('29thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("30thlink")) {
 document.getElementById('30thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("31thlink")) {
 document.getElementById('31thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("32thlink")) {
 document.getElementById('32thlink').style.backgroundColor = "violet";
}

if (localStorage.getItem("33thlink")) {
 document.getElementById('33thlink').style.backgroundColor = "violet";
}

if (localStorage.getItem("34thlink")) {
 document.getElementById('34thlink').style.backgroundColor = "violet";
}

if (localStorage.getItem("35thlink")) {
 document.getElementById('35thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("36thlink")) {
 document.getElementById('36thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("37thlink")) {
 document.getElementById('37thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("38thlink")) {
 document.getElementById('38thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("39thlink")) {
 document.getElementById('39thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("40thlink")) {
 document.getElementById('40thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("41thlink")) {
 document.getElementById('41thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("42thlink")) {
 document.getElementById('42thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("43thlink")) {
 document.getElementById('43thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("44thlink")) {
 document.getElementById('44thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("45thlink")) {
 document.getElementById('45thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("46thlink")) {
 document.getElementById('46thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("47thlink")) {
 document.getElementById('47thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("48thlink")) {
 document.getElementById('48thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("49thlink")) {
 document.getElementById('49thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("50thlink")) {
 document.getElementById('50thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("51thlink")) {
 document.getElementById('51thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("52thlink")) {
 document.getElementById('52thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("53thlink")) {
 document.getElementById('53thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("54thlink")) {
 document.getElementById('54thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("55thlink")) {
 document.getElementById('55thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("56thlink")) {
 document.getElementById('56thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("57thlink")) {
 document.getElementById('57thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("58thlink")) {
 document.getElementById('58thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("59thlink")) {
 document.getElementById('59thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("60thlink")) {
 document.getElementById('60thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("61thlink")) {
 document.getElementById('61thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("62thlink")) {
 document.getElementById('62thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("63thlink")) {
 document.getElementById('63thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("64thlink")) {
 document.getElementById('64thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("65thlink")) {
 document.getElementById('65thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("66thlink")) {
 document.getElementById('66thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("67thlink")) {
 document.getElementById('67thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("68thlink")) {
 document.getElementById('68thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("69thlink")) {
 document.getElementById('69thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("70thlink")) {
 document.getElementById('70thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("71thlink")) {
 document.getElementById('71thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("72thlink")) {
 document.getElementById('72thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("73thlink")) {
 document.getElementById('73thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("74thlink")) {
 document.getElementById('74thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("75thlink")) {
 document.getElementById('75thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("76thlink")) {
 document.getElementById('76thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("77thlink")) {
 document.getElementById('77thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("78thlink")) {
 document.getElementById('78thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("79thlink")) {
 document.getElementById('79thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("80thlink")) {
 document.getElementById('80thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("81thlink")) {
 document.getElementById('81thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("82thlink")) {
 document.getElementById('82thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("83thlink")) {
 document.getElementById('83thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("84thlink")) {
 document.getElementById('84thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("85thlink")) {
 document.getElementById('85thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("86thlink")) {
 document.getElementById('86thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("87thlink")) {
 document.getElementById('87thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("88thlink")) {
 document.getElementById('88thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("89thlink")) {
 document.getElementById('89thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("90thlink")) {
 document.getElementById('90thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("91thlink")) {
 document.getElementById('91thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("92thlink")) {
 document.getElementById('92thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("93thlink")) {
 document.getElementById('93thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("94thlink")) {
 document.getElementById('94thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("95thlink")) {
 document.getElementById('95thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("96thlink")) {
 document.getElementById('96thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("97thlink")) {
 document.getElementById('97thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("98thlink")) {
 document.getElementById('98thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("99thlink")) {
 document.getElementById('99thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("100thlink")) {
 document.getElementById('100thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("101thlink")) {
 document.getElementById('101thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("102thlink")) {
 document.getElementById('102thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("103thlink")) {
 document.getElementById('103thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("104thlink")) {
 document.getElementById('104thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("105thlink")) {
 document.getElementById('105thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("106thlink")) {
 document.getElementById('106thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("107thlink")) {
 document.getElementById('107thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("108thlink")) {
 document.getElementById('108thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("109thlink")) {
 document.getElementById('109thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("110thlink")) {
 document.getElementById('110thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("111thlink")) {
 document.getElementById('111thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("112thlink")) {
 document.getElementById('112thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("113thlink")) {
 document.getElementById('113thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("114thlink")) {
 document.getElementById('114thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("115thlink")) {
 document.getElementById('115thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("116thlink")) {
 document.getElementById('116thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("117thlink")) {
 document.getElementById('117thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("118thlink")) {
 document.getElementById('118thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("119thlink")) {
 document.getElementById('119thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("120thlink")) {
 document.getElementById('120thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("121thlink")) {
 document.getElementById('121thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("122thlink")) {
 document.getElementById('122thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("123thlink")) {
 document.getElementById('123thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("124thlink")) {
 document.getElementById('124thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("125thlink")) {
 document.getElementById('125thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("126thlink")) {
 document.getElementById('126thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("127thlink")) {
 document.getElementById('127thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("128thlink")) {
 document.getElementById('128thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("129thlink")) {
 document.getElementById('129thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("130thlink")) {
 document.getElementById('130thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("131thlink")) {
 document.getElementById('131thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("132thlink")) {
 document.getElementById('132thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("133thlink")) {
 document.getElementById('133thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("134thlink")) {
 document.getElementById('134thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("135thlink")) {
 document.getElementById('135thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("136thlink")) {
 document.getElementById('136thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("137thlink")) {
 document.getElementById('137thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("138thlink")) {
 document.getElementById('138thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("139thlink")) {
 document.getElementById('139thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("140thlink")) {
 document.getElementById('140thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("141thlink")) {
 document.getElementById('141thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("142thlink")) {
 document.getElementById('142thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("143thlink")) {
 document.getElementById('143thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("144thlink")) {
 document.getElementById('144thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("145thlink")) {
 document.getElementById('145thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("146thlink")) {
 document.getElementById('146thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("147thlink")) {
 document.getElementById('147thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("148thlink")) {
 document.getElementById('148thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("149thlink")) {
 document.getElementById('149thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("150thlink")) {
 document.getElementById('150thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("151thlink")) {
 document.getElementById('151thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("152thlink")) {
 document.getElementById('152thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("153thlink")) {
 document.getElementById('153thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("154thlink")) {
 document.getElementById('154thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("155thlink")) {
 document.getElementById('155thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("156thlink")) {
 document.getElementById('156thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("157thlink")) {
 document.getElementById('157thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("158thlink")) {
 document.getElementById('158thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("159thlink")) {
 document.getElementById('159thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("160thlink")) {
 document.getElementById('160thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("161thlink")) {
 document.getElementById('161thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("162thlink")) {
 document.getElementById('162thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("163thlink")) {
 document.getElementById('163thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("164thlink")) {
 document.getElementById('164thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("165thlink")) {
 document.getElementById('165thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("166thlink")) {
 document.getElementById('166thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("167thlink")) {
 document.getElementById('167thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("168thlink")) {
 document.getElementById('168thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("169thlink")) {
 document.getElementById('169thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("170thlink")) {
 document.getElementById('170thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("171thlink")) {
 document.getElementById('171thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("172thlink")) {
 document.getElementById('172thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("173thlink")) {
 document.getElementById('173thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("174thlink")) {
 document.getElementById('174thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("175thlink")) {
 document.getElementById('175thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("176thlink")) {
 document.getElementById('176thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("177thlink")) {
 document.getElementById('177thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("178thlink")) {
 document.getElementById('178thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("179thlink")) {
 document.getElementById('179thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("180thlink")) {
 document.getElementById('180thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("181thlink")) {
 document.getElementById('181thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("182thlink")) {
 document.getElementById('182thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("183thlink")) {
 document.getElementById('183thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("184thlink")) {
 document.getElementById('184thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("185thlink")) {
 document.getElementById('185thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("186thlink")) {
 document.getElementById('186thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("187thlink")) {
 document.getElementById('187thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("188thlink")) {
 document.getElementById('188thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("189thlink")) {
 document.getElementById('189thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("190thlink")) {
 document.getElementById('190thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("191thlink")) {
 document.getElementById('191thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("192thlink")) {
 document.getElementById('192thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("193thlink")) {
 document.getElementById('193thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("194thlink")) {
 document.getElementById('194thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("195thlink")) {
 document.getElementById('195thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("196thlink")) {
 document.getElementById('196thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("197thlink")) {
 document.getElementById('197thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("198thlink")) {
 document.getElementById('198thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("199thlink")) {
 document.getElementById('199thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("200thlink")) {
 document.getElementById('200thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("201thlink")) {
 document.getElementById('201thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("202thlink")) {
 document.getElementById('202thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("203thlink")) {
 document.getElementById('203thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("204thlink")) {
 document.getElementById('204thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("205thlink")) {
 document.getElementById('205thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("206thlink")) {
 document.getElementById('206thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("207thlink")) {
 document.getElementById('207thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("208thlink")) {
 document.getElementById('208thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("209thlink")) {
 document.getElementById('209thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("210thlink")) {
 document.getElementById('210thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("211thlink")) {
 document.getElementById('211thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("212thlink")) {
 document.getElementById('212thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("213thlink")) {
 document.getElementById('213thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("214thlink")) {
 document.getElementById('214thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("215thlink")) {
 document.getElementById('215thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("216thlink")) {
 document.getElementById('216thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("217thlink")) {
 document.getElementById('217thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("218thlink")) {
 document.getElementById('218thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("219thlink")) {
 document.getElementById('219thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("220thlink")) {
 document.getElementById('220thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("221thlink")) {
 document.getElementById('221thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("222thlink")) {
 document.getElementById('222thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("223thlink")) {
 document.getElementById('223thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("224thlink")) {
 document.getElementById('224thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("225thlink")) {
 document.getElementById('225thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("226thlink")) {
 document.getElementById('226thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("227thlink")) {
 document.getElementById('227thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("228thlink")) {
 document.getElementById('228thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("229thlink")) {
 document.getElementById('229thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("230thlink")) {
 document.getElementById('230thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("231thlink")) {
 document.getElementById('231thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("232thlink")) {
 document.getElementById('232thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("233thlink")) {
 document.getElementById('233thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("234thlink")) {
 document.getElementById('234thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("235thlink")) {
 document.getElementById('235thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("236thlink")) {
 document.getElementById('236thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("237thlink")) {
 document.getElementById('237thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("238thlink")) {
 document.getElementById('238thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("239thlink")) {
 document.getElementById('239thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("240thlink")) {
 document.getElementById('240thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("241thlink")) {
 document.getElementById('241thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("242thlink")) {
 document.getElementById('242thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("243thlink")) {
 document.getElementById('243thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("244thlink")) {
 document.getElementById('244thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("245thlink")) {
 document.getElementById('245thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("246thlink")) {
 document.getElementById('246thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("247thlink")) {
 document.getElementById('247thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("248thlink")) {
 document.getElementById('248thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("249thlink")) {
 document.getElementById('249thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("250thlink")) {
 document.getElementById('250thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("251thlink")) {
 document.getElementById('251thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("252thlink")) {
 document.getElementById('252thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("253thlink")) {
 document.getElementById('253thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("254thlink")) {
 document.getElementById('254thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("255thlink")) {
 document.getElementById('255thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("256thlink")) {
 document.getElementById('256thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("257thlink")) {
 document.getElementById('257thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("258thlink")) {
 document.getElementById('258thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("259thlink")) {
 document.getElementById('259thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("260thlink")) {
 document.getElementById('260thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("261thlink")) {
 document.getElementById('261thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("262thlink")) {
 document.getElementById('262thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("263thlink")) {
 document.getElementById('263thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("264thlink")) {
 document.getElementById('264thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("265thlink")) {
 document.getElementById('265thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("266thlink")) {
 document.getElementById('266thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("267thlink")) {
 document.getElementById('267thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("268thlink")) {
 document.getElementById('268thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("269thlink")) {
 document.getElementById('269thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("270thlink")) {
 document.getElementById('270thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("271thlink")) {
 document.getElementById('271thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("272thlink")) {
 document.getElementById('272thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("273thlink")) {
 document.getElementById('273thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("274thlink")) {
 document.getElementById('274thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("275thlink")) {
 document.getElementById('275thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("276thlink")) {
 document.getElementById('276thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("277thlink")) {
 document.getElementById('277thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("278thlink")) {
 document.getElementById('278thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("279thlink")) {
 document.getElementById('279thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("280thlink")) {
 document.getElementById('280thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("281thlink")) {
 document.getElementById('281thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("282thlink")) {
 document.getElementById('282thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("283thlink")) {
 document.getElementById('283thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("284thlink")) {
 document.getElementById('284thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("285thlink")) {
 document.getElementById('285thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("286thlink")) {
 document.getElementById('286thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("287thlink")) {
 document.getElementById('287thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("288thlink")) {
 document.getElementById('288thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("289thlink")) {
 document.getElementById('289thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("290thlink")) {
 document.getElementById('290thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("291thlink")) {
 document.getElementById('291thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("292thlink")) {
 document.getElementById('292thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("293thlink")) {
 document.getElementById('293thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("294thlink")) {
 document.getElementById('294thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("295thlink")) {
 document.getElementById('295thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("296thlink")) {
 document.getElementById('296thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("297thlink")) {
 document.getElementById('297thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("298thlink")) {
 document.getElementById('298thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("299thlink")) {
 document.getElementById('299thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("300thlink")) {
 document.getElementById('300thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("301thlink")) {
 document.getElementById('301thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("302thlink")) {
 document.getElementById('302thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("303thlink")) {
 document.getElementById('303thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("304thlink")) {
 document.getElementById('304thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("305thlink")) {
 document.getElementById('305thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("306thlink")) {
 document.getElementById('306thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("307thlink")) {
 document.getElementById('307thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("308thlink")) {
 document.getElementById('308thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("309thlink")) {
 document.getElementById('309thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("310thlink")) {
 document.getElementById('310thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("311thlink")) {
 document.getElementById('311thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("312thlink")) {
 document.getElementById('312thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("313thlink")) {
 document.getElementById('313thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("314thlink")) {
 document.getElementById('314thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("315thlink")) {
 document.getElementById('315thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("316thlink")) {
 document.getElementById('316thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("317thlink")) {
 document.getElementById('317thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("318thlink")) {
 document.getElementById('318thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("319thlink")) {
 document.getElementById('319thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("320thlink")) {
 document.getElementById('320thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("321thlink")) {
 document.getElementById('321thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("322thlink")) {
 document.getElementById('322thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("323thlink")) {
 document.getElementById('323thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("324thlink")) {
 document.getElementById('324thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("325thlink")) {
 document.getElementById('325thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("326thlink")) {
 document.getElementById('326thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("327thlink")) {
 document.getElementById('327thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("328thlink")) {
 document.getElementById('328thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("329thlink")) {
 document.getElementById('329thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("330thlink")) {
 document.getElementById('330thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("331thlink")) {
 document.getElementById('331thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("332thlink")) {
 document.getElementById('332thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("333thlink")) {
 document.getElementById('333thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("334thlink")) {
 document.getElementById('334thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("335thlink")) {
 document.getElementById('335thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("336thlink")) {
 document.getElementById('336thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("337thlink")) {
 document.getElementById('337thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("338thlink")) {
 document.getElementById('338thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("339thlink")) {
 document.getElementById('339thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("340thlink")) {
 document.getElementById('340thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("341thlink")) {
 document.getElementById('341thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("342thlink")) {
 document.getElementById('342thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("343thlink")) {
 document.getElementById('343thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("344thlink")) {
 document.getElementById('344thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("345thlink")) {
 document.getElementById('345thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("346thlink")) {
 document.getElementById('346thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("347thlink")) {
 document.getElementById('347thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("348thlink")) {
 document.getElementById('348thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("349thlink")) {
 document.getElementById('349thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("350thlink")) {
 document.getElementById('350thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("351thlink")) {
 document.getElementById('351thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("352thlink")) {
 document.getElementById('352thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("353thlink")) {
 document.getElementById('353thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("354thlink")) {
 document.getElementById('354thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("355thlink")) {
 document.getElementById('355thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("356thlink")) {
 document.getElementById('356thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("357thlink")) {
 document.getElementById('357thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("358thlink")) {
 document.getElementById('358thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("359thlink")) {
 document.getElementById('359thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("360thlink")) {
 document.getElementById('360thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("361thlink")) {
 document.getElementById('361thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("362thlink")) {
 document.getElementById('362thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("363thlink")) {
 document.getElementById('363thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("364thlink")) {
 document.getElementById('364thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("365thlink")) {
 document.getElementById('365thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("366thlink")) {
 document.getElementById('366thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("367thlink")) {
 document.getElementById('367thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("368thlink")) {
 document.getElementById('368thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("369thlink")) {
 document.getElementById('369thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("370thlink")) {
 document.getElementById('370thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("371thlink")) {
 document.getElementById('371thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("372thlink")) {
 document.getElementById('372thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("373thlink")) {
 document.getElementById('373thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("374thlink")) {
 document.getElementById('374thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("375thlink")) {
 document.getElementById('375thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("376thlink")) {
 document.getElementById('376thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("377thlink")) {
 document.getElementById('377thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("378thlink")) {
 document.getElementById('378thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("379thlink")) {
 document.getElementById('379thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("380thlink")) {
 document.getElementById('380thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("381thlink")) {
 document.getElementById('381thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("382thlink")) {
 document.getElementById('382thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("383thlink")) {
 document.getElementById('383thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("384thlink")) {
 document.getElementById('384thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("385thlink")) {
 document.getElementById('385thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("386thlink")) {
 document.getElementById('386thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("387thlink")) {
 document.getElementById('387thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("388thlink")) {
 document.getElementById('388thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("389thlink")) {
 document.getElementById('389thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("390thlink")) {
 document.getElementById('390thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("391thlink")) {
 document.getElementById('391thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("392thlink")) {
 document.getElementById('392thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("393thlink")) {
 document.getElementById('393thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("394thlink")) {
 document.getElementById('394thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("395thlink")) {
 document.getElementById('395thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("396thlink")) {
 document.getElementById('396thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("397thlink")) {
 document.getElementById('397thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("398thlink")) {
 document.getElementById('398thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("399thlink")) {
 document.getElementById('399thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("400thlink")) {
 document.getElementById('400thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("401thlink")) {
 document.getElementById('401thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("402thlink")) {
 document.getElementById('402thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("403thlink")) {
 document.getElementById('403thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("404thlink")) {
 document.getElementById('404thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("405thlink")) {
 document.getElementById('405thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("406thlink")) {
 document.getElementById('406thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("407thlink")) {
 document.getElementById('407thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("408thlink")) {
 document.getElementById('408thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("409thlink")) {
 document.getElementById('409thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("410thlink")) {
 document.getElementById('410thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("411thlink")) {
 document.getElementById('411thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("412thlink")) {
 document.getElementById('412thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("413thlink")) {
 document.getElementById('413thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("414thlink")) {
 document.getElementById('414thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("415thlink")) {
 document.getElementById('415thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("416thlink")) {
 document.getElementById('416thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("417thlink")) {
 document.getElementById('417thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("418thlink")) {
 document.getElementById('418thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("419thlink")) {
 document.getElementById('419thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("420thlink")) {
 document.getElementById('420thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("421thlink")) {
 document.getElementById('421thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("422thlink")) {
 document.getElementById('422thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("423thlink")) {
 document.getElementById('423thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("424thlink")) {
 document.getElementById('424thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("425thlink")) {
 document.getElementById('425thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("426thlink")) {
 document.getElementById('426thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("427thlink")) {
 document.getElementById('427thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("428thlink")) {
 document.getElementById('428thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("429thlink")) {
 document.getElementById('429thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("430thlink")) {
 document.getElementById('430thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("431thlink")) {
 document.getElementById('431thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("432thlink")) {
 document.getElementById('432thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("433thlink")) {
 document.getElementById('433thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("434thlink")) {
 document.getElementById('434thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("435thlink")) {
 document.getElementById('435thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("436thlink")) {
 document.getElementById('436thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("437thlink")) {
 document.getElementById('437thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("438thlink")) {
 document.getElementById('438thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("439thlink")) {
 document.getElementById('439thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("440thlink")) {
 document.getElementById('440thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("441thlink")) {
 document.getElementById('441thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("442thlink")) {
 document.getElementById('442thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("443thlink")) {
 document.getElementById('443thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("444thlink")) {
 document.getElementById('444thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("445thlink")) {
 document.getElementById('445thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("446thlink")) {
 document.getElementById('446thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("447thlink")) {
 document.getElementById('447thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("448thlink")) {
 document.getElementById('448thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("449thlink")) {
 document.getElementById('449thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("450thlink")) {
 document.getElementById('450thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("451thlink")) {
 document.getElementById('451thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("452thlink")) {
 document.getElementById('452thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("453thlink")) {
 document.getElementById('453thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("454thlink")) {
 document.getElementById('454thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("455thlink")) {
 document.getElementById('455thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("456thlink")) {
 document.getElementById('456thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("457thlink")) {
 document.getElementById('457thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("458thlink")) {
 document.getElementById('458thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("459thlink")) {
 document.getElementById('459thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("460thlink")) {
 document.getElementById('460thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("461thlink")) {
 document.getElementById('461thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("462thlink")) {
 document.getElementById('462thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("463thlink")) {
 document.getElementById('463thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("464thlink")) {
 document.getElementById('464thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("465thlink")) {
 document.getElementById('465thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("466thlink")) {
 document.getElementById('466thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("467thlink")) {
 document.getElementById('467thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("468thlink")) {
 document.getElementById('468thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("469thlink")) {
 document.getElementById('469thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("470thlink")) {
 document.getElementById('470thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("471thlink")) {
 document.getElementById('471thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("472thlink")) {
 document.getElementById('472thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("473thlink")) {
 document.getElementById('473thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("474thlink")) {
 document.getElementById('474thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("475thlink")) {
 document.getElementById('475thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("476thlink")) {
 document.getElementById('476thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("477thlink")) {
 document.getElementById('477thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("478thlink")) {
 document.getElementById('478thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("479thlink")) {
 document.getElementById('479thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("480thlink")) {
 document.getElementById('480thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("481thlink")) {
 document.getElementById('481thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("482thlink")) {
 document.getElementById('482thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("483thlink")) {
 document.getElementById('483thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("484thlink")) {
 document.getElementById('484thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("485thlink")) {
 document.getElementById('485thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("486thlink")) {
 document.getElementById('486thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("487thlink")) {
 document.getElementById('487thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("488thlink")) {
 document.getElementById('488thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("489thlink")) {
 document.getElementById('489thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("490thlink")) {
 document.getElementById('490thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("491thlink")) {
 document.getElementById('491thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("492thlink")) {
 document.getElementById('492thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("493thlink")) {
 document.getElementById('493thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("494thlink")) {
 document.getElementById('494thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("495thlink")) {
 document.getElementById('495thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("496thlink")) {
 document.getElementById('496thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("497thlink")) {
 document.getElementById('497thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("498thlink")) {
 document.getElementById('498thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("499thlink")) {
 document.getElementById('499thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("500thlink")) {
 document.getElementById('500thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("501thlink")) {
 document.getElementById('501thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("502thlink")) {
 document.getElementById('502thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("503thlink")) {
 document.getElementById('503thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("504thlink")) {
 document.getElementById('504thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("505thlink")) {
 document.getElementById('505thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("506thlink")) {
 document.getElementById('506thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("507thlink")) {
 document.getElementById('507thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("508thlink")) {
 document.getElementById('508thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("509thlink")) {
 document.getElementById('509thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("510thlink")) {
 document.getElementById('510thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("511thlink")) {
 document.getElementById('511thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("512thlink")) {
 document.getElementById('512thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("513thlink")) {
 document.getElementById('513thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("514thlink")) {
 document.getElementById('514thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("515thlink")) {
 document.getElementById('515thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("516thlink")) {
 document.getElementById('516thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("517thlink")) {
 document.getElementById('517thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("518thlink")) {
 document.getElementById('518thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("519thlink")) {
 document.getElementById('519thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("520thlink")) {
 document.getElementById('520thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("521thlink")) {
 document.getElementById('521thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("522thlink")) {
 document.getElementById('522thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("523thlink")) {
 document.getElementById('523thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("524thlink")) {
 document.getElementById('524thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("525thlink")) {
 document.getElementById('525thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("526thlink")) {
 document.getElementById('526thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("527thlink")) {
 document.getElementById('527thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("528thlink")) {
 document.getElementById('528thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("529thlink")) {
 document.getElementById('529thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("530thlink")) {
 document.getElementById('530thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("531thlink")) {
 document.getElementById('531thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("532thlink")) {
 document.getElementById('532thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("533thlink")) {
 document.getElementById('533thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("534thlink")) {
 document.getElementById('534thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("535thlink")) {
 document.getElementById('535thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("536thlink")) {
 document.getElementById('536thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("537thlink")) {
 document.getElementById('537thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("538thlink")) {
 document.getElementById('538thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("539thlink")) {
 document.getElementById('539thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("540thlink")) {
 document.getElementById('540thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("541thlink")) {
 document.getElementById('541thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("542thlink")) {
 document.getElementById('542thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("543thlink")) {
 document.getElementById('543thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("544thlink")) {
 document.getElementById('544thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("545thlink")) {
 document.getElementById('545thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("546thlink")) {
 document.getElementById('546thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("547thlink")) {
 document.getElementById('547thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("548thlink")) {
 document.getElementById('548thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("549thlink")) {
 document.getElementById('549thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("550thlink")) {
 document.getElementById('550thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("551thlink")) {
 document.getElementById('551thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("552thlink")) {
 document.getElementById('552thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("553thlink")) {
 document.getElementById('553thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("554thlink")) {
 document.getElementById('554thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("555thlink")) {
 document.getElementById('555thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("556thlink")) {
 document.getElementById('556thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("557thlink")) {
 document.getElementById('557thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("558thlink")) {
 document.getElementById('558thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("559thlink")) {
 document.getElementById('559thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("560thlink")) {
 document.getElementById('560thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("561thlink")) {
 document.getElementById('561thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("562thlink")) {
 document.getElementById('562thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("563thlink")) {
 document.getElementById('563thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("564thlink")) {
 document.getElementById('564thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("565thlink")) {
 document.getElementById('565thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("566thlink")) {
 document.getElementById('566thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("567thlink")) {
 document.getElementById('567thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("568thlink")) {
 document.getElementById('568thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("569thlink")) {
 document.getElementById('569thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("570thlink")) {
 document.getElementById('570thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("571thlink")) {
 document.getElementById('571thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("572thlink")) {
 document.getElementById('572thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("573thlink")) {
 document.getElementById('573thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("574thlink")) {
 document.getElementById('574thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("575thlink")) {
 document.getElementById('575thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("576thlink")) {
 document.getElementById('576thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("577thlink")) {
 document.getElementById('577thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("578thlink")) {
 document.getElementById('578thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("579thlink")) {
 document.getElementById('579thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("580thlink")) {
 document.getElementById('580thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("581thlink")) {
 document.getElementById('581thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("582thlink")) {
 document.getElementById('582thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("583thlink")) {
 document.getElementById('583thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("584thlink")) {
 document.getElementById('584thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("585thlink")) {
 document.getElementById('585thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("586thlink")) {
 document.getElementById('586thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("587thlink")) {
 document.getElementById('587thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("588thlink")) {
 document.getElementById('588thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("589thlink")) {
 document.getElementById('589thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("590thlink")) {
 document.getElementById('590thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("591thlink")) {
 document.getElementById('591thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("592thlink")) {
 document.getElementById('592thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("593thlink")) {
 document.getElementById('593thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("594thlink")) {
 document.getElementById('594thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("595thlink")) {
 document.getElementById('595thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("596thlink")) {
 document.getElementById('596thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("597thlink")) {
 document.getElementById('597thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("598thlink")) {
 document.getElementById('598thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("599thlink")) {
 document.getElementById('599thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("600thlink")) {
 document.getElementById('600thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("601thlink")) {
 document.getElementById('601thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("602thlink")) {
 document.getElementById('602thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("603thlink")) {
 document.getElementById('603thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("604thlink")) {
 document.getElementById('604thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("605thlink")) {
 document.getElementById('605thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("606thlink")) {
 document.getElementById('606thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("607thlink")) {
 document.getElementById('607thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("608thlink")) {
 document.getElementById('608thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("609thlink")) {
 document.getElementById('609thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("610thlink")) {
 document.getElementById('610thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("611thlink")) {
 document.getElementById('611thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("612thlink")) {
 document.getElementById('612thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("613thlink")) {
 document.getElementById('613thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("614thlink")) {
 document.getElementById('614thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("615thlink")) {
 document.getElementById('615thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("616thlink")) {
 document.getElementById('616thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("617thlink")) {
 document.getElementById('617thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("618thlink")) {
 document.getElementById('618thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("619thlink")) {
 document.getElementById('619thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("620thlink")) {
 document.getElementById('620thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("621thlink")) {
 document.getElementById('621thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("622thlink")) {
 document.getElementById('622thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("623thlink")) {
 document.getElementById('623thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("624thlink")) {
 document.getElementById('624thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("625thlink")) {
 document.getElementById('625thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("626thlink")) {
 document.getElementById('626thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("627thlink")) {
 document.getElementById('627thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("628thlink")) {
 document.getElementById('628thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("629thlink")) {
 document.getElementById('629thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("630thlink")) {
 document.getElementById('630thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("631thlink")) {
 document.getElementById('631thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("632thlink")) {
 document.getElementById('632thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("633thlink")) {
 document.getElementById('633thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("634thlink")) {
 document.getElementById('634thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("635thlink")) {
 document.getElementById('635thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("636thlink")) {
 document.getElementById('636thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("637thlink")) {
 document.getElementById('637thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("638thlink")) {
 document.getElementById('638thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("639thlink")) {
 document.getElementById('639thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("640thlink")) {
 document.getElementById('640thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("641thlink")) {
 document.getElementById('641thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("642thlink")) {
 document.getElementById('642thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("643thlink")) {
 document.getElementById('643thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("644thlink")) {
 document.getElementById('644thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("645thlink")) {
 document.getElementById('645thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("646thlink")) {
 document.getElementById('646thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("647thlink")) {
 document.getElementById('647thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("648thlink")) {
 document.getElementById('648thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("649thlink")) {
 document.getElementById('649thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("650thlink")) {
 document.getElementById('650thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("651thlink")) {
 document.getElementById('651thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("652thlink")) {
 document.getElementById('652thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("653thlink")) {
 document.getElementById('653thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("654thlink")) {
 document.getElementById('654thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("655thlink")) {
 document.getElementById('655thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("656thlink")) {
 document.getElementById('656thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("657thlink")) {
 document.getElementById('657thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("658thlink")) {
 document.getElementById('658thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("659thlink")) {
 document.getElementById('659thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("660thlink")) {
 document.getElementById('660thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("661thlink")) {
 document.getElementById('661thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("662thlink")) {
 document.getElementById('662thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("663thlink")) {
 document.getElementById('663thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("664thlink")) {
 document.getElementById('664thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("665thlink")) {
 document.getElementById('665thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("666thlink")) {
 document.getElementById('666thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("667thlink")) {
 document.getElementById('667thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("668thlink")) {
 document.getElementById('668thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("669thlink")) {
 document.getElementById('669thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("670thlink")) {
 document.getElementById('670thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("671thlink")) {
 document.getElementById('671thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("672thlink")) {
 document.getElementById('672thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("673thlink")) {
 document.getElementById('673thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("674thlink")) {
 document.getElementById('674thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("675thlink")) {
 document.getElementById('675thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("676thlink")) {
 document.getElementById('676thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("677thlink")) {
 document.getElementById('677thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("678thlink")) {
 document.getElementById('678thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("679thlink")) {
 document.getElementById('679thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("680thlink")) {
 document.getElementById('680thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("681thlink")) {
 document.getElementById('681thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("682thlink")) {
 document.getElementById('682thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("683thlink")) {
 document.getElementById('683thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("684thlink")) {
 document.getElementById('684thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("685thlink")) {
 document.getElementById('685thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("686thlink")) {
 document.getElementById('686thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("687thlink")) {
 document.getElementById('687thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("688thlink")) {
 document.getElementById('688thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("689thlink")) {
 document.getElementById('689thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("690thlink")) {
 document.getElementById('690thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("691thlink")) {
 document.getElementById('691thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("692thlink")) {
 document.getElementById('692thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("693thlink")) {
 document.getElementById('693thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("694thlink")) {
 document.getElementById('694thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("695thlink")) {
 document.getElementById('695thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("696thlink")) {
 document.getElementById('696thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("697thlink")) {
 document.getElementById('697thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("698thlink")) {
 document.getElementById('698thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("699thlink")) {
 document.getElementById('699thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("700thlink")) {
 document.getElementById('700thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("701thlink")) {
 document.getElementById('701thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("702thlink")) {
 document.getElementById('702thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("703thlink")) {
 document.getElementById('703thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("704thlink")) {
 document.getElementById('704thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("705thlink")) {
 document.getElementById('705thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("706thlink")) {
 document.getElementById('706thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("707thlink")) {
 document.getElementById('707thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("708thlink")) {
 document.getElementById('708thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("709thlink")) {
 document.getElementById('709thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("710thlink")) {
 document.getElementById('710thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("711thlink")) {
 document.getElementById('711thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("712thlink")) {
 document.getElementById('712thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("713thlink")) {
 document.getElementById('713thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("714thlink")) {
 document.getElementById('714thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("715thlink")) {
 document.getElementById('715thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("716thlink")) {
 document.getElementById('716thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("717thlink")) {
 document.getElementById('717thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("718thlink")) {
 document.getElementById('718thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("719thlink")) {
 document.getElementById('719thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("720thlink")) {
 document.getElementById('720thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("721thlink")) {
 document.getElementById('721thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("722thlink")) {
 document.getElementById('722thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("723thlink")) {
 document.getElementById('723thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("724thlink")) {
 document.getElementById('724thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("725thlink")) {
 document.getElementById('725thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("726thlink")) {
 document.getElementById('726thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("727thlink")) {
 document.getElementById('727thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("728thlink")) {
 document.getElementById('728thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("729thlink")) {
 document.getElementById('729thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("730thlink")) {
 document.getElementById('730thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("731thlink")) {
 document.getElementById('731thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("732thlink")) {
 document.getElementById('732thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("733thlink")) {
 document.getElementById('733thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("734thlink")) {
 document.getElementById('734thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("735thlink")) {
 document.getElementById('735thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("736thlink")) {
 document.getElementById('736thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("737thlink")) {
 document.getElementById('737thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("738thlink")) {
 document.getElementById('738thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("739thlink")) {
 document.getElementById('739thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("740thlink")) {
 document.getElementById('740thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("741thlink")) {
 document.getElementById('741thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("742thlink")) {
 document.getElementById('742thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("743thlink")) {
 document.getElementById('743thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("744thlink")) {
 document.getElementById('744thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("745thlink")) {
 document.getElementById('745thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("746thlink")) {
 document.getElementById('746thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("747thlink")) {
 document.getElementById('747thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("748thlink")) {
 document.getElementById('748thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("749thlink")) {
 document.getElementById('749thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("750thlink")) {
 document.getElementById('750thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("751thlink")) {
 document.getElementById('751thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("752thlink")) {
 document.getElementById('752thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("753thlink")) {
 document.getElementById('753thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("754thlink")) {
 document.getElementById('754thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("755thlink")) {
 document.getElementById('755thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("756thlink")) {
 document.getElementById('756thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("757thlink")) {
 document.getElementById('757thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("758thlink")) {
 document.getElementById('758thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("759thlink")) {
 document.getElementById('759thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("760thlink")) {
 document.getElementById('760thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("761thlink")) {
 document.getElementById('761thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("762thlink")) {
 document.getElementById('762thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("763thlink")) {
 document.getElementById('763thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("764thlink")) {
 document.getElementById('764thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("765thlink")) {
 document.getElementById('765thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("766thlink")) {
 document.getElementById('766thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("767thlink")) {
 document.getElementById('767thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("768thlink")) {
 document.getElementById('768thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("769thlink")) {
 document.getElementById('769thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("770thlink")) {
 document.getElementById('770thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("771thlink")) {
 document.getElementById('771thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("772thlink")) {
 document.getElementById('772thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("773thlink")) {
 document.getElementById('773thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("774thlink")) {
 document.getElementById('774thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("775thlink")) {
 document.getElementById('775thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("776thlink")) {
 document.getElementById('776thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("777thlink")) {
 document.getElementById('777thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("778thlink")) {
 document.getElementById('778thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("779thlink")) {
 document.getElementById('779thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("780thlink")) {
 document.getElementById('780thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("781thlink")) {
 document.getElementById('781thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("782thlink")) {
 document.getElementById('782thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("783thlink")) {
 document.getElementById('783thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("784thlink")) {
 document.getElementById('784thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("785thlink")) {
 document.getElementById('785thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("786thlink")) {
 document.getElementById('786thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("787thlink")) {
 document.getElementById('787thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("788thlink")) {
 document.getElementById('788thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("789thlink")) {
 document.getElementById('789thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("790thlink")) {
 document.getElementById('790thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("791thlink")) {
 document.getElementById('791thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("792thlink")) {
 document.getElementById('792thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("793thlink")) {
 document.getElementById('793thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("794thlink")) {
 document.getElementById('794thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("795thlink")) {
 document.getElementById('795thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("796thlink")) {
 document.getElementById('796thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("797thlink")) {
 document.getElementById('797thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("798thlink")) {
 document.getElementById('798thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("799thlink")) {
 document.getElementById('799thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("800thlink")) {
 document.getElementById('800thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("801thlink")) {
 document.getElementById('801thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("802thlink")) {
 document.getElementById('802thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("803thlink")) {
 document.getElementById('803thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("804thlink")) {
 document.getElementById('804thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("805thlink")) {
 document.getElementById('805thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("806thlink")) {
 document.getElementById('806thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("807thlink")) {
 document.getElementById('807thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("808thlink")) {
 document.getElementById('808thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("809thlink")) {
 document.getElementById('809thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("810thlink")) {
 document.getElementById('810thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("811thlink")) {
 document.getElementById('811thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("812thlink")) {
 document.getElementById('812thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("813thlink")) {
 document.getElementById('813thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("814thlink")) {
 document.getElementById('814thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("815thlink")) {
 document.getElementById('815thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("816thlink")) {
 document.getElementById('816thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("817thlink")) {
 document.getElementById('817thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("818thlink")) {
 document.getElementById('818thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("819thlink")) {
 document.getElementById('819thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("820thlink")) {
 document.getElementById('820thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("821thlink")) {
 document.getElementById('821thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("822thlink")) {
 document.getElementById('822thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("823thlink")) {
 document.getElementById('823thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("824thlink")) {
 document.getElementById('824thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("825thlink")) {
 document.getElementById('825thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("826thlink")) {
 document.getElementById('826thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("827thlink")) {
 document.getElementById('827thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("828thlink")) {
 document.getElementById('828thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("829thlink")) {
 document.getElementById('829thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("830thlink")) {
 document.getElementById('830thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("831thlink")) {
 document.getElementById('831thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("832thlink")) {
 document.getElementById('832thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("833thlink")) {
 document.getElementById('833thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("834thlink")) {
 document.getElementById('834thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("835thlink")) {
 document.getElementById('835thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("836thlink")) {
 document.getElementById('836thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("837thlink")) {
 document.getElementById('837thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("838thlink")) {
 document.getElementById('838thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("839thlink")) {
 document.getElementById('839thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("840thlink")) {
 document.getElementById('840thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("841thlink")) {
 document.getElementById('841thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("842thlink")) {
 document.getElementById('842thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("843thlink")) {
 document.getElementById('843thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("844thlink")) {
 document.getElementById('844thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("845thlink")) {
 document.getElementById('845thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("846thlink")) {
 document.getElementById('846thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("847thlink")) {
 document.getElementById('847thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("848thlink")) {
 document.getElementById('848thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("849thlink")) {
 document.getElementById('849thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("850thlink")) {
 document.getElementById('850thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("851thlink")) {
 document.getElementById('851thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("852thlink")) {
 document.getElementById('852thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("853thlink")) {
 document.getElementById('853thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("854thlink")) {
 document.getElementById('854thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("855thlink")) {
 document.getElementById('855thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("856thlink")) {
 document.getElementById('856thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("857thlink")) {
 document.getElementById('857thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("858thlink")) {
 document.getElementById('858thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("859thlink")) {
 document.getElementById('859thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("860thlink")) {
 document.getElementById('860thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("861thlink")) {
 document.getElementById('861thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("862thlink")) {
 document.getElementById('862thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("863thlink")) {
 document.getElementById('863thlink').style.backgroundColor = "violet";
}
if (localStorage.getItem("864thlink")) {
 document.getElementById('864thlink').style.backgroundColor = "violet";
}



