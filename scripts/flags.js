const $ = (id) => { return document.getElementById(id); }

window.onload = () => {

    const displayText = $("#display-text");
    const imageList = $("image-list"); //ul element
    const flagsAndMaps = imageList.querySelector("li");

    for (flag in flagsAndMaps) {
        flag.onmouseover = () => {
            displayText.textContent = `${flag.getAttribute("title")}`;
        }
    }
    
}




// //Youtube Lecture code adjusted https://www.youtube.com/watch?v=NMXrdrGx9B8
// "use strict"
// const $ = (id) => { return document.getElementById(id)}

// window.onload = () => {
//     const imageList = $("image-list"); //ul element
//     const flagList = $("country-flag"); //li > img elements
//     const displayText = $("display-text"); //h1 element
//     const mainDisplay = $("main-display"); //p element housing the main display (maps)

//     var mapImages = imageList.getElementsByTagName("a");
//     var flagImages = imageList.getElementsByTagName("img");    

//     var i, mapImage, link;
//     for (i = 0; i < mapImages.length; i++) {

//         //preload the image
//         mapImage = new Image();
//         mapImage.src = mapImages[i].getAttribute("href");

//         //Attach the event handler to the FLAGS
//         var j, flag;
//         for (j = 0; j < flagImages.length; j++ ) {
//             flag = flagImages[j];
//             flag.onmouseover = (e) => {
//                 flag = this; //Hopefully you work
            
//                 //set the new image and caption
//                 //mainDisplay.src = link.getAttribute("href");
//                 displayText.textContent = mapImages.getAttribute("title");
            
//                 //Cancel default action of the event            
//                 if(e.preventDefault) {e.preventDefault();}
                
//         }
//     }
//     }
// }



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

