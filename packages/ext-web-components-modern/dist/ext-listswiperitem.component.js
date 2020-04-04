import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_dataview_listswiper_Item from './Ext/dataview/listswiper/Item.js';
import ElementParser from './common/ElementParser.js';

var EWCListswiperitem = /*#__PURE__*/function (_Ext_dataview_listswi) {
  _inheritsLoose(EWCListswiperitem, _Ext_dataview_listswi);

  var _super = _createSuper(EWCListswiperitem);

  function EWCListswiperitem() {
    var _this;

    _this = _Ext_dataview_listswi.call(this, [], []) || this;
    _this.xtype = 'listswiperitem';
    return _this;
  }

  return EWCListswiperitem;
}(Ext_dataview_listswiper_Item);

export { EWCListswiperitem as default };

try {
  if (window.customElements.get('ext-listswiperitem') == undefined) {
    window.customElements.define('ext-listswiperitem', ElementParser.withParsedCallback(EWCListswiperitem));
  }
} catch (e) {
  if (window.customElements.get('ext-listswiperitem') == undefined) {
    window.customElements.define('ext-listswiperitem', EWCListswiperitem);
  }
}