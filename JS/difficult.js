"use strict"

let easyMode = document.getElementById('Easy');
let hardMode = document.getElementById('Hard');

easyMode.addEventListener('click',()=>
{
    localStorage.setItem('difficult','easy');
});

hardMode.addEventListener('click',()=>
{
    localStorage.setItem('difficult','hard');
});