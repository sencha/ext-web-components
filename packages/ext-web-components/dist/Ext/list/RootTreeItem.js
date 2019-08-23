import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_list_AbstractTreeItem_Component from '../../Ext/list/AbstractTreeItem';

var Ext_list_RootTreeItem_Component =
/*#__PURE__*/
function (_Ext_list_AbstractTre) {
  _inheritsLoose(Ext_list_RootTreeItem_Component, _Ext_list_AbstractTre);

  //events
  //configs
  Ext_list_RootTreeItem_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_list_RootTreeItem_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_list_RootTreeItem_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_list_RootTreeItem_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_list_RootTreeItem_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_list_AbstractTre.observedAttributes;

      for (var property in Ext_list_RootTreeItem_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_list_RootTreeItem_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_list_RootTreeItem_Component() {
    var _this;

    _this = _Ext_list_AbstractTre.call(this, Ext_list_RootTreeItem_Component.METHODS(), Ext_list_RootTreeItem_Component.XTYPE(), Ext_list_RootTreeItem_Component.PROPERTIESOBJECT(), Ext_list_RootTreeItem_Component.EVENTS()) || this;
    _this.XTYPE = Ext_list_RootTreeItem_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_list_RootTreeItem_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_list_RootTreeItem_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_list_RootTreeItem_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_list_RootTreeItem_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_list_AbstractTre.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_list_AbstractTre.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_list_RootTreeItem_Component;
}(Ext_list_AbstractTreeItem_Component);

export { Ext_list_RootTreeItem_Component as default };