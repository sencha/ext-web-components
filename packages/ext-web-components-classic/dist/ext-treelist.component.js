import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_list_Tree from './Ext/list/Tree.js';
import ElementParser from './common/ElementParser.js';

var EWCTreelist = /*#__PURE__*/function (_Ext_list_Tree) {
  _inheritsLoose(EWCTreelist, _Ext_list_Tree);

  var _super = _createSuper(EWCTreelist);

  function EWCTreelist() {
    var _this;

    _this = _Ext_list_Tree.call(this, [], []) || this;
    _this.xtype = 'treelist';
    return _this;
  }

  return EWCTreelist;
}(Ext_list_Tree);

export { EWCTreelist as default };

try {
  if (window.customElements.get('ext-treelist') == undefined) {
    window.customElements.define('ext-treelist', ElementParser.withParsedCallback(EWCTreelist));
  }
} catch (e) {
  if (window.customElements.get('ext-treelist') == undefined) {
    window.customElements.define('ext-treelist', EWCTreelist);
  }
}