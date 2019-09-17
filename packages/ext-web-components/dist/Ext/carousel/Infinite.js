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

  function Ext_carousel_Infinite_Component(propertiesobject, methods, events) {
    return _Ext_carousel_Carouse.call(this, Object.assign(propertiesobject, Ext_carousel_Infinite_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_carousel_Infinite_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_carousel_Infinite_Component.METHODS()), events.concat(Ext_carousel_Infinite_Component.EVENTS())) || this; //this.XTYPE = Ext_carousel_Infinite_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_carousel_Infinite_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_carousel_Infinite_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_carousel_Infinite_Component.EVENTS());
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