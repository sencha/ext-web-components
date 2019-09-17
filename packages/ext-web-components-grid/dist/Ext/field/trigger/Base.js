import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Widget_Component from '../../../Ext/Widget';

var Ext_field_trigger_Base_Component =
/*#__PURE__*/
function (_Ext_Widget_Component) {
  _inheritsLoose(Ext_field_trigger_Base_Component, _Ext_Widget_Component);

  //events
  //configs
  Ext_field_trigger_Base_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_field_trigger_Base_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "field": ["Ext.field.Text"],
      "group": ["string"],
      "name": ["string"],
      "side": ["'left'", "'right'"],
      "triggers": ["any"]
    };
  };

  Ext_field_trigger_Base_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_field_trigger_Base_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_field_trigger_Base_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Widget_Component.observedAttributes;

      for (var property in Ext_field_trigger_Base_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_trigger_Base_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_trigger_Base_Component() {
    var _this;

    _this = _Ext_Widget_Component.call(this) || this;
    _this.XTYPE = Ext_field_trigger_Base_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_field_trigger_Base_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_field_trigger_Base_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_field_trigger_Base_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_field_trigger_Base_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Widget_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Widget_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_trigger_Base_Component;
}(Ext_Widget_Component);

export { Ext_field_trigger_Base_Component as default };