import Ext_Audio_Component from './Ext/Audio'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtAudioComponent extends Ext_Audio_Component {
    constructor() {
        super ()
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
