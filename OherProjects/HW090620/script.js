const bd= [
  {
    url: "https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg",

  },
  {
    url: "https://pbs.twimg.com/profile_images/378800000710852544/d8832a4e3301975477be73152ca29920_400x400.jpeg",

  },
  {
    url: "http://www.factroom.ru/wp-content/uploads/2015/09/732.jpg",

  },
  {
    url: "http://www.factroom.ru/wp-content/uploads/2015/09/1026.jpg",

  }
];
let flagActive = 0;


for(let i in bd){
  $('ul').append(`<li data-ulslider="${i}"></li>`)
}
$('li').on('click',(e)=>{
  let act = e.target.getAttribute("data-ulslider");
  if(flagActive < act ){
    let activ = $(".active");
    let next = $(".next");
    let prev =  $(".prev");
    activ.removeClass("active");
    activ.addClass("next");
    next.removeClass("next");
    next.addClass("prev");
    prev.removeClass("prev");
    prev.addClass("active");
    flagActive = parseInt(act);
    $('.active img').attr('src', bd[flagActive].url);
  }
  else if(flagActive > act ){
    let activ = $(".active");
    let next = $(".next");
    let prev =  $(".prev");
    activ.removeClass("active");
    activ.addClass("prev");
    next.removeClass("next");
    next.addClass("active");
    prev.removeClass("prev");
    prev.addClass("next");
      flagActive = parseInt(act);
      $('.active img').attr('src', bd[flagActive].url);
    }
})
document.getElementById('prev_a').addEventListener('click', ()=>{


    let activ = $(".active");
    let next = $(".next");
    let prev =  $(".prev");
    activ.removeClass("active");
    activ.addClass("next");
    next.removeClass("next");
    next.addClass("prev");
    prev.removeClass("prev");
    prev.addClass("active");

        activBD(-1);

})
document.getElementById('next_a').addEventListener('click', ()=>{


    let activ = $(".active");
    let next = $(".next");
    let prev =  $(".prev");
    activ.removeClass("active");
    activ.addClass("prev");
    next.removeClass("next");
    next.addClass("active");
    prev.removeClass("prev");
    prev.addClass("next");

        activBD(1);


})

activBD = (n) => {
  flagActive= flagActive + n;
  if(flagActive<0){
    flagActive = bd.length -1;
  }
  else if(flagActive > bd.length -1){
    flagActive = 0;
  }
  $('.active img').attr('src', bd[flagActive].url);
}

let first_a=document.getElementById('first_a')
let last_a=document.getElementById('last_a')
function firsta() {
    flagActive=0
    $('.active img').attr('src', bd[flagActive].url);

}
function lasta() {
    $('.active img').attr('src', bd[3].url);
}
first_a.addEventListener('click',firsta)
last_a.addEventListener('click',lasta);

let open=document.getElementById('fullscr');
function f() {
    $('.img').toggleClass("fullscreen")

}
open.addEventListener('click',f)



