import Ext_Carousel_Component from './Ext/Carousel'

export class ExtCarouselComponent extends Ext_Carousel_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-carousel', ExtCarouselComponent);
    });
})();
