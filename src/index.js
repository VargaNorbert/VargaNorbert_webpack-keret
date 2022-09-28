import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

function init(){


    document.getElementById('url').addEventListener('change',url);
    document.getElementById('szelesseg').addEventListener('input',szelesseg)
    document.getElementById('vastagsag').addEventListener('input',vastagsag)
    document.getElementById('szin').addEventListener('input',szin)
    document.getElementById('gomb').addEventListener('click',katt)
}

function url(){
    document.getElementById('kep').src=document.getElementById('url').value; 
}

function szelesseg(){
    
    document.getElementById('kep').width = document.getElementById('szelesseg').value;
    //console.log(document.getElementById('szelesseg').value);
}

function vastagsag(){

    document.getElementById('kep').border=document.getElementById('vastagsag').value;
}

function szin(){
    document.getElementById('kep').style.borderColor=document.getElementById('szin').value;
}

function katt(){
    var element = document.getElementById('gomb');
    document.body.classList.toggle('dark-mode');
}

document.addEventListener('DOMContentLoaded',init);

