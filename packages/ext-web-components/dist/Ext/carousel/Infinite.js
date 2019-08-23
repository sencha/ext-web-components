import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_carousel_Carousel_Component from '../../Ext/carousel/Carousel';

var Ext_carousel_Infinite_Component =
/*#__PURE__*/
function (_Ext_carousel_Carouse) {
  _inheritsLoose(Ext_carousel_Infinite_Component, _Ext_carousel_Carouse);

  //events
  //configs
  Ext_carousel_Infinite_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_carousel_Infinite_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_carousel_Infinite_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_carousel_Infinite_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_carousel_Infinite_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_carousel_Carouse.observedAttributes;

      for (var property in Ext_carousel_Infinite_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_carousel_Infinite_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_carousel_Infinite_Component() {
    var _this;

    _this = _Ext_carousel_Carouse.call(this, Ext_carousel_Infinite_Component.METHODS(), Ext_carousel_Infinite_Component.XTYPE(), Ext_carousel_Infinite_Component.PROPERTIESOBJECT(), Ext_carousel_Infinite_Component.EVENTS()) || this;
    _this.XTYPE = Ext_carousel_Infinite_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_carousel_Infinite_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_carousel_Infinite_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_carousel_Infinite_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_carousel_Infinite_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_carousel_Carouse.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_carousel_Carouse.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_carousel_Infinite_Component;
}(Ext_carousel_Carousel_Component);

export { Ext_carousel_Infinite_Component as default };