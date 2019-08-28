import Ext_Image_Component from './Ext/Image'

export class ExtImgComponent extends Ext_Image_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-img', ExtImgComponent);
    });
})();
