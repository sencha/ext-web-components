import Ext_sparkline_Bullet_Component from './Ext/sparkline/Bullet'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSparklinebulletComponent extends Ext_sparkline_Bullet_Component {
    constructor() {
        super ()
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
