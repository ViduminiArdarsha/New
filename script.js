function Time(){
    let message=document.getElementById("msg");
    const time= new Date().getHours();

    if(time<12){
      message.innerHTML="Good Morning!";
    }else if(time>=12 && time<15){
      message.innerHTML='Good Afternoon!';

    }else if(time>=15&& time<18){
      message.innerHTML="Good Evening!";
    }else{
      message.innerHTML="Good Night!"
    }    
  }
  Time();

const toggleSwitch = document.getElementById('toggleSwich');
const icon=document.querySelector('i');

const morningMsg = document.querySelector('h2');
const welcome = document.querySelector('h4');
const heading = document.querySelector('h1');
const para = document.querySelector('p');
const input=document.querySelector('.form-control');
const card=document.querySelectorAll('.card-body');
const cardTitle=document.querySelectorAll('.card-title');
const cardContent=document.querySelectorAll('.card-text');

const body = document.body;

toggleSwitch.addEventListener('click',function(){

  if (body.classList.contains('bg-white')) {

    body.classList.replace('bg-white', 'bg-dark');
    
    morningMsg.classList.replace('text-danger', 'text-white');
    welcome.classList.replace('text-secondary', 'text-light');
    heading.classList.replace('text-danger', 'text-white');
    para.classList.replace('text-secondary', 'text-light');

    input.classList.replace('bg-white', 'bg-dark');
    input.classList.replace('text-dark', 'text-light');

    for(let i=0; i<card.length;i++){
      card[i].classList.replace('bg-white','bg-dark');
    }
    for(let i=0; i<card.length;i++){
      cardTitle[i].classList.replace('text-dark','text-white');
    }
    for(let i=0; i<card.length;i++){
      cardContent[i].classList.replace('text-secondary','text-light');
    }
    
    
    icon.classList.replace('bi-moon','bi-brightness-high');

  } else {
    body.classList.replace('bg-dark', 'bg-white');
  
    morningMsg.classList.replace('text-white', 'text-danger');
    welcome.classList.replace('text-light', 'text-secondary');
    heading.classList.replace('text-white', 'text-danger');
    para.classList.replace('text-light', 'text-secondary');

    input.classList.replace('bg-dark', 'bg-white');
    input.classList.replace('text-light', 'text-dark');

    for(let i=0; i<card.length;i++){
      card[i].classList.replace('bg-dark','bg-white');
    }
    for(let i=0; i<card.length;i++){
      cardTitle[i].classList.replace('text-white','text-dark');
    }
    for(let i=0; i<card.length;i++){
      cardContent[i].classList.replace('text-light','text-secondary');
    }

     icon.classList.replace('bi-brightness-high','bi-moon');
  }
})

  