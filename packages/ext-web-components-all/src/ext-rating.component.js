import Ext_ux_rating_Picker from './Ext/ux/rating/Picker.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtRatingComponent extends Ext_ux_rating_Picker {
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
//        window.customElements.define('ext-rating', ExtRatingComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-rating', HTMLParsedElement.withParsedCallback(ExtRatingComponent))
