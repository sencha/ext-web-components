import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Date_Component from '../../Ext/field/Date';

var Ext_field_DatePickerNative_Component =
/*#__PURE__*/
function (_Ext_field_Date_Compo) {
  _inheritsLoose(Ext_field_DatePickerNative_Component, _Ext_field_Date_Compo);

  //events
  //configs
  Ext_field_DatePickerNative_Component.XTYPE = function XTYPE() {
    return 'datepickernativefield';
  };

  Ext_field_DatePickerNative_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_field_DatePickerNative_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_field_DatePickerNative_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_field_DatePickerNative_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Date_Compo.observedAttributes;

      for (var property in Ext_field_DatePickerNative_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_DatePickerNative_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_DatePickerNative_Component(propertiesobject, methods, events) {
    return _Ext_field_Date_Compo.call(this, Object.assign(propertiesobject, Ext_field_DatePickerNative_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_field_DatePickerNative_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_field_DatePickerNative_Component.METHODS()), events.concat(Ext_field_DatePickerNative_Component.EVENTS())) || this; //this.XTYPE = Ext_field_DatePickerNative_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_DatePickerNative_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_field_DatePickerNative_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_field_DatePickerNative_Component.EVENTS());
  }

  var _proto = Ext_field_DatePickerNative_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Date_Compo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Date_Compo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_DatePickerNative_Component;
}(Ext_field_Date_Component);

export { Ext_field_DatePickerNative_Component as default };