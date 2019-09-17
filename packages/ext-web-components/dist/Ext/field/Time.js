import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Picker_Component from '../../Ext/field/Picker';

var Ext_field_Time_Component =
/*#__PURE__*/
function (_Ext_field_Picker_Com) {
  _inheritsLoose(Ext_field_Time_Component, _Ext_field_Picker_Com);

  //events
  //configs
  Ext_field_Time_Component.XTYPE = function XTYPE() {
    return 'timefield';
  };

  Ext_field_Time_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "altFormats": ["string", "string[]"],
      "format": ["string"]
    };
  };

  Ext_field_Time_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_field_Time_Component.METHODS = function METHODS() {
    return [{
      name: 'onPickerChange',
      "function": function _function(picker, value) {
        return this.ext.onPickerChange(picker, value);
      }
    }];
  };

  _createClass(Ext_field_Time_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Picker_Com.observedAttributes;

      for (var property in Ext_field_Time_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_Time_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_Time_Component(propertiesobject, methods, events) {
    return _Ext_field_Picker_Com.call(this, Object.assign(propertiesobject, Ext_field_Time_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_field_Time_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_field_Time_Component.METHODS()), events.concat(Ext_field_Time_Component.EVENTS())) || this; //this.XTYPE = Ext_field_Time_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Time_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_field_Time_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_field_Time_Component.EVENTS());
  }

  var _proto = Ext_field_Time_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Picker_Com.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Picker_Com.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_Time_Component;
}(Ext_field_Picker_Component);

export { Ext_field_Time_Component as default };