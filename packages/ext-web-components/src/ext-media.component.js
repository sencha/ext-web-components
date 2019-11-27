//import Ext_Media from '@sencha/ext-runtime-base/dist/./Ext/Media.js';
import Ext_Media from './Ext/Media.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCMedia extends Ext_Media {
    constructor() {
        super ([], []);
        this.xtype = 'media';
    }

}
window.customElements.define('ext-media', HTMLParsedElement.withParsedCallback(EWCMedia));

