import Ext_sparkline_Bullet from './Ext/sparkline/Bullet.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtSparklinebullet extends Ext_sparkline_Bullet {
    constructor() {
        super ([],[])
        this.xtype = 'sparklinebullet';
    }
}
window.customElements.define('ext-sparklinebullet', HTMLParsedElement.withParsedCallback(ExtSparklinebullet))
