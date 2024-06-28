//Youtube Lecture code adjusted https://www.youtube.com/watch?v=NMXrdrGx9B8
"use strict"
const $ = (id) => { return document.getElementById(id)}

window.onload = () => {
    const imageList = $("image-list"); //ul element
    const displayText = $("display-text"); //h1 element
    const mainDisplay = $("main-display");

   //Per the note below, this is returning a NodeList not an array
    var flagList = imageList.querySelectorAll("li img");     

    
    //Since it's a list you must use forEach()
    flagList.forEach(flagImage => {      
        //Add the event listener for each image
        flagImage.addEventListener("mouseover", () => {
            mainDisplay.src = flagImage.nextElementSibling.getAttribute("href")
            displayText.textContent = flagImage.nextElementSibling.getAttribute("title");
        })
    }) //end flag forEach

    //Reset display text on mouseout. Need to make it smoother somehow.
    imageList.addEventListener("mouseout", () => {
        
        displayText.textContent = "Countries and Flags";
    })



}
    


// //Dr. J's help
// const $ = (id) => { return document.getElementById(id); }

// window.onload = () => {

//     const displayText = $("display-text");  //using getElementById shouldn't have a # in front
//     const imageList = $("image-list"); //ul element

//     //returns a NodeList, not an array!
//     const flagsAndMaps = imageList.querySelectorAll("li img");  //get the images

//     flagsAndMaps.forEach(flagImage => {
//         //for each of the flag images, add a listener
//         flagImage.addEventListener("mouseover", () => {
//             displayText.textContent = flagImage.nextElementSibling.getAttribute("title");

//         });  //end add event listener
//     });

// }// end window onload

//Code found in the book below
/**Shamelessly stolen from the book/youtube lecture */

//Selector constant
// const $ = selector => document.querySelector(selector);
/*
//Adding event listener
document.addEventListener("DOMContentLoaded", () => {

    //Setting pertinent constants
    const displayText = $("#my-h1"); //H1 tag
    const mainDisplay = $("#main-display"); //Bigger picture for the map
    const flagImage = $("#country-flag");

    // Get all the <a> tags from the ul element (following code and comments from pg. 225)
    const imageLinks = $("#image-list").querySelectorAll("a");

    //Process the image links (i.e. put them in Image objects)
    for (let link of imageLinks) {

        //Preload the images
        const countryImage = new Image();
        countryImage.src = link.href;

        flagImage.addEventListener(onmouseover, evt => {

            //Set a new image and <h1> text
            mainDisplay.src = link.href;
            displayText.textContent = link.title;
        }) //end event listener
    }
})
*/

