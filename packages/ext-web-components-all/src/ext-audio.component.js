import Ext_Audio from './Ext/Audio.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtAudioComponent extends Ext_Audio {
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
//        window.customElements.define('ext-audio', ExtAudioComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-audio', HTMLParsedElement.withParsedCallback(ExtAudioComponent))
