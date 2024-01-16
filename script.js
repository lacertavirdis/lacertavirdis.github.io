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
    back[0].src="arrow.png";
    back[0].alt="arrow";
    am.style = "width:85%; height:100px; justify-content:center; flex-direction:column; margin-top:0;";
    content.style.display = "flex";
    ed.style.display = "none", sk.style.display = "none", ms.style.display="none", fl.style.display="none", it.style.display = "none";
    
    content.innerHTML = "I am a 16-year-old student at Zespół Szkół Komunikacji in Poznań, "
    +"where I study computer science by gaining theoretical as well as practical knowledge. "
    +"I not only know how to create and style websites and connect them to a database, "
    +"but also how to write programs for solving problems. "
    +"Currently I'm educating myself about networking and the hardware part of computers. "
    +"I am hopeful to be an accomplished programmer someday."
    ;
});

ed.addEventListener("click", function(){
    back[1].src="arrow.png";
    back[1].alt="arrow";
    ed.style = "width:85%; height:100px; justify-content:center; flex-direction:column; margin-top:0;";
    content.style.display = "flex";
    content.style.fontSize = "175%";
    am.style.display = "none", sk.style.display = "none", ms.style.display="none", fl.style.display="none", it.style.display = "none";
    
    content.innerHTML = "Zespół Szkół Komunikacji im. Hipolita Cegielskiego w Poznaniu | 2021 - now<br><br>"
    +"Szkoła Podstawowa nr 1 w Mosinie | 2013 - 2021";
});

sk.addEventListener("click", function(){
    back[2].src="arrow.png";
    back[2].alt="arrow";
    sk.style = "width:85%; height:75px; justify-content:center; flex-direction:column; margin-top:0;";
    content.style.display = "flex";
    content.style.width = "85%";
    am.style.display = "none", ed.style.display = "none", ms.style.display="none", fl.style.display="none", it.style.display = "none";
    
    content.innerHTML = "<ul><li>HTML- creating a frame of a website</li>"
    +"<li>CSS - styling websites with @keyframes and @media rule</li>"
    +"<li>JS (basic, i want to improve it) - adding functionality to the websites</li>"
    +"<li>PHP (basic, i want to improve it) - connecting to a database, writing queries and modifying the database</li>"
    +"<li>Laravel (basic, i want to improve it) - creating a website based on a project with the use of controllers, models, factories and migrations</li>"
    +"<li>C++ (basic) - writing programs and a little bit of OOP</li>"
    +"<li>C# (basic, currently improving) - writing programs using classes, interfaces and inheritance</li>"
    +"<li>Python - (basic, currently improving) - writing programs</li>"
    +"<li>SQL (intermediate, currently improving) - DDL, DML, DQL and DCL</li>"
    +"<li>VBA (basic) - writing macros and functions</li>"
    +"</ul>"
    ;
});

ms.addEventListener("click", function(){
    back[3].src="arrow.png";
    back[3].alt="arrow";
    ms.style = "width:85%; height:100px; justify-content:center; flex-direction:column; margin-top:-20px;";
    content.style.display = "flex";
    content.style.fontSize = "145%";
    ed.style.display = "none", sk.style.display = "none", am.style.display="none", fl.style.display="none", it.style.display = "none";
    
    content.innerHTML = "Thanks to the exchanges I had been a part of, I work great in a team. "
    +"More often than not, I tend to take on a role of the teamleader and delegate the work among the team members. "
    +"People say that I am an open-minded person and kind to everyone in my community, I believe that's true. "
    +"I make connections very easily and everywhere I go, I always meet someone new and I get to know them very well in a little time. "
    +"Nowadays, It is not common to know someone who is well behaved and polite, but I am that person. "
    +"For last, I always strive for improvement, whether it's programming or my hobbies, I like to try and be the best version of myself that I can be. "
    ;
});

fl.addEventListener("click", function(){
    back[4].src="arrow.png";
    back[4].alt="arrow";
    fl.style = "width:85%; height:100px; justify-content:center; flex-direction:column; margin-top:0;";
    content.style.display = "flex";
    content.style.fontSize = "250%";
    ed.style.display = "none", sk.style.display = "none", ms.style.display="none", am.style.display="none", it.style.display = "none";
    
    content.innerHTML = "Polish - native<br><br>English - C1<br><br>German - A2+/B1";
});

it.addEventListener("click", function(){
    back[5].src="arrow.png";
    back[5].alt="arrow";
    it.style = "width:85%; height:100px; justify-content:center; flex-direction:column; margin-top:-15px;";
    content.style.display = "flex";
    ed.style.display = "none", sk.style.display = "none", ms.style.display="none", fl.style.display="none", am.style.display = "none";
    
    content.innerHTML = "Since I can remember I have always been interested in music. I've played the piano for several years, "
    +"I listen to music every single second I can and two years ago i started playing the guitar which is going really well, "
    +"considering the fact that I'm a selt-taught. In my free time I also like to watch TV series, my favorite is Friends, "
    +"The Big Bang Theory, How I Met Your Mother and The Office. A year ago I discovered my passion for crocheting. "
    +"When I need a break from reality I like to cuddle up with a book and sink into the story, my favorite books include "
    +"The Island of Missing Trees, And Then There Were None, The Bell Jar, The Handmaid's Tale and The Little Prince."
    ;
});

for(var i = 0; i < back.length; i++) {
    back[i].addEventListener("click", function(){
        window.location.href = "index.html";
    });
}