//import Ext_draw_Component from '@sencha/ext-runtime-base/dist/./Ext/draw/Component.js';
import Ext_draw_Component from './Ext/draw/Component.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCDraw extends Ext_draw_Component {
    constructor() {
        super ([], []);
        this.xtype = 'draw';
    }

}
window.customElements.define('ext-draw', HTMLParsedElement.withParsedCallback(EWCDraw));

