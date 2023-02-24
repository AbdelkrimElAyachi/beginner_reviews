let reviews = [
    {
        id:1,
        name:"you",
        job:"unkown",
        img:"you.jpg",
        text:"someone i dont know maybe i will meet you or know who you are in the future but at this moment i dont know anything about you nor your personality or your skills \n\ndon't trust anything i say "
    },
    {
        id:2,
        name:"donald trump",
        job:"business man",
        img:"trump.jpg",
        text:"he was in a time the leader of one of the great countries in the world he is a billionaire he is weird if you are a left person he is someone you hate i you are a right person he is someone you hate if you are not lefty or right you enjoy watching him\n\n don't trust anything i say"
    },
    {
        id:3,
        name:"putin",
        job:"monster",
        img:"putin.webp",
        text:"someone who know how to cook fight leads a country and kill,\n you dont wanna face master putin believe me\n\ndon't trust anythin i say "
    },
]


let person_image = document.getElementById('person_image');
let person_name = document.getElementById('person_name');
let person_job = document.getElementById('job');
let person_info = document.getElementById('info');

let current_item = 0;

person_image.src = reviews[0].img;
person_name.innerText=reviews[0].name;
person_job.innerText=reviews[0].job;
person_info.innerText=reviews[0].text;


function increase(){
    
    current_item++;
    if(current_item>reviews.length-1){
        current_item=0;
    }
    
    person_image.src = reviews[current_item].img;
    person_name.innerText=reviews[current_item].name;
    person_job.innerText=reviews[current_item].job;
    person_info.innerText=reviews[current_item].text;
}
function decrease(){
    
    current_item--;
    if(current_item<0){
        current_item=reviews.length-1;
    }
    
    person_image.src = reviews[current_item].img;
    person_name.innerText=reviews[current_item].name;
    person_job.innerText=reviews[current_item].job;
    person_info.innerText=reviews[current_item].text;
}
function random(){
    item_pre = current_item;
    while (item_pre === current_item){
        current_item = Math.floor(Math.random() * reviews.length );
    }

    person_image.src = reviews[current_item].img;
    person_name.innerText=reviews[current_item].name;
    person_job.innerText=reviews[current_item].job;
    person_info.innerText=reviews[current_item].text;
}




let src_new = "";

function Ajouter_personne(){
    document.querySelector('header').style.display = "none";
    document.querySelector('section').style.display = "none";
    document.querySelector('.new_personne').style.display= "block";

    document.getElementById("new_person_image").addEventListener('change',function(){

        const reader = new FileReader();
    
        reader.addEventListener("load" ,() => {
            src_new = reader.result;
   
        })
    
        reader.readAsDataURL(this.files[0]);
    });


}



function ajouter_personne(){
    let new_person = {};
    new_person.id = reviews.length+1;
    new_person.name = document.getElementById("new_person_name").value;
    new_person.job = document.getElementById("new_job").value;
    new_person.img = src_new;
    new_person.text = document.getElementById("new_info").value;
    
    
    
    
    console.log(new_person);
    if(new_person.img != "" && new_person.job!="" && new_person.name !="" && new_person.text != ""){
        reviews.push(new_person)
    }
    else{
        alert("you need to enter all the ements before submitting the review")
    }
    console.log(reviews);


    document.querySelector('header').style.display = "block";
    document.querySelector('section').style.display = "block";
    document.querySelector('.new_personne').style.display= "none";




}
