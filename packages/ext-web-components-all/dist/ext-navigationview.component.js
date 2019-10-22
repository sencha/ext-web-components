import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_NavigationView from './Ext/NavigationView.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtNavigationview =
/*#__PURE__*/
function (_Ext_NavigationView) {
  _inheritsLoose(ExtNavigationview, _Ext_NavigationView);

  function ExtNavigationview() {
    var _this;

    _this = _Ext_NavigationView.call(this, [], []) || this;
    _this.xtype = 'navigationview';
    return _this;
  }

  return ExtNavigationview;
}(Ext_NavigationView);

export { ExtNavigationview as default };
window.customElements.define('ext-navigationview', HTMLParsedElement.withParsedCallback(ExtNavigationview));