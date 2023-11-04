let div=document.querySelectorAll('div');
let navLinks=document.querySelectorAll('div nav a');
 window.onscroll=()=>{
    div.forEach(sec=>{
let top=window.scrollY;
let offset=sec.offsetTop - 150;
let height =sec.offsetHeight;
let id=sec.getAttribute('id')
if(top>=offset && top < offset + height){
    navLinks.forEach(links=>{
        links.classList.remover('active')
        document.querySelector(`div nav a[href*=` + id + `]`).classList.add('active')
    })
}
 })
}



ScrollReveal({     
    reset: true ,
delay:100,
duration:2000,
distance:'300px'});
    
ScrollReveal().reveal('.intro,.contacthead',{origin:'top'});
ScrollReveal().reveal('.mainimg',{origin:'bottom'});
ScrollReveal().reveal('h5,h1',{origin:'left'});
ScrollReveal().reveal('h3,h2',{origin:'right'});


async function send(){
    let name=document.querySelector('#username').value;
    let phone=document.querySelector('#userphone').value;
    let sub=document.querySelector('#msgsub').value;
    let msg=document.getElementById('msg').value
    console.log(msg,name,phone,sub);
    

    
    let res=await fetch('http://localhost:3000/message',{
        method: 'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({
            name,phone,sub,msg
        })
    })
    let data=await res.json()
}


