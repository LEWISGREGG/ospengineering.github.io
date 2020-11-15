window.onload = function () {
/* mixed scheme  */
var tot1El = document.getElementById('tot1');
var tot2El = document.getElementById('tot2');

var sxa1El = document.getElementById('sxa1');
var sxa2El = document.getElementById('sxa2');
var sxa3El = document.getElementById('sxa3');
var sxa4El = document.getElementById('sxa4');

var sh1El = document.getElementById('sh1');
var sh2El = document.getElementById('sh2');
var sh3El = document.getElementById('sh3');
var sh4El = document.getElementById('sh4');
var sh5El = document.getElementById('sh5');
var sh6El = document.getElementById('sh6');
var sh7El = document.getElementById('sh7');
var sh8El = document.getElementById('sh8');


var spx1El = document.getElementById('spx1');
var spx2El = document.getElementById('spx2');
var spx3El = document.getElementById('spx3');
var spx4El = document.getElementById('spx4');
var spx5El = document.getElementById('spx5');
var spx6El = document.getElementById('spx6');
var spx7El = document.getElementById('spx7');
var spx8El = document.getElementById('spx8');


var sxb1El = document.getElementById('sxb1');
var sxb2El = document.getElementById('sxb2');
var sxb3El = document.getElementById('sxb3');
var sxb4El = document.getElementById('sxb4');

var sd1El = document.getElementById('sd1');
var sd2El = document.getElementById('sd2');
var sd3El = document.getElementById('sd3');
var sd4El = document.getElementById('sd4');


/* simple bottom scheme */
var tot4El = document.getElementById('tot4');
var tot5El = document.getElementById('tot5');

var axa1El = document.getElementById('axa1');
var axa2El = document.getElementById('axa2');
var axa3El = document.getElementById('axa3');
var axa4El = document.getElementById('axa4');

var ah1El = document.getElementById('ah1');
var ah2El = document.getElementById('ah2');
var ah3El = document.getElementById('ah3');
var ah4El = document.getElementById('ah4');
var ah5El = document.getElementById('ah5');
var ah6El = document.getElementById('ah6');

var axb1El = document.getElementById('axb1');
var axb2El = document.getElementById('axb2');
var axb3El = document.getElementById('axb3');
var axb4El = document.getElementById('axb4');

var ad1El = document.getElementById('ad1');
var ad2El = document.getElementById('ad2');


/* simple upper scheme */
var tot6El = document.getElementById('tot6');
var tot7El = document.getElementById('tot7');

var bxa1El = document.getElementById('bxa1');
var bxa2El = document.getElementById('bxa2');
var bxa3El = document.getElementById('bxa3');
var bxa4El = document.getElementById('bxa4');

var bh1El = document.getElementById('bh1');
var bh2El = document.getElementById('bh2');
var bh3El = document.getElementById('bh3');
var bh4El = document.getElementById('bh4');
var bh5El = document.getElementById('bh5');
var bh6El = document.getElementById('bh6');

var bxb1El = document.getElementById('bxb1');
var bxb2El = document.getElementById('bxb2');
var bxb3El = document.getElementById('bxb3');
var bxb4El = document.getElementById('bxb4');

var bd1El = document.getElementById('bd1');
var bd2El = document.getElementById('bd2');

/* count verification */
var f1El = document.getElementById('f1');
var f2El = document.getElementById('f2');
var f3El = document.getElementById('f3');
var f4El = document.getElementById('f4');
var f5El = document.getElementById('f5');
var f6El = document.getElementById('f6');
var f7El = document.getElementById('f7');
var f8El = document.getElementById('f8');
var f9El = document.getElementById('f9');
var f10El = document.getElementById('f10');
var f11El = document.getElementById('f11');
var f12El = document.getElementById('f12');


var c1El = document.getElementById('c1');
var c2El = document.getElementById('c2');
var c3El = document.getElementById('c3');
var c4El = document.getElementById('c4');
var c5El = document.getElementById('c5');
var c6El = document.getElementById('c6');
var c7El = document.getElementById('c7');
var c8El = document.getElementById('c8');
var c9El = document.getElementById('c9');
var c10El = document.getElementById('c10');
var c11El = document.getElementById('c11');
var c12El = document.getElementById('c12');
var c13El = document.getElementById('c13');
var c14El = document.getElementById('c14');
var c15El = document.getElementById('c15');
var c16El = document.getElementById('c16');
var c17El = document.getElementById('c17');
var c18El = document.getElementById('c18');
var c19El = document.getElementById('c19');
var c20El = document.getElementById('c20');
var c21El = document.getElementById('c21');
var c22El = document.getElementById('c22');
var c23El = document.getElementById('c23');
var c24El = document.getElementById('c24');

var tot3El = document.getElementById('tot3');



/* count positioning */
var z1El = document.getElementById('z1');
var z2El = document.getElementById('z2');
var z3El = document.getElementById('z3');
var z4El = document.getElementById('z4');
var z5El = document.getElementById('z5');
var z6El = document.getElementById('z6');
var z7El = document.getElementById('z7');
var z8El = document.getElementById('z8');

var t1El = document.getElementById('t1');
var t2El = document.getElementById('t2');
var t3El = document.getElementById('t3');
var t4El = document.getElementById('t4');
var t5El = document.getElementById('t5');
var t6El = document.getElementById('t6');
var t7El = document.getElementById('t7');
var t8El = document.getElementById('t8');
var t9El = document.getElementById('t9');
var t10El = document.getElementById('t10');
var t11El = document.getElementById('t11');
var t12El = document.getElementById('t12');



function calcmix() {
 /* mixed scheme  */
 var tot1 = tot1El.value;
 var tot2 = tot2El.value;

 var sxa1 = sxa1El.value;
 var sxa2 = sxa2El.value;
 var sxa3 = sxa3El.value;
 var sxa4 = sxa4El.value;


 var sh1 = sh1El.value;
 var sh2 = sh2El.value;
 var sh3 = sh3El.value;
 var sh4 = sh4El.value;
 var sh5 = sh5El.value;
 var sh6 = sh6El.value;
 var sh7 = sh7El.value;
 var sh8 = sh8El.value;

 var spx1 = spx1El.value;
 var spx2 = spx2El.value;
 var spx3 = spx3El.value;
 var spx4 = spx4El.value;
 var spx5 = spx5El.value;
 var spx6 = spx6El.value;
 var spx7 = spx7El.value;
 var spx8 = spx8El.value;

 var sxb1 = sxb1El.value;
 var sxb2 = sxb2El.value;
 var sxb3 = sxb3El.value;
 var sxb4 = sxb4El.value;

 var sd1 = sd1El.value;
 var sd2 = sd2El.value;
 var sd3 = sd3El.value;
 var sd4 = sd4El.value;



 
 var tot1 = +sxa2 - +sxa1 + +sh2 - +sh1 + +spx2 - +spx1 + +sxb2 - +sxb1 + 4;

 if (sh7 > sh1 && sh8 < sh2 && spx7 > spx1 && spx8 > 0) {

  var sxa3 = sxa1;
  var sxa4 = sxa2;

  var sh3 = sh1;
  var sh4 = +sh7 - 1;
  var sh5 = +sh8 + 1;
  var sh6 = sh2;
  var spx3 = spx1;
  var spx4 = +spx7 - 1;
  var spx5 = +spx8 + 1;
  var spx6 = spx2;

  var sxb3 = sxb1;
  var sxb4 = sxb2;

  var sd1 = +sh7 - +sh1 + 1 + +sxa2;
  var sd2 = +sh8 - +sh1 + 1 + +sxa2;
  var sd3 = +spx7 - +spx1 + 1 + +sh2;
  var sd4 = +spx8 - +spx1 + 1 + +sh2;

  var tot2 = +sxa4 - +sxa3 + +sh6 - +sh5 + +sh4 - +sh3 + +spx6 - +spx5 + +spx4 - +spx3 + +sxb4 - +sxb3 + sd4 - +sd3 + 
  sd2 - +sd1 + 8;

 } else if (sh7 > sh1 && sh8 < sh2 && spx7 > spx1 && spx8 < 1) {
  var sxa3 = sxa1;
  var sxa4 = sxa2;

  var sh3 = sh1;
  var sh4 = +sh7 - 1;
  var sh5 = +sh8 + 1;
  var sh6 = sh2;
  var spx3 = spx1;
  var spx4 = +spx7 - 1;
  var spx5 = +spx7 + 1;
  var spx6 = spx2;

  var sxb3 = sxb1;
  var sxb4 = sxb2;

  var sd1 = +sh7 - +sh1 + 1 + +sxa2;
  var sd2 = +sh8 - +sh1 + 1 + +sxa2;
  var sd3 = +spx7 - +spx1 + 1 + +sh2;
  var sd4 = 0;


  var tot2 = +sxa4 - +sxa3 + +sh6 - +sh5 + +sh4 - +sh3 + +spx6 - +spx5 + +spx4 - +spx3 + +sxb4 - +sxb3 + sd4 - +sd4 +
  sd2 - +sd1 + 8;

 } else if (sh7 === sh1 && sh8 < sh2 && spx7 === spx1 && spx8 < spx2) {

  var sxa3 = sxa1;
  var sxa4 = sxa2;

  var sh3 = +sh8 + 1;
  var sh4 = sh2;
  var sh5 = 0;
  var sh6 = 0;
  var spx3 = +spx8 + 1;
  var spx4 = +spx2;
  var spx5 = 0;
  var spx6 = 0;

  var sxb3 = sxb1;
  var sxb4 = sxb2;

  var sd1 = +sh7 - +sh1 + 1 + +sxa2;
  var sd2 = +sh8 - +sh1 + 1 + +sxa2;
  var sd3 = +sh2 - +sh1 + +spx7 - +spx1 + +sxa4 + 1;
  var sd4 = +sh2 - +sh1 + +spx8 - +spx1 + +sxa4 + 1;

  var tot2 = +sxa4 - +sxa3 + +sh4 - +sh3 + +spx4 - +spx3 + +sxb4 - +sxb3 + sd4 - +sd3 + sd2 - +sd1 + 6;

 } else if (sh7 === sh1 && sh8 < sh2 && spx7 > spx1 && spx8 === spx2) {

  var sxa3 = sxa1;
  var sxa4 = sxa2;

  var sh3 = +sh8 + 1;
  var sh4 = sh2;
  var sh5 = 0;
  var sh6 = 0;
  var spx3 = +spx1;
  var spx4 = +spx7 - 1;
  var spx5 = 0;
  var spx6 = 0;

  var sxb3 = sxb1;
  var sxb4 = sxb2;

  var sd1 = +sh7 - +sh1 + 1 + +sxa2;
  var sd2 = +sh8 - +sh1 + 1 + +sxa2;
  var sd3 = +sh2 - +sh1 + +spx7 - +spx1 + +sxa4 + 2;
  var sd4 = +sh2 - +sh1 + +spx8 - +spx1 + +sxa4 + 2;

  var tot2 = +sxa4 - +sxa3 + +sh4 - +sh3 + +spx4 - +spx3 + +sxb4 - +sxb3 + sd4 - +sd3 + sd2 - +sd1 + 6;

 } else if (sh7 === sh1 && sh8 < sh2 && spx7 === spx1 && spx8 === spx2) {

  var sxa3 = sxa1;
  var sxa4 = sxa2;

  var sh3 = +sh8 + 1;
  var sh4 = sh2;
  var sh5 = 0;
  var sh6 = 0;
  var spx3 = 0;
  var spx4 = 0;
  var spx5 = 0;
  var spx6 = 0;

  var sxb3 = sxb1;
  var sxb4 = sxb2;

  var sd1 = +sh7 - +sh1 + 1 + +sxa2;
  var sd2 = +sh8 - +sh1 + 1 + +sxa2;
  var sd3 = 0;
  var sd4 = 0;

  var tot2 = +sxa4 - +sxa3 + +sh4 - +sh3 + +sxb4 - +sxb3 + sd2 - +sd1 + +spx2 - +spx1 +5 ;

 } else if (sh7 > sh1 && sh8 === sh2 && spx7 === spx1 && spx8 < spx2) {

  var sxa3 = sxa1;
  var sxa4 = sxa2;

  var sh3 = +sh1;
  var sh4 = +sh7 - 1;
  var sh5 = 0;
  var sh6 = 0;
  var spx3 = +spx8 + 1;
  var spx4 = +spx2;
  var spx5 = 0;
  var spx6 = 0;

  var sxb3 = sxb1;
  var sxb4 = sxb2;

  var sd1 = +sh7 - +sh1 + 1 + +sxa2;
  var sd2 = +sh8 - +sh1 + 1 + +sxa2;
  var sd3 = +sh2 - +sh1 + +spx7 - +spx1 + +sxa4 + 1;
  var sd4 = +sh2 - +sh1 + +spx8 - +spx1 + +sxa4 + 1;

  var tot2 = +sxa4 - +sxa3 + +sh4 - +sh3 + +spx4 - +spx3 + +sxb4 - +sxb3 + sd4 - +sd3 + sd2 - +sd1 + 6;

 } else if (sh7 > sh1 && sh8 === sh2 && spx7 > spx1 && spx8 === spx2) {

  var sxa3 = sxa1;
  var sxa4 = sxa2;

  var sh3 = +sh1;
  var sh4 = +sh7 - 1;
  var sh5 = 0;
  var sh6 = 0;
  var spx3 = +spx1;
  var spx4 = +spx7 - 1;
  var spx5 = 0;
  var spx6 = 0;

  var sxb3 = sxb1;
  var sxb4 = sxb2;

  var sd1 = +sh7 - +sh1 + 1 + +sxa2;
  var sd2 = +sh8 - +sh1 + 1 + +sxa2;
  var sd3 = +sh2 - +sh1 + +spx7 - +spx1 + +sxa4 + 2;
  var sd4 = +sh2 - +sh1 + +spx8 - +spx1 + +sxa4 + 2;


  var tot2 = +sxa4 - +sxa3 + +sh4 - +sh3 + +spx4 - +spx3 + +sxb4 - +sxb3 + sd4 - +sd3 + sd2 - +sd1 + 6;

 } else if (sh7 > sh1 && sh8 === sh2 && spx7 === spx1 && spx8 === spx2) {

  var sxa3 = sxa1;
  var sxa4 = sxa2;

  var sh3 = +sh1;
  var sh4 = +sh7 - 1;
  var sh5 = 0;
  var sh6 = 0;
  var spx3 = 0;
  var spx4 = 0;
  var spx5 = 0;
  var spx6 = 0;

  var sxb3 = sxb1;
  var sxb4 = sxb2;

  var sd1 = +sh7 - +sh1 + 1 + +sxa2;
  var sd2 = +sh8 - +sh1 + 1 + +sxa2;
  var sd3 = 0;
  var sd4 = 0;

  var tot2 = +sxa4 - +sxa3 + +sh4 - +sh3 + +sxb4 - +sxb3 + sd2 - +sd1 + +spx2 - +spx1 + 5;

 } else {
  var sxa3 = 0;
  var sxa4 = 0;

  var sh3 = 0;
  var sh4 = 0;
  var sh5 = 0;
  var sh6 = 0;
  var spx3 = 0;
  var spx5 = 0;
  var spx6 = 0;

  var sxb3 = 0;
  var sxb4 = 0;

  var sd1 = 0;
  var sd2 = 0;
  var sd3 = 0;
  var sd4 = 0;
 }

tot1El.value = Math.round(tot1);
tot2El.value = Math.round(tot2);

sxa1El.value = Math.round(sxa1);
sxa2El.value = Math.round(sxa2);
sxa3El.value = Math.round(sxa3);
sxa4El.value = Math.round(sxa4);

sh1El.value = Math.round(sh1);
sh2El.value = Math.round(sh2);
sh3El.value = Math.round(sh3);
sh4El.value = Math.round(sh4);
sh5El.value = Math.round(sh5);
sh6El.value = Math.round(sh6);
sh7El.value = Math.round(sh7);
sh8El.value = Math.round(sh8);

spx1El.value = Math.round(spx1);
spx2El.value = Math.round(spx2);
spx3El.value = Math.round(spx3);
spx4El.value = Math.round(spx4);
spx5El.value = Math.round(spx5);
spx6El.value = Math.round(spx6);
spx7El.value = Math.round(spx7);
spx8El.value = Math.round(spx8);


sxb1El.value = Math.round(sxb1);
sxb2El.value = Math.round(sxb2);
sxb3El.value = Math.round(sxb3);
sxb4El.value = Math.round(sxb4);


sd1El.value = Math.round(sd1);
sd2El.value = Math.round(sd2);
sd3El.value = Math.round(sd3);
sd4El.value = Math.round(sd4);
}

function calcsimbot() {
 /* simple bottom scheme  */
 var axa1 = axa1El.value;
 var axa2 = axa2El.value;
 var axa3 = axa3El.value;
 var axa4 = axa4El.value;


 var ah1 = ah1El.value;
 var ah2 = ah2El.value;
 var ah3 = ah3El.value;
 var ah4 = ah4El.value;
 var ah5 = ah5El.value;
 var ah6 = ah6El.value;


 var axb1 = axb1El.value;
 var axb2 = axb2El.value;
 var axb3 = axb3El.value;
 var axb4 = axb4El.value;

 var ad1 = ad1El.value;
 var ad2 = ad2El.value;

 var tot4 = tot4El.value;
 var tot5 = tot5El.value;

 var tot4 = (+axa2 - +axa1 + 1) + (+ah2 - +ah1 + 1) + (+axb2 - +axb1 + 1);
 var tot5 = (+axa4 - +axa3 + 1) + (+ah4 - +ah3 + 1) + (+axb4 - +axb3 + 1) + (+ad2 - +ad1 + 1);

 if (ah5 === ah1 && ah6 < ah2) {
  var axa3 = axa1;
  var axa4 = axa2;
  var ah3 = +ah6 + 1;
  var ah4 = ah2;
  var axb3 = axb1;
  var axb4 = axb2;
  var ad1 = +axa2 + 1;
  var ad2 = +ah6 - +ah5 + 1 + +axa2;
 } else {
  var axa3 = 0;
  var axa4 = 0;
  var ah3 = 0;
  var ah4 = 0;
  var axb3 = 0;
  var axb4 = 0;
  var ad1 = 0;
  var ad2 = 0;
 }

axa1El.value = Math.round(axa1);
axa2El.value = Math.round(axa2);
axa3El.value = Math.round(axa3);
axa4El.value = Math.round(axa4);

ah1El.value = Math.round(ah1);
ah2El.value = Math.round(ah2);
ah3El.value = Math.round(ah3);
ah4El.value = Math.round(ah4);
ah5El.value = Math.round(ah5);
ah6El.value = Math.round(ah6);


axb1El.value = Math.round(axb1);
axb2El.value = Math.round(axb2);
axb3El.value = Math.round(axb3);
axb4El.value = Math.round(axb4);

tot4El.value = Math.round(tot4);
tot5El.value = Math.round(tot5);

ad1El.value = Math.round(ad1);
ad2El.value = Math.round(ad2);
}

function calcsimupp() {
 /* simple bottom scheme  */
 var bxa1 = bxa1El.value;
 var bxa2 = bxa2El.value;
 var bxa3 = bxa3El.value;
 var bxa4 = bxa4El.value;


 var bh1 = bh1El.value;
 var bh2 = bh2El.value;
 var bh3 = bh3El.value;
 var bh4 = bh4El.value;
 var bh5 = bh5El.value;
 var bh6 = bh6El.value;


 var bxb1 = bxb1El.value;
 var bxb2 = bxb2El.value;
 var bxb3 = bxb3El.value;
 var bxb4 = bxb4El.value;

 var bd1 = bd1El.value;
 var bd2 = bd2El.value;

 var tot6 = tot6El.value;
 var tot7 = tot7El.value;

 var tot6 = (+bxa2 - +bxa1 + 1) + (+bh2 - +bh1 + 1) + (+bxb2 - +bxb1 + 1);

 if (bh6 === bh2 && bh5 > bh1) {
  var bxa3 = bxa1;
  var bxa4 = bxa2;
  var bh3 = bh1;
  var bh4 = +bh5 - 1;
  var bd1 = +bh5 - +bh1 + +bxa2 + 1;
  var bd2 = +bxb1 - 1;
  var bxb3 = bxb1;
  var bxb4 = bxb2;
  var tot7 = (+bxa2 - +bxa1 + 1) + (+bh4 - +bh3 + 1) + (+bxb4 - +bxb3 + 1) + (+bd2 - +bd1 + 1);
 } else {
  var bxa3 = 0;
  var bxa4 = 0;
  var bh3 = 0;
  var bh4 = 0;
  var bxb3 = 0;
  var bxb4 = 0;
  var bd1 = 0;
  var bd2 = 0;
 }


bxa1El.value = Math.round(bxa1);
bxa2El.value = Math.round(bxa2);
bxa3El.value = Math.round(bxa3);
bxa4El.value = Math.round(bxa4);

bh1El.value = Math.round(bh1);
bh2El.value = Math.round(bh2);
bh3El.value = Math.round(bh3);
bh4El.value = Math.round(bh4);
bh5El.value = Math.round(bh5);
bh6El.value = Math.round(bh6);


bxb1El.value = Math.round(bxb1);
bxb2El.value = Math.round(bxb2);
bxb3El.value = Math.round(bxb3);
bxb4El.value = Math.round(bxb4);


bd1El.value = Math.round(bd1);
bd2El.value = Math.round(bd2);

tot6El.value = Math.round(tot6);
tot7El.value = Math.round(tot7);
}


function calcver() {
/* simple bottom scheme  */
var tot3 = tot3El.value;

var c1 = c1El.value;
var c2 = c2El.value;
var c3 = c3El.value;
var c4 = c4El.value;
var c5 = c5El.value;
var c6 = c6El.value;
var c7 = c7El.value;
var c8 = c8El.value;
var c9 = c9El.value;
var c10 = c10El.value;
var c11 = c11El.value;
var c12 = c12El.value;
var c13 = c13El.value;
var c14 = c14El.value;
var c15 = c15El.value;
var c16 = c16El.value;
var c17 = c17El.value;
var c18 = c18El.value;
var c19 = c19El.value;
var c20 = c20El.value;
var c21 = c21El.value;
var c22 = c22El.value;
var c23 = c23El.value;
var c24 = c24El.value;




var f1 = +c2 - +c1;
var f2 = +c4 - +c3;
var f3 = +c6 - +c5;
var f4 = +c8 - +c7;
var f5 = +c10 - +c9;
var f6 = +c12 - +c11;
var f7 = +c14 - +c13;
var f8 = +c16 - +c15;
var f9 = +c18 - +c17;
var f10 = +c20 - +c19;
var f11 = +c22 - +c21;
var f12 = +c24 - +c23;




 if (f1 >= 0.99 && c4 <= 0.01 && c6 <= 0.01 && c8 <= 0.01 && c10 <= 0.01 && c12 <= 0.01 && c14 <= 0.01 && c16 <= 0.01 && c18 <= 0.01 && c20 <= 0.01 && c22 <= 0.01 && c24 <= 0.01) {
  var tot3 = +f1 + 1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && c6 <= 0.01 && c8 <= 0.01 && c10 <= 0.01 && c12 <= 0.01 && c14 <= 0.01 && 
  c16 <= 0.01 && c18 <= 0.01 && c20 <= 0.01 && c22 <= 0.01 && c24 <= 0.01) {
  var tot3 = +f1 + +1 +f2 + 1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && f3 >= 0.99 && c8 <= 0.01 && c10 <= 0.01 && c12 <= 0.01 && c14 <= 0.01 && 
  c16 <= 0.01 && c18 <= 0.01 && c20 <= 0.01 && c22 <= 0.01 && c24 <= 0.01) {
  var tot3 = +f1 + 1 + +f2 + 1 + +f3 + 1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && f3 >= 0.99 && f4 >= 0.99 && c10 <= 0.01 && c12 <= 0.01 && c14 <= 0.01 && 
  c16 <= 0.01 && c18 <= 0.01 && c20 <= 0.01 && c22 <= 0.01 && c24 <= 0.01) {
  var tot3 = +f1 + 1 + +f2 + 1 + +f3 + 1 +f4 +1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && f3 >= 0.99 && f4 >= 0.99 && f5 >= 0.99 && c12 <= 0.01 && c14 <= 0.01 &&
  c16 <= 0.01 && c18 <= 0.01 && c20 <= 0.01 && c22 <= 0.01 && c24 <= 0.01) {
  var tot3 = +f1 + 1 + +f2 + 1 + +f3 + 1 + +f4 + 1 + +f5 + 1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && f3 >= 0.99 && f4 >= 0.99 && f5 >= 0.99 && f6 >= 0.99 && c14 <= 0.01 &&
  c16 <= 0.01 && c18 <= 0.01 && c20 <= 0.01 && c22 <= 0.01 && c24 <= 0.01) {
  var tot3 = +f1 + 1 + +f2 + 1 + +f3 + 1 + +f4 + 1 + +f5 + 1 + +f6 + 1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && f3 >= 0.99 && f4 >= 0.99 && f5 >= 0.99 && f6 >= 0.99 && f7 >= 0.99 &&
  c16 <= 0.01 && c18 <= 0.01 && c20 <= 0.01 && c22 <= 0.01 && c24 <= 0.01) {
  var tot3 = +f1 + 1 + +f2 + 1 + +f3 + 1 + +f4 + 1 + +f5 + 1 + +f6 + 1 + +f7 + 1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && f3 >= 0.99 && f4 >= 0.99 && f5 >= 0.99 && f6 >= 0.99 && f7 >= 0.99 &&
  f8 >= 0.99 && c18 <= 0.01 && c20 <= 0.01 && c22 <= 0.01 && c24 <= 0.01) {
  var tot3 = +f1 + 1 + +f2 + 1 + +f3 + 1 + +f4 + 1 + +f5 + 1 + +f6 + 1 + +f7 + 1 + +f8 + 1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && f3 >= 0.99 && f4 >= 0.99 && f5 >= 0.99 && f6 >= 0.99 && f7 >= 0.99 &&
  f8 >= 0.99 && f9 >= 0.99 && c20 <= 0.01 && c22 <= 0.01 && c24 <= 0.01) {
  var tot3 = +f1 + 1 + +f2 + 1 + +f3 + 1 + +f4 + 1 + +f5 + 1 + +f6 + 1 + +f7 + 1 + +f8 + 1 + +f9 + 1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && f3 >= 0.99 && f4 >= 0.99 && f5 >= 0.99 && f6 >= 0.99 && f7 >= 0.99 &&
  f8 >= 0.99 && f9 >= 0.99 && f10 >= 0.99 && c22 <= 0.01 && c24 <= 0.01) {
  var tot3 = +f1 + 1 + +f2 + 1 + +f3 + 1 + +f4 + 1 + +f5 + 1 + +f6 + 1 + +f7 + 1 + +f8 + 1 + +f9 + 1 + +f10 + 1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && f3 >= 0.99 && f4 >= 0.99 && f5 >= 0.99 && f6 >= 0.99 && f7 >= 0.99 &&
  f8 >= 0.99 && f9 >= 0.99 && f10 >= 0.99 && f11 >= 0.99 && c24 <= 0.01) {
  var tot3 = +f1 + 1 + +f2 + 1 + +f3 + 1 + +f4 + 1 + +f5 + 1 + +f6 + 1 + +f7 + 1 + +f8 + 1 + +f9 + 1 + +f10 + 1 +f11 + 1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && f3 >= 0.99 && f4 >= 0.99 && f5 >= 0.99 && f6 >= 0.99 && f7 >= 0.99 &&
  f8 >= 0.99 && f9 >= 0.99 && f10 >= 0.99 && f11 >= 0.99 && f12 >= 0.99) {
  var tot3 = +f1 + 1 + +f2 + 1 + +f3 + 1 + +f4 + 1 + +f5 + 1 + +f6 + 1 + +f7 + 1 + +f8 + 1 + +f9 + 1 + +f10 + 1 
   + f11 + 1 + f12 + 1;
 } else if (c1 === c2 && c4 <= 0.01 && c6 <= 0.01 && c8 <= 0.01 && c10 <= 0.01 && c12 <= 0.01 && c14 <= 0.01 && c16 <= 0.01 && c18 <= 0.01 && c20 <= 0.01 && c22 <= 0.01 && c24 <= 0.01) {
  var tot3 = +f1 + 1;
 } else if (f1 >= 0.99 && c3 === c4 && c6 <= 0.01 && c8 <= 0.01 && c10 <= 0.01 && c12 <= 0.01 && c14 <= 0.01 && 
  c16 <= 0.01 && c18 <= 0.01 && c20 <= 0.01 && c22 <= 0.01 && c24 <= 0.01) {
  var tot3 = +f1 + +1 +f2 + 1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && c5 === c6 && c8 <= 0.01 && c10 <= 0.01 && c12 <= 0.01 && c14 <= 0.01 && 
  c16 <= 0.01 && c18 <= 0.01 && c20 <= 0.01 && c22 <= 0.01 && c24 <= 0.01) {
  var tot3 = +f1 + 1 + +f2 + 1 + +f3 + 1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && f3 >= 0.99 && c7 === c8 && c10 <= 0.01 && c12 <= 0.01 && c14 <= 0.01 && 
  c16 <= 0.01 && c18 <= 0.01 && c20 <= 0.01 && c22 <= 0.01 && c24 <= 0.01) {
  var tot3 = +f1 + 1 + +f2 + 1 + +f3 + 1 +f4 +1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && f3 >= 0.99 && f4 >= 0.99 && c9 === c10 && c12 <= 0.01 && c14 <= 0.01 &&
  c16 <= 0.01 && c18 <= 0.01 && c20 <= 0.01 && c22 <= 0.01 && c24 <= 0.01) {
  var tot3 = +f1 + 1 + +f2 + 1 + +f3 + 1 + +f4 + 1 + +f5 + 1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && f3 >= 0.99 && f4 >= 0.99 && f5 >= 0.99 && c11 === c12 && c14 <= 0.01 &&
  c16 <= 0.01 && c18 <= 0.01 && c20 <= 0.01 && c22 <= 0.01 && c24 <= 0.01) {
  var tot3 = +f1 + 1 + +f2 + 1 + +f3 + 1 + +f4 + 1 + +f5 + 1 + +f6 + 1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && f3 >= 0.99 && f4 >= 0.99 && f5 >= 0.99 && f6 >= 0.99 && c13 === c14 &&
  c16 <= 0.01 && c18 <= 0.01 && c20 <= 0.01 && c22 <= 0.01 && c24 <= 0.01) {
  var tot3 = +f1 + 1 + +f2 + 1 + +f3 + 1 + +f4 + 1 + +f5 + 1 + +f6 + 1 + +f7 + 1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && f3 >= 0.99 && f4 >= 0.99 && f5 >= 0.99 && f6 >= 0.99 && f7 >= 0.99 &&
  c15 === c16 && c18 <= 0.01 && c20 <= 0.01 && c22 <= 0.01 && c24 <= 0.01) {
  var tot3 = +f1 + 1 + +f2 + 1 + +f3 + 1 + +f4 + 1 + +f5 + 1 + +f6 + 1 + +f7 + 1 + +f8 + 1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && f3 >= 0.99 && f4 >= 0.99 && f5 >= 0.99 && f6 >= 0.99 && f7 >= 0.99 &&
  f8 >= 0.99 && c17 === c18 && c20 <= 0.01 && c22 <= 0.01 && c24 <= 0.01) {
  var tot3 = +f1 + 1 + +f2 + 1 + +f3 + 1 + +f4 + 1 + +f5 + 1 + +f6 + 1 + +f7 + 1 + +f8 + 1 + +f9 + 1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && f3 >= 0.99 && f4 >= 0.99 && f5 >= 0.99 && f6 >= 0.99 && f7 >= 0.99 &&
  f8 >= 0.99 && f9 >= 0.99 && c19 === c20 && c22 <= 0.01 && c24 <= 0.01) {
  var tot3 = +f1 + 1 + +f2 + 1 + +f3 + 1 + +f4 + 1 + +f5 + 1 + +f6 + 1 + +f7 + 1 + +f8 + 1 + +f9 + 1 + +f10 + 1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && f3 >= 0.99 && f4 >= 0.99 && f5 >= 0.99 && f6 >= 0.99 && f7 >= 0.99 &&
  f8 >= 0.99 && f9 >= 0.99 && f10 >= 0.99 && c21 === c22 && c24 <= 0.01) {
  var tot3 = +f1 + 1 + +f2 + 1 + +f3 + 1 + +f4 + 1 + +f5 + 1 + +f6 + 1 + +f7 + 1 + +f8 + 1 + +f9 + 1 + +f10 + 1 +f11 + 1;
 } else if (f1 >= 0.99 && f2 >= 0.99 && f3 >= 0.99 && f4 >= 0.99 && f5 >= 0.99 && f6 >= 0.99 && f7 >= 0.99 &&
  f8 >= 0.99 && f9 >= 0.99 && f10 >= 0.99 && f11 >= 0.99 && c23 === c24) {
  var tot3 = +f1 + 1 + +f2 + 1 + +f3 + 1 + +f4 + 1 + +f5 + 1 + +f6 + 1 + +f7 + 1 + +f8 + 1 + +f9 + 1 + +f10 + 1 
   + f11 + 1 + f12 + 1;
 } else {
  var tot3 = 0;
 }


tot3El.value = Math.round(tot3);

f1El.value = Math.round(f1);
f2El.value = Math.round(f2);
f3El.value = Math.round(f3);
f4El.value = Math.round(f4);
f5El.value = Math.round(f5);
f6El.value = Math.round(f6);
f7El.value = Math.round(f7);
f8El.value = Math.round(f8);
f9El.value = Math.round(f9);
f10El.value = Math.round(f10);
f11El.value = Math.round(f11);
f12El.value = Math.round(f12);



c1El.value = Math.round(c1);
c2El.value = Math.round(c2);
c3El.value = Math.round(c3);
c4El.value = Math.round(c4);
c5El.value = Math.round(c5);
c6El.value = Math.round(c6);
c7El.value = Math.round(c7);
c8El.value = Math.round(c8);
c9El.value = Math.round(c9);
c10El.value = Math.round(c10);
c11El.value = Math.round(c11);
c12El.value = Math.round(c12);
c13El.value = Math.round(c13);
c14El.value = Math.round(c14);
c15El.value = Math.round(c15);
c16El.value = Math.round(c16);
c17El.value = Math.round(c17);
c18El.value = Math.round(c18);
c19El.value = Math.round(c19);
c20El.value = Math.round(c20);
c21El.value = Math.round(c21);
c22El.value = Math.round(c22);
c23El.value = Math.round(c23);
c24El.value = Math.round(c24);
}

 function calcpos() {

  var z1 = z1El.value;
  var z2 = z2El.value;
  var z3 = z3El.value;
  var z4 = z4El.value;
  var z5 = z5El.value;
  var z6 = z6El.value;
  var z7 = z7El.value;
  var z8 = z8El.value;

 
 
  if (z3 >= 0.99 && z3 <= 1.01 && z4 >= 0.99 && z5 <= 144.01) {
   var z6 = 0 + +z8;
   var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 1.99 && z3 <= 2.01 && z4 >= 0.99 && z5 <= 144.01) {
    var z6 = 12 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 2.99 && z3 <= 3.01 && z4 >= 0.99 && z5 <= 144.01) {
    var z6 = 24 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 3.99 && z3 <= 4.01 && z4 >= 0.99 && z5 <= 144.01) {
    var z6 = 36 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 4.99 && z3 <= 5.01 && z4 >= 0.99 && z5 <= 144.01) {
    var z6 = 48 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 5.99 && z3 <= 6.01 && z4 >= 0.99 && z5 <= 144.01) {
    var z6 = 60 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 6.99 && z3 <= 7.01 && z4 >= 0.99 && z5 <= 144.01) {
    var z6 = 72 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 7.99 && z3 <= 8.01 && z4 >= 0.99 && z5 <= 144.01) {
    var z6 = 84 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 8.99 && z3 <= 9.01 && z4 >= 0.99 && z5 <= 144.01) {
    var z6 = 96 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 9.99 && z3 <= 10.01 && z4 >= 0.99 && z5 <= 144.01) {
    var z6 = 108 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 10.99 && z3 <= 11.01 && z4 >= 0.99 && z5 <= 144.01) {
    var z6 = 120 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 11.99 && z3 <= 12.01 && z4 >= 0.99 && z5 <= 144.01) {
    var z6 = 132 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 0.99 && z3 <= 1.01 && z4 >= 144.99 && z5 <= 288.01) {
    var z6 = 144 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 1.99 && z3 <= 2.01 && z4 >= 144.99 && z5 <= 288.01) {
    var z6 = 156 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 2.99 && z3 <= 3.01 && z4 >= 144.99 && z5 <= 288.01) {
    var z6 = 168 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 3.99 && z3 <= 4.01 && z4 >= 144.99 && z5 <= 288.01) {
    var z6 = 180 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 4.99 && z3 <= 5.01 && z4 >= 144.99 && z5 <= 288.01) {
    var z6 = 192 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 5.99 && z3 <= 6.01 && z4 >= 144.99 && z5 <= 288.01) {
    var z6 = 204 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 6.99 && z3 <= 7.01 && z4 >= 144.99 && z5 <= 288.01) {
    var z6 = 216 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 7.99 && z3 <= 8.01 && z4 >= 144.99 && z5 <= 288.01) {
    var z6 = 228 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 8.99 && z3 <= 9.01 && z4 >= 144.99 && z5 <= 288.01) {
    var z6 = 240 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 9.99 && z3 <= 10.01 && z4 >= 144.99 && z5 <= 288.01) {
    var z6 = 252 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 10.99 && z3 <= 11.01 && z4 >= 144.99 && z5 <= 288.01) {
    var z6 = 264 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 11.99 && z3 <= 12.01 && z4 >= 144.99 && z5 <= 288.01) {
    var z6 = 276 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 0.99 && z3 <= 1.01 && z4 >= 288.99 && z5 <= 432.01) {
    var z6 = 288 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 1.99 && z3 <= 2.01 && z4 >= 288.99 && z5 <= 432.01) {
    var z6 = 300 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 2.99 && z3 <= 3.01 && z4 >= 288.99 && z5 <= 432.01) {
    var z6 = 312 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 3.99 && z3 <= 4.01 && z4 >= 288.99 && z5 <= 432.01) {
    var z6 = 324 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 4.99 && z3 <= 5.01 && z4 >= 288.99 && z5 <= 432.01) {
    var z6 = 336 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 5.99 && z3 <= 6.01 && z4 >= 288.99 && z5 <= 432.01) {
    var z6 = 348 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 6.99 && z3 <= 7.01 && z4 >= 288.99 && z5 <= 432.01) {
    var z6 = 360 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 7.99 && z3 <= 8.01 && z4 >= 288.99 && z5 <= 432.01) {
    var z6 = 372 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 8.99 && z3 <= 9.01 && z4 >= 288.99 && z5 <= 432.01) {
    var z6 = 384 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 9.99 && z3 <= 10.01 && z4 >= 288.99 && z5 <= 432.01) {
    var z6 = 396 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 10.99 && z3 <= 11.01 && z4 >= 288.99 && z5 <= 432.01) {
    var z6 = 408 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 11.99 && z3 <= 12.01 && z4 >= 288.99 && z5 <= 432.01) {
    var z6 = 420 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 0.99 && z3 <= 1.01 && z4 >= 432.99 && z5 <= 576.01) {
    var z6 = 432 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 1.99 && z3 <= 2.01 && z4 >= 432.99 && z5 <= 576.01) {
    var z6 = 444 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 2.99 && z3 <= 3.01 && z4 >= 432.99 && z5 <= 576.01) {
    var z6 = 456 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 3.99 && z3 <= 4.01 && z4 >= 432.99 && z5 <= 576.01) {
    var z6 = 468 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 4.99 && z3 <= 5.01 && z4 >= 432.99 && z5 <= 576.01) {
    var z6 = 480 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 5.99 && z3 <= 6.01 && z4 >= 432.99 && z5 <= 576.01) {
    var z6 = 492 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 6.99 && z3 <= 7.01 && z4 >= 432.99 && z5 <= 576.01) {
    var z6 = 504 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 7.99 && z3 <= 8.01 && z4 >= 432.99 && z5 <= 576.01) {
    var z6 = 516 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 8.99 && z3 <= 9.01 && z4 >= 432.99 && z5 <= 576.01) {
    var z6 = 528 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 9.99 && z3 <= 10.01 && z4 >= 432.99 && z5 <= 576.01) {
    var z6 = 540 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 10.99 && z3 <= 11.01 && z4 >= 432.99 && z5 <= 576.01) {
    var z6 = 552 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 11.99 && z3 <= 12.01 && z4 >= 432.99 && z5 <= 576.01) {
    var z6 = 564 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 0.99 && z3 <= 1.01 && z4 >= 576.99 && z5 <= 720.01) {
    var z6 = 576 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 1.99 && z3 <= 2.01 && z4 >= 576.99 && z5 <= 720.01) {
    var z6 = 588 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 2.99 && z3 <= 3.01 && z4 >= 576.99 && z5 <= 720.01) {
    var z6 = 600 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 3.99 && z3 <= 4.01 && z4 >= 576.99 && z5 <= 720.01) {
    var z6 = 612 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 4.99 && z3 <= 5.01 && z4 >= 576.99 && z5 <= 720.01) {
    var z6 = 624 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 5.99 && z3 <= 6.01 && z4 >= 576.99 && z5 <= 720.01) {
    var z6 = 636 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 6.99 && z3 <= 7.01 && z4 >= 576.99 && z5 <= 720.01) {
    var z6 = 648 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 7.99 && z3 <= 8.01 && z4 >= 576.99 && z5 <= 720.01) {
    var z6 = 660 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 8.99 && z3 <= 9.01 && z4 >= 576.99 && z5 <= 720.01) {
    var z6 = 672 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 9.99 && z3 <= 10.01 && z4 >= 576.99 && z5 <= 720.01) {
    var z6 = 684 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 10.99 && z3 <= 11.01 && z4 >= 576.99 && z5 <= 720.01) {
    var z6 = 696 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 11.99 && z3 <= 12.01 && z4 >= 576.99 && z5 <= 720.01) {
    var z6 = 708 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 0.99 && z3 <= 1.01 && z4 >= 720.99 && z5 <= 864.01) {
    var z6 = 720 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 1.99 && z3 <= 2.01 && z4 >= 720.99 && z5 <= 864.01) {
    var z6 = 732 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 2.99 && z3 <= 3.01 && z4 >= 720.99 && z5 <= 864.01) {
    var z6 = 744 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 3.99 && z3 <= 4.01 && z4 >= 720.99 && z5 <= 864.01) {
    var z6 = 756 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 4.99 && z3 <= 5.01 && z4 >= 720.99 && z5 <= 864.01) {
    var z6 = 768 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 5.99 && z3 <= 6.01 && z4 >= 720.99 && z5 <= 864.01) {
    var z6 = 780 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 6.99 && z3 <= 7.01 && z4 >= 720.99 && z5 <= 864.01) {
    var z6 = 792 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 7.99 && z3 <= 8.01 && z4 >= 720.99 && z5 <= 864.01) {
    var z6 = 804 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 8.99 && z3 <= 9.01 && z4 >= 720.99 && z5 <= 864.01) {
    var z6 = 816 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 9.99 && z3 <= 10.01 && z4 >= 720.99 && z5 <= 864.01) {
    var z6 = 828 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 10.99 && z3 <= 11.01 && z4 >= 720.99 && z5 <= 864.01) {
    var z6 = 840 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 11.99 && z3 <= 12.01 && z4 >= 720.99 && z5 <= 864.01) {
    var z6 = 852 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 0.99 && z3 <= 1.01 && z4 >= 864.99 && z5 <= 1008.01) {
    var z6 = 864 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 1.99 && z3 <= 2.01 && z4 >= 864.99 && z5 <= 1008.01) {
    var z6 = 876 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 2.99 && z3 <= 3.01 && z4 >= 864.99 && z5 <= 1008.01) {
    var z6 = 888 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 3.99 && z3 <= 4.01 && z4 >= 864.99 && z5 <= 1008.01) {
    var z6 = 900 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 4.99 && z3 <= 5.01 && z4 >= 864.99 && z5 <= 1008.01) {
    var z6 = 912 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 5.99 && z3 <= 6.01 && z4 >= 864.99 && z5 <= 1008.01) {
    var z6 = 924 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 6.99 && z3 <= 7.01 && z4 >= 864.99 && z5 <= 1008.01) {
    var z6 = 936 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 7.99 && z3 <= 8.01 && z4 >= 864.99 && z5 <= 1008.01) {
    var z6 = 948 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 8.99 && z3 <= 9.01 && z4 >= 864.99 && z5 <= 1008.01) {
    var z6 = 960 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 9.99 && z3 <= 10.01 && z4 >= 864.99 && z5 <= 1008.01) {
    var z6 = 972 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 10.99 && z3 <= 11.01 && z4 >= 864.99 && z5 <= 1008.01) {
    var z6 = 984 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 11.99 && z3 <= 12.01 && z4 >= 864.99 && z5 <= 1008.01) {
    var z6 = 996 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 0.99 && z3 <= 1.01 && z4 >= 1008.99 && z5 <= 1152.01) {
    var z6 = 1008 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 1.99 && z3 <= 2.01 && z4 >= 1008.99 && z5 <= 1152.01) {
    var z6 = 1020 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 2.99 && z3 <= 3.01 && z4 >= 1008.99 && z5 <= 1152.01) {
    var z6 = 1032 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 3.99 && z3 <= 4.01 && z4 >= 1008.99 && z5 <= 1152.01) {
    var z6 = 1044 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 4.99 && z3 <= 5.01 && z4 >= 1008.99 && z5 <= 1152.01) {
    var z6 = 1056 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 5.99 && z3 <= 6.01 && z4 >= 1008.99 && z5 <= 1152.01) {
    var z6 = 1068 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 6.99 && z3 <= 7.01 && z4 >= 1008.99 && z5 <= 1152.01) {
    var z6 = 1080 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 7.99 && z3 <= 8.01 && z4 >= 1008.99 && z5 <= 1152.01) {
    var z6 = 1092 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 8.99 && z3 <= 9.01 && z4 >= 1008.99 && z5 <= 1152.01) {
    var z6 = 1104 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 9.99 && z3 <= 10.01 && z4 >= 1008.99 && z5 <= 1152.01) {
    var z6 = 1116 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 10.99 && z3 <= 11.01 && z4 >= 1008.99 && z5 <= 1152.01) {
    var z6 = 1128 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 11.99 && z3 <= 12.01 && z4 >= 1008.99 && z5 <= 1152.01) {
    var z6 = 1140 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 0.99 && z3 <= 1.01 && z4 >= 1152.99 && z5 <= 1296.01) {
    var z6 = 1152 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 1.99 && z3 <= 2.01 && z4 >= 1152.99 && z5 <= 1296.01) {
    var z6 = 1164 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 2.99 && z3 <= 3.01 && z4 >= 1152.99 && z5 <= 1296.01) {
    var z6 = 1176 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 3.99 && z3 <= 4.01 && z4 >= 1152.99 && z5 <= 1296.01) {
    var z6 = 1188 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 4.99 && z3 <= 5.01 && z4 >= 1152.99 && z5 <= 1296.01) {
    var z6 = 1200 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 5.99 && z3 <= 6.01 && z4 >= 1152.99 && z5 <= 1296.01) {
    var z6 = 1212 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 6.99 && z3 <= 7.01 && z4 >= 1152.99 && z5 <= 1296.01) {
    var z6 = 1224 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 7.99 && z3 <= 8.01 && z4 >= 1152.99 && z5 <= 1296.01) {
    var z6 = 1236 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 8.99 && z3 <= 9.01 && z4 >= 1152.99 && z5 <= 1296.01) {
    var z6 = 1248 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 9.99 && z3 <= 10.01 && z4 >= 1152.99 && z5 <= 1296.01) {
    var z6 = 1260 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 10.99 && z3 <= 11.01 && z4 >= 1152.99 && z5 <= 1296.01) {
    var z6 = 1272 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 11.99 && z3 <= 12.01 && z4 >= 1152.99 && z5 <= 1296.01) {
    var z6 = 1284 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 0.99 && z3 <= 1.01 && z4 >= 1296.99 && z5 <= 1440.01) {
    var z6 = 1296 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 1.99 && z3 <= 2.01 && z4 >= 1296.99 && z5 <= 1440.01) {
    var z6 = 1308 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 2.99 && z3 <= 3.01 && z4 >= 1296.99 && z5 <= 1440.01) {
    var z6 = 1320 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 3.99 && z3 <= 4.01 && z4 >= 1296.99 && z5 <= 1440.01) {
    var z6 = 1332 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 4.99 && z3 <= 5.01 && z4 >= 1296.99 && z5 <= 1440.01) {
    var z6 = 1344 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 5.99 && z3 <= 6.01 && z4 >= 1296.99 && z5 <= 1440.01) {
    var z6 = 1356 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 6.99 && z3 <= 7.01 && z4 >= 1296.99 && z5 <= 1440.01) {
    var z6 = 1368 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 7.99 && z3 <= 8.01 && z4 >= 1296.99 && z5 <= 1440.01) {
    var z6 = 1380 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 8.99 && z3 <= 9.01 && z4 >= 1296.99 && z5 <= 1440.01) {
    var z6 = 1392 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 9.99 && z3 <= 10.01 && z4 >= 1296.99 && z5 <= 1440.01) {
    var z6 = 1404 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 10.99 && z3 <= 11.01 && z4 >= 1296.99 && z5 <= 1440.01) {
    var z6 = 1416 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 11.99 && z3 <= 12.01 && z4 >= 1296.99 && z5 <= 1440.01) {
    var z6 = 1428 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 0.99 && z3 <= 1.01 && z4 >= 1440.99 && z5 <= 1584.01) {
    var z6 = 1440 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 1.99 && z3 <= 2.01 && z4 >= 1440.99 && z5 <= 1584.01) {
    var z6 = 1452 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 2.99 && z3 <= 3.01 && z4 >= 1440.99 && z5 <= 1584.01) {
    var z6 = 1464 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 3.99 && z3 <= 4.01 && z4 >= 1440.99 && z5 <= 1584.01) {
    var z6 = 1476 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 4.99 && z3 <= 5.01 && z4 >= 1440.99 && z5 <= 1584.01) {
    var z6 = 1488 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 5.99 && z3 <= 6.01 && z4 >= 1440.99 && z5 <= 1584.01) {
    var z6 = 1500 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 6.99 && z3 <= 7.01 && z4 >= 1440.99 && z5 <= 1584.01) {
    var z6 = 1512 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 7.99 && z3 <= 8.01 && z4 >= 1440.99 && z5 <= 1584.01) {
    var z6 = 1524 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 8.99 && z3 <= 9.01 && z4 >= 1440.99 && z5 <= 1584.01) {
    var z6 = 1536 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 9.99 && z3 <= 10.01 && z4 >= 1440.99 && z5 <= 1584.01) {
    var z6 = 1548 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 10.99 && z3 <= 11.01 && z4 >= 1440.99 && z5 <= 1584.01) {
    var z6 = 1560 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 11.99 && z3 <= 12.01 && z4 >= 1440.99 && z5 <= 1584.01) {
    var z6 = 1572 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 0.99 && z3 <= 1.01 && z4 >= 1584.99 && z5 <= 1728.01) {
    var z6 = 1584 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 1.99 && z3 <= 2.01 && z4 >= 1584.99 && z5 <= 1728.01) {
    var z6 = 1596 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 2.99 && z3 <= 3.01 && z4 >= 1584.99 && z5 <= 1728.01) {
    var z6 = 1608 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 3.99 && z3 <= 4.01 && z4 >= 1584.99 && z5 <= 1728.01) {
    var z6 = 1620 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 4.99 && z3 <= 5.01 && z4 >= 1584.99 && z5 <= 1728.01) {
    var z6 = 1632 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 5.99 && z3 <= 6.01 && z4 >= 1584.99 && z5 <= 1728.01) {
    var z6 = 1644 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 6.99 && z3 <= 7.01 && z4 >= 1584.99 && z5 <= 1728.01) {
    var z6 = 1656 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 7.99 && z3 <= 8.01 && z4 >= 1584.99 && z5 <= 1728.01) {
    var z6 = 1668 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 8.99 && z3 <= 9.01 && z4 >= 1584.99 && z5 <= 1728.01) {
    var z6 = 1680 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 9.99 && z3 <= 10.01 && z4 >= 1584.99 && z5 <= 1728.01) {
    var z6 = 1692 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 10.99 && z3 <= 11.01 && z4 >= 1584.99 && z5 <= 1728.01) {
    var z6 = 1704 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else if (z3 >= 11.99 && z3 <= 12.01 && z4 >= 1584.99 && z5 <= 1728.01) {
    var z6 = 1716 + +z8;
    var z7 = +z6 + +z2 - +z1;
  } else {
  var z6 = 0;
  var z7 = 0;
  }


  z1El.value = Math.round(z1);
  z2El.value = Math.round(z2);
  z3El.value = Math.round(z3);
  z4El.value = Math.round(z4);
  z5El.value = Math.round(z5);
  z6El.value = Math.round(z6);
  z7El.value = Math.round(z7);
  z8El.value = Math.round(z8);

}


/* mixed scheme  */
tot1El.addEventListener('input', calcmix);
tot2El.addEventListener('input', calcmix);

sxa1El.addEventListener('input', calcmix);
sxa2El.addEventListener('input', calcmix);
sxa3El.addEventListener('input', calcmix);
sxa4El.addEventListener('input', calcmix);


sh1El.addEventListener('input', calcmix);
sh2El.addEventListener('input', calcmix);
sh3El.addEventListener('input', calcmix);
sh4El.addEventListener('input', calcmix);
sh5El.addEventListener('input', calcmix);
sh6El.addEventListener('input', calcmix);
sh7El.addEventListener('input', calcmix);
sh8El.addEventListener('input', calcmix);


spx1El.addEventListener('input', calcmix);
spx2El.addEventListener('input', calcmix);
spx3El.addEventListener('input', calcmix);
spx4El.addEventListener('input', calcmix);
spx5El.addEventListener('input', calcmix);
spx6El.addEventListener('input', calcmix);
spx7El.addEventListener('input', calcmix);
spx8El.addEventListener('input', calcmix);


sxb1El.addEventListener('input', calcmix);
sxb2El.addEventListener('input', calcmix);
sxb3El.addEventListener('input', calcmix);
sxb4El.addEventListener('input', calcmix);

sd1El.addEventListener('input', calcmix);
sd2El.addEventListener('input', calcmix);
sd3El.addEventListener('input', calcmix);
sd4El.addEventListener('input', calcmix);

/* simple bottom scheme  */
tot4El.addEventListener('input', calcsimbot);
tot5El.addEventListener('input', calcsimbot);

axa1El.addEventListener('input', calcsimbot);
axa2El.addEventListener('input', calcsimbot);
axa3El.addEventListener('input', calcsimbot);
axa4El.addEventListener('input', calcsimbot);

ah1El.addEventListener('input', calcsimbot);
ah2El.addEventListener('input', calcsimbot);
ah3El.addEventListener('input', calcsimbot);
ah4El.addEventListener('input', calcsimbot);
ah5El.addEventListener('input', calcsimbot);
ah6El.addEventListener('input', calcsimbot);

axb1El.addEventListener('input', calcsimbot);
axb2El.addEventListener('input', calcsimbot);
axb3El.addEventListener('input', calcsimbot);
axb4El.addEventListener('input', calcsimbot);

ad1El.addEventListener('input', calcsimbot);
ad2El.addEventListener('input', calcsimbot);

/* upper bottom scheme  */
tot6El.addEventListener('input', calcsimupp);
tot7El.addEventListener('input', calcsimupp);

bxa1El.addEventListener('input', calcsimupp);
bxa2El.addEventListener('input', calcsimupp);
bxa3El.addEventListener('input', calcsimupp);
bxa4El.addEventListener('input', calcsimupp);

bh1El.addEventListener('input', calcsimupp);
bh2El.addEventListener('input', calcsimupp);
bh3El.addEventListener('input', calcsimupp);
bh4El.addEventListener('input', calcsimupp);
bh5El.addEventListener('input', calcsimupp);
bh6El.addEventListener('input', calcsimupp);

bxb1El.addEventListener('input', calcsimupp);
bxb2El.addEventListener('input', calcsimupp);
bxb3El.addEventListener('input', calcsimupp);
bxb4El.addEventListener('input', calcsimupp);

bd1El.addEventListener('input', calcsimupp);
bd2El.addEventListener('input', calcsimupp);


/* count verification */
tot3El.addEventListener('input', calcver);

f1El.addEventListener('input', calcver);
f2El.addEventListener('input', calcver);
f3El.addEventListener('input', calcver);
f4El.addEventListener('input', calcver);
f5El.addEventListener('input', calcver);
f6El.addEventListener('input', calcver);
f7El.addEventListener('input', calcver);
f8El.addEventListener('input', calcver);
f9El.addEventListener('input', calcver);
f10El.addEventListener('input', calcver);
f11El.addEventListener('input', calcver);
f12El.addEventListener('input', calcver);

c1El.addEventListener('input', calcver);
c2El.addEventListener('input', calcver);
c3El.addEventListener('input', calcver);
c4El.addEventListener('input', calcver);
c5El.addEventListener('input', calcver);
c6El.addEventListener('input', calcver);
c7El.addEventListener('input', calcver);
c8El.addEventListener('input', calcver);
c9El.addEventListener('input', calcver);
c10El.addEventListener('input', calcver);
c11El.addEventListener('input', calcver);
c12El.addEventListener('input', calcver);
c13El.addEventListener('input', calcver);
c14El.addEventListener('input', calcver);
c15El.addEventListener('input', calcver);
c16El.addEventListener('input', calcver);
c17El.addEventListener('input', calcver);
c18El.addEventListener('input', calcver);
c19El.addEventListener('input', calcver);
c20El.addEventListener('input', calcver);
c21El.addEventListener('input', calcver);
c22El.addEventListener('input', calcver);
c23El.addEventListener('input', calcver);
c24El.addEventListener('input', calcver);


/* calc positioning */
z1El.addEventListener('input', calcpos);
z2El.addEventListener('input', calcpos);
z3El.addEventListener('input', calcpos);
z4El.addEventListener('input', calcpos);
z5El.addEventListener('input', calcpos);
z6El.addEventListener('input', calcpos);
z7El.addEventListener('input', calcpos);
z8El.addEventListener('input', calcpos);




}
