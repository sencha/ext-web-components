import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Expand_Component from '../../../Ext/field/trigger/Expand';

var Ext_field_trigger_Time_Component =
/*#__PURE__*/
function (_Ext_field_trigger_Ex) {
  _inheritsLoose(Ext_field_trigger_Time_Component, _Ext_field_trigger_Ex);

  //events
  //configs
  Ext_field_trigger_Time_Component.XTYPE = function XTYPE() {
    return 'timetrigger';
  };

  Ext_field_trigger_Time_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_field_trigger_Time_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_field_trigger_Time_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_field_trigger_Time_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_trigger_Ex.observedAttributes;

      for (var property in Ext_field_trigger_Time_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_trigger_Time_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_trigger_Time_Component() {
    var _this;

    _this = _Ext_field_trigger_Ex.call(this, Ext_field_trigger_Time_Component.METHODS(), Ext_field_trigger_Time_Component.XTYPE(), Ext_field_trigger_Time_Component.PROPERTIESOBJECT(), Ext_field_trigger_Time_Component.EVENTS()) || this;
    _this.XTYPE = Ext_field_trigger_Time_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_field_trigger_Time_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_field_trigger_Time_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_field_trigger_Time_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_field_trigger_Time_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_trigger_Ex.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_trigger_Ex.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_trigger_Time_Component;
}(Ext_field_trigger_Expand_Component);

export { Ext_field_trigger_Time_Component as default };