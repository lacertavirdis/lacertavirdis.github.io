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
    +"Cisco IT Essentials | 2024";
});

sk.addEventListener("click", function(){
    back[2].src="arrow.png";
    back[2].alt="arrow";
    sk.style = "width:85%; height:70px; justify-content:center; flex-direction:column; margin:0";
    content.style.display = "flex";
    content.style.width = "85%";
    am.style.display = "none", ed.style.display = "none", ms.style.display="none", fl.style.display="none", it.style.display = "none";
    
    content.innerHTML = "<ul><li><b>HTML</b> - creating a frame of a website</li>"
    +"<li><b>CSS</b> - styling websites with @keyframes and @media rule</li>"
    +"<li><b>JS (basic)</b> - adding functionality to the websites</li>"
    +"<li><b>PHP (basic)</b> - connecting to a database, writing queries and modifying the database</li>"
    +"<li><b>Laravel (basic)</b> - creating a website based on a project with the use of controllers, models, factories and migrations</li>"
    +"<li><b>C++ (basic)</b> - writing programs and a little bit of OOP</li>"
    +"<li><b>C# (basic)</b> - writing programs using classes, interfaces and inheritance</li>"
    +"<li><b>Python (basic)</b> - writing programs</li>"
    +"<li><b>SQL (intermediate)</b> - DDL, DML, DQL and DCL</li>"
    +"<li><b>VBA (basic)</b> - writing macros and functions</li>"
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
    
    content.innerHTML = "<ul>"
    +"<li>Skillful team work</li>"
    +"<li>Being a teamleader</li>"
    +"<li>Open-mindedness</li>"
    +"<li>Making connections very easily</li>"
    +"<li>Being well behaved and polite</li>"
    +"<li>Always striving for improvement</li>"
    +"</ul>"
    ;
});

fl.addEventListener("click", function(){
    back[4].src="arrow.png";
    back[4].alt="arrow";
    fl.style = "width:85%; height:100px; justify-content:center; flex-direction:column; margin-top:0;";
    content.style.display = "flex";
    content.style.fontSize = "250%";
    ed.style.display = "none", sk.style.display = "none", ms.style.display="none", am.style.display="none", it.style.display = "none";
    
    content.innerHTML = "Polish - native<br><br>English - C1<br><br>German - B1";
});

it.addEventListener("click", function(){
    back[5].src="arrow.png";
    back[5].alt="arrow";
    it.style = "width:85%; height:100px; justify-content:center; flex-direction:column; margin-top:-15px;";
    content.style.display = "flex";
    ed.style.display = "none", sk.style.display = "none", ms.style.display="none", fl.style.display="none", am.style.display = "none";
    
    content.innerHTML = "<ul>"
    +"<li>Music</li>"
    +"<li>Watching TV series (my favorites: Friends, TBBT, HIMYM, The Office)</li>"
    +"<li>Crocheting</li>"
    +"<li>Reading books (my favorites: And Then There Were None, The Bell Jar, The Handmaid's Tale)</li>"
    +"<li>Spending time with my friends and family</li>"
    +"<li>Learning languages</li>"
    +"</ul>"
    ;
});

for(var i = 0; i < back.length; i++) {
    back[i].addEventListener("click", function(){
        window.location.href = "index.html";
    });
}