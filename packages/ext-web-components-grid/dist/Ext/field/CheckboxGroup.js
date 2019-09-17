import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_FieldGroupContainer_Component from '../../Ext/field/FieldGroupContainer';

var Ext_field_CheckboxGroup_Component =
/*#__PURE__*/
function (_Ext_field_FieldGroup) {
  _inheritsLoose(Ext_field_CheckboxGroup_Component, _Ext_field_FieldGroup);

  //events
  //configs
  Ext_field_CheckboxGroup_Component.XTYPE = function XTYPE() {
    return 'checkboxgroup';
  };

  Ext_field_CheckboxGroup_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_field_CheckboxGroup_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_field_CheckboxGroup_Component.METHODS = function METHODS() {
    return [{
      name: 'getValue',
      "function": function _function() {
        return this.ext.getValue();
      }
    }, {
      name: 'setValue',
      "function": function _function(value) {
        return this.ext.setValue(value);
      }
    }];
  };

  _createClass(Ext_field_CheckboxGroup_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_FieldGroup.observedAttributes;

      for (var property in Ext_field_CheckboxGroup_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_CheckboxGroup_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_CheckboxGroup_Component() {
    var _this;

    _this = _Ext_field_FieldGroup.call(this) || this;
    _this.XTYPE = Ext_field_CheckboxGroup_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_field_CheckboxGroup_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_field_CheckboxGroup_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_field_CheckboxGroup_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_field_CheckboxGroup_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_FieldGroup.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_FieldGroup.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_CheckboxGroup_Component;
}(Ext_field_FieldGroupContainer_Component);

export { Ext_field_CheckboxGroup_Component as default };