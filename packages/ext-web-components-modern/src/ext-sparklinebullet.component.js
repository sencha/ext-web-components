//import Ext_sparkline_Bullet from '@sencha/ext-runtime-base/dist/./Ext/sparkline/Bullet.js';
import Ext_sparkline_Bullet from './Ext/sparkline/Bullet.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCSparklinebullet extends Ext_sparkline_Bullet {
    constructor() {
        super ([], []);
        this.xtype = 'sparklinebullet';
    }

}
window.customElements.define('ext-sparklinebullet', HTMLParsedElement.withParsedCallback(EWCSparklinebullet));

