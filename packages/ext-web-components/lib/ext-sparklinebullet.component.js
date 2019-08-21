import Ext_sparkline_Bullet_Component from './Ext/sparkline/Bullet'

export class ExtSparklinebulletComponent extends Ext_sparkline_Bullet_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-sparklinebullet', ExtSparklinebulletComponent);
    });
})();
