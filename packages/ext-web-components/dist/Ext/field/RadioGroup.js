import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_FieldGroupContainer_Component from '../../Ext/field/FieldGroupContainer';

var Ext_field_RadioGroup_Component =
/*#__PURE__*/
function (_Ext_field_FieldGroup) {
  _inheritsLoose(Ext_field_RadioGroup_Component, _Ext_field_FieldGroup);

  //events
  //configs
  Ext_field_RadioGroup_Component.XTYPE = function XTYPE() {
    return 'radiogroup';
  };

  Ext_field_RadioGroup_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "simpleValue": ["boolean"]
    };
  };

  Ext_field_RadioGroup_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_field_RadioGroup_Component.METHODS = function METHODS() {
    return [{
      name: 'getChecked',
      "function": function _function(query) {
        return this.ext.getChecked(query);
      }
    }, {
      name: 'setValue',
      "function": function _function(value) {
        return this.ext.setValue(value);
      }
    }];
  };

  _createClass(Ext_field_RadioGroup_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_FieldGroup.observedAttributes;

      for (var property in Ext_field_RadioGroup_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_RadioGroup_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_RadioGroup_Component() {
    var _this;

    _this = _Ext_field_FieldGroup.call(this, Ext_field_RadioGroup_Component.METHODS(), Ext_field_RadioGroup_Component.XTYPE(), Ext_field_RadioGroup_Component.PROPERTIESOBJECT(), Ext_field_RadioGroup_Component.EVENTS()) || this;
    _this.XTYPE = Ext_field_RadioGroup_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_field_RadioGroup_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_field_RadioGroup_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_field_RadioGroup_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_field_RadioGroup_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_FieldGroup.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_FieldGroup.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_RadioGroup_Component;
}(Ext_field_FieldGroupContainer_Component);

export { Ext_field_RadioGroup_Component as default };