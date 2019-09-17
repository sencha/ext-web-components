import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base_Component from '../Ext/Base';

var Ext_Evented_Component =
/*#__PURE__*/
function (_Ext_Base_Component) {
  _inheritsLoose(Ext_Evented_Component, _Ext_Base_Component);

  //events
  //configs
  Ext_Evented_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_Evented_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_Evented_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_Evented_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_Evented_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base_Component.observedAttributes;

      for (var property in Ext_Evented_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Evented_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Evented_Component() {
    var _this;

    _this = _Ext_Base_Component.call(this) || this;
    _this.XTYPE = Ext_Evented_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_Evented_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_Evented_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_Evented_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_Evented_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Evented_Component;
}(Ext_Base_Component);

export { Ext_Evented_Component as default };