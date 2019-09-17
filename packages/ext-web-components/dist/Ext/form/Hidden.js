import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Input_Component from '../../Ext/field/Input';

var Ext_form_Hidden_Component =
/*#__PURE__*/
function (_Ext_field_Input_Comp) {
  _inheritsLoose(Ext_form_Hidden_Component, _Ext_field_Input_Comp);

  //events
  //configs
  Ext_form_Hidden_Component.XTYPE = function XTYPE() {
    return 'hiddenfield';
  };

  Ext_form_Hidden_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "inputType": ["any"]
    };
  };

  Ext_form_Hidden_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_form_Hidden_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_form_Hidden_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Input_Comp.observedAttributes;

      for (var property in Ext_form_Hidden_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_form_Hidden_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_Hidden_Component(propertiesobject, methods, events) {
    return _Ext_field_Input_Comp.call(this, Object.assign(propertiesobject, Ext_form_Hidden_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_form_Hidden_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_form_Hidden_Component.METHODS()), events.concat(Ext_form_Hidden_Component.EVENTS())) || this; //this.XTYPE = Ext_form_Hidden_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_form_Hidden_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_form_Hidden_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_form_Hidden_Component.EVENTS());
  }

  var _proto = Ext_form_Hidden_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Input_Comp.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Input_Comp.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_Hidden_Component;
}(Ext_field_Input_Component);

export { Ext_form_Hidden_Component as default };