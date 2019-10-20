import Ext_Audio from './Ext/Audio.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtAudio extends Ext_Audio {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'audio'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-audio', ExtAudio);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-audio', HTMLParsedElement.withParsedCallback(ExtAudio))
//export default reactify(ExtAudio);