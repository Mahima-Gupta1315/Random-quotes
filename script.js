const quotes = [
{
	quote:'First, solve the problem. Then, write the code. ',
	author: '– John Johnson ' 
},

{
	quote:'Experience is the name everyone gives to their mistakes.',
	author: ' – Oscar Wilde ' 
},

{
	quote:'In order to be irreplaceable, one must always be different ',
	author: '– Coco Chanel ' 
},

{
	quote:'Java is to JavaScript what car is to Carpet. ',
	author: ' – Chris Heilmann ' 
},

{
	quote:' Knowledge is power.',
	author: '– Francis Bacon ' 
},

{
	quote:'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.  ',
	author: '– Dan Salomon ' 
},

{
	quote:'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.  ',
	author: '– Antoine de Saint-Exupery ' 
},

{
	quote:'Ruby is rubbish! PHP is phpantastic!  ',
	author: '– Nikita Popov ' 
},

{
	quote:' Code is like humor. When you have to explain it, it’s bad.',
	author: '– Cory House ' 
},

{
	quote:'Optimism is an occupational hazard of programming: feedback is the treatment.  ',
	author: '- Kent Beck ' 
},
]


const quotm =[
{
	quot:'The purpose of our lives is to be happy.',
	autho:' — Dalai Lama'
},

{
	quot:'Life is what happens when you’re busy making other plans.',
	autho:' — John Lennon'
},

{
	quot:'Get busy living or get busy dying. ',
	autho:'— Stephen King'
},

{
	quot:'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
	autho:'– Thomas A. Edison'
},

{
	quot:'If you want to live a happy life, tie it to a goal, not to people or things.',
	autho:'– Albert Einstein'
},

{
	quot:'Never let the fear of striking out keep you from playing the game.',
	autho:'– Babe Ruth'
},

{
	quot:'Money and success don’t change people; they merely amplify what is already there. ',
	autho:'— Will Smith'
},

{
	quot:' Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking. ',
	autho:' – Steve Jobs'
},

]
 
const quoteBtn = document.getElementById('quote-btn');

// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');


quoteBtn.addEventListener("click", () => {

    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})

const quoteBt = document.getElementById('quote-bt');

const quot = document.querySelector('.quot');
const autho = document.querySelector('.autho');


quoteBt.addEventListener("click", () => {
	
    let random = Math.floor(Math.random() * quotm.length);
    quot.innerHTML = quotm[random].quot;
    autho.innerHTML = quotm[random].autho;
})





