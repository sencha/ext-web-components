//import Ext_ux_rating_Picker from '@sencha/ext-runtime-base/dist/./Ext/ux/rating/Picker.js';
import Ext_ux_rating_Picker from './Ext/ux/rating/Picker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCRating extends Ext_ux_rating_Picker {
    constructor() {
        super ([], []);
        this.xtype = 'rating';
    }

}
window.customElements.define('ext-rating', HTMLParsedElement.withParsedCallback(EWCRating));

