//variables
let am = document.getElementById("about_me");
let ed = document.getElementById("education");
let sk = document.getElementById("skills");
let ms = document.getElementById("my_strenghts");
let fl = document.getElementById("foreign_languages");
let it = document.getElementById("interests");
let main = document.querySelector("main");

let content = document.querySelector("main>section");

//event listeners
am.addEventListener("click", function(){
    am.style = "width:85%; height:100px; justify-content:center; flex-direction:column; margin-top:0;";
    content.style.display = "flex";
    ed.style.display = "none", sk.style.display = "none", ms.style.display="none", fl.style.display="none", it.style.display = "none";
    
    content.innerHTML = "I am a student of Zespół Szkół Komunikacji in Poznań,<br>"
    +"where I study computer science by gaining theoretical as well as practical knowledge.<br>"
    +""
    +"I am hopeful to be an accomplished programmer someday.";
});

ed.addEventListener("click", function(){
    
});

sk.addEventListener("click", function(){
    
});

ms.addEventListener("click", function(){
    
});

fl.addEventListener("click", function(){
    
});

it.addEventListener("click", function(){
    
});