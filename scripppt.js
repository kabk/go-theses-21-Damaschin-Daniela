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




   //Dynamic landing page
   let tl = anime.timeline({
   });
   tl.add({
    targets: '#partl',
    duration: 1000,
    opacity: 1,
    translateX: ['50vw', 0],
    delay: 0,
    easing: 'easeInOutQuart',
}).add({
 targets: '#parbl',
 duration: 1000,
 opacity: 1,
 translateX: ['50vw', 0],
 delay: -1000,
 easing: 'easeInOutQuart',
}).add({
 targets: '#partr',
 duration: 1000,
 opacity: 1,
 translateX: ['-50vw', 0],
 delay: -1000,
 easing: 'easeInOutQuart',
}).add({
targets: '#parbr',
duration: 1000,
opacity: 1,
translateX: ['-50vw', 0],
delay: -1000,
easing: 'easeInOutQuart',
}).add({
targets: '.wrap',
duration: 1500,
opacity: 1,
paddingTop: 0,
delay: 0,
easing: 'easeInOutQuart',
}).add({
targets: '.par',
duration: 0,
opacity: 0,
paddingTop: 0,
delay: 1000,
easing: 'easeInOutQuart',
})
