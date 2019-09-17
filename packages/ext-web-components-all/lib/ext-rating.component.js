import Ext_ux_rating_Picker_Component from './Ext/ux/rating/Picker'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtRatingComponent extends Ext_ux_rating_Picker_Component {
    constructor() {
        super ()
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
