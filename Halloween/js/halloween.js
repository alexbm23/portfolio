/**************************/
/* js functions for halloween exercise*/
/*Autor: Alejandro Barnestein Martos */
/*date: november 2023*/
/*comment: my first exercise with java script functions */
/************************* */

function show(element){
    document.getElementById(element).style.visibility="visible";
}

function hide (element){
    document.getElementById(element).style.visibility="hidden";
    
}

function sound (element){
    document.getElementById(element).play();
}

function silence (element){
    document.getElementById(element).pause();
}