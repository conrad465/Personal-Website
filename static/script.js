var vooga = "VoogaSalad: Myself and nine other students wrote a massive game authoring engine with JavaFX."+
" Utilizing several design patterns and advanced Java concepts, we implemented this 40,000 line application over the course of 3 months. " +
"Working on a project of this scope, refined my Agile and people skills as well as my ability to integrate code components. Though completing this project was satisfying, " +
"I am most proud that I earned a perfect group member evaluation from my team.";
var idc = "Interdisciplinary Design Challenge: Using arduino and sensory hardware, myself and a team of two other students built an autonomous, networked robot. Over two months," +
"we completed the entire design process from trade study to iteration to evaluation. I deeply enjoyed debugging my own teams issues and even assisting other groups in design and development"+
", and being able to win the challenge for the class of 2020 was deeply satisfying";
var learner = "Game Learner: A personal experiment, I implemented my own neural net and trained it to play games using an evolutionary process and partner learning.";
var district = "Election Predictor: Based on existing research, this capstone project seeks to verify that demographic information can be used to accurately predict election"+
" outcomes via machine learning. I scraped and cleaned census data to train several discrete classification algorithms to make predictions on congressional elections.";
var hover = false;
var messages = [vooga, idc, learner, district];
var carousel = document.querySelector("#carcon");
var desc = document.querySelector(".description");
var active = 0;
var dict = {"p0":0, "p1":1, "p2":2, "p3":3};
var proj_tab = document.querySelector("#project-tab");
var skills_tab = document.querySelector("#skills-tab");
var about_tab =document.querySelector("#about-tab");
var skills = document.querySelector("#s");
var page = document.querySelector(".main")
function escape(){
    caroff();
    soff();
    document.querySelectorAll('.blurb-hover').forEach(function(node) {
            node.className = "blurb";
    });
}

function make_visible(node) {
    escape();
    node.className = "blurb-hover";
} 


function keyUp(e){
	var h = document.querySelector(".carousel-item.active");
	id = h.id;
	desc.textContent = messages[dict[id]];
	active = dict[id];
}


document.onkeyup = function (e) {
	setTimeout(function(){keyUp(e)}, 600);
  };




function toggle(dir) {
  if(dir == "right")
  	active++;
  if(dir == "left")
  	active--;
  if(active<0)
  	active = messages.length - 1;
  if(active> messages.length - 1)
  	active = 0;
  desc.textContent = messages[active];
}


skills_tab.onmouseenter = function(){
    make_visible(skills_tab);
    hover = true;
    son();
};

skills_tab.onmouseleave = function(){
    escape();
    hover = false;
};

skills_tab.onmousedown = function(e) {
    make_visible(skills_tab);
    son();
};

proj_tab.onmouseenter = function(){
    make_visible(proj_tab);
    hover = true;
    caron();
};

proj_tab.onmousedown = function(e) {
    make_visible(proj_tab);
    caron();
};


proj_tab.onmouseleave = function(){
    escape();
    hover = false;
};

about_tab.onmouseenter = function(){
    make_visible(about_tab);
    hover = true;
};

about_tab.onmousedown = function(e) {
    make_visible(about_tab);
};

about_tab.onmouseleave = function(){
    escape();
    hover = false;
};


page.onmousedown = function(e){
    if (!hover){
    	escape();
	}
};


function caroff(){
	carousel.className = "invis";
}

function caron(){
	carousel.className = "carousel-container";
	keyUp("");
}

function soff(){
	skills.className = "invis";
}

function son(){

	skills.className = "sub-blurb";
}



