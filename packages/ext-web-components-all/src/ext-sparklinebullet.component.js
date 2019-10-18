import Ext_sparkline_Bullet from './Ext/sparkline/Bullet.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtSparklinebulletComponent extends Ext_sparkline_Bullet {
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
//        window.customElements.define('ext-sparklinebullet', ExtSparklinebulletComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-sparklinebullet', HTMLParsedElement.withParsedCallback(ExtSparklinebulletComponent))
