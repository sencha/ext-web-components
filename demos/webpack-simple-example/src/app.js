
// ES2015 imports. Since it's a class name we can import it through curly
// brackets.
import { AlertBox } from './alert-box/alert-box';

import writeText from './write-text/write-text';
// This also works
// const writeText = require('./write-text/write-text.js');

// Since it's a class, we need to instantiate it before we can use it.
const alertUser = new AlertBox();


/**
 * This is where the magic happens.
 * document.addEventListener('DOMContentLoaded') will allow us to wait for the 
 * whole document to be loaded and then we will be able to fetch for the elements 
 * and attach an event listener to each one of them. 
 * 
 * We do it this way, because Webpack scopes and changes the class names. Inspect the 
 * /dist/main.js file to see what I'm talking about. This is good, since it won't pollute
 * the global scope (Which in bigger projects has been the culprit of many bugs and problems)
 * 
 */
document.addEventListener('DOMContentLoaded', () => {

    /**
     * How to use Event Listeners:
     * 
     * It requires 2 steps:
     * 1) We fetch the object. We need to retrieve the object from the DOM by using a document retriever. 
     * 
     * These methods are: 
     * document.getElementById()
     * document.querySelector() -- Similar to jQuery
     * document.querySelectorAll()
     * document.getElementsByClassName()
     * document.getElementsByName()
     * document.getElementsByTagName()
     * document.getElementsByTagNameNS()
     * 
     * There are more advance uses of these "retrievers", but let's keep it simple. 
     * 
     * 2) We attach the event listener:
     * We need to store the retrieved element in a variable (recommended).
     * 
     * const element = document.querySelector('button');
     * 
     * Then we attach the event listener:
     * element.addEventListener('click', myFunction);
     * 
     * Whereas myFunction is the function (without parenthesis!! Otherwise it executes it!!) that
     * you want to call. 
     * 
     * See this as the equivalent of:
     * <button click="myFunction()">My Button</button>
     * 
     * You can see the event listener list in the panel at the left in MDN:
     * https://developer.mozilla.org/en-US/docs/Web/API/EventListener
     * 
     */


    const alertButton = document.getElementById('js-button');
    alertButton.addEventListener('click', alertUser.sayHi);

    const pTagButton = document.getElementById('js-write-text-button');
    const pTag = document.querySelector('p');
    /**
     * This is another variation. We create an anonymous function (Search more about it online)
     * and we call the function. 
     */
    pTagButton.addEventListener('click', () => {
        writeText(pTag)
    });
    
    
    
    /**
     * The approach below is cleaner, and it works! I also recommend it over the above method
     * because it allows you to remove the event listener by doing 
     * pTagButton.removeEventListener('click', writeText). You can't do this via anonymous functions
     */
    // pTagButton.addEventListener('click', writeText.bind(this, pTag));
    

});