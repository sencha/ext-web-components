import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_scroll_indicator_Indicator_Component from '../../../Ext/scroll/indicator/Indicator';

var Ext_scroll_indicator_Bar_Component =
/*#__PURE__*/
function (_Ext_scroll_indicator) {
  _inheritsLoose(Ext_scroll_indicator_Bar_Component, _Ext_scroll_indicator);

  //events
  //configs
  Ext_scroll_indicator_Bar_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_scroll_indicator_Bar_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "stylesheet": ["any"]
    };
  };

  Ext_scroll_indicator_Bar_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_scroll_indicator_Bar_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_scroll_indicator_Bar_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_scroll_indicator.observedAttributes;

      for (var property in Ext_scroll_indicator_Bar_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_scroll_indicator_Bar_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_scroll_indicator_Bar_Component() {
    var _this;

    _this = _Ext_scroll_indicator.call(this, Ext_scroll_indicator_Bar_Component.METHODS(), Ext_scroll_indicator_Bar_Component.XTYPE(), Ext_scroll_indicator_Bar_Component.PROPERTIESOBJECT(), Ext_scroll_indicator_Bar_Component.EVENTS()) || this;
    _this.XTYPE = Ext_scroll_indicator_Bar_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_scroll_indicator_Bar_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_scroll_indicator_Bar_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_scroll_indicator_Bar_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_scroll_indicator_Bar_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_scroll_indicator.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_scroll_indicator.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_scroll_indicator_Bar_Component;
}(Ext_scroll_indicator_Indicator_Component);

export { Ext_scroll_indicator_Bar_Component as default };