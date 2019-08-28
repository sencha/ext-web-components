import Ext_Audio_Component from './Ext/Audio'

export class ExtAudioComponent extends Ext_Audio_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-audio', ExtAudioComponent);
    });
})();
