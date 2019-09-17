import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Field_Component from '../../Ext/field/Field';

var Ext_field_Input_Component =
/*#__PURE__*/
function (_Ext_field_Field_Comp) {
  _inheritsLoose(Ext_field_Input_Component, _Ext_field_Field_Comp);

  //events
  //configs
  Ext_field_Input_Component.XTYPE = function XTYPE() {
    return 'inputfield';
  };

  Ext_field_Input_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "inputType": ["string"],
      "inputValue": ["any"],
      "readOnly": ["boolean"]
    };
  };

  Ext_field_Input_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_field_Input_Component.METHODS = function METHODS() {
    return [{
      name: 'setInputAttribute',
      "function": function _function(attribute, newValue) {
        return this.ext.setInputAttribute(attribute, newValue);
      }
    }];
  };

  _createClass(Ext_field_Input_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Field_Comp.observedAttributes;

      for (var property in Ext_field_Input_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_Input_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_Input_Component(propertiesobject, methods, events) {
    return _Ext_field_Field_Comp.call(this, Object.assign(propertiesobject, Ext_field_Input_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_field_Input_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_field_Input_Component.METHODS()), events.concat(Ext_field_Input_Component.EVENTS())) || this; //this.XTYPE = Ext_field_Input_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Input_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_field_Input_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_field_Input_Component.EVENTS());
  }

  var _proto = Ext_field_Input_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Field_Comp.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Field_Comp.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_Input_Component;
}(Ext_field_Field_Component);

export { Ext_field_Input_Component as default };