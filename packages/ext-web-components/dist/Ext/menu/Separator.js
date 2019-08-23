import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../../Ext/Component';

var Ext_menu_Separator_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_menu_Separator_Component, _Ext_Component_Compon);

  //events
  //configs
  Ext_menu_Separator_Component.XTYPE = function XTYPE() {
    return 'menuseparator';
  };

  Ext_menu_Separator_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_menu_Separator_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_menu_Separator_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_menu_Separator_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_menu_Separator_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_menu_Separator_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_menu_Separator_Component() {
    var _this;

    _this = _Ext_Component_Compon.call(this, Ext_menu_Separator_Component.METHODS(), Ext_menu_Separator_Component.XTYPE(), Ext_menu_Separator_Component.PROPERTIESOBJECT(), Ext_menu_Separator_Component.EVENTS()) || this;
    _this.XTYPE = Ext_menu_Separator_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_menu_Separator_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_menu_Separator_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_menu_Separator_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_menu_Separator_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_menu_Separator_Component;
}(Ext_Component_Component);

export { Ext_menu_Separator_Component as default };