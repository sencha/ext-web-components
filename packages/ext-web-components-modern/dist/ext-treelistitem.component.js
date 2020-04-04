import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_list_TreeItem from './Ext/list/TreeItem.js';
import ElementParser from './common/ElementParser.js';

var EWCTreelistitem = /*#__PURE__*/function (_Ext_list_TreeItem) {
  _inheritsLoose(EWCTreelistitem, _Ext_list_TreeItem);

  var _super = _createSuper(EWCTreelistitem);

  function EWCTreelistitem() {
    var _this;

    _this = _Ext_list_TreeItem.call(this, [], []) || this;
    _this.xtype = 'treelistitem';
    return _this;
  }

  return EWCTreelistitem;
}(Ext_list_TreeItem);

export { EWCTreelistitem as default };

try {
  if (window.customElements.get('ext-treelistitem') == undefined) {
    window.customElements.define('ext-treelistitem', ElementParser.withParsedCallback(EWCTreelistitem));
  }
} catch (e) {
  if (window.customElements.get('ext-treelistitem') == undefined) {
    window.customElements.define('ext-treelistitem', EWCTreelistitem);
  }
}