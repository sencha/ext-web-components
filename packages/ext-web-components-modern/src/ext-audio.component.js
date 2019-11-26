//import Ext_Audio from '@sencha/ext-runtime-base/dist/./Ext/Audio.js';
import Ext_Audio from './Ext/Audio.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCAudio extends Ext_Audio {
    constructor() {
        super ([], []);
        this.xtype = 'audio';
    }

}
window.customElements.define('ext-audio', HTMLParsedElement.withParsedCallback(EWCAudio));

