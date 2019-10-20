import Ext_ux_rating_Picker from './Ext/ux/rating/Picker.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtRating extends Ext_ux_rating_Picker {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'rating'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-rating', ExtRating);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-rating', HTMLParsedElement.withParsedCallback(ExtRating))
//export default reactify(ExtRating);