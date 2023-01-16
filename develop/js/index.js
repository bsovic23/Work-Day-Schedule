console.log('this js script works');

// Create DOM element and function for the current date - function should be immediately called to load to the screen
//  <p id="currentDay" class="lead"></p>       = this is the block of code for the current date and time

// IF block = current or past or future then class name changes to css class names



////////////////////////////////////////////////////////////// 
// Brit created below


// Creating Date and Time Function 

number = 2;
timeNumber = 0;

const date = function() {

    const datefunction = new Date();

    let day = datefunction.getDate();
    let month = datefunction.getMonth() + 1;
    let year = datefunction.getFullYear();

    const datehtml = month + "-" + day + "-" + year;

    const datehtmlnew = `<div>${datehtml}</div>`

    const $currentDayHtml = document.querySelector("#currentDay");

    $currentDayHtml.innerHTML = datehtmlnew;
};

const time = function() {

    const d = new Date();
    let hour = d.getHours();

    console.log(hour);
    // Insert function that changes the color of the blocks depending on time
};

time();
date();


// Create functions for taking in the notes for the timeblocks -> should each have id that puts them in the correct block

function saveNote() {
    var noteText = document.getElementById('text');
    var noteArray = noteText.value.trim();
    console.log(noteArray);
};




