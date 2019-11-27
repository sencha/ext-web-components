//import Ext_slider_Thumb from '@sencha/ext-runtime-base/dist/./Ext/slider/Thumb.js';
import Ext_slider_Thumb from './Ext/slider/Thumb.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCThumb extends Ext_slider_Thumb {
    constructor() {
        super ([], []);
        this.xtype = 'thumb';
    }

}
window.customElements.define('ext-thumb', HTMLParsedElement.withParsedCallback(EWCThumb));

