//import Ext_FlashComponent from '@sencha/ext-runtime-base/dist/./Ext/FlashComponent.js';
import Ext_FlashComponent from './Ext/FlashComponent.js';
import ElementParser from './ElementParser.js';

export default class EWCFlash extends Ext_FlashComponent {
    constructor() {
        super ([], []);
        this.xtype = 'flash';
    }

}
window.customElements.define('ext-flash', ElementParser.withParsedCallback(EWCFlash));

