//import Ext_menu_ColorPicker from '@sencha/ext-runtime-base/dist/./Ext/menu/ColorPicker.js';
import Ext_menu_ColorPicker from './Ext/menu/ColorPicker.js';
import ElementParser from './ElementParser.js';

export default class EWCColormenu extends Ext_menu_ColorPicker {
    constructor() {
        super ([], []);
        this.xtype = 'colormenu';
    }

}
window.customElements.define('ext-colormenu', ElementParser.withParsedCallback(EWCColormenu));

