import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Trigger_Component from '../../../Ext/field/trigger/Trigger';

var Ext_field_trigger_Reveal_Component =
/*#__PURE__*/
function (_Ext_field_trigger_Tr) {
  _inheritsLoose(Ext_field_trigger_Reveal_Component, _Ext_field_trigger_Tr);

  //events
  //configs
  Ext_field_trigger_Reveal_Component.XTYPE = function XTYPE() {
    return 'revealtrigger';
  };

  Ext_field_trigger_Reveal_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_field_trigger_Reveal_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_field_trigger_Reveal_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_field_trigger_Reveal_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_trigger_Tr.observedAttributes;

      for (var property in Ext_field_trigger_Reveal_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_trigger_Reveal_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_trigger_Reveal_Component() {
    var _this;

    _this = _Ext_field_trigger_Tr.call(this) || this;
    _this.XTYPE = Ext_field_trigger_Reveal_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_field_trigger_Reveal_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_field_trigger_Reveal_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_field_trigger_Reveal_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_field_trigger_Reveal_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_trigger_Tr.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_trigger_Tr.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_trigger_Reveal_Component;
}(Ext_field_trigger_Trigger_Component);

export { Ext_field_trigger_Reveal_Component as default };