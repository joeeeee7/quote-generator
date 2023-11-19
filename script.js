'use strict';

//variable
let quote = document.querySelector('.quote');
let person = document.querySelector('.person')
let btnElement = document.querySelector('#add-quote')


const clickQuote = [{
    quote: `The only way to do great work is to love what you do.`,
    person: `Steve Jobs`
},{
    quote: `In three words I can sum up everything I've learned about life: it goes on`,
    person:  `Robert Frost`
},{
    quote: `Success is not final, failure is not fatal: It is the courage to continue that counts.`,
    person:  `Winston S. Churchill`
},{
    quote: `The only limit to our realization of tomorrow will be our doubts of today.`,
    person:  `Franklin D. Roosevelt`
},{
    quote: `Do not wait to strike till the iron is hot, but make it hot by striking.`,
    person:  `William Butler Yeats`
},{
    quote: `The best way to predict the future is to create it.`,
    person:  `Peter Drucker`
}]

btnElement.addEventListener('click', function() {

    let random = Math.floor(Math.random() * clickQuote.length);

    quote.innerText = clickQuote[random].quote;
    person.innerText = clickQuote[random].person;

})



