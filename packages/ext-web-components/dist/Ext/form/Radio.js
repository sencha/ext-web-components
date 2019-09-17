import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Checkbox_Component from '../../Ext/field/Checkbox';

var Ext_form_Radio_Component =
/*#__PURE__*/
function (_Ext_field_Checkbox_C) {
  _inheritsLoose(Ext_form_Radio_Component, _Ext_field_Checkbox_C);

  //events
  //configs
  Ext_form_Radio_Component.XTYPE = function XTYPE() {
    return 'radio';
  };

  Ext_form_Radio_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_form_Radio_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_form_Radio_Component.METHODS = function METHODS() {
    return [{
      name: 'getGroupValue',
      "function": function _function() {
        return this.ext.getGroupValue();
      }
    }, {
      name: 'getSameGroupFields',
      "function": function _function() {
        return this.ext.getSameGroupFields();
      }
    }, {
      name: 'refreshGroupValues',
      "function": function _function(trigger) {
        return this.ext.refreshGroupValues(trigger);
      }
    }, {
      name: 'setGroupValue',
      "function": function _function(value) {
        return this.ext.setGroupValue(value);
      }
    }];
  };

  _createClass(Ext_form_Radio_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Checkbox_C.observedAttributes;

      for (var property in Ext_form_Radio_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_form_Radio_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_Radio_Component(propertiesobject, methods, events) {
    return _Ext_field_Checkbox_C.call(this, Object.assign(propertiesobject, Ext_form_Radio_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_form_Radio_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_form_Radio_Component.METHODS()), events.concat(Ext_form_Radio_Component.EVENTS())) || this; //this.XTYPE = Ext_form_Radio_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_form_Radio_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_form_Radio_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_form_Radio_Component.EVENTS());
  }

  var _proto = Ext_form_Radio_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Checkbox_C.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Checkbox_C.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_Radio_Component;
}(Ext_field_Checkbox_Component);

export { Ext_form_Radio_Component as default };