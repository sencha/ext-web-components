import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Base_Component from '../../../Ext/field/trigger/Base';

var Ext_field_trigger_Component_Component =
/*#__PURE__*/
function (_Ext_field_trigger_Ba) {
  _inheritsLoose(Ext_field_trigger_Component_Component, _Ext_field_trigger_Ba);

  //events
  //configs
  Ext_field_trigger_Component_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_field_trigger_Component_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "component": ["Ext.Component"]
    };
  };

  Ext_field_trigger_Component_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_field_trigger_Component_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_field_trigger_Component_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_trigger_Ba.observedAttributes;

      for (var property in Ext_field_trigger_Component_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_trigger_Component_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_trigger_Component_Component() {
    var _this;

    _this = _Ext_field_trigger_Ba.call(this, Ext_field_trigger_Component_Component.METHODS(), Ext_field_trigger_Component_Component.XTYPE(), Ext_field_trigger_Component_Component.PROPERTIESOBJECT(), Ext_field_trigger_Component_Component.EVENTS()) || this;
    _this.XTYPE = Ext_field_trigger_Component_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_field_trigger_Component_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_field_trigger_Component_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_field_trigger_Component_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_field_trigger_Component_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_trigger_Ba.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_trigger_Ba.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_trigger_Component_Component;
}(Ext_field_trigger_Base_Component);

export { Ext_field_trigger_Component_Component as default };