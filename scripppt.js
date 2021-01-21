$(".container").on("scroll", function () {
       $(".container").scrollTop($(this).scrollTop());
   });
$(".container1").on("scroll", function () {
      $(".container1").scrollTop($(this).scrollTop());
  });
$(".container2").on("scroll", function () {
       $(".container2").scrollTop($(this).scrollTop());
   });
$(".container3").on("scroll", function () {
      $(".container3").scrollTop($(this).scrollTop());
  });
  //move parantheses onclick
  var PTL =  document.getElementById('partl');
  var PBL =  document.getElementById('parbl');
  var PTR =  document.getElementById('partr');
  var PBR =  document.getElementById('parbr');

  function BBRR() {
  PTL.style.left='98vw';
  PBL.style.left='90vw';
  PTR.style.left='192vw';
  PBR.style.left='182vw';

  PBL.style.top='30vh';
  PBR.style.top='30vh';

  PTL.classList.remove("pars");
  PBL.classList.remove("pars");
  PTR.classList.remove("pars");
  PBR.classList.remove("pars");
  PTL.classList.remove("parl");
  PBL.classList.remove("parl");
  PTR.classList.remove("parl");
  PBR.classList.remove("parl");
  PTL.classList.remove("par");
  PBL.classList.remove("par");
  PTR.classList.remove("par");
  PBR.classList.remove("par");

  PTL.classList.add("pars");
  PBL.classList.add("parl");
  PTR.classList.add("pars");
  PBR.classList.add("parl");
};
function LLAND() {
PTL.style.left='-7vw';
PBL.style.left='-7vw';
PTR.style.left='87vw';
PBR.style.left='87vw';

PBL.style.top='48vh';
PBR.style.top='48vh';

PTL.classList.remove("pars");
PBL.classList.remove("pars");
PTR.classList.remove("pars");
PBR.classList.remove("pars");
PTL.classList.remove("parl");
PBL.classList.remove("parl");
PTR.classList.remove("parl");
PBR.classList.remove("parl");
PTL.classList.remove("par");
PBL.classList.remove("par");
PTR.classList.remove("par");
PBR.classList.remove("par");

PTL.classList.add("par");
PBL.classList.add("par");
PTR.classList.add("par");
PBR.classList.add("par");
};

function AAMZ() {
PTL.style.left='198vw';
PBL.style.left='198vw';
PTR.style.left='290vw';
PBR.style.left='290vw';

PBL.style.top='48vh';
PBR.style.top='48vh';

PTL.classList.remove("pars");
PBL.classList.remove("pars");
PTR.classList.remove("pars");
PBR.classList.remove("pars");
PTL.classList.remove("parl");
PBL.classList.remove("parl");
PTR.classList.remove("parl");
PBR.classList.remove("parl");
PTL.classList.remove("par");
PBL.classList.remove("par");
PTR.classList.remove("par");
PBR.classList.remove("par");

PTL.classList.add("par");
PBL.classList.add("par");
PTR.classList.add("par");
PBR.classList.add("par");
};

function CCONC() {
PTL.style.left='290vw';
PBL.style.left='305vw';
PTR.style.left='390vw';
PBR.style.left='400vw';

PTL.style.top='-1vh';
PTR.style.top='-1vh';
PBL.style.top='63vh';
PBR.style.top='63vh';

PTL.classList.remove("pars");
PBL.classList.remove("pars");
PTR.classList.remove("pars");
PBR.classList.remove("pars");
PTL.classList.remove("parl");
PBL.classList.remove("parl");
PTR.classList.remove("parl");
PBR.classList.remove("parl");
PTL.classList.remove("par");
PBL.classList.remove("par");
PTR.classList.remove("par");
PBR.classList.remove("par");

PTL.classList.add("parl");
PBL.classList.add("pars");
PTR.classList.add("parl");
PBR.classList.add("pars");
};



   //Dynamic landing page
   let tl = anime.timeline({
   });
   tl.add({
    targets: '#partl',
    duration: 1000,
    opacity: 1,
    translateX: ['28vw', 0],
    delay: 0,
    easing: 'easeInOutQuart',
}).add({
 targets: '#parbl',
 duration: 1000,
 opacity: 1,
 translateX: ['28vw', 0],
 delay: -1000,
 easing: 'easeInOutQuart',
}).add({
 targets: '#partr',
 duration: 1000,
 opacity: 1,
 translateX: ['-28vw', 0],
 delay: -1000,
 easing: 'easeInOutQuart',
}).add({
targets: '#parbr',
duration: 1000,
opacity: 1,
translateX: ['-28vw', 0],
delay: -1000,
easing: 'easeInOutQuart',
}).add({
targets: '.wrap',
duration: 1500,
opacity: 1,
paddingTop: 0,
delay: 0,
easing: 'easeInOutQuart',
})
