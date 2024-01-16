//variables
let am = document.getElementById("about_me");
let ed = document.getElementById("education");
let sk = document.getElementById("skills");
let ms = document.getElementById("my_strenghts");
let fl = document.getElementById("foreign_languages");
let it = document.getElementById("interests");
let main = document.querySelector("main");

let content = document.querySelector("main>section");

let back = document.querySelectorAll("div > img");

//event listeners
am.addEventListener("click", function(){
    am.style = "width:85%; height:100px; justify-content:center; flex-direction:column; margin-top:0;";
    content.style.display = "flex";
    ed.style.display = "none", sk.style.display = "none", ms.style.display="none", fl.style.display="none", it.style.display = "none";
    
    content.innerHTML = "I am a student at Zespół Szkół Komunikacji in Poznań,<br>"
    +"where I study computer science by gaining theoretical as well as practical knowledge.<br>"
    +""
    +"I am hopeful to be an accomplished programmer someday.";
});

ed.addEventListener("click", function(){
    ed.style = "width:85%; height:100px; justify-content:center; flex-direction:column; margin-top:0;";
    content.style.display = "flex";
    am.style.display = "none", sk.style.display = "none", ms.style.display="none", fl.style.display="none", it.style.display = "none";
    
    content.innerHTML = "I am a student at Zespół Szkół Komunikacji in Poznań,<br>"
    +"where I study computer science by gaining theoretical as well as practical knowledge.<br>"
    +""
    +"I am hopeful to be an accomplished programmer someday.";
});

sk.addEventListener("click", function(){
    sk.style = "width:85%; height:100px; justify-content:center; flex-direction:column; margin-top:0;";
    content.style.display = "flex";
    am.style.display = "none", ed.style.display = "none", ms.style.display="none", fl.style.display="none", it.style.display = "none";
    
    content.innerHTML = "I am a student at Zespół Szkół Komunikacji in Poznań,<br>"
    +"where I study computer science by gaining theoretical as well as practical knowledge.<br>"
    +""
    +"I am hopeful to be an accomplished programmer someday.";
});

ms.addEventListener("click", function(){
    ms.style = "width:85%; height:100px; justify-content:center; flex-direction:column; margin-top:0;";
    content.style.display = "flex";
    ed.style.display = "none", sk.style.display = "none", am.style.display="none", fl.style.display="none", it.style.display = "none";
    
    content.innerHTML = "I am a student at Zespół Szkół Komunikacji in Poznań,<br>"
    +"where I study computer science by gaining theoretical as well as practical knowledge.<br>"
    +""
    +"I am hopeful to be an accomplished programmer someday.";
});

fl.addEventListener("click", function(){
    fl.style = "width:85%; height:100px; justify-content:center; flex-direction:column; margin-top:0;";
    content.style.display = "flex";
    ed.style.display = "none", sk.style.display = "none", ms.style.display="none", am.style.display="none", it.style.display = "none";
    
    content.innerHTML = "I am a student at Zespół Szkół Komunikacji in Poznań,<br>"
    +"where I study computer science by gaining theoretical as well as practical knowledge.<br>"
    +""
    +"I am hopeful to be an accomplished programmer someday.";
});

it.addEventListener("click", function(){
    it.style = "width:85%; height:100px; justify-content:center; flex-direction:column; margin-top:0;";
    content.style.display = "flex";
    ed.style.display = "none", sk.style.display = "none", ms.style.display="none", fl.style.display="none", am.style.display = "none";
    
    content.innerHTML = "I am a student at Zespół Szkół Komunikacji in Poznań,<br>"
    +"where I study computer science by gaining theoretical as well as practical knowledge.<br>"
    +""
    +"I am hopeful to be an accomplished programmer someday.";
});

for(var i = 0; i < back.length; i++) {
    back[i].addEventListener("click", function(){
        window.location.href = "index.html";
    });
}