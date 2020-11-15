window.addEventListener("load", function () {
 document.getElementById("nav").addEventListener("click", function (e) {
  if (e.target.classList.contains("link")) {
   location = e.target.getAttribute("data-link");
  }
 })
})

var divItems = document.getElementsByClassName("link");




function selected(item) {

 if (item.style.backgroundColor == 'blue') {
  // unset the item that is already selected
  item.style.backgroundColor = 'white';
  localStorage.removeItem(item.id);
 } else {
  item.style.backgroundColor = 'blue';

  console.log(item.id);
  localStorage.setItem(item.id, 'any value');
 }

}

if (localStorage.getItem("firstlink")) {
 document.getElementById('firstlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("secondlink")) {
 document.getElementById('secondlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("thirdlink")) {
 document.getElementById('thirdlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("fourthlink")) {
 document.getElementById('fourthlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("fifthlink")) {
 document.getElementById('fifthlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("sixthlink")) {
 document.getElementById('sixthlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("seventhlink")) {
 document.getElementById('seventhlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("eighthlink")) {
 document.getElementById('eighthlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("ninthlink")) {
 document.getElementById('ninthlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("tenthlink")) {
 document.getElementById('tenthlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("eleventhlink")) {
 document.getElementById('eleventhlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("twelvthink")) {
 document.getElementById('twelvthink').style.backgroundColor = "blue";
}
if (localStorage.getItem("thirtenthlink")) {
 document.getElementById('thirtenthlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("fourteenthlink")) {
 document.getElementById('fourteenthlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("fifteenthlink")) {
 document.getElementById('fifteenthlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("sixteenthlink")) {
 document.getElementById('sixteenthlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("seventeenthlink")) {
 document.getElementById('seventeenthlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("eighteenthlink")) {
 document.getElementById('eighteenthlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("nineteenthlink")) {
 document.getElementById('nineteenthlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("20thlink")) {
 document.getElementById('20thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("21thlink")) {
 document.getElementById('21thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("22thlink")) {
 document.getElementById('22thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("23thlink")) {
 document.getElementById('23thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("24thlink")) {
 document.getElementById('24thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("25thlink")) {
 document.getElementById('25thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("26thlink")) {
 document.getElementById('26thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("27thlink")) {
 document.getElementById('27thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("28thlink")) {
 document.getElementById('28thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("29thlink")) {
 document.getElementById('29thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("30thlink")) {
 document.getElementById('30thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("31thlink")) {
 document.getElementById('31thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("32thlink")) {
 document.getElementById('32thlink').style.backgroundColor = "blue";
}

if (localStorage.getItem("33thlink")) {
 document.getElementById('33thlink').style.backgroundColor = "blue";
}

if (localStorage.getItem("34thlink")) {
 document.getElementById('34thlink').style.backgroundColor = "blue";
}

if (localStorage.getItem("35thlink")) {
 document.getElementById('35thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("36thlink")) {
 document.getElementById('36thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("37thlink")) {
 document.getElementById('37thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("38thlink")) {
 document.getElementById('38thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("39thlink")) {
 document.getElementById('39thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("40thlink")) {
 document.getElementById('40thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("41thlink")) {
 document.getElementById('41thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("42thlink")) {
 document.getElementById('42thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("43thlink")) {
 document.getElementById('43thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("44thlink")) {
 document.getElementById('44thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("45thlink")) {
 document.getElementById('45thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("46thlink")) {
 document.getElementById('46thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("47thlink")) {
 document.getElementById('47thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("48thlink")) {
 document.getElementById('48thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("49thlink")) {
 document.getElementById('49thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("50thlink")) {
 document.getElementById('50thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("51thlink")) {
 document.getElementById('51thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("52thlink")) {
 document.getElementById('52thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("53thlink")) {
 document.getElementById('53thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("54thlink")) {
 document.getElementById('54thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("55thlink")) {
 document.getElementById('55thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("56thlink")) {
 document.getElementById('56thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("57thlink")) {
 document.getElementById('57thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("58thlink")) {
 document.getElementById('58thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("59thlink")) {
 document.getElementById('59thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("60thlink")) {
 document.getElementById('60thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("61thlink")) {
 document.getElementById('61thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("62thlink")) {
 document.getElementById('62thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("63thlink")) {
 document.getElementById('63thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("64thlink")) {
 document.getElementById('64thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("65thlink")) {
 document.getElementById('65thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("66thlink")) {
 document.getElementById('66thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("67thlink")) {
 document.getElementById('67thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("68thlink")) {
 document.getElementById('68thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("69thlink")) {
 document.getElementById('69thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("70thlink")) {
 document.getElementById('70thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("71thlink")) {
 document.getElementById('71thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("72thlink")) {
 document.getElementById('72thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("73thlink")) {
 document.getElementById('73thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("74thlink")) {
 document.getElementById('74thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("75thlink")) {
 document.getElementById('75thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("76thlink")) {
 document.getElementById('76thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("77thlink")) {
 document.getElementById('77thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("78thlink")) {
 document.getElementById('78thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("79thlink")) {
 document.getElementById('79thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("80thlink")) {
 document.getElementById('80thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("81thlink")) {
 document.getElementById('81thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("82thlink")) {
 document.getElementById('82thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("83thlink")) {
 document.getElementById('83thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("84thlink")) {
 document.getElementById('84thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("85thlink")) {
 document.getElementById('85thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("86thlink")) {
 document.getElementById('86thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("87thlink")) {
 document.getElementById('87thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("88thlink")) {
 document.getElementById('88thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("89thlink")) {
 document.getElementById('89thlink').style.backgroundColor ="blue";
}
if (localStorage.getItem("90thlink")) {
 document.getElementById('90thlink').style.backgroundColor ="blue";
}
if (localStorage.getItem("91thlink")) {
 document.getElementById('91thlink').style.backgroundColor ="blue";
}
if (localStorage.getItem("92thlink")) {
 document.getElementById('92thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("93thlink")) {
 document.getElementById('93thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("94thlink")) {
 document.getElementById('94thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("95thlink")) {
 document.getElementById('95thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("96thlink")) {
 document.getElementById('96thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("97thlink")) {
 document.getElementById('97thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("98thlink")) {
 document.getElementById('98thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("99thlink")) {
 document.getElementById('99thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("100thlink")) {
 document.getElementById('100thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("101thlink")) {
 document.getElementById('101thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("102thlink")) {
 document.getElementById('102thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("103thlink")) {
 document.getElementById('103thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("104thlink")) {
 document.getElementById('104thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("105thlink")) {
 document.getElementById('105thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("106thlink")) {
 document.getElementById('106thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("107thlink")) {
 document.getElementById('107thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("108thlink")) {
 document.getElementById('108thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("109thlink")) {
 document.getElementById('109thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("110thlink")) {
 document.getElementById('110thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("111thlink")) {
 document.getElementById('111thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("112thlink")) {
 document.getElementById('112thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("113thlink")) {
 document.getElementById('113thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("114thlink")) {
 document.getElementById('114thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("115thlink")) {
 document.getElementById('115thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("116thlink")) {
 document.getElementById('116thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("117thlink")) {
 document.getElementById('117thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("118thlink")) {
 document.getElementById('118thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("119thlink")) {
 document.getElementById('119thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("120thlink")) {
 document.getElementById('120thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("121thlink")) {
 document.getElementById('121thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("122thlink")) {
 document.getElementById('122thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("123thlink")) {
 document.getElementById('123thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("124thlink")) {
 document.getElementById('124thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("125thlink")) {
 document.getElementById('125thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("126thlink")) {
 document.getElementById('126thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("127thlink")) {
 document.getElementById('127thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("128thlink")) {
 document.getElementById('128thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("129thlink")) {
 document.getElementById('129thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("130thlink")) {
 document.getElementById('130thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("131thlink")) {
 document.getElementById('131thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("132thlink")) {
 document.getElementById('132thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("133thlink")) {
 document.getElementById('133thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("134thlink")) {
 document.getElementById('134thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("135thlink")) {
 document.getElementById('135thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("136thlink")) {
 document.getElementById('136thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("137thlink")) {
 document.getElementById('137thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("138thlink")) {
 document.getElementById('138thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("139thlink")) {
 document.getElementById('139thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("140thlink")) {
 document.getElementById('140thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("141thlink")) {
 document.getElementById('141thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("142thlink")) {
 document.getElementById('142thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("143thlink")) {
 document.getElementById('143thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("144thlink")) {
 document.getElementById('144thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("145thlink")) {
 document.getElementById('145thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("146thlink")) {
 document.getElementById('146thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("147thlink")) {
 document.getElementById('147thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("148thlink")) {
 document.getElementById('148thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("149thlink")) {
 document.getElementById('149thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("150thlink")) {
 document.getElementById('150thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("151thlink")) {
 document.getElementById('151thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("152thlink")) {
 document.getElementById('152thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("153thlink")) {
 document.getElementById('153thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("154thlink")) {
 document.getElementById('154thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("155thlink")) {
 document.getElementById('155thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("156thlink")) {
 document.getElementById('156thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("157thlink")) {
 document.getElementById('157thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("158thlink")) {
 document.getElementById('158thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("159thlink")) {
 document.getElementById('159thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("160thlink")) {
 document.getElementById('160thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("161thlink")) {
 document.getElementById('161thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("162thlink")) {
 document.getElementById('162thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("163thlink")) {
 document.getElementById('163thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("164thlink")) {
 document.getElementById('164thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("165thlink")) {
 document.getElementById('165thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("166thlink")) {
 document.getElementById('166thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("167thlink")) {
 document.getElementById('167thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("168thlink")) {
 document.getElementById('168thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("169thlink")) {
 document.getElementById('169thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("170thlink")) {
 document.getElementById('170thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("171thlink")) {
 document.getElementById('171thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("172thlink")) {
 document.getElementById('172thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("173thlink")) {
 document.getElementById('173thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("174thlink")) {
 document.getElementById('174thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("175thlink")) {
 document.getElementById('175thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("176thlink")) {
 document.getElementById('176thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("177thlink")) {
 document.getElementById('177thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("178thlink")) {
 document.getElementById('178thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("179thlink")) {
 document.getElementById('179thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("180thlink")) {
 document.getElementById('180thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("181thlink")) {
 document.getElementById('181thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("182thlink")) {
 document.getElementById('182thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("183thlink")) {
 document.getElementById('183thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("184thlink")) {
 document.getElementById('184thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("185thlink")) {
 document.getElementById('185thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("186thlink")) {
 document.getElementById('186thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("187thlink")) {
 document.getElementById('187thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("188thlink")) {
 document.getElementById('188thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("189thlink")) {
 document.getElementById('189thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("190thlink")) {
 document.getElementById('190thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("191thlink")) {
 document.getElementById('191thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("192thlink")) {
 document.getElementById('192thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("193thlink")) {
 document.getElementById('193thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("194thlink")) {
 document.getElementById('194thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("195thlink")) {
 document.getElementById('195thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("196thlink")) {
 document.getElementById('196thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("197thlink")) {
 document.getElementById('197thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("198thlink")) {
 document.getElementById('198thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("199thlink")) {
 document.getElementById('199thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("200thlink")) {
 document.getElementById('200thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("201thlink")) {
 document.getElementById('201thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("202thlink")) {
 document.getElementById('202thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("203thlink")) {
 document.getElementById('203thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("204thlink")) {
 document.getElementById('204thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("205thlink")) {
 document.getElementById('205thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("206thlink")) {
 document.getElementById('206thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("207thlink")) {
 document.getElementById('207thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("208thlink")) {
 document.getElementById('208thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("209thlink")) {
 document.getElementById('209thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("210thlink")) {
 document.getElementById('210thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("211thlink")) {
 document.getElementById('211thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("212thlink")) {
 document.getElementById('212thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("213thlink")) {
 document.getElementById('213thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("214thlink")) {
 document.getElementById('214thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("215thlink")) {
 document.getElementById('215thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("216thlink")) {
 document.getElementById('216thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("217thlink")) {
 document.getElementById('217thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("218thlink")) {
 document.getElementById('218thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("219thlink")) {
 document.getElementById('219thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("220thlink")) {
 document.getElementById('220thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("221thlink")) {
 document.getElementById('221thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("222thlink")) {
 document.getElementById('222thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("223thlink")) {
 document.getElementById('223thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("224thlink")) {
 document.getElementById('224thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("225thlink")) {
 document.getElementById('225thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("226thlink")) {
 document.getElementById('226thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("227thlink")) {
 document.getElementById('227thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("228thlink")) {
 document.getElementById('228thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("229thlink")) {
 document.getElementById('229thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("230thlink")) {
 document.getElementById('230thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("231thlink")) {
 document.getElementById('231thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("232thlink")) {
 document.getElementById('232thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("233thlink")) {
 document.getElementById('233thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("234thlink")) {
 document.getElementById('234thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("235thlink")) {
 document.getElementById('235thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("236thlink")) {
 document.getElementById('236thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("237thlink")) {
 document.getElementById('237thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("238thlink")) {
 document.getElementById('238thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("239thlink")) {
 document.getElementById('239thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("240thlink")) {
 document.getElementById('240thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("241thlink")) {
 document.getElementById('241thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("242thlink")) {
 document.getElementById('242thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("243thlink")) {
 document.getElementById('243thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("244thlink")) {
 document.getElementById('244thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("245thlink")) {
 document.getElementById('245thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("246thlink")) {
 document.getElementById('246thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("247thlink")) {
 document.getElementById('247thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("248thlink")) {
 document.getElementById('248thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("249thlink")) {
 document.getElementById('249thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("250thlink")) {
 document.getElementById('250thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("251thlink")) {
 document.getElementById('251thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("252thlink")) {
 document.getElementById('252thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("253thlink")) {
 document.getElementById('253thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("254thlink")) {
 document.getElementById('254thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("255thlink")) {
 document.getElementById('255thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("256thlink")) {
 document.getElementById('256thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("257thlink")) {
 document.getElementById('257thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("258thlink")) {
 document.getElementById('258thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("259thlink")) {
 document.getElementById('259thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("260thlink")) {
 document.getElementById('260thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("261thlink")) {
 document.getElementById('261thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("262thlink")) {
 document.getElementById('262thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("263thlink")) {
 document.getElementById('263thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("264thlink")) {
 document.getElementById('264thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("265thlink")) {
 document.getElementById('265thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("266thlink")) {
 document.getElementById('266thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("267thlink")) {
 document.getElementById('267thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("268thlink")) {
 document.getElementById('268thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("269thlink")) {
 document.getElementById('269thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("270thlink")) {
 document.getElementById('270thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("271thlink")) {
 document.getElementById('271thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("272thlink")) {
 document.getElementById('272thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("273thlink")) {
 document.getElementById('273thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("274thlink")) {
 document.getElementById('274thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("275thlink")) {
 document.getElementById('275thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("276thlink")) {
 document.getElementById('276thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("277thlink")) {
 document.getElementById('277thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("278thlink")) {
 document.getElementById('278thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("279thlink")) {
 document.getElementById('279thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("280thlink")) {
 document.getElementById('280thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("281thlink")) {
 document.getElementById('281thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("282thlink")) {
 document.getElementById('282thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("283thlink")) {
 document.getElementById('283thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("284thlink")) {
 document.getElementById('284thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("285thlink")) {
 document.getElementById('285thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("286thlink")) {
 document.getElementById('286thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("287thlink")) {
 document.getElementById('287thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("288thlink")) {
 document.getElementById('288thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("289thlink")) {
 document.getElementById('289thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("290thlink")) {
 document.getElementById('290thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("291thlink")) {
 document.getElementById('291thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("292thlink")) {
 document.getElementById('292thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("293thlink")) {
 document.getElementById('293thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("294thlink")) {
 document.getElementById('294thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("295thlink")) {
 document.getElementById('295thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("296thlink")) {
 document.getElementById('296thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("297thlink")) {
 document.getElementById('297thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("298thlink")) {
 document.getElementById('298thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("299thlink")) {
 document.getElementById('299thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("300thlink")) {
 document.getElementById('300thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("301thlink")) {
 document.getElementById('301thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("302thlink")) {
 document.getElementById('302thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("303thlink")) {
 document.getElementById('303thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("304thlink")) {
 document.getElementById('304thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("305thlink")) {
 document.getElementById('305thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("306thlink")) {
 document.getElementById('306thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("307thlink")) {
 document.getElementById('307thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("308thlink")) {
 document.getElementById('308thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("309thlink")) {
 document.getElementById('309thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("310thlink")) {
 document.getElementById('310thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("311thlink")) {
 document.getElementById('311thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("312thlink")) {
 document.getElementById('312thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("313thlink")) {
 document.getElementById('313thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("314thlink")) {
 document.getElementById('314thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("315thlink")) {
 document.getElementById('315thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("316thlink")) {
 document.getElementById('316thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("317thlink")) {
 document.getElementById('317thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("318thlink")) {
 document.getElementById('318thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("319thlink")) {
 document.getElementById('319thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("320thlink")) {
 document.getElementById('320thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("321thlink")) {
 document.getElementById('321thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("322thlink")) {
 document.getElementById('322thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("323thlink")) {
 document.getElementById('323thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("324thlink")) {
 document.getElementById('324thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("325thlink")) {
 document.getElementById('325thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("326thlink")) {
 document.getElementById('326thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("327thlink")) {
 document.getElementById('327thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("328thlink")) {
 document.getElementById('328thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("329thlink")) {
 document.getElementById('329thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("330thlink")) {
 document.getElementById('330thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("331thlink")) {
 document.getElementById('331thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("332thlink")) {
 document.getElementById('332thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("333thlink")) {
 document.getElementById('333thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("334thlink")) {
 document.getElementById('334thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("335thlink")) {
 document.getElementById('335thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("336thlink")) {
 document.getElementById('336thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("337thlink")) {
 document.getElementById('337thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("338thlink")) {
 document.getElementById('338thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("339thlink")) {
 document.getElementById('339thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("340thlink")) {
 document.getElementById('340thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("341thlink")) {
 document.getElementById('341thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("342thlink")) {
 document.getElementById('342thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("343thlink")) {
 document.getElementById('343thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("344thlink")) {
 document.getElementById('344thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("345thlink")) {
 document.getElementById('345thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("346thlink")) {
 document.getElementById('346thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("347thlink")) {
 document.getElementById('347thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("348thlink")) {
 document.getElementById('348thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("349thlink")) {
 document.getElementById('349thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("350thlink")) {
 document.getElementById('350thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("351thlink")) {
 document.getElementById('351thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("352thlink")) {
 document.getElementById('352thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("353thlink")) {
 document.getElementById('353thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("354thlink")) {
 document.getElementById('354thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("355thlink")) {
 document.getElementById('355thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("356thlink")) {
 document.getElementById('356thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("357thlink")) {
 document.getElementById('357thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("358thlink")) {
 document.getElementById('358thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("359thlink")) {
 document.getElementById('359thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("360thlink")) {
 document.getElementById('360thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("361thlink")) {
 document.getElementById('361thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("362thlink")) {
 document.getElementById('362thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("363thlink")) {
 document.getElementById('363thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("364thlink")) {
 document.getElementById('364thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("365thlink")) {
 document.getElementById('365thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("366thlink")) {
 document.getElementById('366thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("367thlink")) {
 document.getElementById('367thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("368thlink")) {
 document.getElementById('368thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("369thlink")) {
 document.getElementById('369thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("370thlink")) {
 document.getElementById('370thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("371thlink")) {
 document.getElementById('371thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("372thlink")) {
 document.getElementById('372thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("373thlink")) {
 document.getElementById('373thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("374thlink")) {
 document.getElementById('374thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("375thlink")) {
 document.getElementById('375thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("376thlink")) {
 document.getElementById('376thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("377thlink")) {
 document.getElementById('377thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("378thlink")) {
 document.getElementById('378thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("379thlink")) {
 document.getElementById('379thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("380thlink")) {
 document.getElementById('380thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("381thlink")) {
 document.getElementById('381thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("382thlink")) {
 document.getElementById('382thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("383thlink")) {
 document.getElementById('383thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("384thlink")) {
 document.getElementById('384thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("385thlink")) {
 document.getElementById('385thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("386thlink")) {
 document.getElementById('386thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("387thlink")) {
 document.getElementById('387thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("388thlink")) {
 document.getElementById('388thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("389thlink")) {
 document.getElementById('389thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("390thlink")) {
 document.getElementById('390thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("391thlink")) {
 document.getElementById('391thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("392thlink")) {
 document.getElementById('392thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("393thlink")) {
 document.getElementById('393thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("394thlink")) {
 document.getElementById('394thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("395thlink")) {
 document.getElementById('395thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("396thlink")) {
 document.getElementById('396thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("397thlink")) {
 document.getElementById('397thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("398thlink")) {
 document.getElementById('398thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("399thlink")) {
 document.getElementById('399thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("400thlink")) {
 document.getElementById('400thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("401thlink")) {
 document.getElementById('401thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("402thlink")) {
 document.getElementById('402thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("403thlink")) {
 document.getElementById('403thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("404thlink")) {
 document.getElementById('404thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("405thlink")) {
 document.getElementById('405thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("406thlink")) {
 document.getElementById('406thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("407thlink")) {
 document.getElementById('407thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("408thlink")) {
 document.getElementById('408thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("409thlink")) {
 document.getElementById('409thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("410thlink")) {
 document.getElementById('410thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("411thlink")) {
 document.getElementById('411thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("412thlink")) {
 document.getElementById('412thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("413thlink")) {
 document.getElementById('413thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("414thlink")) {
 document.getElementById('414thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("415thlink")) {
 document.getElementById('415thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("416thlink")) {
 document.getElementById('416thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("417thlink")) {
 document.getElementById('417thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("418thlink")) {
 document.getElementById('418thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("419thlink")) {
 document.getElementById('419thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("420thlink")) {
 document.getElementById('420thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("421thlink")) {
 document.getElementById('421thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("422thlink")) {
 document.getElementById('422thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("423thlink")) {
 document.getElementById('423thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("424thlink")) {
 document.getElementById('424thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("425thlink")) {
 document.getElementById('425thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("426thlink")) {
 document.getElementById('426thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("427thlink")) {
 document.getElementById('427thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("428thlink")) {
 document.getElementById('428thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("429thlink")) {
 document.getElementById('429thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("430thlink")) {
 document.getElementById('430thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("431thlink")) {
 document.getElementById('431thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("432thlink")) {
 document.getElementById('432thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("433thlink")) {
 document.getElementById('433thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("434thlink")) {
 document.getElementById('434thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("435thlink")) {
 document.getElementById('435thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("436thlink")) {
 document.getElementById('436thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("437thlink")) {
 document.getElementById('437thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("438thlink")) {
 document.getElementById('438thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("439thlink")) {
 document.getElementById('439thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("440thlink")) {
 document.getElementById('440thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("441thlink")) {
 document.getElementById('441thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("442thlink")) {
 document.getElementById('442thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("443thlink")) {
 document.getElementById('443thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("444thlink")) {
 document.getElementById('444thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("445thlink")) {
 document.getElementById('445thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("446thlink")) {
 document.getElementById('446thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("447thlink")) {
 document.getElementById('447thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("448thlink")) {
 document.getElementById('448thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("449thlink")) {
 document.getElementById('449thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("450thlink")) {
 document.getElementById('450thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("451thlink")) {
 document.getElementById('451thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("452thlink")) {
 document.getElementById('452thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("453thlink")) {
 document.getElementById('453thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("454thlink")) {
 document.getElementById('454thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("455thlink")) {
 document.getElementById('455thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("456thlink")) {
 document.getElementById('456thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("457thlink")) {
 document.getElementById('457thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("458thlink")) {
 document.getElementById('458thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("459thlink")) {
 document.getElementById('459thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("460thlink")) {
 document.getElementById('460thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("461thlink")) {
 document.getElementById('461thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("462thlink")) {
 document.getElementById('462thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("463thlink")) {
 document.getElementById('463thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("464thlink")) {
 document.getElementById('464thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("465thlink")) {
 document.getElementById('465thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("466thlink")) {
 document.getElementById('466thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("467thlink")) {
 document.getElementById('467thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("468thlink")) {
 document.getElementById('468thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("469thlink")) {
 document.getElementById('469thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("470thlink")) {
 document.getElementById('470thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("471thlink")) {
 document.getElementById('471thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("472thlink")) {
 document.getElementById('472thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("473thlink")) {
 document.getElementById('473thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("474thlink")) {
 document.getElementById('474thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("475thlink")) {
 document.getElementById('475thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("476thlink")) {
 document.getElementById('476thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("477thlink")) {
 document.getElementById('477thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("478thlink")) {
 document.getElementById('478thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("479thlink")) {
 document.getElementById('479thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("480thlink")) {
 document.getElementById('480thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("481thlink")) {
 document.getElementById('481thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("482thlink")) {
 document.getElementById('482thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("483thlink")) {
 document.getElementById('483thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("484thlink")) {
 document.getElementById('484thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("485thlink")) {
 document.getElementById('485thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("486thlink")) {
 document.getElementById('486thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("487thlink")) {
 document.getElementById('487thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("488thlink")) {
 document.getElementById('488thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("489thlink")) {
 document.getElementById('489thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("490thlink")) {
 document.getElementById('490thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("491thlink")) {
 document.getElementById('491thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("492thlink")) {
 document.getElementById('492thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("493thlink")) {
 document.getElementById('493thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("494thlink")) {
 document.getElementById('494thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("495thlink")) {
 document.getElementById('495thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("496thlink")) {
 document.getElementById('496thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("497thlink")) {
 document.getElementById('497thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("498thlink")) {
 document.getElementById('498thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("499thlink")) {
 document.getElementById('499thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("500thlink")) {
 document.getElementById('500thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("501thlink")) {
 document.getElementById('501thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("502thlink")) {
 document.getElementById('502thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("503thlink")) {
 document.getElementById('503thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("504thlink")) {
 document.getElementById('504thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("505thlink")) {
 document.getElementById('505thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("506thlink")) {
 document.getElementById('506thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("507thlink")) {
 document.getElementById('507thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("508thlink")) {
 document.getElementById('508thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("509thlink")) {
 document.getElementById('509thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("510thlink")) {
 document.getElementById('510thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("511thlink")) {
 document.getElementById('511thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("512thlink")) {
 document.getElementById('512thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("513thlink")) {
 document.getElementById('513thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("514thlink")) {
 document.getElementById('514thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("515thlink")) {
 document.getElementById('515thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("516thlink")) {
 document.getElementById('516thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("517thlink")) {
 document.getElementById('517thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("518thlink")) {
 document.getElementById('518thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("519thlink")) {
 document.getElementById('519thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("520thlink")) {
 document.getElementById('520thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("521thlink")) {
 document.getElementById('521thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("522thlink")) {
 document.getElementById('522thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("523thlink")) {
 document.getElementById('523thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("524thlink")) {
 document.getElementById('524thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("525thlink")) {
 document.getElementById('525thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("526thlink")) {
 document.getElementById('526thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("527thlink")) {
 document.getElementById('527thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("528thlink")) {
 document.getElementById('528thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("529thlink")) {
 document.getElementById('529thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("530thlink")) {
 document.getElementById('530thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("531thlink")) {
 document.getElementById('531thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("532thlink")) {
 document.getElementById('532thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("533thlink")) {
 document.getElementById('533thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("534thlink")) {
 document.getElementById('534thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("535thlink")) {
 document.getElementById('535thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("536thlink")) {
 document.getElementById('536thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("537thlink")) {
 document.getElementById('537thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("538thlink")) {
 document.getElementById('538thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("539thlink")) {
 document.getElementById('539thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("540thlink")) {
 document.getElementById('540thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("541thlink")) {
 document.getElementById('541thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("542thlink")) {
 document.getElementById('542thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("543thlink")) {
 document.getElementById('543thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("544thlink")) {
 document.getElementById('544thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("545thlink")) {
 document.getElementById('545thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("546thlink")) {
 document.getElementById('546thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("547thlink")) {
 document.getElementById('547thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("548thlink")) {
 document.getElementById('548thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("549thlink")) {
 document.getElementById('549thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("550thlink")) {
 document.getElementById('550thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("551thlink")) {
 document.getElementById('551thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("552thlink")) {
 document.getElementById('552thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("553thlink")) {
 document.getElementById('553thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("554thlink")) {
 document.getElementById('554thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("555thlink")) {
 document.getElementById('555thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("556thlink")) {
 document.getElementById('556thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("557thlink")) {
 document.getElementById('557thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("558thlink")) {
 document.getElementById('558thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("559thlink")) {
 document.getElementById('559thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("560thlink")) {
 document.getElementById('560thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("561thlink")) {
 document.getElementById('561thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("562thlink")) {
 document.getElementById('562thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("563thlink")) {
 document.getElementById('563thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("564thlink")) {
 document.getElementById('564thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("565thlink")) {
 document.getElementById('565thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("566thlink")) {
 document.getElementById('566thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("567thlink")) {
 document.getElementById('567thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("568thlink")) {
 document.getElementById('568thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("569thlink")) {
 document.getElementById('569thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("570thlink")) {
 document.getElementById('570thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("571thlink")) {
 document.getElementById('571thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("572thlink")) {
 document.getElementById('572thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("573thlink")) {
 document.getElementById('573thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("574thlink")) {
 document.getElementById('574thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("575thlink")) {
 document.getElementById('575thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("576thlink")) {
 document.getElementById('576thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("577thlink")) {
 document.getElementById('577thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("578thlink")) {
 document.getElementById('578thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("579thlink")) {
 document.getElementById('579thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("580thlink")) {
 document.getElementById('580thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("581thlink")) {
 document.getElementById('581thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("582thlink")) {
 document.getElementById('582thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("583thlink")) {
 document.getElementById('583thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("584thlink")) {
 document.getElementById('584thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("585thlink")) {
 document.getElementById('585thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("586thlink")) {
 document.getElementById('586thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("587thlink")) {
 document.getElementById('587thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("588thlink")) {
 document.getElementById('588thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("589thlink")) {
 document.getElementById('589thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("590thlink")) {
 document.getElementById('590thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("591thlink")) {
 document.getElementById('591thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("592thlink")) {
 document.getElementById('592thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("593thlink")) {
 document.getElementById('593thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("594thlink")) {
 document.getElementById('594thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("595thlink")) {
 document.getElementById('595thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("596thlink")) {
 document.getElementById('596thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("597thlink")) {
 document.getElementById('597thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("598thlink")) {
 document.getElementById('598thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("599thlink")) {
 document.getElementById('599thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("600thlink")) {
 document.getElementById('600thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("601thlink")) {
 document.getElementById('601thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("602thlink")) {
 document.getElementById('602thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("603thlink")) {
 document.getElementById('603thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("604thlink")) {
 document.getElementById('604thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("605thlink")) {
 document.getElementById('605thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("606thlink")) {
 document.getElementById('606thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("607thlink")) {
 document.getElementById('607thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("608thlink")) {
 document.getElementById('608thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("609thlink")) {
 document.getElementById('609thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("610thlink")) {
 document.getElementById('610thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("611thlink")) {
 document.getElementById('611thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("612thlink")) {
 document.getElementById('612thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("613thlink")) {
 document.getElementById('613thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("614thlink")) {
 document.getElementById('614thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("615thlink")) {
 document.getElementById('615thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("616thlink")) {
 document.getElementById('616thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("617thlink")) {
 document.getElementById('617thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("618thlink")) {
 document.getElementById('618thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("619thlink")) {
 document.getElementById('619thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("620thlink")) {
 document.getElementById('620thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("621thlink")) {
 document.getElementById('621thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("622thlink")) {
 document.getElementById('622thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("623thlink")) {
 document.getElementById('623thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("624thlink")) {
 document.getElementById('624thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("625thlink")) {
 document.getElementById('625thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("626thlink")) {
 document.getElementById('626thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("627thlink")) {
 document.getElementById('627thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("628thlink")) {
 document.getElementById('628thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("629thlink")) {
 document.getElementById('629thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("630thlink")) {
 document.getElementById('630thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("631thlink")) {
 document.getElementById('631thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("632thlink")) {
 document.getElementById('632thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("633thlink")) {
 document.getElementById('633thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("634thlink")) {
 document.getElementById('634thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("635thlink")) {
 document.getElementById('635thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("636thlink")) {
 document.getElementById('636thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("637thlink")) {
 document.getElementById('637thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("638thlink")) {
 document.getElementById('638thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("639thlink")) {
 document.getElementById('639thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("640thlink")) {
 document.getElementById('640thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("641thlink")) {
 document.getElementById('641thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("642thlink")) {
 document.getElementById('642thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("643thlink")) {
 document.getElementById('643thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("644thlink")) {
 document.getElementById('644thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("645thlink")) {
 document.getElementById('645thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("646thlink")) {
 document.getElementById('646thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("647thlink")) {
 document.getElementById('647thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("648thlink")) {
 document.getElementById('648thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("649thlink")) {
 document.getElementById('649thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("650thlink")) {
 document.getElementById('650thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("651thlink")) {
 document.getElementById('651thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("652thlink")) {
 document.getElementById('652thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("653thlink")) {
 document.getElementById('653thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("654thlink")) {
 document.getElementById('654thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("655thlink")) {
 document.getElementById('655thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("656thlink")) {
 document.getElementById('656thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("657thlink")) {
 document.getElementById('657thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("658thlink")) {
 document.getElementById('658thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("659thlink")) {
 document.getElementById('659thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("660thlink")) {
 document.getElementById('660thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("661thlink")) {
 document.getElementById('661thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("662thlink")) {
 document.getElementById('662thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("663thlink")) {
 document.getElementById('663thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("664thlink")) {
 document.getElementById('664thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("665thlink")) {
 document.getElementById('665thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("666thlink")) {
 document.getElementById('666thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("667thlink")) {
 document.getElementById('667thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("668thlink")) {
 document.getElementById('668thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("669thlink")) {
 document.getElementById('669thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("670thlink")) {
 document.getElementById('670thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("671thlink")) {
 document.getElementById('671thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("672thlink")) {
 document.getElementById('672thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("673thlink")) {
 document.getElementById('673thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("674thlink")) {
 document.getElementById('674thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("675thlink")) {
 document.getElementById('675thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("676thlink")) {
 document.getElementById('676thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("677thlink")) {
 document.getElementById('677thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("678thlink")) {
 document.getElementById('678thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("679thlink")) {
 document.getElementById('679thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("680thlink")) {
 document.getElementById('680thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("681thlink")) {
 document.getElementById('681thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("682thlink")) {
 document.getElementById('682thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("683thlink")) {
 document.getElementById('683thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("684thlink")) {
 document.getElementById('684thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("685thlink")) {
 document.getElementById('685thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("686thlink")) {
 document.getElementById('686thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("687thlink")) {
 document.getElementById('687thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("688thlink")) {
 document.getElementById('688thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("689thlink")) {
 document.getElementById('689thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("690thlink")) {
 document.getElementById('690thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("691thlink")) {
 document.getElementById('691thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("692thlink")) {
 document.getElementById('692thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("693thlink")) {
 document.getElementById('693thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("694thlink")) {
 document.getElementById('694thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("695thlink")) {
 document.getElementById('695thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("696thlink")) {
 document.getElementById('696thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("697thlink")) {
 document.getElementById('697thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("698thlink")) {
 document.getElementById('698thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("699thlink")) {
 document.getElementById('699thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("700thlink")) {
 document.getElementById('700thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("701thlink")) {
 document.getElementById('701thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("702thlink")) {
 document.getElementById('702thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("703thlink")) {
 document.getElementById('703thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("704thlink")) {
 document.getElementById('704thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("705thlink")) {
 document.getElementById('705thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("706thlink")) {
 document.getElementById('706thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("707thlink")) {
 document.getElementById('707thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("708thlink")) {
 document.getElementById('708thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("709thlink")) {
 document.getElementById('709thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("710thlink")) {
 document.getElementById('710thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("711thlink")) {
 document.getElementById('711thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("712thlink")) {
 document.getElementById('712thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("713thlink")) {
 document.getElementById('713thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("714thlink")) {
 document.getElementById('714thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("715thlink")) {
 document.getElementById('715thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("716thlink")) {
 document.getElementById('716thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("717thlink")) {
 document.getElementById('717thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("718thlink")) {
 document.getElementById('718thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("719thlink")) {
 document.getElementById('719thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("720thlink")) {
 document.getElementById('720thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("721thlink")) {
 document.getElementById('721thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("722thlink")) {
 document.getElementById('722thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("723thlink")) {
 document.getElementById('723thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("724thlink")) {
 document.getElementById('724thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("725thlink")) {
 document.getElementById('725thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("726thlink")) {
 document.getElementById('726thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("727thlink")) {
 document.getElementById('727thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("728thlink")) {
 document.getElementById('728thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("729thlink")) {
 document.getElementById('729thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("730thlink")) {
 document.getElementById('730thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("731thlink")) {
 document.getElementById('731thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("732thlink")) {
 document.getElementById('732thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("733thlink")) {
 document.getElementById('733thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("734thlink")) {
 document.getElementById('734thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("735thlink")) {
 document.getElementById('735thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("736thlink")) {
 document.getElementById('736thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("737thlink")) {
 document.getElementById('737thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("738thlink")) {
 document.getElementById('738thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("739thlink")) {
 document.getElementById('739thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("740thlink")) {
 document.getElementById('740thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("741thlink")) {
 document.getElementById('741thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("742thlink")) {
 document.getElementById('742thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("743thlink")) {
 document.getElementById('743thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("744thlink")) {
 document.getElementById('744thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("745thlink")) {
 document.getElementById('745thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("746thlink")) {
 document.getElementById('746thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("747thlink")) {
 document.getElementById('747thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("748thlink")) {
 document.getElementById('748thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("749thlink")) {
 document.getElementById('749thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("750thlink")) {
 document.getElementById('750thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("751thlink")) {
 document.getElementById('751thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("752thlink")) {
 document.getElementById('752thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("753thlink")) {
 document.getElementById('753thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("754thlink")) {
 document.getElementById('754thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("755thlink")) {
 document.getElementById('755thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("756thlink")) {
 document.getElementById('756thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("757thlink")) {
 document.getElementById('757thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("758thlink")) {
 document.getElementById('758thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("759thlink")) {
 document.getElementById('759thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("760thlink")) {
 document.getElementById('760thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("761thlink")) {
 document.getElementById('761thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("762thlink")) {
 document.getElementById('762thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("763thlink")) {
 document.getElementById('763thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("764thlink")) {
 document.getElementById('764thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("765thlink")) {
 document.getElementById('765thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("766thlink")) {
 document.getElementById('766thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("767thlink")) {
 document.getElementById('767thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("768thlink")) {
 document.getElementById('768thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("769thlink")) {
 document.getElementById('769thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("770thlink")) {
 document.getElementById('770thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("771thlink")) {
 document.getElementById('771thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("772thlink")) {
 document.getElementById('772thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("773thlink")) {
 document.getElementById('773thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("774thlink")) {
 document.getElementById('774thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("775thlink")) {
 document.getElementById('775thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("776thlink")) {
 document.getElementById('776thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("777thlink")) {
 document.getElementById('777thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("778thlink")) {
 document.getElementById('778thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("779thlink")) {
 document.getElementById('779thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("780thlink")) {
 document.getElementById('780thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("781thlink")) {
 document.getElementById('781thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("782thlink")) {
 document.getElementById('782thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("783thlink")) {
 document.getElementById('783thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("784thlink")) {
 document.getElementById('784thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("785thlink")) {
 document.getElementById('785thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("786thlink")) {
 document.getElementById('786thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("787thlink")) {
 document.getElementById('787thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("788thlink")) {
 document.getElementById('788thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("789thlink")) {
 document.getElementById('789thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("790thlink")) {
 document.getElementById('790thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("791thlink")) {
 document.getElementById('791thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("792thlink")) {
 document.getElementById('792thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("793thlink")) {
 document.getElementById('793thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("794thlink")) {
 document.getElementById('794thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("795thlink")) {
 document.getElementById('795thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("796thlink")) {
 document.getElementById('796thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("797thlink")) {
 document.getElementById('797thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("798thlink")) {
 document.getElementById('798thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("799thlink")) {
 document.getElementById('799thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("800thlink")) {
 document.getElementById('800thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("801thlink")) {
 document.getElementById('801thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("802thlink")) {
 document.getElementById('802thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("803thlink")) {
 document.getElementById('803thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("804thlink")) {
 document.getElementById('804thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("805thlink")) {
 document.getElementById('805thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("806thlink")) {
 document.getElementById('806thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("807thlink")) {
 document.getElementById('807thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("808thlink")) {
 document.getElementById('808thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("809thlink")) {
 document.getElementById('809thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("810thlink")) {
 document.getElementById('810thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("811thlink")) {
 document.getElementById('811thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("812thlink")) {
 document.getElementById('812thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("813thlink")) {
 document.getElementById('813thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("814thlink")) {
 document.getElementById('814thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("815thlink")) {
 document.getElementById('815thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("816thlink")) {
 document.getElementById('816thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("817thlink")) {
 document.getElementById('817thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("818thlink")) {
 document.getElementById('818thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("819thlink")) {
 document.getElementById('819thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("820thlink")) {
 document.getElementById('820thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("821thlink")) {
 document.getElementById('821thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("822thlink")) {
 document.getElementById('822thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("823thlink")) {
 document.getElementById('823thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("824thlink")) {
 document.getElementById('824thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("825thlink")) {
 document.getElementById('825thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("826thlink")) {
 document.getElementById('826thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("827thlink")) {
 document.getElementById('827thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("828thlink")) {
 document.getElementById('828thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("829thlink")) {
 document.getElementById('829thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("830thlink")) {
 document.getElementById('830thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("831thlink")) {
 document.getElementById('831thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("832thlink")) {
 document.getElementById('832thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("833thlink")) {
 document.getElementById('833thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("834thlink")) {
 document.getElementById('834thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("835thlink")) {
 document.getElementById('835thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("836thlink")) {
 document.getElementById('836thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("837thlink")) {
 document.getElementById('837thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("838thlink")) {
 document.getElementById('838thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("839thlink")) {
 document.getElementById('839thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("840thlink")) {
 document.getElementById('840thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("841thlink")) {
 document.getElementById('841thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("842thlink")) {
 document.getElementById('842thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("843thlink")) {
 document.getElementById('843thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("844thlink")) {
 document.getElementById('844thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("845thlink")) {
 document.getElementById('845thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("846thlink")) {
 document.getElementById('846thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("847thlink")) {
 document.getElementById('847thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("848thlink")) {
 document.getElementById('848thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("849thlink")) {
 document.getElementById('849thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("850thlink")) {
 document.getElementById('850thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("851thlink")) {
 document.getElementById('851thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("852thlink")) {
 document.getElementById('852thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("853thlink")) {
 document.getElementById('853thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("854thlink")) {
 document.getElementById('854thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("855thlink")) {
 document.getElementById('855thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("856thlink")) {
 document.getElementById('856thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("857thlink")) {
 document.getElementById('857thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("858thlink")) {
 document.getElementById('858thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("859thlink")) {
 document.getElementById('859thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("860thlink")) {
 document.getElementById('860thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("861thlink")) {
 document.getElementById('861thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("862thlink")) {
 document.getElementById('862thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("863thlink")) {
 document.getElementById('863thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("864thlink")) {
 document.getElementById('864thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("865thlink")) {
 document.getElementById('865thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("866thlink")) {
 document.getElementById('866thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("867thlink")) {
 document.getElementById('867thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("868thlink")) {
 document.getElementById('868thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("869thlink")) {
 document.getElementById('869thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("870thlink")) {
 document.getElementById('870thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("871thlink")) {
 document.getElementById('871thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("872thlink")) {
 document.getElementById('872thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("873thlink")) {
 document.getElementById('873thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("874thlink")) {
 document.getElementById('874thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("875thlink")) {
 document.getElementById('875thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("876thlink")) {
 document.getElementById('876thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("877thlink")) {
 document.getElementById('877thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("878thlink")) {
 document.getElementById('878thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("879thlink")) {
 document.getElementById('879thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("880thlink")) {
 document.getElementById('880thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("881thlink")) {
 document.getElementById('881thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("882thlink")) {
 document.getElementById('882thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("883thlink")) {
 document.getElementById('883thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("884thlink")) {
 document.getElementById('884thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("885thlink")) {
 document.getElementById('885thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("886thlink")) {
 document.getElementById('886thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("887thlink")) {
 document.getElementById('887thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("888thlink")) {
 document.getElementById('888thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("889thlink")) {
 document.getElementById('889thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("890thlink")) {
 document.getElementById('890thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("891thlink")) {
 document.getElementById('891thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("892thlink")) {
 document.getElementById('892thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("893thlink")) {
 document.getElementById('893thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("894thlink")) {
 document.getElementById('894thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("895thlink")) {
 document.getElementById('895thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("896thlink")) {
 document.getElementById('896thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("897thlink")) {
 document.getElementById('897thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("898thlink")) {
 document.getElementById('898thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("899thlink")) {
 document.getElementById('899thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("900thlink")) {
 document.getElementById('900thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("901thlink")) {
 document.getElementById('901thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("902thlink")) {
 document.getElementById('902thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("903thlink")) {
 document.getElementById('903thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("904thlink")) {
 document.getElementById('904thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("905thlink")) {
 document.getElementById('905thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("906thlink")) {
 document.getElementById('906thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("907thlink")) {
 document.getElementById('907thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("908thlink")) {
 document.getElementById('908thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("909thlink")) {
 document.getElementById('909thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("910thlink")) {
 document.getElementById('910thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("911thlink")) {
 document.getElementById('911thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("912thlink")) {
 document.getElementById('912thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("913thlink")) {
 document.getElementById('913thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("914thlink")) {
 document.getElementById('914thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("915thlink")) {
 document.getElementById('915thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("916thlink")) {
 document.getElementById('916thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("917thlink")) {
 document.getElementById('917thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("918thlink")) {
 document.getElementById('918thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("919thlink")) {
 document.getElementById('919thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("920thlink")) {
 document.getElementById('920thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("921thlink")) {
 document.getElementById('921thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("922thlink")) {
 document.getElementById('922thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("923thlink")) {
 document.getElementById('923thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("924thlink")) {
 document.getElementById('924thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("925thlink")) {
 document.getElementById('925thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("926thlink")) {
 document.getElementById('926thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("927thlink")) {
 document.getElementById('927thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("928thlink")) {
 document.getElementById('928thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("929thlink")) {
 document.getElementById('929thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("930thlink")) {
 document.getElementById('930thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("931thlink")) {
 document.getElementById('931thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("932thlink")) {
 document.getElementById('932thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("933thlink")) {
 document.getElementById('933thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("934thlink")) {
 document.getElementById('934thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("935thlink")) {
 document.getElementById('935thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("936thlink")) {
 document.getElementById('936thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("937thlink")) {
 document.getElementById('937thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("938thlink")) {
 document.getElementById('938thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("939thlink")) {
 document.getElementById('939thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("940thlink")) {
 document.getElementById('940thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("941thlink")) {
 document.getElementById('941thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("942thlink")) {
 document.getElementById('942thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("943thlink")) {
 document.getElementById('943thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("944thlink")) {
 document.getElementById('944thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("945thlink")) {
 document.getElementById('945thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("946thlink")) {
 document.getElementById('946thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("947thlink")) {
 document.getElementById('947thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("948thlink")) {
 document.getElementById('948thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("949thlink")) {
 document.getElementById('949thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("950thlink")) {
 document.getElementById('950thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("951thlink")) {
 document.getElementById('951thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("952thlink")) {
 document.getElementById('952thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("953thlink")) {
 document.getElementById('953thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("954thlink")) {
 document.getElementById('954thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("955thlink")) {
 document.getElementById('955thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("956thlink")) {
 document.getElementById('956thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("957thlink")) {
 document.getElementById('957thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("958thlink")) {
 document.getElementById('958thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("959thlink")) {
 document.getElementById('959thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("960thlink")) {
 document.getElementById('960thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("961thlink")) {
 document.getElementById('961thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("962thlink")) {
 document.getElementById('962thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("963thlink")) {
 document.getElementById('963thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("964thlink")) {
 document.getElementById('964thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("965thlink")) {
 document.getElementById('965thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("966thlink")) {
 document.getElementById('966thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("967thlink")) {
 document.getElementById('967thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("968thlink")) {
 document.getElementById('968thlink').style.backgroundColor = "blue";
}
 if (localStorage.getItem("969thlink")) {
  document.getElementById('969thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("970thlink")) {
  document.getElementById('970thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("971thlink")) {
  document.getElementById('971thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("972thlink")) {
  document.getElementById('972thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("973thlink")) {
  document.getElementById('973thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("974thlink")) {
  document.getElementById('974thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("975thlink")) {
  document.getElementById('975thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("976thlink")) {
  document.getElementById('976thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("977thlink")) {
  document.getElementById('977thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("978thlink")) {
  document.getElementById('978thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("979thlink")) {
  document.getElementById('979thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("980thlink")) {
  document.getElementById('980thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("981thlink")) {
  document.getElementById('981thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("982thlink")) {
  document.getElementById('982thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("983thlink")) {
  document.getElementById('983thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("984thlink")) {
  document.getElementById('984thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("985thlink")) {
  document.getElementById('985thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("986thlink")) {
  document.getElementById('986thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("987thlink")) {
  document.getElementById('987thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("988thlink")) {
  document.getElementById('988thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("989thlink")) {
  document.getElementById('989thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("990thlink")) {
  document.getElementById('990thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("991thlink")) {
  document.getElementById('991thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("992thlink")) {
  document.getElementById('992thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("993thlink")) {
  document.getElementById('993thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("994thlink")) {
  document.getElementById('994thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("995thlink")) {
  document.getElementById('995thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("996thlink")) {
  document.getElementById('996thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("997thlink")) {
  document.getElementById('997thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("998thlink")) {
  document.getElementById('998thlink').style.backgroundColor = "blue";
 }
 if (localStorage.getItem("999thlink")) {
  document.getElementById('999thlink').style.backgroundColor = "blue";
 }
if (localStorage.getItem("1000thlink")) {
 document.getElementById('1000thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1001thlink")) {
 document.getElementById('1001thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1002thlink")) {
 document.getElementById('1002thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1003thlink")) {
 document.getElementById('1003thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1004thlink")) {
 document.getElementById('1004thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1005thlink")) {
 document.getElementById('1005thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1006thlink")) {
 document.getElementById('1006thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1007thlink")) {
 document.getElementById('1007thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1008thlink")) {
 document.getElementById('1008thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1009thlink")) {
 document.getElementById('1009thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1010thlink")) {
 document.getElementById('1010thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1011thlink")) {
 document.getElementById('1011thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1012thlink")) {
 document.getElementById('1012thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1013thlink")) {
 document.getElementById('1013thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1014thlink")) {
 document.getElementById('1014thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1015thlink")) {
 document.getElementById('1015thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1016thlink")) {
 document.getElementById('1016thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1017thlink")) {
 document.getElementById('1017thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1018thlink")) {
 document.getElementById('1018thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1019thlink")) {
 document.getElementById('1019thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1020thlink")) {
 document.getElementById('1020thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1021thlink")) {
 document.getElementById('1021thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1022thlink")) {
 document.getElementById('1022thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1023thlink")) {
 document.getElementById('1023thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1024thlink")) {
 document.getElementById('1024thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1025thlink")) {
 document.getElementById('1025thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1026thlink")) {
 document.getElementById('1026thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1027thlink")) {
 document.getElementById('1027thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1028thlink")) {
 document.getElementById('1028thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1029thlink")) {
 document.getElementById('1029thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1030thlink")) {
 document.getElementById('1030thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1031thlink")) {
 document.getElementById('1031thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1032thlink")) {
 document.getElementById('1032thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1033thlink")) {
 document.getElementById('1033thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1034thlink")) {
 document.getElementById('1034thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1035thlink")) {
 document.getElementById('1035thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1036thlink")) {
 document.getElementById('1036thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1037thlink")) {
 document.getElementById('1037thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1038thlink")) {
 document.getElementById('1038thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1039thlink")) {
 document.getElementById('1039thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1040thlink")) {
 document.getElementById('1040thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1041thlink")) {
 document.getElementById('1041thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1042thlink")) {
 document.getElementById('1042thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1043thlink")) {
 document.getElementById('1043thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1044thlink")) {
 document.getElementById('1044thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1045thlink")) {
 document.getElementById('1045thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1046thlink")) {
 document.getElementById('1046thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1047thlink")) {
 document.getElementById('1047thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1048thlink")) {
 document.getElementById('1048thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1049thlink")) {
 document.getElementById('1049thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1050thlink")) {
 document.getElementById('1050thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1051thlink")) {
 document.getElementById('1051thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1052thlink")) {
 document.getElementById('1052thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1053thlink")) {
 document.getElementById('1053thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1054thlink")) {
 document.getElementById('1054thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1055thlink")) {
 document.getElementById('1055thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1056thlink")) {
 document.getElementById('1056thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1057thlink")) {
 document.getElementById('1057thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1058thlink")) {
 document.getElementById('1058thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1059thlink")) {
 document.getElementById('1059thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1060thlink")) {
 document.getElementById('1060thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1061thlink")) {
 document.getElementById('1061thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1062thlink")) {
 document.getElementById('1062thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1063thlink")) {
 document.getElementById('1063thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1064thlink")) {
 document.getElementById('1064thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1065thlink")) {
 document.getElementById('1065thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1066thlink")) {
 document.getElementById('1066thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1067thlink")) {
 document.getElementById('1067thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1068thlink")) {
 document.getElementById('1068thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1069thlink")) {
 document.getElementById('1069thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1070thlink")) {
 document.getElementById('1070thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1071thlink")) {
 document.getElementById('1071thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1072thlink")) {
 document.getElementById('1072thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1073thlink")) {
 document.getElementById('1073thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1074thlink")) {
 document.getElementById('1074thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1075thlink")) {
 document.getElementById('1075thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1076thlink")) {
 document.getElementById('1076thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1077thlink")) {
 document.getElementById('1077thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1078thlink")) {
 document.getElementById('1078thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1079thlink")) {
 document.getElementById('1079thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1080thlink")) {
 document.getElementById('1080thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1081thlink")) {
 document.getElementById('1081thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1082thlink")) {
 document.getElementById('1082thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1083thlink")) {
 document.getElementById('1083thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1084thlink")) {
 document.getElementById('1084thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1085thlink")) {
 document.getElementById('1085thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1086thlink")) {
 document.getElementById('1086thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1087thlink")) {
 document.getElementById('1087thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1088thlink")) {
 document.getElementById('1088thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1089thlink")) {
 document.getElementById('1089thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1090thlink")) {
 document.getElementById('1090thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1091thlink")) {
 document.getElementById('1091thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1092thlink")) {
 document.getElementById('1092thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1093thlink")) {
 document.getElementById('1093thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1094thlink")) {
 document.getElementById('1094thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1095thlink")) {
 document.getElementById('1095thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1096thlink")) {
 document.getElementById('1096thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1097thlink")) {
 document.getElementById('1097thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1098thlink")) {
 document.getElementById('1098thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1099thlink")) {
 document.getElementById('1099thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1100thlink")) {
 document.getElementById('1100thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1101thlink")) {
 document.getElementById('1101thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1102thlink")) {
 document.getElementById('1102thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1103thlink")) {
 document.getElementById('1103thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1104thlink")) {
 document.getElementById('1104thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1105thlink")) {
 document.getElementById('1105thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1106thlink")) {
 document.getElementById('1106thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1107thlink")) {
 document.getElementById('1107thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1108thlink")) {
 document.getElementById('1108thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1109thlink")) {
 document.getElementById('1109thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1110thlink")) {
 document.getElementById('1110thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1111thlink")) {
 document.getElementById('1111thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1112thlink")) {
 document.getElementById('1112thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1113thlink")) {
 document.getElementById('1113thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1114thlink")) {
 document.getElementById('1114thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1115thlink")) {
 document.getElementById('1115thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1116thlink")) {
 document.getElementById('1116thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1117thlink")) {
 document.getElementById('1117thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1118thlink")) {
 document.getElementById('1118thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1119thlink")) {
 document.getElementById('1119thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1120thlink")) {
 document.getElementById('1120thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1121thlink")) {
 document.getElementById('1121thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1122thlink")) {
 document.getElementById('1122thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1123thlink")) {
 document.getElementById('1123thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1124thlink")) {
 document.getElementById('1124thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1125thlink")) {
 document.getElementById('1125thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1126thlink")) {
 document.getElementById('1126thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1127thlink")) {
 document.getElementById('1127thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1128thlink")) {
 document.getElementById('1128thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1129thlink")) {
 document.getElementById('1129thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1130thlink")) {
 document.getElementById('1130thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1131thlink")) {
 document.getElementById('1131thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1132thlink")) {
 document.getElementById('1132thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1133thlink")) {
 document.getElementById('1133thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1134thlink")) {
 document.getElementById('1134thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1135thlink")) {
 document.getElementById('1135thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1136thlink")) {
 document.getElementById('1136thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1137thlink")) {
 document.getElementById('1137thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1138thlink")) {
 document.getElementById('1138thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1139thlink")) {
 document.getElementById('1139thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1140thlink")) {
 document.getElementById('1140thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1141thlink")) {
 document.getElementById('1141thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1142thlink")) {
 document.getElementById('1142thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1143thlink")) {
 document.getElementById('1143thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1144thlink")) {
 document.getElementById('1144thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1145thlink")) {
 document.getElementById('1145thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1146thlink")) {
 document.getElementById('1146thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1147thlink")) {
 document.getElementById('1147thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1148thlink")) {
 document.getElementById('1148thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1149thlink")) {
 document.getElementById('1149thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1150thlink")) {
 document.getElementById('1150thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1151thlink")) {
 document.getElementById('1151thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1152thlink")) {
 document.getElementById('1152thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1153thlink")) {
 document.getElementById('1153thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1154thlink")) {
 document.getElementById('1154thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1155thlink")) {
 document.getElementById('1155thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1156thlink")) {
 document.getElementById('1156thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1157thlink")) {
 document.getElementById('1157thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1158thlink")) {
 document.getElementById('1158thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1159thlink")) {
 document.getElementById('1159thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1160thlink")) {
 document.getElementById('1160thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1161thlink")) {
 document.getElementById('1161thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1162thlink")) {
 document.getElementById('1162thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1163thlink")) {
 document.getElementById('1163thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1164thlink")) {
 document.getElementById('1164thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1165thlink")) {
 document.getElementById('1165thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1166thlink")) {
 document.getElementById('1166thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1167thlink")) {
 document.getElementById('1167thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1168thlink")) {
 document.getElementById('1168thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1169thlink")) {
 document.getElementById('1169thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1170thlink")) {
 document.getElementById('1170thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1171thlink")) {
 document.getElementById('1171thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1172thlink")) {
 document.getElementById('1172thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1173thlink")) {
 document.getElementById('1173thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1174thlink")) {
 document.getElementById('1174thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1175thlink")) {
 document.getElementById('1175thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1176thlink")) {
 document.getElementById('1176thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1177thlink")) {
 document.getElementById('1177thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1178thlink")) {
 document.getElementById('1178thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1179thlink")) {
 document.getElementById('1179thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1180thlink")) {
 document.getElementById('1180thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1181thlink")) {
 document.getElementById('1181thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1182thlink")) {
 document.getElementById('1182thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1183thlink")) {
 document.getElementById('1183thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1184thlink")) {
 document.getElementById('1184thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1185thlink")) {
 document.getElementById('1185thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1186thlink")) {
 document.getElementById('1186thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1187thlink")) {
 document.getElementById('1187thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1188thlink")) {
 document.getElementById('1188thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1189thlink")) {
 document.getElementById('1189thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1190thlink")) {
 document.getElementById('1190thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1191thlink")) {
 document.getElementById('1191thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1192thlink")) {
 document.getElementById('1192thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1193thlink")) {
 document.getElementById('1193thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1194thlink")) {
 document.getElementById('1194thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1195thlink")) {
 document.getElementById('1195thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1196thlink")) {
 document.getElementById('1196thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1197thlink")) {
 document.getElementById('1197thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1198thlink")) {
 document.getElementById('1198thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1199thlink")) {
 document.getElementById('1199thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1200thlink")) {
 document.getElementById('1200thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1201thlink")) {
 document.getElementById('1201thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1202thlink")) {
 document.getElementById('1202thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1203thlink")) {
 document.getElementById('1203thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1204thlink")) {
 document.getElementById('1204thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1205thlink")) {
 document.getElementById('1205thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1206thlink")) {
 document.getElementById('1206thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1207thlink")) {
 document.getElementById('1207thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1208thlink")) {
 document.getElementById('1208thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1209thlink")) {
 document.getElementById('1209thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1210thlink")) {
 document.getElementById('1210thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1211thlink")) {
 document.getElementById('1211thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1212thlink")) {
 document.getElementById('1212thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1213thlink")) {
 document.getElementById('1213thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1214thlink")) {
 document.getElementById('1214thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1215thlink")) {
 document.getElementById('1215thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1216thlink")) {
 document.getElementById('1216thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1217thlink")) {
 document.getElementById('1217thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1218thlink")) {
 document.getElementById('1218thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1219thlink")) {
 document.getElementById('1219thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1220thlink")) {
 document.getElementById('1220thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1221thlink")) {
 document.getElementById('1221thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1222thlink")) {
 document.getElementById('1222thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1223thlink")) {
 document.getElementById('1223thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1224thlink")) {
 document.getElementById('1224thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1225thlink")) {
 document.getElementById('1225thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1226thlink")) {
 document.getElementById('1226thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1227thlink")) {
 document.getElementById('1227thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1228thlink")) {
 document.getElementById('1228thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1229thlink")) {
 document.getElementById('1229thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1230thlink")) {
 document.getElementById('1230thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1231thlink")) {
 document.getElementById('1231thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1232thlink")) {
 document.getElementById('1232thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1233thlink")) {
 document.getElementById('1233thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1234thlink")) {
 document.getElementById('1234thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1235thlink")) {
 document.getElementById('1235thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1236thlink")) {
 document.getElementById('1236thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1237thlink")) {
 document.getElementById('1237thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1238thlink")) {
 document.getElementById('1238thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1239thlink")) {
 document.getElementById('1239thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1240thlink")) {
 document.getElementById('1240thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1241thlink")) {
 document.getElementById('1241thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1242thlink")) {
 document.getElementById('1242thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1243thlink")) {
 document.getElementById('1243thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1244thlink")) {
 document.getElementById('1244thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1245thlink")) {
 document.getElementById('1245thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1246thlink")) {
 document.getElementById('1246thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1247thlink")) {
 document.getElementById('1247thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1248thlink")) {
 document.getElementById('1248thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1249thlink")) {
 document.getElementById('1249thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1250thlink")) {
 document.getElementById('1250thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1251thlink")) {
 document.getElementById('1251thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1252thlink")) {
 document.getElementById('1252thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1253thlink")) {
 document.getElementById('1253thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1254thlink")) {
 document.getElementById('1254thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1255thlink")) {
 document.getElementById('1255thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1256thlink")) {
 document.getElementById('1256thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1257thlink")) {
 document.getElementById('1257thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1258thlink")) {
 document.getElementById('1258thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1259thlink")) {
 document.getElementById('1259thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1260thlink")) {
 document.getElementById('1260thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1261thlink")) {
 document.getElementById('1261thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1262thlink")) {
 document.getElementById('1262thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1263thlink")) {
 document.getElementById('1263thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1264thlink")) {
 document.getElementById('1264thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1265thlink")) {
 document.getElementById('1265thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1266thlink")) {
 document.getElementById('1266thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1267thlink")) {
 document.getElementById('1267thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1268thlink")) {
 document.getElementById('1268thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1269thlink")) {
 document.getElementById('1269thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1270thlink")) {
 document.getElementById('1270thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1271thlink")) {
 document.getElementById('1271thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1272thlink")) {
 document.getElementById('1272thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1273thlink")) {
 document.getElementById('1273thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1274thlink")) {
 document.getElementById('1274thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1275thlink")) {
 document.getElementById('1275thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1276thlink")) {
 document.getElementById('1276thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1277thlink")) {
 document.getElementById('1277thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1278thlink")) {
 document.getElementById('1278thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1279thlink")) {
 document.getElementById('1279thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1280thlink")) {
 document.getElementById('1280thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1281thlink")) {
 document.getElementById('1281thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1282thlink")) {
 document.getElementById('1282thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1283thlink")) {
 document.getElementById('1283thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1284thlink")) {
 document.getElementById('1284thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1285thlink")) {
 document.getElementById('1285thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1286thlink")) {
 document.getElementById('1286thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1287thlink")) {
 document.getElementById('1287thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1288thlink")) {
 document.getElementById('1288thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1289thlink")) {
 document.getElementById('1289thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1290thlink")) {
 document.getElementById('1290thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1291thlink")) {
 document.getElementById('1291thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1292thlink")) {
 document.getElementById('1292thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1293thlink")) {
 document.getElementById('1293thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1294thlink")) {
 document.getElementById('1294thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1295thlink")) {
 document.getElementById('1295thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1296thlink")) {
 document.getElementById('1296thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1297thlink")) {
 document.getElementById('1297thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1298thlink")) {
 document.getElementById('1298thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1299thlink")) {
 document.getElementById('1299thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1300thlink")) {
 document.getElementById('1300thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1301thlink")) {
 document.getElementById('1301thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1302thlink")) {
 document.getElementById('1302thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1303thlink")) {
 document.getElementById('1303thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1304thlink")) {
 document.getElementById('1304thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1305thlink")) {
 document.getElementById('1305thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1306thlink")) {
 document.getElementById('1306thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1307thlink")) {
 document.getElementById('1307thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1308thlink")) {
 document.getElementById('1308thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1309thlink")) {
 document.getElementById('1309thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1310thlink")) {
 document.getElementById('1310thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1311thlink")) {
 document.getElementById('1311thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1312thlink")) {
 document.getElementById('1312thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1313thlink")) {
 document.getElementById('1313thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1314thlink")) {
 document.getElementById('1314thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1315thlink")) {
 document.getElementById('1315thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1316thlink")) {
 document.getElementById('1316thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1317thlink")) {
 document.getElementById('1317thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1318thlink")) {
 document.getElementById('1318thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1319thlink")) {
 document.getElementById('1319thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1320thlink")) {
 document.getElementById('1320thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1321thlink")) {
 document.getElementById('1321thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1322thlink")) {
 document.getElementById('1322thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1323thlink")) {
 document.getElementById('1323thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1324thlink")) {
 document.getElementById('1324thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1325thlink")) {
 document.getElementById('1325thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1326thlink")) {
 document.getElementById('1326thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1327thlink")) {
 document.getElementById('1327thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1328thlink")) {
 document.getElementById('1328thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1329thlink")) {
 document.getElementById('1329thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1330thlink")) {
 document.getElementById('1330thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1331thlink")) {
 document.getElementById('1331thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1332thlink")) {
 document.getElementById('1332thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1333thlink")) {
 document.getElementById('1333thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1334thlink")) {
 document.getElementById('1334thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1335thlink")) {
 document.getElementById('1335thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1336thlink")) {
 document.getElementById('1336thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1337thlink")) {
 document.getElementById('1337thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1338thlink")) {
 document.getElementById('1338thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1339thlink")) {
 document.getElementById('1339thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1340thlink")) {
 document.getElementById('1340thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1341thlink")) {
 document.getElementById('1341thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1342thlink")) {
 document.getElementById('1342thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1343thlink")) {
 document.getElementById('1343thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1344thlink")) {
 document.getElementById('1344thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1345thlink")) {
 document.getElementById('1345thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1346thlink")) {
 document.getElementById('1346thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1347thlink")) {
 document.getElementById('1347thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1348thlink")) {
 document.getElementById('1348thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1349thlink")) {
 document.getElementById('1349thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1350thlink")) {
 document.getElementById('1350thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1351thlink")) {
 document.getElementById('1351thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1352thlink")) {
 document.getElementById('1352thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1353thlink")) {
 document.getElementById('1353thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1354thlink")) {
 document.getElementById('1354thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1355thlink")) {
 document.getElementById('1355thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1356thlink")) {
 document.getElementById('1356thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1357thlink")) {
 document.getElementById('1357thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1358thlink")) {
 document.getElementById('1358thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1359thlink")) {
 document.getElementById('1359thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1360thlink")) {
 document.getElementById('1360thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1361thlink")) {
 document.getElementById('1361thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1362thlink")) {
 document.getElementById('1362thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1363thlink")) {
 document.getElementById('1363thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1364thlink")) {
 document.getElementById('1364thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1365thlink")) {
 document.getElementById('1365thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1366thlink")) {
 document.getElementById('1366thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1367thlink")) {
 document.getElementById('1367thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1368thlink")) {
 document.getElementById('1368thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1369thlink")) {
 document.getElementById('1369thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1370thlink")) {
 document.getElementById('1370thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1371thlink")) {
 document.getElementById('1371thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1372thlink")) {
 document.getElementById('1372thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1373thlink")) {
 document.getElementById('1373thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1374thlink")) {
 document.getElementById('1374thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1375thlink")) {
 document.getElementById('1375thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1376thlink")) {
 document.getElementById('1376thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1377thlink")) {
 document.getElementById('1377thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1378thlink")) {
 document.getElementById('1378thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1379thlink")) {
 document.getElementById('1379thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1380thlink")) {
 document.getElementById('1380thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1381thlink")) {
 document.getElementById('1381thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1382thlink")) {
 document.getElementById('1382thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1383thlink")) {
 document.getElementById('1383thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1384thlink")) {
 document.getElementById('1384thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1385thlink")) {
 document.getElementById('1385thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1386thlink")) {
 document.getElementById('1386thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1387thlink")) {
 document.getElementById('1387thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1388thlink")) {
 document.getElementById('1388thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1389thlink")) {
 document.getElementById('1389thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1390thlink")) {
 document.getElementById('1390thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1391thlink")) {
 document.getElementById('1391thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1392thlink")) {
 document.getElementById('1392thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1393thlink")) {
 document.getElementById('1393thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1394thlink")) {
 document.getElementById('1394thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1395thlink")) {
 document.getElementById('1395thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1396thlink")) {
 document.getElementById('1396thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1397thlink")) {
 document.getElementById('1397thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1398thlink")) {
 document.getElementById('1398thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1399thlink")) {
 document.getElementById('1399thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1400thlink")) {
 document.getElementById('1400thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1401thlink")) {
 document.getElementById('1401thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1402thlink")) {
 document.getElementById('1402thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1403thlink")) {
 document.getElementById('1403thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1404thlink")) {
 document.getElementById('1404thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1405thlink")) {
 document.getElementById('1405thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1406thlink")) {
 document.getElementById('1406thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1407thlink")) {
 document.getElementById('1407thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1408thlink")) {
 document.getElementById('1408thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1409thlink")) {
 document.getElementById('1409thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1410thlink")) {
 document.getElementById('1410thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1411thlink")) {
 document.getElementById('1411thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1412thlink")) {
 document.getElementById('1412thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1413thlink")) {
 document.getElementById('1413thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1414thlink")) {
 document.getElementById('1414thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1415thlink")) {
 document.getElementById('1415thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1416thlink")) {
 document.getElementById('1416thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1417thlink")) {
 document.getElementById('1417thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1418thlink")) {
 document.getElementById('1418thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1419thlink")) {
 document.getElementById('1419thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1420thlink")) {
 document.getElementById('1420thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1421thlink")) {
 document.getElementById('1421thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1422thlink")) {
 document.getElementById('1422thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1423thlink")) {
 document.getElementById('1423thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1424thlink")) {
 document.getElementById('1424thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1425thlink")) {
 document.getElementById('1425thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1426thlink")) {
 document.getElementById('1426thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1427thlink")) {
 document.getElementById('1427thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1428thlink")) {
 document.getElementById('1428thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1429thlink")) {
 document.getElementById('1429thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1430thlink")) {
 document.getElementById('1430thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1431thlink")) {
 document.getElementById('1431thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1432thlink")) {
 document.getElementById('1432thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1433thlink")) {
 document.getElementById('1433thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1434thlink")) {
 document.getElementById('1434thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1435thlink")) {
 document.getElementById('1435thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1436thlink")) {
 document.getElementById('1436thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1437thlink")) {
 document.getElementById('1437thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1438thlink")) {
 document.getElementById('1438thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1439thlink")) {
 document.getElementById('1439thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1440thlink")) {
 document.getElementById('1440thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1441thlink")) {
 document.getElementById('1441thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1442thlink")) {
 document.getElementById('1442thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1443thlink")) {
 document.getElementById('1443thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1444thlink")) {
 document.getElementById('1444thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1445thlink")) {
 document.getElementById('1445thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1446thlink")) {
 document.getElementById('1446thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1447thlink")) {
 document.getElementById('1447thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1448thlink")) {
 document.getElementById('1448thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1449thlink")) {
 document.getElementById('1449thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1450thlink")) {
 document.getElementById('1450thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1451thlink")) {
 document.getElementById('1451thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1452thlink")) {
 document.getElementById('1452thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1453thlink")) {
 document.getElementById('1453thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1454thlink")) {
 document.getElementById('1454thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1455thlink")) {
 document.getElementById('1455thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1456thlink")) {
 document.getElementById('1456thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1457thlink")) {
 document.getElementById('1457thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1458thlink")) {
 document.getElementById('1458thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1459thlink")) {
 document.getElementById('1459thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1460thlink")) {
 document.getElementById('1460thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1461thlink")) {
 document.getElementById('1461thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1462thlink")) {
 document.getElementById('1462thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1463thlink")) {
 document.getElementById('1463thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1464thlink")) {
 document.getElementById('1464thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1465thlink")) {
 document.getElementById('1465thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1466thlink")) {
 document.getElementById('1466thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1467thlink")) {
 document.getElementById('1467thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1468thlink")) {
 document.getElementById('1468thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1469thlink")) {
 document.getElementById('1469thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1470thlink")) {
 document.getElementById('1470thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1471thlink")) {
 document.getElementById('1471thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1472thlink")) {
 document.getElementById('1472thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1473thlink")) {
 document.getElementById('1473thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1474thlink")) {
 document.getElementById('1474thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1475thlink")) {
 document.getElementById('1475thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1476thlink")) {
 document.getElementById('1476thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1477thlink")) {
 document.getElementById('1477thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1478thlink")) {
 document.getElementById('1478thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1479thlink")) {
 document.getElementById('1479thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1480thlink")) {
 document.getElementById('1480thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1481thlink")) {
 document.getElementById('1481thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1482thlink")) {
 document.getElementById('1482thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1483thlink")) {
 document.getElementById('1483thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1484thlink")) {
 document.getElementById('1484thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1485thlink")) {
 document.getElementById('1485thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1486thlink")) {
 document.getElementById('1486thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1487thlink")) {
 document.getElementById('1487thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1488thlink")) {
 document.getElementById('1488thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1489thlink")) {
 document.getElementById('1489thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1490thlink")) {
 document.getElementById('1490thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1491thlink")) {
 document.getElementById('1491thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1492thlink")) {
 document.getElementById('1492thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1493thlink")) {
 document.getElementById('1493thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1494thlink")) {
 document.getElementById('1494thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1495thlink")) {
 document.getElementById('1495thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1496thlink")) {
 document.getElementById('1496thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1497thlink")) {
 document.getElementById('1497thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1498thlink")) {
 document.getElementById('1498thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1499thlink")) {
 document.getElementById('1499thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1500thlink")) {
 document.getElementById('1500thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1501thlink")) {
 document.getElementById('1501thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1502thlink")) {
 document.getElementById('1502thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1503thlink")) {
 document.getElementById('1503thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1504thlink")) {
 document.getElementById('1504thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1505thlink")) {
 document.getElementById('1505thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1506thlink")) {
 document.getElementById('1506thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1507thlink")) {
 document.getElementById('1507thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1508thlink")) {
 document.getElementById('1508thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1509thlink")) {
 document.getElementById('1509thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1510thlink")) {
 document.getElementById('1510thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1511thlink")) {
 document.getElementById('1511thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1512thlink")) {
 document.getElementById('1512thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1513thlink")) {
 document.getElementById('1513thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1514thlink")) {
 document.getElementById('1514thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1515thlink")) {
 document.getElementById('1515thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1516thlink")) {
 document.getElementById('1516thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1517thlink")) {
 document.getElementById('1517thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1518thlink")) {
 document.getElementById('1518thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1519thlink")) {
 document.getElementById('1519thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1520thlink")) {
 document.getElementById('1520thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1521thlink")) {
 document.getElementById('1521thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1522thlink")) {
 document.getElementById('1522thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1523thlink")) {
 document.getElementById('1523thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1524thlink")) {
 document.getElementById('1524thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1525thlink")) {
 document.getElementById('1525thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1526thlink")) {
 document.getElementById('1526thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1527thlink")) {
 document.getElementById('1527thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1528thlink")) {
 document.getElementById('1528thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1529thlink")) {
 document.getElementById('1529thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1530thlink")) {
 document.getElementById('1530thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1531thlink")) {
 document.getElementById('1531thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1532thlink")) {
 document.getElementById('1532thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1533thlink")) {
 document.getElementById('1533thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1534thlink")) {
 document.getElementById('1534thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1535thlink")) {
 document.getElementById('1535thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1536thlink")) {
 document.getElementById('1536thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1537thlink")) {
 document.getElementById('1537thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1538thlink")) {
 document.getElementById('1538thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1539thlink")) {
 document.getElementById('1539thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1540thlink")) {
 document.getElementById('1540thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1541thlink")) {
 document.getElementById('1541thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1542thlink")) {
 document.getElementById('1542thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1543thlink")) {
 document.getElementById('1543thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1544thlink")) {
 document.getElementById('1544thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1545thlink")) {
 document.getElementById('1545thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1546thlink")) {
 document.getElementById('1546thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1547thlink")) {
 document.getElementById('1547thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1548thlink")) {
 document.getElementById('1548thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1549thlink")) {
 document.getElementById('1549thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1550thlink")) {
 document.getElementById('1550thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1551thlink")) {
 document.getElementById('1551thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1552thlink")) {
 document.getElementById('1552thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1553thlink")) {
 document.getElementById('1553thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1554thlink")) {
 document.getElementById('1554thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1555thlink")) {
 document.getElementById('1555thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1556thlink")) {
 document.getElementById('1556thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1557thlink")) {
 document.getElementById('1557thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1558thlink")) {
 document.getElementById('1558thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1559thlink")) {
 document.getElementById('1559thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1560thlink")) {
 document.getElementById('1560thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1561thlink")) {
 document.getElementById('1561thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1562thlink")) {
 document.getElementById('1562thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1563thlink")) {
 document.getElementById('1563thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1564thlink")) {
 document.getElementById('1564thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1565thlink")) {
 document.getElementById('1565thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1566thlink")) {
 document.getElementById('1566thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1567thlink")) {
 document.getElementById('1567thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1568thlink")) {
 document.getElementById('1568thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1569thlink")) {
 document.getElementById('1569thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1570thlink")) {
 document.getElementById('1570thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1571thlink")) {
 document.getElementById('1571thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1572thlink")) {
 document.getElementById('1572thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1573thlink")) {
 document.getElementById('1573thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1574thlink")) {
 document.getElementById('1574thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1575thlink")) {
 document.getElementById('1575thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1576thlink")) {
 document.getElementById('1576thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1577thlink")) {
 document.getElementById('1577thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1578thlink")) {
 document.getElementById('1578thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1579thlink")) {
 document.getElementById('1579thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1580thlink")) {
 document.getElementById('1580thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1581thlink")) {
 document.getElementById('1581thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1582thlink")) {
 document.getElementById('1582thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1583thlink")) {
 document.getElementById('1583thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1584thlink")) {
 document.getElementById('1584thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1585thlink")) {
 document.getElementById('1585thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1586thlink")) {
 document.getElementById('1586thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1587thlink")) {
 document.getElementById('1587thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1588thlink")) {
 document.getElementById('1588thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1589thlink")) {
 document.getElementById('1589thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1590thlink")) {
 document.getElementById('1590thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1591thlink")) {
 document.getElementById('1591thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1592thlink")) {
 document.getElementById('1592thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1593thlink")) {
 document.getElementById('1593thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1594thlink")) {
 document.getElementById('1594thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1595thlink")) {
 document.getElementById('1595thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1596thlink")) {
 document.getElementById('1596thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1597thlink")) {
 document.getElementById('1597thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1598thlink")) {
 document.getElementById('1598thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1599thlink")) {
 document.getElementById('1599thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1600thlink")) {
 document.getElementById('1600thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1601thlink")) {
 document.getElementById('1601thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1602thlink")) {
 document.getElementById('1602thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1603thlink")) {
 document.getElementById('1603thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1604thlink")) {
 document.getElementById('1604thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1605thlink")) {
 document.getElementById('1605thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1606thlink")) {
 document.getElementById('1606thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1607thlink")) {
 document.getElementById('1607thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1608thlink")) {
 document.getElementById('1608thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1609thlink")) {
 document.getElementById('1609thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1610thlink")) {
 document.getElementById('1610thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1611thlink")) {
 document.getElementById('1611thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1612thlink")) {
 document.getElementById('1612thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1613thlink")) {
 document.getElementById('1613thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1614thlink")) {
 document.getElementById('1614thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1615thlink")) {
 document.getElementById('1615thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1616thlink")) {
 document.getElementById('1616thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1617thlink")) {
 document.getElementById('1617thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1618thlink")) {
 document.getElementById('1618thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1619thlink")) {
 document.getElementById('1619thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1620thlink")) {
 document.getElementById('1620thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1621thlink")) {
 document.getElementById('1621thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1622thlink")) {
 document.getElementById('1622thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1623thlink")) {
 document.getElementById('1623thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1624thlink")) {
 document.getElementById('1624thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1625thlink")) {
 document.getElementById('1625thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1626thlink")) {
 document.getElementById('1626thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1627thlink")) {
 document.getElementById('1627thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1628thlink")) {
 document.getElementById('1628thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1629thlink")) {
 document.getElementById('1629thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1630thlink")) {
 document.getElementById('1630thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1631thlink")) {
 document.getElementById('1631thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1632thlink")) {
 document.getElementById('1632thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1633thlink")) {
 document.getElementById('1633thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1634thlink")) {
 document.getElementById('1634thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1635thlink")) {
 document.getElementById('1635thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1636thlink")) {
 document.getElementById('1636thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1637thlink")) {
 document.getElementById('1637thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1638thlink")) {
 document.getElementById('1638thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1639thlink")) {
 document.getElementById('1639thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1640thlink")) {
 document.getElementById('1640thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1641thlink")) {
 document.getElementById('1641thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1642thlink")) {
 document.getElementById('1642thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1643thlink")) {
 document.getElementById('1643thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1644thlink")) {
 document.getElementById('1644thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1645thlink")) {
 document.getElementById('1645thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1646thlink")) {
 document.getElementById('1646thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1647thlink")) {
 document.getElementById('1647thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1648thlink")) {
 document.getElementById('1648thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1649thlink")) {
 document.getElementById('1649thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1650thlink")) {
 document.getElementById('1650thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1651thlink")) {
 document.getElementById('1651thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1652thlink")) {
 document.getElementById('1652thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1653thlink")) {
 document.getElementById('1653thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1654thlink")) {
 document.getElementById('1654thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1655thlink")) {
 document.getElementById('1655thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1656thlink")) {
 document.getElementById('1656thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1657thlink")) {
 document.getElementById('1657thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1658thlink")) {
 document.getElementById('1658thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1659thlink")) {
 document.getElementById('1659thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1660thlink")) {
 document.getElementById('1660thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1661thlink")) {
 document.getElementById('1661thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1662thlink")) {
 document.getElementById('1662thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1663thlink")) {
 document.getElementById('1663thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1664thlink")) {
 document.getElementById('1664thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1665thlink")) {
 document.getElementById('1665thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1666thlink")) {
 document.getElementById('1666thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1667thlink")) {
 document.getElementById('1667thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1668thlink")) {
 document.getElementById('1668thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1669thlink")) {
 document.getElementById('1669thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1670thlink")) {
 document.getElementById('1670thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1671thlink")) {
 document.getElementById('1671thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1672thlink")) {
 document.getElementById('1672thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1673thlink")) {
 document.getElementById('1673thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1674thlink")) {
 document.getElementById('1674thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1675thlink")) {
 document.getElementById('1675thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1676thlink")) {
 document.getElementById('1676thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1677thlink")) {
 document.getElementById('1677thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1678thlink")) {
 document.getElementById('1678thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1679thlink")) {
 document.getElementById('1679thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1680thlink")) {
 document.getElementById('1680thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1681thlink")) {
 document.getElementById('1681thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1682thlink")) {
 document.getElementById('1682thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1683thlink")) {
 document.getElementById('1683thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1684thlink")) {
 document.getElementById('1684thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1685thlink")) {
 document.getElementById('1685thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1686thlink")) {
 document.getElementById('1686thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1687thlink")) {
 document.getElementById('1687thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1688thlink")) {
 document.getElementById('1688thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1689thlink")) {
 document.getElementById('1689thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1690thlink")) {
 document.getElementById('1690thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1691thlink")) {
 document.getElementById('1691thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1692thlink")) {
 document.getElementById('1692thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1693thlink")) {
 document.getElementById('1693thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1694thlink")) {
 document.getElementById('1694thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1695thlink")) {
 document.getElementById('1695thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1696thlink")) {
 document.getElementById('1696thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1697thlink")) {
 document.getElementById('1697thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1698thlink")) {
 document.getElementById('1698thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1699thlink")) {
 document.getElementById('1699thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1700thlink")) {
 document.getElementById('1700thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1701thlink")) {
 document.getElementById('1701thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1702thlink")) {
 document.getElementById('1702thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1703thlink")) {
 document.getElementById('1703thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1704thlink")) {
 document.getElementById('1704thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1705thlink")) {
 document.getElementById('1705thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1706thlink")) {
 document.getElementById('1706thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1707thlink")) {
 document.getElementById('1707thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1708thlink")) {
 document.getElementById('1708thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1709thlink")) {
 document.getElementById('1709thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1710thlink")) {
 document.getElementById('1710thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1711thlink")) {
 document.getElementById('1711thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1712thlink")) {
 document.getElementById('1712thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1713thlink")) {
 document.getElementById('1713thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1714thlink")) {
 document.getElementById('1714thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1715thlink")) {
 document.getElementById('1715thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1716thlink")) {
 document.getElementById('1716thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1717thlink")) {
 document.getElementById('1717thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1718thlink")) {
 document.getElementById('1718thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1719thlink")) {
 document.getElementById('1719thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1720thlink")) {
 document.getElementById('1720thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1721thlink")) {
 document.getElementById('1721thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1722thlink")) {
 document.getElementById('1722thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1723thlink")) {
 document.getElementById('1723thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1724thlink")) {
 document.getElementById('1724thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1725thlink")) {
 document.getElementById('1725thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1726thlink")) {
 document.getElementById('1726thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1727thlink")) {
 document.getElementById('1727thlink').style.backgroundColor = "blue";
}
if (localStorage.getItem("1728thlink")) {
 document.getElementById('1728thlink').style.backgroundColor = "blue";
}