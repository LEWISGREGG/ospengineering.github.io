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

if (localStorage.getItem("firstlink")) {
 document.getElementById('firstlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("secondlink")) {
 document.getElementById('secondlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("thirdlink")) {
 document.getElementById('thirdlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("fourthlink")) {
 document.getElementById('fourthlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("fifthlink")) {
 document.getElementById('fifthlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("sixthlink")) {
 document.getElementById('sixthlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("seventhlink")) {
 document.getElementById('seventhlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("eighthlink")) {
 document.getElementById('eighthlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("ninthlink")) {
 document.getElementById('ninthlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("tenthlink")) {
 document.getElementById('tenthlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("eleventhlink")) {
 document.getElementById('eleventhlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("twelvthink")) {
 document.getElementById('twelvthink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("thirtenthlink")) {
 document.getElementById('thirtenthlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("fourteenthlink")) {
 document.getElementById('fourteenthlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("fifteenthlink")) {
 document.getElementById('fifteenthlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("sixteenthlink")) {
 document.getElementById('sixteenthlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("seventeenthlink")) {
 document.getElementById('seventeenthlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("eighteenthlink")) {
 document.getElementById('eighteenthlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("nineteenthlink")) {
 document.getElementById('nineteenthlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("20thlink")) {
 document.getElementById('20thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("21thlink")) {
 document.getElementById('21thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("22thlink")) {
 document.getElementById('22thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("23thlink")) {
 document.getElementById('23thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("24thlink")) {
 document.getElementById('24thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("25thlink")) {
 document.getElementById('25thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("26thlink")) {
 document.getElementById('26thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("27thlink")) {
 document.getElementById('27thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("28thlink")) {
 document.getElementById('28thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("29thlink")) {
 document.getElementById('29thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("30thlink")) {
 document.getElementById('30thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("31thlink")) {
 document.getElementById('31thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("32thlink")) {
 document.getElementById('32thlink').style.backgroundColor = "yellow";
}

if (localStorage.getItem("33thlink")) {
 document.getElementById('33thlink').style.backgroundColor = "yellow";
}

if (localStorage.getItem("34thlink")) {
 document.getElementById('34thlink').style.backgroundColor = "yellow";
}

if (localStorage.getItem("35thlink")) {
 document.getElementById('35thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("36thlink")) {
 document.getElementById('36thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("37thlink")) {
 document.getElementById('37thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("38thlink")) {
 document.getElementById('38thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("39thlink")) {
 document.getElementById('39thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("40thlink")) {
 document.getElementById('40thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("41thlink")) {
 document.getElementById('41thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("42thlink")) {
 document.getElementById('42thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("43thlink")) {
 document.getElementById('43thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("44thlink")) {
 document.getElementById('44thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("45thlink")) {
 document.getElementById('45thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("46thlink")) {
 document.getElementById('46thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("47thlink")) {
 document.getElementById('47thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("48thlink")) {
 document.getElementById('48thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("49thlink")) {
 document.getElementById('49thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("50thlink")) {
 document.getElementById('50thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("51thlink")) {
 document.getElementById('51thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("52thlink")) {
 document.getElementById('52thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("53thlink")) {
 document.getElementById('53thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("54thlink")) {
 document.getElementById('54thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("55thlink")) {
 document.getElementById('55thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("56thlink")) {
 document.getElementById('56thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("57thlink")) {
 document.getElementById('57thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("58thlink")) {
 document.getElementById('58thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("59thlink")) {
 document.getElementById('59thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("60thlink")) {
 document.getElementById('60thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("61thlink")) {
 document.getElementById('61thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("62thlink")) {
 document.getElementById('62thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("63thlink")) {
 document.getElementById('63thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("64thlink")) {
 document.getElementById('64thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("65thlink")) {
 document.getElementById('65thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("66thlink")) {
 document.getElementById('66thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("67thlink")) {
 document.getElementById('67thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("68thlink")) {
 document.getElementById('68thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("69thlink")) {
 document.getElementById('69thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("70thlink")) {
 document.getElementById('70thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("71thlink")) {
 document.getElementById('71thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("72thlink")) {
 document.getElementById('72thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("73thlink")) {
 document.getElementById('73thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("74thlink")) {
 document.getElementById('74thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("75thlink")) {
 document.getElementById('75thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("76thlink")) {
 document.getElementById('76thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("77thlink")) {
 document.getElementById('77thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("78thlink")) {
 document.getElementById('78thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("79thlink")) {
 document.getElementById('79thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("80thlink")) {
 document.getElementById('80thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("81thlink")) {
 document.getElementById('81thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("82thlink")) {
 document.getElementById('82thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("83thlink")) {
 document.getElementById('83thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("84thlink")) {
 document.getElementById('84thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("85thlink")) {
 document.getElementById('85thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("86thlink")) {
 document.getElementById('86thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("87thlink")) {
 document.getElementById('87thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("88thlink")) {
 document.getElementById('88thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("89thlink")) {
 document.getElementById('89thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("90thlink")) {
 document.getElementById('90thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("91thlink")) {
 document.getElementById('91thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("92thlink")) {
 document.getElementById('92thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("93thlink")) {
 document.getElementById('93thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("94thlink")) {
 document.getElementById('94thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("95thlink")) {
 document.getElementById('95thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("96thlink")) {
 document.getElementById('96thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("97thlink")) {
 document.getElementById('97thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("98thlink")) {
 document.getElementById('98thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("99thlink")) {
 document.getElementById('99thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("100thlink")) {
 document.getElementById('100thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("101thlink")) {
 document.getElementById('101thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("102thlink")) {
 document.getElementById('102thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("103thlink")) {
 document.getElementById('103thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("104thlink")) {
 document.getElementById('104thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("105thlink")) {
 document.getElementById('105thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("106thlink")) {
 document.getElementById('106thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("107thlink")) {
 document.getElementById('107thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("108thlink")) {
 document.getElementById('108thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("109thlink")) {
 document.getElementById('109thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("110thlink")) {
 document.getElementById('110thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("111thlink")) {
 document.getElementById('111thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("112thlink")) {
 document.getElementById('112thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("113thlink")) {
 document.getElementById('113thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("114thlink")) {
 document.getElementById('114thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("115thlink")) {
 document.getElementById('115thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("116thlink")) {
 document.getElementById('116thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("117thlink")) {
 document.getElementById('117thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("118thlink")) {
 document.getElementById('118thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("119thlink")) {
 document.getElementById('119thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("120thlink")) {
 document.getElementById('120thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("121thlink")) {
 document.getElementById('121thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("122thlink")) {
 document.getElementById('122thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("123thlink")) {
 document.getElementById('123thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("124thlink")) {
 document.getElementById('124thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("125thlink")) {
 document.getElementById('125thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("126thlink")) {
 document.getElementById('126thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("127thlink")) {
 document.getElementById('127thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("128thlink")) {
 document.getElementById('128thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("129thlink")) {
 document.getElementById('129thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("130thlink")) {
 document.getElementById('130thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("131thlink")) {
 document.getElementById('131thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("132thlink")) {
 document.getElementById('132thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("133thlink")) {
 document.getElementById('133thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("134thlink")) {
 document.getElementById('134thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("135thlink")) {
 document.getElementById('135thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("136thlink")) {
 document.getElementById('136thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("137thlink")) {
 document.getElementById('137thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("138thlink")) {
 document.getElementById('138thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("139thlink")) {
 document.getElementById('139thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("140thlink")) {
 document.getElementById('140thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("141thlink")) {
 document.getElementById('141thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("142thlink")) {
 document.getElementById('142thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("143thlink")) {
 document.getElementById('143thlink').style.backgroundColor = "yellow";
}
if (localStorage.getItem("144thlink")) {
 document.getElementById('144thlink').style.backgroundColor = "yellow";
}
