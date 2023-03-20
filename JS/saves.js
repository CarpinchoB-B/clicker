"use strict";

let firstSlotSave = document.getElementById('save1');
let secondSlotSave = document.getElementById('save2');
let thirdSlotSave = document.getElementById('save3');

let firstSlotLoad = document.getElementById('load1');
let secondSlotLoad = document.getElementById('load2');
let thirdSlotLoad = document.getElementById('load3');

firstSlotSave.addEventListener('click',()=>
{
    localStorage.setItem('firstEnemyHealth',localStorage.getItem('currentEnemyHealth'));
    localStorage.setItem('firstMoney',localStorage.getItem('currentMoney'));
    localStorage.setItem('firstEnemy',localStorage.getItem('currentEnemy'));
    localStorage.setItem('firstWeakSword',localStorage.getItem('currentWeakSword'));
    localStorage.setItem('firstSword',localStorage.getItem('currentSword'));
    localStorage.setItem('firstStrongSword',localStorage.getItem('currentStrongSword'));
    localStorage.setItem('firstWeakAxe',localStorage.getItem('currentWeakAxe'));
    localStorage.setItem('firstWeakShield',localStorage.getItem('currentWeakShield'));
    localStorage.setItem('firstStrongShield',localStorage.getItem('currentStrongShield'));
    localStorage.setItem('firstStrongAxe',localStorage.getItem('currentStrongAxe'));
});

secondSlotSave.addEventListener('click',()=>
{
    localStorage.setItem('secondEnemyHealth',localStorage.getItem('currentEnemyHealth'));
    localStorage.setItem('secondMoney',localStorage.getItem('currentMoney'));
    localStorage.setItem('secondEnemy',localStorage.getItem('currentEnemy'));
    localStorage.setItem('secondWeakSword',localStorage.getItem('currentWeakSword'));
    localStorage.setItem('secondSword',localStorage.getItem('currentSword'));
    localStorage.setItem('secondStrongSword',localStorage.getItem('currentStrongSword'));
    localStorage.setItem('secondWeakAxe',localStorage.getItem('currentWeakAxe'));
    localStorage.setItem('secondWeakShield',localStorage.getItem('currentWeakShield'));
    localStorage.setItem('secondStrongShield',localStorage.getItem('currentStrongShield'));
    localStorage.setItem('secondStrongAxe',localStorage.getItem('currentStrongAxe'));
});

thirdSlotSave.addEventListener('click',()=>
{
    localStorage.setItem('thirdEnemyHealth',localStorage.getItem('currentEnemyHealth'));
    localStorage.setItem('thirdMoney',localStorage.getItem('currentMoney'));
    localStorage.setItem('thirdEnemy',localStorage.getItem('currentEnemy'));
    localStorage.setItem('thirdWeakSword',localStorage.getItem('currentWeakSword'));
    localStorage.setItem('thirdSword',localStorage.getItem('currentSword'));
    localStorage.setItem('thirdStrongSword',localStorage.getItem('currentStrongSword'));
    localStorage.setItem('thirdWeakAxe',localStorage.getItem('currentWeakAxe'));
    localStorage.setItem('thirdWeakShield',localStorage.getItem('currentWeakShield'));
    localStorage.setItem('thirdStrongShield',localStorage.getItem('currentStrongShield'));
    localStorage.setItem('thirdStrongAxe',localStorage.getItem('currentStrongAxe'));
});

firstSlotLoad.addEventListener('click',()=>
{
    localStorage.setItem('currentSave','First');
    localStorage.setItem('currentEnemyHealth',localStorage.getItem('firstEnemyHealth'));
    localStorage.setItem('currentMoney',localStorage.getItem('firstMoney'));
    localStorage.setItem('currentEnemy',localStorage.getItem('firstEnemy'));
    localStorage.setItem('currentWeakSword',localStorage.getItem('firstWeakSword'));
    localStorage.setItem('currentSword',localStorage.getItem('firstSword'));
    localStorage.setItem('currentStrongSword',localStorage.getItem('firstStrongSword'));
    localStorage.setItem('currentWeakAxe',localStorage.getItem('firstWeakAxe'));
    localStorage.setItem('currentWeakShield',localStorage.getItem('firstWeakShield'));
    localStorage.setItem('currentStrongShield',localStorage.getItem('firstStrongShield'));
    localStorage.setItem('currentStrongAxe',localStorage.getItem('firstStrongAxe'));
});

secondSlotLoad.addEventListener('click',()=>
{
    localStorage.setItem('currentSave','Second');
    localStorage.setItem('currentEnemyHealth',localStorage.getItem('secondEnemyHealth'));
    localStorage.setItem('currentMoney',localStorage.getItem('secondMoney'));
    localStorage.setItem('currentEnemy',localStorage.getItem('secondEnemy'));
    localStorage.setItem('currentWeakSword',localStorage.getItem('secondWeakSword'));
    localStorage.setItem('currentSword',localStorage.getItem('secondSword'));
    localStorage.setItem('currentStrongSword',localStorage.getItem('secondStrongSword'));
    localStorage.setItem('currentWeakAxe',localStorage.getItem('secondWeakAxe'));
    localStorage.setItem('currentWeakShield',localStorage.getItem('secondWeakShield'));
    localStorage.setItem('currentStrongShield',localStorage.getItem('secondStrongShield'));
    localStorage.setItem('currentStrongAxe',localStorage.getItem('secondStrongAxe'));
});

thirdSlotLoad.addEventListener('click',()=>
{
    localStorage.setItem('currentSave','Third');
    localStorage.setItem('currentEnemyHealth',localStorage.getItem('thirdEnemyHealth'));
    localStorage.setItem('currentMoney',localStorage.getItem('thirdMoney'));
    localStorage.setItem('currentEnemy',localStorage.getItem('thirdEnemy'));
    localStorage.setItem('currentWeakSword',localStorage.getItem('thirdWeakSword'));
    localStorage.setItem('currentSword',localStorage.getItem('thirdSword'));
    localStorage.setItem('currentStrongSword',localStorage.getItem('thirdStrongSword'));
    localStorage.setItem('currentWeakAxe',localStorage.getItem('thirdWeakAxe'));
    localStorage.setItem('currentWeakShield',localStorage.getItem('thirdWeakShield'));
    localStorage.setItem('currentStrongShield',localStorage.getItem('thirdStrongShield'));
    localStorage.setItem('currentStrongAxe',localStorage.getItem('thirdStrongAxe'));
});