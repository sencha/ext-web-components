import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_button_Segmented from '@sencha/ext-runtime-base/dist/./Ext/button/Segmented.js';
import Ext_button_Segmented from './Ext/button/Segmented.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCSegmentedbutton =
/*#__PURE__*/
function (_Ext_button_Segmented) {
  _inheritsLoose(EWCSegmentedbutton, _Ext_button_Segmented);

  function EWCSegmentedbutton() {
    var _this;

    _this = _Ext_button_Segmented.call(this, [], []) || this;
    _this.xtype = 'segmentedbutton';
    return _this;
  }

  return EWCSegmentedbutton;
}(Ext_button_Segmented);

export { EWCSegmentedbutton as default };
window.customElements.define('ext-segmentedbutton', HTMLParsedElement.withParsedCallback(EWCSegmentedbutton));