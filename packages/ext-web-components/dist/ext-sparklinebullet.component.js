import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Bullet_Component from './Ext/sparkline/Bullet';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSparklinebulletComponent =
/*#__PURE__*/
function (_Ext_sparkline_Bullet) {
  _inheritsLoose(ExtSparklinebulletComponent, _Ext_sparkline_Bullet);

  function ExtSparklinebulletComponent() {
    var _this;

    _this = _Ext_sparkline_Bullet.call(this, {}, [], []) || this;
    _this.xtype = 'sparklinebullet';
    return _this;
  }

  return ExtSparklinebulletComponent;
}(Ext_sparkline_Bullet_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinebullet', ExtSparklinebulletComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-sparklinebullet', HTMLParsedElement.withParsedCallback(ExtSparklinebulletComponent));