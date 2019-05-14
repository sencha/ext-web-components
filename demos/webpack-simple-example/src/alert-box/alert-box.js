// Says Hello to the user when clicked!

/**
 * This format uses the ES2015/ES6 class. 
 * 
 * You define an export before 'class' and you then import 
 * it by referencing the path of this file and then referring it
 * with curly braces:
 * 
 * import { AlertBox } from './alert-box/alert-box;
 * 
 * Note that AlertBox is the same name as your class!
 * 
 */
export class AlertBox {
    sayHi() {
        alert("Hello 😊");
    }
}