import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Widget_Component from '../Ext/Widget';

var Ext_AbstractComponent_Component =
/*#__PURE__*/
function (_Ext_Widget_Component) {
  _inheritsLoose(Ext_AbstractComponent_Component, _Ext_Widget_Component);

  //events
  //configs
  Ext_AbstractComponent_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_AbstractComponent_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_AbstractComponent_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_AbstractComponent_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_AbstractComponent_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Widget_Component.observedAttributes;

      for (var property in Ext_AbstractComponent_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_AbstractComponent_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_AbstractComponent_Component() {
    var _this;

    _this = _Ext_Widget_Component.call(this) || this;
    _this.XTYPE = Ext_AbstractComponent_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_AbstractComponent_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_AbstractComponent_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_AbstractComponent_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_AbstractComponent_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Widget_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Widget_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_AbstractComponent_Component;
}(Ext_Widget_Component);

export { Ext_AbstractComponent_Component as default };