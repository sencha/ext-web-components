import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_NavigationView from '@sencha/ext-runtime-base/dist/./Ext/NavigationView.js';
import Ext_NavigationView from './Ext/NavigationView.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCNavigationview =
/*#__PURE__*/
function (_Ext_NavigationView) {
  _inheritsLoose(EWCNavigationview, _Ext_NavigationView);

  function EWCNavigationview() {
    var _this;

    _this = _Ext_NavigationView.call(this, [], []) || this;
    _this.xtype = 'navigationview';
    return _this;
  }

  return EWCNavigationview;
}(Ext_NavigationView);

export { EWCNavigationview as default };
window.customElements.define('ext-navigationview', HTMLParsedElement.withParsedCallback(EWCNavigationview));