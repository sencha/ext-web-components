import Ext_sparkline_Bullet from './Ext/sparkline/Bullet.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSparklinebullet extends Ext_sparkline_Bullet {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'sparklinebullet'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinebullet', ExtSparklinebullet);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-sparklinebullet', HTMLParsedElement.withParsedCallback(ExtSparklinebullet))
//export default reactify(ExtSparklinebullet);