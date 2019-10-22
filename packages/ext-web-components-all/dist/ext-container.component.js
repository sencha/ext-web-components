import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_container_Container from './Ext/container/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtContainer =
/*#__PURE__*/
function (_Ext_container_Contai) {
  _inheritsLoose(ExtContainer, _Ext_container_Contai);

  function ExtContainer() {
    var _this;

    _this = _Ext_container_Contai.call(this, [], []) || this;
    _this.xtype = 'container';
    return _this;
  }

  return ExtContainer;
}(Ext_container_Container);

export { ExtContainer as default };
window.customElements.define('ext-container', HTMLParsedElement.withParsedCallback(ExtContainer));