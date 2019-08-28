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

  function Ext_field_Time_Component() {
    var _this;

    _this = _Ext_field_Picker_Com.call(this, Ext_field_Time_Component.METHODS(), Ext_field_Time_Component.XTYPE(), Ext_field_Time_Component.PROPERTIESOBJECT(), Ext_field_Time_Component.EVENTS()) || this;
    _this.XTYPE = Ext_field_Time_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_field_Time_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_field_Time_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_field_Time_Component.EVENTS());
    return _this;
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