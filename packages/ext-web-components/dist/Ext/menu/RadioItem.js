import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_CheckItem_Component from '../../Ext/menu/CheckItem';

var Ext_menu_RadioItem_Component =
/*#__PURE__*/
function (_Ext_menu_CheckItem_C) {
  _inheritsLoose(Ext_menu_RadioItem_Component, _Ext_menu_CheckItem_C);

  //events
  //configs
  Ext_menu_RadioItem_Component.XTYPE = function XTYPE() {
    return 'menuradioitem';
  };

  Ext_menu_RadioItem_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "allowUncheck": ["boolean"],
      "group": ["string"],
      "name": ["string"]
    };
  };

  Ext_menu_RadioItem_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_menu_RadioItem_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_menu_RadioItem_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_menu_CheckItem_C.observedAttributes;

      for (var property in Ext_menu_RadioItem_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_menu_RadioItem_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_menu_RadioItem_Component() {
    var _this;

    _this = _Ext_menu_CheckItem_C.call(this, Ext_menu_RadioItem_Component.METHODS(), Ext_menu_RadioItem_Component.XTYPE(), Ext_menu_RadioItem_Component.PROPERTIESOBJECT(), Ext_menu_RadioItem_Component.EVENTS()) || this;
    _this.XTYPE = Ext_menu_RadioItem_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_menu_RadioItem_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_menu_RadioItem_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_menu_RadioItem_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_menu_RadioItem_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_menu_CheckItem_C.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_menu_CheckItem_C.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_menu_RadioItem_Component;
}(Ext_menu_CheckItem_Component);

export { Ext_menu_RadioItem_Component as default };