import Ext_Audio from './Ext/Audio.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtAudio extends Ext_Audio {
    constructor() {
        super ([],[])
        this.xtype = 'audio';
    }
}
window.customElements.define('ext-audio', HTMLParsedElement.withParsedCallback(ExtAudio))
