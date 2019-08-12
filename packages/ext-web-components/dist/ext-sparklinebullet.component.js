import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Bullet_Component from './Ext/sparkline/Bullet';
export var ExtSparklinebulletComponent =
/*#__PURE__*/
function (_Ext_sparkline_Bullet) {
  _inheritsLoose(ExtSparklinebulletComponent, _Ext_sparkline_Bullet);

  function ExtSparklinebulletComponent() {
    return _Ext_sparkline_Bullet.call(this, '', '', {}, '') || this;
  }

  return ExtSparklinebulletComponent;
}(Ext_sparkline_Bullet_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-sparklinebullet', ExtSparklinebulletComponent);
  });
})();